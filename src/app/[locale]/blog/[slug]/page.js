import React from 'react';
import { notFound } from 'next/navigation';
import { getPostBySlug, getTranslatedSlug, getAllPosts } from '@/lib/blog';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import styles from './BlogPost.module.css';

export async function generateStaticParams() {
    const srPosts = getAllPosts('sr').map((post) => ({ locale: 'sr', slug: post.slug }));
    const enPosts = getAllPosts('en').map((post) => ({ locale: 'en', slug: post.slug }));
    return [...srPosts, ...enPosts];
}


export async function generateMetadata({ params }) {
    const { locale, slug } = await params;
    const post = getPostBySlug(locale, slug);
    if (!post) {
        return {
            title: 'Not Found',
        };
    }

    const { frontmatter } = post;
    const translatedSlug = getTranslatedSlug(locale, frontmatter.translationKey);
    const altLocale = locale === 'sr' ? 'en' : 'sr';
    
    // Construct absolute URLs (assuming domain is eneplus.rs, change if needed in the future)
    const baseUrl = 'https://www.eneplus.rs';
    const currentUrl = `${baseUrl}/${locale}/blog/${slug}`;
    
    const languages = {
        [locale]: currentUrl
    };

    if (translatedSlug) {
        languages[altLocale] = `${baseUrl}/${altLocale}/blog/${translatedSlug}`;
    }

    return {
        title: `${frontmatter.title} | Eneplus Blog`,
        description: frontmatter.description,
        keywords: frontmatter.keywords,
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.description,
            type: 'article',
            publishedTime: frontmatter.date,
            authors: [frontmatter.author || 'Eneplus Tim'],
            images: [
                {
                    url: frontmatter.image || '/Assets/onama.avif',
                    width: 1200,
                    height: 630,
                    alt: frontmatter.title,
                },
            ],
        },
        alternates: {
            canonical: currentUrl,
            languages
        }
    };
}

export default async function BlogPost({ params }) {
    const { locale, slug } = await params;
    const post = getPostBySlug(locale, slug);
    const t = await getTranslations({ locale, namespace: 'BlogPage' });

    if (!post) {
        notFound();
    }

    const { frontmatter, content } = post;

    // Blog Schema Markup
    const blogSchemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": frontmatter.title,
        "image": [
            `https://www.eneplus.rs${frontmatter.image || '/Assets/onama.avif'}`
        ],
        "datePublished": frontmatter.date,
        "author": [{
            "@type": "Person",
            "name": frontmatter.author || 'Eneplus Tim'
        }],
         "publisher": {
            "@type": "Organization",
            "name": "Eneplus",
            "logo": {
                 "@type": "ImageObject",
                 "url": "https://www.eneplus.rs/Assets/EneplusLogo.png"
            }
        },
        "description": frontmatter.description
    };

    // FAQ Schema Markup (if present in frontmatter)
    const faqSchemaData = frontmatter.faq && Array.isArray(frontmatter.faq) && frontmatter.faq.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": frontmatter.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    } : null;

    return (
        <main className={styles.postWrapper}>
             <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchemaData) }}
            />
            {faqSchemaData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
                />
            )}

            <article className={styles.article}>
                <header className={styles.header}>
                    <Link href="/blog" className={styles.backLink}>
                        ← {t('backToBlog') || 'Back'}
                    </Link>
                    <h1 className={styles.title}>{frontmatter.title}</h1>
                    <div className={styles.meta}>
                        <span>{frontmatter.date}</span>
                        <span className={styles.dot}>•</span>
                        <span>{frontmatter.author}</span>
                    </div>
                </header>
                
                {frontmatter.image && (
                     <div className={styles.heroImageWrapper}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={frontmatter.image} 
                            alt={frontmatter.title} 
                            className={styles.heroImage}
                        />
                     </div>
                )}
                
                <div className={styles.content}>
                    <MarkdownRenderer content={content} />
                </div>
            </article>
        </main>
    );
}
