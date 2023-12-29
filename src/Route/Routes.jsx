import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Login = lazy(()=> import("../pages/Login/Login"))
const Signup = lazy(()=> import("../pages/Signup/Signup"))
const Main = lazy(()=> import("../Layout/Main"))
const Services = lazy(()=> import("../pages/Services/Services"))
const CheckOut = lazy(()=> import("../pages/CheckOut/CheckOut"))
const AddService = lazy(()=> import("../pages/AddService/AddService"))
const Home = lazy(()=> import("../pages/Home/Home/Home"))
const About =  lazy(()=> import("../pages/About/About/About"))


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path:'/about',
          element: <About />
        },
        {
          path:'/services/:id',
          element: <Services />,
          loader: ({params})=> fetch(`http://localhost:3000/services/${params.id}`)
        },
        {
          path:'/checkOut',
          element: <CheckOut />
        },
        {
          path:'/addService',
          element: <AddService />
        },
        {
          path:'/login',
          element: <Login />
        },
        {
          path:'/signup',
          element: <Signup />
        },
      
        
      ]
    },
  ]);

  export default router