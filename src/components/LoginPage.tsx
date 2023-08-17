import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createUser } from '../api/api';
import { useAuth } from '../hook/useAuth';

function LoginPage() {
    const navigate = useNavigate()
    const locate = useLocation()

    const {signIn} = useAuth()

    const fromPage = locate.state?.from?.pathname || '/'

    const handleSubmit = async(event:any)=> {
        event.preventDefault()
        const form = event.target
        const user = 'Alex'
        const email = form.username.value

        try {
            const newUser = await createUser(user, email);
            console.log('New user created:', newUser);
            signIn(email, () => navigate(fromPage, { replace: true }));
          } catch (error) {
            console.error('Error creating user:', error);
            // Обработка ошибки, если не удалось создать пользователя
          }
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