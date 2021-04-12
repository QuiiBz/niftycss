import { css } from '../../lib/nifty';

const docStyle = {
    container: css({}, 'max-w-2xl mx-auto mt-6'),
    title: css((t) => ({
        color: t.textDark,
    }), 'text-4xl font-bold'),
    content: css((t) => ({
        color: t.textLight,
    }), 'text-md'),
};

export default docStyle;
