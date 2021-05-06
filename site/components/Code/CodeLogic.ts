import { useRef } from 'react';
import { getTheme } from '../../lib/nifty';

const useCode = (code: string, types: string) => {
    const ref = useRef<HTMLIFrameElement>();

    const run = (value: string | undefined) => {
        // @ts-ignore
        ref.current?.contentWindow?.run(value);
    };

    const setRef = (theRef: HTMLIFrameElement) => {
        ref.current = theRef;
        ref.current?.addEventListener('load', () => run(code));
    };

    const options = {
        minimap: {
            enabled: false,
        },
        fontSize: '14px',
        lineNumbers: false,
        folding: false,
    };

    const beforeMount = (monaco: any) => {
        monaco.editor.defineTheme('nifty', {
            base: 'vs-dark',
            inherit: true,
            rules: [{ background: 'EDF9FA' }],
            colors: {
                'editor.background': getTheme().codeBg,
                'editor.foreground': getTheme().codeText,
                'editorIndentGuide.background': getTheme().codeBg,
            },
        });

        monaco.languages.typescript.javascriptDefaults.addExtraLib(types, 'ts:niftycss.d.ts');

        if (monaco.editor.getModels().length === 0) {
            monaco.editor.createModel(types, 'typescript', monaco.Uri.parse('ts:niftycss.d.ts'));
        }
    };

    return {
        run,
        setRef,
        options,
        beforeMount,
    };
};

export default useCode;
