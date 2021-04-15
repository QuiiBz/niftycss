import {
    flexCenter, flexColumn, marginY,
} from '@niftycss/css';
import { css } from '../../lib/nifty';
import containerStyle from './container';

const homeStyle = {
    main: css({
        ...flexColumn,
        ...marginY`5rem`,
    }, containerStyle),
    container: css({
        ...flexCenter,
    }, 'space-x-8 mb-12'),
};

export default homeStyle;
