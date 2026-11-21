import { useState } from 'react';
import { wishlistItems } from '../../data/wishlist.js';
import { Link } from 'react-router-dom';

function WishlistWidget() {
    const [selectedItems] = useState(() =>
        [...wishlistItems]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
    );

    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-[#39372F] dark:bg-[#1C1D1C]">
            <h2 className="text-lg font-semibold">
                Mi wishlist
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-[#AAA9A3]">
                Algunas cosas que me gustaría tener.
            </p>

            <div className="mt-4 flex flex-col gap-3">
            {selectedItems.map((item) => (
                <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 transition-colors duration-200 hover:bg-gray-100 dark:border-[#39372F] dark:hover:bg-[#29271F]"
                >
                    {item.image && (
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-12 w-12 shrink-0 rounded-lg object-cover"
                        />
                    )}

                    <span className="text-sm font-medium">
                        {item.name}
                    </span>
                </a>
            ))}
            </div>
            
            <Link
                to="/wishlist"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold transition-colors duration-200 hover:bg-gray-100 dark:border-[#39372F] dark:bg-transparent dark:text-[#DDBC7C] dark:hover:bg-[#29271F]"
            >
                Ver wishlist completa →
            </Link>

        </section>
    );
}

export default WishlistWidget;
