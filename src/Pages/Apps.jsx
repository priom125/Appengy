import React from "react";
import Card from "../components/Card";
import { useLoaderData } from "react-router";

function Apps() {
  const AppData = useLoaderData();
  return (
    <div>
      <div className="bg-[#EEEEEE] flex items-center flex-col justify-center py-10">
        <h1 className="text-5xl font-bold text-center pt-20 mb-6 text-black">
          Our All Applications
        </h1>
        <p className="text-[#627382] w-[1140px] text-center mx-auto mb-6">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between items-center w-[1440px] mt-10">
          <p className="text-xl font-semibold text-black">{AppData.length} Apps Found </p>
          <label className="input bg-transparent outline-none">
            <svg
              className="h-[1em] opacity-50"
             
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search"  placeholder="Search Apps" className="bg-transparent" />
          </label>
        </div>
        <div className="grid grid-cols-4 gap-6 p-10">
          {AppData.map((app) => (
            <Card key={app.id} app={app} />
          ))}
        </div>
        <div className="flex items-center justify-center w-[145px] h-[48px]"></div>
      </div>
    </div>
  );
}

export default Apps;
