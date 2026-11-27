/*Página que de cada publicación grande (articulo) */

import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import { formatDate, formatTime } from '../utils/formatDate';
import YouTubeCover from '../components/posts/YouTubeCover';
import { Link } from 'react-router-dom';
import { categories as categoryList } from '../data/categories';
import { slugify } from '../utils/slugify';

function ArticlePage() {
    const { slug } = useParams();

    const post = posts.find(
        (post) => post.type === 'article' && post.slug === slug
    );

    if (!post) {
        return <h1>Artículo no encontrado</h1>;
    }

    /*Bloque que renderiza las imagenes */
    const hasCover = Boolean(
        post.cover?.src && post.cover?.showInArticle
    );

    const hasLabels =
    Boolean(post.categories?.length) ||
    Boolean(post.tags?.length);


    return (
        <article className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-[#39372F] dark:bg-[#1C1D1C]">

            {/*Renderización de la portada en */}
            {hasCover && post.cover.type === 'image' && (
                <img
                    src={post.cover.src}
                    alt={`Portada de ${post.title}`}
                    className="max-h-[600px] w-full object-contain"
                />
            )}

            {/*Renderización de videos almacenados */}
            {hasCover && post.cover.type === 'video' && (
                <video
                    src={post.cover.src}
                    poster={post.cover.poster}
                    controls
                    playsInline
                    preload="metadata"
                    className="max-h-[600px] w-full bg-black object-contain"
                />
            )}

            {/*Renderización de videos desde YouTube */}
            {hasCover && post.cover.type === 'youtube' && (
                <YouTubeCover
                    src={post.cover.src}
                    title={post.title}
                    layout="banner"
                />
            )}

            <div className="px-8 py-8">

                <header>
                    <h1 className="text-4xl font-bold leading-tight tracking-tight">
                        <span className="post-title-highlight article-title-highlight">
                            {post.title}
                        </span>
                    </h1>

                    <p className="mt-5 text- text-gray-500 dark:text-[#AAA9A3]">
                        {formatDate(post.createdAt)} · {formatTime(post.createdAt)}
                    </p>
                </header>

                <div className="font-body mt-8 whitespace-pre-wrap text-base leading-relaxed text-gray-800 dark:text-gray-200">
                    {post.content
                        .split('\n')
                        .map((line) => line.trim())
                        .join('\n')}
                </div>

                {hasLabels && (
                    <footer className="mt-8 border-t border-gray-200 pt-6 dark:border-[#39372F]">

                        <div className="flex flex-col gap-3">

                            {Boolean(post.categories?.length) && (
                                <div className="flex flex-wrap items-center gap-2">

                                    {post.categories.map((category) => {
                                        const categoryData = categoryList.find(
                                            (item) => item.name === category
                                        );

                                        const categoryClass = `rounded-full px-3 py-1 text-xs font-medium ${
                                            categoryData?.colorClass ??
                                            'bg-[#F5EFE3] text-[#8B6A32] dark:bg-[#29271F] dark:text-[#DDBC7C]'
                                        }`;

                                        if (!categoryData) {
                                            return (
                                                <span key={category} className={categoryClass}>
                                                    {category}
                                                </span>
                                            );
                                        }

                                        return (
                                            <Link
                                                key={category}
                                                to={categoryData.path}
                                                className={`${categoryClass} transition-opacity duration-200 hover:opacity-70`}
                                            >
                                                {category}
                                            </Link>
                                        );
                                    })}

                                </div>
                            )}

                            {Boolean(post.tags?.length) && (
                                <div className="flex flex-wrap items-center gap-2">

                                    {post.tags.map((tag) => (
                                        <Link
                                            key={`tag-${tag}`}
                                            to={`/tag/${slugify(tag)}`}
                                            className="text-xs text-gray-500 transition-colors duration-200 hover:text-[#8B6A32] dark:text-[#AAA9A3] dark:hover:text-[#DDBC7C]"
                                        >
                                            #{tag.replace(/\s+/g, '')}
                                        </Link>
                                    ))}

                                </div>
                            )}

                        </div>

                    </footer>
                )}

            </div>

        </article>
    );
}

export default ArticlePage;