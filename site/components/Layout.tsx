import { FC, ReactElement, ReactNode } from 'react';
import Footer from './Footer/Footer';
import Meta from './meta';
import Header from './Header/Header';
import DocType from '../types/docs';
import Background from './Background';

type Props = {
    title?: string;
    docs: DocType[];
    children: ReactNode;
};

const Layout: FC<Props> = ({ title, docs, children }: Props): ReactElement => (
    <>
        <Meta title={title} />
        <Background>
            <Header docs={docs} />
            <main>{children}</main>
            <Footer />
        </Background>
    </>
);

export default Layout;
