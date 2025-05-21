import React from "react";

const ProductHero: React.FC = () => {
  return (
    <div id="hero" className="scroll-mt-24 w-full bg-white pt-14 pb-0 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Light up your event with smart wearables that spark real connections,
          enhance access, and deliver immersive experiences. All with a focus on
          sustainability. <br></br>
          <br></br> All our LED wearables offer the same powerful features,
          interchangeable across products. Each item can be fully custom-branded
          and is available in both rechargeable and non-rechargeable versions.
          Every product supports AI-powered matchmaking to connect your guests
          effortlessly.
        </p>
      </div>
    </div>
  );
};

export default ProductHero;
