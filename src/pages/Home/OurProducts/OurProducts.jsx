import React, { lazy } from 'react';
import ProductsInfo from './OurProductsInfo';
const Stars = lazy(()=> import('../../../Components/Stars'))
const DefaultBtn = lazy(()=> import('../../../Shared/DefaultBtn'))
const HeadingText = lazy(()=> import('../../../Shared/HeadingText'))

const OurProducts = () => {
    return (
        <main>
            <HeadingText subHeading={'Popular Products'} heading={'Browse Our Products'} description={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}/>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    ProductsInfo?.map(p => <>
                        <div className='w-80 h-96  m-5 text-center border-2 p-5 cursor-pointer rounded-lg'>
                            <div className='w-4/5  rounded-lg py-8 px-12 mb-9 mx-auto bg-[#F3F3F3]'>
                                <img className='w-full' src={p.img} alt="" />
                            </div>
                            <div className='flex justify-center'>
                               <Stars stars={p.rating} />
                            </div>
                            <h4 className="text-3xl font-bold">{p.name}</h4>
                            <p className='font-bold text-[#FF3811] '>{p.price}</p>
                        </div>
                    </>)
                }
            </div>

            <div className="flex justify-center mb-10">
               <DefaultBtn 
                styles={'text-[#FF3811] hover:bg-[#FF3811] hover:text-white border-[#FF3811]   border-2 text-center'} text="More Products" />
               </div>
        </main>
    );
};

export default OurProducts;