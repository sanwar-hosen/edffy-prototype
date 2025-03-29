import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom"; // Changed from react-router to react-router-dom
import {
	CubeTransparentIcon,
	UserCircleIcon,
	CodeBracketSquareIcon,
	Bars2Icon,
	Cog6ToothIcon,
	EnvelopeIcon,
	QuestionMarkCircleIcon,
	ArrowRightOnRectangleIcon
} from "@heroicons/react/24/solid";
import navbarlogo from "../../assets/logo/Logo v2.0.png";
import "./ComplexNavbar.css";

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
		icon: EnvelopeIcon,
		path: "/inbox",
	},
	{
		label: "Help",
		icon: QuestionMarkCircleIcon,
		path: "/help",
	},
];

// Navigation list items
const navListItems = [
	{
		label: "Home",
		icon: UserCircleIcon,
		path: "/",
	},
	{
		label: "Community",
		icon: CubeTransparentIcon,
		path: "/Community",
	},
	{
		label: "About",
		icon: CodeBracketSquareIcon,
		path: "/About",
	},
];

const ProfileMenu = ({ user, handleLogout }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
console.log(user.photoURL);


	return (
		<div className="relative" ref={ menuRef }>
			<button
				onClick={ () => setIsMenuOpen(!isMenuOpen) }
				className="flex items-center gap-2 rounded-full p-0.5 border border-gray-900"
			>
				<img
					src={ user?.photoURL || "../assets/default-user.png" }
					alt="user"
					className="h-10 w-10 rounded-full object-cover"
				/>
			</button>

			{/* Dropdown menu - rendered always but hidden with CSS */ }
			<div className={ `absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 z-50 transition-opacity duration-200 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}` }>
				{ profileMenuItems.map(({ label, icon, path }, key) => (
					<NavLink to={ path } key={ key } onClick={ () => setIsMenuOpen(false) }>
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
						setIsMenuOpen(false);
						handleLogout();
					} }
					className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-md hover:shadow-md hover:shadow-purple-300 cursor-pointer transition-all"
				>
					<ArrowRightOnRectangleIcon className="h-4 w-4 text-red-500" strokeWidth={ 2 } />
					<span className="font-normal">Sign Out</span>
				</div>
			</div>
		</div>
	);
};


// Desktop navigation list
function NavList() {
	return (
		<ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
			{ navListItems.map(({ label, icon, path }, key) => (
				<NavLink
					to={ path }
					key={ key }
					className={ ({ isActive }) =>
						`flex items-center gap-2 px-3 py-2 rounded-full ${isActive
							? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900"
							: "text-gray-700 hover:bg-gray-100"
						}`
					}
				>
					{ React.createElement(icon, {
						className: "h-[18px] w-[18px]",
					}) }{ " " }
					<span className="font-medium">{ label }</span>
				</NavLink>
			)) }
		</ul>
	);
}

// Main Navbar Component
export function Navbar({ user, handleLogout }) {
	const [isNavOpen, setIsNavOpen] = useState(false);

	// Close mobile nav on resize
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 960) {
				setIsNavOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<nav className="sticky top-0 z-10 bg-white shadow-md px-4 py-2">
				<div className="mx-auto flex items-center justify-between max-w-7xl">
					{/* Logo */ }
					<a href="/" className="hover:drop-shadow-lg">
						<img src={ navbarlogo } alt="Edffy Logo" className="max-w-24" />
					</a>

					{/* Desktop Navigation */ }
					<div className="hidden lg:block">
						<NavList />
					</div>

					{/* Mobile Menu Button */ }
					<button
						onClick={ () => setIsNavOpen(!isNavOpen) }
						className="ml-auto mr-2 p-2 lg:hidden"
					>
						<Bars2Icon className="h-6 w-6" />
					</button>

					{/* Right side items - Search & Profile */ }
					<div className="flex gap-4 items-center">
						{/* Uncomment when SearchBar is ready */ }
						{/* <SearchBar /> */ }
						<ProfileMenu user={ user } handleLogout={ handleLogout } />
					</div>
				</div>

				{/* Mobile Navigation */ }
				{ isNavOpen && (
					<div className="lg:hidden py-4 px-2 transition-all duration-300">
						<NavList />
					</div>
				) }
			</nav>
		</>
	);
}

export default Navbar;