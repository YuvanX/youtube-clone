import {
  RiPlanetLine,
  RiRocketFill,
  RiSearchLine,
} from "@remixicon/react";

const NavBar = () => {
  return (
    <div className="w-full h-20 bg-gray-800 fixed top-0 border-b border-gray-700">
      <div className="flex justify-between px-2 md:px-32 lg:px-56 xl:px-64 py-5 items-center">
        <div className="flex gap-4 items-center">
          <RiPlanetLine color="white" size={28} />
          <div className="bg-gray-700 w-[295px] md:w-[350px] xl:w-[500px] rounded-l-full rounded-r-full">
            <div className="flex items-center">
              <div className="mr-1 ml-2">
                <RiSearchLine color="gray" size={18} />
              </div>
              <input
                placeholder="Search"
                className="bg-gray-700 rounded-r-full rounded-l-full px-2 py-1.5 w-full text-md outline-none text-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="text-white">
          <RiRocketFill />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
