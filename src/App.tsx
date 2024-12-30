import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gaming from "./pages/Gaming";
import PlayingVideo from "./pages/PlayingVideo";
import SearchVideo from "./pages/SearchVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game" element={<Gaming/>}/>
        <Route path="/:id" element={<PlayingVideo/>}/>
        <Route path="/search/:value" element={<SearchVideo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
