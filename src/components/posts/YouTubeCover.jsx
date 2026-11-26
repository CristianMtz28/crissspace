/*Reproductor de videos de YouTube */

import { useState } from 'react';
import { getYouTubeId } from '../../utils/getYouTubeId';

function YouTubeCover({ src, title, layout = 'banner' }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const videoId = getYouTubeId(src);

    if (!videoId) {
        return null;
    }

    return (
        <div
            className={`relative w-full overflow-hidden bg-black ${
                layout === 'side'
                    ? 'aspect-[9/16] rounded sm:w-[28%] sm:shrink-0'
                    : 'aspect-video'
            }`}
        >
            {isPlaying ? (
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                    title={title || 'Video de YouTube'}
                    className="h-full w-full"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                />
            ) : (
                <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="group relative block h-full w-full cursor-pointer"
                    aria-label="Reproducir video de YouTube"
                >
                    <img
                        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                        alt={`Miniatura de ${title || 'video de YouTube'}`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="rounded-xl bg-[#FF0000] px-6 py-3 text-2xl text-white transition-transform duration-200 group-hover:scale-110">
                            ▶
                        </span>
                    </div>
                </button>
            )}
        </div>
    );
}

export default YouTubeCover;
