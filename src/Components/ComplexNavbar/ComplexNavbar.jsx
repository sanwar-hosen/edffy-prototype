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
import LoginButton from "../LoginButton/LoginButton";

// profile menu component
const profileMenuItems = [
	{
		label: "My Profile",
		icon: UserCircleIcon,
		path:"/my-profile",
	},
	{
		label: "Edit Profile",
		icon: Cog6ToothIcon,
		path:"/edit-profile",
	},
	{
		label: "Inbox",
		icon: InboxArrowDownIcon,
		path:"/inbox",
	},
	{
		label: "Help",
		icon: LifebuoyIcon,
		path:"/help",
	},
	{
		label: "Sign Out",
		icon: PowerIcon,
		path:"#",
	},
];

function ProfileMenu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const closeMenu = () => setIsMenuOpen(false);
	// const userdetails = handleGoogleLogin();
	// console.log(userdetails);
	
	return (
		<Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
			<MenuHandler>
				<Button
					variant="text"
					color="blue-gray"
					className="flex items-center gap-2 rounded-full py-0.5 px-0.5 drop-shadow-lg "
				>
					<Avatar
						variant="circular"
						size="md"
						alt="user"
						className="border border-gray-900 p-0.5"
						src="./src/assets/default-user.png"
					/>
				</Button>
			</MenuHandler>
			<MenuList className="p-1 ">
				{profileMenuItems.map(({ label, icon, path }, key) => {
					const isLastItem = key === profileMenuItems.length - 1;
					return (
						<NavLink to={path} key={key}>
						<MenuItem
							key={label}
							onClick={closeMenu}
							className={`flex hover:shadow-purple-300 hover:shadow-md items-center gap-2 rounded ${
								isLastItem
									? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
									: ""
							}`}
						>
							{React.createElement(icon, {
								className: `h-4 w-4 ${
									isLastItem ? "text-red-500" : ""
								}`,
								strokeWidth: 2,
							})}
							<Typography
								as="span"
								variant="small"
								className="font-normal"
								color={isLastItem ? "red" : "inherit"}
							>
								{label}
							</Typography>
						</MenuItem>
						</NavLink>

					);
				})}
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
					<Typography as="a" href="#" variant="small" className="hover:drop-shadow-purple-glow">
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
							className="h-28 w-28 animate-spin-horizontal hover:animate-none hover:drop-shadow-purple-glow"
						/>
					</Card>
					<ul className="col-span-4 flex w-full flex-col gap-1">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden hover:drop-shadow-purple-glow">
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
		<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
			<NavListMenu />
			{navListItems.map(({ label, icon, path }, key) => (
				<NavLink to={path} key={key}>
					<Typography
						key={label}
						as="a"
						href="#"
						variant="small"
						color="gray"
						className="font-medium text-blue-gray-500 hover:drop-shadow-purple-glow"
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

export function ComplexNavbar({ handleGoogleLogin, user }) {
	const [isNavOpen, setIsNavOpen] = React.useState(false);
console.log(user);

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
			className="sticky mx-auto max-w-screen p-2  lg:pl-6"
		>
			<div className="mx-8 my-2 relative flex items-center justify-between text-blue-gray-900">
				<Typography
					as="a"
					href="/"
					className="mr-4 font-inter ml-2 text-3xl cursor-pointer py-1.5 font-extrabold hover:drop-shadow-xl "
				>
					Edffy
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
				<div className="flex gap-8">
					{/* navbar google login button */}
					{ user === null ? (
						<LoginButton handleGoogleLogin={ handleGoogleLogin } />
					) : (
						<ProfileMenu />
					) }
				</div>
			</div>
			<MobileNav open={isNavOpen} className="overflow-scroll">
				<NavList />
			</MobileNav>
		</Navbar>
	);
}
