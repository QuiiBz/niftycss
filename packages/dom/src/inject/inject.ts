import { DOM_NODE_ID } from '../utils/constants';
import { InjectMode } from '../types';

/**
 * Get the DOM node for the styles. The DOM node will be created if he his
 * not found. Can return undefined if we are not in a browser.
 *
 * @returns The found DOM node or undefined
 */
const getDomNode = (): HTMLStyleElement | undefined => {

    // Return if we are not in a browser
    if(typeof window === 'undefined')
        return;

    let element = document.getElementById(DOM_NODE_ID);

    if(!element) {

        element = document.createElement('style');
        element.id = DOM_NODE_ID;
        element.appendChild(document.createTextNode(''));

        document.head.appendChild(element);
    }

    return element as HTMLStyleElement;
}

/**
 * Inject the given CSS in the DOM. Do nothing if we are not in a browser.
 *
 * @param css - The css to inject
 * @param mode - The injection mode to use
 */
export const injectCss = (css: string[], mode: InjectMode = 'textContent') => {

    const domNode = getDomNode();

    if(domNode) {

        if(mode === 'insertRule') {

            const { sheet } = domNode;

            if(sheet)
                css.forEach((rule) => sheet.insertRule(rule));

        } else if(mode === 'textContent')
            domNode.textContent = css.join('');
    }
}
