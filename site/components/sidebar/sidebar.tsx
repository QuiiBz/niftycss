import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DocType from '../../types/docs';
import sidebarStyle from './sidebar-style';

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
        <ul className={sidebarStyle.container({ responsive, toggled })}>
            {
                sidebar.map(({ category, docs: categoryDocs }) => (
                    <li className={sidebarStyle.category} key={category}>
                        <p className={sidebarStyle.title}>{ category.replace('-', ' ') }</p>
                        <ul className={sidebarStyle.docs}>
                            {
                                categoryDocs
                                    .sort((a, b) => (a.order > b.order ? 1 : -1))
                                    .map(({ title, slug }) => (
                                        <Link
                                            key={slug}
                                            href={`/docs/${category}/${slug}`}
                                        >
                                            <li className={`${sidebarStyle.doc} ${slug === routerSlug && sidebarStyle.docSelected}`}>
                                                { title }
                                            </li>
                                        </Link>
                                    ))
                            }
                        </ul>
                    </li>
                ))
            }
        </ul>
    );
};

export default Sidebar;
