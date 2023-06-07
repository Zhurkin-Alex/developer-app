import React from 'react';
import { Outlet} from 'react-router-dom';
import Footer from '../../pages/Footer/Footer';

import Header from '../../pages/HeaderNav/HeaderNav';

function Layout():any {
    return (
        <>
            <Header />
            <main className='main'>
                <div className='layout_container'>
                    <Outlet />
                </div>
            </main>

            <footer className='footer'> <Footer /> </footer>
        </>
    );
}

export default Layout;