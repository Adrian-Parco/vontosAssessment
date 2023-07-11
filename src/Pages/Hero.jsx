import React from "react";
import heroPic1 from "../assets/heroPic1.jpg";
import heroPic2 from "../assets/heroPic2.jpg";
import heroPic3 from "../assets/heroPic3.jpg";

const Hero = () => {
  return (
    <>
      <div className="hidden md:flex gap bg-[#EBEAE8] p-2 justify-end">
        <h2 className="cursor-pointer">
          Help <span className="mx-4">|</span>
        </h2>
        <h2 className="cursor-pointer">
          Join Us <span className="mx-4">|</span>
        </h2>
        <h2 className="cursor-pointer">Sign In</h2>
      </div>
      <div className="hero h-screen relative">
        <img
          src={heroPic1}
          alt=""
          className="absolute w-52 top-24 right-0 shadow-2xl md:w-80 lg:w-64 lg:right-24"
        />
        <img
          src={heroPic2}
          alt=""
          className="absolute w-52 bottom-52 left-0 shadow-2xl md:w-64 lg:left-32 lg:top-32"
        />
        <img
          src={heroPic3}
          alt=""
          className="absolute w-52 bottom-10 right-5 shadow-2xl md:right-20 md:w-64 lg:right-44 lg:bottom-2"
        />
        <input
          type="button"
          value="Shop Now"
          className="absolute top-1/2 transform translate-x-1/2 bg-white py-5 px-10 rounded-full font-bold shadow-xl text-xl md:left-1/4 md:-translate-y-2/4 md:text-2xl lg:transform lg:left-1/3 lg:translate-y-1/a lg:text-3xl cursor-pointer"
        />
      </div>
    </>
  );
};

export default Hero;
