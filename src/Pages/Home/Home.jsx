import { useOutletContext } from "react-router";


const Home = () => {
	// const user = useOutletContext();
	const user = useOutletContext();
	// console.log(user);
	
	return (
        <div className="h-screen border border-blue-gray-900 text-center m-8">
			<h1 className="font-semibold my-4">This is Home Page</h1>
			{
				user===!null &&
					<h2>Logged in yeeee!</h2>
				
			}
		</div>
	);
};

export default Home;
