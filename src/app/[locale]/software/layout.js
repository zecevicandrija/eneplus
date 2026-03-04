import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'SoftwarePage.metadata' });

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
    };
}

export default function Layout({ children }) {
    return children;
}
