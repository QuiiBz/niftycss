import { marginY } from '@niftycss/css';
import { css } from '../../lib/nifty';

const docStyle = {
    container: css({
        ...marginY`2rem`,
    }, 'max-w-2xl mx-auto'),
    title: css({
        color: '@textDark',
    }, 'text-4xl font-bold'),
    content: css({
        color: '@textLight',
        '*p': {
            ...marginY`1.5rem`,
        },
        '*li p': {
            ...marginY`0`,
        },
        '*ul': {
            ...marginY`1.5rem`,
            listStyleType: 'initial',
            paddingLeft: '1rem',
        },
        '*a': {
            textDecoration: 'underline',
            textDecorationColor: '@accentDark',
            ':hover': {
                color: '@textDark',
            },
        },
        '*blockquote': {
            borderLeft: '0.25rem solid @accent',
            paddingLeft: '1rem',
        },
        '*h2': {
            color: '@textDark',
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontWeight: 600,
            marginTop: '2.5rem',
        },
        '*h3': {
            color: '@textDark',
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: 500,
            marginTop: '2rem',
        },
        '*pre': {
            background: '@textDark',
            color: '@code',
            padding: '1.5rem',
            borderRadius: '1rem',
        },
        '*pre code': {
            color: '@code',
            '::before': {
                content: 'none',
            },
            '::after': {
                content: 'none',
            },
        },
        // TODO
        // @ts-ignore
        '.hljs-comment, .hljs-quote': {
            color: '#57a64a',
        },
        '.hljs-meta, .hljs-meta-keyword, .hljs-tag': {
            color: '#9b9b9b',
        },
        '.hljs-keyword, .hljs-literal, .hljs-name, .hljs-symbol': {
            color: '#569cd6',
        },
        '.hljs-attr, .hljs-attribute, .hljs-builtin-name': {
            color: '#9cdcfe',
        },
        '.hljs-meta-string, .hljs-string': {
            color: '#d69d85',
        },
        '*code': {
            color: '@accent',
            fontSize: '14px',
            '::before': {
                content: '"`"',
            },
            '::after': {
                content: '"`"',
            },
        },
    }, 'text-md'),
};

export default docStyle;
