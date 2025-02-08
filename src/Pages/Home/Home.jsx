import { useOutletContext } from "react-router";
import Post from "../../Components/Post/Post";
import { useEffect, useState } from "react";
import MainSidebar from "../../Components/Sidebar/MainSidebar";
import "./home.css";

const HomePageContents = () => {
	const [Posts, setPosts] = useState([]);
console.log(Posts);

	useEffect(() => {
		fetch("./posts.json")
			.then((res) => res.json())
			.then((data) => setPosts(data))
	}, []);

	return (
		<>
		<div className="flex flex-col gap-4">
		{
			Posts.map(post=> <Post key={post.id} img={post.image} posttext={post.postText} name={post.userName} userimg={post.userPhoto}></Post>)
		}
		</div>
		</>
	)
}

const Home = () => {
	
	return (
		<div className=" relative w-full text-center bg-[#f2f4f7] p-4  gap-4 ">
			<section className="left-0 fixed">
				<MainSidebar />
			</section>
			<section className="">
			<HomePageContents />
			</section>
			<section className="fixed right-0">
				
			</section>
			_____the sano
		</div>
	);
};

export default Home;
