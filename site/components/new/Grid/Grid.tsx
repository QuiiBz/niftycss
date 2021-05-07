import { calc, flexColumn, paddingX } from '@niftycss/css';
import { HEADER_HEIGHT } from '../../../lib/constants';
import { styled } from '../../../lib/nifty';

const Grid = styled('div', {
    ...flexColumn,
    ...paddingX`40px`,
    alignItems: 'center',
    height: 'auto',
    position: 'relative',
    zIndex: 1,
    $lg: {
        ...paddingX`0`,
        display: 'grid',
        alignItems: 'initial',
        gridTemplateColumns: '1fr minmax(340px, 1fr) minmax(340px, 1fr) minmax(340px, 1fr) 1fr',
        gridTemplateRows: '1fr 1fr',
        height: calc`100vh - ${HEADER_HEIGHT}`,
        // @ts-ignore
        '> div:not(:nth-child(-n+2))': {
            borderLeft: '2px dashed @gray400',
            borderImage: 'linear-gradient(to bottom, transparent, @gray400 30%) 2',
        },
        '> div:last-child': {
            borderRight: '2px dashed @gray400',
        },
    },
});

export default Grid;
