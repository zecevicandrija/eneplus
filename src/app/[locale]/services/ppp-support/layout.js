import { getSEOMetadata } from '@/utils/seo';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'PppSupportPage.metadata' });

    return getSEOMetadata({
        locale,
        route: '/services/ppp-support',
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
    });
}

export default function Layout({ children }) {
    return children;
}
