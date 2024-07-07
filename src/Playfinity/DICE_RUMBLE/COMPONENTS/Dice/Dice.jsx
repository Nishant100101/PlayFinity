/* eslint-disable react-hooks/exhaustive-deps */
import F1 from "./Faces/F1.png";
import F2 from "./Faces/F2.png";
import F3 from "./Faces/F3.png";
import F4 from "./Faces/F4.png";
import F5 from "./Faces/F5.png";
import F6 from "./Faces/F6.png";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Dice = ({ position, rolling, setRolling, speed }) => {
  const mesh = useRef();
  const textures = useTexture([F1, F2, F3, F4, F5, F6]);

  const rotations = [
    [0, 0, 0],
    [0, Math.PI / 2, 0],
    [0, Math.PI, 0],
    [0, (3 * Math.PI) / 2, 0],
    [Math.PI / 2, 0, 0],
    [(3 * Math.PI) / 2, 0, 0],
  ];

  useFrame(() => {
    if (rolling) {
      mesh.current.rotation.x += speed;
      mesh.current.rotation.y += speed;
    }
  });

  const stopRolling = () => {
    const randomFace = Math.floor(Math.random() * 6);
    mesh.current.rotation.set(...rotations[randomFace]);
    setRolling(false);
  };

  useEffect(() => {
    if (!rolling) {
      stopRolling();
    }
  }, [rolling]);

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      {textures.map((texture, index) => (
        <meshStandardMaterial
          key={index}
          attach={`material-${index}`}
          map={texture}
        />
      ))}
    </mesh>
  );
};

export default Dice;
