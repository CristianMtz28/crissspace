import { Link } from 'react-router-dom';
import { categories as categoryList } from '../../data/categories';
import { slugify } from '../../utils/slugify';
import YouTubeCover from './YouTubeCover';

function PostCard({
    title,
    content,
    author,
    date,
    time,
    categories = [],
    tags = [],
    cover = null,
    type = 'article',
    showCategories = true,
}) {

    const labels = [...new Set([...categories, ...tags])];
    const hasCover = Boolean(cover?.src && cover?.showInFeed);
    const isSideCover =
    hasCover &&
    cover.layout === 'side';

    return (
        <article
            className={`overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-[#39372F] dark:bg-[#1C1D1C] ${
                isSideCover ? 'flex flex-col sm:flex-row' : ''
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
                            ? 'aspect-[9/16] sm:w-1/3 sm:shrink-0'
                            : 'aspect-video'
                    }`}
                />
            )}


            {/*Este código renderiza la portada vertical de lado izquierdo */}
            {isSideCover && cover.type === 'image' && (
                <img
                    src={cover.src}
                    alt={`Portada de ${title}`}
                    className="h-64 w-full object-cover sm:h-auto sm:w-1/3 sm:shrink-0"
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

                <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-700 dark:bg-[#29271F] dark:text-[#DDBC7C]">
                        CM
                    </div>

                    <div>
                        <p className="text-sm font-semibold">
                            {author}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-[#AAA9A3]">
                            {date} - {time}
                        </p>
                    </div>
                </div>

                {type === 'quock' && (
                    <div
                        className="mb-0 font-serif text-5xl leading-none text-[#8B6A32] dark:text-[#DDBC7C]"
                        aria-hidden="true"
                    >
                        “
                    </div>
                )}

                {type === 'article' && title && (
                    <h2 className="text-xl font-bold">
                        {title}
                    </h2>
                )}

                <p
                    className={
                        type === 'quock'
                            ? 'font-serif text-xl leading-relaxed text-gray-800 dark:text-gray-100 italic text-justify'
                            : 'mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-justify'
                    }
                >
                    {content}
                </p>

                
                
                
                <div className="mt-3 flex flex-wrap items-center gap-2">
                    {showCategories && categories.map((category) => {
                        const categoryData = categoryList.find(
                            (item) => item.name === category
                        );

                        const categoryClass = "rounded-full bg-[#F5EFE3] px-3 py-1 text-xs font-medium text-[#8B6A32] dark:bg-[#29271F] dark:text-[#DDBC7C]";

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




            </div>

        </article>
    );
}

export default PostCard;
