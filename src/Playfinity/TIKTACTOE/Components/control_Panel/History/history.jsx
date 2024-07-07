import Moves from "./Moves";
import { useState } from "react";
import { FaHistory } from "react-icons/fa";

export const History = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div title="Click to see Moves">
      <button
        className="text-gray-500 hover:text-white"
        onClick={() => setIsModalOpen(true)}
      >
        <FaHistory className="w-5 h-5 active:-rotate-45" />
      </button>
      {isModalOpen && <Moves setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};
