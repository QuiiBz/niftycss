import { flexCenter, paddingY } from '@niftycss/css';
import { css } from '../../lib/nifty';
import containerStyle from '../styles/container';

const footerStyle = {
    footer: css((t) => ({
        borderColor: t.border,
        ...paddingY`2rem`,
        ...flexCenter,
    }), containerStyle, 'border-t'),
    text: css((t) => ({
        color: t.textLight,
    })),
};

export default footerStyle;
