import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'docs');

export const getDocsSlug = (): { category: string, slugs: string[] }[] => {
    const categories = fs.readdirSync(postsDirectory);
    const slugs: { category: string, slugs: string[] }[] = [];

    categories.forEach((category) => {
        slugs.push({
            category,
            slugs: fs.readdirSync(join(postsDirectory, category)),
        });
    });

    return slugs;
};

export const getDocsBySlug = (category: string, slug: string, fields: string[] = []) => {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, category, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    type Items = {
        [key: string]: string
    };

    const items: Items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (field === 'category') {
            items[field] = category;
        }

        if (data[field]) {
            items[field] = data[field];
        }
    });

    return items;
};

export const getAllDocs = (fields: string[] = []) => {
    const docs: {
        [key: string]: string
    }[] = [];

    getDocsSlug().forEach(({ category, slugs }) => {
        slugs.forEach((slug) => {
            docs.push(getDocsBySlug(category, slug, fields));
        });
    });

    return docs;
};
