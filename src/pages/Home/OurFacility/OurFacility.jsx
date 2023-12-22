import { Icon } from '@iconify/react';
import { lazy } from "react";
import FacilityInfo from "./OurFacilityInfo";
const HeadingText = lazy(()=> import("../../../Shared/HeadingText"))




const OurFacility = () => {
    console.log(FacilityInfo)
    return (
        <div className="mt-20 mb-36">
            <HeadingText subHeading={'Core Features'} heading={'Why Choose Us'} description={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}/>
            <div className="lg:flex lg:justify-around ">
                {
                    FacilityInfo?.map(facility => <>
                        <div className="group mt-9 p-5 mb-5 hover:bg-[#f76437] hover:text-white rounded-md text-[#f76437] duration-300">
                            <div className="flex justify-center ">
                                <Icon className="text-4xl " 
                                icon={facility.icon} 
                                    color='#3f76437' />
                            </div>
                            <h2 className="group-hover:text-white font-bold text-center text-black ">{facility.title}</h2>
                        </div>

                    </>)
                }
            </div>
        </div>
    );
};

export default OurFacility;