import { useOutletContext } from "react-router";
import Post from "../../Components/Post/Post";
import { useEffect, useState } from "react";
import MainSidebar from "../../Components/Sidebar/MainSidebar";
import "./home.css";
import CreatePost from "../../Components/CreatePost/CreatePost";

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
			<div className="flex flex-col gap-4 ">
					<CreatePost></CreatePost>
				{/* {Posts.map((post) => (
					<Post
						key={ post.id }
						img={ post.image }
						posttext={ post.postText }
						name={ post.userName }
						userimg={ post.userPhoto }
						tags={ post.tags }
					></Post>
				))} */}
			</div>
		</>
	);
};

const Home = () => {
	return (
		<div className="w-full min-h-screen h-full flex bg-[#f2f4f7]">
			{/* Left Sidebar: Fixed */ }
			<div className="w-1/4 my-4 h-full sm:flex flex-col gap-4 fixed left-0 overflow-y-auto hide-scrollbar hidden">
				<MainSidebar />
				<p className="mx-2">^^^ structure is made wait for backend to complete</p>
				<p className="mx-2">Tags will be dynamic and will be clickable!</p>
				<p className="mx-2">Create Post section will also be made later. stick with dummy data for a while 🤷‍♂️</p>
			</div>

			{/* Center Content: Scrollable */ }
			<div className="w-1/2 py-4 mx-auto h-full overflow-y-auto flex-1">
				<HomePageContents />
			</div>

			{/* Right Sidebar: Fixed */ }
			<div className="w-1/4 h-full my-4 fixed right-0 overflow-y-auto hide-scrollbar sm:flex flex-col items-end gap-4 hidden">
				<p className="mx-4"> This part Will be made after backend</p>
				<MainSidebar />
			</div>
		</div>
	);
};

export default Home;
