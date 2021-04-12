import { flexCenter, marginY } from '@niftycss/css';
import { css } from '../../lib/nifty';
import containerStyle from './container';

const homeStyle = css({
    ...marginY`5rem`,
    ...flexCenter,
}, containerStyle, 'space-x-8');

export default homeStyle;
