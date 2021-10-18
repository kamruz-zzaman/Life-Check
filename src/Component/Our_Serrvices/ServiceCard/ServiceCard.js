import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { CoverImg, Description1, Title } = service;
    console.log(service);
    return (
        <div className=' p-2 shadow-2xl h-full rounded-2xl'>
            <div className="h-3/4">
                <div>
                    <img className='rounded-lg' src={CoverImg} alt="" />
                </div>
                <div>
                    <p className='text-xl font-bold text-center text-gray-900'>{Title}</p>
                    <p className='font-normal'>{Description1}</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Link to=''><button className='mt-5 bg-blue-400 text-white px-3 py-2 rounded-md hover:bg-blue-700 m-2'>Learn More</button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;