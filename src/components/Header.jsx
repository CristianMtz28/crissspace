import logoCM from '../assets/logo-cm.jpeg';

function Header({ isDark, setIsDark }) {
    return (
        //Contenedor del header
        <header className="grid grid-cols-1 items-center gap-4 border-b border-gray-200 bg-white px-4 py-4 transition-colors duration-300 lg:grid-cols-[1fr_3fr_1fr] lg:gap-6 dark:border-[#38352F] dark:bg-[#131414] dark:text-gray-100">
        {/* ↑ Contenedor del header ↑ */}

        {/* Logo y nombre CrissSpace */}
        <div className="flex items-center gap-3">
            {/*Logo CM */}
            <img
            src={logoCM}
            alt="Logotipo de CrissSpace"
            className="h-12 w-12 rounded-lg object-contain"
            />
            {/* CrissSpace en Texto */}
            <div>
                <div className="text-3xl leading-none tracking-tight text-gray-900 dark:text-gray-100">
                    <span className="font-extrabold">criss</span>
                    <span className="font-light">space</span>
                </div>
            </div>
        </div>

        {/* Buscador */}
        <div className="w-full">
            <input
                type="search"
                placeholder="Buscar en CrissSpace..."
                aria-label="Buscar publicaciones"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-[#292929] dark:border-[#49443A] dark:text-gray-100 dark:placeholder:text-gray-400"
            />
        </div>

        {/* Botón de switch entre claro y obscuro y botón de inicio de sesión.*/}
        <div className="flex items-center justify-end gap-4">
            <button
                type="button"
                onClick={() => setIsDark(!isDark)}
                aria-label="Cambiar tema"
                className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:border-[#49443A] dark:bg-[#292929] dark:text-[#DDBC7C] dark:hover:bg-[#353127]"
                >
                <span aria-hidden="true">◐</span>
                <span>{isDark ? 'B · Oscuro' : 'A · Claro'}</span>
            </button>
            <button className="cursor-pointer rounded-lg px-4 py-2 text-sm border border-gray-300 hover:bg-gray-100 dark:bg-[#292929] dark:border-[#49443A] dark:text-[#DDBC7C] dark:hover:bg-[#353127]">
                Iniciar sesión
            </button>
        </div>
        </header>
    );
}

export default Header;
