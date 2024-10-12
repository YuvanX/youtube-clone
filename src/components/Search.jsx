import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, fetchData } from "../utils/api";

import SearchVideo from "./SearchVideo";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { value } = useParams();
  console.log(value);
  useEffect(() => {
    const fetchSearch = async () => {
      const res = await fetchData(
        `https://youtube.googleapis.com/youtube/v3/search?maxResults=25&q=${value}&type=video&key=${API_KEY}`
      );
      setSearchResults(res);
    };
    fetchSearch();
  }, [value]);

  console.log(searchResults);
  return (
    <div>
      <NavBar />
      <div className="flex mt-16">
      <SideBar/>
      <div className="overflow-y-scroll overflow-x-hidden h-[calc(100vh-6.625rem)] w-full">
        {searchResults.map((video) => {
          return <SearchVideo id={video?.id?.videoId} />;
        })}
      </div>
    </div>
      </div>
      
  );
};

export default Search;
