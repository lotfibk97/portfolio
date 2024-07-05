import React from "react";
import aboutImg from "../assets/about4.jpeg";

const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto" id="about">
      <div className="flex flex-col-reverse md:flex-row items-center md:gap-6 gap-12 px-4 md:px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-full md:w-[400px] h-full">
            <img
              src={aboutImg}
              alt=""
              className="object-cover rounded-xl h-[300px] md:h-auto w-full filter grayscale brightness-50"
            />
          </div>
        </div>
        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-3xl md:text-4xl font-semibold mb-5">
                About <span className="primary-color">Me</span>
              </h3>
              <p className="text-justify leading-7 mx-auto w-full md:w-11/12">
                As an accomplished Full Stack Software Engineer, my career is
                marked by a proven track record of delivering robust solutions
                in dynamic environments. My expertise lies in conceptualizing,
                developing, and deploying complex systems, including ERPs and
                CRMs, tailored to meet the demanding needs of startups and
                established companies alike. My multifaceted experience across
                diverse industries has honed my ability to not only adapt to
                different hats but also ensure that each fits perfectly.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mx-4 md:mx-14 mt-10 items-center gap-6 md:gap-48">
            <div className="bg-[#333333]/40 p-5 rounded-lg text-center">
              <h3 className="text-2xl md:text-4xl font-semibold text-white">
                10
                <span className="primary-color">+</span>
              </h3>
              <p>
                <span className="text-xs md:text-base">Projects</span>
              </p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg text-center">
              <h3 className="text-2xl md:text-4xl font-semibold text-white">
                7<span className="primary-color">+</span>
              </h3>
              <p>
                <span className="text-xs md:text-base">
                  Years of experience
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
