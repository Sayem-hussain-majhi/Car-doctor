import axios from "axios";
import { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";
const ServicesCard = lazy(()=> import("./ServicesCard"))
const DefaultBtn = lazy(()=> import("../../../Shared/DefaultBtn"))
const Loading = lazy(() => import('../../../Shared/Loading'))
const HeadingText = lazy(() => import('../../../Shared/HeadingText'))


const Services = () => {
    const [services, setServices] = useState([])
    const id = useParams()
    console.log(id)
   

    useEffect(() => {
        axios('http://localhost:3000/services')
            .then(res => {
                setServices(res.data)
            })
    }, [])


    return (
        <Suspense fallback={<Loading />}>
            <div>
            
                <HeadingText subHeading={'Service'} heading={'Our Service Area'} description={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `} />

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-10 mb-28">
                    {
                        services?.map(service =>
                            <>
                                <ServicesCard key={service._id} service={service}  />
                            </>

                        )
                    }
                </div>

               <div className="flex justify-center mb-10">
               <DefaultBtn 
                styles={'text-[#FF3811] hover:bg-[#FF3811] hover:text-white border-[#FF3811]   border-2 text-center'} text="More Services" />
               </div>
            </div>
        </Suspense>
    );
};

export default Services;