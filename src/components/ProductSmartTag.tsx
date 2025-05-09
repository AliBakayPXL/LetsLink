import React from 'react';
import SmartTag from "../assets/photos/productsmarttag.png"

const ProductSmartTag: React.FC = () => {
  return (
    <div id="smart-tag" className="scroll-mt-16 bg-white flex justify-center items-center py-12 md:py-16 px-4">
      <div className="max-w-6xl w-full">
        {/* Mobile layout - Image on top */}
        <div className="flex flex-col md:hidden gap-6">
          <div className="w-full bg-gray-200 rounded-lg py-8 px-4 flex justify-center items-center">
            <img 
              src={SmartTag} 
              alt="Smart tag" 
              className="max-w-full h-auto"
            />
          </div>
          
          <div className="w-full px-2">
            <h1 className="text-3xl font-semibold mb-4 pb-2 border-b border-gray-300">
              Smart tag
            </h1>
            
            <p className="text-base mb-3 leading-relaxed">
            Embedded with  
            <span className="font-bold"> NFC/RFID technology </span> , these tags enable cashless payments,
            access control, and ticket scanning-all in one sleek device. Streamline events with cutting-edge convenience
            </p>
            
            <p className="text-base mb-4 leading-relaxed">
            Ideal for festivals or conferences, they replace paper
            <span className="font-bold"> tickets</span> and 
            <span className="font-bold"> tokens</span>, reducing clutter while enhancing
            <span className="font-bold"> security</span> and attendee flow
            </p>
            
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Contactless tech
              </button>
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              All-in-one
              </button>
            </div>
          </div>
        </div>
        
        {/* Desktop layout - Image on right */}
        <div className="hidden md:flex flex-row gap-16 lg:gap-20 items-center">
          <div className="w-1/2 px-4 py-8">
            <h1 className="text-4xl font-semibold mb-4 pb-2 border-b border-gray-300">
              Smart tag
            </h1>
            
            <p className="text-lg mb-3 leading-relaxed">
            Embedded with  
            <span className="font-bold"> NFC/RFID technology </span> , these tags enable cashless payments,
            access control, and ticket scanning-all in one sleek device. Streamline events with cutting-edge convenience
            </p>
            
            <p className="text-lg mb-4 leading-relaxed">
            Ideal for festivals or conferences, they replace paper
            <span className="font-bold"> tickets</span> and 
            <span className="font-bold"> tokens</span>, reducing clutter while enhancing
            <span className="font-bold"> security</span> and attendee flow
            </p>
            
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Contactless tech
              </button>
              <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              All-in-one
              </button>
            </div>
          </div>
          
          <div className="w-1/2 bg-gray-200 rounded-lg py-8 px-4 flex justify-center items-center">
            <img 
              src={SmartTag} 
              alt="Smart tag" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSmartTag;