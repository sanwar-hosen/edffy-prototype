/* eslint-disable react/prop-types */
import React from "react";
import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Avatar,
	Card,
	IconButton,
} from "@material-tailwind/react";
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
import { NavLink } from "react-router";
import navbarlogo from "../../assets/logo/Logo v2.0.png"
import "./ComplexNavbar.css"
import SearchBar from "../Searchbar/Searchbar";


// profile menu component
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
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
			<MenuHandler>
				<Button
					variant="text"
					color="blue-gray"
					className="flex items-center gap-2 rounded-full py-0.5 px-0.5 "
				>
					<Avatar
						variant="circular"
						size="md"
						alt="user"
						className="border border-gray-900 p-0.5"
						src={ user?.photoURL !== undefined ? user?.photoURL : "./src/assets/default-user.png" }
					/>
					{/* Made by Sano */}
				</Button>
			</MenuHandler>
			<MenuList className="p-1 ">
				{profileMenuItems.map(({ label, icon, path }, key) => {
					return (
						<NavLink to={path} key={key}>
							<MenuItem
								onClick={closeMenu}
								className="flex hover:shadow-purple-300 hover:shadow-md items-center gap-2 rounded-xs"
							>
								{React.createElement(icon, {
									className: "h-4 w-4",
									strokeWidth: 2,
								})}
								<Typography
									as="span"
									variant="small"
									className="font-normal"
								>
									{label}
								</Typography>
							</MenuItem>
						</NavLink>
					);
				})}
				<MenuItem
					onClick={handleLogout}
					className="flex hover:shadow-purple-300 hover:shadow-md items-center gap-2 rounded-xs hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
				>
					{React.createElement(PowerIcon, {
						className: "h-4 w-4 text-red-500",
						strokeWidth: 2,
					})}
					<Typography
						as="span"
						variant="small"
						className="font-normal text-red-500"
					>
						Sign Out
					</Typography>
				</MenuItem>
			</MenuList>
		</Menu>
	);
}

// nav list menu
const navListMenuItems = [
	{
		title: "@material-tailwind/html",
		description:
			"Learn how to use @material-tailwind/html, packed with rich components and widgets.",
	},
	{
		title: "@material-tailwind/react",
		description:
			"Learn how to use @material-tailwind/react, packed with rich components for React.",
	},
	{
		title: "Material Tailwind PRO",
		description:
			"A complete set of UI Elements for building faster websites in less time.",
	},
];

function NavListMenu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const renderItems = navListMenuItems.map(({ title, description }) => (
		<a href="#" key={title}>
			<MenuItem>
				<Typography variant="h6" color="blue-gray" className="mb-1">
					{title}
				</Typography>
				<Typography
					variant="small"
					color="gray"
					className="font-normal"
				>
					{description}
				</Typography>
			</MenuItem>
		</a>
	));

	return (
		<React.Fragment>
			<Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
				<MenuHandler>
					<Typography
						as="a"
						href="#"
						variant="small"
						className="hover:drop-shadow-xs"
					>
						<MenuItem className="hidden items-center gap-2 font-bold text-blue-gray-900 lg:flex lg:rounded-full">
							<Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />
							<Typography variant="small" className="font-bold">
								{" "}
								Pages{" "}
							</Typography>
							<ChevronDownIcon
								strokeWidth={2}
								className={`h-3 w-3 transition-transform ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</MenuItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
					<Card
						color="blue"
						shadow={false}
						variant="gradient"
						className="col-span-3 grid h-full w-full place-items-center rounded-md"
					>
						<RocketLaunchIcon
							strokeWidth={1}
							className="h-28 w-28 animate-spin-horizontal hover:animate-none hover:drop-shadow-xs"
						/>
					</Card>
					<ul className="col-span-4 flex w-full flex-col gap-1">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden hover:drop-shadow-xs">
				<Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
				Pages{" "}
			</MenuItem>
			<ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
				{renderItems}
			</ul>
		</React.Fragment>
	);
}

// nav list component
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

//large screen horizontal menu bar [pages, account, docs]
function NavList() {
	return (
		<ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
			{/* <NavListMenu /> */}
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
					<Typography
						key={label}
						color="gray"
						className="font-medium text-blue-gray-500 "
					>
						<MenuItem className="flex items-center gap-2 lg:rounded-full">
							{React.createElement(icon, {
								className: "h-[18px] w-[18px]",
							})}{" "}
							<span className="text-gray-900">{label}</span>
						</MenuItem>
					</Typography>
				</NavLink>
			))}
		</ul>
	);
}

// ---------------------------------
//--------- Actual navbar ----------
// ---------------------------------

export function ComplexNavbar({ user, handleLogout }) {
	const [isNavOpen, setIsNavOpen] = React.useState(false);
	const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setIsNavOpen(false)
		);
	}, []);

	return (
		<Navbar
			fullWidth={true}
			className="sticky top-0 z-10 mx-auto max-w-screen p-2 "
			blurred={false}
		>
			<div className="mx-6 my-2 relative flex items-center justify-between text-blue-gray-900">
				<Typography
					as="a"
					href="/"
					className=" font-inter text-3xl cursor-pointer py-1.5 font-extrabold hover:drop-shadow-lg"
				>
					<img src={ navbarlogo } alt="Edffy Logo" className="max-w-28"/>
				</Typography>
				<div className="hidden lg:block">
					<NavList />
				</div>
				<IconButton
					size="sm"
					color="blue-gray"
					variant="text"
					onClick={toggleIsNavOpen}
					className="ml-auto mr-2 lg:hidden"
				>
					<Bars2Icon className="h-6 w-6" />
				</IconButton>
				<div className="flex gap-4 items-center">
					<SearchBar></SearchBar>
					<ProfileMenu user={user} handleLogout={handleLogout} />
				</div>
			</div>
			<MobileNav open={isNavOpen} className="overflow-scroll">
				<NavList />
			</MobileNav>
		</Navbar>
	);
}
