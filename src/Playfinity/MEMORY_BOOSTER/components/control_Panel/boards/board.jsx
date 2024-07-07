import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { GameStatesContext } from "../../../main";

const BoardSize = () => {
  const { isModalOpen, setIsModalOpen, grid, setGrids, setMatched } =
    useContext(GameStatesContext);

  const boardSizes = [
    { rows: 2, cols: 2 },
    { rows: 3, cols: 2 },
    { rows: 4, cols: 3 },
    { rows: 4, cols: 4 },
    { rows: 5, cols: 4 },
  ];
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const selectSize = (size) => {
    setGrids(size);
    setMatched(size.rows * size.cols);
    const optClass = document.querySelectorAll(".opt");
    optClass.forEach((items) => {
      items.classList.remove("opt");
    });
    closeModal();
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="play font-bold text-xl active:shadow-none shadow-md shadow-black border-2 border-white text-white bg-gradient-to-r z-0 from-sky-900 via-purple-800 to-blue-900 select-none relative cursor-pointer  px-3 py-2 rounded-xl touch-manipulation"
      >
        Size
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden w-72 shadow-lg">
            <div className="flex justify-between bg-gray-300 p-4 items-center mb-4">
              <h3 className="text-lg font-bold">Select board size</h3>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800"
              >
                <FaTimes className="w-6 h-6 hover:text-red-500" />
              </button>
            </div>
            <div className="grid gap-2 my-5 m-auto w-52">
              {boardSizes.map((size, idx) => (
                <div
                  key={idx}
                  className={`p-2 bg-gray-100 text-xl inline-grid grid-cols-3 items-center gap-0 rounded-md shadow-black hover:bg-gray-200 cursor-pointer ${
                    grid.rows === size.rows && grid.cols === size.cols
                      ? "shadow-inner"
                      : "shadow-sm"
                  }`}
                  onClick={() => selectSize(size)}
                >
                  <span className="text-center">{size.rows}</span>
                  <span className="flex justify-center w-full">
                    <FaTimes className="w-5 h-5" />
                  </span>
                  <span className="text-center">{size.cols}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardSize;
