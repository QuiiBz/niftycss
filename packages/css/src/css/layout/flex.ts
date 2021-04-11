import { CSSProperties } from '@niftycss/core';

/**
 * Get centered horizontaly and verticaly flexbox CSS properties.
 *
 * @example
 * ...flexCenter
 */
export const flexCenter: CSSProperties<{}> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

/**
 * Get flexbox in Y direction (column) CSS properties.
 *
 * @example
 * ...flexColumn
 */
export const flexColumn: CSSProperties<{}> = {
    display: 'flex',
    flexDirection: 'column',
};

/**
 * Get flexbox in X direction (row) CSS properties.
 *
 * @example
 * ...flexRow
 */
export const flexRow: CSSProperties<{}> = {
    display: 'flex',
    flexDirection: 'row',
};
