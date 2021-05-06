import { calc } from '@niftycss/css';
import { HEADER_HEIGHT } from '../../../lib/constants';
import { styled } from '../../../lib/nifty';

const Grid = styled('div', {
    height: calc`100vh - ${HEADER_HEIGHT}`,
    display: 'grid',
    gridTemplateColumns: '1fr minmax(340px, 1fr) minmax(340px, 1fr) minmax(340px, 1fr) 1fr',
    gridTemplateRows: '1fr 1fr',
    position: 'relative',
    zIndex: 1,
    // @ts-ignore
    '> div:not(:nth-child(-n+2))': {
        borderLeft: '2px dashed @gray400',
        borderImage: 'linear-gradient(to bottom, transparent, @gray400 30%) 2',
    },
    '> div:last-child': {
        borderRight: '2px dashed @gray400',
    },
});

export default Grid;
