import { useState } from 'react';

function WishlistWidget() {
    const wishlistItems = [
        {
            id: 1,
            name: 'Set de LEGO - Batman The Dark Knight',
            image: '/wishlist/lego-batman.jpg',
            url: 'https://www.mercadolibre.com.mx/bloques-construccion-coche-blindado-vs-villanos-juguete-1-1/p/MLM2096885444?pdp_filters=item_id%3AMLM3807996381&from=gshop&matt_tool=64247379&matt_word=&matt_source=google&matt_campaign_id=24103553924&matt_ad_group_id=201418679200&matt_match_type=&matt_network=g&matt_device=c&matt_creative=819741205324&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735120154&matt_product_id=MLM2096885444-product&matt_product_partition_id=2493808445651&matt_target_id=aud-2006290659986:pla-2493808445651&cq_src=google_ads&cq_cmp=24103553924&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=24103553924&gbraid=0AAAAAoTLPrK6JoJ1AFLdT7T801BhJ--cK&gclid=Cj0KCQiA8OrXBhDEARIsAECtlx7LZB4BeratN0ibZRenyp_UxYGkkLW2NxY2JMzi95_Rig9YU3mFcaUaAtZXEALw_wcB'
        },
        {
            id: 2,
            name: 'Good Guy Doll - Trick or Treat Studios',
            image: '/wishlist/chucky.jpg',
            url: 'https://www.mercadolibre.com.mx/childs-play-2-chucky-good-guy-tamano-real-trick-or-treat/p/MLM20471890?pdp_filters=item_id%3AMLM5708040392&sid=bookmarks#polycard_client=bookmark&wid=MLM5708040392&sid=bookmarks'
        },
        {
            id: 3,
            name: 'Compresor Portátil Xiaomi',
            image: '/wishlist/compresor.jpg',
            url: 'https://articulo.mercadolibre.com.mx/MLM-2040152879-compresor-portatil-xiaomi-inflador-de-neumaticos-2-_JM?sid=bookmarks#polycard_client=bookmarks&sid=bookmarks'
        },
        {
            id: 4,
            name: 'Funda con Teclado para iPad',
            image: '/wishlist/tecladoiPad.jpg',
            url: 'https://www.mercadolibre.com.mx/kit-3-en-1-teclado-magic-keyboard-n-para-ipad-10th11th-a16-negro/p/MLM53284618?pdp_filters=item_id%3AMLM3880174468&sid=bookmarks#polycard_client=bookmarks&wid=MLM3880174468&sid=bookmarks'
        },
        {
            id: 5,
            name: 'Llanta para Dart - Pirelli Cinturato p7 225/45 R17 - 91Y',
            image: '/wishlist/llanta-pirelli.jpg',
            url: 'https://radialllantas.com/collections/todo/products/225-45-r17-pirelli-cinturato-p7-p7c2-91y-eo?Title=Default+Title'
        },
        {
            id: 6,
            name: 'FC 27 - PS5',
            image: '/wishlist/fc27.jpg',
            url: 'https://www.amazon.com.mx/EA-SPORTS-FC-27-PlayStation/dp/B0HC4V438Q/ref=asc_df_B0HC4V438Q?mcid=e7d870a175b03cd1a4b44ee28fa23652&tag=gledskshopmx-20&linkCode=df0&hvadid=742812198718&hvpos=&hvnetw=g&hvrand=15777028671391530029&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9139775&hvtargid=pla-2493564444430&hvocijid=15777028671391530029-B0HC4V438Q-&hvexpln=0&language=es_MX&th=1'
        },
    ];

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
        </section>
    );
}

export default WishlistWidget;
