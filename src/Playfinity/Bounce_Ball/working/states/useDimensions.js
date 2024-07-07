import { useLayoutEffect, useState } from "react";

export default function useDimensions(ref, ballDimensions) {
  const [dimensions, setDimensions] = useState({});
  useLayoutEffect(() => {
    if (ref.current) {
      const { width, height, top, left, right, bottom } =
        ref.current.getBoundingClientRect();
      setDimensions({ width, height, top, left, right, bottom });
    }
  }, [ballDimensions, ref]);
  return dimensions;
}
