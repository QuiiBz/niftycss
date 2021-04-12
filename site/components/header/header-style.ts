import { flexRow } from '@niftycss/css';
import { css } from '../../lib/nifty';
import containerStyle from '../styles/container';

const headerStyle = {
    header: css((t) => ({
        ...flexRow,
        borderColor: t.border,
        justifyContent: 'space-between',
        alignItems: 'center',
    }), containerStyle, 'border-b py-4'),
    buttons: css({
        ...flexRow,
        alignItems: 'center',
    }, 'space-x-5'),
    button: css((t) => ({
        color: t.textLight,
        borderColor: 'transparent',
        ':hover': {
            color: t.textDark,
            borderColor: t.accent,
        },
    }), 'border-b-2'),
    buttonSelected: css((t) => ({
        color: t.textDark,
        borderColor: t.accent,
    })),
};

export default headerStyle;
