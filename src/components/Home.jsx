import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Video from "./Video";
import { fetchData, videoUrl } from "../utils/api";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetchData(videoUrl);
        setData(res);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchVideos();
  }, []);

  console.log(data);
  return (
    <div className="mt-20">
      <NavBar />
      <div className="flex">
        <SideBar />
        {loading ? <div className="flex justify-center items-center w-full h-screen">Loading...</div> : <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 p-4 h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden w-[100%] md:w-[87%]">
          {data.length > 0
            ? data.map((item) => {
                return <Video video={item} />;
              })
            : ""}
        </div>}
        
      </div>
    </div>
  );
};

export default Home;
