import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const ExperiencesPreview = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const solutions = [
    {
      imageUrl: "images/letslink_1.webp",
      title: "Corporate Events",
      description:
        "Light up your event with thousands of color-changing bracelets pulsing in unison.",
    },
    {
      imageUrl: "images/letslink_2.webp",
      title: "Sporting Events",
      description:
        "Light up your event with thousands of color-changing bracelets pulsing in unison.",
    },
    {
      imageUrl: "images/letslink_3.webp",
      title: "Networking Events",
      description:
        "Light up your event with thousands of color-changing bracelets pulsing in unison.",
    },
    {
      imageUrl: "images/letslink_4.webp",
      title: "Concerts & Festivals",
      description:
        "Light up your event with thousands of color-changing bracelets pulsing in unison.",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-start sm:justify-center items-center py-8 sm:py-16">
      {/* Decorative background square - only visible on desktop */}
      <div className="hidden xl:block absolute right-[18rem] bottom-10 w-[72rem] h-[22rem] bg-[#d9e8f4] -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="flex sm:justify-between sm:items-end flex-col sm:flex-row px-2 sm:px-0">
          {" "}
          {/* Hier voor mobile te doen */}
          <h1 className="title max-w-sm">Event solutions for every occasion</h1>
          <p className="subtitle max-w-md">
            From concerts to corporate gatherings—discover how LetsLink powers
            unforgettable experiences.
          </p>
        </div>

        {/* Desktop and Tablet View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
          {solutions.map((solution, index) => (
            <div key={index}>
              <ExperienceCard
                imageUrl={solution.imageUrl}
                title={solution.title}
                description={solution.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View with Swiper - full width container */}
      <div className="md:hidden w-full px-0 overflow-x-visible">
        <Swiper
          slidesPerView={1.2}
          centeredSlides={true}
          spaceBetween={16}
          initialSlide={1}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          modules={[Pagination]}
          className="w-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {solutions.map((solution, index) => (
            <SwiperSlide key={index} className="w-[80%]">
              <ExperienceCard
                imageUrl={solution.imageUrl}
                title={solution.title}
                description={solution.description}
                isActive={index === activeIndex}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination mt-6"></div>
        </Swiper>
      </div>

      <div className="container flex justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 sm:mt-16">
        <Link to={"/solutions"} className="btn-primary">
          Event Experiences →
        </Link>
      </div>
    </div>
  );
};

export default ExperiencesPreview;
