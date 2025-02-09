import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useOutletContext } from "react-router";

const Profile = () => {
		const [user, setUser] = useOutletContext();
	// match my DB or ongoing user data laterrrr
	const {
		photoURL = "./src/assets/default-user.png",
		displayName = "User",
		userName = "@TheSano",
		bio = "Building Dreams..!✨",
		followers = 420,
		following = 69,
		postsCount = 0,
	} = user || {};

	return (
		<div className="flex items-center justify-center h-[85vh] bg-[#f2f4f7]">
		<div className="p-4 max-w-screen-sm mx-auto bg-white rounded-md shadow-md">
			<div className="flex items-center gap-8">

				{/* Left: Profile Pic, Name, Username, Bio */ }
				<div className="flex flex-col items-center">
					<img
						className="rounded-full h-24 w-24 object-cover mb-2"
						src={ photoURL }
						alt="User avatar"
					/>
					<h1 className="text-xl font-semibold">{ displayName }</h1>
					<h2 className="text-md text-gray-600">{ userName }</h2>
					<p className="text-gray-500 mt-2 text-center">{ bio }</p>
				</div>
			
				{/* Right: Posts, Followers, Following */ }
				<div className="flex items-center gap-6">
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
		</div>
		</div>
	);
};

export default Profile;
