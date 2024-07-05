import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="mt-12 w-max-[800px] border-t border-gray-500 text-center"
      id="footer"
    >
      <p className="my-5 text-gray-500"> </p>
      <div className="inline-flex text-gray-500 gap-4 text-3xl">
        <a href="https://www.linkedin.com/in/lotfibokhari/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/lotfibk97">
          <FaGithubSquare />
        </a>
      </div>
    </div>
  );
};

export default Footer;
