import { checkPropTypes } from "prop-types";
import { Suspense, lazy } from "react";
const Loading = lazy(() => import("../Shared/Loading"))
import subBg from '../../public/bg.svg'

const Banner = ({ img, text }) => {
    return (
        <Suspense fallback={<Loading />}>
            <main >
                <div className="relative bg-black">
                    <img className="w-full h-[300px] object-cover opacity-50" src={img} alt="" />
                    <h2 className="absolute top-9 p-24 text-4xl font-bold text-white">{text}</h2>
                        <div className="flex justify-center">
                            <img className="absolute bottom-0
                            " src={subBg} alt="" />
                            <h4 className="text-2xl absolute text-white bottom-1   font-semibold">{text}</h4>
                        </div>
                </div>
            </main>
        </Suspense>
    );
};

Banner.propTypes = {
    img: checkPropTypes.string,
    text: checkPropTypes.string,
};


export default Banner;