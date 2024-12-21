import axios from "axios";
import { useEffect, useState } from "react"
import VideoCard from "./VideoCard";
export const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

type Video = {
    snippet: {
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
  

const VideoDisplay = () => {
    const [videoData, setVideoData] = useState<Video[]>([]);

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=${API_KEY}`)
            setVideoData(res.data.items)
        }
        fetch()
    }, [])
  return (
    <div className="grid grid-cols-3 gap-7">
        {videoData.map((video) => {
            return <div>
                <VideoCard thumbnail={video?.snippet?.thumbnails?.maxres?.url} title={video?.snippet?.title} views={video?.statistics?.viewCount} days={video?.snippet?.publishedAt} channelName={video?.snippet?.channelTitle}/>
            </div>
        })}
    </div>
  )
}

export default VideoDisplay