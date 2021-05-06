import { useEffect, useState } from 'react';
import * as niftyCore from '@niftycss/core';
import * as niftyCss from '@niftycss/css';
import autoprefixer from '@niftycss/plugin-autoprefixer';

const usePlayground = () => {
    const [css, setCss] = useState('');

    const injectToWindow = (object: {}) => {
        Object.keys(object).forEach((key) => {
            // @ts-ignore
            window[key] = object[key];
        });
    };

    useEffect(() => {
        // Inject all objects from nifty core and css to the window
        injectToWindow(niftyCore);
        injectToWindow(niftyCss);
        // @ts-ignore
        window.autoprefixer = autoprefixer;

        // @ts-ignore
        window.run = (js: string) => {
            // Add the getCSS method to get the css when the code change
            let script = js.replace(' } = createNifty', ', getCSS } = createNifty');

            // Dispatch the css event to the dom
            script += 'dispatchEvent(new CustomEvent(\'css\', { detail: getCSS() }));';

            try {
                // eslint-disable-next-line no-eval
                (0, eval)(script);
            // eslint-disable-next-line no-empty
            } catch (e) { }
        };

        // Set the css when we receive it from the run method
        const listener = ({ detail }: { detail: string[] }) => {
            setCss(detail.join('').replace(/\n$/, ''));
        };
        // @ts-ignore
        window.addEventListener('css', listener);

        return () => {
            // @ts-ignore
            window.removeEventListener('css', listener);
        };
    }, []);

    return css;
};

export default usePlayground;
