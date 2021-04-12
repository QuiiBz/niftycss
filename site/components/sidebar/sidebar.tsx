import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DocType, { Category } from '../../types/docs';
import sidebarStyle from './sidebar-style';
import { getTheme } from '../../lib/nifty';

interface Props {
    docs: DocType[];
}

const Sidebar: FC<Props> = ({ docs }: Props): ReactElement => {
    const sidebar: { category: string, docs: DocType[] }[] = [];

    Object
        .keys(Category)
        .filter((current) => Number.isNaN(Number(current)))
        .forEach((currentCategory) => {
            sidebar.push({
                category: currentCategory,
                docs: docs.filter(({ category }) => category === currentCategory),
            });
        });

    const router = useRouter();
    const routerSlug = router.query.slug;

    return (
        <ul className={sidebarStyle.container}>
            {
                sidebar
                    .sort((a, b) => (Category[a.category] > Category[b.category] ? 1 : -1))
                    .map(({ category, docs: categoryDocs }) => (
                        <li className={sidebarStyle.category} key={category}>
                            <p className={sidebarStyle.title}>{ category }</p>
                            <ul className={sidebarStyle.docs}>
                                {
                                    categoryDocs
                                        .sort((a, b) => (a.order > b.order ? 1 : -1))
                                        .map(({ title, slug }) => (
                                            <Link
                                                key={slug}
                                                href={`/docs/${slug}`}
                                            >
                                                <li
                                                    className={sidebarStyle.doc}
                                                    style={slug === routerSlug ? {
                                                        color: getTheme().accent,
                                                    } : {}}
                                                >
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
