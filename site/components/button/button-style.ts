import { flexRow, paddingX, paddingY } from '@niftycss/css';
import { css } from '../../lib/nifty';

const buttonStyle = {
    button: css((t) => ({
        ...paddingX`2rem`,
        ...paddingY`0.75rem`,
        ...flexRow,
        color: t.bg,
        backgroundColor: t.accent,
        ':focus': {
            outline: 'none',
        },
        ':hover': {
            backgroundColor: t.accentDark,
        },
        '*svg': {
            color: t.bg,
            width: '1.5rem',
            height: '1.5rem',
            marginRight: '1rem',
        },
    }), 'rounded-xl'),
};

export default buttonStyle;
