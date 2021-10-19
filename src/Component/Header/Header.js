import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import logo from '../../Images/Logo/Logo.png'

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <header className="text-gray-400 bg-gray-900 body-font sticky top-0">
            <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
                <Link to='/home'><img src={logo} alt="" /></Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className='hover:bg-blue-700 text-white m-2 px-3 py-2 rounded-md' to='/home'>Home</Link>
                    <Link className='hover:bg-blue-700 text-white m-2 px-3 py-2 rounded-md' to='/services'>Services</Link>
                    <Link className='hover:bg-blue-700 text-white m-2 px-3 py-2 rounded-md' to='/specialist'>Specialist</Link>
                    <Link className='hover:bg-blue-700 text-white m-2 px-3 py-2 rounded-md' to='/support'>Supports</Link>
                </nav>
                {
                    user.email ?
                        <div className='flex items-center'>
                            <img className='rounded-full w-8 h-8' src={user.photoURL} alt="" />
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