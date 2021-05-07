import { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { flexRow } from '@niftycss/css';
import DocContent from '../../../components/DocContent/DocContent';
import Layout from '../../../components/Layout';
import { getAllDocs, getDocsBySlug } from '../../../lib/api';
import markdownToHtml from '../../../lib/markdownToHtml';
import DocType from '../../../types/docs';
import Sidebar from '../../../components/sidebar/sidebar';
import Container from '../../../components/styles/Container';
import { css } from '../../../lib/nifty';
import { HEADER_HEIGHT } from '../../../lib/constants';

interface Props {
    docs: DocType[];
    doc: DocType;
}

const style = css({
    ...flexRow,
    marginTop: HEADER_HEIGHT,
    $md: {
        marginTop: 0,
    },
});

const Doc: FC<Props> = ({ docs, doc }: Props): ReactElement => {
    const router = useRouter();
    if (!router.isFallback && !doc?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <Layout title={`${doc.title} - NiftyCSS`} docs={docs}>
            {router.isFallback ? (
                <p>Loading…</p>
            ) : (
                <Container>
                    <div className={style}>
                        <Sidebar docs={docs} responsive={false} />
                        <DocContent doc={doc} />
                    </div>
                </Container>
            )}
        </Layout>
    );
};

export default Doc;

type Params = {
    params: {
        category: string;
        slug: string;
    };
};

export const getStaticProps = async ({ params }: Params) => {
    const docs = getAllDocs([
        'title',
        'slug',
        'category',
        'order',
        'content',
    ]);
    const doc = getDocsBySlug(params.category, params.slug, [
        'title',
        'slug',
        'category',
        'order',
        'content',
    ]);
    const content = await markdownToHtml(doc.content || '');

    return {
        props: {
            docs,
            doc: {
                ...doc,
                content,
            },
        },
    };
};

export const getStaticPaths = async () => {
    const posts = getAllDocs(['slug', 'category']);

    return {
        paths: posts.map(({ category, slug }) => ({
            params: {
                category,
                slug,
            },
        })),
        fallback: false,
    };
};
