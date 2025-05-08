import React from 'react';

const ProductHero: React.FC = () => {
  return (
    <div id="hero" className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Transform events with smart wearables that spark connections, enable seamless access, and create immersive experiences-all sustainably powered.
        </p>
      </div>
    </div>
  );
};

export default ProductHero;