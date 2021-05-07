import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { flexColumn, paddingX } from '@niftycss/css';
import DocType from '../../types/docs';
import { HEADER_HEIGHT } from '../../lib/constants';
import { css, styled } from '../../lib/nifty';

type SidebarProps = {
    responsive: boolean;
    toggled?: boolean;
};

const Container = styled<SidebarProps>('ul', ({ responsive, toggled = false }) => ({
    ...flexColumn,
    ...paddingX`2rem`,
    borderColor: '@gray400',
    minWidth: '17rem',
    display: responsive ? 'block' : 'none',
    position: responsive ? 'fixed' : 'sticky',
    left: toggled ? 0 : '-100%',
    top: responsive ? HEADER_HEIGHT : 0,
    overflowY: 'scroll',
    height: '100vh',
    zIndex: 9,
    background: '@bg',
    $lg: {
        display: responsive ? 'none' : 'block',
    },
}), 'border-r pb-10');

const Category = styled('li', {
    ...flexColumn,
    ':last-child': {
        paddingBottom: '120px',
    },
});

const Title = styled('h2', {
    color: '@gray600',
}, 'uppercase font-semibold text-sm lg:text-xs mt-10');

const Docs = styled('ul', {
    ...flexColumn,
});

const doc = css({
    color: '@gray500',
    cursor: 'pointer',
    ':hover': {
        color: '@gray600',
    },
}, 'transition mt-4 text-md lg:text-sm');

const docSelected = css({
    color: '@primary600!',
});

type Props = {
    docs: DocType[];
    responsive: boolean;
    toggled?: boolean;
};

const Sidebar: FC<Props> = ({ docs, responsive, toggled = false }: Props): ReactElement => {
    const categories = [
        'getting-started',
        'features',
        'css-utilities',
        'guides',
    ];
    const sidebar: { category: string, docs: DocType[] }[] = [];

    categories.forEach((currentCategory) => {
        sidebar.push({
            category: currentCategory,
            docs: docs.filter(({ category }) => category === currentCategory),
        });
    });

    const router = useRouter();
    const routerSlug = router.query.slug;

    return (
        <Container responsive={responsive} toggled={toggled}>
            {
                sidebar.map(({ category, docs: categoryDocs }) => (
                    <Category key={category}>
                        <Title>{ category.replace('-', ' ') }</Title>
                        <Docs>
                            {
                                categoryDocs
                                    .sort((a, b) => (a.order > b.order ? 1 : -1))
                                    .map(({ title, slug }) => (
                                        <Link
                                            key={slug}
                                            href={`/docs/${category}/${slug}`}
                                        >
                                            <li className={`${doc} ${slug === routerSlug && docSelected}`}>
                                                { title }
                                            </li>
                                        </Link>
                                    ))
                            }
                        </Docs>
                    </Category>
                ))
            }
        </Container>
    );
};

export default Sidebar;
