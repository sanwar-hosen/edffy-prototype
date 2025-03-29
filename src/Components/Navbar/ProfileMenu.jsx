import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    PowerIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon
} from "@heroicons/react/24/solid";

const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
        path: "/my-profile",
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
        path: "/my-profile/edit",
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
        path: "/inbox",
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
        path: "/help",
    },
];

function ProfileMenu({ user, handleLogout }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const closeMenu = () => setIsMenuOpen(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuRef]);

    return (
        <div className="relative" ref={ menuRef }>
            {/* Menu Trigger Button */ }
            <button
                onClick={ toggleMenu }
                className="flex items-center gap-2 rounded-full py-0.5 px-0.5 focus:outline-none"
            >
                <img
                    className="h-10 w-10 rounded-full border border-gray-900 p-0.5 object-cover"
                    alt="user"
                    src={ user?.photoURL || "./src/assets/default-user.png" }
                />
            </button>

            {/* Dropdown Menu */ }
            { isMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 z-50">
                    {/* Menu Items */ }
                    { profileMenuItems.map(({ label, icon, path }, key) => (
                        <NavLink
                            to={ path }
                            key={ key }
                            onClick={ closeMenu }
                            className="block"
                        >
                            <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md hover:shadow-md hover:shadow-purple-300 transition-all">
                                { React.createElement(icon, {
                                    className: "h-4 w-4",
                                    strokeWidth: 2,
                                }) }
                                <span className="font-normal">{ label }</span>
                            </div>
                        </NavLink>
                    )) }

                    {/* Sign Out Button */ }
                    <div
                        onClick={ () => {
                            closeMenu();
                            handleLogout();
                        } }
                        className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-md hover:shadow-md hover:shadow-purple-300 cursor-pointer transition-all"
                    >
                        <PowerIcon className="h-4 w-4 text-red-500" strokeWidth={ 2 } />
                        <span className="font-normal">Sign Out</span>
                    </div>
                </div>
            ) }
        </div>
    );
}

export default ProfileMenu;