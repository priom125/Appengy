import hero from "../assets/hero.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#EEEEEE]">
      <div className="top">
        <h1 className="text-5xl font-bold text-center text-black pt-20 mb-6">
          We Build <br />
          <span className="text-[#9F62F2]">Productive</span> Apps
        </h1>
        <p className="text-[#627382] w-[1140px] text-center mx-auto mb-6">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
     <div className="flex w-[250px] justify-between mx-auto mb-20">
        <div className="flex items-center gap-2">
           <img src={google} alt="" />
            <p className="font-semibold">Google Play</p>
        </div>
        <div className="flex items-center gap-2">
           <img src={apple} alt="" />
            <p className="font-semibold">App Store</p>
        </div>
     </div>
      </div>
      <div className="bottom">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
