/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useLayoutEffect } from "react";

const useBlocksColor = (TopBlock, BottomBlock, topBlock, bottomBlock) => {
  const [blockPositionStatus, setBlockPositionStatus] = useState({
    topBlock: false,
    bottomBlock: false,
  });
  useLayoutEffect(() => {
    const colors = [
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Indigo",
      "Violet",
      "Silver",
    ];
    const blockCollisionColor =
      colors[Math.floor(Math.random() * colors.length)];
    if (blockPositionStatus.topBlock) {
      topBlock.current.style.backgroundColor = blockCollisionColor;
    }
    if (blockPositionStatus.bottomBlock) {
      bottomBlock.current.style.backgroundColor = blockCollisionColor;
    }
  }, [TopBlock, BottomBlock]);
  return [blockPositionStatus, setBlockPositionStatus];
};

export default useBlocksColor;
