import { useContext } from "react";
import BoardSize from "./boards/board";
import Categories from "./Category/categories";
import { GameStatesContext } from "../../main";
const Controls = () => {
  const { setType, setGrids, setreset, setBoxes, setwinStatus } =
    useContext(GameStatesContext);

  const handleRest = () => {
    setreset(true);
    setBoxes([]);
    setType("");
    setwinStatus(false);
    setGrids({
      rows: 3,
      cols: 2,
    });

    const optClass = document.querySelectorAll(".opt");
    optClass.forEach((items) => {
      items.classList.remove("opt");
    });
  };
  return (
    <div className="flex items-center py-4 justify-center text-lg font-sans z-30 font-bold my-2">
      {/* Reset Button */}
      <div
        className={`play font-bold text-xl active:shadow-none shadow-md shadow-black border-2 border-white text-white bg-gradient-to-r z-0 from-red-900 via-orange-800 to-red-900 select-none relative cursor-pointer  px-3 py-2 rounded-xl touch-manipulation`}
        onClick={() => handleRest()}
      >
        Reset
      </div>

      {/* Category*/}
      <Categories />

      {/* BoardSize */}
      <BoardSize />
    </div>
  );
};

export default Controls;
