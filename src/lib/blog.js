import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

/**
 * Gets all blog posts for a specific locale, sorted by date (newest first).
 */
export function getAllPosts(locale) {
    const localeDir = path.join(contentDirectory, locale);
    
    if (!fs.existsSync(localeDir)) {
        return [];
    }

    const fileNames = fs.readdirSync(localeDir).filter(file => file.endsWith('.md'));
    
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(localeDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the slug
        return {
            slug,
            ...matterResult.data
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

/**
 * Gets a specific post by locale and slug.
 */
export function getPostBySlug(locale, slug) {
    const fullPath = path.join(contentDirectory, locale, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        frontmatter: data,
        content
    };
}

/**
 * Finds the translated equivalent of a post using its translationKey.
 * Returns the slug of the translated post, or null if not found.
 */
export function getTranslatedSlug(currentLocale, currentTranslationKey) {
    const targetLocale = currentLocale === 'sr' ? 'en' : 'sr';
    const targetDir = path.join(contentDirectory, targetLocale);
    
    if (!fs.existsSync(targetDir)) {
        return null;
    }

    const fileNames = fs.readdirSync(targetDir).filter(file => file.endsWith('.md'));
    
    for (const fileName of fileNames) {
        const fullPath = path.join(targetDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        
        if (data.translationKey === currentTranslationKey) {
            return fileName.replace(/\.md$/, '');
        }
    }
    
    return null;
}
