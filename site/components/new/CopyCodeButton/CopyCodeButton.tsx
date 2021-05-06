/* eslint-disable no-nested-ternary */
import {
    box, flexRow, paddingX, paddingY,
} from '@niftycss/css';
import {
    FC, MouseEvent, ReactElement, useState,
} from 'react';
import { styled } from '../../../lib/nifty';

type ButtonProps = {
    iconSide: 'left' | 'right';
};

const Button = styled<ButtonProps>('button', ({ iconSide }) => ({
    ...flexRow,
    ...paddingY`12px`,
    ...paddingX`26px`,
    flexDirection: iconSide === 'left' ? 'row' : 'row-reverse',
    alignItems: 'center',
    width: 'max-content',
    background: 'transparent',
    color: '@gray600',
    fontSize: '16px',
    boxShadow: '0 0 0 1px @gray400',
    borderRadius: '12px',
    fontFamily: 'monospace',
    position: 'relative',
    ':hover': {
        boxShadow: '0 0 0 1px @gray500',
        '*svg': {
            color: '@gray600',
        },
    },
    '*svg': {
        ...box`20px`,
        color: '@gray500',
        transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '150ms',
        ...(iconSide === 'left' ? { marginRight: '10px' } : { marginLeft: '10px' }),
    },
}), 'transition');

type CopiedProps = {
    show: boolean;
};

const CopiedMsg = styled<CopiedProps>('span', ({ show }) => ({
    position: 'absolute',
    top: '-25px',
    right: '50%',
    transform: 'translateX(50%)',
    fontSize: '12px',
    color: '@gray500',
    pointerEvents: 'none',
    opacity: show ? 1 : 0,
}));

type Props = {
    icon?: ReactElement;
    iconSide?: ButtonProps['iconSide'];
    children: string;
};

const CopyCodeButton: FC<Props> = ({
    icon, iconSide = 'left', children,
}: Props): ReactElement => {
    const [copied, setCopied] = useState(false);

    const onClick = async (event: MouseEvent) => {
        event.preventDefault();
        await navigator.clipboard.writeText(children);

        setCopied(true);
    };

    return (
        <Button
            type="button"
            onClick={onClick}
            iconSide={iconSide}
        >
            <CopiedMsg show={copied}>
                Copied to clipboard!
            </CopiedMsg>
            { icon }
            { children }
        </Button>
    );
};

export default CopyCodeButton;
