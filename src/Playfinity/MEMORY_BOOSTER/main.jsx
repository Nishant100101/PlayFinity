/* eslint-disable react-hooks/exhaustive-deps */
import "./main.css";
import Grids from "./components/grids/grids";
import { arr } from "./components/imageArr/imgArr";
import Controls from "./components/control_Panel/controls";
import { useState, useEffect, useLayoutEffect, createContext } from "react";
import Congrats from "./components/Heading_Congrats/Congrats";
import ViewInstructions from "./components/instructions/viewInstructions";

export const GameStatesContext = createContext();

export default function MEMORYBOOSTER() {
  document.title = "Playfinity - MEMORY BOOSTER";

  const [grid, setGrids] = useState({
    rows: 3,
    cols: 2,
  });
  const [type, setType] = useState("");
  const [boxes, setBoxes] = useState([]);
  const [category, setCategory] = useState(arr);
  const [, setreset] = useState(false);
  const [matched, setMatched] = useState(6);
  const [isDown, setIsDown] = useState(true);
  const [winStatus, setwinStatus] = useState(false);
  const [gridelements, setgridelements] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const boardSize = Math.floor((grid.rows * grid.cols) / 2);

  //Add grid elements
  useLayoutEffect(() => {
    const generateElements = () => {
      const Arr = category.slice(0, boardSize);
      const pairedArr = pairArr(Arr);
      const shuffledArr = shuffleArray([...pairedArr]);
      const boxElements = shuffledArr.map((val, idx) => (
        <div
          key={idx}
          id={idx}
          className={`flex justify-center is items-center w-28 h-28 bg-white shadow-md shadow-black z-30 rounded-md p-2
          ${grid.rows === 2 && grid.cols === 2 && "max-md:w-36 max-md:h-36"} 
          ${grid.rows === 3 && grid.cols === 2 && "max-md:w-32 max-md:h-32"} 
          ${grid.rows === 4 && grid.cols === 3 && "max-md:w-28 max-md:h-28"} 
          ${grid.rows >= 4 && grid.cols >= 4 && "max-md:w-20 max-md:h-20"} 
          `}
        >
          <img src={val} className="boxex" alt={idx} />
        </div>
      ));
      setgridelements(boxElements);
    };
    generateElements();
  }, [grid, category, boardSize]);

  function pairArr(array) {
    const boardSize = Math.floor((grid.rows * grid.cols) / 2);
    const pairedArray = [];
    for (let i = 0; i < boardSize; i++) {
      pairedArray.push(array[i]);
      pairedArray.push(array[i]);
    }
    return pairedArray;
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  //Add Class and Animation
  useLayoutEffect(() => {
    const handleClick = (e) => {
      const cont = document.getElementById("container");
      const boxElements = e.target || cont;
      const alt = e.target.src;
      if (boxElements.classList.contains("opt")) {
        return;
      } else {
        boxElements.classList.add("opt");
        setBoxes((prevBoxes) => [
          ...prevBoxes,
          { boxElement: boxElements, alt },
        ]);
      }
    };
    const boxElements = document.querySelectorAll("#container");
    boxElements.forEach((element) => {
      !winStatus && element.addEventListener("click", handleClick);
    });

    return () => {
      boxElements.forEach((element) => {
        element.removeEventListener("click", handleClick);
      });
    };
  }, []);

  //Checks Card Pairs
  useEffect(() => {
    const handleTimeout = () => {
      const cont = document.getElementById("container");
      const TotalBox = cont.querySelectorAll(".opt").length;
      const lastBox = boxes[boxes.length - 1];
      const secondLastBox = boxes[boxes.length - 2];
      if (boxes.length === 1) {
        lastBox.boxElement.classList.add("opt");
      } else if (boxes.length >= 2) {
        if (lastBox.alt === secondLastBox.alt) {
          if (TotalBox === matched) {
            setwinStatus(true);
          }
          setBoxes([]);
        } else {
          lastBox.boxElement.classList.remove("opt");
          secondLastBox.boxElement.classList.remove("opt");
          setBoxes([]);
        }
      }
    };
    const timeoutId = setTimeout(handleTimeout, 1500);
    if (winStatus) {
      const container = document.getElementById("container");
      if (container) {
        container.classList.remove("opt");
        container.style.cursor = "default";
      }
      clearTimeout(timeoutId);
      return;
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [boxes, matched]);

  return (
    <GameStatesContext.Provider
      value={{
        grid,
        setGrids,
        type,
        setType,
        boxes,
        setBoxes,
        category,
        setCategory,
        setreset,
        matched,
        setMatched,
        isDown,
        setIsDown,
        winStatus,
        setwinStatus,
        gridelements,
        setgridelements,
        isModalOpen,
        setIsModalOpen,
        boardSize,
      }}
    >
      <div className="min-h-screen overflow-hidden bg-gradient-to-r from-sky-300 via-purple-500 to-blue-500">
        {/* Instructions */}
        <ViewInstructions />

        <div
          className={`py-2 w-full h-fit flex items-center flex-col 
          ${isDown && "opacity-0 blur-sm"}
          `}
          style={{ transition: "opacity 2s, filter 2s" }}
        >
          {/*  Heading & Congrats Message */}
          <Congrats />

          {/*  GAME BODY */}
          <div className="flex h-2/3 justify-center items-center py-5">
            {grid && <Grids />}
          </div>

          {/*  Control Pannel */}
          <Controls />
        </div>
      </div>
    </GameStatesContext.Provider>
  );
}
