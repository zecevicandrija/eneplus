
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
    const t = await getTranslations({ locale, namespace: 'CertificationPage.metadata' });

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
    };
}

export default function Layout({ children }) {
    return children;
}
