import { getSEOMetadata } from '@/utils/seo';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'ProjectManagementPage.metadata' });

    return getSEOMetadata({
        locale,
        route: '/services/project-management',
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
    });
}

export default function Layout({ children }) {
    return children;
}
