import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import RightSidebar from './components/RightSidebar.jsx';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
      <div
        className={`${isDark ? 'dark' : ''} min-h-screen bg-[#F9F9F8] text-gray-900 transition-colors duration-300 dark:bg-[#131414] dark:text-gray-100`}
      >
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className="mx-auto grid w-full grid-cols-[1fr_3fr_1fr] gap-6 px-4 py-6">
        <Sidebar />

        <main>
          <h1 className="text-4xl font-bold">
            CrissSpace 🦇
          </h1>
          <p>Mi primera aplicación con React.</p>
          <p>Construyendo mi espacio en la web.</p>
        </main>
        <RightSidebar  />
      </div>
        </div>
  );
}

export default App; 