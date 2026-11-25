/*Formateando las fechas para que sean visibles en los posts */

export function formatDate(createdAt) {
    return new Intl.DateTimeFormat('es-MX', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'America/Mexico_City',
    }).format(new Date(createdAt));
}

export function formatTime(createdAt) {
    return new Intl.DateTimeFormat('es-MX', {
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
        timeZone: 'America/Mexico_City',
    }).format(new Date(createdAt));
}
