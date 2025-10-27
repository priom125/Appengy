import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { NavLink, useLoaderData } from "react-router";
import Card from "../components/Card";
// import useProducts from "../hooks/useProducts";

function Home() {
  const AppData = useLoaderData();
  console.log(AppData);

  // const [products, error, loading] = useProducts()
  // const AppData = products;
  
  return (
    <div className="mx-auto">
      <Hero />

      <div className="flex items-center justify-center bg-[#EEEEEE]">
        <Banner />
      </div>
    

      <div className="bg-[#EEEEEE] flex items-center flex-col justify-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center pt-10 md:pt-20 mb-4 md:mb-6">
        Trending Apps
    </h1>
    <p className="text-[#627382] max-w-xl md:max-w-4xl lg:max-w-6xl text-center mx-auto mb-6 text-sm sm:text-base">
        Explore All Trending Apps on the Market developed by us
    </p>
    <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10 w-full max-w-full mx-auto">
        {AppData.slice(0, 8).map((app) => (
            <Card key={app.id} app={app} />
        ))}
    </div>
    <div className="flex items-center justify-center mt-6 mb-4">
        <NavLink to={"/apps"} className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white shadow-lg transition duration-200 hover:opacity-90">
            Show All
        </NavLink>
    </div>


      </div>
      
    </div>
  );
}

export default Home;
