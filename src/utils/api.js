import axios from "axios";

export const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=0&key=${API_KEY}`

export async function  fetchData(url) {
    const response = await axios.get(url);
    const data = response.data.items
    return data
}
