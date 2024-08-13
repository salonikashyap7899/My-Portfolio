'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Vortex } from "./ui/vortex";
import About from "./About/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark} from "@fortawesome/free-solid-svg-icons";

function Herosection() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <Vortex
      backgroundColor="black"
      className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
    >
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col md:flex-row items-center justify-between relative overflow-hidden mx-auto py-5 md:py-0">
        <div className="pt-20 md:pl-20 relative z-10 w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 mono">Saloni
            <span className="text-cyan-500 pb-0"> Kashyap</span>
          </h1>
          <h2 className="pt-0 pb-2">Mern Stack Developer</h2>
          <div className="pt-3">
            <button onClick={togglePopup} className="text-black rounded-lg pl-2 pr-2 mt-2 bg-cyan-500 p-2">
              About Me
            </button>
          </div>
        </div>
        <div className="p-2 pt-20 md:pr-2 relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://media.tenor.com/IF2JdxzmyN4AAAAi/coding-girl.gif"
            alt="Smiling girl learning web design and coding"
            width={430}
            height={300}
          />
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
            <button onClick={togglePopup} className="text-white rounded-lg pl-2 pr-2 mt-2 p-2 float-right">
            <FontAwesomeIcon icon={faCircleXmark} /> 
            </button>
            <About />
          </div>
        </div>
      )}
    </Vortex>
  );
}

export default Herosection;
