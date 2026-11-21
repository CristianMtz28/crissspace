import PostCard from '../components/posts/PostCard';
function HomePage() {
    
const posts = [
        {
            id: 1,
            title: 'Bienvenidos a CrissSpace',
            content: 'Un espacio para compartir ideas, experiencias y todo aquello que me apasiona.',
            author: 'Cristian Martínez',
            date: '16 de noviembre de 2026',
            time: '20:25',
            category: 'Personal',
            type: 'article',
        },
        {
            id: 2,
            title: 'Mi camino aprendiendo React',
            content: 'Estoy construyendo mi propio sitio mientras aprendo React, Tailwind CSS y desarrollo web moderno.',
            author: 'Cristian Martínez',
            date: '17 de noviembre de 2026',
            time: '17:48',
            category: 'Programación',
            type: 'article',
        },
        {
            id: 3,
            title: '¿Por qué me gusta tanto Batman?',
            content: 'Hay algo fascinante en un personaje que, sin tener superpoderes, decide enfrentarse a sus propios miedos.',
            author: 'Cristian Martínez',
            date: '17 de noviembre de 2026',
            time: '15:12',
            category: 'Cómics',
            coverImage: '/posts/batman-cover.jpg',
            showCoverInFeed: true,
            type: 'article',
        },
        {
            id: 4,
            title: '¿Por qué creé este sitio?',
            content: 'Quiero mejorar y prácticar lo que he aprendido de React',
            author: 'Cristian Martínez',
            date: '17 de noviembre de 2026',
            time: '12:11',
            category: 'Programación',
            type: 'article',
        },
        {
            id: 5,
            type: 'quock',
            content: '¡Mi primer Quock en CrissSpace! 🦇 Hoy seguimos aprendiendo React y construyendo este espacio poco a poco.',
            author: 'Cristian Martínez',
            date: '17 de noviembre de 2026',
            time: '10:02',
            category: 'Personal',
        },
        {
            id: 6,
            title: '¿Por qué creé este sitio?',
            content: 'Quiero mejorar y prácticar lo que he aprendido de React',
            author: 'Cristian Martínez',
            date: '17 de noviembre de 2026',
            time: '12:11',
            category: 'Programación',
            type: 'article',
        },
        {
            id: 7,
            title: '¿Por qué creé este sitio?',
            content: 'Quiero mejorar y prácticar lo que he aprendido de React',
            author: 'Cristian Martínez',
            date: '17 de noviembre de 2026',
            time: '12:11',
            category: 'Programación',
            type: 'article',
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    type={post.type}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    date={post.date}
                    time={post.time}
                    category={post.category}
                    coverImage={post.coverImage}
                    showCoverInFeed={post.showCoverInFeed}
                />
            ))}
        </div>
    );
}

export default HomePage;
