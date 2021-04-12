interface DocType {
    slug: string;
    title: string;
    category: keyof Category;
    order: number;
    content: string;
}

export enum Category {
    'Getting started',
    'Features',
    'Guides',
}

export default DocType;
