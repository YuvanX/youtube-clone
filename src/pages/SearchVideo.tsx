import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../components/VideoDisplay";
import SearchVideoRender from "../components/SearchVideoRender";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

type SearchVideo = {
  id: {
    videoId: string;
  };
};

const SearchVideo = () => {
  const [searchVideos, setSearchVideos] = useState<SearchVideo[]>([]);
  const [loading, setLoading] = useState(true)

  const { value } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?maxResults=25&q=${value}&type=video&key=${API_KEY}`
      );
      setSearchVideos(res.data.items);
      setLoading(false)
    };
    fetch();
  }, [value]);
  console.log(searchVideos);
  return (
    <div>
      <NavBar />
      {loading? <Loader/> : <div className="bg-gray-800 min-h-screen pt-24 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10 lg:px-52 overflow-y-scroll gap-7">
          {searchVideos.map((video) => {
            return (
              <div>
                <SearchVideoRender videoId={video?.id?.videoId} />
              </div>
            );
          })}
        </div>
        <div className="px-10 lg:px-52">
          <Footer />
        </div>
      </div>}
    </div>
  );
};

export default SearchVideo;
