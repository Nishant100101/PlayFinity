import "./style.css";
import { Link } from "react-router-dom";

const Play = ({ link }) => {
  return (
    <div className="flex justify-center w-full absolute bottom-0">
      <button className="play my-1 active:shadow-none shadow-md shadow-black border-2 border-white text-white bg-gradient-to-r z-0 from-sky-900 via-purple-800 to-blue-900 select-none relative cursor-pointer  px-2 py-1 rounded-xl touch-manipulation">
        <Link to={`/${link}`}>PLAY</Link>
      </button>
    </div>
  );
};

export default Play;
