import { STYLES_NODE_ID } from '../utils/constants';
import { minify } from './minify';

export const getDomNode = (name: string): HTMLStyleElement | undefined => {
    // Return if we are not in a browser
    if (typeof window === 'undefined') return undefined;

    let element = document.getElementById(name);

    if (!element) {
        element = document.createElement('style');
        element.id = name;
        element.appendChild(document.createTextNode(''));

        document.head.appendChild(element);
    }

    return element as HTMLStyleElement;
};

export const injectCss = (css: string[], debug: boolean) => {
    const domNode = getDomNode(STYLES_NODE_ID);
    const minifiedCss = minify(css);

    if (domNode) {
        const debugName = 'Time taken to inject CSS';

        if (debug && process.env.NODE_ENV === 'development') {
            console.time(debugName);
        }

        domNode.textContent = minifiedCss.join('');

        if (debug && process.env.NODE_ENV === 'development') {
            console.timeEnd(debugName);
        }
    }
};
