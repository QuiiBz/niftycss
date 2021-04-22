import { flexColumn } from '@niftycss/css';
import { css } from '../../lib/nifty';

const codeStyle = {
    container: css({
        ...flexColumn,
        alignItems: 'center',
    }),
    title: css({
        color: '@textLight',
    }, 'mb-4 font-semibold text-md'),
    code: css({
        background: {
            value: '@textDark',
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
            background: '@accent',
            borderRadius: '1rem',
        },
    }, 'rounded-2xl w-96'),
};

export default codeStyle;
