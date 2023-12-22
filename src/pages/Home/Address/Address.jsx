import { Suspense, lazy } from "react";
import { Icon } from '@iconify/react';
const Loading = lazy(() => import("../../../Shared/Loading"))


const Address = () => {
    return (
        <Suspense fallback={<Loading />}>
            <article className="bg-gray-800 lg:flex lg:justify-around 3xl:flex-col space-y-5 py-9 px-4 mt-14 mb-28">
                <div className="flex items-center lg:py-20">
                    <div className="text-4xl">
                        <Icon icon="clarity:date-solid" color="#f76437" />
                    </div>
                    <div className="ml-5 text-white">
                        <p className="font-bold ">We are open monday-friday</p>
                        <h4 className="text-2xl font-bold">7:00 am - 9:00 pm</h4>
                    </div>
                </div>
                <div className="flex items-center lg:py-20">
                    <div className="text-4xl">
                    <Icon icon="mingcute:phone-line" color="#f76437" />
                    </div>
                    <div className="ml-5 text-white">
                        <p className="font-bold ">Have a question?</p>
                        <h4 className="text-2xl font-bold">+2546 251 2658</h4>
                    </div>
                </div>
                <div className="flex items-center lg:py-20">
                    <div className="text-4xl">
                        <Icon icon="bxs:map" color="#f76437" />
                    </div>
                    <div className="ml-5 text-white">
                        <p className="font-bold ">Need a repair? our address</p>
                        <h4 className="text-2xl font-bold">Liza Street, New York</h4>
                    </div>
                </div>
            </article>
        </Suspense>
    );
};

export default Address;