import { CSSProperties } from '@niftycss/core/src';

/**
 * Generate the [calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc())
 * method with the given expression.
 *
 * @param expression - The expression to calculate
 * @returns ```css
 * calc(<expression>)
 * ```
 *
 * @example
 * ...calc`100vw - 50px`
 * ...calc`100vh - ${navHeight}`
 */
export const calc = (expression: TemplateStringsArray, ...props: string[]): string => {
    let str = '';

    expression.forEach((string, i) => {
        str += string + (props[i] || '');
    });

    return `calc(${str})`;
};

/**
 * Generate a box of `width` x `height | width` with the given width and height.
 * You can omit the height to generate a square of `width` x `width`
 *
 * @param width - The width of the box
 * @param height - (optional) The height of the box
 * @returns ```css
 * width: <width>;
 * height: <height | width>
 * ```
 *
 * @example
 * ...box`40px`
 * ...box('2rem', '1rem')
 */
export const box = (
    width: TemplateStringsArray | string,
    height?: TemplateStringsArray | string,
): CSSProperties<{}, {}> => ({
    width: typeof width === 'string' ? width : width.raw.join(''),
    // eslint-disable-next-line no-nested-ternary
    height: height ? typeof height === 'string' ? height : height.raw.join('') : typeof width === 'string' ? width : width.raw.join(''),
});

// TODO filters
