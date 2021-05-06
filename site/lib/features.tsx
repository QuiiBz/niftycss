import { ReactElement } from 'react';

type Feature = {
    area: string;
    title: string;
    description: string
    link: string;
    icon: ReactElement;
};

const FEATURES: Feature[] = [
    {
        area: '2 / 2 / 3 / 3',
        title: 'Fast - really fast',
        description: 'Don’t think about performances - we handle that for your. Server-side render your CSS and use CSS utilities to rapidly create UI.',
        link: '/docs/getting-started/welcome',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        area: '2 / 3 / 3 / 4',
        title: 'Framework-agnostic',
        description: 'Integrate with any front-end library like Next.js, CRA, Gatsby, Tailwind and more. Use the styled API to quickly create reusable React components.',
        link: '/docs/getting-started/installation',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        area: '2 / 4 / 3 / 5',
        title: 'Awesome DX',
        description: 'Write type-safe CSS in your TypeScript or JavaScript files. Reference theme values without importing them, and think responsive with breakpoints.',
        link: '/docs/features/styling',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
    },
];

export default FEATURES;
