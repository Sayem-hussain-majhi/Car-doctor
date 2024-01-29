import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { BASE_URL } from '../../config/base_url';

const RightNav = () => {
    const [serviceData, setServiceData] = useState([])
    const id = useParams()

    useEffect(() => {
        axios(`${BASE_URL}/services`)
            .then(res => setServiceData(res.data))
    }, [])



    return (
        <div className='p-5 space-y-3'>
            <h2 className="text-3xl font-bold  mt-6 mb-3">Services</h2>
            
            {
                serviceData?.map(service =>
                 <>    
                   <div className="my-2">
                   <Link to={`/services/${service?._id} `}>
                        <div className={`${service?._id === id.id ? 'bg-[#FF3811] flex justify-between py-3 px-3 rounded-md text-white' 
                        : 'flex justify-between hover:bg-[#FF3811] duration-300 rounded-lg py-3 px-3'} `}>

                            <h2 className="text-xl text-[#444] font-bold">{service?.title}</h2>
                            <button
                                className=" text-[#FF3811] font-bold text-2xl">
                                <Icon icon="ph:arrow-right" />
                            </button>

                        </div>
                    </Link>
                   </div>

                </>)

            }
        </div>
    );
};

export default RightNav;