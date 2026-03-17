'use server';

import { getPostBySlug, getTranslatedSlug } from '@/lib/blog';

export async function getAlternateBlogPath(locale, slug) {
    try {
        const post = getPostBySlug(locale, slug);
        if (!post) return null;
        
        const translatedSlug = getTranslatedSlug(locale, post.frontmatter.translationKey);
        if (!translatedSlug) return null;
        
        const targetLocale = locale === 'sr' ? 'en' : 'sr';
        return `/${targetLocale}/blog/${translatedSlug}`;
    } catch (error) {
        console.error("Error fetching alternate blog path:", error);
        return null;
    }
}
