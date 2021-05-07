import {
    box, calc, marginX, marginY,
} from '@niftycss/css';
import DocType from '../../types/docs';
import { styled } from '../../lib/nifty';

interface Props {
    doc: DocType;
}

const Container = styled('div', {
    ...marginY`2rem`,
    ...marginX`auto`,
    $lg: {
        marginLeft: '144px',
    },
}, 'max-w-2xl');

const Title = styled('h1', {
    color: '@gray600',
}, 'text-4xl font-bold');

const Content = styled('div', {
    color: '@gray500',
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
    '*ul ul': {
        ...marginY`0.5rem`,
    },
    '*a': {
        textDecoration: 'underline',
        textDecorationColor: '@primary500',
        textDecorationThickness: '0.2rem',
        ':hover': {
            color: '@primary700',
        },
    },
    '*blockquote': {
        borderLeft: '0.25rem solid @primary500',
        paddingLeft: '1rem',
    },
    // @ts-ignore
    '*h2 a, h3 a': {
        ...box`1rem`,
        top: '0.5rem',
        left: '-1.5rem',
        background: '@gray400',
        position: 'absolute',
        mask: 'url(/assets/link.svg) no-repeat center',
        WebkitMask: 'url(/assets/link.svg) no-repeat center',
    },
    '*h2 a:hover, h3 a:hover': {
        background: '@gray500',
    },
    '*h2, h3': {
        color: '@gray600',
        borderBottom: '1px solid @gray400',
        paddingBottom: '0.5rem',
    },
    '*h2': {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        fontWeight: 700,
        marginTop: '3rem',
        position: 'relative',
    },
    '*h3': {
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
        fontWeight: 600,
        marginTop: '2.5rem',
    },
    '*pre': {
        background: '@codeBg',
        color: '@codeText',
        padding: '1.5rem',
        borderRadius: '1rem',
        overflowX: 'auto',
        width: '100%',
        maxWidth: calc`100vw - 3rem`,
    },
    '*pre code': {
        color: '@codeText',
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
        color: '@primary600',
        fontSize: '14px',
        '::before': {
            content: '"`"',
        },
        '::after': {
            content: '"`"',
        },
    },
}, 'text-md');

const DocContent = ({ doc }: Props) => (
    <Container>
        <Title>{ doc.title }</Title>
        <Content dangerouslySetInnerHTML={{ __html: doc.content }} />
    </Container>
);

export default DocContent;
