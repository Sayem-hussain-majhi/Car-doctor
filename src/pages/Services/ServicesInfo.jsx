import { Suspense } from "react";
import Loading from "../../Shared/Loading";
import { checkPropTypes } from "prop-types";

const ServicesInfo = ({ heading, describtion }) => {
    return (
        <Suspense fallback={<Loading />}>
            <main className="px-10">
                <h2 className="text-4xl font-bold my-11">{heading}</h2>
                <p>{describtion}</p>
            </main>
        </Suspense>
    );
};

ServicesInfo.propTypes = {
    heading: checkPropTypes.string,
    describtion: checkPropTypes.string,
};


export default ServicesInfo;