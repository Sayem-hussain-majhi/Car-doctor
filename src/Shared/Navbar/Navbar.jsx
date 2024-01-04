import { Link, NavLink, useNavigate } from "react-router-dom";
import { images } from '../../Shared/Images'
import DefaultBtn from "../DefaultBtn";
import ActiveRoute from "../../Route/ActiveRoute";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [serviceData, setServiceData] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    axios('http://localhost:3000/services')
    .then(res => setServiceData(res.data))
  },[])

  const handleNavigate =()=>{
    const id = serviceData.slice(0,1).map(data =>data._id)
    navigate('/services/'+id)
  }


  const navLink = <>
    <ActiveRoute to='/'>Home</ActiveRoute>
    <ActiveRoute to='/about'>About</ActiveRoute>
    <button onClick={()=>handleNavigate()}><ActiveRoute to='/services'>Services</ActiveRoute></button>
    <ActiveRoute to='/myBookings'>My Bookings</ActiveRoute>
    <ActiveRoute to='/contact'>Contact</ActiveRoute>
    <ActiveRoute to='/login'>Login</ActiveRoute>
    <ActiveRoute to='/signup'>Signup</ActiveRoute>
  </>

  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {
              navLink
            }
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">
          <img src={images.logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navLink
          }
        </ul>
      </div>
      <div className="navbar-end">
        <div className="text-2xl flex space-x-4 mr-5 cursor-pointer">
          <Icon icon="bi:cart" />
          <Icon icon="iconamoon:search-thin" />
        </div>
        <DefaultBtn styles={'hover:text-white hover:bg-orange-600 text-orange-600 border border-orange-600  '} text="Appointment" />
      </div>
    </div>
  );
};

export default Navbar;