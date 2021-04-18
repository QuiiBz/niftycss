import { flexCenter, paddingY } from '@niftycss/css';
import { css } from '../../lib/nifty';
import containerStyle from '../styles/container';

const footerStyle = {
    footer: css({
        borderColor: '$border',
        ...paddingY`2rem`,
        ...flexCenter,
    }, containerStyle, 'border-t'),
    text: css({
        color: '$textLight',
    }),
};

export default footerStyle;
