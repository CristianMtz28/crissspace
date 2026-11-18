function PostCard({
    title,
    content,
    author,
    date,
    time,
    category,
    coverImage,
    showCoverInFeed = true,
    type='article',
}) {
    return (
        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-[#39372F] dark:bg-[#1C1D1C]">

            {coverImage && showCoverInFeed && (
                <img
                    src={coverImage}
                    alt={`Portada de ${title}`}
                    className="h-64 w-full object-cover object-center"
                />
            )}

            <div className="p-5">

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
                            ? 'font-serif text-xl leading-relaxed text-gray-800 dark:text-gray-100 italic'
                            : 'mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300'
                    }
                >
                    {content}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {type === 'quock' && (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-[#29271F] dark:text-[#DDBC7C]">
                            Quock
                        </span>
                    )}

                    {category && (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-[#29271F] dark:text-[#DDBC7C]">
                            {category}
                        </span>
                    )}
                </div>

            </div>

        </article>
    );
}

export default PostCard;
