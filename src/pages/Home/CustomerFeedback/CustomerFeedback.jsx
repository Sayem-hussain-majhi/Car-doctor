import { Suspense, lazy } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { images } from "../../../Shared/Images";



// import required modules
import { Parallax, Navigation } from 'swiper/modules';


const HeadingText = lazy(() => import("../../../Shared/HeadingText"))
const Loading = lazy(() => import("../../../Shared/Loading"))

const CustomerFeedback = () => {
    return (
        <Suspense fallback={<Loading />}>
            <HeadingText subHeading={'Testimonial'}
                heading={'What Customer Says'} description={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `} />

            <div>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#FF3811',
                        '--swiper-background': '#FF3811',
                        '--swiper-navigation-size': '24px',
                    }}
                    speed={600}
                    parallax={true}
                    navigation={true}
                    modules={[Parallax, Navigation]}
                    className="mySwiper"
                >

                    <div
                        slot="container-start"
                        style={{
                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    <SwiperSlide >
                        <article className="flex p-11 gap-6">
                            <div className="p-5 border-2 rounded py-14">
                                <div className="title pb-5" data-swiper-parallax="-300">
                                    <div className="flex justify-between">
                                        <div className="flex ">
                                            <div className="w-[70px] h-[70px] mr-5 items-center">
                                                <img className="w-full rounded-full" src={images.user1} alt="" />
                                            </div>
                                            <div>
                                                <h4 className="text-3xl font-bold">Sayem Hussain</h4>
                                                <h5 className="text-xl font-semibold">Frontend Developer</h5>
                                            </div>
                                        </div>
                                        <div className="mr-16  w-[70px]" >
                                            <img src={images.quote} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                    </p>
                                </div>
                            </div>

                            <div className="p-5 border-2 rounded py-14">
                                <div className="title pb-5" data-swiper-parallax="-300">
                                    <div className="flex justify-between">
                                        <div className="flex ">
                                            <div className="w-[70px] h-[70px] mr-5 items-center">
                                                <img className="w-full rounded-full" src={images.user1} alt="" />
                                            </div>
                                            <div>
                                                <h4 className="text-3xl font-bold">Sayem Hussain</h4>
                                                <h5 className="text-xl font-semibold">Frontend Developer</h5>
                                            </div>
                                        </div>
                                        <div className="mr-16  w-[70px]" >
                                            <img src={images.quote} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                    </p>
                                </div>
                            </div>
                        </article>

                    </SwiperSlide>

                      <SwiperSlide >
                        <article className="flex p-11 gap-6">
                            <div className="p-5 border-2 rounded py-14">
                                <div className="title pb-5" data-swiper-parallax="-300">
                                    <div className="flex justify-between">
                                        <div className="flex ">
                                            <div className="w-[70px] h-[70px] mr-5 items-center">
                                                <img className="w-full rounded-full" src={images.user1} alt="" />
                                            </div>
                                            <div>
                                                <h4 className="text-3xl font-bold">Sayem Hussain</h4>
                                                <h5 className="text-xl font-semibold">Frontend Developer</h5>
                                            </div>
                                        </div>
                                        <div className="mr-16  w-[70px]" >
                                            <img src={images.quote} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                    </p>
                                </div>
                            </div>

                            <div className="p-5 border-2 rounded py-14">
                                <div className="title pb-5" data-swiper-parallax="-300">
                                    <div className="flex justify-between">
                                        <div className="flex ">
                                            <div className="w-[70px] h-[70px] mr-5 items-center">
                                                <img className="w-full rounded-full" src={images.user1} alt="" />
                                            </div>
                                            <div>
                                                <h4 className="text-3xl font-bold">Sayem Hussain</h4>
                                                <h5 className="text-xl font-semibold">Frontend Developer</h5>
                                            </div>
                                        </div>
                                        <div className="mr-16  w-[70px]" >
                                            <img src={images.quote} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                    </p>
                                </div>
                            </div>
                        </article>

                    </SwiperSlide>
                    <SwiperSlide >
                        <article className="flex p-11 gap-6">
                            <div className="p-5 border-2 rounded py-14">
                                <div className="title pb-5" data-swiper-parallax="-300">
                                    <div className="flex justify-between">
                                        <div className="flex ">
                                            <div className="w-[70px] h-[70px] mr-5 items-center">
                                                <img className="w-full rounded-full" src={images.user1} alt="" />
                                            </div>
                                            <div>
                                                <h4 className="text-3xl font-bold">Sayem Hussain</h4>
                                                <h5 className="text-xl font-semibold">Frontend Developer</h5>
                                            </div>
                                        </div>
                                        <div className="mr-16  w-[70px]" >
                                            <img src={images.quote} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                    </p>
                                </div>
                            </div>

                            <div className="p-5 border-2 rounded py-14">
                                <div className="title pb-5" data-swiper-parallax="-300">
                                    <div className="flex justify-between">
                                        <div className="flex ">
                                            <div className="w-[70px] h-[70px] mr-5 items-center">
                                                <img className="w-full rounded-full" src={images.user1} alt="" />
                                            </div>
                                            <div>
                                                <h4 className="text-3xl font-bold">Sayem Hussain</h4>
                                                <h5 className="text-xl font-semibold">Frontend Developer</h5>
                                            </div>
                                        </div>
                                        <div className="mr-16  w-[70px]" >
                                            <img src={images.quote} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                    </p>
                                </div>
                            </div>
                        </article>

                    </SwiperSlide>
                    <SwiperSlide >
                        <article className="flex p-11 gap-6">
                            <div className="p-5 border-2 rounded py-14">
                                <div className="title pb-5" data-swiper-parallax="-300">
                                    <div className="flex justify-between">
                                        <div className="flex ">
                                            <div className="w-[70px] h-[70px] mr-5 items-center">
                                                <img className="w-full rounded-full" src={images.user1} alt="" />
                                            </div>
                                            <div>
                                                <h4 className="text-3xl font-bold">Sayem Hussain</h4>
                                                <h5 className="text-xl font-semibold">Frontend Developer</h5>
                                            </div>
                                        </div>
                                        <div className="mr-16  w-[70px]" >
                                            <img src={images.quote} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                    </p>
                                </div>
                            </div>

                            <div className="p-5 border-2 rounded py-14">
                                <div className="title pb-5" data-swiper-parallax="-300">
                                    <div className="flex justify-between">
                                        <div className="flex ">
                                            <div className="w-[70px] h-[70px] mr-5 items-center">
                                                <img className="w-full rounded-full" src={images.user1} alt="" />
                                            </div>
                                            <div>
                                                <h4 className="text-3xl font-bold">Sayem Hussain</h4>
                                                <h5 className="text-xl font-semibold">Frontend Developer</h5>
                                            </div>
                                        </div>
                                        <div className="mr-16  w-[70px]" >
                                            <img src={images.quote} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                    </p>
                                </div>
                            </div>
                        </article>

                    </SwiperSlide>
                    <SwiperSlide >
                        <article className="flex p-11 gap-6">
                            <div className="p-5 border-2 rounded py-14">
                                <div className="title pb-5" data-swiper-parallax="-300">
                                    <div className="flex justify-between">
                                        <div className="flex ">
                                            <div className="w-[70px] h-[70px] mr-5 items-center">
                                                <img className="w-full rounded-full" src={images.user1} alt="" />
                                            </div>
                                            <div>
                                                <h4 className="text-3xl font-bold">Sayem Hussain</h4>
                                                <h5 className="text-xl font-semibold">Frontend Developer</h5>
                                            </div>
                                        </div>
                                        <div className="mr-16  w-[70px]" >
                                            <img src={images.quote} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                    </p>
                                </div>
                            </div>

                            <div className="p-5 border-2 rounded py-14">
                                <div className="title pb-5" data-swiper-parallax="-300">
                                    <div className="flex justify-between">
                                        <div className="flex ">
                                            <div className="w-[70px] h-[70px] mr-5 items-center">
                                                <img className="w-full rounded-full" src={images.user1} alt="" />
                                            </div>
                                            <div>
                                                <h4 className="text-3xl font-bold">Sayem Hussain</h4>
                                                <h5 className="text-xl font-semibold">Frontend Developer</h5>
                                            </div>
                                        </div>
                                        <div className="mr-16  w-[70px]" >
                                            <img src={images.quote} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                    </p>
                                </div>
                            </div>
                        </article>

                    </SwiperSlide>


                </Swiper>
            </div>
        </Suspense>
    );
};

export default CustomerFeedback;