import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import RightSidebar from './components/RightSidebar.jsx';
import useTheme from './hooks/useTheme.js';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import WishlistPage from './pages/WishlistPage.jsx';
import PageTitle from './components/PageTitle.jsx';

function App() {
    const { isDark, setIsDark } = useTheme();
    return (
        <div
            className={`${isDark ? 'dark' : ''} min-h-screen bg-[#F9F9F8] text-gray-900 transition-colors duration-300 dark:bg-[#131414] dark:text-gray-100`}
        >
        <PageTitle />
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
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
            </Routes>
        </main>

            <div className="relative min-w-0">
                <RightSidebar />
            </div>
        </div>
            </div>
    );
}

export default App; 