import { Suspense, lazy } from "react";
import OurTeam from "../../Home/OurTeam/OurTeam";
import Address from "../../Home/Address/Address";
import OurFacility from "../../Home/OurFacility/OurFacility";
const Loading = lazy(()=> import("../../../Shared/Loading"))
const About = lazy(() => import('../../Home/About/About'))


const AboutPage = () => {
    return (
        <Suspense fallback={<Loading />}>
            <About />
            <OurTeam />
            <Address />
            <OurFacility />
        </Suspense>
    );
};

export default AboutPage;