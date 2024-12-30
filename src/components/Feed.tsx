import { RiHomeLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex gap-5 text-sm items-center text-white font-space bg-gray-800 pt-28">
        <div className="bg-gray-700 w-20 pl-2 py-1.5 rounded-r-full rounded-l-full flex items-center gap-1">
          <div>
            <RiHomeLine size={19} />
          </div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
        <button onClick={() => {
          navigate("/game")
        }}>Gaming</button>
      </div>
    </div>
  );
};

export default Feed;
