import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";

const ProfilePage = ({ user, setUser }) => {
	console.log(user);

	// Function to handle logout
	const handleLogout = () => {
		setUser(null);
	};
	return (
		<div>
			<Navbar user={ user } handleLogout={ handleLogout } />
			<Outlet context={[user, setUser]} />
		</div>
	);
};

export default ProfilePage;
