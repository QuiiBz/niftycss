/* eslint-disable no-nested-ternary */
import {
    box, flexRow, paddingX, paddingY,
} from '@niftycss/css';
import Link from 'next/link';
import { FC, ReactElement, ReactNode } from 'react';
import { css } from '../../lib/nifty';

type ButtonProps = {
    iconSide: 'left' | 'right';
    size: 'small' | 'normal' | 'big';
    outlined: boolean;
};

const button = css<ButtonProps>(({ iconSide, size, outlined }) => ({
    ...flexRow,
    ...paddingY(size === 'big' ? '12px' : size === 'small' ? '6px' : '8px'),
    ...paddingX(size === 'big' ? '26px' : size === 'small' ? '14px' : '18px'),
    flexDirection: iconSide === 'left' ? 'row' : 'row-reverse',
    alignItems: 'center',
    width: 'max-content',
    background: outlined ? 'transparent' : '@primary600',
    color: outlined ? '@gray600' : '@white',
    fontSize: size === 'big' ? '18px' : size === 'small' ? '12px' : '16px',
    boxShadow: outlined ? '0 0 0 1px @gray400' : 'none',
    borderRadius: '12px',
    ':hover': {
        background: outlined ? 'transparent' : '@primary700',
        boxShadow: outlined ? '0 0 0 1px @gray500' : '0 2px 4px rgba(192, 112, 20, 0.2)',
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

type Props = {
    icon?: ReactElement;
    iconSide?: ButtonProps['iconSide'];
    href: string;
    size?: ButtonProps['size'];
    outlined?: boolean;
    children: ReactNode;
};

const Button: FC<Props> = ({
    icon, iconSide = 'left', href, size = 'normal', outlined = false, children,
}: Props): ReactElement => (
    <Link href={href}>
        <a className={button({ iconSide, size, outlined })}>
            { icon }
            { children }
        </a>
    </Link>
);

export default Button;
