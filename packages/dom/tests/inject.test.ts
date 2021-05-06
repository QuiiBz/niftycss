/**
 * @jest-environment jsdom
 */

import {
    STYLES_NODE_ID, getDomNode, injectCss, minify,
} from '../src';

describe('Get DOM node', () => {
    beforeEach(() => {
        document.getElementById(STYLES_NODE_ID)?.remove();
    });

    it('should return the DOM node', () => {
        expect(getDomNode(STYLES_NODE_ID)).toBeDefined();
    });

    it('should create the DOM node if does not exist', () => {
        const spy = jest.spyOn(document, 'createElement');

        getDomNode(STYLES_NODE_ID);
        expect(spy).toHaveBeenCalledTimes(1);

        spy.mockRestore();
    });

    it('should only create the DOM node once', () => {
        const spy = jest.spyOn(document, 'createElement');

        getDomNode(STYLES_NODE_ID);
        getDomNode(STYLES_NODE_ID);
        expect(spy).toHaveBeenCalledTimes(1);

        spy.mockRestore();
    });
});

describe('Minify', () => {
    const css: string[] = [`.test {
    background: red;
}`, `.border {
    border: 1px solid orange;
}`];

    it('should not minify in dev', () => {
        process.env = Object.assign(process.env, {
            NODE_ENV: 'development',
        });

        expect(minify(css)).toEqual(css);
    });

    it('should minify in prod', () => {
        process.env = Object.assign(process.env, {
            NODE_ENV: 'production',
        });

        const expected: string[] = [
            '.test {    background: red;}',
            '.border {    border: 1px solid orange;}',
        ];

        expect(minify(css)).toEqual(expected);
    });
});

describe('Inject css', () => {
    const css = [`.test {
    background: red;
}`, `.border {
    border: 1px solid orange;
}`];

    it('should inject css', () => {
        process.env = Object.assign(process.env, {
            NODE_ENV: 'development',
        });

        injectCss(css, true);

        const element = document.getElementById(STYLES_NODE_ID);
        expect(element?.textContent).toEqual(css.join(''));
    });

    it('should show debug message in dev', () => {
        process.env = Object.assign(process.env, {
            NODE_ENV: 'development',
        });

        const spy = jest.spyOn(console, 'time');

        injectCss(css, true);

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    it('should not show debug messages in prod', () => {
        process.env = Object.assign(process.env, {
            NODE_ENV: 'production',
        });

        const spy = jest.spyOn(console, 'time');

        injectCss(css, true);

        expect(spy).not.toHaveBeenCalled();
        spy.mockRestore();
    });
});
