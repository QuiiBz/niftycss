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
 * @param debug - If we should debug the injection
 */
export const injectCss = (css: string[], mode: InjectMode = 'textContent', debug: boolean) => {

    const domNode = getDomNode();

    if(domNode) {

        const debugName = `Time taken to inject CSS (mode: ${mode})`;

        if(debug)
            console.time(debugName);

        if(mode === 'insertRule') {

            const { sheet } = domNode;

            if(!sheet)
                return;

            if(sheet.rules.length > 0) {

                for(const rule in sheet.rules) {

                    try {

                        sheet.deleteRule(Number(rule))
                        // eslint-disable-next-line no-empty
                    } catch(e) { }
                }
            }

            css.forEach((rule) => sheet.insertRule(rule));

        } else if(mode === 'textContent')
            domNode.textContent = css.join('');
        else
            console.error(`Unknow injection mode: ${mode}. Should be one of '${'insertRule' as InjectMode}', '${'textContent' as InjectMode}'`);

        if(debug)
            console.timeEnd(debugName)
    }
}
