import React from 'react';
import { ComplexNavbar } from '../../Components/ComplexNavbar/ComplexNavbar';
import { Outlet } from 'react-router';

const ProfilePage = ({user}) => {
    return (
        <div>
            <ComplexNavbar></ComplexNavbar>
            <h1 className='my-10'>hellloooo this is profile page layout </h1>
            <Outlet context={user} />
        </div>
    );
};

export default ProfilePage;