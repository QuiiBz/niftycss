import { CSSProperties } from '../../types';

export const flexCenter: CSSProperties<unknown> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const flexColumn: CSSProperties<unknown> = {
    display: 'flex',
    flexDirection: 'column',
}

export const flexRow: CSSProperties<unknown> = {
    display: 'flex',
    flexDirection: 'row',
}
