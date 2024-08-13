/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { GlareCard } from "../components/ui/glare-card";

function StudySection() {
    return (
         <>
         <h1 className='text-center pb-8 font-extrabold text-3xl text-cyan-400 animate-pulse'>My Projects </h1>
        <div className="flex justify-center gap-14">
        <GlareCard className="relative flex flex-col items-center justify-center">
          <img
            className="h-full w-full object-cover"
            src="https://www.digitaltrends.com/wp-content/uploads/2022/06/Tidal2.jpg?fit=810%2C1440&p=1"
          />
          <div className="absolute inset-0 flex flex-col items-center align-middle justify-center p-4 bg-black bg-opacity-50">
            <h1 className="text-xl font-bold animate-bounce text-white">Full-Stack-Music-App</h1>
          </div>
        </GlareCard>

        <GlareCard className="relative flex flex-col items-center justify-center">
          <img
            className="h-full w-full object-cover"
            src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <div className="absolute inset-0 flex  items-center  ml-10  bg-opacity-50">
            <h2 className="text-xl font-bold animate-bounce text-white text-center ">Full-stack-movie-app</h2>
          </div>
        </GlareCard>

        <GlareCard className="relative flex flex-col items-center justify-center">
          <img
            className="h-full w-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yn0dZBFN7RgYOriYjqFew1Ox5oTUq6BqKg&s"
          />
          <div className="absolute inset-0 flex items-center  bg-black bg-opacity-50">
            <h2 className="text-xl font-bold ml-6  animate-bounce pt-40 text-white">Learing Mangement System (LMS)</h2>
          </div>
        </GlareCard>
      </div>

      <div className="flex justify-center mt-10 gap-14">
        <GlareCard className="relative flex flex-col items-center justify-center">
          <img
            className="h-full w-full object-cover"
            src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1689143214/catalog/1679013055140724736/qxdiepyovizfkcu0vzcz.jpg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center  bg-black bg-opacity-50">
            <h2 className="text-xl font-bold  animate-bounce text-white">Amazon-Clone-by-me</h2>

          </div>
        </GlareCard>

        <GlareCard className="relative flex flex-col items-center justify-center">
          <img
            className="h-full w-full object-cover"
            src="https://www.digitaltrends.com/wp-content/uploads/2021/08/pluto-tv-best-free-movie-apps-01.jpg?fit=348%2C620&p=1"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-50">
            <h2 className="text-xl font-bold pt-70 animate-bounce text-white">full-stack-Movie-App</h2>
          </div>
        </GlareCard>

        <GlareCard className="relative flex flex-col items-center justify-center">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.dribbble.com/users/950062/screenshots/6731607/untitled-2.gif"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-50">
            <h2 className="text-xl font-bold animate-pulse text-white">Coco-Cola-Logo</h2>
          </div>
        </GlareCard>
      </div>
    </>
      );
    }
   
  

export default StudySection;

