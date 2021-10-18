import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo/Logo.png'

const Header = () => {
    return (
        <header className="text-gray-400 bg-gray-900 body-font sticky top-0">
            <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
                <Link to='/home'><img src={logo} alt="" /></Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className='hover:bg-blue-700 text-white m-2 px-3 py-2 rounded-md' to='/home'>Home</Link>
                    <Link className='hover:bg-blue-700 text-white m-2 px-3 py-2 rounded-md' to='/services'>Services</Link>
                    <Link className='hover:bg-blue-700 text-white m-2 px-3 py-2 rounded-md' to='/about'>About</Link>
                </nav>
                <Link to='/login'><button className='bg-blue-400 text-white px-3 py-2 rounded-md hover:bg-blue-700 m-2'>Log in</button></Link>
                <Link to='/signup'><button className='bg-blue-400 text-white px-3 py-2 rounded-md hover:bg-blue-700 m-2'>SignUp</button></Link>
            </div>
        </header>
    );
};

export default Header;