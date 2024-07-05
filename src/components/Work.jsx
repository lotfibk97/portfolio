import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import andre from "../assets/andre.png";
import andre1 from "../assets/andre1.png";
import andre2 from "../assets/andre2.png";
import monadim from "../assets/monadim-hero.png";
import monadim2 from "../assets/monadim2.jpg";
import monadim3 from "../assets/monadim3.jpg";
import monadim4 from "../assets/monadim4.jpg";
import monadim5 from "../assets/monadim5.jpg";
import monadim6 from "../assets/monadim6.jpg";
import monadim7 from "../assets/monadim7.jpg";
import monadim8 from "../assets/monadim8.jpg";
import monadim9 from "../assets/monadim9.jpg";
import monadim10 from "../assets/monadim10.png";
import monadim11 from "../assets/monadim11.png";
import monadim12 from "../assets/monadim12.png";
import monadim13 from "../assets/monadim13.png";
import monadim14 from "../assets/monadim14.png";

import mouachir from "../assets/mouachir-hero.png";
import mouachir1 from "../assets/mouachir1.png";
import mouachir2 from "../assets/mouachir2.png";
import mouachir3 from "../assets/mouachir3.png";
import mouachir4 from "../assets/mouachir4.jpg";
import mouachir5 from "../assets/mouachir5.jpg";
import mouachir6 from "../assets/mouachir6.jpg";
import mouachir7 from "../assets/mouachir7.jpg";
import mouachir8 from "../assets/mouachir8.jpg";
import mouachir9 from "../assets/mouachir9.jpg";
import smarth from "../assets/smarth-hero.png";
import smarth1 from "../assets/smarth1.png";
import smarth2 from "../assets/smarth2.png";
import smarth3 from "../assets/smarth3.png";
import bliss from "../assets/bliss.png";
import bliss1 from "../assets/bliss1.png";
import bliss2 from "../assets/bliss2.png";
import bliss3 from "../assets/bliss3.png";
import bliss4 from "../assets/bliss4.png";
import bliss5 from "../assets/bliss5.png";
import bliss6 from "../assets/bliss6.png";
import bliss7 from "../assets/bliss7.png";
import cpulse from "../assets/cpulse.png";
import cpulse1 from "../assets/cpulse1.png";
import cpulse2 from "../assets/cpulse2.png";
import cpulse3 from "../assets/cpulse3.png";
import cpulse4 from "../assets/cpulse4.png";
import cpulse5 from "../assets/cpulse5.png";
import cpulse6 from "../assets/cpulse6.png";

const Work = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([]);

  const projects = [
    { id: 1, images: [andre1, andre2], thumbnail: andre },
    {
      id: 2,
      images: [
        monadim,
        monadim2,
        monadim3,
        monadim4,
        monadim5,
        monadim6,
        monadim7,
        monadim8,
        monadim9,
        monadim10,
        monadim11,
        monadim12,
        monadim13,
        monadim14,
      ],
      thumbnail: monadim,
    },
    {
      id: 3,
      images: [
        mouachir1,
        mouachir2,
        mouachir3,
        mouachir4,
        mouachir5,
        mouachir6,
        mouachir7,
        mouachir8,
        mouachir9,
      ],
      thumbnail: mouachir,
    },
    { id: 4, images: [smarth, smarth1, smarth2, smarth3], thumbnail: smarth },
    {
      id: 5,
      images: [bliss, bliss1, bliss2, bliss3, bliss4, bliss5, bliss6, bliss7],
      thumbnail: bliss,
    },
    {
      id: 6,
      images: [cpulse, cpulse1, cpulse2, cpulse3, cpulse4, cpulse5, cpulse6],
      thumbnail: cpulse,
    },
  ];

  const openImageViewer = (images, index) => {
    setImages(images);
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="py-6 max-w-[1200px] mx-auto" id="work">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-white">
              My <span className="primary-color">Projects</span>
            </h2>
            <p className="text-gray-500">
              These are my latest projects for different clients.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openImageViewer(project.images, 0);
              }}
              className={`group h-48 overflow-hidden rounded-lg shadow-lg ${
                index % 3 === 0 || index == 4
                  ? "md:h-80 md:col-span-2"
                  : "md:h-80"
              }`}
            >
              <img
                src={project.thumbnail}
                alt={`Project ${project.id}`}
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Work;
