const DOM_NODE_ID = 'nifty';

const getDomNode = (): HTMLStyleElement | undefined => {

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

const injectCss = (css: string) => {

    const domNode = getDomNode();

    if(domNode)
        domNode.textContent = css;
}

export default injectCss;
