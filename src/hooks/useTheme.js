/*Hook que permite diferenciar entre 'Lado - A' y 'Lado - B' según la hora
07:00 - 17:59 para Lado A
18:00 - 06:59 para Lado B */


import { useEffect, useState } from 'react';

const TIME_ZONE = 'America/Mexico_City';
const STORAGE_KEY = 'crissspace-theme-session';

// Obtiene la fecha y hora actuales de CDMX.
function getMexicoDateTime() {
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: TIME_ZONE,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        hourCycle: 'h23',
    }).formatToParts(new Date());

    const values = Object.fromEntries(
        parts.map(({ type, value }) => [type, value])
    );

    return {
        date: `${values.year}-${values.month}-${values.day}`,
        hour: Number(values.hour),
    };
}

// Identifica el último cambio programado.
function getSchedule() {
    const { date, hour } = getMexicoDateTime();

    if (hour >= 18) {
        return {
            isDark: true,
            id: `${date}-18`,
        };
    }

    if (hour >= 7) {
        return {
            isDark: false,
            id: `${date}-07`,
        };
    }

    const yesterday = new Date(`${date}T12:00:00Z`);
    yesterday.setUTCDate(yesterday.getUTCDate() - 1);

    return {
        isDark: true,
        id: `${yesterday.toISOString().slice(0, 10)}-18`,
    };
}

// Recupera la elección manual si sigue vigente.
function getInitialTheme() {
    const schedule = getSchedule();

    try {
        const saved = JSON.parse(
            sessionStorage.getItem(STORAGE_KEY)
        );

        if (
            saved &&
            typeof saved.isDark === 'boolean' &&
            saved.scheduleId === schedule.id
        ) {
            return saved.isDark;
        }
    } catch {
        // Si no hay una preferencia válida, usamos el horario.
    }

    return schedule.isDark;
}

export default function useTheme() {
    const [isDark, setIsDark] = useState(getInitialTheme);

    useEffect(() => {
        function syncTheme() {
            const schedule = getSchedule();

            try {
                const saved = JSON.parse(
                    sessionStorage.getItem(STORAGE_KEY)
                );

                if (
                    saved &&
                    typeof saved.isDark === 'boolean' &&
                    saved.scheduleId === schedule.id
                ) {
                    setIsDark(saved.isDark);
                } else {
                    setIsDark(schedule.isDark);
                    sessionStorage.removeItem(STORAGE_KEY);
                }
            } catch {
                setIsDark(schedule.isDark);
                sessionStorage.removeItem(STORAGE_KEY);
            }
        }

        // Revisa si llegó un cambio programado.
        const interval = setInterval(syncTheme, 15000);

        // Comprueba el horario al regresar a la pestaña.
        window.addEventListener('focus', syncTheme);
        document.addEventListener('visibilitychange', syncTheme);

        return () => {
            clearInterval(interval);
            window.removeEventListener('focus', syncTheme);
            document.removeEventListener('visibilitychange', syncTheme);
        };
    }, []);

    function changeTheme(value) {
        const schedule = getSchedule();

        setIsDark(value);

        sessionStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                isDark: value,
                scheduleId: schedule.id,
            })
        );
    }

    return { isDark, setIsDark: changeTheme };
}
