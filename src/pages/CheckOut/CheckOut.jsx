import { Suspense, useContext } from "react";
import Loading from "../../Shared/Loading";
import { images } from "../../Shared/Images";
import Banner from "../../Components/Banner";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const text = localStorage.getItem('title')
    const price = localStorage.getItem('price')

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const fristName = form.fristName.value
        const lastName = form.lastName.value
        const yourNumber = parseInt(form.yourNumber.value)
        // const yourEmail = form.yourEmail.value
        const yourMessage = form.message.value

       
        const data = {
            service_name: text,
            service_price: price,
            name: fristName + lastName,
            number: yourNumber,
            email: `${user?.email}`,
            message: yourMessage,
            date: new Date
        }

        axios.post('http://localhost:3000/bookings', data)
        .then(res =>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${text} Booked Successfull`,
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return (
        <Suspense fallback={<Loading />}>
            <div>
                <Banner img={images.banner4} text={'Check Out'} />

                <div className="bg-base-200 p-11 m-16">
                    <div>
                        <h1 className="mb-5 text-4xl font-bold text-center">Check Out : {text}  <br /> Price: {price}</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className=" w-2/3 mx-auto  flex gap-5">
                            <input className="rounded pl-2 border-2 w-full" type="text" name="fristName" placeholder="Frist Name" required />

                            <input className="rounded p-2 border-2 w-full" type="text" name="lastName" placeholder="Last Name" required />
                        </div>
                        <div className=" w-2/3 mx-auto  flex gap-5">
                            <input className="pl-2 rounded border-2 w-full" type="number" name="yourNumber" placeholder="Your Number" required />
                            <input className="p-2 border-2 w-full rounded" type="email"

                                defaultValue={user.email}
                                placeholder="Your Email" required />
                        </div>


                        <div className="">
                            <div className="w-2/3 mx-auto">
                                <textarea className="w-full p-2 rounded" name="message" id="" placeholder="Your Message" cols="30" rows="10"></textarea>

                                <button className="bg-[#FF3811] py-3 px-5 w-full rounded font-semibold text-white my-5">Order Confirm</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </Suspense>
    );
};

export default CheckOut;