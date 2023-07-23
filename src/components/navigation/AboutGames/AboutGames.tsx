import React from 'react';
import {NavLink, Outlet } from 'react-router-dom';
// import Cube from '../../pages/games/Cube/Cube';
import './AboutGames.scss'

function AboutGames() {
    return (
        <div className='games'>
            <div className='games__about'>
                Play and find out your luck
            </div>
            <div className='games__container'>
                <NavLink className='games__item' to='game_1'> Roll the dice </NavLink> <br/>
                <NavLink className='games__item' to='game_2'>показать game-2</NavLink>
            </div>
            <Outlet />
        </div>
    );
}

export default AboutGames;