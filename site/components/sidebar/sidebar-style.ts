import { flexColumn, paddingX } from '@niftycss/css';
import { css } from '../../lib/nifty';

const sidebarStyle = {
    container: css({
        ...flexColumn,
        ...paddingX`2rem`,
        borderColor: '@border',
        width: 'fit-content',
    }, 'border-r'),
    category: css({
        ...flexColumn,
    }),
    title: css({
        color: '@textDark',
    }, 'uppercase font-semibold text-xs mt-10'),
    docs: css({
        ...flexColumn,
    }),
    doc: css({
        color: '@textLight',
        cursor: 'pointer',
        ':hover': {
            color: '@textDark',
        },
    }, 'mt-4 text-sm'),
};

export default sidebarStyle;
