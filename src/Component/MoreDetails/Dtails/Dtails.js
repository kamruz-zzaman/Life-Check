import useAuth from '../../../Hooks/useAuth';
import { useParams } from 'react-router';
import MoreCard from '../MoreCard/MoreCard';

const Details = () => {
    // get data
    const { Key } = useParams();
    const { services } = useAuth();
    return (
        <div >
            {/* dynamic set data */}
            {services.filter((x) => x.Key === parseInt(Key)).map((service) =>
                <MoreCard
                    key={service.Key}
                    service={service}
                >
                </MoreCard>

            )}
        </div >
    );
};

export default Details;