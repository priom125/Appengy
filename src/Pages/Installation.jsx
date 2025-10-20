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
    if (sortInstalled === 'price-asc') {
      return [...installList].sort((a,b) => a.size - b.size)
    }else if (sortInstalled === 'price-desc') {
       return [...installList].sort((a,b) => b.size - a.size)
    }else{
      return installList
    }
  }
   




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
          <label className="form-control w-full max-w-xs border-[#627382] bg-[#EEEEEE]">
            <select
              className="select select-bordered bg-transparent border-[#627382] placeholder-[#627382] text-black w-full"
              value={sortInstalled}
              onChange={(e) => setSortInstalled(e.target.value)}
            >
              <option value="none">Sort By Price</option>
              <option value="price-asc">Low to High </option>
              <option value="price-desc">High to Low </option>
            </select>
          </label>
        </div>

        <div className="flex flex-col gap-8 mt-20">
          {sortedItem().map((app) => (
            <InstallCard key={app.id} app={app} setInstallList={setInstallList}/>
          ))}
        </div>

        <div className="flex items-center justify-center w-[145px] h-[48px]"></div>
      </div>
    </div>
  );
}

export default Installation;
