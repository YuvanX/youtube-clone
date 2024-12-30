import {
  RiPlanetLine,
  RiRocketFill,
  RiSearchLine,
} from "@remixicon/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)
  
  return (
    <div className="w-full h-20 bg-gray-800 fixed top-0 border-b border-gray-700 z-50">
      <div className="flex justify-between px-2 md:px-32 lg:px-56 xl:px-64 py-5 items-center">
        <div className="flex gap-4 items-center cursor-pointer">
          <button onClick={() => navigate(-1)}><RiPlanetLine color={hovered? "#D8C4B6" : "white"} size={28} onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}/></button>
          <div className="bg-gray-700 w-[280px] md:w-[350px] xl:w-[500px] rounded-l-full rounded-r-full">
            <div className="flex items-center">
              <div className="mr-1 ml-2">
                <RiSearchLine color="gray" size={18} />
              </div>
              <input onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if(e.key === "Enter"){
                  navigate(`/search/${search}`)
                }
              }}
                placeholder="Search"
                className="bg-gray-700 rounded-r-full rounded-l-full px-2 py-1.5 w-full text-md outline-none text-gray-400 font-space"
              />
            </div>
          </div>
        </div>
        <div className="text-white cursor-pointer">
          <RiRocketFill />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
