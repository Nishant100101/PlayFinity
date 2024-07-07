/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from "react";

const useHandleInstructions = (instructionsRef) => {
  useLayoutEffect(() => {
    const container = instructionsRef.current;
    const addAnimateClass = () => {
      container.classList.add("animate");
    };
    const removeAnimateClass = () => {
      container.classList.remove("animate");
    };
    const addTimeout = setTimeout(addAnimateClass, 100);
    const removeTimeout = setTimeout(removeAnimateClass, 10000);
    return () => {
      clearTimeout(addTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);
};

export default useHandleInstructions;
