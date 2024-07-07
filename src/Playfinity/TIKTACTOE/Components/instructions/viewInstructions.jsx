import { GameStatesContext } from "../../main";
import { FaInfoCircle, FaChevronUp } from "react-icons/fa";
import {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
} from "react";

const ViewInstructions = () => {
  const instructionsRef = useRef(null);
  const { isDown, setIsDown } = useContext(GameStatesContext);
  const [instructionsHeight, setInstructionsHeight] = useState(0);

  useLayoutEffect(() => {
    setInstructionsHeight(instructionsRef.current.scrollHeight);
  }, []);

  const handleMoveUp = () => {
    setInstructionsHeight(-(instructionsRef.current.scrollHeight + 8000));
    setIsDown(false);
  };

  useEffect(() => {
    const container = instructionsRef.current;
    const addAnimateClass = () => {
      container.classList.add("upDown");
    };
    const removeAnimateClass = () => {
      container.classList.remove("upDown");
    };
    const addTimeout = setTimeout(addAnimateClass, 100);
    const removeTimeout = setTimeout(removeAnimateClass, 10000);
    return () => {
      clearTimeout(addTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  return (
    <div
      className={`relative text-white z-40`}
      style={{
        transform: !isDown && `translateY(${instructionsHeight}px)`,
        transition: "transform 1.5s",
      }}
      ref={instructionsRef}
    >
      <div className="absolute w-full h-fit flex flex-col justify-evenly">
        <div className="text-4xl flex justify-center py-4 max-sm:text-xl font-bold max-sm:px-5">
          <span
            style={{ textShadow: "rgb(255 255 255) 0px 0px 20px" }}
            className="bg-white text-transparent text-4xl font-bold bg-clip-text"
          >
            Tic-Tac-Toe
          </span>
        </div>

        <h2 className="text-2xl flex items-center my-2 m-auto max-sm:text-xl font-bold">
          <FaInfoCircle className="mr-1 invert text-gray-800 shadow-sm rounded-full shadow-black" />
          Instructions:
        </h2>

        <div className="px-4">
          <h2 className="text-xl max-sm:text-base font-bold max-sm:my-0 my-2">
            How to Play 🕹️
          </h2>
          <ul className="list-outside list-disc pl-8">
            <li className="max-sm:text-sm">
              Set Up the Board:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The game is played on a 3x3
              grid. Each player chooses either 'X' or 'O'.
            </li>
            <li className="max-sm:text-sm">
              Take Turns:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Players take turns placing
              their mark in an empty square.
            </li>
            <li className="max-sm:text-sm">
              Win the Game:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The first player to get three
              of their marks in a row (horizontally, vertically, or diagonally)
              wins the game.
            </li>
            <li className="max-sm:text-sm">
              Draw:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If all squares are filled and
              no player has three in a row, the game ends in a draw.
            </li>
          </ul>

          <h2 className="text-xl mt-4 font-bold max-sm:my-0 my-2 max-sm:text-base">
            Tips & Tricks 💡
          </h2>
          <ul className="list-outside list-disc pl-8">
            <li className="max-sm:text-sm">
              Block Your Opponent:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Always be on the lookout to
              block your opponent's moves.
            </li>
            <li className="max-sm:text-sm">
              Plan Ahead:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Try to think a few steps ahead
              to anticipate your opponent's strategy.
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center w-full">
          <span
            className="text-gray-500 px-4 text-xl"
            onClick={() => {
              handleMoveUp();
            }}
            style={{
              animation: "moveUpAndDown 1s infinite alternate",
            }}
          >
            <FaChevronUp />
            <FaChevronUp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewInstructions;
