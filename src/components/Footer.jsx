import logo from "../assets/logo.png";
// import facebook from "../assets/facebook.png";
// import x from "../assets/logo.png";
// import linkdin from "../assets/logo.png";

function Footer() {
  return (
    <div className="bg-[#001931] text-white p-20">
      <div className="top flex justify-between mb-10">
        <div className="left w-[50px] h-[50px] flex items-center gap-2">
        <img src={logo} alt="" />
        <h1>HERO.IO</h1>
        </div>
      <div className="right">
        <div className="flex flex-col justify-center items-center">
        <p>Social Links</p>
        <div className="flex gap-3 mt-3 items-center justify-center">
          <p>facebook</p>
        <p>facebook</p>
        <p>facebook</p>
        </div>
        </div>
      </div>
      
      </div>
       <hr className="border-0 h-[1px] bg-[#c5c5c5] mx-auto" /> 
    <div className="center flex items-center justify-center">
     
      <p className="mt-5">Copyright © 2025 - All right reserved</p>
    </div>
    </div>
  )
}

export default Footer