import { FC, ReactElement } from 'react';
import Link from 'next/link';
import buttonStyle from './button-style';

interface Props {
    title: string;
    icon?: ReactElement;
    href: string;
}

const Button: FC<Props> = ({ title, icon, href }: Props): ReactElement => (
    <Link href={href}>
        <a className={buttonStyle.button}>
            { icon }
            { title }
        </a>
    </Link>
);

export default Button;
