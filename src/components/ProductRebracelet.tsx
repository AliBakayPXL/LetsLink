import React from 'react';
import ReBracelet from "../assets/recharchable.png"

const ProductSmartTag: React.FC = () => {
  return (
    <div className="bg-white flex justify-center items-center py-28 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-48 items-center">
        {/* Product Image - Now on the left */}
        <div className="w-full md:w-1/2 bg-gray-200 rounded-lg p-8 flex justify-center items-center">
          <img 
            src={ReBracelet} 
            alt="White LED bracelet wristband" 
            className="max-w-full h-auto"
          />
        </div>
        
        {/* Product Info - Now on the right */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-6 pb-4 border-b border-gray-300">
            Rechargeable bracelets
          </h1>
          
          <p className="text-lg mb-4 leading-relaxed">
            Designed for sustainability, these bracelets offer the same vibrant LED features but with  
            <span className="font-bold"> reusable </span> longevity. Perfect for
            <span className="font-bold"> multi-day </span> events or 
            <span className="font-bold"> eco-conscious </span> brands.
          </p>
          
          <p className="text-lg mb-6 leading-relaxed">
            The rechargeable battery ensures reliable performance,
            <span className="font-bold"> eliminating waste </span> while keeping your event's energy vibrant.
            A smart choice for forward-thinking organizers
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Eco-friendly
            </button>
            <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Multi-day use
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSmartTag;