import React from 'react';
import { ComplexNavbar } from '../../Components/ComplexNavbar/ComplexNavbar';
import { Outlet } from 'react-router';

const ProfilePage = () => {
    return (
        <div>
            <ComplexNavbar></ComplexNavbar>
            <Outlet />
        </div>
    );
};

export default ProfilePage;