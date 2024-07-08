import React from 'react';
import Image from "next/image";
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className=" container overflow-hidden flex sm:flex-row flex-col w-full h-auto my-10 items-center " id='home'>
    <div className='flex items-center p-6 w-full sm:w-2/3'>
      <div className='space-y-4 bg-[#fffff98] w-fit p-4'>
        <p className="text-gray-700 text-[14px] sm:text-[16px]">Wide option of choice</p>
        <h2 className="text-4xl sm:text-6xl font-bold">
          Delicious <span className="text-accent">Food</span>
        </h2>
        <p className="text-gray-700 text-[14px] sm:text-[16px]">
          Delicious food color, aroma, and taste.<br />
          What are you waiting for?
        </p>
        <button className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">View More</button>
      </div>
    </div>
    <div className=' w-10/12 sm:w-1/2 mr-2 '>
      <div className="relative w-full h-full sm" style={{ paddingTop: "80.67%" }}>
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero2.png"
          layout="fill"
          objectFit="cover"
          alt="hero-bg"
        />
      </div>
    </div>
  </div>
  
  );
};

export default Hero;