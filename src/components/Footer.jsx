import logo from "../assets/logo.png";
// import facebook from "../assets/facebook.png";
// import x from "../assets/logo.png";
// import linkdin from "../assets/logo.png";

function Footer() {
  return (
    <div>
      <div className="top">
        <div className="left">
        <img src={logo} alt="" />
        <h1>HERO.IO</h1>
        </div>
      <div className="right">
        <div className="flex flex-col">
        <p>Social Links</p>

        </div>
      </div>
      </div>
    <div className="center flex items-center justify-center">
      <hr />
      <p>Copyright © 2025 - All right reserved</p>
    </div>
    </div>
  )
}

export default Footer