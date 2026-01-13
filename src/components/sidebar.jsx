import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Camera, History, LogOut, Menu } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar, setIsOpen }) => {
    const location = useLocation ();
    const navigate = useNavigate ();

    const handleMenuClick = () => {
        
    };

    const handleLogout = () => {
        localStorage.removeItem("userToken");
        navigate("/");
    };

    const getLinkClass = (path) => {
        const baseClass = "base-class";
        const activeClass = location.pathname === path ? "isActive-blue" : "isActive-grey";

        const alignClass = "justify-center" + (isOpen ? "justify-center md:jusitfy-start md:px-4" : "justify-center px-2");

        return `${baseClass} ${activeClass} ${alignClass}`;
    };

    return (
        <div className={`div-bg-sidebar ${isOpen ? 'md:w-64' : 'md:w-20'}`}>
            <div
                onClick={toggleSidebar}
                className={`div-bg-sidebar-collapse ${isOpen ? 'md:justify-start md:pl-2' : 'md:justify-center'}`}>
                {isOpen ? ( 
                <div className='animate-fade-in'>
                    <h1 className='h1-class-sidebar'>
                        ROAD <span className='span-sidebar'>SCAN</span>
                    </h1>
                    <p className='p-class-sidebar'>Road Destruction Detection System</p>
                </div>
                ) : (
                   <Menu size={24} className={`icon-menu ${isOpen ? 'block md:hidden' : 'block'}`}/>
                )}
            </div>

            <nav className='nav-sidebar'>
                <Link to ='/dashboard' onClick={handleMenuClick} className={getLinkClass('/dashboard')}>
                    <Home size={20} className='shrink-0' />
                    <span className={`nav-sidebar-span animate-fade-in ${isOpen ? 'md:block' : ''}`}>Dashboard</span>
                </Link>

                <Link to = '/scan' onClick={handleMenuClick}  className={getLinkClass('/scan')}>
                    <Camera size={20} className='shrink-0' />
                    <span className={`nav-sidebar-span animate-fade-in ${isOpen ? 'md:block' : ''}`}>Road Detection</span>
                </Link>

                <Link to = '/history' onClick={handleMenuClick} className={getLinkClass('/history')}>
                    <History size={20} className='shrink-0'/>
                    <span className={`nav-sidebar-span animate-fade-in ${isOpen ? 'md:block' : ''}`}>History</span>
                </Link>
            </nav>

            <div className='div-logout'>
                <button
                    onClick={handleLogout}
                    className={`btn-logout ${isOpen ? 'md:justify-start' : 'md:justify-center'}`}>
                    <LogOut size={20}/>
                    <span className={`nav-sidebar-span animate-fade-in ${isOpen ? 'md:block' : ''}`}>Logout</span>
                </button>
            </div>

        </div>
    );
};

export default Sidebar;