import React from "react";
import { ComplexNavbar } from "../../Components/ComplexNavbar/ComplexNavbar";
import { Outlet } from "react-router";

const ProfilePage = ({ user, setUser }) => {
	console.log(user);

	// Function to handle logout
	const handleLogout = () => {
		setUser(null);
	};
	return (
		<div>
			<ComplexNavbar user={user} handleLogout={handleLogout} />
			<Outlet context={[user, setUser]} />
		</div>
	);
};

export default ProfilePage;
