import { RiSpeedFill } from "react-icons/ri";

const Controls = ({ setRolling, setSpeed, speed, setIsMove }) => {
  const handleRoll = () => {
    setRolling(true);
    setIsMove(false);
    setTimeout(() => {
      setRolling(false);
    }, 2000);
  };
  const decreaseSpeed = () => {
    if (speed > 0.1) {
      setSpeed((prev) => prev - 0.1);
    }
  };

  return (
    <div className="absolute bottom-8 flex text-white items-center">
      <RiSpeedFill
        className={`text-white w-8 h-8 transform rotate-180 ${
          speed <= 0.1
            ? "opacity-50 cursor-not-allowed"
            : "cursor-grab active:-translate-x-2"
        }`}
        onClick={decreaseSpeed}
        title="Dec Speed"
      />
      <div
        className={`mx-4 w-fit font-bold text-xl active:shadow-none shadow-md shadow-black border-2 border-white text-white z-0 select-none relative cursor-pointer px-3 py-2 rounded-xl`}
        onClick={handleRoll}
      >
        ROLL
      </div>
      <RiSpeedFill
        className={`text-white cursor-grab active:translate-x-2 w-8 h-8 transform`}
        onClick={() => setSpeed((prev) => prev + 0.1)}
        title="Inc Speed"
      />
    </div>
  );
};

export default Controls;
