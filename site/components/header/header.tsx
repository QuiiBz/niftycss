import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import headerStyle from './header-style';
import ThemeToggle from './themeToggle/themeToggle';

const Header: FC = (): ReactElement => {
    const { asPath } = useRouter();

    return (
        <header className={headerStyle.header}>
            <Link href="/">
                Home
            </Link>
            <div className={headerStyle.buttons}>
                <ThemeToggle />
                <Link href="/docs/welcome">
                    <a className={`${headerStyle.button} ${asPath.startsWith('/docs') && headerStyle.buttonSelected}`}>Docs</a>
                </Link>
                <Link href="https://github.com/QuiiBz/niftycss">
                    <a className={headerStyle.button}>GitHub</a>
                </Link>
            </div>
        </header>
    );
};

export default Header;
