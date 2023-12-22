import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const ServicesCard = ({ service }) => {
    return (
        <div>
            <div className="card  shadow-lg my-5">
                <figure>
                    <img src={service?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#444] font-bold">{service?.title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end items-center text-orange-600 font-bold">
                        <p className='text-orange-600 font-bold'>Price: ${service?.price}<span></span></p>
                        <button className="btn btn-circle text-orange-600 font-bold text-2xl">
                        <Icon icon="ph:arrow-right" />
                        </button>
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