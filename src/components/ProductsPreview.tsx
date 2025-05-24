import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Lanyard from "../assets/photos/product_nylon.webp";
import RecharchableBrace from "../assets/photos/productrebracelet.webp";
import Bracelet from "../assets/wb-transparent-600x410-1.webp";
import SmartTag from "../assets/photos/productsmarttag.webp";
import Ball from "../assets/photos/productledball.webp";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";

const products = [
  {
    id: 1,
    tag: "Crowd Synchronization",
    title: "LED Bracelet",
    desc: "Connect guests with vibrant, color-coded bracelets that sync with music and group identity. Perfect for networking, concerts, and festivals. Comfortable, intuitive, and built for engagement.",
    image: Bracelet,
    tagColor: "bg-blue-900",
    tagText: "text-blue-300",
    path: "#led-bracelet",
  },
  {
    id: 2,
    tag: " Immersive Light Shows ",
    title: "Nylon LED Bracelet",
    desc: "A durable, stylish bracelet with a nylon strap and quick-release buckle—perfect for events and group activities. Offers bright, customizable LED lighting and is available as either rechargeable or single-use.",
    image: Lanyard,
    tagColor: "bg-blue-900",
    tagText: "text-blue-300",
    path: "#led-nylon",
  },
  {
    id: 3,
    tag: "Sustainable Solution",
    title: "Rechargeable Bracelet",
    desc: "Eco-friendly and built to last, these rechargeable bracelets offer dynamic lighting with sustainable impact. Perfect for multi-day or green-focused events.",
    image: RecharchableBrace,
    tagColor: "bg-blue-900",
    tagText: "text-blue-300",
    path: "#led-rebracelet",
  },
  {
    id: 4,
    tag: "Event Essentials",
    title: "Smart Tag",
    desc: "Powered by NFC/RFID, this sleek tag enables cashless payments, ticket scans, and access control in one. Replace paper tickets with seamless, secure tech.",
    image: SmartTag,
    tagColor: "bg-blue-900",
    tagText: "text-blue-300",
    path: "#smart-tag",
  },
  {
    id: 5,
    tag: "Eco-Friendly Glow",
    title: "Led-Ball",
    desc: "Sustainable and reusable, the LED Ball delivers vibrant lighting with minimal environmental impact. Ideal for multi-day events or eco-conscious brands.",
    image: Ball,
    tagColor: "bg-blue-900",
    tagText: "text-blue-300",
    path: "#led-ball",
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

  return (
    <section className="bg-[#f6fbfe] min-h-screen flex justify-center flex-col py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titel + navigatie */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              Our Products
            </h2>
            <p className="text-lg text-gray-500">
              Wearable Tech That Connects and Impresses
            </p>
          </div>
          <div className="hidden md:flex gap-4">
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

        {/* Desktop view */}
        <div className="hidden md:flex gap-8 w-full justify-center flex-wrap">
          {getCards().map((product) => (
            <Link
              key={product.id}
              to={`/products${product.path}`}
              className="bg-[#111927] rounded-2xl p-8 w-80 h-96 flex-shrink-0 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group"
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
            </Link>
          ))}
        </div>

        {/* Mobile view (Swiper) */}
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
                <Link
                  to={`/products${product.path}`}
                  className="bg-[#111927] rounded-2xl p-8 h-96 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group block"
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
                </Link>
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
