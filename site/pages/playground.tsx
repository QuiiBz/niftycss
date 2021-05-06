import { FC, ReactElement } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/cjs/languages/hljs/css';
import vs from 'react-syntax-highlighter/dist/cjs/styles/hljs/vs2015';
import { createNifty } from '@niftycss/core';
import autoprefixer from '@niftycss/plugin-autoprefixer';
import important from '@niftycss/plugin-important';
import { whiteTheme } from '../lib/nifty';
import usePlayground from '../lib/playground';

SyntaxHighlighter.registerLanguage('css', css);

const { css: makeCss, getCSS } = createNifty({
    theme: whiteTheme,
    plugins: [autoprefixer, important],
    ssr: true,
});

const codeStyle = makeCss({
    background: '@textDark!',
    padding: '1.5rem!',
    fontSize: '14px',
    width: 'auto',
}, 'rounded-2xl w-96');

const Index: FC = (): ReactElement => {
    const playgroundCss = usePlayground();

    return (
        <>
            <style>{ getCSS() }</style>
            <SyntaxHighlighter className={codeStyle} language="css" style={vs}>
                { playgroundCss }
            </SyntaxHighlighter>
        </>
    );
};

export default Index;
