import React, { useEffect, useState } from "react";
import InstallCard from "../components/InstallCard";

function Installation() {
  const [installList, setInstallList] = useState([]);
  const [sortInstalled, setSortInstalled] = useState("none"); 

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installed"));
    if (savedList) {
      setInstallList(savedList);
    }
  }, []);

  const sortedItem = () =>{
    if (sortInstalled === 'size-asc') {
      return [...installList].sort((a,b) => a.size - b.size)
    }else if (sortInstalled === 'size-desc') {
      return [...installList].sort((a,b) => b.size - a.size)
    }else{
      return installList
    }
  }
    
  const displayedApps = sortedItem();

  return (
    <div className="bg-[#EEEEEE] text-black px-4">
      <div className="bg-[#EEEEEE] flex items-center flex-col justify-center py-10 max-w-7xl mx-auto">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center pt-10 md:pt-20 mb-4 md:mb-6 text-black">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] max-w-xl md:max-w-3xl text-center mx-auto mb-6 text-sm sm:text-base">
          Explore All Apps installed on your device.
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-4xl mt-6 sm:mt-10 gap-4">
          <p className="text-lg sm:text-xl font-semibold text-black">
            {installList.length} Apps Found{" "}
          </p>
          <label className="form-control w-full max-w-xs border-[#627382] bg-[#EEEEEE]">
            <select
              className="select select-bordered bg-transparent border-[#627382] placeholder-[#627382] text-black w-full"
              value={sortInstalled}
              onChange={(e) => setSortInstalled(e.target.value)}
            >
              <option value="none">Sort By Size</option>
              <option value="size-asc">Low to High (Size)</option>
              <option value="size-desc">High to Low (Size)</option>
            </select>
          </label>
        </div>

        <div className="flex flex-col gap-8 mt-10 md:mt-20 w-full max-w-4xl">
          {displayedApps.length > 0 ? (
             displayedApps.map((app) => (
              <InstallCard key={app.id} app={app} setInstallList={setInstallList}/>
            ))
          ) : (
            <div className="text-center py-10 text-lg text-gray-500">
              No apps installed yet.
            </div>
          )}
        </div>

        <div className="flex items-center justify-center w-[145px] h-[48px]"></div>
      </div>
    </div>
  );
}

export default Installation;