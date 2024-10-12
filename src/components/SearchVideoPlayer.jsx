import { abbreviateNumber } from 'js-abbreviation-number'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

function SearchVideoPlayer({video}) {
  return (
    <div className='pl-3'>
      <Link to={`/video/${video?.id}`}>
        <div className='flex mb-4'>
          <img
            src={video?.snippet.thumbnails.medium.url}
            alt=""
            className="h-32 md:h-56 rounded-xl hover:rounded-none "
          />
          <div>
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
          
        </div>
      </Link>
    </div>
  )
}

export default SearchVideoPlayer