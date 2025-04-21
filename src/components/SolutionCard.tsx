import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

interface SolutionCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const contentVariants = {
    default: {
      y: 0,
    },
    hover: {
      y: description ? -10 : 0,
    },
  };

  const descriptionVariants = {
    default: {
      opacity: 0,
      height: 0,
    },
    hover: {
      opacity: [0, 1],
      height: "auto",
      transition: {
        opacity: {
          duration: 0.4,
          ease: "easeInOut",
        },
      },
    },
  };

  const overlayVariants = {
    default: {
      background:
        "linear-gradient(to top, rgba(13, 24, 33, 0.9) 20%, transparent 60%)",
    },
    hover: {
      background:
        "linear-gradient(to top, rgba(13, 24, 33, 0.9) 40%, transparent 100%)",
    },
  };

  return (
    <motion.div
      className="relative w-60 h-[22rem] rounded-[var(--border-radius)] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="default"
      animate={isHovered ? "hover" : "default"}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        variants={overlayVariants}
        initial="default"
        animate={isHovered ? "hover" : "default"}
        transition={{ duration: 0.3 }}
      />

      {/* Content Container */}
      <motion.div
        className="relative h-full flex flex-col justify-end p-6"
        variants={contentVariants}
        initial="default"
        animate={isHovered ? "hover" : "default"}
        transition={{ duration: 0.3 }}
      >
        {/* Title - Always Visible */}
        <h3 className="text-white font-bold">{title}</h3>

        {/* Description - Visible on Hover */}
        {description && (
          <motion.div
            variants={descriptionVariants}
            initial="default"
            animate={isHovered ? "hover" : "default"}
            transition={{ duration: 0.2 }}
          >
            <div className="w-full h-[0.5px] bg-[#3CACD2] my-3" />
            <p className="text-white text-xs leading-5">{description}</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default SolutionCard;
