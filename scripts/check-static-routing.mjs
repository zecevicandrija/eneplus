import assert from 'node:assert/strict';
import {readFileSync, readdirSync} from 'node:fs';
import {load} from 'cheerio';
import matter from 'gray-matter';
import {routingConfig} from '../src/i18n/routing-config.mjs';
import nextConfig from '../next.config.mjs';

// Run against `npm run start -- --port 3100` after a production build.
const origin = process.env.ROUTING_TEST_ORIGIN || 'http://localhost:3100';
const {locales, pathnames} = routingConfig;
const publicPath = (locale, pathname) => `/${locale}${pathname === '/' ? '' : pathname}`;
let checked = 0;

async function checkPage(path, locale, alternate) {
    const response = await fetch(`${origin}${path}`, {redirect: 'manual'});
    assert.equal(response.status, 200, path);
    const $ = load(await response.text());
    assert.equal($('html').attr('lang'), locale, `${path}: language`);
    assert.ok($('h1, h2').text().trim(), `${path}: prerendered content`);
    assert.doesNotMatch($('meta[name="robots"]').attr('content') || '', /noindex/, path);
    const canonical = $('link[rel="canonical"]').attr('href');
    if (canonical) assert.equal(new URL(canonical).pathname, path, `${path}: canonical`);
    if (alternate) {
        assert.equal($('a[aria-label="Toggle Language"]').first().attr('href'), alternate, `${path}: language switch`);
    }
    for (const link of $('link[rel="alternate"][hreflang]').toArray()) {
        const href = $(link).attr('href');
        const target = await fetch(`${origin}${new URL(href).pathname}`, {redirect: 'manual'});
        assert.equal(target.status, 200, `${path}: hreflang ${href}`);
    }
    checked++;
    return response;
}

for (const [internal, value] of Object.entries(pathnames)) {
    for (const locale of locales) {
        const other = locales.find(l => l !== locale);
        const localized = typeof value === 'string' ? value : value[locale];
        const alternate = typeof value === 'string' ? value : value[other];
        const path = publicPath(locale, localized);
        const page = await checkPage(path, locale, publicPath(other, alternate));
        for (const language of locales) {
            assert.ok(page.headers.get('link')?.includes(`hreflang="${language}"`), `${path}: alternate HTTP header`);
        }
        const prerendered = JSON.parse(readFileSync(new URL('../.next/prerender-manifest.json', import.meta.url)));
        assert.equal(prerendered.routes[publicPath(locale, internal)]?.initialRevalidateSeconds, false, `${path}: static page`);
        const rsc = await fetch(`${origin}${path}?_rsc=routing-check`, {
            redirect: 'manual', headers: {RSC: '1', 'Next-Router-Prefetch': '1'}
        });
        assert.equal(rsc.status, 200, `${path}: prefetch`);
        assert.match(rsc.headers.get('content-type'), /text\/x-component/, `${path}: RSC response`);
    }
}

for (const locale of locales) {
    const other = locales.find(l => l !== locale);
    const directory = new URL(`../src/content/blog/${locale}/`, import.meta.url);
    const otherDirectory = new URL(`../src/content/blog/${other}/`, import.meta.url);
    const translations = new Map(readdirSync(otherDirectory).filter(f => f.endsWith('.md')).map(file => [
        matter(readFileSync(new URL(file, otherDirectory), 'utf8')).data.translationKey, file.slice(0, -3)
    ]));
    for (const file of readdirSync(directory).filter(f => f.endsWith('.md'))) {
        const {data} = matter(readFileSync(new URL(file, directory), 'utf8'));
        const translatedSlug = translations.get(data.translationKey);
        await checkPage(`/${locale}/blog/${file.slice(0, -3)}`, locale,
            translatedSlug ? `/${other}/blog/${translatedSlug}` : undefined);
    }
}

// Exercise every generated rule and existing legacy shortcut, including precedence.
const redirects = await nextConfig.redirects();
for (const rule of redirects.filter(r => !r.source.includes(':'))) {
    const expected = redirects.find(r => r.source === rule.source);
    const response = await fetch(`${origin}${rule.source}?routing-check=1`, {redirect: 'manual'});
    assert.equal(response.status, expected.permanent ? 308 : 307, `${rule.source}: redirect`);
    const destination = new URL(response.headers.get('location'), origin);
    assert.equal(destination.pathname, expected.destination, rule.source);
    assert.equal(destination.searchParams.get('routing-check'), '1', `${rule.source}: query`);
    const target = await fetch(destination);
    assert.equal(target.status, 200, `${rule.source}: redirect target`);
    checked++;
}

for (const path of ['/does-not-exist', '/sr/does-not-exist', '/en/blog/does-not-exist', '/de', '/api/demo']) {
    const response = await fetch(`${origin}${path}`, {redirect: 'manual'});
    assert.equal(response.status, 404, path);
    const $ = load(await response.text());
    assert.match($('meta[name="robots"]').attr('content') || '', /noindex/, `${path}: noindex`);
}
const sitemap = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemap.status, 200);
const xml = load(await sitemap.text(), {xml: true});
const sitemapUrls = xml('loc').toArray().map(location => xml(location).text());
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length, 'Sitemap URLs must be unique');
for (const location of xml('loc').toArray()) {
    const path = new URL(xml(location).text()).pathname;
    const response = await fetch(`${origin}${path}`, {redirect: 'manual'});
    assert.equal(response.status, 200, `sitemap: ${path}`);
}
const manifest = JSON.parse(readFileSync(new URL('../.next/server/middleware-manifest.json', import.meta.url)));
assert.deepEqual(manifest.middleware, {}, 'No middleware should be deployed');
const actions = JSON.parse(readFileSync(new URL('../.next/server/server-reference-manifest.json', import.meta.url)));
assert.deepEqual(actions.node, {}, 'No automatic server actions should remain');
assert.deepEqual(actions.edge, {}, 'No edge server actions should remain');
console.log(`Passed: ${checked} pages/redirects, both locales, blog translations, RSC prefetch, SEO links, sitemap, 404s, and no middleware/server actions.`);
