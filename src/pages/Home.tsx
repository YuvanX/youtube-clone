import NavBar from "../components/NavBar"
import VideoDisplay from "../components/VideoDisplay"

const Home = () => {
  return (
    <div>
        <NavBar/>
        <div className="bg-gray-800 h-screen pt-24 px-52 overflow-y-scroll">
          <VideoDisplay/>
        </div>
    </div>
  )
}

export default Home