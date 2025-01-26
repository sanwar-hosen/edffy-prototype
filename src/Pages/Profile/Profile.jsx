import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { useOutletContext } from 'react-router';


const Profile = () => {
    const { user } = useOutletContext;
    console.log(user);
    
    return (
        <div>
            This is your profile hehehehehehehhe
        </div>
    );
};

export default Profile;