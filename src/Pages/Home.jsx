import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { NavLink, useLoaderData } from "react-router";
import Card from "../components/Card";

function Home() {
  const AppData = useLoaderData();
  console.log(AppData);
  return (
    <div className="mx-auto">
      <Hero />
      <Banner />

      <div className="bg-[#EEEEEE] flex items-center flex-col justify-center py-10">
        <h1 className="text-5xl font-bold text-center pt-20 mb-6">
          Trending Apps
        </h1>
        <p className="text-[#627382] w-[1140px] text-center mx-auto mb-6">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-4 gap-6 p-10">
          {AppData.slice(0, 8).map((app) => (
            <Card key={app.id} app={app} />
          ))}
        </div>
        <div className="flex items-center justify-center w-[145px] h-[48px]">
        <NavLink to={"/apps"} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
          Show All
        </NavLink>
      </div>
      </div>
      
    </div>
  );
}

export default Home;
