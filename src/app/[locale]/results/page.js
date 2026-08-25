import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import ResultsClient from './ResultsClient';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'ResultsPage' });

    const localizedPath = locale === 'sr' ? '/rezultati' : '/results';
    const canonicalUrl = `https://eneplus.rs/${locale}${localizedPath}`;

    return {
        title: t('metadata.title'),
        description: t('metadata.description'),
        keywords: t('metadata.keywords'),
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'sr': 'https://eneplus.rs/sr/rezultati',
                'en': 'https://eneplus.rs/en/results',
            },
        },
        openGraph: {
            title: t('metadata.title'),
            description: t('metadata.description'),
            url: canonicalUrl,
            siteName: 'Eneplus',
            images: [
                {
                    url: 'https://eneplus.rs/Assets/banner.avif',
                    width: 1200,
                    height: 630,
                    alt: 'Eneplus Projekti i Rezultati',
                },
            ],
            locale: locale === 'sr' ? 'sr_RS' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: t('metadata.title'),
            description: t('metadata.description'),
            images: ['https://eneplus.rs/Assets/banner.avif'],
        },
    };
}

export default async function ResultsPage({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: 'ResultsPage' });
    const rawProjects = t.raw('projects') || [];

    // JSON-LD Structured Data
    const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: t('metadata.title'),
        description: t('metadata.description'),
        url: `https://eneplus.rs/${locale}${locale === 'sr' ? '/rezultati' : '/results'}`,
        mainEntity: {
            '@type': 'ItemList',
            numberOfItems: rawProjects.length,
            itemListElement: rawProjects.map((project, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'Project',
                    name: project.title,
                    description: project.summary,
                    funder: {
                        '@type': 'Organization',
                        name: project.client,
                    },
                    locationCreated: {
                        '@type': 'Place',
                        name: project.location,
                    },
                },
            })),
        },
        provider: {
            '@type': 'Organization',
            name: 'Eneplus',
            url: 'https://eneplus.rs',
            logo: 'https://eneplus.rs/Assets/enepluslogo.png',
        },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: locale === 'sr' ? 'Početna' : 'Home',
                item: `https://eneplus.rs/${locale}`,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: locale === 'sr' ? 'Rezultati' : 'Results',
                item: `https://eneplus.rs/${locale}${locale === 'sr' ? '/rezultati' : '/results'}`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ResultsClient />
        </>
    );
}
