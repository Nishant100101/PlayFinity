import { useLayoutEffect, useState } from "react";

export default function useBlocksPositions(blockDimensions) {
  const [TopBlock, setTopBlock] = useState({});
  const [BottomBlock, setBottomBlock] = useState({});

  useLayoutEffect(() => {
    if (blockDimensions.BottomBlocks && blockDimensions.TopBlocks) {
      setBottomBlock({
        left: blockDimensions.BottomBlocks.left,
        right: blockDimensions.BottomBlocks.right,
        top: blockDimensions.BottomBlocks.top,
        bottom: blockDimensions.BottomBlocks.bottom,
        width: blockDimensions.BottomBlocks.width,
      });
      setTopBlock({
        left: blockDimensions.TopBlocks.left,
        right: blockDimensions.TopBlocks.right,
        top: blockDimensions.TopBlocks.top,
        bottom: blockDimensions.TopBlocks.bottom,
        width: blockDimensions.TopBlocks.width,
      });
    }
  }, [blockDimensions]);
  return [TopBlock, setTopBlock, BottomBlock, setBottomBlock];
}
