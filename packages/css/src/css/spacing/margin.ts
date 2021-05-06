import { CSSProperties } from '@niftycss/core';

/**
 * Add the same margin amount in the X direction, which represents left and right.
 *
 * @param amount - The margin amount
 * @returns ```css
 * margin-left: <amount>;
 * margin-right: <amount>;
 * ```
 *
 * @example
 * ...marginX`10px`
 * ...marginX`${inset}`
 */
export const marginX = (amount: TemplateStringsArray): CSSProperties<{}, {}> => {
    const margin = amount.raw.join('');

    return {
        marginLeft: margin,
        marginRight: margin,
    };
};

/**
 * Add the same margin amount in the X direction, which represents top and bottom.
 *
 * @param amount - The margin amount
 * @returns ```css
 * margin-top: <amount>;
 * margin-bottom: <amount>;
 * ```
 *
 * @example
 * ...marginY`10px`
 * ...marginY`${inset}`
 */
export const marginY = (amount: TemplateStringsArray): CSSProperties<{}, {}> => {
    const margin = amount.raw.join('');

    return {
        marginTop: margin,
        marginBottom: margin,
    };
};
