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
    setInstructionsHeight(-(instructionsRef.current.scrollHeight + 500));
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
      className={`relative z-40`}
      style={{
        transform: !isDown && `translateY(${instructionsHeight}px)`,
        transition: "transform 1.5s",
      }}
      ref={instructionsRef}
    >
      <div className="absolute w-full h-fit flex flex-col">
        <div className="text-4xl flex justify-center py-4 max-sm:text-xl font-bold max-sm:px-5">
          <span
            style={{ textShadow: "rgb(255 255 255) 0px 0px 20px" }}
            className="bg-white  text-transparent text-4xl font-bold bg-clip-text"
          >
            Memory Booster
          </span>
        </div>

        <h2 className="text-2xl flex items-center my-2 m-auto max-sm:text-xl font-bold">
          <FaInfoCircle className="mr-1 text-gray-300 shadow-md rounded-full shadow-black" />
          Instructions:
        </h2>

        <div className="px-4">
          <h2 className="text-xl max-sm:text-base font-bold max-sm:my-0 my-2">
            How to Play 🕹️
          </h2>
          <ul className="list-outside list-disc pl-8">
            <li className="max-sm:text-sm">
              Flip Two Cards:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On your turn, flip over any
              two cards. Click or tap to reveal the card's face.
            </li>
            <li className="max-sm:text-sm">
              Find a Match:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If the cards match, leave them
              face up. If they don’t match, flip them back down after a brief
              pause.
            </li>
            <li className="max-sm:text-sm">
              Keep Going:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Take turns flipping pairs of
              cards. Remember the positions and try to match all pairs.
            </li>
            <li className="max-sm:text-sm">
              Win the Game:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The game ends when all pairs
              are matched and all cards are face up.
            </li>
          </ul>

          <h2 className="text-xl font-bold max-sm:my-0 my-2 max-sm:text-base">
            Tips & Tricks 💡
          </h2>
          <ul className="list-outside list-disc pl-8">
            <li className="max-sm:text-sm">
              Sharpen Your Memory:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concentrate on remembering the
              position of each card.
            </li>
            <li className="max-sm:text-sm">
              Strategize:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Focus on a small section of
              the grid to make matching easier.
            </li>
          </ul>
        </div>

        <div className="flex items-center  justify-center w-full">
          <span
            className="text-gray-300 px-4 text-xl"
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
