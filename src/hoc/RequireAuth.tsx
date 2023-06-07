import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';


function RequireAuth({children}: any) {
    const location = useLocation()
    const user = useAuth();

    if(!user.user) {
        return <Navigate  to ='/login' state={{from: location}} />
    }

    return children;
}

export default RequireAuth;