import { FC, ReactElement, ReactNode } from 'react';
import Footer from './Footer/Footer';
import Meta from './meta';
import Header from './new/Header/Header';
import DocType from '../types/docs';
import Background from './Background';

interface Props {
    title?: string;
    docs?: DocType[];
    children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Layout: FC<Props> = ({ title, docs, children }: Props): ReactElement => (
    <>
        <Meta title={title} />
        <Background>
            <Header />
            <main>{children}</main>
            <Footer />
        </Background>
    </>
);

export default Layout;
