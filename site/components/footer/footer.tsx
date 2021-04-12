import { FC, ReactElement } from 'react';
import footerStyle from './footer-style';

const Footer: FC = (): ReactElement => (
    <footer className={footerStyle.footer}>
        <p className={footerStyle.text}>
            Copyright © 2021 Tom Lienard and contributors - Licensed under MIT
        </p>
    </footer>
);

export default Footer;
