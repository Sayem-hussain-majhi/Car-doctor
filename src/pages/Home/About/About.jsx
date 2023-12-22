import { Suspense } from "react";
import DefaultBtn from "../../../Shared/DefaultBtn";
import { images } from "../../../Shared/Images";
import Loading from "../../../Shared/Loading";

const About = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="hero my-28 bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={images.person} className="w-3/4  rounded-lg shadow-2xl" />
          <img src={images.parts} className="w-1/2 absolute rounded-lg border-white border-8 shadow-2xl right-5 top-1/2" />
        </div>

        <div className="lg:w-1/2 space-y-3">
          <p className="text-2xl font-bold text-[#FF3811] mb-3">About us</p>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
          <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
          <DefaultBtn text={'Get More Info'} styles={'bg-[#FF3811] font-normal mt-5'}/>
        </div>
      </div>
    </div>
    </Suspense>
  );
};

export default About;