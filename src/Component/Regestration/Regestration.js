import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo/Logo.png'
import useFirebase from '../../Hooks/useFirebase';

const Regestration = () => {
    const { signinWithGoogle, signUpWithEmail } = useFirebase();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const saveEmail = (e) => {
        setEmail(e.target.value);
    }
    const savePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleRegistration = (e) => {
        signUpWithEmail(email, password);
        e.preventDefault();
    }
    return (
        <div className='flex justify-center items-center m-4'>
            <div className=' p-10 rounded-xl shadow-xl'>
                <div className='flex justify-center items-center'>
                    <img className='w-64 mb-6' src={logo} alt="" />
                </div>
                {/* <input className='bg-transparent border border-red-500 p-2 m-1 rounded-lg w-full' type="text" name="name" placeholder='Name' /><br /> */}
                <input onChange={saveEmail} className='bg-transparent border border-red-500 p-2 m-1 rounded-lg w-full' type="email" name="email" placeholder='Emal' /><br />
                <input onChange={savePassword} className='bg-transparent border border-red-500 p-2 m-1 rounded-lg w-full' type="password" name="pass" placeholder='Password' /><br />
                {/* <input className='bg-transparent border border-red-500 p-2 m-1 rounded-lg w-full' type="password" name="confirm pass" placeholder='Confirm Password' /> */}
                <button onClick={handleRegistration} className='bg-red-500 w-full m-2 p-2 rounded-lg hover:bg-red-800'>SignUp</button>
                <p>Already have an account? <Link to='/login' className='text-blue-600'>SignIn</Link></p>
                <div className='text-center mt-5'>
                    <p className='text-pink-900'>OR, SignUp with</p>
                    {/* <button ><i className="fab fa-facebook m-1 sm:text-xl md:text-2xl lg:text-4xl hover:text-blue-500"></i></button> */}
                    <button onClick={signinWithGoogle}><i className="fab fa-google m-2 sm:text-xl md:text-2xl lg:text-4xl hover:text-green-500 "></i></button>
                    {/* <button ><i className="fab fa-github m-1 sm:text-xl md:text-2xl lg:text-4xl hover:text-gray-500"></i></button> */}
                </div>
            </div>
        </div>
    );
};

export default Regestration;