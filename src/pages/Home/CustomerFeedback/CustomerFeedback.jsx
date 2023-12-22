import { Suspense, lazy } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { images } from "../../../Shared/Images";



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
                        '--swiper-navigation-color': '#151515',
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
                        className="text-red-800"
                        style={{
                            backgroundColor: 'black',
                            // 'background-image':
                            //     'url(https://i.ibb.co/yp6BN7d/eatured-1.jpg)',
                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    <SwiperSlide>
                        <article className="flex p-11 gap-6">
                            <div>
                                <div className="title" data-swiper-parallax="-300">
                                    Slide 1
                                </div>
                                <div className="subtitle" data-swiper-parallax="-200">
                                    Subtitle
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
                            <div>
                                <div className="title" data-swiper-parallax="-300">
                                    Slide 2
                                </div>
                                <div className="subtitle" data-swiper-parallax="-200">
                                    Subtitle
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
                    <SwiperSlide>
                        <article className="flex p-11 gap-6">
                            <div>
                                <div className="title" data-swiper-parallax="-300">
                                    Slide 1
                                </div>
                                <div className="subtitle" data-swiper-parallax="-200">
                                    Subtitle
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
                            <div>
                                <div className="title" data-swiper-parallax="-300">
                                    Slide 2
                                </div>
                                <div className="subtitle" data-swiper-parallax="-200">
                                    Subtitle
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
                    <SwiperSlide>
                        <article className="flex p-11 gap-6">
                            <div>
                                <div className="title" data-swiper-parallax="-300">
                                    Slide 1
                                </div>
                                <div className="subtitle" data-swiper-parallax="-200">
                                    Subtitle
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
                            <div>
                                <div className="title" data-swiper-parallax="-300">
                                    Slide 2
                                </div>
                                <div className="subtitle" data-swiper-parallax="-200">
                                    Subtitle
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