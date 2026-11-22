/*Componente que ayuda a ReactRouter a colocarse hasta arriba para la lecura de 
las publicaciones */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, [pathname]);

    return null;
}

export default ScrollToTop;
