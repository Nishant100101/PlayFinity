import { useContext } from "react";
import { GameStatesContext } from "../../main";
import { FaChevronDown } from "react-icons/fa";
const CloseInstructions = () => {
  const { isDown, setIsDown } = useContext(GameStatesContext);
  return (
    <div
      className={`flex items-center h-full pt-3 px-1 box-border w-fit ${
        isDown ? "hidden" : "block"
      }`}
      onClick={() => setIsDown(true)}
    >
      <span
        className="text-gray-500 text-xl"
        style={{
          animation: "moveUpAndDown 1s infinite alternate",
        }}
      >
        <FaChevronDown />
      </span>
    </div>
  );
};

export default CloseInstructions;
