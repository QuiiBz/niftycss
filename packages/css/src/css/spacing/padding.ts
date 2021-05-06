import { CSSProperties } from '@niftycss/core';

/**
 * Add the same padding amount in the X direction, which represents left and right.
 *
 * @param amount - The padding amount
 * @returns ```css
 * padding-left: <amount>;
 * padding-right: <amount>;
 * ```
 *
 * @example
 * ...paddingX`10px`
 * ...paddingX`${inset}`
 */
export const paddingX = (amount: TemplateStringsArray | string): CSSProperties<{}, {}> => {
    let padding: string;

    if (typeof amount === 'string') {
        padding = amount;
    } else {
        padding = amount.raw.join('');
    }

    return {
        paddingLeft: padding,
        paddingRight: padding,
    };
};

/**
 * Add the same padding amount in the X direction, which represents top and bottom.
 *
 * @param amount - The padding amount
 * @returns ```css
 * padding-top: <amount>;
 * padding-bottom: <amount>;
 * ```
 *
 * @example
 * ...paddingY`10px`
 * ...paddingY`${inset}`
 */
export const paddingY = (amount: TemplateStringsArray | string): CSSProperties<{}, {}> => {
    let padding: string;

    if (typeof amount === 'string') {
        padding = amount;
    } else {
        padding = amount.raw.join('');
    }

    return {
        paddingTop: padding,
        paddingBottom: padding,
    };
};
