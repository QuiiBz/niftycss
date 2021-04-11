import { CSSProperties } from '@niftycss/core';

/**
 * Set the same value for padding in the X direction, which represent `paddingLeft`
 * and `paddingRight`.
 *
 * @param value - The padding value
 * @returns The CSS properties
 *
 * @example
 * ...paddingX`10px`
 *
 * ...paddingX`${t.inset}`
 */
export const paddingX = (value: TemplateStringsArray): CSSProperties<{}> => {
    const padding = value.raw.join('');

    return {
        paddingLeft: padding,
        paddingRight: padding,
    };
};

/**
 * Set the same value for padding in the Y direction, which represent `paddingTop`
 * and `paddingBottom`
 *
 * @param value - The padding value
 * @returns The CSS properties
 *
 * @example
 * ...paddingY`10px`
 *
 * ...paddingY`${t.inset}`
 */
export const paddingY = (value: TemplateStringsArray): CSSProperties<{}> => {
    const padding = value.raw.join('');

    return {
        paddingTop: padding,
        paddingBottom: padding,
    };
};
