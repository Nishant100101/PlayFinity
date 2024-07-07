import { useContext } from "react";
import { GameStatesContext } from "../main";

const Control = () => {
  const {
    interval,
    setInt,
    containerDimensions,
    setTopBlockPos,
    setBottomBlockPos,
    setBlockPositionStatus,
  } = useContext(GameStatesContext);

  // Move To Right
  function Right() {
    setBlockPositionStatus({
      topBlock: true,
      bottomBlock: true,
    });
    const moveBlock = (prevPosition) => {
      const newLeft = prevPosition.left + 20;
      return {
        ...prevPosition,
        left: newLeft > containerDimensions.width ? 1 : newLeft,
      };
    };
    const moveBlockBottom = (prevPosition) => {
      const newLeft = prevPosition.left - 20;
      return {
        ...prevPosition,
        left:
          newLeft < -containerDimensions.left
            ? containerDimensions.width
            : newLeft,
      };
    };
    const add = setInterval(() => {
      setBottomBlockPos((prevPosition) => moveBlockBottom(prevPosition));
      setTopBlockPos((prevPosition) => moveBlock(prevPosition));
    }, 50);

    setInt(add);
  }
  // Move To Left
  function Left() {
    setBlockPositionStatus({
      topBlock: true,
      bottomBlock: true,
    });
    const moveBlock = (prevPosition) => {
      const newLeft = prevPosition.left - 20;
      return {
        ...prevPosition,
        left:
          newLeft < -containerDimensions.left
            ? containerDimensions.width
            : newLeft,
      };
    };
    const moveBlockBottom = (prevPosition) => {
      const newLeft = prevPosition.left + 20;
      return {
        ...prevPosition,
        left: newLeft > containerDimensions.width ? 1 : newLeft,
      };
    };
    const sub = setInterval(() => {
      //Dout
      setBottomBlockPos((prevPosition) => moveBlockBottom(prevPosition));
      setTopBlockPos((prevPosition) => moveBlock(prevPosition));
    }, 50);

    setInt(sub);
  }
  //CLEAR INTERVAL
  function clear() {
    clearInterval(interval);
    setInterval(null);
  }
  return (
    <div className="w-full h-fit flex justify-center items-center">
      <div className="px-4 shadow-black shadow-inner w-fit flex flex-row bg-blue-700 font-bold h-20 rounded-full items-center transform transition-transform duration-200">
        <div
          className="mx-2 bg-blue-600 justify-center rounded-full shadow-black text-white text-5xl items-center flex cursor-pointer select-none shadow-lg active:shadow-inner active:shadow-black transform hover:scale-105 transition-transform duration-200"
          onMouseDown={Left}
          onMouseUp={clear}
          onTouchStart={Left}
          onTouchEnd={clear}
          style={{ textShadow: "2px 2px 4px black" }}
        >
          &#8722;
        </div>
        <div
          className="mx-2 bg-blue-600 justify-center rounded-full shadow-black text-white text-5xl items-center flex cursor-pointer select-none active:shadow-inner active:shadow-black shadow-lg transform hover:scale-105 transition-transform duration-200"
          onMouseDown={Right}
          onMouseUp={clear}
          onTouchStart={Right}
          onTouchEnd={clear}
          style={{ textShadow: "2px 2px 4px black" }}
        >
          &#43;
        </div>
      </div>
    </div>
  );
};

export default Control;
