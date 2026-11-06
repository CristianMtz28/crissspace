function Sidebar() {
    const menuItems = [
        { label: 'Inicio', path: '/' },
        { label: 'Blog', path: '/blog' },
        { label: 'Quotes', path: '/quotes' },
        { label: 'Videojuegos', path: '/videojuegos' },
    ];
    return (
        <aside className="rounded-lg bg-gray-100 p-4">
            <h2 className="mb-4 text-sm font-bold text-gray-500">Próximamente</h2>
                <nav className="flex flex-col gap-3">
                    {menuItems.map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            className="p-3 rounded-lg hover:bg-gray-200"
                        >
                            {item.label}
                        </a>
                        ))}
                </nav>
        </aside>
    );
}

export default Sidebar;