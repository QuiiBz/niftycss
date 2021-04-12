import { css } from '../../../lib/nifty';

const themeStyle = {
    button: css({
        ':focus': {
            outline: 'none',
        },
    }),
    white: css((t) => ({
        stroke: t.textLight,
        ':hover': {
            stroke: t.textDark,
        },
    }), 'w-5 h-5'),
    dark: css((t) => ({
        fill: t.textLight,
        ':hover': {
            fill: t.textDark,
        },
    }), 'w-5 h-5'),
};

export default themeStyle;
