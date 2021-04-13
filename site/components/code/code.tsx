import { FC, ReactElement } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/hljs/css';
import vs from 'react-syntax-highlighter/dist/cjs/styles/hljs/vs2015';
import codeStyle from './code-style';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('css', css);

interface Props {
    title: string;
    language: string;
    code: string;
}

const Code: FC<Props> = ({ title, language, code }: Props): ReactElement => (
    <div className={codeStyle.container}>
        <p className={codeStyle.title}>{ title }</p>
        <SyntaxHighlighter className={codeStyle.code} language={language} style={vs}>
            { code }
        </SyntaxHighlighter>
    </div>
);

export default Code;
