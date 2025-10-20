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
    <div className="bg-[#EEEEEE]  p-20 text-black">
      <div className="flex gap-10">
        <div className="img">
          <img src={app.image} alt={app.title} />
        </div>
        <div className="content w-[1440px] h-[350px]">
          <h1 className="text-2xl font-bold">{app.title}</h1>
          <p className="text-[#627382] mb-4">
            Developed by{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              productive.io
            </span>
          </p>
          <hr />
          <div className="flex gap-4">
            <div className="gap-4 mt-4 justify-center items-center">
              <img src={downloadsIMG} alt="" />
              <p className="text-[#627382]">Downloads</p>
              <p className="text-2xl font-bold">{app.downloads}</p>
            </div>
            <div className="gap-4 mt-4 justify-center items-center">
              <img src={avgRatings} alt="" />
              <p className="text-[#627382]">Average Ratings</p>
              <p className="text-2xl font-bold">{app.ratingAvg}</p>
            </div>
            <div className="gap-4 mt-4 justify-center items-center">
              <img src={review} alt="" />
              <p className="text-[#627382]">Total Reviews</p>
              <p className="text-2xl font-bold">{app.reviews}</p>
            </div>
          </div>
          <button
            onClick={handleInstall}
            disabled={isDisabled}
            className={buttonClass}
          >
            {buttonText}
          </button>
          <ToastContainer/>
        </div>
      </div>
      {/* Card ends here */}

      <div className="bar">
        <h1 className="text-xl font-semibold">Ratings</h1>

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

      <div className="description">
        <h1 className="text-xl font-semibold">Description</h1>
        <p>{app.description}</p>
      </div>
    </div>
  );
}

export default AppDetailsCard;
