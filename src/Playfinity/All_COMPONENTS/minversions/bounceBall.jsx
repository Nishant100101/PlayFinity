import { useState, useRef, useLayoutEffect } from "react";
const BounceBall = () => {
  const [BallColor, setBallColor] = useState("transparent");
  const container = useRef({});
  const ballRef = useRef(null);
  const topBlock = useRef(null);
  const bottomBlock = useRef(null);
  const [blockDimensions, setBlockDimensions] = useState({
    TopBlocks: {},
    BottomBlocks: {},
  });
  const [TopBlock, setTopBlock] = useState({});
  const [BottomBlock, setBottomBlock] = useState({});
  const [containerDimensions, setContainerDimensions] = useState({});
  const [ballDimensions, setBallDimensions] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    right: null,
    bottom: null,
  });
  const [velocity, setVelocity] = useState({
    dx: 1,
    dy: 2,
  });

  //Container Dimension
  useLayoutEffect(() => {
    const { width, height, top, left, right, bottom } =
      container.current.getBoundingClientRect();
    setContainerDimensions({ width, height, top, left, right, bottom });
  }, [ballDimensions]);

  //Blocks Dimension & Position
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

  //TOP & BOTTOM Block Positions & Dimensions
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

  //Block Color
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

    topBlock.current.style.backgroundColor = blockCollisionColor;

    bottomBlock.current.style.backgroundColor = blockCollisionColor;
  }, [TopBlock, BottomBlock]);

  //Collision Detection & Ball Movement
  //
  useLayoutEffect(() => {
    const wall_collision_colors = ["Red", "Blue", "Green", "Yellow"];
    const ball_collision_colors = ["red", "green", "orange", "white"];
    const wall_collision_color =
      wall_collision_colors[
        Math.floor(Math.random() * wall_collision_colors.length)
      ];
    const block_collision_color =
      ball_collision_colors[
        Math.floor(Math.random() * ball_collision_colors.length)
      ];

    const checkCollision = () => {
      const { top, left, right, bottom } =
        ballRef.current.getBoundingClientRect();

      // Check collision with top block
      if (
        left <= topBlock.current.getBoundingClientRect().right &&
        right >= topBlock.current.getBoundingClientRect().left &&
        bottom >= topBlock.current.getBoundingClientRect().top &&
        top <= topBlock.current.getBoundingClientRect().bottom &&
        velocity.dy < 1
      ) {
        setBallColor(block_collision_color);
        setVelocity((prevVelocity) => ({
          ...prevVelocity,
          dy: -prevVelocity.dy,
        }));

        setTimeout(() => {
          if (topBlock.current) {
            topBlock.current.style.transition = `height 2s`;
            topBlock.current.style.height =
              parseInt(topBlock.current.style.height / 2) + "px";
            topBlock.current.style.backgroundColor = block_collision_color;
          }
        }, 100);

        setTimeout(() => {
          if (topBlock.current) {
            topBlock.current.style.transition = `height 2s`;
            topBlock.current.style.height = "";
            topBlock.current.style.backgroundColor = "";
          }
        }, 800);
      }
      // Check collision with bottom block
      if (
        left <= bottomBlock.current.getBoundingClientRect().right &&
        right >= bottomBlock.current.getBoundingClientRect().left &&
        top <= bottomBlock.current.getBoundingClientRect().bottom &&
        bottom >= bottomBlock.current.getBoundingClientRect().top &&
        velocity.dy > -1
      ) {
        setBallColor(block_collision_color);
        setVelocity((prevVelocity) => ({
          ...prevVelocity,
          dy: -prevVelocity.dy,
        }));

        if (velocity.dx === 0) {
          setVelocity((prevVelocity) => ({
            dx: 2 + prevVelocity.dx,
            dy: 1 + prevVelocity.dy,
          }));
        }
        if (velocity.dy === 0) {
          setVelocity((prevVelocity) => ({
            dx: 1 + prevVelocity.dx,
            dy: 2 + prevVelocity.dy,
          }));
        }

        setTimeout(() => {
          if (bottomBlock.current) {
            bottomBlock.current.style.transition = `height 2s`;
            bottomBlock.current.style.height =
              parseInt(bottomBlock.current.style.height / 2) + "px";
            bottomBlock.current.style.backgroundColor = block_collision_color;
          }
        }, 100);
        setTimeout(() => {
          if (bottomBlock.current) {
            bottomBlock.current.style.transition = `height 2s`;
            bottomBlock.current.style.height = "";
            bottomBlock.current.style.backgroundColor = "";
          }
        }, 800);
      }

      // Check collision with top wall
      if (top <= containerDimensions.top && velocity.dy < 0) {
        setBallColor(wall_collision_color);
        setVelocity((prevVelocity) => ({
          ...prevVelocity,
          dy: -prevVelocity.dy,
        }));
      }
      // Check collision with bottom wall
      if (bottom >= containerDimensions.bottom && velocity.dy > 0) {
        setBallColor(wall_collision_color);
        setVelocity((prevVelocity) => ({
          ...prevVelocity,
          dy: -prevVelocity.dy,
        }));
      }
      // Check collision with left wall
      if (left <= containerDimensions.left && velocity.dx < 0) {
        setBallColor(wall_collision_color);
        setVelocity((prevVelocity) => ({
          ...prevVelocity,
          dx: -prevVelocity.dx,
        }));
      }
      // Check collision with right wall
      if (
        right >= containerDimensions.left + containerDimensions.width &&
        velocity.dx > 0
      ) {
        setBallColor(wall_collision_color);
        setVelocity((prevVelocity) => ({
          ...prevVelocity,
          dx: -prevVelocity.dx,
        }));
      }
      if (velocity.dx === 0 || velocity.dy === 0) {
        setVelocity((prevVelocity) => ({
          ...prevVelocity,
          dx: 20 + prevVelocity.dx,
        }));
      }
    };

    const animate = () => {
      checkCollision();
      setBallDimensions((prevDimensions) => ({
        ...prevDimensions,
        left: prevDimensions.left + velocity.dx,
        top: prevDimensions.top + velocity.dy,
      }));
    };

    const animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  });

  return (
    <div className="w-full select-none h-full items-center flex justify-center">
      <div
        ref={container}
        className="relative bg-gray-900 w-4/5 h-3/5 rounded-xl flex z-30 flex-col justify-center overflow-hidden"
      >
        {/* Top Block */}
        <div className="w-full flex justify-start">
          <div
            className="inline-block w-10 bg-blue-700 z-50 h-5 shadow-sky-100 rounded-b-xl shadow-md  absolute top-0"
            ref={topBlock}
          ></div>
        </div>

        {/* Ball */}
        <div
          ref={ballRef}
          className=" bg-red-500 absolute z-40 rounded-full flex justify-center text-white p-3 font-bold text-xl items-center shadow-lg shadow-black"
          style={{
            backgroundColor: `${BallColor}`,
            textShadow: "2px 2px 1px black",
            left: `${ballDimensions.left}px`,
            top: `${ballDimensions.top}px`,
          }}
        ></div>

        {/*  Bottom Block */}
        <div className="w-full flex justify-center">
          <div
            className="inline-block bg-blue-700 z-50 w-10 h-5 shadow-sky-100 rounded-t-xl shadow-md absolute bottom-0 "
            ref={bottomBlock}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BounceBall;
