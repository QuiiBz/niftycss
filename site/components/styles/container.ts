import { marginX, paddingX } from '@niftycss/css';
import { css } from '../../lib/nifty';

const containerStyle = css({
    ...paddingX`2rem`,
    $xl: {
        ...marginX`auto`,
    },
}, 'w-full max-w-7xl');

export default containerStyle;
