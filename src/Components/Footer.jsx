import React from "react";
import location from "../assets/location.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import Pinterest from "../assets/pinterest.png";

const Footer = () => {
  return (
    <div className="bg-[#EBEAE8] px-[16px] pb-10 mt-20 lg:flex lg:justify-center lg:pt-10">
      <div className="pt-[64px] relative">
        <svg
          className="absolute lg:top-5 lg:-left-3"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" fill="#D9D9D9" />
        </svg>
      </div>
      <div className="flex flex-col md:flex-row">
        <div>
          <div className="flex items-center pt-32 gap-4">
            <img src={location} alt="" className="w-8 bg  " />
            <p className="text-xs text-justify me-8">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="flex items-center pt-4 gap-4">
            <img src={phone} alt="" className="w-8 bg  " />
            <p className="text-xs text-justify me-8">0923-456-7890</p>
          </div>
          <div className="flex items-center pt-4 gap-4">
            <img src={mail} alt="" className="w-8 bg  " />
            <p className="text-xs text-justify me-8">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="flex mt-8 gap-4 pl-4 md:pb-10">
            <img src={facebook} alt="" className="w-8" />
            <img src={Pinterest} alt="" className="w-8" />
            <img src={instagram} alt="" className="w-8" />
          </div>
        </div>
        <div className="flex flex-col gap-2 font-bold pb-10 pt-10 md:flex-row md:gap-10 md:ps-20">
          <div>
            <h2>COLLECTION</h2>
            <div className="hidden text-[#676767] mt-10 space-y-2 text-sm font-serif md:block">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div>
            <h2>INFORMATION</h2>
            <div className="hidden text-[#676767] mt-10 space-y-2 text-sm font-serif md:block">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div>
            <h2>MORE</h2>
            <div className="hidden text-[#676767] mt-10 space-y-2 text-sm font-serif md:block">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
