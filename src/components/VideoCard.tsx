import { formatDistanceToNow } from "date-fns";
import formatIndianNumber from "../utils/numberformat";
import { Link } from "react-router-dom";


const VideoCard: React.FC<{ thumbnail?: string; title: string; views: string; days: string; channelName: string; id: string }> = ({thumbnail, title, views, days, channelName, id}) => {
  return (
    <Link to={`/${id}`}>
    <div className="mt-5 transform transition duration-300 hover:scale-105">
        <div>
            <div>
                <img src={!thumbnail? "https://i.ytimg.com/vi/5FlveALbzFk/maxresdefault.jpg": thumbnail} className="rounded-lg cursor-pointer"  />
            </div>
            <div className="text-white font-space text-sm md:text-lg pt-1">
                {title}
            </div>
            <div className="text-white font-space text-xs md:text-sm">
                {channelName}
            </div>
            <div className="flex text-gray-50 font-space text-xs pt-1 items-center">
                <div>
                    {formatIndianNumber(Number(views))} Views 
                </div>
                <div className="text-xs pl-2 pr-2 font-extralight">
                ●
                </div>
                <div>
                    {days? formatDistanceToNow(new Date(days), { addSuffix: true }) : 2}
                </div>
            </div>
        </div>
    </div>
     </Link>
  )
}

export default VideoCard