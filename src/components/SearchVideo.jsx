import React, { useEffect, useState } from 'react'
import { API_KEY, fetchData } from '../utils/api';
import Video from './Video';
import Recommended from './Recommended';
import SearchVideoPlayer from './SearchVideoPlayer';

function SearchVideo({id}) {
    const [searchVideoDetails, setSearchVideoDetails] = useState([]);

    useEffect(() => {
        const fetchSearchVideo = async () => {
            const res = await fetchData(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`);
            setSearchVideoDetails(res);
        }
        fetchSearchVideo()
    }, [])
    console.log(searchVideoDetails)
  return (
    <div>
        <SearchVideoPlayer video={searchVideoDetails[0]}/>
    </div>
  )
}

export default SearchVideo
