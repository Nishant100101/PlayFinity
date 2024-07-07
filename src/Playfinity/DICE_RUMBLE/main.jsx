import { useState } from "react";
import Dice from "./COMPONENTS/Dice/Dice";
import { Canvas } from "@react-three/fiber";
import { TbArrowsMove } from "react-icons/tb";
import { OrbitControls } from "@react-three/drei";
import Heading from "./COMPONENTS/Heading/Heading";
import Controls from "./COMPONENTS/CONTROLS/Control";

const Cube = () => {
  const [speed, setSpeed] = useState(0.1);
  const [rolling, setRolling] = useState(false);
  const [isMove, setIsMove] = useState(false);

  return (
    <div className="relative flex flex-col justify-center items-center h-screen bg-black">
      <Heading />
      <div className="w-96 h-96">
        <Canvas>
          <ambientLight intensity={6} />
          <Dice
            position={[-1.5, 0, 0]}
            rolling={rolling}
            setRolling={setRolling}
            speed={speed}
          />
          <Dice
            position={[1.5, 0, 0]}
            rolling={rolling}
            setRolling={setRolling}
            speed={speed}
          />
          {isMove && <OrbitControls />}
        </Canvas>
      </div>
      <TbArrowsMove
        className={`absolute top-28 left-1 active:w-10 active:h-10 cursor-move transform rotate-90 ${
          isMove ? "w-10 h-10 text-gray-300" : "text-white w-12 h-12"
        }`}
        title="Move/Zoom/Rotate"
        onClick={() => setIsMove(!isMove)}
      />

      <Controls
        setRolling={setRolling}
        setSpeed={setSpeed}
        speed={speed}
        setIsMove={setIsMove}
      />
    </div>
  );
};

export default Cube;
