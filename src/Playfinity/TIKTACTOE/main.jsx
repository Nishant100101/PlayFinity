/* eslint-disable react-hooks/exhaustive-deps */
import "./main.css";
import { Boxes } from "./Components/grids/boxes";
import Control from "./Components/control_Panel/control";
import { useState, useEffect, createContext } from "react";
import Congrats from "./Components/Heading_Congrats/Congrats";
import ViewInstructions from "./Components/instructions/viewInstructions";

export const GameStatesContext = createContext();
const winners = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const TikTacToe = () => {
  document.title = "Playfinity-TikTacToe";

  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [value, setValue] = useState("X");
  const [history, setHistory] = useState([]);
  const [isDown, setIsDown] = useState(true);
  const [isComputer, setIsComputer] = useState(true);
  const [scores, setScores] = useState({
    Player1: 0,
    Computer: 0,
    Tie: 0,
  });
  const [checkWinner, setCheckWinner] = useState({
    status: false,
    winner: null,
  });

  useEffect(() => {
    if (!boxes.includes(null) && !checkWinner.status) {
      setScores((prevScores) => ({ ...prevScores, Tie: prevScores.Tie + 1 }));
      setCheckWinner({ status: true, winner: null });
      return;
    }
    if (checkWin()) return;
    if (value === "O" && isComputer) {
      const sys = setTimeout(() => {
        if (!checkWinner.status) handleSystemMove();
      }, 500);
      return () => clearTimeout(sys);
    }
  }, [boxes]);

  function checkWin() {
    for (const conditions of winners) {
      const [a, b, c] = conditions;
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        setCheckWinner({
          status: true,
          winner: boxes[a],
        });
        setScores((prev) => ({
          Player1: boxes[a] === "X" ? prev.Player1 + 1 : prev.Player1,
          Computer: boxes[a] === "O" ? prev.Computer + 1 : prev.Computer,
          Tie: prev.Tie,
        }));
        setTimeout(() => {
          document.getElementById(a).classList.add("blink-animation");
          document.getElementById(b).classList.add("blink-animation");
          document.getElementById(c).classList.add("blink-animation");
        }, 400);

        setTimeout(() => {
          document.getElementById(a).classList.remove("blink-animation");
          document.getElementById(b).classList.remove("blink-animation");
          document.getElementById(c).classList.remove("blink-animation");
        }, 3000);
        return true;
      }
    }
    return false;
  }

  const handleSystemMove = () => {
    const updatedBoxes = [...boxes];
    const nextValue = "O";

    // Function to check and make a move in a winning or blocking position
    const makeMove = (a, b, c) => {
      if (
        updatedBoxes[a] &&
        updatedBoxes[a] === updatedBoxes[b] &&
        !updatedBoxes[c]
      ) {
        updatedBoxes[c] = nextValue;
        return true;
      } else if (
        updatedBoxes[a] &&
        updatedBoxes[a] === updatedBoxes[c] &&
        !updatedBoxes[b]
      ) {
        updatedBoxes[b] = nextValue;
        return true;
      } else if (
        updatedBoxes[b] &&
        updatedBoxes[b] === updatedBoxes[c] &&
        !updatedBoxes[a]
      ) {
        updatedBoxes[a] = nextValue;
        return true;
      }
      return false;
    };

    // Check all winning conditions for a potential move
    for (const conditions of winners) {
      const [a, b, c] = conditions;
      if (makeMove(a, b, c)) {
        setBoxes(updatedBoxes);
        setHistory([...history, updatedBoxes]);
        setValue("X");
        return;
      }
    }

    // If no winning or blocking move, make a random move
    let idx = Math.floor(Math.random() * boxes.length);
    while (updatedBoxes[idx] !== null) {
      idx = Math.floor(Math.random() * boxes.length);
    }
    updatedBoxes[idx] = nextValue;
    setBoxes(updatedBoxes);
    setHistory([...history, updatedBoxes]);
    setValue("X");
  };

  return (
    <GameStatesContext.Provider
      value={{
        boxes,
        setBoxes,
        value,
        setValue,
        history,
        setHistory,
        isDown,
        setIsDown,
        isComputer,
        setIsComputer,
        scores,
        setScores,
        checkWinner,
        setCheckWinner,
      }}
    >
      <div className="min-h-screen overflow-hidden bg-black">
        {/* Instructions */}
        <ViewInstructions />

        <div
          className={`py-2 w-full h-fit flex items-center flex-col 
          ${isDown && "opacity-0 blur-sm"}
          `}
          style={{ transition: "opacity 2s, filter 2s" }}
        >
          <Congrats />

          <div
            className={`game gap-0 text-4xl font-bold grid grid-cols-3 grid-rows-3 ${
              checkWinner.status && "opacity-50"
            }`}
          >
            {boxes.map((val, idx) => (
              <Boxes key={idx} id={idx} val={val} />
            ))}
          </div>

          <Control />
        </div>
      </div>
    </GameStatesContext.Provider>
  );
};
