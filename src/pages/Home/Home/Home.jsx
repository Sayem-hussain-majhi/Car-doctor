import { Suspense, lazy } from "react";
const CustomerFeedback = lazy(()=> import("../CustomerFeedback/CustomerFeedback"))
const OurFacility = lazy(()=> import("../OurFacility/OurFacility"))
const Services = lazy(() => import('../Services/Services'));
const About = lazy(() => import('../About/About'))
const Banner = lazy(()=> import('../Banner/Banner'))
const Loading = lazy(()=> import("../../../Shared/Loading"))
const Address = lazy(()=> import("../Address/Address"))
const OurTeam = lazy(()=> import("../OurTeam/OurTeam"))



const Home = () => {
    return (
        <Suspense fallback={<Loading />}>
            <div>
                <Banner />
                <About />
                <Services />
                <Address />
                <OurTeam />
                <OurFacility />
                <CustomerFeedback />
            </div>
        </Suspense>

    );
};

export default Home;