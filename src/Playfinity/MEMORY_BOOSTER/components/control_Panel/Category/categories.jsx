import { useState, useContext } from "react";
import { arr, arr2 } from "../../imageArr/imgArr";
import { GameStatesContext } from "../../../main";

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { type, setType, setCategory, setreset, setBoxes } =
    useContext(GameStatesContext);
  const handleClick = (category) => {
    setType(category);
    category === "Fruits"
      ? setCategory(arr)
      : category === "Random" && setCategory(arr2);
    setIsOpen(false);
    setreset(true);
    setBoxes([]);
    const optClass = document.querySelectorAll(".opt");
    optClass.forEach((items) => {
      items.classList.remove("opt");
    });
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="play font-bold mx-4 hover:border-4 hover:rounded-2xl text-xl active:shadow-none shadow-md shadow-black border-2 border-white text-white bg-gradient-to-r z-0 from-sky-900 via-purple-800 to-blue-900 select-none relative cursor-pointer px-3 py-2 rounded-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {type ? type : "Category"}
      </div>
      {isOpen && (
        <div className="absolute bottom-full overflow-hidden mb-2 w-40 rounded-md shadow-lg shadow-black bg-white z-30">
          <ul className="p-1">
            <li
              className={`block px-3 rounded-md py-2 text-gray-700 overflow-hidden shadow-black hover:bg-gray-200 cursor-pointer ${
                type === "Fruits" ? "bg-gray-300" : ""
              }`}
              onClick={() => handleClick("Fruits")}
            >
              Fruits
            </li>
            <li
              className={`block px-3 py-2 rounded-md text-gray-700 overflow-hidden shadow-black hover:bg-gray-200 cursor-pointer ${
                type === "Random" ? "bg-gray-300" : ""
              }`}
              onClick={() => handleClick("Random")}
            >
              Random
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categories;
