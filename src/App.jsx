import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import RightSidebar from './components/RightSidebar.jsx';

function App() {
  return (
    <>
      <Header />
      <div className="mx-auto grid w-full grid-cols-[1fr_3fr_1fr] gap-6 px-4 py-6">
        <Sidebar />

        <main>
          <h1 className="text-4xl font-bold text-gray-900">
            CrissSpace 🦇
          </h1>
          <p>Mi primera aplicación con React.</p>
          <p>Construyendo mi espacio en la web.</p>
        </main>
        <RightSidebar  />
      </div>
    </>
  );
}

export default App; 