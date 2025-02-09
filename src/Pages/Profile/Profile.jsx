import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useOutletContext } from "react-router";

const Profile = () => {
		const [user, setUser] = useOutletContext();
	// match my DB or ongoing user data laterrrr
	const {
		photoURL = "./src/assets/default-user.png",
		displayName = "User",
		bio = "Building Dreams..!✨",
		followers = 0,
		following = 0,
		postsCount = 0,
	} = user || {};

	return (
		<div className="p-4 max-w-screen-sm mx-auto bg-white rounded-md shadow-sm">
			<div className="flex flex-col items-center">
				<img
					className="rounded-full h-24 w-24 object-cover mb-4"
					src={photoURL}
					alt="User avatar"
				/>
				<h1 className="text-xl font-semibold">{ displayName }</h1>
				<p className="text-gray-600">{ bio }</p>
			</div>
			<div className="flex justify-around mt-6 border-t pt-4">
				<div className="text-center">
					<p className="text-lg font-bold">{ postsCount }</p>
					<p className="text-gray-500">Posts</p>
				</div>
				<div className="text-center">
					<p className="text-lg font-bold">{ followers }</p>
					<p className="text-gray-500">Followers</p>
				</div>
				<div className="text-center">
					<p className="text-lg font-bold">{ following }</p>
					<p className="text-gray-500">Following</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
