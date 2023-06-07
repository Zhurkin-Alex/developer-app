import React from 'react';
import './header.scss'
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <header className='header'>
            <ul className="header__items">
                <li className="header__link">
                    <NavLink to="/" className={({isActive})=>isActive ? 'active-link' : ''}>Home</NavLink>
                </li>
                <li className="header__link">
                    <NavLink to="/posts" className={({isActive})=>isActive ? 'active-link' : ''}>Posts</NavLink>
                </li>
                <li className="header__link">
                    <NavLink to="/about" className={({isActive})=>isActive ? 'active-link' : ''}>About</NavLink>
                </li>
                <li className="header__link">
                    <NavLink to="/pokemons" className={({isActive})=>isActive ? 'active-link' : ''}>Pokemons</NavLink>
                </li>
                <li className="header__link">
                    <NavLink to="/games" className={({isActive})=>isActive ? 'active-link' : ''}>Games</NavLink>
                </li>
            </ul>
         </header>
    );
}

export default Header;