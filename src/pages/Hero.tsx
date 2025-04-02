import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#0D1821] opacity-50"></div>

      {/* Gradient fade effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1821]/30 to-[#0D1821]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#0D1821]/30 to-[#0D1821]"></div>
    </div>
  );
};

export default Hero;
