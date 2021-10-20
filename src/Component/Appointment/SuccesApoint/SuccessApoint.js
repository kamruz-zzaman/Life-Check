import React from 'react';
import succImg from '../../../Images/Confirm/Confirmed-bro.svg'
// when appointment form submit successfull then show 
const SuccessApoint = () => {
    return (
        <div className='flex justify-center'>
            <img className='w-3/5' src={succImg} alt="" />
        </div>
    );
};

export default SuccessApoint;