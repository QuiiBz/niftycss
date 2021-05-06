import { minify } from '../src';

describe('Minify', () => {
    it('should minify css', () => {
        const css = [`.test {
    background: red;
}`, `.border {
    borderColor: orange;
}`];

        const minified = [
            '.test {    background: red;}',
            '.border {    borderColor: orange;}',
        ];

        expect(minify(css)).toEqual(minified);
    });

    it('should preserve spaces in selectors', () => {
        const css = [`.test:hover a {
    background: red;
}`, `.ul li {
    borderColor: orange;
}`];

        const minified = [
            '.test:hover a {    background: red;}',
            '.ul li {    borderColor: orange;}',
        ];

        expect(minify(css)).toEqual(minified);
    });

    it('should preserve spaces in css values', () => {
        const css = [`.test {
    background: border-box red;
}`, `.ul {
    border: 1px solid orange;
}`];

        const minified = [
            '.test {    background: border-box red;}',
            '.ul {    border: 1px solid orange;}',
        ];

        expect(minify(css)).toEqual(minified);
    });
});
