import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <span className=' text-2xl font-bold border-b-2 border-blue-500'>Our Services</span>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center mx-16 my-5'>
                {
                    services.slice(0, 5).map(service =>
                        <ServiceCard
                            key={service.Key}
                            service={service}
                        >
                        </ServiceCard>)
                }
                <div className='flex justify-center'>
                    <Link to='/services'><button className='text-blue-700 hover:text-black'>More Services<i className="fas fa-arrow-right ml-2 mt-2"></i></button></Link>
                </div>
            </div>

        </div>
    );
};

export default Services;