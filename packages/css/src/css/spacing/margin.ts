import { CSSProperties } from '@niftycss/core';

/**
 * Set the same value for margin in the X direction, which represent `marginLeft`
 * and `marginRight`.
 *
 * @param value - The margin value
 * @returns The CSS properties
 *
 * @example
 * ...marginX`10px`
 *
 * ...marginX`${t.inset}`
 */
export const marginX = (value: TemplateStringsArray): CSSProperties<{}> => {
    const padding = value.raw.join('');

    return {
        marginLeft: padding,
        marginRight: padding,
    };
};

/**
 * Set the same value for margin in the Y direction, which represent `marginTop`
 * and `marginBottom`.
 *
 * @param value - The margin value
 * @returns The CSS properties
 *
 * @example
 * ...marginY`10px`
 *
 * ...marginY`${t.inset}`
 */
export const marginY = (value: TemplateStringsArray): CSSProperties<{}> => {
    const padding = value.raw.join('');

    return {
        marginTop: padding,
        marginBottom: padding,
    };
};
