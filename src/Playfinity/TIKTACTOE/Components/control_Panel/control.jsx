import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { History } from "./History/history";
import { GameStatesContext } from "../../main";

const Control = () => {
  const {
    scores,
    setValue,
    setBoxes,
    setScores,
    isComputer,
    setHistory,
    setIsComputer,
  } = useContext(GameStatesContext);
  return (
    <div
      className="flex ctrl py-5 px-2 box-border justify-between items-center text-white uppercase cursor-pointer select-none touch-auto font-sans"
      style={{ width: "350px" }}
    >
      <p className="flex text-center leading-none flex-col">
        <span>
          Player{" "}
          <span className={`${isComputer && "hidden"} text-base leading-none`}>
            1{" "}
          </span>
          (<FaTimes className="inline w-3 h-3" />)
        </span>
        <span className="text-2xl">{scores.Player1}</span>
      </p>
      <p className="flex text-center flex-col leading-none">
        Tie<span className="text-2xl">{scores.Tie}</span>
      </p>
      <p className="flex text-center leading-none flex-col">
        <span>
          {isComputer ? "Computer" : "Player 2 "}(
          <span className="w-3 h-3 bg-white inline-flex items-center justify-center rounded-full">
            <span className="inline-flex w-2 h-2 bg-black rounded-full"></span>
          </span>
          )
        </span>

        <span className="text-2xl">{scores.Computer}</span>
      </p>
      {/* Player Selection */}
      <div
        className="flex leading-none text-center text-gray-500 flex-col"
        onClick={() => {
          setHistory([]);
          setValue("X");
          setScores({
            Player1: 0,
            Computer: 0,
            Tie: 0,
          });
          setIsComputer(!isComputer);
          setBoxes(Array(9).fill(null));
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g fill="rgb(107 114 128)">
            <path
              className={`${!isComputer && "hidden"}`}
              d="M49.947,90.991c0.693,0,1.41,0.02,2.104,0c13.547-0.201,26.439-1.723,28.775-3.945 c0.537-4.928,1.195-7.311-20.65-17.644c-3.107-1.742-1.465-8.492-1.465-8.492c6.578-4.969,11.096-16.463,11.096-25.676 c0-15.921-7.18-23.453-17.756-24.234h-2.104c-10.557,0.781-17.734,8.312-17.734,24.234c0,9.213,4.496,20.707,11.078,25.676 c0,0,1.641,6.75-1.449,8.492C19.979,79.735,20.635,82.118,21.176,87.046C23.51,89.269,36.402,90.79,49.947,90.991z"
            ></path>
            <path
              className={`${isComputer && "hidden"}`}
              d="M66.219,85h1.562c9.92-0.14,19.38-1.2,21.08-2.779c0.422-3.44,0.9-5.101-15.142-12.341 c-2.279-1.22-1.059-5.939-1.059-5.939c4.822-3.48,8.123-11.521,8.123-17.98c0-11.14-5.263-16.419-13.001-16.959h-1.562 c-7.738,0.54-13,5.799-13,16.959c0,6.46,3.301,14.5,8.121,17.98c0,0,1.221,4.719-1.059,5.939c-16.041,7.24-15.562,8.9-15.14,12.341 C46.84,83.8,56.301,84.86,66.219,85z M30.217,69h1.564c9.918-0.14,19.378-1.2,21.078-2.779c0.422-3.44,0.9-5.1-15.14-12.34 c-2.279-1.22-1.059-5.939-1.059-5.939c4.82-3.48,8.121-11.521,8.121-17.98c0-11.14-5.262-16.42-13-16.96h-1.564 c-7.738,0.54-13,5.8-13,16.96c0,6.459,3.301,14.5,8.121,17.98c0,0,1.221,4.72-1.059,5.939c-16.041,7.24-15.562,8.9-15.14,12.34 C10.839,67.8,20.299,68.86,30.217,69z"
            ></path>
          </g>
        </svg>

        <p className="font-semibold text-base leading-7">
          {isComputer ? "1" : "2"}P
        </p>
      </div>
      {/* History */}
      <History />
    </div>
  );
};
export default Control;
