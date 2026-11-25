/*Obteniendo excerpts de los artículos para colocar en los postcards */

export function getExcerpt(post, maxLength = 220) {
    if (post.type === 'quock') {
        return post.content;
    }

    if (post.excerpt?.trim()) {
        return post.excerpt;
    }

    if (post.content.length <= maxLength) {
        return post.content;
    }

    return post.content.slice(0, maxLength).trimEnd() + '…';
}
