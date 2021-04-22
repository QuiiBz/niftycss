import { css } from '../../../lib/nifty';

const themeStyle = {
    button: css({
        ':focus': {
            outline: 'none',
        },
    }),
    white: css({
        stroke: '@textLight',
        ':hover': {
            stroke: '@textDark',
        },
    }, 'w-5 h-5'),
    dark: css({
        fill: '@textLight',
        ':hover': {
            fill: '@textDark',
        },
    }, 'w-5 h-5'),
};

export default themeStyle;
