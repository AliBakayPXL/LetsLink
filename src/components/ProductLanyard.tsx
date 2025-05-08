import React from 'react';
import Lanyard from "../assets/Lanyard.png"

const ProductLanyard: React.FC = () => {
  return (
    <div className="bg-white flex justify-center items-center py-28 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-48 items-center">
        {/* Product Info - Now on the left */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-6 pb-4 border-b border-gray-300">
            LED Lanyard
          </h1>
          
          <p className="text-lg mb-4 leading-relaxed">
            Combining practicality with modern style, our LED Lanyards feature  
            <span className="font-bold"> customizable colors </span> to distinguish groups or roles
            ideal for conferences or corporate events, they integrate seamlessly with  
            <span className="font-bold"> badge systems</span>.
          </p>
          
          <p className="text-lg mb-6 leading-relaxed">
            The built-in lighting ensures visibility in dim environments, enhancing both
            <span className="font-bold"> safety</span> and 
            <span className="font-bold"> aesthetics</span>. A sleek solution for organizers and attendees alike.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Badge-ready
            </button>
            <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Low-light visibility
            </button>
          </div>
        </div>
        
        {/* Product Image - Now on the right */}
        <div className="w-full md:w-1/2 bg-gray-200 rounded-lg p-8 flex justify-center items-center">
          <img 
            src={Lanyard} 
            alt="White LED bracelet wristband" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductLanyard;