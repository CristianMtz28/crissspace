import BirthdayWidget from './widgets/BirthdayWidget.jsx';
import WishlistWidget from './widgets/WishlistWidget';
import SocialWidget from './widgets/SocialWidget.jsx';

function RightSidebar() {
    return (
        <aside className="flex h-full flex-col gap-6">

            {/* Se desplaza normalmente */}
            <BirthdayWidget />

            {/* Se mantiene visible después del scroll */}
            <div className="sticky top-[89px] flex flex-col gap-6">
                <WishlistWidget />
                <SocialWidget />
            </div>

        </aside>
    );
}

export default RightSidebar;
