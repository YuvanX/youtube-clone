import axios from 'axios';
import  { useEffect, useState } from 'react'
import { API_KEY } from './VideoDisplay';
import VideoCard from './VideoCard';

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
const SearchVideoRender = ({videoId}: { videoId: string}) => {
    const [video, setVideo] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
            setVideo(res.data.items)
            setLoading(false)
        }
        fetch()
    }, [videoId])
    console.log(video)
  return (
    <div>
      {loading? <div></div> : <div>
        {<VideoCard key={video[0]?.id} id={video[0]?.id} thumbnail={video[0]?.snippet?.thumbnails?.maxres?.url} title={video[0]?.snippet?.title} views={video[0]?.statistics?.viewCount} days={video[0]?.snippet?.publishedAt} channelName={video[0]?.snippet?.channelTitle}/>}
    </div>}
    </div>
  )
}

export default SearchVideoRender