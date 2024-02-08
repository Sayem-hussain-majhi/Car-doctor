import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { BASE_URL } from "../config/base_url";
const PrivateRoute = lazy(()=> import("../Components/PrivetRoute"))
const MyBookings = lazy(() => import("../pages/MyBookings/MyBookings"))
const Login = lazy(() => import("../pages/Login/Login"))
const Signup = lazy(() => import("../pages/Signup/Signup"))
const Main = lazy(() => import("../Layout/Main"))
const Services = lazy(() => import("../pages/Services/Services"))
const CheckOut = lazy(() => import("../pages/CheckOut/CheckOut"))
const AddService = lazy(() => import("../pages/AddService/AddService"))
const Home = lazy(() => import("../pages/Home/Home/Home"))
const About = lazy(() => import("../pages/About/About/About"))


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Services />,
        loader: ({ params }) => fetch(`${BASE_URL}/services`)
      },
      {
        path: '/services/:id',
        element: <PrivateRoute><Services /></PrivateRoute>,
        loader: ({ params }) => fetch(`${BASE_URL}/services/${params.id}`)
      },
      {
        path: '/checkOut',
        element: <PrivateRoute><CheckOut /></PrivateRoute>
      },
      {
        path: '/addService',
        element: <PrivateRoute><AddService /></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/myBookings',
        element: <PrivateRoute><MyBookings /></PrivateRoute>
      },
    ]
  },
]);

export default router