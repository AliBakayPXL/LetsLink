import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import HomeConcert from "../assets/photos/homeconcert_v2.webp";
import HomeSporting from "../assets/photos/homesporting.jpg";

const ExperiencesPreview = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const solutions = [
    {
      imageUrl: HomeConcert,
      title: "Concerts & Festivals",
      description:
        "LetsLink transforms concerts and festivals with interactive LED tech for stunning light shows and immersive audience engagement.",
    },
    {
      imageUrl: "images/letslink_1.webp",
      title: "Corporate Events",
      description:
        "LetsLink elevates corporate events with interactive LED wearables and smart features like live networking games, boosting engagement and seamless connections.",
    },
    {
      imageUrl: HomeSporting,
      title: "Sporting Events",
      description:
        "LetsLink energizes sports events with interactive LED wearables that sync to the action, boosting fan excitement and real-time crowd connection.",
    },
    {
      imageUrl: "images/letslink_3.webp",
      title: "Networking Events",
      description:
        "Light up your event with thousands of color-changing bracelets pulsing in unison.",
    },
    {
      imageUrl: HomeConcert,
      title: "Concerts & Festivals",
      description:
        "Light up your event with thousands of color-changing bracelets pulsing in unison.",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-start sm:justify-center items-center py-8 sm:py-16 overflow-x-hidden">
      {/* Decorative background square - only visible on desktop */}
      {/*<div className="hidden xl:block absolute right-[18rem] bottom-10 w-[72rem] h-[22rem] bg-[#d9e8f4] -z-10" />*/}

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center w-full sm:whitespace-nowrap">
            Event solutions for every occasion
          </h1>
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

      {/* Mobile View with Swiper */}
      <div className="md:hidden w-full px-4 overflow-hidden">
        <Swiper
          slidesPerView={1.1}
          centeredSlides={true}
          initialSlide={1}
          spaceBetween={16}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          modules={[Pagination]}
          className="w-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {solutions.map((solution, index) => (
            <SwiperSlide key={index}>
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

      <div className="container flex justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 sm:mt-5">
        <Link to="/experiences#hero" className="btn-primary">
          Event Experiences →
        </Link>
      </div>
    </div>
  );
};

export default ExperiencesPreview;
