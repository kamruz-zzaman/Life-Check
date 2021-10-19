import React from 'react';
import ErrorImg from '../../Images/Error/404Error.svg'

const Error = () => {
    return (
        <div className='flex justify-center'>
            <img className='lg:w-2/4' src={ErrorImg} alt="" />
        </div>
    );
};

export default Error;