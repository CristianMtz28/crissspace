function PostCard() {
    return (
        <article className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-[#39372F] dark:bg-[#1C1D1C]">
            <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-700 dark:bg-[#29271F] dark:text-[#DDBC7C]">
                    CM
                </div>

                <div>
                    <p className="text-sm font-semibold">
                        Cristian Martínez
                    </p>
                    <p className="text-xs text-gray-500 dark:text-[#AAA9A3]">
                        16 de noviembre de 2026
                    </p>
                </div>
            </div>

            <h2 className="text-xl font-bold">
                Bienvenidos a CrissSpace
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                Un espacio para compartir ideas, experiencias,
                programación, videojuegos y todo aquello que
                forma parte de mi universo.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-[#29271F] dark:text-[#DDBC7C]">
                    #Personal
                </span>
            </div>
        </article>
    );
}

export default PostCard;
