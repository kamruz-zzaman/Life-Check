import React from 'react';
import { Link } from 'react-router-dom';

const MoreCard = ({ service }) => {
    const { DescriptImg, Description1, Description2, Description3, Title } = service;
    return (
        <div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 m-10'>
                <div className='flex justify-center items-center mx-10'>
                    <div>
                        <p className='text-3xl font-bold mb-5'>{Title}</p>
                        <div className='text-left'>
                            <p className='text-xl'>-{Description1}</p><br />
                            <p className='text-xl'>{Description2}</p><br />
                            <p className='text-xl'>{Description3}</p>
                        </div>
                        <Link to='/appoint'><button className='mt-5 bg-blue-400 text-white px-3 py-2 rounded-md hover:bg-blue-700 m-2'>Appointment Now</button></Link>
                    </div>
                </div>
                <div>
                    <img className='rounded-lg' src={DescriptImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MoreCard;