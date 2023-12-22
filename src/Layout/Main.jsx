import { Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../Shared/Loading";
const FooterSection = lazy(()=> import('../Shared/Footer/Footer'))
const Navbar = lazy(()=> import('../Shared/Navbar/Navbar'))
// import Navbar from "";

const Main = () => {
    return (
        <Suspense fallback={<Loading />}>
                <Navbar /> 
                <Outlet></Outlet>
                <FooterSection />
        </Suspense>
    );
};

export default Main;