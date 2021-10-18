import React from 'react';
import { Link } from 'react-router-dom';

const DoctorsCard = ({ doctor }) => {
    console.log(doctor);
    const { Img, Name, Specialist } = doctor
    return (
        <div className=' p-2 shadow-2xl h-full rounded-2xl'>
            <div className="h-3/4">
                <div className='flex justify-center '>
                    <img className='rounded-full border-2' src={Img} alt="" />
                </div>
                <div className='text-center mt-3'>
                    <p className='text-xl font-bold text-gray-900'>{Name}</p>
                    <p className='font-normal'>{Specialist}</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Link to=''><button className='mt-5 bg-blue-400 text-white px-3 py-2 rounded-md hover:bg-blue-700 m-2'>Shedule Now</button></Link>
            </div>
        </div>
    );
};

export default DoctorsCard;