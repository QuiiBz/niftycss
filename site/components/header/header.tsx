import { FC, ReactElement } from 'react';
import Link from 'next/link';
import headerStyle from './header-style';
import { darkTheme, setTheme, whiteTheme } from '../../lib/nifty';

const Header: FC = (): ReactElement => (
    <header className={headerStyle.header}>
        <Link href="/">
            Home
        </Link>
        <div className={headerStyle.buttons}>
            <button type="button" onClick={() => setTheme((t) => (t === whiteTheme ? darkTheme : whiteTheme))}>
                Theme
            </button>
            <Link href="/docs/welcome">
                <a className={headerStyle.button}>Docs</a>
            </Link>
            <Link href="https://github.com/QuiiBz/niftycss">
                <a className={headerStyle.button}>GitHub</a>
            </Link>
        </div>
    </header>
);

export default Header;
