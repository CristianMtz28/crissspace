import BirthdayWidget from './widgets/BirthdayWidget.jsx';
import WishlistWidget from './widgets/WishlistWidget';
import SocialWidget from './widgets/SocialWidget.jsx';


function RightSidebar() {
    return (
        <aside className="flex flex-col gap-6">
        <BirthdayWidget />
        <WishlistWidget />
        <SocialWidget />
        </aside>
    );
    }

export default RightSidebar;