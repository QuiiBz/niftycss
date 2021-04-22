import { flexRow, paddingX, paddingY } from '@niftycss/css';
import { css } from '../../lib/nifty';

const buttonStyle = {
    button: css({
        ...paddingX`2rem`,
        ...paddingY`0.75rem`,
        ...flexRow,
        color: '@bg',
        backgroundColor: '@accent',
        ':focus': {
            outline: 'none',
        },
        ':hover': {
            backgroundColor: '@accentDark',
        },
        '*svg': {
            color: '@bg',
            width: '1.5rem',
            height: '1.5rem',
            marginRight: '1rem',
        },
    }, 'rounded-xl'),
};

export default buttonStyle;
