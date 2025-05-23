import React from "react";
import ReBracelet from "../assets/photos/productrebracelet.webp";

const ProductSmartTag: React.FC = () => {
  return (
    <div
      id="led-rebracelet"
      className="scroll-mt-16 bg-white flex justify-center items-center py-12 md:py-16 px-4"
    >
      <div className="max-w-6xl w-full">
        {/* Mobile layout - Image on top */}
        <div className="flex flex-col md:hidden gap-6">
          <div className="w-full bg-[#131c23] rounded-lg py-8 px-4 flex justify-center items-center">
            <img
              src={ReBracelet}
              alt="White LED bracelet wristband"
              className="max-w-full h-auto"
            />
          </div>

          <div className="w-full px-2">
            <h1 className="text-3xl font-semibold mb-4 pb-2 border-b border-gray-300">
              Rechargeable bracelets
            </h1>

            <p className="text-base mb-3 leading-relaxed">
              Sustainable and powerful. These rechargeable bracelets offer the
              same vibrant LED brilliance as our classic versions, designed for
              <span className="font-bold"> multiple uses. </span> Perfect for
              <span className="font-bold"> multi-day </span> events or
              <span className="font-bold"> eco-friendly </span> aiming to reduce
              waste. Keep your event shining bright without compromise.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Eco-friendly
              </button>
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Reusable
              </button>
            </div>
          </div>
        </div>

        {/* Desktop layout - Image on left */}
        <div className="hidden md:flex flex-row gap-16 lg:gap-20 items-center">
          <div className="w-1/2 bg-[#131c23] rounded-lg py-8 px-4 flex justify-center items-center">
            <img
              src={ReBracelet}
              alt="White LED bracelet wristband"
              className="max-w-full h-auto"
            />
          </div>

          <div className="w-1/2 px-4">
            <h1 className="text-4xl font-semibold mb-4 pb-2 border-b border-gray-300">
              Rechargeable Bracelets
            </h1>

            <p className="text-lg mb-3 leading-relaxed">
              Sustainable and powerful. These rechargeable bracelets offer the
              same vibrant LED brilliance as our classic versions, designed for
              <span className="font-bold"> multiple uses. </span> Perfect for
              <span className="font-bold"> multi-day </span> events or
              <span className="font-bold"> eco-friendly </span> aiming to reduce
              waste. Keep your event shining bright without compromise.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Eco-friendly
              </button>
              <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Reusable
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSmartTag;
