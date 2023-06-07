import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

function LoginPage() {
    const navigate = useNavigate()
    const locate = useLocation()

    const {signIn} = useAuth()

    const fromPage = locate.state?.from?.pathname || '/'

    const handleSubmit = (event:any)=> {
        event.preventDefault()
        const form = event.target
        const user = form.username.value

        signIn(user, ()=> navigate(fromPage, {replace:true}))
    }
    return (
        <div>
            <h1>LoginPage</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;