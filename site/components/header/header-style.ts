import { flexRow } from '@niftycss/css';
import { css } from '../../lib/nifty';
import containerStyle from '../styles/container';

const headerStyle = {
    header: css({
        ...flexRow,
        borderColor: '$border',
        justifyContent: 'space-between',
        alignItems: 'center',
    }, containerStyle, 'border-b py-4'),
    buttons: css({
        ...flexRow,
        alignItems: 'center',
    }, 'space-x-5'),
    button: css({
        color: '$textLight',
        borderColor: 'transparent',
        ':hover': {
            color: '$textDark',
            borderColor: '$accent',
        },
    }, 'border-b-2'),
    buttonSelected: css({
        color: '$textDark',
        borderColor: '$accent',
    }),
};

export default headerStyle;
