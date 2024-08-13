import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareTwitter,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <> 
       <div className="flex space-x-14 mr-1 justify-center items-center p-20 mt-16 ">
        {/* Name and Navigation */}
        <div className="flex flex-col pr-24 ml-12">
          <h1 className="pt-3">
            Saloni<span className="text-cyan-500 "> Kashyap</span>
          </h1>
          <h6 className="pt-3">Home | About | Contact | Blog</h6>
          <p className="text-slate-400 pt-2">Copyright 2024 All Rights Reserved</p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-3 ml-1 ">
          {/* Location */}
          <div className="flex items-center gap-2 ">
            <FontAwesomeIcon icon={faLocationDot} className="text-sm h-5 w-5" />
            <p className="text-xs">Rampur Up</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 ">
            <FontAwesomeIcon icon={faPhone} className="text-sm h-5 w-5" />
            <p className="text-xs">75***12**88</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 ">
            <FontAwesomeIcon icon={faMessage} className="text-sm h-5 w-5  " />
            <p className="text-xs ">isalonikashyap@gmail.com</p>
          </div>
        </div>

        {/* About Me Section */} 
        <div className="flex flex-col pb-5">
          <h1 className="pt-2 text-sm">About Me</h1>
          <p className="pt-2 text-sm">For More Information Follow Me On My Social Media </p>
          <div className="flex space-x-4 pt-5 cursor-pointer ">
           <a href="https://www.linkedin.com/in/saloni-kashyap-819b86261/ t" target="main"> <FontAwesomeIcon icon={faLinkedin}  className="text-xl h-5 w-5" /></a>
            <a href="https://x.com/isalonikashyap"  target="main"><FontAwesomeIcon icon={faSquareTwitter} className="text-xl h-5 w-5" /></a>
           <a  href="https://github.com/salonikashyap7899" target="main" > <FontAwesomeIcon icon={faGithub}className="text-xl h-5 w-5" /></a>
            <a ><FontAwesomeIcon icon={faInstagram} className="text-xl h-5 w-5"  /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
