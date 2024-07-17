import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import {getAuthenticatedUser} from '../Helper/Storage';
const Admin = () => {
    const auth = getAuthenticatedUser();
    return (
        <>
            {auth&&auth.role===1?<Outlet /> : <Navigate to={"/"}/> }
        </>
    );
};

export default Admin;