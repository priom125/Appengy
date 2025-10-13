import React from "react";
import downloads from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";

function Card({ app }) {
  return (
    <div className="w-[348px] h-435px] p-4 bg-white">
      <img src={app.image} alt="" className="rounded mb-3 w-[316px] h-[316px]" />
      <h1 className="text-2xl font-semibold">{app.title}</h1>
      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-3 bg-[#F1F5E8] items-center justify-center p-2">
          <img src={downloads} alt="" className="w-4 h-4" />
          <p className="text-[#00D390]">{app.downloads}</p>
        </div>
        <div className="flex gap-3 bg-[#FFF0E1] items-center justify-center p-2">
          <img src={ratings} alt="" className="w-4 h-4" />
          <p className="text-[#FF8811]">{app.ratingAvg}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
