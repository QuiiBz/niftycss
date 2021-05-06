import { marginX } from '@niftycss/css';
import { styled } from '../../lib/nifty';

const Container = styled('div', {
    ...marginX`auto`,
    width: 'max(60vw, calc(340px * 3))',
});

export default Container;
