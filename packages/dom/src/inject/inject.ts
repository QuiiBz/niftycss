import { DEV } from '@niftycss/core';
import { DOM_NODE_ID } from '../utils/constants';
import { InjectMode } from '../types';

type InjectOptions = {
    injectMode: InjectMode,
    debug: boolean,
};

/**
 * Get the DOM node for the styles. The DOM node will be created if he his
 * not found. Can return undefined if we are not in a browser.
 *
 * @returns The found DOM node or undefined
 */
const getDomNode = (): HTMLStyleElement | undefined => {
    // Return if we are not in a browser
    if (typeof window === 'undefined') return undefined;

    let element = document.getElementById(DOM_NODE_ID);

    if (!element) {
        element = document.createElement('style');
        element.id = DOM_NODE_ID;
        element.appendChild(document.createTextNode(''));

        document.head.appendChild(element);
    }

    return element as HTMLStyleElement;
};

/**
 * Inject the given CSS in the DOM. Do nothing if we are not in a browser.
 *
 * @param css - The css to inject
 * @param options - The injection options to use
 */
// eslint-disable-next-line import/prefer-default-export
export const injectCss = (css: string[], { injectMode, debug }: InjectOptions) => {
    const domNode = getDomNode();

    if (domNode) {
        const debugName = `Time taken to inject CSS (mode: ${injectMode})`;

        if (debug && DEV) console.time(debugName);

        if (injectMode === 'insertRule') {
            const { sheet } = domNode;

            if (!sheet) return;

            if (sheet.rules.length > 0) {
                Array.from(sheet.rules).forEach((_, index) => {
                    try {
                        sheet.deleteRule(index);
                        // eslint-disable-next-line no-empty
                    } catch (e) { }
                });
            }

            css.forEach((rule) => sheet.insertRule(rule));
        } else if (injectMode === 'textContent') domNode.textContent = css.join('');
        else console.error(`Unknow injection mode: ${injectMode}. Should be one of '${'insertRule' as InjectMode}', '${'textContent' as InjectMode}'`);

        if (debug && DEV) console.timeEnd(debugName);
    }
};
