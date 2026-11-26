import { Link } from 'react-router-dom';
import { categories as categoryList } from '../../data/categories';
import { slugify } from '../../utils/slugify';
import YouTubeCover from './YouTubeCover';
import { useState } from 'react';
import ContentWarning from './ContentWarning';

function PostCard({
    title,
    content,
    date,
    time,
    categories = [],
    tags = [],
    cover = null,
    type = 'article',
    showCategories = true,
    contentWarning = null,
}) {

    const [isRevealed, setIsRevealed] = useState(false);

    const isContentHidden =
        Boolean(contentWarning?.enabled) && !isRevealed;

    const hasCover = Boolean(cover?.src && cover?.showInFeed);

    const isSideCover =
    hasCover &&
    cover.layout === 'side';

    const hasLabels =
    (showCategories && categories.length > 0) ||
    tags.length > 0;

    /*Esto entra aquí antes del return para que antes de renderizar el post valide si esta bloqueado o no*/
        if (isContentHidden) {
        return (
                <article className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-[#39372F] dark:bg-[#1C1D1C]">

                    {type === 'article' && title && (
                        <h2 className="px-5 pt-5 text-2xl font-bold leading-tight tracking-tight">
                            {title}
                        </h2>
                    )}

                    <div
                        className={
                            type === 'article'
                                ? 'mx-5 my-4 rounded-lg border border-gray-200 bg-gray-50 dark:border-[#39372F] dark:bg-[#151615]'
                                : ''
                        }
                    >
                        <ContentWarning
                            warning={contentWarning}
                            onReveal={() => setIsRevealed(true)}
                        />
                    </div>

                    <p className="px-5 pb-5 text-xs text-gray-500 dark:text-[#AAA9A3]">
                        {date} · {time}
                    </p>

                </article>
            );
        }

    return (
        <article
            className={`overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-[#39372F] dark:bg-[#1C1D1C] ${
                isSideCover
                    ? 'flex flex-col gap-4 p-4 sm:flex-row sm:items-center'
                    : ''
            } ${
                type === 'article'
                    ? 'post-card-interactive cursor-pointer'
                    : ''
            }`}
        >

            {/*Este código renderiza la portada horizontal */}
            {hasCover && cover.type === 'image' && cover.layout === 'banner' && (
                <img
                    src={cover.src}
                    alt={`Portada de ${title}`}
                    className="h-64 w-full object-cover object-center"
                />
            )}

            {/*Este código renderiza los videos .mp4 */}
            {hasCover && cover.type === 'video' && (
                <video
                    src={cover.src}
                    poster={cover.poster}
                    controls
                    playsInline
                    preload="metadata"
                    className={`w-full bg-black object-contain ${
                        isSideCover
                            ? 'aspect-[9/16] rounded sm:w-[28%] sm:shrink-0'
                            : 'aspect-video'
                    }`}
                />
            )}


            {/*Este código renderiza la portada vertical de lado izquierdo */}
            {isSideCover && cover.type === 'image' && (
                <img
                    src={cover.src}
                    alt={`Portada de ${title}`}
                    className="aspect-[3/4] w-full rounded object-cover sm:w-[28%] sm:shrink-0"
                />
            )}

            {/*Este código renderiza el video desde YouTube para colocarlo como cover de un post */}
            {hasCover && cover.type === 'youtube' && (
                <YouTubeCover
                    src={cover.src}
                    title={title}
                    layout={cover.layout}
                />
            )}

            
            <div className="min-w-0 flex-1 p-5">

                {type === 'quock' && (
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-widest text-[#8B6A32] dark:text-[#DDBC7C]">
                        <span className="font-serif text-2xl leading-none" aria-hidden="true">
                            “
                        </span>
                        <span>QUOCK</span>
                    </div>
                )}

                {type === 'article' && title && (
                    <h2 className="text-2xl font-bold leading-tight tracking-tight">
                        <span className="post-title-highlight">
                            {title}
                        </span>
                    </h2>
                )}

                <p
                    className={
                        type === 'quock'
                            ? 'font-body text-base leading-relaxed text-gray-800 dark:text-gray-100 whitespace-pre-wrap'
                            : 'font-body mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-justify'
                    }
                >
                    {content}
                </p>

                
                
                
                {hasLabels && (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                        {showCategories && categories.map((category) => {
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

                        {tags.map((tag) => (
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

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">

                    <p className="text-xs text-gray-500 dark:text-[#AAA9A3]">
                        {date} · {time}
                    </p>

                    {contentWarning?.enabled && isRevealed && (
                        <button
                            type="button"
                            onClick={() => setIsRevealed(false)}
                            className="cursor-pointer text-xs text-gray-500 transition-colors duration-200 hover:text-[#8B6A32] dark:text-[#AAA9A3] dark:hover:text-[#DDBC7C]"
                        >
                            Ocultar contenido
                        </button>
                    )}

                </div>




            </div>

        </article>
    );
}

export default PostCard;
