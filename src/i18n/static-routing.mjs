import { routingConfig } from './routing-config.mjs';

const {locales, defaultLocale, pathnames} = routingConfig;
const publicPath = (locale, pathname) => `/${locale}${pathname === '/' ? '' : pathname}`;
const localizedPath = (value, locale) => typeof value === 'string' ? value : value[locale];

// These rules are generated during the build and run in Vercel's routing layer,
// without invoking a function to negotiate a locale on every page request.
export function localeRewrites() {
    return Object.entries(pathnames).flatMap(([internal, value]) =>
        locales.flatMap(locale => {
            const external = localizedPath(value, locale);
            return external === internal ? [] : [{
                source: publicPath(locale, external),
                destination: publicPath(locale, internal)
            }];
        })
    );
}

export function localeRedirects() {
    const redirects = new Map();
    const add = (source, destination) => {
        if (source !== destination) redirects.set(source, {source, destination, permanent: false});
    };

    for (const [internal, value] of Object.entries(pathnames)) {
        const defaultPath = publicPath(defaultLocale, localizedPath(value, defaultLocale));
        add(internal, defaultPath);
        for (const locale of locales) {
            const external = localizedPath(value, locale);
            add(external, defaultPath);
            // Preserve next-intl's canonicalization of internal and other-language aliases.
            for (const alias of new Set([internal, ...locales.map(l => localizedPath(value, l))])) {
                add(publicPath(locale, alias), publicPath(locale, external));
            }
        }
    }
    add('/blog/:slug', `/${defaultLocale}/blog/:slug`);
    return [...redirects.values()];
}

export function localeHeaders() {
    return Object.values(pathnames).flatMap(value => {
        const links = locales.map(locale =>
            `<https://www.eneplus.rs${publicPath(locale, localizedPath(value, locale))}>; rel="alternate"; hreflang="${locale}"`
        ).join(', ');
        return locales.map(locale => ({
            source: publicPath(locale, localizedPath(value, locale)),
            headers: [{key: 'Link', value: links}]
        }));
    });
}
