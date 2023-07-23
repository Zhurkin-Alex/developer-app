import React from 'react';
import './header.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hook/useAuth';


function Header() {
    const {signOut} = useAuth();
    const navigate = useNavigate();
    const user = useAuth();
    return (
        <header className='header'>
            {user.user  !== '' && <button onClick={()=> signOut(()=>navigate('/', {replace:true}))}>Log Out</button> }
            <ul className="header__items">
                <li className="header__link">
                    {user.user &&<NavLink to="/" className={({isActive})=>isActive ? 'active-link' : ''}>Home</NavLink>}
                </li>
                <li className="header__link">
                    {user.user && <NavLink to="/posts" className={({isActive})=>isActive ? 'active-link' : ''}>Posts</NavLink>}
                </li>
                <li className="header__link">
                    {user.user &&<NavLink to="/about" className={({isActive})=>isActive ? 'active-link' : ''}>About</NavLink>}
                </li>
                <li className="header__link">
                    {user.user &&<NavLink to="/pokemons" className={({isActive})=>isActive ? 'active-link' : ''}>Pokemons</NavLink>}
                </li>
                <li className="header__link">
                    {user.user &&<NavLink to="/games" className={({isActive})=>isActive ? 'active-link' : ''}>Games</NavLink>}
                </li>
            </ul>
         </header>
    );
}

export default Header;