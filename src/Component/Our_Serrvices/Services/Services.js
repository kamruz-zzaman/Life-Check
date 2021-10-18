import React, { useEffect, useState } from 'react';
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
                <span className='text-2xl font-bold border-b-2 border-blue-500'>Our Services</span>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 items-center mx-16 my-5'>
                {
                    services.slice(0, 6).map(service =>
                        <ServiceCard
                            key={service.Key}
                            service={service}
                        >
                        </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;