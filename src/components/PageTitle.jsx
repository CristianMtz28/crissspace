
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
    '/': 'Home',
    '/blog': 'Blog',
    '/quotes': 'Quotes',
    '/wishlist': 'Wishlist',
    '/cine-series': 'Cine y series',
    '/futbol': 'Fútbol',
    '/musica': 'Música',
    '/videojuegos': 'Videojuegos',
    '/comics': 'Cómics',
    '/viajes': 'Viajes',
    '/programacion': 'Programación',
    '/work': 'Work',
};

function PageTitle() {
    const { pathname } = useLocation();

    useEffect(() => {
        const title = pageTitles[pathname] || 'CrissSpace';

        document.title = `${title} - Cristian Martínez`;
    }, [pathname]);

    return null;
}

export default PageTitle;
