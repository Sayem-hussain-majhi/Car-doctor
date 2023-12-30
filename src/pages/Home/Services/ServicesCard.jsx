import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const [serviceData, setServiceData] = useState([])

    useEffect(() => {
        axios('http://localhost:3000/services')
            .then(res => setServiceData(res.data))
    }, [])


    const handleCardInfo = (id) => {
        const service = serviceData.find(item => item._id == id)
        console.log(service)
    }


    return (
        <div>
            <div className="card h-[440px]  shadow-lg my-5">
                <figure>
                    <img src={service?.img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#444] font-bold">{service?.title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end items-center text-orange-600 font-bold">
                        <p className='text-orange-600 font-bold'>Price: ${service?.price}<span></span></p>

                        <Link to={`services/${service._id}`}>
                            <button onClick={() => handleCardInfo(service._id)} className="btn btn-circle text-orange-600 font-bold text-2xl">
                                <Icon icon="ph:arrow-right" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServicesCard.propTypes = {
    service: PropTypes.string,
};
export default ServicesCard;