import { useContext } from "react";
import { GameStatesContext } from "../../main";
import CloseInstructions from "../instructions/closeInstructions";
const Congrats = () => {
  const { isDown /* setCheckWinner, winner */ } = useContext(GameStatesContext);
  return (
    <div className="flex py-10 justify-center">
      {/* Congrats Message */}
      {/*  {winner.status && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-20 flex items-center justify-center z-50"
          onClick={() => setCheckWinner((prev) => ({ ...prev, status: false }))}
        >
          <div className="flex bg-white flex-col justify-center items-center winner-animation font-extrabold md:text-4xl max-md:text-2xl max-sm:text-xl z-30">
            <h1 className="">
              Winner : {winner.winner}
              <span className="text-red-500 animate-pulse">
                {" "}
                {winner.status}
              </span>
            </h1>
            <p className="">Congratulations!</p>
            <div className="celebration-cap animate-bounce"></div>
          </div>
        </div>
      )} */}

      <div
        style={{
          textShadow: "rgb(255 255 255) 0px 0px 20px",
          transition: "opacity 2s",
        }}
        className={`flex justify-center bg-white text-transparent text-4xl font-bold bg-clip-text ${
          isDown && "opacity-0 blur-md"
        } `}
      >
        Tik-Tac-Toe <CloseInstructions />
      </div>
    </div>
  );
};
export default Congrats;
