import { Suspense, lazy, useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import { images } from "../../Shared/Images";
import ServicImg from "./ServicImg";
import ServicesInfo from "./ServicesInfo";
import ServiceCard from "./ServiceCard";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import RightNav from "./RightNav";
import Download from "./Download";
import { BASE_URL } from "../../config/base_url";
const Loading = lazy(() => import("../../Shared/Loading"))


const Services = () => {
    const [title, setTitle] = useState('') 
    const [service, setService] = useState([])
    const { id } = useParams()
   
    useEffect(() => {
        axios(`${BASE_URL}/services`)
            .then(res => setService(res.data))
    }, [])

    // handleSaveLocalStorage
    const handleSaveLocalStorage =(title, price)=>{
        if(title){
            localStorage.setItem('title', title)
            localStorage.setItem('price', price)
            console.log(title, price)
        }
    }



    const singleService = service?.find(item => item._id === id)
    console.log(singleService)

    return (
        <Suspense fallback={<Loading />}>
            <Banner img={images.banner4} text={'Services Detailes'} />
            <main className="mt-20 mb-6">
                <div className="gap-5 flex">
                    <div className="w-2/3">
                        <ServicImg img={singleService?.img} />
                        <ServicesInfo
                            heading={singleService?.title}
                            describtion={singleService?.description} />
                        
                        {/*Service Card  */}
                        <ServiceCard singleService={singleService} />
                        <ServicesInfo describtion={singleService?.description} />

                        <article className="p-9">
                            <h3 className="text-3xl font-bold mb-5 mt-8">3 Simple Steps to Process</h3>
                            <p className="line-clamp-3 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>

                            <div className="lg:flex gap-5 my-8">
                                <div className="py-12 text-center px-8">
                                    <h2 className="text-3xl font-bold bg-[#f76437] rounded-full text-white m-5">01</h2>
                                    <h3 className="text-2xl font-bold p-2">Step One</h3>
                                    <p className="p-3">It uses a dictionary <br /> of over 200 .</p>
                                </div>
                                <div className="py-12 text-center px-8">
                                    <h2 className="text-3xl font-bold bg-[#f76437] rounded-full text-white m-5">02</h2>
                                    <h3 className="text-2xl font-bold p-2">Step Two</h3>
                                    <p className="p-3">It uses a dictionary <br /> of over 200 .</p>
                                </div>
                                <div className=" py-12 text-center px-8">
                                    <h2 className="text-3xl font-bold bg-[#f76437] rounded-full text-white m-5">03</h2>
                                    <h3 className="text-2xl font-bold p-2">Step Three</h3>
                                    <p className="p-3">It uses a dictionary <br /> of over 200 .</p>
                                </div>

                            </div>

                            <iframe width="660" height="350" src="https://www.youtube.com/embed/hPpIGHLjWU0?si=cLrHU_qIl1HpXbc_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </article>

                    </div>

                    {/* Right side nav */}
                    <div className="col-span-1 row-span-3  bg-orange-100 flex-1">
                        <RightNav />
                        <Download />
                        <h2 className="text-3xl font-bold my-5">Price : ${singleService?.price}</h2>
                        <Link to={'/checkOut'}>
                            <button onClick={()=> handleSaveLocalStorage(`${singleService?.title}`, `${singleService?.price}` )} className="bg-[#FF3811] py-2 px-4 text-white font-semibold rounded">Proceed Checkout</button>
                        </Link>
                    </div>
                </div>
            </main>
        </Suspense>
    );
};

export default Services;