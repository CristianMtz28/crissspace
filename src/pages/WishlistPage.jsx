import { wishlistItems } from '../data/wishlist.js';

function WishlistPage() {
    return (
        <section>
            <h1 className="text-2xl font-bold">
                Mi wishlist
            </h1>

            <p className="mt-2 text-sm text-gray-500 dark:text-[#AAA9A3]">
                Todas esas cosas que algún día me gustaría tener.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
                {wishlistItems.map((item) => (
                    <article
                        key={item.id}
                        className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-[#39372F] dark:bg-[#1C1D1C]"
                    >
                        
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-36 items-center justify-center p-3"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </a>


                        <div className="flex flex-1 flex-col gap-3 p-3">
                            <h2 className="line-clamp-2 text-sm font-semibold">
                                {item.name}
                            </h2>

                            
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-100 dark:border-[#39372F] dark:bg-transparent dark:text-[#DDBC7C] dark:hover:bg-[#29271F]"
                            >
                                Regalar ahora ↗
                            </a>

                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default WishlistPage;
