import { useOutletContext } from "react-router";
import Post from "../../Components/Post/Post";
import { useEffect, useState } from "react";
import MainSidebar from "../../Components/Sidebar/MainSidebar";
import "./home.css";

const HomePageContents = () => {
	const [Posts, setPosts] = useState([]);
	// console.log(Posts);

	useEffect(() => {
		fetch("./posts.json")
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<>
			<div className="flex flex-col gap-4">
				{Posts.map((post) => (
					<Post
						key={post.id}
						img={post.image}
						posttext={post.postText}
						name={post.userName}
						userimg={post.userPhoto}
						tags={post.tags}
					></Post>
				))}
			</div>
		</>
	);
};

const Home = () => {
	return (
		<div className="w-full min-h-screen h-full flex bg-[#f2f4f7]">
			{/* Left Sidebar: Fixed */ }
			<div className="w-1/4 my-4 h-full fixed left-0 overflow-y-auto">
				<MainSidebar />
			</div>

			{/* Center Content: Scrollable */ }
			<div className="w-1/2 py-4 mx-auto h-full overflow-y-auto flex-1">
				<HomePageContents />
			</div>

			{/* Right Sidebar: Fixed */ }
			<div className="w-1/4 h-full my-4 fixed right-0 overflow-y-auto hide-scrollbar">
				<MainSidebar />
				<MainSidebar />
				<MainSidebar />
				<MainSidebar />
				<MainSidebar />
			</div>
		</div>
	);
};

export default Home;
