import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorsCard from '../DoctorsCard/DoctorsCard';

const Doctors = () => {
    // get data 
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Doctors.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <span className='text-2xl font-bold border-b-2 border-blue-500'>Our Doctors</span>
            </div>
            <div className='flex justify-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 items-center mx-16 my-5 '>
                    {
                        services.slice(0, 4).map(doctor =>
                            <DoctorsCard
                                key={doctor.Key}
                                doctor={doctor}
                            >
                            </DoctorsCard>)
                    }
                    <div className='flex justify-center'>
                        <Link to='/specialist'><button className='text-blue-700 hover:text-black'>More Specialist<i className="fas fa-arrow-right ml-2 mt-2"></i></button></Link>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Doctors;