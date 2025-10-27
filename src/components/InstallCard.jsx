import React from "react";
import downloadsIMG from "../assets/icon-downloads.png";
import avgRatings from "../assets/icon-ratings.png";

function InstallCard({ app,setInstallList}) {

    const handleUnInstall = () => {
    const existingList = JSON.parse(localStorage.getItem('installed'))
    let UpdatedList = existingList.filter(a => a.id !== app.id)
      setInstallList(prev => prev.filter(a => a.id !== app.id))
     localStorage.setItem('installed', JSON.stringify(UpdatedList))
  }

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white max-w-[1440px] max-h-[112px]">
      <div className="flex items-center justify-center gap-4">
        <div className="max-w-[80px] max-h-[80px] rounded-lg justify-center items-center">
          <img src={app.image} alt="" className="rounded-lg mt-2.5"/>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-[#001931]">{app.title}</h3>

          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center text-[#00D390]">
              <img
                src={downloadsIMG}
                alt=""
                className="w-4 h-4 mr-1"
              />
              <span className="font-medium">{app.downloads}</span>
            </div>

            <div className="flex items-center text-[#FF8811]">
              <img
                src={avgRatings}
                alt=""
                className="w-4 h-4 mr-1"
              />
              <span className="font-medium">{app.ratingAvg}</span>
            </div>

            <span className="text-[#627382]">{app.size} MB</span>
          </div>
        </div>
   
      </div>
      <button onClick={() => handleUnInstall(app.id)} className="bg-[#00D390] text-white font-medium py-2 px-4 rounded-md cursor-pointer">
        Uninstall
      </button>
     
    </div>
  );
}

export default InstallCard;
