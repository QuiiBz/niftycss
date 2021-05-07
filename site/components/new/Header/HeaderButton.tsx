import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { css } from '../../../lib/nifty';

type StyledProps = {
    selected: boolean;
};

const link = css<StyledProps>(({ selected }) => ({
    color: selected ? '@primary600!' : '@gray500',
    marginLeft: '20px',
    display: 'none',
    ':hover': {
        color: '@gray600',
    },
    $md: {
        display: 'block',
    },
}), 'transition');

type Props = {
    href: string;
    children: string;
} & StyledProps;

const HeaderButton: FC<Props> = ({ href, selected, children }: Props): ReactElement => (
    <Link href={href}>
        <a className={link({ selected })}>
            { children }
        </a>
    </Link>
);

export default HeaderButton;
