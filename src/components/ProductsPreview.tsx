import React, { useState } from "react";
import KleineLanyard from "../assets/kleinelanyard.png";
import RecharchableBrace from "../assets/recharchable.png";
import Bracelet from "../assets/wb-transparent-600x410-1.webp";

// Dummy data – vervang door jouw eigen producten
const products = [
  {
    id: 1,
    tag: "Crowd Synchronization",
    title: "LED Bracelet",
    desc: "Light up your event with thousands of color-changing bracelets pulsing in unison.",
    image: Bracelet, // Zet hier je eigen plaatje!
    tagColor: "bg-blue-900",
    tagText: "text-blue-300",
  },
  {
    id: 2,
    tag: "AI Networking",
    title: "Smart Lanyard",
    desc: "Color-matching tech helps attendees connect effortlessly at conferences and meetups.",
    image: KleineLanyard,
    tagColor: "bg-blue-900",
    tagText: "text-blue-300",
  },
  {
    id: 3,
    tag: "Sustainable Solution",
    title: "Rechargeable Band",
    desc: "Eco-friendly wearable tech designed for repeated use across multiple events.",
    image: RecharchableBrace,
    tagColor: "bg-blue-900",
    tagText: "text-blue-300",
  },
];

const visibleCards = 3; // Toon er 3 naast elkaar

const ProductsPreview: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  // Voor infinite loop (carousel effect)
  const getCards = () => {
    const arr = [];
    for (let i = 0; i < visibleCards; i++) {
      arr.push(products[(index + i) % products.length]);
    }
    return arr;
  };

  // Ga naar specifieke product/sectie
  const handleClick = (product: any) => {
    // Vervang door jouw navigatie
    alert(`Ga naar product: ${product.title}`);
  };
  return (
    <section className="bg-[#f6fbfe] h-screen flex justify-center flex-col">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Our products</h2>
        <p className="text-lg text-gray-500 mb-10">
          Wearable Tech That Connects and Impresses
        </p>
        <div className="relative flex items-center">
          {/* Carousel controller - prev */}
          <button
            className="absolute -left-10 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <span className="text-2xl">&#8592;</span>
          </button>
          {/* Carousel */}
          <div className="flex gap-8 w-full justify-center">
            {getCards().map((product) => (
              <div
                key={product.id}
                className="bg-[#111927] rounded-2xl p-8 w-80 flex-shrink-0 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => handleClick(product)}
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-24"
                  />
                </div>
                <span
                  className={`inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold ${product.tagColor} ${product.tagText}`}
                >
                  {product.tag}
                </span>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h3>
                <div className="w-16 h-1 bg-gray-700 rounded mb-4"></div>
                <p className="text-gray-300 text-sm">{product.desc}</p>
              </div>
            ))}
          </div>
          {/* Carousel controller - next */}
          <button
            className="absolute -right-10 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
            onClick={handleNext}
            aria-label="Next"
          >
            <span className="text-2xl">&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
