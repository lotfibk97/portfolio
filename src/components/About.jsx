import React from "react";
import aboutImg from "../assets/about4.jpeg";

const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={aboutImg}
              alt=""
              className="object-cover rounded-xl h-[300px] filter grayscale brightness-50"
            />
          </div>
        </div>
        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span className="primary-color">Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
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
          <div className="flex mt-10 items-center gap-7">
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                11
                <span className="primary-color">+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">Projects</span>
              </p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                7<span className="primary-color">+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">
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
