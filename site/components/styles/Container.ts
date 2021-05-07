import { marginX } from '@niftycss/css';
import { styled } from '../../lib/nifty';

const Container = styled('div', {
    ...marginX`auto`,
    width: 'max(80vw, 340px)',
    $lg: {
        width: 'max(60vw, calc(340px * 3))',
    },
});

export default Container;
