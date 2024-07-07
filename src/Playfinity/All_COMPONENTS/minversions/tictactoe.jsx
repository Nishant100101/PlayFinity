const TicTacToe = () => {
  return (
    <div className="w-full select-none h-full items-center flex justify-center">
      <div className="overflow-hidden shadow-black shadow-md w-3/5 h-3/5 border grid grid-cols-3 grid-rows-3 border-gray-300 rounded-md relative">
        <div className="border-b-2 flex justify-center bg-white items-center border-r-2 animate-diagonal-line border-black">
          X
        </div>
        <div className="border-b-2 flex justify-center bg-white items-center border-r-2 border-black">
          0
        </div>
        <div className="border-b-2 flex justify-center bg-white items-center border-black">
          X
        </div>
        <div className="border-b-2 flex justify-center bg-white items-center border-r-2 border-black">
          0
        </div>
        <div className="border-b-2 flex justify-center bg-white items-center border-r-2 border-black animate-diagonal-line">
          X
        </div>
        <div className="border-b-2 flex justify-center bg-white items-center animate-diagonal-line border-black">
          0
        </div>
        <div className="border-r-2 flex bg-white justify-center items-center border-black">
          X
        </div>
        <div className="border-r-2 flex bg-white justify-center items-center border-black ">
          O
        </div>
        <div className="flex justify-center bg-white items-center ">X</div>
        <div className="diagonal-line"></div>
      </div>
    </div>
  );
};

export default TicTacToe;
