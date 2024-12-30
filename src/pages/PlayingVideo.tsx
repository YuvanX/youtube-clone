import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { API_KEY } from "../components/VideoDisplay";
import formatIndianNumber from "../utils/numberformat";
import VideoCard from "../components/VideoCard";

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

const PlayingVideo = () => {
  const { id } = useParams();
  const [video, setVideo] = useState<Video[]>([]);
  const [relatedVideo, setRelatedVideo] = useState<Video[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&maxResults=15&key=${API_KEY}`
      );
      setVideo(res.data.items);
    };
    fetch();
  }, [id]);

  useEffect(() => {
    const fetch = async () => {
      const categoryId = video[0]?.snippet?.categoryId;
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
      );
      setRelatedVideo(res.data.items);
    };
    fetch();
  }, [video]);

  return (
    <div className="h-screen w-full">
      <NavBar />
      <div className="pt-28 bg-gray-800 min-h-screen px-10 lg:px-52 relative w-full pb-5">
        <iframe
          className="w-full aspect-video rounded-lg"
          src={`https://www.youtube.com/embed/${id}`}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <div className="text-white font-space text-lg md:text-2xl pt-5">
          {video[0]?.snippet?.title}
        </div>
        <div className="text-white font-space text-md md:text-lg pt-2 font-light">
          {video[0]?.snippet?.channelTitle}
        </div>
        <div className="text-gray-50 font-space text-sm lg:text-md font-extralight pt-3 items-center">
          {formatIndianNumber(Number(video[0]?.statistics?.viewCount))} views
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-around">
          <div className="text-xl md:text-2xl text-gray-50 font-space pt-8 pl-3 font-light">
            Related Videos
          </div>
          {relatedVideo.map((video) => {
            return (
              <div className="px-2">
                <VideoCard
                  key={video?.id}
                  id={video?.id}
                  thumbnail={video?.snippet?.thumbnails?.maxres?.url}
                  title={video?.snippet?.title}
                  views={video?.statistics?.viewCount}
                  days={video?.snippet?.publishedAt}
                  channelName={video?.snippet?.channelTitle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayingVideo;
