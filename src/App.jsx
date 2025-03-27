import "./App.css";
import {
	CubeTransparentIcon,
	UserCircleIcon,
	CodeBracketSquareIcon,
	Square3Stack3DIcon,
	ChevronDownIcon,
	Cog6ToothIcon,
	InboxArrowDownIcon,
	LifebuoyIcon,
	PowerIcon,
	RocketLaunchIcon,
	Bars2Icon,
} from "@heroicons/react/24/solid";
import { HiHome, HiCubeTransparent, HiOutlineChatAlt2 } from "react-icons/hi";
// import { Badge, Button, Flowbite } from "flowbite-react";
// import customTheme from './Theme/PrimaryTheme';
import { NavLink } from "react-router";
import { List, ListItem } from "flowbite-react";
import React from 'react';
// import navbarlogo from "../../assets/logo/Logo v2.0.png"
import navbarlogo from "/src/assets/logo/Logo v2.0.png"



// nav list component
const navListItems = [
  {
    label: "Home",
    icon: HiHome,
    path: "/",
  },
  {
    label: "Community",
    icon: HiCubeTransparent,
    path: "/Community",
  },
  {
    label: "Chat",
    icon: HiOutlineChatAlt2,
    path: "/Chat",
  },
];
function navlist() {
	return <>{/* {navListItems.map} */}</>;
}
function App() {
	// profile menu component
	// const profileMenuItems = [
	// 	{
	// 		label: "My Profile",
	// 		icon: UserCircleIcon,
	// 		path: "/my-profile",
	// 	},
	// 	{
	// 		label: "Edit Profile",
	// 		icon: Cog6ToothIcon,
	// 		path: "/my-profile/edit",
	// 	},
	// 	{
	// 		label: "Inbox",
	// 		icon: InboxArrowDownIcon,
	// 		path: "/inbox",
	// 	},
	// 	{
	// 		label: "Help",
	// 		icon: LifebuoyIcon,
	// 		path: "/help",
	// 	},
	// ];

	return (
		<>
      <nav className="sticky top-0 z-30 mx-auto max-w-screen p-2 shadow-md bg-white">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a
						href="/"
            className="hover:drop-shadow"
					>
						  <img src={ navbarlogo } alt="Edffy Logo" className="max-w-28 max-h-10"/>
					</a>
					<div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
						<button
							type="button"
							className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 "
							id="user-menu-button"
							aria-expanded="false"
							data-dropdown-toggle="user-dropdown"
							data-dropdown-placement="bottom"
						>
							<span className="sr-only">Open user menu</span>
							<img
								className="w-8 h-8 rounded-full"
								src="/docs/images/people/profile-picture-3.jpg"
								alt="user photo"
							/>
						</button>
						{/* <!-- Dropdown menu --> */}
						<div
							className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm "
							id="user-dropdown"
						>
							<div className="px-4 py-3">
								<span className="block text-sm text-gray-900 ">
									Bonnie Green
								</span>
								<span className="block text-sm  text-gray-500 truncate ">
									name@flowbite.com
								</span>
							</div>
							<ul
								className="py-2"
								aria-labelledby="user-menu-button"
							>
								<li>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Dashboard
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Settings
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Earnings
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Sign out
									</a>
								</li>
							</ul>
						</div>
						<button
							data-collapse-toggle="navbar-user"
							type="button"
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus"
							aria-controls="navbar-user"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg>
						</button>
					</div>
					<div >
						{/* <NavListMenu /> */}
            <List horizontal className="flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
						{navListItems.map(({ label, icon, path }, key) => (
							<NavLink
								to={path}
								key={key}
								className={({ isActive }) =>
									isActive
										? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900 rounded-full"
                    : ""
								}
							>

                
                <ListItem icon={ icon } className="flex font-medium text-blue-gray-500 items-center gap-2 lg:rounded-full">
								{ }{label}
                </ListItem>
							</NavLink>
						))}
            </List>
					</div>
				</div>
			</nav>


      <div className="min-h-[200vh] b-500 gap-2 flex flex-col">
        <div className="h-[20vh] w-32 border bg-orange-500 border-red-500"></div>
        <div className="h-[40vh] w-32 border bg-gray-100 border-red-500"></div>
        <div className="h-[20vh] w-32 border bg-emerald-500 border-red-500"></div>
        <div className="h-[50vh] w-32 border border-red-500"></div>
        <div className="h-[40vh] w-32 border border-red-500"></div>
      </div>
		</>
	);
}

export default App;
