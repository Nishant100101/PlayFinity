import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaInfoCircle,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { useContext } from "react";
import { GameStatesContext } from "../main";

const Main = () => {
  const {
    handleMoveUp,
    container,
    containerStyle,
    score,
    setScore,
    start,
    setStart,
    remainingLife,
    setRemainingLife,
    ballColor,
    checkGameStatus,
    setCheckGameStatus,
    ballRef,
    topBlock,
    bottomBlock,
    ballDimensions,
    topBlockPos,
    bottomBlockPos,
    setBlockPositionStatus,
    instructionsRef,
    isDown,
    setIsDown,
    instructionsHeight,
  } = useContext(GameStatesContext);

  return (
    <div
      ref={container}
      style={containerStyle}
      className="relative ring-4 ring-blue-700 rounded-3xl max-h-fit shadow-inner shadow-black flex z-40 flex-col justify-center overflow-hidden bg-gray-900"
    >
      {/*    INSTRUCTION */}
      <div
        className="absolute bg-white w-full flex justify-center items-center h-full z-40"
        style={{
          transform: isDown
            ? `translateY(0px)`
            : `translateY(${instructionsHeight}px)`,
          transition: "transform 0.5s",
        }}
        ref={instructionsRef}
      >
        <div
          className="flex justify-start flex-col items-center p-5"
          onClick={() => {
            handleMoveUp();
            setCheckGameStatus(false);
            setScore(0);
            setRemainingLife(10);
            setIsDown(false);
          }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="w-fit h-fit rounded-full text-2xl text-gray-300  shadow-black shadow-md inline-flex justify-center items-center ">
              <FaInfoCircle className="inline-block" />
            </span>{" "}
            Instructions:
          </h2>
          <ul className="hidden sm:block text-base list-disc ml-6">
            <li className="mb-4">
              Press the{" "}
              <span className="w-fit h-fit rounded-lg text-white shadow-white shadow-md inline-flex justify-center items-center bg-black px-3 py-1 ">
                <FaArrowUp className="inline-block" />
              </span>{" "}
              <span className="font-bold"> Up arrow key/Click TOP Block </span>
              to individually move <span className="font-bold">TOP Block </span>
              left and right.
            </li>
            <li className="mb-4">
              Press the{" "}
              <span className="w-fit h-fit rounded-lg text-white shadow-white shadow-md inline-flex justify-center items-center bg-black px-3 py-1 ">
                <FaArrowDown className="inline-block" />
              </span>{" "}
              <span className="font-bold">
                {" "}
                Down arrow key/Click BOTTOM Block{" "}
              </span>
              to individually Move{" "}
              <span className="font-bold"> Bottom Block </span> left and right.
            </li>
            <li className="mb-4">
              Press the{" "}
              <span className="w-fit h-fit rounded-lg text-white shadow-white shadow-md inline-flex justify-center items-center bg-black px-3 py-1 ">
                <FaArrowLeft className="inline-block" />
              </span>{" "}
              key to move the Blocks to the left.
            </li>
            <li className="mb-4">
              Press the{" "}
              <span className="w-fit h-fit rounded-lg text-white shadow-white shadow-md inline-flex justify-center items-center bg-black px-3 py-1 ">
                <FaArrowRight className="inline-block" />
              </span>{" "}
              key to move the Blocks to the right.
            </li>
            <li className="mb-4">
              Use{" "}
              <span className="text-black font-extrabold text-2xl">
                {" "}
                &#8722; &#43;{" "}
              </span>
              Buttons to move the{" "}
              <span className="font-bold">TOP & BOTTOM </span> blocks
              simultaneously.
            </li>
            <li className="mb-4">
              If the Ball collide with the{" "}
              <span className="font-bold">TOP or BOTTOM </span> wall you will
              Lose points <span className="text-yellow-500">&#x1F4B0;</span>
              and a Life <span className="text-red-500">&hearts;</span> .
            </li>
          </ul>
          <ul className="sm:hidden text-sm list-disc ml-4">
            <li className="mb-2">
              Press <span className="font-bold">Up arrow/Click TOP Block</span>{" "}
              to move the TOP Block left and right.
            </li>
            <li className="mb-2">
              Press{" "}
              <span className="font-bold">Down arrow/Click BOTTOM Block</span>{" "}
              to move the Bottom Block left and right.
            </li>
            <li className="mb-2">
              Use <span className="font-bold">&#8722; &#43; Buttons</span> to
              move the TOP & BOTTOM blocks simultaneously.
            </li>
            <li className="mb-2">
              If the Ball collides with the{" "}
              <span className="font-bold">TOP or BOTTOM</span> wall, you will
              lose points <span className="text-yellow-500">&#x1F4B0;</span> and
              a Life <span className="text-red-500">&hearts;</span>.
            </li>
          </ul>
          <div>
            <span
              className="w-fit h-fit flex-col rounded-lg shadow-white shadow-md flex justify-center items-center px-3"
              style={{
                animation: "moveUpAndDown 1s infinite alternate",
              }}
            >
              <FaChevronUp />
              <FaChevronUp />
            </span>
          </div>
        </div>
      </div>
      {start === true && (
        <div className="w-full z-30 text-white absolute backdrop-blur-lg h-full flex font-extrabold  md:text-6xl max-md:text-2xl max-sm:text-xl justify-center items-center">
          <div className="flex fixed  rounded-2xl p-2 flex-col justify-center items-center ">
            <div
              onClick={() => {
                setCheckGameStatus(false);
                setScore(0);
                setRemainingLife(10);
                setStart(false);
              }}
              className="bg-sky-500 hover:bg-sky-600 ring-4 ring-sky-800 w-fit h-fit text-3xl px-2 py-3 shadow-xl shadow-black active:shadow-inner active:shadow-black rounded-3xl text-black font-bold my-3"
            >
              Start
            </div>
          </div>
        </div>
      )}

      {/*  Game Check */}
      {!start && checkGameStatus === true && (
        <div className="w-full z-20 shadow-inner shadow-black text-white absolute backdrop-blur-md h-full flex font-extrabold  md:text-6xl max-md:text-2xl max-sm:text-xl justify-center items-center">
          <div className="flex fixed  rounded-2xl p-2 flex-col justify-center items-center ">
            <h1>Game Over</h1>
            <div
              onClick={() => {
                setCheckGameStatus(false);
                setScore(0);
                setRemainingLife(10);
              }}
              className="bg-sky-500 hover:bg-sky-600 ring-4 ring-sky-800 w-fit h-fit text-xl px-2 py-3 shadow-xl shadow-black active:shadow-inner active:shadow-black rounded-3xl text-black font-bold my-3"
            >
              Restart
            </div>
          </div>
        </div>
      )}

      {/* Score Board */}
      <div className="w-full absolute bg-blue-500 h-full flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-800 shadow-inner max-md:py-2 max-md:px-2 shadow-black text-white py-4 px-8 rounded-lg">
            <div
              className="flex items-center justify-between"
              onClick={() => setIsDown(true)}
            >
              <div className="flex flex-row items-center justify-evenly w-full">
                <div className="font-bold text-xl text-gray-500">
                  Instructions :
                </div>
                <div className="text-xl">
                  {"   "}
                  <span
                    className="w-fit h-fit  rounded-lg py-2 px-1 text-red-500 text-xl  inline-flex justify-center items-center "
                    style={{
                      animation: "moveUpAndDown 1s infinite alternate",
                    }}
                  >
                    <FaChevronDown />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="font-bold text-xl">Total Score :</div>

              <div className="text-xl ml-9">{score}</div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="font-bold text-xl">Remaining Life :</div>
              <div className="text-xl ml-9">{remainingLife}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Block */}
      <div className="flex justify-center items-center w-full h-full">
        <div
          className="inline-block w-48 bg-blue-700 hover:bg-red-500 max-md:w-14 max-md:h-5 z-20 h-9 shadow-sky-100 rounded-b-xl shadow-md  absolute top-0"
          ref={topBlock}
          style={{ left: `${topBlockPos.left}px` }}
          onClick={() => {
            setBlockPositionStatus((prevState) => ({
              ...prevState,
              topBlock: true,
              bottomBlock: false,
            }));
          }}
        ></div>
      </div>

      {/* Ball */}
      <div
        ref={ballRef}
        className="w-5 h-5 absolute z-10 bg-black rounded-full flex justify-center text-white p-5 font-bold text-xl items-center shadow-lg shadow-black"
        style={{
          backgroundColor: `${ballColor}`,
          textShadow: "2px 2px 1px black",
          left: `${ballDimensions.left}px`,
          top: `${ballDimensions.top}px`,
        }}
      >
        {score}
      </div>

      {/*  Bottom Block */}
      <div
        className="inline-block bg-blue-700 z-20 w-48 max-md:w-14 max-md:h-5 h-9 shadow-sky-100 rounded-t-xl shadow-md absolute bottom-0 "
        ref={bottomBlock}
        style={{
          left: `${bottomBlockPos.left}px`,
        }}
        onClick={() => {
          setBlockPositionStatus((prevState) => ({
            ...prevState,
            topBlock: false,
            bottomBlock: true,
          }));
        }}
      ></div>
    </div>
  );
};

export default Main;
