/*Cover de publicación sensible */

const warningTitles = {
    humor: 'Advertencia de humor negro o sátira',
    explicit: 'Advertencia de lenguaje explícito',
    spoiler: '¡Alerta de spoilers!',
    sensitive: 'Advertencia de contenido sensible',
    custom: 'Aviso importante',
};

function ContentWarning({ warning, onReveal }) {
    return (
        <div className="flex flex-col items-center gap-4 px-6 py-8 text-center">

            <span
                className="text-3xl text-[#8B6A32] dark:text-[#DDBC7C]"
                aria-hidden="true"
            >
                ⚠
            </span>

            <h3 className="text-lg font-bold">
                {warningTitles[warning.type] ?? 'Advertencia de contenido'}
            </h3>

            <p className="max-w-md text-sm leading-relaxed text-gray-600 dark:text-[#AAA9A3]">
                {warning.message}
            </p>

            <button
                type="button"
                onClick={onReveal}
                className="cursor-pointer rounded-lg border border-[#8B6A32] px-4 py-2 text-sm font-medium text-[#8B6A32] transition-colors duration-200 hover:bg-[#F5EFE3] dark:border-[#DDBC7C] dark:text-[#DDBC7C] dark:hover:bg-[#29271F]"
            >
                Mostrar contenido
            </button>

        </div>
    );
}

export default ContentWarning;