import { Suspense } from "react";
import Loading from "../../Shared/Loading";
import { checkPropTypes } from "prop-types";

const ServicImg = ({img}) => {
    return (
        <Suspense fallback={<Loading />}>
            <main>
                <div className="w-full p-5">
                    <img className="rounded-xl" src={img} alt="" />
                </div>
            </main>
        </Suspense>
    );
};

ServicImg.propTypes = {
    img: checkPropTypes.string,
};


export default ServicImg;