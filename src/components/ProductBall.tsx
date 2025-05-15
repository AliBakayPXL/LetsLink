import React from "react";
import Ball from "../assets/photos/productledball.webp";

const ProductSmartTag: React.FC = () => {
  return (
    <div
      id="led-ball"
      className="scroll-mt-16 bg-white flex justify-center items-center py-12 md:py-16 px-4"
    >
      <div className="max-w-6xl w-full">
        {/* Mobile layout - Image on top */}
        <div className="flex flex-col md:hidden gap-6">
          <div className="w-full bg-gray-200 rounded-lg py-8 px-4 flex justify-center items-center">
            <img src={Ball} alt="LED-ball" className="max-w-full h-auto" />
          </div>

          <div className="w-full px-2">
            <h1 className="text-3xl font-semibold mb-4 pb-2 border-b border-gray-300">
              LED-Ball
            </h1>

            <p className="text-base mb-3 leading-relaxed">
              Designed for sustainability, these bracelets offer the same
              vibrant LED features but with
              <span className="font-bold"> reusable </span> longevity. Perfect
              for
              <span className="font-bold"> multi-day </span> events or
              <span className="font-bold"> eco-conscious </span> brands.
            </p>

            <p className="text-base mb-4 leading-relaxed">
              The rechargeable battery ensures reliable performance,
              <span className="font-bold"> eliminating waste </span> while
              keeping your event's energy vibrant. A smart choice for
              forward-thinking organizers
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Colourfull
              </button>
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Bouncy
              </button>
            </div>
          </div>
        </div>

        {/* Desktop layout - Image on left */}
        <div className="hidden md:flex flex-row gap-16 lg:gap-20 items-center">
          <div className="w-1/2 bg-gray-200 rounded-lg py-8 px-4 flex justify-center items-center">
            <img src={Ball} alt="LED-Ball" className="max-w-full h-auto" />
          </div>

          <div className="w-1/2 px-4 py-8">
            <h1 className="text-4xl font-semibold mb-4 pb-2 border-b border-gray-300">
              LED-Ball
            </h1>

            <p className="text-lg mb-3 leading-relaxed">
              Designed for sustainability, these bracelets offer the same
              vibrant LED features but with
              <span className="font-bold"> reusable </span> longevity. Perfect
              for
              <span className="font-bold"> multi-day </span> events or
              <span className="font-bold"> eco-conscious </span> brands.
            </p>

            <p className="text-lg mb-4 leading-relaxed">
              The rechargeable battery ensures reliable performance,
              <span className="font-bold"> eliminating waste </span> while
              keeping your event's energy vibrant. A smart choice for
              forward-thinking organizers
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Colourfull
              </button>
              <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Bouncy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSmartTag;
