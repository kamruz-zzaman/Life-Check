import React from 'react';
import { Link } from 'react-router-dom';

const DoctorsCard = ({ doctor }) => {
    const { Img, Name, Specialist } = doctor
    return (
        <div className=' p-2 shadow-2xl h-full rounded-2xl hover:bg-gray-900 hover:text-white transition ease-in duration-700'>
            <div className="h-4/5">
                <div className='flex justify-center '>
                    <img className='rounded-full border-2' src={Img} alt="" />
                </div>
                <div className='text-center mt-3'>
                    <p className='text-xl font-bold'>{Name}</p>
                    <p className='font-normal'>{Specialist}</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Link to='/appoint'><button className='mt-5 bg-blue-400 text-white px-3 py-2 rounded-xl hover:bg-blue-700 m-2 transition ease-in duration-300'>Shedule Now</button></Link>
            </div>
        </div>
    );
};

export default DoctorsCard;