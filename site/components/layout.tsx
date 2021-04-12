import { FC, ReactElement, ReactNode } from 'react';
import Footer from './footer/footer';
import Meta from './meta';
import Header from './header/header';
import backgroundStyle from './styles/background';

interface Props {
    title?: string;
    children: ReactNode;
}

const Layout: FC<Props> = ({ title, children }: Props): ReactElement => (
    <>
        <Meta title={title} />
        <div className={backgroundStyle}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    </>
);

export default Layout;
