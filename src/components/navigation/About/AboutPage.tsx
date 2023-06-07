import React from 'react';
import {NavLink, Outlet } from 'react-router-dom';

function AboutPage():any {
    return (
        <>
        <div>
            About
        </div>
        <NavLink to='team'>показать team</NavLink> <br/>
        <NavLink to='contacs'>показать contacs</NavLink>
        {/* <Routes>
            <Route path="contacs" element={<p>Our contacs</p>}/>
            <Route path="team" element={<p>Our team</p>}/>
        </Routes> */}
        {/* Outlet показывает в какую часть страницы вставить вложенные компоненты */}
        <Outlet />
        </>
    );
}

export default AboutPage;