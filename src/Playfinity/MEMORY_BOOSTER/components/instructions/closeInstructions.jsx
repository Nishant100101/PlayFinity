import { useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
import { GameStatesContext } from "../../main";

const CloseInstructions = () => {
  const { setIsDown } = useContext(GameStatesContext);
  return (
    <div
      className="flex items-center h-full pt-3 px-1 box-border w-fit"
      onClick={() => setIsDown(true)}
    >
      <span
        className="text-gray-300 text-xl"
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
