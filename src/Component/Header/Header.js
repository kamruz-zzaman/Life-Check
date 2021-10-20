import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../Images/Logo/Logo.png'

const Header = () => {
    // get data
    const { user, logOut } = useAuth();
    return (
        <header className="text-gray-400 bg-gray-900 body-font sticky top-0">
            <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
                <Link to='/'><img src={logo} alt="" /></Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink className='hover:bg-blue-700 text-white m-2 px-3 py-2 rounded-md' to='/home'
                        activeClassName="bg-blue-700 text-white m-2 px-3 py-2 rounded-md"> Home</NavLink>
                    <NavLink className='hover:bg-blue-700 text-white m-2 px-3 py-2 rounded-md' to='/services'
                        activeClassName="bg-blue-700 text-white m-2 px-3 py-2 rounded-md"> Services</NavLink>
                    <NavLink className='hover:bg-blue-700 text-white m-2 px-3 py-2 rounded-md' to='/specialist'
                        activeClassName="bg-blue-700 text-white m-2 px-3 py-2 rounded-md"> Specialist</NavLink>
                    <NavLink className='hover:bg-blue-700 text-white m-2 px-3 py-2 rounded-md' to='/support'
                        activeClassName="bg-blue-700 text-white m-2 px-3 py-2 rounded-md"> Supports</NavLink>
                </nav>
                {
                    user.email ?
                        <div className='flex items-center'>
                            <img className='rounded-full w-8 h-8' src={user.photoURL || 'https://i.ibb.co/fScLdY0/pic-1171831236-1.png'} alt="" />
                            <p className='text-white mx-1'>{user.displayName || user.email}</p>
                            <button onClick={logOut} className='bg-blue-400 text-white px-3 py-2 rounded-md hover:bg-blue-700 m-2'>LogOut</button>
                        </div>
                        :
                        <div>
                            <Link to='/signup'><button className=' text-white px-3 py-2 rounded-md hover:bg-blue-700 m-2'>SignUp</button></Link>
                            <Link to='/login'><button className='bg-blue-400 text-white px-3 py-2 rounded-md hover:bg-blue-700 m-2'>Log in</button></Link>
                        </div>
                }

            </div>
        </header>
    );
};

export default Header;