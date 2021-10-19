import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { Key, CoverImg, Description1, Title } = service;
    return (
        <div className='mb-5 p-2 shadow-2xl h-full rounded-2xl hover:bg-gray-900 hover:text-white transition ease-in duration-700'>
            <div className="h-4/5">
                <div>
                    <img className='rounded-lg' src={CoverImg} alt="" />
                </div>
                <div>
                    <p className='text-xl font-bold text-center '>{Title}</p>
                    <p className='font-normal'>{Description1}</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Link to={`/detail/${Key}`}><button className='mt-5 bg-blue-400 text-white px-3 py-2 rounded-xl hover:bg-blue-700 m-2 transition ease-in duration-300'>Learn More</button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;