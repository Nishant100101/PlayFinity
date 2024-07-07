/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import Main from "./working/main";
import Heading from "./Heading/heading";
import Control from "./Control_Panel/control";
import useDimensions from "./working/states/useDimensions";
import useBlocksColor from "./working/states/useBlocksColor";
import { useState, useRef, useEffect, createContext } from "react";
import useBlocksPositions from "./working/states/useBlocksPosition";
import useBlocksDimensions from "./working/states/useBlocksDimensions";
import useCollisionDetection from "./working/states/useCollisionDetection";
import useHandleInstructions from "./working/states/useHandleInstructions";
export const GameStatesContext = createContext();

export const BounceBall = () => {
  document.title = "Playfinity - Bounce Ball";

  const container = useRef({});

  //Checking the orientation & Size
  const [isPortrait, setIsPortrait] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    window.addEventListener("resize", handleMoveUp);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const containerStyle = {
    height: isPortrait ? `calc(100vw - 10%)` : `calc(100vh - 45%) `,
    width: isPortrait ? `calc(100vw - 10%)` : `calc(100vh + 40%)`,
  };

  /* Game Status & States */
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(true);
  const [remainingLife, setRemainingLife] = useState(10);
  const [ballColor, setBallColor] = useState("transparent");
  const [checkGameStatus, setCheckGameStatus] = useState(false);

  /* Ball, Block & Container dimension and States */
  const ballRef = useRef(null);
  const topBlock = useRef(null);
  const bottomBlock = useRef(null);
  const [interval, setInt] = useState(null);
  const [velocity, setVelocity] = useState({
    /*  dx: Math.floor(Math.random() * 2) + 1,
    dy: Math.floor(Math.random() * 4) + 1, */
    dx: 2,
    dy: 4,
  });
  const [ballDimensions, setBallDimensions] = useState({
    left: 0,
    top: 0,
    width: 8,
    height: 8,
    right: null,
    bottom: null,
  });

  //Container Dimension
  const containerDimensions = useDimensions(container, ballDimensions);

  //Blocks Dimension
  const blockDimensions = useBlocksDimensions(topBlock, bottomBlock);

  //TOP & BOTTOM Blocks Position
  const [topBlockPos, setTopBlockPos, bottomBlockPos, setBottomBlockPos] =
    useBlocksPositions(blockDimensions);

  //Blocks Movement & Color
  const [blockPositionStatus, setBlockPositionStatus] = useBlocksColor(
    topBlockPos,
    bottomBlockPos,
    topBlock,
    bottomBlock
  );

  // Block Status
  useEffect(() => {
    const handleSwitch = (e) => {
      switch (e.keyCode) {
        case 38:
          setBlockPositionStatus((prevState) => ({
            ...prevState,
            topBlock: true,
            bottomBlock: false,
          }));
          break;
        case 40:
          setBlockPositionStatus((prevState) => ({
            ...prevState,
            topBlock: false,
            bottomBlock: true,
          }));
          break;
        default:
          break;
      }
    };
    window.addEventListener("keyup", handleSwitch);
    return () => {
      window.removeEventListener("keyup", handleSwitch);
    };
  }, [blockPositionStatus]);

  // Block Key Control
  useEffect(() => {
    const handleKeyDown = (e) => {
      const moveBlockLeft = (prevPosition) => {
        const newLeft = prevPosition.left - 20;
        return {
          ...prevPosition,
          left:
            newLeft < -containerDimensions.left
              ? containerDimensions.width
              : newLeft,
        };
      };
      const moveBlockRight = (prevPosition) => {
        const newLeft = prevPosition.left + 20;
        return {
          ...prevPosition,
          left: newLeft > containerDimensions.width ? 1 : newLeft,
        };
      };
      if (blockPositionStatus.topBlock || blockPositionStatus.bottomBlock) {
        switch (e.keyCode) {
          case 37:
            if (blockPositionStatus.topBlock) {
              setTopBlockPos((prevPosition) => moveBlockLeft(prevPosition));
            } else {
              setBottomBlockPos((prevPosition) => moveBlockLeft(prevPosition));
            }
            break;
          case 39:
            if (blockPositionStatus.bottomBlock) {
              setBottomBlockPos((prevPosition) => moveBlockRight(prevPosition));
            } else {
              setTopBlockPos((prevPosition) => moveBlockRight(prevPosition));
            }
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [blockPositionStatus]);

  //Collision Detection & Ball Movement
  useCollisionDetection(
    score,
    ballRef,
    topBlock,
    setScore,
    velocity,
    container,
    bottomBlock,
    setVelocity,
    setBallColor,
    remainingLife,
    blockDimensions,
    setRemainingLife,
    setBallDimensions,
    setCheckGameStatus,
    containerDimensions
  );

  //INSTRUCTION
  const instructionsRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [instructionsHeight, setInstructionsHeight] = useState(0);

  /* Handle Intruction position */
  const handleMoveUp = () => {
    //const contentHeight = instructionsRef.current.scrollHeight;
    setInstructionsHeight(-500);
  };

  /* Handle Intruction animation */
  useHandleInstructions(instructionsRef);

  return (
    <GameStatesContext.Provider
      value={{
        handleMoveUp,
        container,
        isPortrait,
        setIsPortrait,
        containerStyle,
        score,
        setScore,
        start,
        setStart,
        remainingLife,
        setRemainingLife,
        ballColor,
        setBallColor,
        checkGameStatus,
        setCheckGameStatus,
        ballRef,
        topBlock,
        bottomBlock,
        interval,
        setInt,
        velocity,
        setVelocity,
        ballDimensions,
        setBallDimensions,
        containerDimensions,
        blockDimensions,
        topBlockPos,
        setTopBlockPos,
        bottomBlockPos,
        setBottomBlockPos,
        blockPositionStatus,
        setBlockPositionStatus,
        instructionsRef,
        isDown,
        setIsDown,
        instructionsHeight,
        setInstructionsHeight,
      }}
    >
      <div className="min-h-screen flex bg-blue-900 flex-col items-center justify-around ">
        {/* Heading */}
        <Heading />

        {/* Container */}
        <Main />

        {/* Control Panel */}
        <Control />
      </div>
    </GameStatesContext.Provider>
  );
};
