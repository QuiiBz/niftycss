import { flexColumn, paddingX } from '@niftycss/css';
import { css } from '../../lib/nifty';

const sidebarStyle = {
    container: css((t) => ({
        ...flexColumn,
        ...paddingX`2rem`,
        borderColor: t.border,
        width: 'fit-content',
    }), 'border-r'),
    category: css({
        ...flexColumn,
    }),
    title: css((t) => ({
        color: t.textDark,
    }), 'uppercase font-semibold text-xs mt-10'),
    docs: css({
        ...flexColumn,
    }),
    doc: css((t) => ({
        color: t.textLight,
        cursor: 'pointer',
        ':hover': {
            color: t.textDark,
        },
    }), 'mt-4 text-sm'),
};

export default sidebarStyle;
