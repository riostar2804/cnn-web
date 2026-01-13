import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './sidebar';

const Layout = () => {
    const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='div-layout'>

            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} setIsOpen={setIsOpen} />

            <main className={`div-main-layout ${isOpen ? 'md:ml-64' : 'md:ml-20'}`}>
                <Outlet />
            </main>


        </div>
    );
};
 
export default Layout