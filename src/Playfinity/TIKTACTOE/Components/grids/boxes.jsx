import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { GameStatesContext } from "../../main";

export const Boxes = ({ id, val }) => {
  const {
    checkWinner,
    setBoxes,
    value,
    boxes,
    setValue,
    setHistory,
    setCheckWinner,
    history,
  } = useContext(GameStatesContext);

  function handleClick(index) {
    if (boxes[index] || checkWinner.status) {
      return;
    }
    setHistory([...history, boxes]);
    const newBoxes = [...boxes];
    newBoxes[index] = value;
    setBoxes(newBoxes);
    setValue(value === "X" ? "O" : "X");
  }

  const afterWin = () => {
    if (checkWinner.status) {
      setHistory([]);
      setValue("X");
      setCheckWinner({
        status: false,
        winner: null,
      });
      setBoxes(Array(9).fill(null));
    }
  };
  return (
    <>
      <div
        id={id}
        onClick={() => {
          checkWinner.status ? afterWin() : handleClick(id);
        }}
        className={`
       ${[3, 4, 5].includes(id) ? "border-y-2" : ""} 
       ${[1, 4, 7].includes(id) ? "border-x-2" : ""}
       flex justify-center items-center text-white`}
      >
        {val === "X" ? (
          <FaTimes className="w-4/6 h-4/6" />
        ) : (
          val === "O" && (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" fill="black" />
            </svg>
          )
        )}
      </div>
    </>
  );
};
