import { box } from '@niftycss/css';
import { styled } from '../../lib/nifty';

type Props = {
    responsiveOnly?: boolean;
    stroke: boolean;
};

const IconButton = styled<Props>('button', ({ responsiveOnly = false, stroke }) => ({
    marginLeft: '20px',
    $md: {
        display: responsiveOnly ? 'none' : 'block',
        '*svg': {
            fill: 'red',
            ...box`30px`,
        },
    },
    '*svg': {
        ...box`20px`,
        ...(stroke ? {
            stroke: '@gray500',
            ':hover': {
                stroke: '@gray600',
            },
        } : {
            fill: '@gray500',
            ':hover': {
                fill: '@gray600',
            },
        }),
    },
}));

export default IconButton;
