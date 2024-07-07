/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from "react";

export default function useCollisionDetection(
  score,
  ballRef,
  topBlock,
  setscore,
  velocity,
  container,
  bottomBlock,
  setVelocity,
  setBallColor,
  remainingLife,
  blockDimensions,
  setremainingLife,
  setBallDimensions,
  setcheckGameStatus,
  containerDimensions
) {
  useLayoutEffect(() => {
    if (remainingLife === 0) {
      setcheckGameStatus(true);
    } else {
      const wall_collision_colors = ["Red", "Blue", "Green", "Yellow"];
      const block_collision_colors = ["Orange", "Purple"];
      const wall_collision_color =
        wall_collision_colors[
          Math.floor(Math.random() * wall_collision_colors.length)
        ];
      const block_collision_color =
        block_collision_colors[
          Math.floor(Math.random() * block_collision_colors.length)
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
          if (
            topBlock.current.style.backgroundColor ===
            ballRef.current.style.backgroundColor
          ) {
            if (score >= 0 && remainingLife >= 0) {
              setscore((prev) => prev + 4);
              setremainingLife((prev) => prev + 1);
            }
          } else {
            if (score >= 0 && remainingLife >= 0) {
              setscore((prev) => prev + 1);
            }
          }

          setVelocity((prevVelocity) => ({
            ...prevVelocity,
            dy: -prevVelocity.dy,
          }));
          setTimeout(() => {
            topBlock.current.style.transition = `height 2s`;
            topBlock.current.style.height =
              parseInt(topBlock.current.style.height / 2) + "px";
            topBlock.current.style.backgroundColor = block_collision_color;
          }, 100);
          setTimeout(() => {
            topBlock.current.style.transition = `height 2s`;
            topBlock.current.style.height = "";
            topBlock.current.style.backgroundColor = "";
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
          if (
            bottomBlock.current.style.backgroundColor ===
            ballRef.current.style.backgroundColor
          ) {
            if (score >= 0 && remainingLife >= 0) {
              setscore((prev) => prev + 4);
              setremainingLife((prev) => prev + 1);
            }
          } else {
            if (score >= 0 && remainingLife >= 0) {
              setscore((prev) => prev + 1);
            }
          }
          if (velocity.dx === 0) {
            setBallColor("white");
            setVelocity((prevVelocity) => ({
              dx: 2 + prevVelocity.dx,
              dy: 1 + prevVelocity.dy,
            }));
          }
          if (velocity.dy === 0) {
            setBallColor("gold");
            setVelocity((prevVelocity) => ({
              dx: 1 + prevVelocity.dx,
              dy: 2 + prevVelocity.dy,
            }));
          }
          setBallColor(block_collision_color);
          setTimeout(() => {
            bottomBlock.current.style.transition = `height 2s`;
            bottomBlock.current.style.height =
              parseInt(bottomBlock.current.style.height / 2) + "px";
            bottomBlock.current.style.backgroundColor = block_collision_color;
          }, 100);
          setTimeout(() => {
            bottomBlock.current.style.transition = `height 2s`;
            bottomBlock.current.style.height = "";
            bottomBlock.current.style.backgroundColor = "";
          }, 800);
        }
        // Check collision with top wall
        if (top <= containerDimensions.top && velocity.dy < 0) {
          setBallColor(wall_collision_color);
          setVelocity((prevVelocity) => ({
            ...prevVelocity,
            dy: -prevVelocity.dy,
          }));
          if (score > 0 && remainingLife > 0) {
            setscore((prevScore) => prevScore - 1);
            setremainingLife((prevLife) => prevLife - 1);
          } else if (score === 0 && remainingLife > 0) {
            setremainingLife((prevLife) => prevLife - 1);
          } else if (score >= 0 && remainingLife === 0) {
            setscore((prevScore) => prevScore - 1);
          }
        }

        // Check collision with bottom wall
        if (bottom >= containerDimensions.bottom && velocity.dy > 0) {
          setBallColor(wall_collision_color);
          setVelocity((prevVelocity) => ({
            ...prevVelocity,
            dy: -prevVelocity.dy,
          }));
          if (score > 0 && remainingLife > 0) {
            setscore((prevScore) => prevScore - 1);
            setremainingLife((prevLife) => prevLife - 1);
          } else if (score === 0 && remainingLife > 0) {
            setremainingLife((prevLife) => prevLife - 1);
          } else if (score > 0 && remainingLife === 0) {
            setscore((prevScore) => prevScore - 1);
          }
        }

        // Check collision with left wall
        if (left <= container.current.offsetLeft && velocity.dx < 0) {
          setBallColor(wall_collision_color);
          setVelocity((prevVelocity) => ({
            ...prevVelocity,
            dx: -prevVelocity.dx,
          }));
        }

        // Check collision with right wall
        if (
          right >= container.current.offsetLeft + containerDimensions.width &&
          velocity.dx > 0
        ) {
          setBallColor(wall_collision_color);
          setVelocity((prevVelocity) => ({
            ...prevVelocity,
            dx: -prevVelocity.dx,
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
    }
  }, [containerDimensions, blockDimensions, remainingLife, score]);
}
