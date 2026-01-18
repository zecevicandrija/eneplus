import { routing } from '../i18n/routing';

const baseUrl = 'https://eneplus.rs';

export default function sitemap() {
    // List of all static routes in the application
    const sitemapEntries = [];

    // Iterate over the keys in routing.pathnames (which are the internal route names)
    Object.keys(routing.pathnames).forEach(routeKey => {
        // Skip the homepage key handle it separately or logic can handle it if it's '/'

        const pathnameConfig = routing.pathnames[routeKey];

        // Use default locale to determine change frequency and priority or define per route logic
        // For simplicity, homepage gets higher priority
        const priority = routeKey === '/' ? 1 : 0.8;
        const changeFrequency = routeKey === '/' ? 'daily' : 'weekly';

        // Generate entries for each locale
        routing.locales.forEach(locale => {
            let localizedPath;

            if (typeof pathnameConfig === 'string') {
                // If the path is a string, it's the same for all locales (or exact string match)
                localizedPath = pathnameConfig;
            } else if (typeof pathnameConfig === 'object' && pathnameConfig[locale]) {
                // If it's an object, pick the locale specific path
                localizedPath = pathnameConfig[locale];
            } else {
                // Fallback to routeKey if config is missing (should not happen based on routing.js)
                localizedPath = routeKey;
            }

            // Construct URL. Ensure we handle root correctly.
            // If localizedPath is '/', the URL should be baseUrl/locale (or just baseUrl for default if not prefixed, 
            // but next-intl usually prefixes unless configured otherwise). 
            // routing.js has `localeDetection: false`, but does not set `prefix: 'never'`.
            // Default is `always` or `as-needed`. 
            // Assuming URL structure is /locale/path

            // Special case for homepage '/'
            // If localizedPath is '/', we want:  https://eneplus.rs/sr  and https://eneplus.rs/en
            // If localziedPath is '/about', we want: https://eneplus.rs/sr/o-nama

            const url = localizedPath === '/'
                ? `${baseUrl}/${locale}`
                : `${baseUrl}/${locale}${localizedPath}`;

            const alternates = {
                languages: {}
            };

            // Build alternates
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

    return sitemapEntries;
}
