import React from "react";
import Navbar from "../Component/Navbar";
import OurStorySection from "../Component/OurStorySection";
import MissionVisionSection from "../Component/MissionVisionSection ";
import CoreValuesSection from "../Component/CoreValuesSection";
import Footer from "../Component/Footer";
import ReadyToWorkSection from "../Component/ReadyToWorkSection ";
// import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />

      <section className="relative bg-[#063957]  py-24 md:py-28">
        {/* Background image if needed */}
        {/* <Image 
        src={bgImage} 
        alt="Background" 
        layout="fill" 
        objectFit="cover" 
        className="z-0 opacity-10"
      /> */}

        <div className="relative z-10 mx-auto px-6 md:px-20 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            About Basera Properties
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Building dreams, creating homes, and delivering exceptional real
            estate experiences for over a decade.
          </p>
        </div>
      </section>

      <OurStorySection />
      <MissionVisionSection />
      <CoreValuesSection />
      <ReadyToWorkSection />
      <Footer />
    </>
  );
};

export default page;
