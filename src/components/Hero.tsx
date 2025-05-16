import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import HeroVideo from "../assets/videos/background_video.mp4";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-[86vh] sm:h-screen overflow-hidden text-secondary"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#0D1821] opacity-5 z-10"></div>

      {/* Gradient fade effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1821]/30 to-[#0D1821] z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#0D1821]/30 to-[#0D1821] z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              className="mb-6 text-[3rem] font-bold leading-tight sm:text-[4.5rem]"
            >
              Its Not Just A Product, Its An Experience
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="sm:mb-14 mb-10 text-2xl font-light sm:text-[2rem]"
            >
              Sync and light up the crowd with our customizable LED products
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
            >
              <Link
                to="/contact#contact"
                className="sm:px-9 px-8 py-3.5 sm:text-xl text-lg rounded-full bg-[#3CACD2] text-primary transition-all duration-200 hover:bg-[#4BC8D0] hover:outline hover:outline-[#3CACD2]/40 hover:outline-offset-[-1px]"
              >
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
