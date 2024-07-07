import { useLayoutEffect, useState } from "react";

export default function useBlocksDimensions(topBlock, bottomBlock) {
  const [blockDimensions, setBlockDimensions] = useState({
    TopBlocks: {},
    BottomBlocks: {},
  });
  useLayoutEffect(() => {
    const TopBlock = topBlock.current.getBoundingClientRect();
    const BottomBlock = topBlock.current.getBoundingClientRect();
    const topBD = {
      width: TopBlock.width,
      height: TopBlock.height,
      top: TopBlock.top,
      left: TopBlock.left,
      right: TopBlock.right,
      bottom: TopBlock.bottom,
    };
    const bottomBD = {
      width: BottomBlock.width,
      height: BottomBlock.height,
      top: BottomBlock.top,
      left: BottomBlock.left,
      right: BottomBlock.right,
      bottom: BottomBlock.bottom,
    };
    setBlockDimensions({
      TopBlocks: topBD,
      BottomBlocks: bottomBD,
    });
  }, [topBlock, bottomBlock]);
  return blockDimensions;
}
