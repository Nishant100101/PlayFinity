import "./styles/style.css";

const Memorybooster = () => {
  return (
    <div className="w-full select-none h-full flex justify-center items-center">
      <div className="w-2/3 h-2/3 grid-cols-2 grid p-2">
        <div className="w-full bg-white h-full shadow-md shadow-black card1"></div>
        <div className="w-full bg-white h-full shadow-md shadow-black card2"></div>
        <div className="w-full bg-white h-full shadow-md shadow-black card2"></div>
        <div className="w-full bg-white h-full shadow-md shadow-black card1"></div>
      </div>
    </div>
  );
};

export default Memorybooster;
