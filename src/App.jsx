import Header from './components/Header.jsx';
import PostCard from './components/posts/PostCard';
import Sidebar from './components/Sidebar.jsx';
import RightSidebar from './components/RightSidebar.jsx';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
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
  ];
  return (
      <div
        className={`${isDark ? 'dark' : ''} min-h-screen bg-[#F9F9F8] text-gray-900 transition-colors duration-300 dark:bg-[#131414] dark:text-gray-100`}
      >
      <div className="sticky top-0 z-50">
          <Header isDark={isDark} setIsDark={setIsDark} />
      </div>
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[280px_minmax(0,1fr)_340px] gap-6 px-4 py-6">
      <div className="relative">
          <div className="fixed top-[81px] w-[280px]">
              <Sidebar />
          </div>
      </div>

        <main className="min-w-0">
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
        </main>
        <RightSidebar  />
      </div>
        </div>
  );
}

export default App; 