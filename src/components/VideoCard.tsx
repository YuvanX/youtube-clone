import { formatDistanceToNow } from "date-fns";
import formatIndianNumber from "../utils/numberformat";

type Video = {
    snippet: {
        thumbnails: {
            maxres?: {
                url: string;
            };
        };
        title: string;
        publishedAt: string;
        channelName: string;
    };
    statistics: {
        viewCount: string;
    };
};
const VideoCard: React.FC<{ thumbnail?: string; title: string; views: string; days: string; channelName: string }> = ({thumbnail, title, views, days, channelName}) => {
  return (
    <div className="mt-8">
        <div>
            <div>
                <img src={!thumbnail? "https://i.ytimg.com/vi/5FlveALbzFk/maxresdefault.jpg": thumbnail} className="rounded-lg"  />
            </div>
            <div className="text-white font-space text-lg pt-1">
                {title}
            </div>
            <div className="text-white font-space text-sm">
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
                    {formatDistanceToNow(new Date(days), { addSuffix: true })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoCard