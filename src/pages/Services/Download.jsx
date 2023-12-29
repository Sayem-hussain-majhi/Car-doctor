import React, { Suspense } from 'react';
import { Icon } from '@iconify/react';
import Loading from '../../Shared/Loading';
import { images } from '../../Shared/Images';


const Download = () => {
    return (
        <Suspense fallback={<Loading />}>
            <main className='bg-[#151515] text-white p-5 rounded'>
                <h3 className="text-3xl font-bold my-4">Download</h3>

                <article className='space-y-3'>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center'>
                            <Icon icon="mdi:file" />
                            <div className='ml-2'>
                                <h4 className='text-lg font-bold'>Our Brochure</h4>
                                <p className='text-xs'>Download</p>
                            </div>
                        </div>
                        <div className='btn bg-[#FF3811]'>
                            <Icon icon="ph:arrow-right" color='#fff' />
                        </div>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center'>
                            <Icon icon="mdi:file" />
                            <div className='ml-2'>
                                <h4 className='text-lg font-bold'>Company Details</h4>
                                <p className='text-xs'>Download</p>
                            </div>
                        </div>
                        <div className='btn bg-[#FF3811] '>
                            <Icon icon="ph:arrow-right" color='#fff' />
                        </div>
                    </div>
                </article>
            </main>

            <main className='bg-[#151515] p-5 py-12 rounded mt-5 text-center'>
                <div className='flex justify-center text-white py-3'> <img src={images?.logo} /></div>
                <p className='text-white pb-3'>Need Help? We Are Here <br />
                    To Help You</p>

                <div className='bg-white p-3 relative space-y-2'>
                    <p className='font-bold'><span className='text-[#FF3811]'>Car Doctor</span> Special</p>
                    <p className='pb-5'>Save up to <span className='text-[#FF3811]'>60% off</span></p>
                    <p className='bg-[#FF3811] text-white font-semibold py-3 px-5 rounded absolute left-[75px] top-16'>Get A Quote</p>
                </div>
            </main>
        </Suspense>
    );
};

export default Download;