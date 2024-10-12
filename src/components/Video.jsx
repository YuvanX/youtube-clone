import { abbreviateNumber } from "js-abbreviation-number";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const Video = ({ video }) => {
  console.log(video)
  return (
    <div className="w-full">
      <Link to={`/video/${video?.id}`}>
        <div className="w-full">
          <img
            src={video?.snippet.thumbnails.medium.url}
            alt=""
            className="h-52 md:h-56 rounded-xl hover:rounded-none "
          />
          <div>
            <div className="font-semibold ml-2 line-clamp-2">
              {video?.snippet.title}
            </div>
          </div>
          <div className="font-semibold text-sm ml-2 text-gray-600">
            {video?.snippet.channelTitle}
          </div>
          <div className="ml-2 text-sm text-gray-500 font-medium">
            {abbreviateNumber(video?.statistics.viewCount)} views • {moment(video?.snippet.publishedAt).fromNow()}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
