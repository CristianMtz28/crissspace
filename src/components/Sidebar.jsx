import { SiPlaystation } from 'react-icons/si';
import { TbBallFootball } from 'react-icons/tb';

import {
    House,
    FileText,
    MessageCircle,
    BriefcaseBusiness,
    CodeXml,
    AudioWaveform,
    Clapperboard,
    BookOpen,
    Plane,
} from 'lucide-react';

function Sidebar() {
    const exploreItems = [
        { label: 'Inicio', path: '/', icon: House },
        { label: 'Blog', path: '/blog', icon: FileText },
        { label: 'Quotes', path: '/quotes', icon: MessageCircle },
    ];

    const topicItems = [
        { label: 'Programación', path: '/programacion', icon: CodeXml },
        { label: 'Videojuegos', path: '/videojuegos', icon: SiPlaystation, iconSize: 23 },
        { label: 'Cine y series', path: '/cine-series', icon: Clapperboard },
        { label: 'Cómics', path: '/comics', icon: BookOpen },
        { label: 'Fútbol', path: '/futbol', icon: TbBallFootball },
        { label: 'Viajes', path: '/viajes', icon: Plane },
        { label: 'Música', path: '/musica', icon: AudioWaveform },
    ];

    const currentPath = window.location.pathname;

    return (
        <aside className="p-4">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Explorar
            </h2>

            <nav className="flex flex-col gap-1">
                {exploreItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <a
                            key={item.path}
                            href={item.path}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] transition-colors ${
                                currentPath === item.path
                                    ? 'bg-gray-900 font-semibold text-white dark:bg-[#29271F] dark:text-[#DDBC7C]'
                                    : 'hover:bg-gray-200 dark:hover:bg-[#29271F]'
                            }`}
                        >
                            <Icon size={18} strokeWidth={1.8} />
                            <span>{item.label}</span>
                        </a>
                    );
                })}
            </nav>

            <div className="my-5 border-t border-gray-200 dark:border-[#39372F]" />

            <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Temas
            </h2>

            <nav className="flex flex-col gap-1">
                {topicItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <a
                            key={item.path}
                            href={item.path}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] transition-colors ${
                                currentPath === item.path
                                    ? 'bg-gray-900 font-semibold text-white dark:bg-[#29271F] dark:text-[#DDBC7C]'
                                    : 'hover:bg-gray-200 dark:hover:bg-[#29271F]'
                            }`}
                        >
                            <Icon size={item.iconSize || 18} />
                            <span>{item.label}</span>
                        </a>
                    );
                })}
            </nav>

            <div className="my-5 border-t border-gray-200 dark:border-[#39372F]" />

            <a
                href="/work"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-semibold transition-colors hover:bg-gray-200 dark:hover:bg-[#29271F]"
            >
                <BriefcaseBusiness size={18} strokeWidth={1.8} />
                <span>Work / Portafolio</span>
            </a>
        </aside>
    );
}

export default Sidebar;
