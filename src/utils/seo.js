import { routing } from '@/i18n/routing';

const baseUrl = 'https://www.eneplus.rs';

export function getSEOMetadata({
    locale,
    route,
    title,
    description,
    keywords = '',
    ogImage = '/Assets/enepluslogo.png',
    noIndex = false,
}) {
    // Determine the route config from routing.js
    const pathnameConfig = routing.pathnames[route];

    // Build the localized path for the current locale
    let currentPath = '';
    if (pathnameConfig) {
        if (typeof pathnameConfig === 'string') {
            currentPath = pathnameConfig;
        } else if (typeof pathnameConfig === 'object') {
            currentPath = pathnameConfig[locale] || route;
        }
    } else {
        currentPath = route;
    }

    // Determine the canonical URL
    const canonicalUrl = currentPath === '/'
        ? `${baseUrl}/${locale}`
        : `${baseUrl}/${locale}${currentPath}`;

    // Build the alternates for languages
    const languages = {};
    routing.locales.forEach(l => {
        let lPath = '';
        if (pathnameConfig) {
            if (typeof pathnameConfig === 'string') {
                lPath = pathnameConfig;
            } else if (typeof pathnameConfig === 'object') {
                lPath = pathnameConfig[l] || route;
            }
        } else {
            lPath = route;
        }
        languages[l] = lPath === '/'
            ? `${baseUrl}/${l}`
            : `${baseUrl}/${l}${lPath}`;
    });

    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

    return {
        title,
        description,
        keywords,
        metadataBase: new URL(baseUrl),
        alternates: {
            canonical: canonicalUrl,
            languages,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: 'Eneplus',
            images: [
                {
                    url: fullOgImage,
                    width: 800,
                    height: 600,
                    alt: title || 'Eneplus',
                },
            ],
            locale: locale === 'sr' ? 'sr_RS' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [fullOgImage],
        },
        icons: {
            icon: `${baseUrl}/Assets/enepluslogo.png`,
            shortcut: `${baseUrl}/Assets/enepluslogo.png`,
            apple: `${baseUrl}/Assets/enepluslogo.png`,
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
        },
    };
}
