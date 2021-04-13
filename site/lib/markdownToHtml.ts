import remark from 'remark';
import html from 'remark-html';
import highlight from 'remark-highlight.js';
import toc from 'remark-toc';
import slugs from 'remark-slug';

export default async function markdownToHtml(markdown: string) {
    const result = await remark()
        .use(toc)
        .use(highlight)
        .use(slugs)
        .use(html)
        .process(markdown);
    return result.toString();
}
