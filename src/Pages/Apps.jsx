import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { useLoaderData } from "react-router";
import AppNotFound from "./AppNotFound";
import Loading from "./Loading";



function Apps() {
  const AppData = useLoaderData();
  const [search, setSearch] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  
  const [filteredApps, setFilteredApps] = useState(AppData); 

  
  const filterApps = (searchTerm) => {
    const term = searchTerm.trim().toLocaleLowerCase();
    return term 
      ? AppData.filter(app => app.title.toLocaleLowerCase().includes(term))
      : AppData;
  };


  useEffect(() => {
    
    setIsLoading(true);

    
    const delay = setTimeout(() => {
      const results = filterApps(search);
      setFilteredApps(results);

      setIsLoading(false);
    }, 300);


    return () => clearTimeout(delay);
  }, [search, AppData]); 


  const searchedProducts = filteredApps; 
  


  return (
    <div>
      <div className="bg-[#EEEEEE] flex items-center flex-col justify-center py-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center pt-10 md:pt-20 mb-4 md:mb-6 text-black">
          Our All Applications
        </h1>
        <p className="text-[#627382] max-w-xl md:max-w-4xl lg:max-w-6xl text-center mx-auto mb-6 text-sm sm:text-base">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-7xl mt-6 sm:mt-10 px-4 gap-4">
          <p className="text-xl font-semibold text-black">{searchedProducts.length} Apps Found </p>
          <label className="input flex items-center gap-2 border border-[#627382] rounded-lg px-4 py-2 bg-transparent">
            <svg 
              className="h-[1em] opacity-80 text-[#627382]" 
              xmlns="http://www.w3.org/2000/svg" 
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
            <input 
              value={search} 
              onChange={e => setSearch(e.target.value)} 
              type="search" 
              required 
              placeholder="Search" 
              className="bg-transparent focus:outline-none placeholder-[#627382] text-black w-full" 
            />
          </label>
        </div>

    
        {isLoading ? (
          <Loading /> 
        ) : (
          searchedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6 md:p-10 w-full max-w-7xl">
              {searchedProducts.map((app) => (
                <Card key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <div className="w-full text-center py-20">
              <AppNotFound/>
            </div>
          )
        )}
    

        <div className="flex items-center justify-center w-[145px] h-[48px]"></div>
      </div>
    </div>
  );
}

export default Apps;