import React from "react";

const Experience = () => {
  return (
    <div className="py-10 bg-[#232325]" id="experience">
      <h2 className="mb-8 text-3xl text-white text-center">
        {" "}
        My <span className="primary-color">Experience</span>
      </h2>
      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
        <p>Software Engineer @ ELCS RESEARCH</p>
        <p className="text-gray-400">(2017-2021)</p>
        <p className="text-gray-500">
          <ol>
            <li>
              Designed and Developed modules for a SAAS ERP (Monadim) using
              Django framework.
            </li>
            <li>
              Documented applications and ERP modules to help train the new
              users.
            </li>
            <li>
              Led the design, development, implementation and deployment of a
              healthcare solution for an important client.
            </li>
            <li>
              Designed and implemented a blockchain based supply chain system
              from scratch.
            </li>
            <li>Set up an IT infrastructure for a client.</li>
            <li>
              Designed and implemented a Radiology information system for a
              client.
            </li>
          </ol>
        </p>
      </div>
      <div className="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>
      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
        <p>Software Engineer @ IDC Technologies</p>
        <p className="text-gray-400">(2021-2023)</p>
        <p className="text-gray-500">
          Innovation-led, enterprise transformation partner, embracing digital
          technologies to make businesses future-ready <br></br>
          <ol>
            <li>Developed modules in a stock exchange platform.</li>
            <li>Leading and training junior developers (Python, Django)</li>
            <li>Lead architect for a client in real estate sector (Python).</li>
            <li>
              {" "}
              Lead architect for a school management software using python and
              DRF (Django rest framework).
            </li>
          </ol>
        </p>
      </div>
      <div className="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>
      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
        <p>Software Engineer @ Kalvad</p>
        <p className="text-gray-400">(2023-present)</p>
        <p className="text-gray-500">
          <ol>
            <li>
              Developed and maintained softwares used by high responsibility
              government officials.
            </li>
            <li>
              Developed and maintained +1M users app for a government entity.
            </li>
          </ol>
        </p>
      </div>
      <div className="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>
      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
        <p>Software Engineer @ Andre.ai</p>
        <p className="text-gray-400">(2023-present)</p>
        <p className="text-gray-500">
          ANDRE is a survey data analysis automation product. It takes tabular
          data and returns compelling analysis reports with data visualizations
          and synthesis slides. It makes the analysis process seamless by
          focusing on the narratives rather than the numbers.
        </p>
      </div>
    </div>
  );
};

export default Experience;
