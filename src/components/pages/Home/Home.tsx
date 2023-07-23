import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hook/useAuth';

function Home():any {
    const {signOut} = useAuth();
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=> signOut(()=>navigate('/', {replace:true}))}>Log Out</button>
            Home
        </div>
    );
}

export default Home;