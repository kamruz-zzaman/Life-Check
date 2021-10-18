import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo/Logo.png'

const LogIn = () => {
    return (
        <div className='flex justify-center items-center m-4' >
            <div className=' p-10 rounded-xl shadow-xl'>
                <div className='flex justify-center items-center'>
                    <img className='w-64 mb-6' src={logo} alt="" />
                </div>
                <input className='bg-transparent border border-red-500 p-2 m-1 rounded-lg w-full' type="email" name="email" placeholder='Emal' /><br />
                <input className='bg-transparent border border-red-500 p-2 m-1 rounded-lg w-full' type="password" name="pass" placeholder='Password' /><br />
                <button className='bg-red-500 w-full m-2 p-2 rounded-lg hover:bg-red-800'>LogIn</button>
                <p className='text-center'>Didn't have account? <Link to='/signup' className='text-blue-600'>SignUp</Link></p>
                <div className='text-center mt-5'>
                    <p className='text-pink-900'>OR, LogIn with</p>
                    <button ><i className="fab fa-facebook m-1 sm:text-xl md:text-2xl lg:text-4xl hover:text-blue-500"></i></button>
                    <button ><i className="fab fa-google m-2 sm:text-xl md:text-2xl lg:text-4xl hover:text-green-500 "></i></button>
                    <button ><i className="fab fa-github m-1 sm:text-xl md:text-2xl lg:text-4xl hover:text-gray-500"></i></button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;