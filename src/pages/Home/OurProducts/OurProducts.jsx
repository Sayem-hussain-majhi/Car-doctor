import React, { lazy } from 'react';
import ProductsInfo from './OurProductsInfo';
import Stars from '../../../Components/Stars';
const HeadingText = lazy(()=> import('../../../Shared/HeadingText'))

const OurProducts = () => {
    return (
        <main>
            <HeadingText subHeading={'Popular Products'} heading={'Browse Our Products'} description={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}/>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    ProductsInfo?.map(p => <>
                        <div className='w-80 h-52  m-5 text-center bg-slate-400 p-5 rounded-lg'>
                            <div className='w-1/3 mx-auto '>
                                <img className='w-full' src={p.img} alt="" />
                            </div>
                            <div>
                                <p>icon</p>
                               <Stars stars={p.rating} />
                            </div>
                            <h4 className="text-3xl font-bold">{p.name}</h4>
                            <p className='font-bold text-[#FF3811] '>{p.price}</p>
                        </div>
                    </>)
                }
            </div>
        </main>
    );
};

export default OurProducts;