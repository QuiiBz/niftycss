import { flexColumn, paddingX } from '@niftycss/css';
import { HEADER_HEIGHT } from '../../lib/constants';
import { css } from '../../lib/nifty';

type Props = {
    responsive: boolean;
    toggled?: boolean;
};

const sidebarStyle = {
    container: css<Props>(({ responsive, toggled = false }) => ({
        ...flexColumn,
        ...paddingX`2rem`,
        borderColor: '@gray400',
        minWidth: '17rem',
        display: responsive ? 'block' : 'none',
        position: responsive ? 'fixed' : 'sticky',
        left: toggled ? 0 : '-100%',
        top: responsive ? HEADER_HEIGHT : 0,
        overflowY: 'scroll',
        height: '100vh',
        zIndex: 9,
        background: '@bg',
        $lg: {
            display: responsive ? 'none' : 'block',
        },
    }), 'border-r pb-10'),
    category: css({
        ...flexColumn,
        ':last-child': {
            paddingBottom: '120px',
        },
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
