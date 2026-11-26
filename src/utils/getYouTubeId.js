/*Código que permite colocar URLs desde Youtube para las portadas de los posts */


export function getYouTubeId(url) {
    try {
        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname;

        let id = null;

        if (hostname === 'youtu.be') {
            id = parsedUrl.pathname.split('/')[1];
        } else if (
            ['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(hostname)
        ) {
            if (parsedUrl.pathname === '/watch') {
                id = parsedUrl.searchParams.get('v');
            } else if (
                parsedUrl.pathname.startsWith('/embed/') ||
                parsedUrl.pathname.startsWith('/shorts/')
            ) {
                id = parsedUrl.pathname.split('/')[2];
            }
        }

        return /^[a-zA-Z0-9_-]{11}$/.test(id ?? '') ? id : null;
    } catch {
        return null;
    }
}
