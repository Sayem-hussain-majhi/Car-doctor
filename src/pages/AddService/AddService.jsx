import { Suspense } from "react";
import Loading from "../../Shared/Loading";
import { images } from "../../Shared/Images";
import Banner from "../../Components/Banner";


const AddService = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const serviceName = form.serviceName.value
        const servicePrice = parseInt(form.servicePrice.value)
        const texthere = form.texthere.value
        const serviceType = form.serviceType.value
        const productDescription = form.productDescription.value

        console.log(serviceName, servicePrice, texthere, serviceType, productDescription)

    }


    return (
        <Suspense fallback={<Loading />}>
            <div>
                <Banner img={images.banner5} text={'Add Service'} />

                <div className="bg-base-200 p-11 m-16">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className=" w-2/3 mx-auto  flex gap-5">
                            <input className="rounded pl-2 border-2 w-full" type="text" name="serviceName" placeholder="Service Name" required />

                            <input className="rounded p-2 border-2 w-full" type="text" name="servicePrice" placeholder="Service Price" required />
                        </div>
                        <div className=" w-2/3 mx-auto  flex gap-5">
                            <input className="pl-2 rounded border-2 w-full" type="text" name="texthere" placeholder="Text here" required />
                            <input className="p-2 border-2 w-full rounded" type="text" name="serviceType" placeholder="Service Type" required />
                        </div>


                        <div className="">
                            <div className="w-2/3 mx-auto">
                                <textarea className="w-full p-2 rounded" name="productDescription" id="" placeholder="Product Description" cols="30" rows="10"></textarea>

                                <button className="bg-[#FF3811] py-3 px-5 w-full rounded font-semibold text-white my-5">Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </Suspense>
    );
};

export default AddService;