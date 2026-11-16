import { useEffect, useState } from 'react';

function getTimeUntilBirthday() {
    const now = new Date();

    const year = now.getFullYear();
    let nextBirthday = new Date(year, 9, 25);

    if (now >= nextBirthday) {
        nextBirthday = new Date(year + 1, 9, 25);
    }

    const difference = nextBirthday - now;

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
    }

    function BirthdayWidget() {
        const [timeLeft, setTimeLeft] = useState(getTimeUntilBirthday);

    useEffect(() => {
        const interval = setInterval(() => {
        setTimeLeft(getTimeUntilBirthday());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-[#39372F] dark:bg-linear-to-br dark:from-[#29271F] dark:to-[#1C1D1C]">
        <p className="mb-4 text-xs font-bold tracking-widest text-gray-500 dark:text-[#AAA9A3]">
            LA PRÓXIMA VUELTA AL SOL ✧
        </p>

        <h2 className="text-lg font-semibold leading-snug">
            Una excusa para celebrar.
        </h2>

        <p className="mt-1 text-sm text-gray-500 dark:text-[#AAA9A3]">
            Mi cumpleaños · 25 de octubre 🎂
        </p>

        <div className="mt-6 grid grid-cols-4 gap-2">
            {[
            { label: 'DÍAS', value: timeLeft.days },
            { label: 'HORAS', value: timeLeft.hours },
            { label: 'MIN', value: timeLeft.minutes },
            { label: 'SEG', value: timeLeft.seconds },
            ].map((item) => (
            <div
                key={item.label}
                className="min-w-0 rounded-lg border border-gray-200 bg-gray-50 px-1 py-3 text-center dark:border-[#39372F] dark:bg-[#131414]"
            >
                <p className="text-xl font-bold tabular-nums">
                    {String(item.value).padStart(2, '0')}
                </p>
                <p className="text-[9px] tracking-normal text-gray-500 dark:text-[#AAA9A3]">
                {item.label}
                </p>
            </div>
            ))}
        </div>

        <p className="mt-5 text-xs text-gray-500 dark:text-[#AAA9A3]">
            Hay tiempo para todo.
        </p>
        </section>
    );
}

export default BirthdayWidget;
