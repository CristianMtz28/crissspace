import BirthdayWidget from './widgets/BirthdayWidget.jsx';
import WishlistWidget from './widgets/WishlistWidget';
import SocialWidget from './widgets/SocialWidget.jsx';


function RightSidebar() {
    return (
        <aside className="sticky top-[calc(100vh-100%)] flex flex-col gap-6 self-start">
        <BirthdayWidget />
        <WishlistWidget />
        <SocialWidget />
        </aside>
    );
    }

export default RightSidebar;