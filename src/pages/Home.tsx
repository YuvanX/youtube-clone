import { useEffect, useState } from "react";
import Feed from "../components/Feed";
import NavBar from "../components/NavBar";
import VideoDisplay, { API_KEY } from "../components/VideoDisplay";
import axios from "axios";

type Video = {
  id: string;
  snippet: {
    categoryId: string;
    thumbnails: {
      maxres?: {
        url: string;
      };
    };
    title: string;
    publishedAt: string;
    channelTitle: string;
  };
  statistics: {
    viewCount: string;
  };
};

const Home = () => {
  const [videoData, setVideoData] = useState<Video[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=${API_KEY}`
      );
      setVideoData(res.data.items);
    };
    fetch();
  }, []);
  
  return (
    <div>
      <NavBar />
      <div className="bg-gray-800 h-screen px-10 lg:px-52 overflow-y-scroll">
        <Feed />
        <VideoDisplay videoData={videoData} />
      </div>
    </div>
  );
};

export default Home;
