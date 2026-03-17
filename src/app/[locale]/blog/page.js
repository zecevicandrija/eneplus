import React from 'react';
import { getTranslations } from 'next-intl/server';
import { getAllPosts } from '@/lib/blog';
import BlogClientTracker from './BlogClientTracker';
import styles from './Blog.module.css';

export default async function BlogPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'BlogPage' });

    const blogPosts = getAllPosts(locale);

    // Extract all translated strings into a plain serializable object
    const translations = {
        overline: t('overline'),
        heroTitle1: t('heroTitle1'),
        heroTitle2: t('heroTitle2'),
        heroSubtitle: t('heroSubtitle'),
        trustBadge1Value: t('trustBadge1Value'),
        trustBadge1Label: t('trustBadge1Label'),
        trustBadge2Value: t('trustBadge2Value'),
        trustBadge2Label: t('trustBadge2Label'),
        trustBadge3Value: t('trustBadge3Value'),
        trustBadge3Label: t('trustBadge3Label'),
        blogListTitle: t('blogListTitle'),
        readMore: t('readMore'),
    };

    // Blog Schema Markup
    const blogSchemaData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Eneplus Blog",
        "description": t.raw('metadata.description') || '',
        "publisher": {
            "@type": "Organization",
            "name": "Eneplus",
            "url": "https://www.eneplus.rs"
        }
    };

    return (
        <main className={styles.pageWrapper}>
            {/* JSON-LD Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchemaData) }}
            />

            <BlogClientTracker blogPosts={blogPosts} translations={translations} />
        </main>
    );
}
