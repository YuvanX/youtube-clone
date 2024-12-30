
import VideoCard from "./VideoCard";
export const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

type Video = {
  id:string;
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
  
  type Feed= {
    videoData: Video[]
  }

const VideoDisplay = ({videoData}: Feed) => {
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative pb-5">
        {videoData.map((video) => {
            return <div>
                <VideoCard key={video?.id} id={video?.id} thumbnail={video?.snippet?.thumbnails?.maxres?.url} title={video?.snippet?.title} views={video?.statistics?.viewCount} days={video?.snippet?.publishedAt} channelName={video?.snippet?.channelTitle}/>
            </div>
        })}
    </div>
  )
}

export default VideoDisplay