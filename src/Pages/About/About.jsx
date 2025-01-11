import React from 'react';

const About = () => {
    return (
        <div className="h-screen border flex flex-col items-center border-blue-gray-900 m-8 text-center">
            <h1>This is About Page</h1>
            <img src="./src/assets/react.svg" alt="" className='min-w-80 m-10'/>
        </div>
    );
};

export default About;