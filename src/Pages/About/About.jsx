import 'react';

const About = () => {
    return (
        <div className="h-screen border flex flex-col items-center border-blue-gray-900 m-8 text-center">
            <h1 className='my-4 font-medium'>This is About Page</h1>
            <img src="./src/assets/react.svg" alt="" className='min-w-80 m-10 animate-spin  hover:animate-none hover:drop-shadow-blue-glow'/>
        </div>
    );
};

export default About;