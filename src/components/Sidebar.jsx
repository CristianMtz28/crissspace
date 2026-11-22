import { SiPlaystation } from 'react-icons/si';
import { TbBallFootball } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

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
        { label: 'Quocks', path: '/quocks', icon: MessageCircle },
    ];

    const topicItems = [
        { label: 'Cine y series', path: '/cine-series', icon: Clapperboard },
        { label: 'Fútbol', path: '/futbol', icon: TbBallFootball },
        { label: 'Música', path: '/musica', icon: AudioWaveform },
        { label: 'Videojuegos', path: '/videojuegos', icon: SiPlaystation, iconSize: 23 },
        { label: 'Comics', path: '/comics', icon: BookOpen },
        { label: 'Viajes', path: '/viajes', icon: Plane },
        { label: 'Programación', path: '/programacion', icon: CodeXml },
    ];

    return (
        <aside className="p-4">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Explorar
            </h2>

            <nav className="flex flex-col gap-1">
                {exploreItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] transition-colors ${
                                    isActive
                                        ? 'bg-gray-900 font-semibold text-white dark:bg-[#29271F] dark:text-[#DDBC7C]'
                                        : 'hover:bg-gray-200 dark:hover:bg-[#29271F]'
                                }`
                            }
                        >
                            <Icon size={18} strokeWidth={1.8} />
                            <span>{item.label}</span>
                        </NavLink>

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
                        
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] transition-colors ${
                                    isActive
                                        ? 'bg-gray-900 font-semibold text-white dark:bg-[#29271F] dark:text-[#DDBC7C]'
                                        : 'hover:bg-gray-200 dark:hover:bg-[#29271F]'
                                }`
                            }
                        >
                            <Icon size={item.iconSize || 18} />
                            <span>{item.label}</span>
                        </NavLink>

                    );
                })}
            </nav>

            <div className="my-5 border-t border-gray-200 dark:border-[#39372F]" />

            <NavLink
                to="/work"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-semibold transition-colors hover:bg-gray-200 dark:hover:bg-[#29271F]"
            >
                <BriefcaseBusiness size={18} strokeWidth={1.8} />
                <span>Work / Portafolio</span>
            </NavLink>

            <div className="my-5 border-t border-gray-200 dark:border-[#39372F]" />
            <div className="px-3">
                <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-[#B8B1A5]">
                    Detrás del espacio
                </h2>

                <p className="text-xs leading-relaxed text-gray-600 dark:text-[#A69F93]">
                    Hecho con calma, café y un poquito de desvelo. ☾
                </p>
            </div>
        </aside>
    );
}

export default Sidebar;
