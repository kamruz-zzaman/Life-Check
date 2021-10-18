import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Images/Background/Gynecology consultation-rafiki.svg'

const Banner = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
            <div className='flex justify-center '>
                <img className='w-5/3' src={img} alt="" />
            </div>
            <div className='flex justify-center md:mt-20 lg:mt-20 mx-12'>
                <div className='w-full m-2 '>
                    <h1 className='text-4xl font-bold text-gray-900 mb-5'>Get well soon with our  premier senior rehabilitation  and nursing care.</h1>
                    <h3 className='leading-8 mt-1 mr-2 text-xl text-justify '>Accidents happen, injuries occur and illnesses crop up, but you or your loved one won’t face them alone. We have the medical training, experience and the  heart to rebuild your health, confidence and quality of life.</h3>
                    <Link to=''><button className='mt-5 bg-blue-400 text-white px-3 py-2 rounded-md hover:bg-blue-700 m-2'>Appointment Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;