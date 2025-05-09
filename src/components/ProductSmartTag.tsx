import React from 'react';
import SmartTag from "../assets/Lanyard.png"

const ProductSmartTag: React.FC = () => {
  return (
    <div id="smart-tag" className="scroll-mt-38 bg-white flex justify-center items-center py-28 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-48 items-center">
        {/* Product Info - Now on the left */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-6 pb-4 border-b border-gray-300">
            SMART Tags 
          </h1>
          
          <p className="text-lg mb-4 leading-relaxed">
            Embedded with  
            <span className="font-bold"> NFC/RFID technology </span> , these tags enable cashless payments,
            access control, and ticket scanning-all in one sleek device. Streamline events with cutting-edge convenience
          </p>
          
          <p className="text-lg mb-6 leading-relaxed">
            Ideal for festivals or conferences, they replace paper
            <span className="font-bold"> tickets</span> and 
            <span className="font-bold"> tokens</span>, reducing clutter while enhancing
            <span className="font-bold"> security</span> and attendee flow
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Contactless tech
            </button>
            <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              All-in-one
            </button>
          </div>
        </div>
        
        {/* Product Image - Now on the right */}
        <div className="w-full md:w-1/2 bg-gray-200 rounded-lg p-8 flex justify-center items-center">
          <img 
            src={SmartTag} 
            alt="White LED bracelet wristband" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSmartTag;