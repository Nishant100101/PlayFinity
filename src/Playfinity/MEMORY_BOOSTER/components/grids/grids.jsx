import { useContext } from "react";
import { GameStatesContext } from "../../main";

const Grids = () => {
  const { winStatus, grid, gridelements } = useContext(GameStatesContext);
  return (
    <div
      className={`w-fit h-fit cursor-pointer bg-transparent shadow-lg shadow-black rounded-lg p-2 grid gap-1
      ${winStatus && "blur-sm"}
      `}
      style={{
        gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
        gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
      }}
      id="container"
    >
      {gridelements}
    </div>
  );
};

export default Grids;
