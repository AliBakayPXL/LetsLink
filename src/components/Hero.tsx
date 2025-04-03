import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Hero = () => {
  return (
    <div className="relative h-[86vh] sm:h-screen bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#0D1821] opacity-50"></div>

      {/* Gradient fade effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1821]/30 to-[#0D1821]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#0D1821]/30 to-[#0D1821]"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center ">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              className="mb-6 text-[3rem] font-bold leading-tight  sm:text-[4.5rem]"
            >
              Rent LED Bracelets for Events
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="sm:mb-14 mb-10 text-2xl font-light sm:text-[2rem]"
            >
              Sync and light up the crowd with our customizable LED bracelets.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
            >
              <Link to="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
