import React from "react";
import SmartTag from "../assets/photos/productsmarttag.webp";

const ProductSmartTag: React.FC = () => {
  return (
    <div
      id="smart-tag"
      className="scroll-mt-16 bg-white flex justify-center items-center py-12 md:py-16 px-4"
    >
      <div className="max-w-6xl w-full">
        {/* Mobile layout - Image on top */}
        <div className="flex flex-col md:hidden gap-6">
          <div className="w-full bg-[#131c23] rounded-lg py-8 px-4 flex justify-center items-center">
            <img src={SmartTag} alt="Smart tag" className="max-w-full h-auto" />
          </div>

          <div className="w-full px-2">
            <h1 className="text-3xl font-semibold mb-4 pb-2 border-b border-gray-300">
              Smart Tag
            </h1>

            <p className="text-base mb-3 leading-relaxed">
              Packed with
              <span className="font-bold"> NFC/RFID technology </span> , our
              smart tags handle everything from cashless payments to secure
              access and ticket scanning. All in one tap. Ideal for festivals,
              conferences, and large-scale events, these tags streamline entry,
              reduce paper waste, and keep your event flowing smoothly.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Crowd Control
              </button>
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Data Collection
              </button>
            </div>
          </div>
        </div>

        {/* Desktop layout - Image on right */}
        <div className="hidden md:flex flex-row gap-16 lg:gap-20 items-center">
          <div className="w-1/2 px-4 py-8">
            <h1 className="text-4xl font-semibold mb-4 pb-2 border-b border-gray-300">
              Smart Tag
            </h1>

            <p className="text-lg mb-3 leading-relaxed">
              Packed with
              <span className="font-bold"> NFC/RFID technology </span> , our
              smart tags handle everything from cashless payments to secure
              access and ticket scanning. All in one tap. Ideal for festivals,
              conferences, and large-scale events, these tags streamline entry,
              reduce paper waste, and keep your event flowing smoothly.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Crowd Control
              </button>
              <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Data Collection
              </button>
            </div>
          </div>

          <div className="w-1/2 bg-[#131c23] rounded-lg py-8 px-4 flex justify-center items-center">
            <img src={SmartTag} alt="Smart tag" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSmartTag;
