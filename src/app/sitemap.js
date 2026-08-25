import { routing } from '../i18n/routing';
import { getAllPosts, getTranslatedSlug } from '@/lib/blog';

const baseUrl = 'https://www.eneplus.rs';

export default function sitemap() {
    // List of all static routes in the application
    const sitemapEntries = [];

    // 1. Static routes from routing.pathnames
    Object.keys(routing.pathnames).forEach(routeKey => {
        const pathnameConfig = routing.pathnames[routeKey];
        const priority = routeKey === '/' ? 1 : (routeKey.startsWith('/energy-passport') || routeKey === '/results') ? 0.9 : 0.8;
        const changeFrequency = routeKey === '/' ? 'daily' : (routeKey.startsWith('/energy-passport') || routeKey === '/results') ? 'daily' : 'weekly';

        routing.locales.forEach(locale => {
            let localizedPath;

            if (typeof pathnameConfig === 'string') {
                localizedPath = pathnameConfig;
            } else if (typeof pathnameConfig === 'object' && pathnameConfig[locale]) {
                localizedPath = pathnameConfig[locale];
            } else {
                localizedPath = routeKey;
            }

            const url = localizedPath === '/'
                ? `${baseUrl}/${locale}`
                : `${baseUrl}/${locale}${localizedPath}`;

            const alternates = {
                languages: {}
            };

            routing.locales.forEach(altLocale => {
                let altPath;
                if (typeof pathnameConfig === 'string') {
                    altPath = pathnameConfig;
                } else if (typeof pathnameConfig === 'object' && pathnameConfig[altLocale]) {
                    altPath = pathnameConfig[altLocale];
                } else {
                    altPath = routeKey;
                }

                alternates.languages[altLocale] = altPath === '/'
                    ? `${baseUrl}/${altLocale}`
                    : `${baseUrl}/${altLocale}${altPath}`;
            });

            sitemapEntries.push({
                url,
                lastModified: new Date(),
                changeFrequency,
                priority,
                alternates
            });
        });
    });

    // 2. Blog index page (/sr/blog, /en/blog)
    routing.locales.forEach(locale => {
        const url = `${baseUrl}/${locale}/blog`;
        const alternates = {
            languages: {
                sr: `${baseUrl}/sr/blog`,
                en: `${baseUrl}/en/blog`
            }
        };
        sitemapEntries.push({
            url,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
            alternates
        });
    });

    // 3. Dynamic blog post pages (/sr/blog/[slug], /en/blog/[slug])
    routing.locales.forEach(locale => {
        const posts = getAllPosts(locale);
        posts.forEach(post => {
            const currentUrl = `${baseUrl}/${locale}/blog/${post.slug}`;
            const translatedSlug = getTranslatedSlug(locale, post.translationKey);
            const altLocale = locale === 'sr' ? 'en' : 'sr';
            
            const alternates = {
                languages: {
                    [locale]: currentUrl
                }
            };
            if (translatedSlug) {
                alternates.languages[altLocale] = `${baseUrl}/${altLocale}/blog/${translatedSlug}`;
            }

            sitemapEntries.push({
                url: currentUrl,
                lastModified: post.date ? new Date(post.date) : new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
                alternates
            });
        });
    });

    return sitemapEntries;
}

