import { routing } from '../i18n/routing';

const baseUrl = 'https://eneplus.rs';

export default function sitemap() {
    // List of all static routes in the application
    // Note: Homepage is represented as empty string '' to attach to locale prefix
    const routes = [
        '',
        '/about',
        '/contact',
        '/media',
        '/software',
        '/services',
        '/services/design',
        '/services/energy-audits',
        '/services/energy-certification',
        '/services/energy-consulting',
        '/services/energy-management',
        '/services/iso-50001',
        '/services/measurements',
        '/services/ppp-support',
        '/services/project-management',
        '/services/studies-and-analysis',
        '/services/training-and-education',
        '/services/web-applications'
    ];

    const sitemapEntries = [];

    // Generate Cartesian product of locales and routes
    routing.locales.forEach(locale => {
        routes.forEach(route => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'daily' : 'weekly',
                priority: route === '' ? 1 : 0.8,
            });
        });
    });

    return sitemapEntries;
}
