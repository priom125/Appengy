import React, { useEffect, useState } from "react";
import InstallCard from "../components/InstallCard";

function Installation() {
  const [installList, setInstallList] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installed"));
    if (savedList) {
      setInstallList(savedList);
    }
  }, []);
  return (
    <div className="bg-[#EEEEEE] text-black">
      <div className="bg-[#EEEEEE] flex items-center flex-col justify-center py-10">
        <h1 className="text-5xl font-bold text-center pt-20 mb-6 text-black">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] w-[1140px] text-center mx-auto mb-6">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-between items-center w-[1440px] mt-10">
          <p className="text-xl font-semibold text-black">
            {installList.length} Apps Found{" "}
          </p>
          <button>sort</button>
        </div>

        <div className="flex flex-col gap-8 mt-20">
          {installList.map((app) => (
            <InstallCard key={app.id} app={app} />
          ))}
        </div>

        <div className="flex items-center justify-center w-[145px] h-[48px]"></div>
      </div>
    </div>
  );
}

export default Installation;
