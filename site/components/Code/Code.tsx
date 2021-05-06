import { FC, ReactElement } from 'react';
import Editor from '@monaco-editor/react';
import useCode from './CodeLogic';
import { css } from '../../lib/nifty';

type Props = {
    language: string;
    code: string;
    types: string;
    width?: string;
    height?: string;
};

const Code: FC<Props> = ({
    language, code, types, width = '400px', height = '488px',
}: Props): ReactElement => {
    const {
        run, setRef, options, beforeMount,
    } = useCode(code, types);

    return (
        <>
            <Editor
                width={width}
                height={height}
                language={language}
                defaultValue={code}
                theme="nifty"
                className={css({
                    padding: '1.5rem',
                    background: '@codeBg',
                }, 'rounded-2xl')}
                options={options}
                onChange={run}
                beforeMount={beforeMount}
            />
            <iframe
                ref={setRef}
                title="Playground"
                src="/playground"
                width={width}
                height={height}
            />
        </>
    );
};

export default Code;
