import React, {useCallback} from 'react';
import './header.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hook/useAuth';


function Header() {
    const {signOut} = useAuth();
    const navigate = useNavigate();
    const user = useAuth();
    console.warn(user.email, user)

    const handleSignOut = useCallback(() => {
        signOut(() => navigate('/', { replace: true }));
    }, [navigate, signOut]);

    return (
        <header className='header'>
            <ul className="header__items">
                <li className="header__link">
                    <NavLink to="/" className={({isActive})=>isActive ? 'active-link' : ''}>Home</NavLink>
                </li>
                <li className="header__link">
                    {user.email  === 'lexus1812141@gmail.com' && <NavLink to="/posts" className={({isActive})=>isActive ? 'active-link' : ''}>Posts</NavLink>}
                </li>
                <li className="header__link">
                    <NavLink to="/about" className={({isActive})=>isActive ? 'active-link' : ''}>About</NavLink>
                </li>
                <li className="header__link">
                    {user.email &&<NavLink to="/pokemons" className={({isActive})=>isActive ? 'active-link' : ''}>Pokemons</NavLink>}
                </li>
                <li className="header__link">
                    {user.email === 'lexus1812141@gmail.com'  && <NavLink to="/games" className={({isActive})=>isActive ? 'active-link' : ''}>Games</NavLink>}
                </li>
                <li className="header__link">
                    {!user.email  && <NavLink to="/login" className={({isActive})=>isActive ? 'active-link' : ''}>Login</NavLink>}
                    {user.email  && <button onClick={handleSignOut}>Log Out</button> }
                </li>
            </ul>
         </header>
    );
}

export default Header;