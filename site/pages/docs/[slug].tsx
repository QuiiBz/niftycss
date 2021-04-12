import { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { flexRow } from '@niftycss/css';
import DocContent from '../../components/docContent/docContent';
import Layout from '../../components/layout';
import { getAllDocs, getDocsBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import DocType from '../../types/docs';
import Sidebar from '../../components/sidebar/sidebar';
import containerStyle from '../../components/styles/container';
import { css } from '../../lib/nifty';

interface Props {
    docs: DocType[];
    doc: DocType;
}

const style = css({
    ...flexRow,
}, containerStyle);

const Doc: FC<Props> = ({ docs, doc }: Props): ReactElement => {
    const router = useRouter();
    if (!router.isFallback && !doc?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <Layout title={`${doc.title} - NiftyCSS`}>
            {router.isFallback ? (
                <p>Loading…</p>
            ) : (
                <div className={style}>
                    <Sidebar docs={docs} />
                    <DocContent doc={doc} />
                </div>
            )}
        </Layout>
    );
};

export default Doc;

type Params = {
    params: {
        slug: string
    }
};

export const getStaticProps = async ({ params }: Params) => {
    const docs = getAllDocs([
        'title',
        'slug',
        'category',
        'order',
        'content',
    ]);
    const doc = getDocsBySlug(params.slug, [
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
    const posts = getAllDocs(['slug']);

    return {
        paths: posts.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    };
};
