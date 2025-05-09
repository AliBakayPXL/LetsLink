import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import KleineLanyard from "../assets/kleinelanyard.png";
import RecharchableBrace from "../assets/recharchable.png";
import Bracelet from "../assets/wb-transparent-600x410-1.webp";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";

// Dummy data
const products = [
  {
    id: 1,
    tag: "Crowd Synchronization",
    title: "LED Bracelet",
    desc: "Light up your event with thousands of color-changing bracelets pulsing in unison.",
    image: Bracelet,
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

const visibleCards = 3;

const ProductsPreview: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const getCards = () => {
    const arr = [];
    for (let i = 0; i < visibleCards; i++) {
      arr.push(products[(index + i) % products.length]);
    }
    return arr;
  };

  const handleClick = (product: (typeof products)[0]) => {
    alert(`Ga naar product: ${product.title}`);
  };

  return (
    <section className="bg-[#f6fbfe] min-h-screen flex justify-center flex-col py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titel & subtitel */}
        <div className="mb-6">
          <div className="w-full text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Our products
            </h2>
            <p className="text-lg text-gray-500">
              Wearable Tech That Connects and Impresses
            </p>
          </div>
        </div>

        {/* Navigatieknoppen (alleen op desktop) */}
        <div className="hidden md:flex justify-end mb-6">
          <div className="flex gap-4">
            <button
              className="bg-[#111927] w-12 h-12 rounded-full shadow flex items-center justify-center hover:bg-black"
              onClick={handlePrev}
              aria-label="Previous"
            >
              <img src={ArrowLeft} alt="Previous" className="w-5 h-5" />
            </button>
            <button
              className="bg-[#111927] w-12 h-12 rounded-full shadow flex items-center justify-center hover:bg-black"
              onClick={handleNext}
              aria-label="Next"
            >
              <img src={ArrowRight} alt="Next" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex gap-8 w-full justify-center flex-wrap">
          {getCards().map((product) => (
            <div
              key={product.id}
              className="bg-[#111927] rounded-2xl p-8 w-80 h-96 flex-shrink-0 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => handleClick(product)}
            >
              <div className="flex justify-center mb-6">
                <img src={product.image} alt={product.title} className="h-24" />
              </div>
              <span
                className={`inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold ${product.tagColor} ${product.tagText}`}
              >
                {product.tag}
              </span>
              <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {product.title}
              </h3>
              <div className="w-16 h-1 bg-gray-700 rounded mb-4"></div>
              <p className="text-gray-300 text-sm">{product.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile View (Swiper) */}
        <div className="md:hidden w-full px-4 overflow-hidden">
          <Swiper
            slidesPerView={1.1}
            centeredSlides={true}
            initialSlide={1}
            spaceBetween={16}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            modules={[Pagination]}
            className="w-full"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="w-[80%]">
                <div
                  className="bg-[#111927] rounded-2xl p-8 h-96 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group"
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
                  <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {product.title}
                  </h3>
                  <div className="w-16 h-1 bg-gray-700 rounded mb-4"></div>
                  <p className="text-gray-300 text-sm">{product.desc}</p>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination mt-6"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
