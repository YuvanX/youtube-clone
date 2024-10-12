import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { API_KEY, fetchData } from "../utils/api";
import NavBar from "./NavBar";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import Recommended from "./Recommended";

const VideoPlayer = () => {
  const [video, setVideo] = useState([]);
  const [relatedData, setRelatedData] = useState([]);
  const { id } = useParams();
  let categoryId = 0;

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await fetchData(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
      );
      setVideo(res);
      console.log(res);
    };
    fetchVideo();
  }, [id]);

  
  
  useEffect(() => {
    const fetchVideo = async () => {
      categoryId = await video[0]?.snippet?.categoryId
      const res = await fetchData(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
      );
      setRelatedData(res);
      console.log(res);
    };
    fetchVideo();
  }, [video]);


  console.log(relatedData);
  return (
    <div>
      <NavBar />
      
        <div className=" flex justify-center flex-row px-6 h-[calc(100%-56px)] mt-20 top-0">
          <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px]">
              <div className="h-[200px] md:h-[700px] ml-[-16px] mr-[-16px] lg:mr-0">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  height="100%"
                  width="100%"
                  controls
                  playing={true}
                />
              </div>
              <div className="font-bold text-xl mt-2">
                {video[0]?.snippet?.title}
              </div>
              <div className="flex space-x-7">
                <div>
                  <div className="font-semibold mt-2">
                    {video[0]?.snippet?.channelTitle}
                  </div>
                  <div className="text-sm font-medium text-gray-500 cursor-pointer">
                    2.0M subscribers
                  </div>
                </div>
                <div className="bg-red-600 text-sm flex justify-center items-center rounded-r-full rounded-l-full px-2 w-28 text-white mt-2">
                  Subscribe
                </div>
                <div className="space-x-1 flex items-center bg-gray-100  rounded-r-full rounded-l-full w-24 px-3 mt-2">
                  <AiOutlineLike className="text-xl" />{" "}
                  <span className="text-md">
                    {abbreviateNumber(video[0]?.statistics.likeCount)}
                  </span>
                </div>
              </div>
              <div className="bg-gray-100 p-2 text-sm mt-2 rounded-lg mb-3">
                {abbreviateNumber(video[0]?.statistics?.viewCount)} views <br />
                {video[0]?.snippet?.description} <br />
              </div>
            </div>
            <div className="flex flex-col px-4  h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w[400px]">
              {relatedData.map((video) => {
                return <Recommended video={video} />
              })}
            </div>
          </div>
         
        </div>

     
    </div>
  );
};

export default VideoPlayer;
