import { flexColumn } from '@niftycss/css';
import { css } from '../../lib/nifty';

const codeStyle = {
    container: css({
        ...flexColumn,
        alignItems: 'center',
    }),
    title: css((t) => ({
        color: t.textLight,
    }), 'mb-4 font-semibold text-md'),
    code: css((t) => ({
        background: {
            value: t.textDark,
            important: true,
        },
        padding: {
            value: '2rem',
            important: true,
        },
        '::-webkit-scrollbar': {
            background: 'transparent',
            width: '0.5rem',
        },
        '::-webkit-scrollbar-thumb': {
            background: t.accent,
            borderRadius: '1rem',
        },
    }), 'rounded-2xl w-96'),
};

export default codeStyle;
