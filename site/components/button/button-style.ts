import { flexRow, paddingX, paddingY } from '@niftycss/css';
import { css } from '../../lib/nifty';

const buttonStyle = {
    button: css({
        ...paddingX`1.5rem`,
        ...paddingY`0.5rem`,
        ...flexRow,
        color: '@bg',
        backgroundColor: '@accent',
        border: '1px solid',
        ':focus': {
            outline: 'none',
        },
        ':hover': {
            backgroundColor: 'transparent',
            borderColor: '@accent',
            color: '@accentDark',
            '*svg': {
                color: '@accentDark',
            },
        },
        '*svg': {
            color: '@bg',
            width: '1.5rem',
            height: '1.5rem',
            marginRight: '1rem',
            transition: '.3s ease',
        },
    }, 'rounded-lg transition duration-300'),
};

export default buttonStyle;
