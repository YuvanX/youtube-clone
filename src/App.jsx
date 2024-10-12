import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import VideoPlayer from "./components/VideoPlayer";
import NavBar from "./components/NavBar";

const App = () => {
  
  return <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search/:value" element={<Search/>}/>
      <Route path="/video/:id" element={<VideoPlayer/>}/>
    </Routes>
    </div>
};

export default App;
