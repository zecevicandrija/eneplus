
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'EnergyPassportPage.metadata' });

    const baseUrl = 'https://www.eneplus.rs';
    const path = locale === 'sr' ? '/sr/energetski-pasos' : '/en/energy-passport';
    const canonicalUrl = `${baseUrl}${path}`;
    const alternateSr = `${baseUrl}/sr/energetski-pasos`;
    const alternateEn = `${baseUrl}/en/energy-passport`;

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'sr': alternateSr,
                'en': alternateEn,
            },
        },
        openGraph: {
            title: t('ogTitle'),
            description: t('ogDescription'),
            url: canonicalUrl,
            siteName: 'Eneplus',
            locale: locale === 'sr' ? 'sr_RS' : 'en_US',
            type: 'website',
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default function Layout({ children }) {
    return children;
}
