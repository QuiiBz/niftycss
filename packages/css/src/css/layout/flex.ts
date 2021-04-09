import { CSSProperties } from '@niftycss/core';

/**
 * Get centered horizontaly and verticaly flexbox CSS properties.
 *
 * @example
 * ...flexCenter
 */
export const flexCenter: CSSProperties<unknown> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

/**
 * Get flexbox in Y direction (column) CSS properties.
 *
 * @example
 * ...flexColumn
 */
export const flexColumn: CSSProperties<unknown> = {
    display: 'flex',
    flexDirection: 'column',
}

/**
 * Get flexbox in X direction (row) CSS properties.
 *
 * @example
 * ...flexRow
 */
export const flexRow: CSSProperties<unknown> = {
    display: 'flex',
    flexDirection: 'row',
}
