import React from 'react';
import Bracelet from "..//assets/bracelet.webp"

const ProductBracelet: React.FC = () => {
  return (
    <div className="bg-white flex justify-center items-center py-28 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-48 items-center">
        {/* Product Image */}
        <div className="w-full md:w-1/2 bg-gray-200 rounded-lg py-16 px-8 flex justify-center items-center">
          <img 
            src={Bracelet} 
            alt="White LED bracelet wristband" 
            className="max-w-full h-auto"
          />
        </div>
        
        {/* Product Info */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-6 pb-4 border-b border-gray-300">
            LED Bracelet
          </h1>
          
          <p className="text-lg mb-4 leading-relaxed">
            Our LED bracelets connect participants in an intuitive and visually striking way. 
            <span className="font-bold"> Programmable</span> to display 
            <span className="font-bold"> different colors</span>, they help people with shared 
            interests or groups identify each other effortlessly.
          </p>
          
          <p className="text-lg mb-6 leading-relaxed">
            Perfect for networking 
            <span className="font-bold"> events</span>, 
            <span className="font-bold"> concerts</span>, or 
            <span className="font-bold"> festivals</span>, these bracelets turn wearers into 
            active contributors to the event's atmosphere. Their 
            <span className="font-bold"> comfortable design</span> ensures an engaging, 
            dynamic experience for all.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Color-coded
            </button>
            <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Interactive networking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBracelet;