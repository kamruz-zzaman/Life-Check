import React from 'react';
import img from '../../Images/Background/Gynecology consultation-rafiki.svg'

const Banner = () => {
    return (
        <div className='grid grid-cols-2 '>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='w-full'>
                <h1 className='text-4xl'>Get well soon with our premier senior rehabilitation and nursing care.</h1>
                <h3>Accidents happen, injuries occur and illnesses crop up, but you or your loved one won’t face them alone. We have the medical training, experience and the  heart to rebuild your health, confidence and quality of life.</h3>
            </div>
        </div>
    );
};

export default Banner;