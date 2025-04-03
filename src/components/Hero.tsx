import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#0D1821] opacity-50"></div>

      {/* Gradient fade effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1821]/30 to-[#0D1821]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#0D1821]/30 to-[#0D1821]"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-[3rem] font-bold leading-tight  sm:text-[4.5rem]">
              Rent LED Bracelets for Events
            </h1>
            <p className="sm:mb-14 mb-10 text-2xl font-light sm:text-[2rem]">
              Sync and light up the crowd with our customizable LED bracelets.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
