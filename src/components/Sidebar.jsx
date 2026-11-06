function Sidebar() {
    const menuItems = [
        { label: 'Inicio', path: '/', icon: '🏠' },
        { label: 'Blog', path: '/blog', icon: '📝' },
        { label: 'Quotes', path: '/quotes', icon: '💬' },
        { label: 'Videojuegos', path: '/videojuegos', icon: '🎮' },
        { label: 'Work', path: '/work', icon: '💼' },
    ];
    const currentPath = window.location.pathname;
    return (
        <aside className="p-4">
            <h2 className="mb-4 text-sm font-bold text-gray-500">Explorar</h2>
                <nav className="flex flex-col gap-3">
                    {menuItems.map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            className={`flex items-center gap-3 rounded-lg p-3 transition-colors ${
                            currentPath === item.path
                                ? 'bg-gray-900 font-semibold text-white dark:bg-[#29271F] dark:text-[#DDBC7C]'
                                : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span>{item.label}</span>
                        </a>
                        ))}
                </nav>
        </aside>
    );
}

export default Sidebar;