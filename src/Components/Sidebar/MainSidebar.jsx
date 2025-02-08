import {
    HomeIcon,
    UserGroupIcon,
    UsersIcon,
    ShoppingBagIcon,
    PlayIcon,
    ClockIcon,
} from '@heroicons/react/24/solid';

const sidebarItems = [
    {
        label: 'Home',
        icon: HomeIcon,
    },
    {
        label: 'Friends',
        icon: UsersIcon,
    },
    {
        label: 'Community',
        icon: UserGroupIcon,
    },
    {
        label: 'Book Store',
        icon: ShoppingBagIcon,
    },
    {
        label: 'Course',
        icon: PlayIcon,
    },
    {
        label: 'Watchlist',
        icon: ClockIcon,
    },
];

const MainSidebar = () => {
    return (
        <div className="flex mx-4">
            <div className=" text-gray-800 min-w-64 p-5 shadow-md bg-white rounded-xl">
                <ul className="list-none p-0">
                    { sidebarItems.map((item, index) => (
                        <li
                            key={ index }
                            className="py-3 px-4 hover:bg-gray-200 rounded-lg cursor-pointer flex items-center"
                        >
                            <item.icon className="w-6 h-6 mr-3" />
                            <span>{ item.label }</span>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );
};

export default MainSidebar;