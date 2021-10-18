import React, { useEffect, useState } from 'react';
import DoctorsCard from '../DoctorsCard/DoctorsCard';

const Doctors = () => {
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
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 items-center mx-16 my-5'>
                {
                    services.slice(0, 6).map(doctor =>
                        <DoctorsCard
                            key={doctor.Key}
                            doctor={doctor}
                        >
                        </DoctorsCard>)
                }
            </div>
        </div>
    )
};

export default Doctors;