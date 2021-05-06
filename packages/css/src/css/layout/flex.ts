import { CSSProperties } from '@niftycss/core';

/**
 * Layout with flex and center horizontally and vertically.
 *
 * @returns ```css
 * display: flex;
 * justify-content: center;
 * align-items: center;
 * ```
 *
 * @example
 * ...flexCenter
 */
export const flexCenter: CSSProperties<{}, {}> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

/**
 * Layout with flex and align in column.
 *
 * @returns ```css
 * display: flex;
 * flex-direction: column;
 * ```
 *
 * @example
 * ...flexColumn
 */
export const flexColumn: CSSProperties<{}, {}> = {
    display: 'flex',
    flexDirection: 'column',
};

/**
 * Layout with flex and align in row.
 *
 * @returns ```css
 * display: flex;
 * flex-direction: row;
 * ```
 *
 * @example
 * ...flexRow
 */
export const flexRow: CSSProperties<{}, {}> = {
    display: 'flex',
    flexDirection: 'row',
};
