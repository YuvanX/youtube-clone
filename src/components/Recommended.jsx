import { abbreviateNumber } from 'js-abbreviation-number'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

function Recommended({video}) {
  return (
    <div>
        <Link to={`/video/${video?.id}`}>
        <div className='flex mb-6'>
          <img
            src={video?.snippet.thumbnails.medium.url}
            alt=""
            className="h-24 md:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl hover:rounded-none "
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

export default Recommended