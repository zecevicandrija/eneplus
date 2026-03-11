import Pocetna from "./Pocetna/Pocetna";
import { getSEOMetadata } from '@/utils/seo';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'HomePage.metadata' });

    return getSEOMetadata({
        locale,
        route: '/',
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
    });
}

export default function Home() {
  return (
    <>
      <Pocetna />
    </>
  );
}
