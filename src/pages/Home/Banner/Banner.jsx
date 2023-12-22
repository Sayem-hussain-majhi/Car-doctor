import DefaultBtn from "../../../Shared/DefaultBtn";
import { images } from "../../../Shared/Images";

const Banner = () => {
    return (
        <div className="carousel w-full h-80 lg:h-[600px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={images.banner1} className="w-full rounded-lg" />
                <div className="absolute h-full flex items-center justify-start  transform -translate-y-1/2   top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <article className="text-white space-y-7 pl-12 w-1/2">
                        <h2 className="lg:text-6xl text-4xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex ">
                            <DefaultBtn text={'Discover More'} styles={'active bg-[#FF3811] mr-5'} />
                            <DefaultBtn text={'Latest Project'} styles={'active hover:bg-[#FF3811] border hover:border-[#FF3811] '} />
                        </div>
                    </article>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] hover:text-white outline-none mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:text-white outline-none">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={images.banner2} className="w-full" />
                <div className="absolute h-full flex items-center justify-start  transform -translate-y-1/2   top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <article className="text-white space-y-7 pl-12 w-1/2">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex ">
                            <DefaultBtn text={'Discover More'} styles={'active bg-[#FF3811] mr-5'} />
                            <DefaultBtn text={'Latest Project'} styles={'active hover:bg-[#FF3811] border hover:border-[#FF3811] '} />
                        </div>
                    </article>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5 hover:bg-[#FF3811] hover:text-white outline-none">❮</a>
                    <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:text-white outline-none">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={images.banner3} className="w-full" />
                <div className="absolute h-full flex items-center justify-start  transform -translate-y-1/2   top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <article className="text-white space-y-7 pl-12 w-1/2">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex ">
                            <DefaultBtn text={'Discover More'} styles={'active bg-[#FF3811] mr-5'} />
                            <DefaultBtn text={'Latest Project'} styles={'active hover:bg-[#FF3811] border hover:border-[#FF3811] '} />
                        </div>
                    </article>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5 hover:bg-[#FF3811] hover:text-white outline-none">❮</a>
                    <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] hover:text-white outline-none">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={images.banner4} className="w-full" />
                <div className="absolute h-full flex items-center justify-start  transform -translate-y-1/2   top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <article className="text-white space-y-7 pl-12 w-1/2">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex ">
                            <DefaultBtn text={'Discover More'} styles={'active bg-[#FF3811] mr-5'} />
                            <DefaultBtn text={'Latest Project'} styles={'active hover:bg-[#FF3811] border hover:border-[#FF3811] '} />
                        </div>
                    </article>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5 hover:bg-[#FF3811] hover:text-white outline-none">❮</a>
                    <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:text-white outline-none">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;