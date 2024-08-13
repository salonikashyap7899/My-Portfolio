import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/HeroSection";

import Skils from "../../src/app/components/ui/skills";
import { ContactUs } from "./components/ContactSection";
import StudySection from "./components/StudySection";
import Footer from "./components/Footer";

 function Home() {
  return (
    <div >

       <Navbar/>
       <Herosection/>
        <StudySection/>
       <Skils/>
       <ContactUs/>
       <Footer/>
       
    </div>
  );
}
export default Home

