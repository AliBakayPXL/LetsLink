import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


interface ExperienceCardProps {
  imageUrl: string;
  title: string;
  description: string;
  isActive?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  imageUrl,
  title,
  description,
  isActive = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const shouldShowDescription =
    (isMobile && isActive) || (!isMobile && isHovered);

  const contentVariants = {
    default: { y: 0 },
    hover: { y: description ? -10 : 0 },
  };

  const descriptionVariants = {
    default: { opacity: 0, height: 0 },
    hover: {
      opacity: 1,
      height: "auto",
      transition: { opacity: { duration: 0.4, ease: "easeInOut" } },
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
      className="relative w-full h-[24rem] sm:h-[26rem] md:h-[24rem] lg:h-[22rem] rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="default"
      animate={shouldShowDescription ? "hover" : "default"}
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
        transition={{ duration: 0.3 }}
        initial="default"
        animate={shouldShowDescription ? "hover" : "default"}
      />

      {/* Content */}
      <motion.div
        className="relative h-full flex flex-col justify-end p-4 sm:p-6"
        variants={contentVariants}
        transition={{ duration: 0.3 }}
        initial="default"
        animate={shouldShowDescription ? "hover" : "default"}
      >
        <h3 className="text-white text-lg sm:text-xl font-bold">{title}</h3>

        {description && (
          <motion.div
            variants={descriptionVariants}
            transition={{ duration: 0.2 }}
            initial="default"
            animate={shouldShowDescription ? "hover" : "default"}
          >
            <div className="w-full h-[1px] bg-[#3CACD2] my-2 sm:my-3" />
            <p className="text-white text-sm sm:text-base leading-6">
              {description}
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
