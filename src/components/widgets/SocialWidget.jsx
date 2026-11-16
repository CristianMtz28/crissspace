import {
    SiGithub,
    SiInstagram,
    SiYoutube,
    SiX,
} from 'react-icons/si';

import { FaLinkedinIn } from 'react-icons/fa6';

function SocialWidget() {
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/cristianmtz28',
            icon: SiGithub,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/cristianmtz28/',
            icon: FaLinkedinIn,
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/cristianmtz28',
            icon: SiInstagram,
        },
        {
            name: 'YouTube',
            url: 'https://youtube.com/cristianmtz28',
            icon: SiYoutube,
        },
        {
            name: 'X / Twitter',
            url: 'https://x.com/cristianmtz28',
            icon: SiX,
        },
    ];

    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-[#39372F] dark:bg-[#1C1D1C]">
            <h2 className="text-lg font-semibold">
                Sígueme también en:
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            title={social.name}
                            className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-100 dark:border-[#39372F] dark:bg-[#131414] dark:text-gray-100 dark:hover:border-[#DDBC7C] dark:hover:bg-[#29271F] dark:hover:text-[#DDBC7C]"
                        >
                            <Icon size={20} />
                            <span
                                className="pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-[11px] font-medium whitespace-nowrap text-gray-800 opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 dark:border-[#49443A] dark:bg-[#292929] dark:text-gray-100"
                            >
                                {social.name}
                            </span>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}

export default SocialWidget;
