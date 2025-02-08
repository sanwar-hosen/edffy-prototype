import 'react';
import { useOutletContext } from 'react-router';

const Community = () => {

    const user = useOutletContext();
    console.log(user);
    
    return (
        <div className="h-screen border flex flex-col items-center border-blue-gray-900 m-8 text-center">
            <h1 className='font-bold my-4'>community</h1>
            <img src="./src/assets/default-user.png" alt="" className='w-96 rounded-full hover:drop-shadow-purple-glow'  />
            
        </div>
    );
};

export default Community;