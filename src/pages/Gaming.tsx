import { useEffect, useState } from "react";
import Feed from "../components/Feed"
import NavBar from "../components/NavBar"
import axios from "axios";
import VideoDisplay, { API_KEY } from "../components/VideoDisplay";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

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

const Gaming = () => {
    const [videoData, setVideoData] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&videoCategoryId=20&key=${API_KEY}`)
            setVideoData(res.data.items)
            setLoading(false)
        }
        fetch()
    }, [])
  return (
    <div>
      <NavBar />
      <div className="bg-gray-800 h-screen px-10 lg:px-52 overflow-y-scroll">
        <Feed />
        {loading? <Loader/> : <VideoDisplay videoData={videoData} />}
        <Footer/>
      </div>
    </div>
  )
}

export default Gaming