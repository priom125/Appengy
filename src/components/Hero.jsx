import hero from "../assets/hero.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";

import { NavLink } from "react-router"; 

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#EEEEEE] px-4 md:py-12 lg:py-16"> 
      <div className="top">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black pt-10 md:pt-20 mb-4 md:mb-6 leading-tight"> 
          We Build <br />
          <span className="text-[#9F62F2]">Productive</span> Apps
        </h1>
        <p className="text-[#627382] max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-[1140px] text-center mx-auto mb-8 md:mb-6 text-sm sm:text-base">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex w-full max-w-[350px] justify-between mx-auto mb-10 md:mb-20 text-black px-4"> 
          <NavLink to={"https://play.google.com/store/games?device=windows"} target="blank" className="flex items-center gap-2">
            <img src={google} alt="Google Play Store" className="h-6 w-6 sm:h-7 sm:w-7" /> 
            <p className="font-semibold text-sm sm:text-base">Google Play</p>
          </NavLink>
          <NavLink to={"https://www.apple.com/app-store/"} target="blank" className="flex items-center text-black gap-2">
            <img src={apple} alt="Apple App Store" className="h-6 w-6 sm:h-7 sm:w-7" /> 
            <p className="font-semibold text-sm sm:text-base">App Store</p>
          </NavLink>
        </div>
      </div>
      <div className="bottom w-full px-4 max-w-4xl">
        <img src={hero} className="w-full h-auto object-contain" /> 
      </div>
    </div>
  );
}

export default Hero;