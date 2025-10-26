import React, { useState } from "react";
import downloadsIMG from "../assets/icon-downloads.png";
import avgRatings from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ToastContainer, toast } from "react-toastify";

function AppDetailsCard({ app }) {
  const ratings = app.ratings;
  //   console.log(ratings);

  const notify = () => toast("Installed");
  const isInstalledInitially = () => {
    const existingList = JSON.parse(localStorage.getItem("installed") || "[]");
    return existingList.some((a) => a.id === app.id);
  };

  const [isInstalled, setIsInstalled] = useState(isInstalledInitially);

  const handleInstall = () => {
    if (isInstalled) return;

    const existingList = JSON.parse(localStorage.getItem("installed") || "[]");
    let UpdatedList = [...existingList];

    const isDuplicate = existingList.some((a) => a.id === app.id);

    if (!isDuplicate) {
      UpdatedList.push(app);
      localStorage.setItem("installed", JSON.stringify(UpdatedList));
    }
    setIsInstalled(true);
    notify();
  };

  const buttonText = isInstalled ? "Installed" : `Install Now ${app.size} MB`;

  const isDisabled = isInstalled;

  const buttonClass = `
        btn mt-4 text-white outline-0 border-0 py-2 px-4 rounded transition duration-200
        ${
          isDisabled
            ? "bg-gray-400 text-[#000] cursor-not-allowed"
            : "bg-[#00D390] hover:bg-[#00b07a]"
        }
    `;

  return (
   <div className="bg-[#EEEEEE] p-4 sm:p-8 md:p-12 lg:p-16 text-black max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row gap-8 md:gap-10 pb-10 border-b border-gray-300">
        
        <div className="img flex-shrink-0 w-full h-full md:w-full md:h-full mx-auto md:mx-0 rounded-2xl  shadow-xl">
            <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
        </div>

        <div className="content w-full">
            <h1 className="text-3xl sm:text-4xl font-bold text-center md:text-left">{app.title}</h1>
            <p className="text-[#627382] mb-4 text-center md:text-left">
                Developed by{" "}
                <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-medium">
                    productive.io
                </span>
            </p>
            
            <div className="flex sm:flex-row justify-center md:justify-start items-center gap-6 sm:gap-8 py-4 mb-4">
                
                <div className="flex flex-col items-center">
                    <img src={downloadsIMG} alt="Downloads" className="w-8 h-8 mb-1" />
                    <p className="text-[#627382] text-sm">Downloads</p>
                    <p className="text-xl font-bold">{app.downloads}</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <img src={avgRatings} alt="Average Ratings" className="w-8 h-8 mb-1" />
                    <p className="text-[#627382] text-sm">Average Ratings</p>
                    <p className="text-xl font-bold">{app.ratingAvg}</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <img src={review} alt="Total Reviews" className="w-8 h-8 mb-1" />
                    <p className="text-[#627382] text-sm">Total Reviews</p>
                    <p className="text-xl font-bold">{app.reviews}</p>
                </div>
            </div>
            
            <div className="flex justify-center md:justify-start">
                <button
                    onClick={handleInstall}
                    disabled={isDisabled}
                    className={buttonClass}
                >
                    {buttonText}
                </button>
            </div>
            <ToastContainer/>
        </div>
    </div>
    {/* Card ends here */}

    {/* Bar Chart Section */}
    <div className="bar mt-12">
        <h1 className="text-2xl font-bold mb-6">Ratings Breakdown</h1>

        <BarChart
            layout="vertical"
            style={{
                width: "100%",
                maxWidth: "700px",
                maxHeight: "70vh",
                aspectRatio: 1.618,
            }}
            responsive
            data={ratings}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="count" type="number " />

            <YAxis width="auto" dataKey="name" type="category" />

            <Bar dataKey="count" fill="#FF8811" />
        </BarChart>
    </div>

    {/* bar ends here */}

    <div className="description mt-12 pt-8 border-t border-gray-300">
        <h1 className="text-2xl font-bold mb-4">Description</h1>
        <p className="text-[#627382] leading-relaxed">{app.description}</p>
    </div>
</div>

  );
}

export default AppDetailsCard;
