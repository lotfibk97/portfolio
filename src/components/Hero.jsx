import React from "react";
import profilepic from "../assets/profilepic6.jpeg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <div className="" id="home">
      <div className="my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center align-center">
        <div className="flex-col my-auto mx-auto">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">
            Hello I am Lotfi Bokhari
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#FF44EC]">
            <TypeAnimation
              sequence={[
                "Python Dev",
                1000,
                "Django Dev",
                1000,
                "Backend Dev",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex justify-start items-center">
            <p className="md:text5xl sm:text-4xl text-xl font-bold text-gray-500">
              with a 7+ years experience
            </p>
          </div>
          <div className="text-5xl flex justify-start gap-16 my-7 text-purple-600">
            <a href="https://www.linkedin.com/in/lotfibokhari/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/lotfibk97">
              <AiFillGithub />
            </a>
          </div>
          <div className="relative inline-flex group my-3">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
            <a
              href={resume}
              title="Download Resume"
              role="button"
              className="w-[225px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="my-auto">
          <img
            className="w-[300px] sm:w-[500px] mx-auto h-auto "
            src={profilepic}
            alt="profile-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
