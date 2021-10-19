import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import MoreCard from '../MoreCard/MoreCard';

const Details = () => {
    // const { id } = useParams;
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {services.map(service =>
                <MoreCard
                    key={service.Key}
                    // service={service.Key === id ? service : ''}
                    service={service}
                >
                </MoreCard>
            )}

        </div >
    );
};

export default Details;