import Link from 'next/link';
import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Author from '../types/author';

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    author: Author
    slug: string
};

const PostPreview = ({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
}: Props) => (
    <div>
        <div className="mb-5">
            <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <h3 className="text-3xl mb-3 leading-snug">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="hover:underline">{title}</a>
            </Link>
        </h3>
        <div className="text-lg mb-4">
            <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <Avatar name={author.name} picture={author.picture} />
    </div>
);

export default PostPreview;
