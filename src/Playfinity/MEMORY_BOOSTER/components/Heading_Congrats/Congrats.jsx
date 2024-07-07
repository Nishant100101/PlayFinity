import { useContext } from "react";
import { GameStatesContext } from "../../main";
import CloseInstructions from "../instructions/closeInstructions";

const Congrats = () => {
  const { winStatus } = useContext(GameStatesContext);
  return (
    <div className={`flex justify-center py-10`}>
      {winStatus && (
        <div className="font-extrabold winner-div md:text-4xl max-md:text-2xl max-sm:text-xl z-30">
          <h1>Winner!</h1>
          <p>Congratulations!</p>
          <div className="celebration-shape animate-bounce"></div>
        </div>
      )}

      <div
        style={{ textShadow: "rgb(255 255 255) 0px 0px 20px" }}
        className="flex justify-center bg-white text-transparent text-4xl font-bold bg-clip-text"
      >
        Memory Booster <CloseInstructions />
      </div>
    </div>
  );
};
export default Congrats;
