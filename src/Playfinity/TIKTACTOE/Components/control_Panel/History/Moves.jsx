import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";
import { GameStatesContext } from "../../../main";
const Moves = ({ setIsModalOpen }) => {
  const { history, setBoxes, setHistory } = useContext(GameStatesContext);

  const handleHistory = (id) => {
    setBoxes(history[id]);
    setHistory(history.slice(0, id));
  };
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden w-72 shadow-lg">
        <div className="flex justify-between bg-gray-500 p-4 items-center mb-4">
          <h3 className="text-lg font-bold">MOVES</h3>
          <button onClick={() => setIsModalOpen(false)} className="text-white">
            <FaTimes className="w-6 h-6 hover:text-red-500" />
          </button>
        </div>

        <div className="grid gap-2 text-black my-5 m-auto w-52 normal-case">
          {history.map((val, id) => (
            <div
              key={id}
              onClick={() => {
                handleHistory(id);
                setIsModalOpen(false);
              }}
            >
              <IoArrowRedo className="inline" />
              Go to Move No. &nbsp;{id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Moves;
