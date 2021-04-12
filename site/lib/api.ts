import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'docs');

export const getDocsSlug = (): string[] => fs.readdirSync(postsDirectory);

export const getDocsBySlug = (slug: string, fields: string[] = []) => {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
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

        if (data[field]) {
            items[field] = data[field];
        }
    });

    return items;
};

export const getAllDocs = (fields: string[] = []) => {
    const slugs = getDocsSlug();
    return slugs
        .map((slug) => getDocsBySlug(slug, fields));
};
