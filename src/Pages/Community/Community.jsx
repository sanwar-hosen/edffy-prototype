import "react";
import { useOutletContext } from "react-router";

const Community = () => {
	const user = useOutletContext();
	console.log(user);

	return (
		<div className="h-[75vh] rounded-lg border flex flex-col items-center border-blue-gray-900 m-8 text-center">
			<h1 className="font-bold my-4">community Page</h1>
			
		</div>
	);
};

export default Community;
