import { Suspense, lazy } from "react";
const Loading = lazy(()=> import("../../../Shared/Loading"))


const About = () => {
    return (
        <Suspense fallback={<Loading />}>
            
        </Suspense>
    );
};

export default About;