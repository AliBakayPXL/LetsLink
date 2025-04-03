import { Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

type InitialPositions = {
  [key in Direction]: {
    x?: number;
    y?: number;
  };
};

const initialPositions: InitialPositions = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

export const fadeIn = (direction: Direction, delay: number): Variants => {
  const initialPosition = initialPositions[direction] || { x: 0, y: 0 };

  return {
    hidden: {
      ...initialPosition,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const fadeInPlace = (delay: number): Variants => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        delay,
        ease: "easeInOut",
      },
    },
  };
};
