import { flexColumn, paddingX } from '@niftycss/css';
import { css } from '../../lib/nifty';

const sidebarStyle = {
    container: css({
        ...flexColumn,
        ...paddingX`2rem`,
        borderColor: '@gray400',
        minWidth: '17rem',
        display: 'none',
        position: 'sticky',
        top: 0,
        overflowY: 'scroll',
        height: '100vh',
        $lg: {
            display: 'block',
        },
    }, 'border-r pb-10'),
    category: css({
        ...flexColumn,
    }),
    title: css({
        color: '@gray600',
    }, 'uppercase font-semibold text-sm lg:text-xs mt-10'),
    docs: css({
        ...flexColumn,
    }),
    doc: css({
        color: '@gray500',
        cursor: 'pointer',
        ':hover': {
            color: '@gray600',
        },
    }, 'transition mt-4 text-md lg:text-sm'),
    docSelected: css({
        color: '@primary600!',
    }),
};

export default sidebarStyle;
