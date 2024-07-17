import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import {getAuthenticatedUser} from '../Helper/Storage';
const Guest = () => {
    const auth = getAuthenticatedUser();
    return (
        <>
            {!auth ? <Outlet /> : <Navigate to={"/"}/>}
        </>
    );
};

export default Guest;