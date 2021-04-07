import { DOM_NODE_ID } from '../utils/constants';

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

        document.head.append(element);
    }

    return element as HTMLStyleElement;
}

/**
 * Inject the given CSS in the DOM. Do nothing if we are not in a browser.
 *
 * @param css - The css to inject
 */
const injectCss = (css: string) => {

    const domNode = getDomNode();

    if(domNode)
        domNode.textContent = css;
}

export default injectCss;
