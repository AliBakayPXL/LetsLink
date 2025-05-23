import React, { useRef, useEffect } from "react";
import LetsLinkVideo from "../assets/LetsLink.mp4";

const SusHero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-23 lg:pt-24 flex flex-col overflow-hidden"
    >
      {/* Blurred Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover filter blur-md brightness-30 z-0"
        src={LetsLinkVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Top Title Section */}
      {/*<div className="relative z-20 flex-1 w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between text-white space-y-8 md:space-y-0">
        <div className="md:w-2/3 w-full text-left space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-2xl mb-2">
            Europe's First Rechargeable LED-Bracelet
          </h1>
        </div>
      </div> */}

      {/* Main Content Section */}
      <div className="relative z-20 flex-1 w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between text-white space-y-8 md:space-y-0">
        {/* Text section */}
        <div className="md:w-2/3 w-full text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Europe's First Rechargeable LED-Bracelet
          </h2>
          <p className="text-lg drop-shadow-md">
            At LetsLink, every light tells a story and every story starts with
            care for the planet. <br /> <br></br>
            Our LED bracelets are made to shine again and again. <br />
            After each event, we collect, clean and recharge them, ready for the
            next moment of magic. <br />
            No waste, just memories. We design everything with the future in
            mind.
          </p>

          {/* Mobile video (onder tekst) */}
          <div className="md:hidden w-full">
            <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/QeIDLrpSX9Q"
                title="LetsLink Shorts"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Desktop video */}
        <div className="hidden md:flex md:w-1/3 justify-center">
          <div className="w-[300px] h-[533px] rounded-xl overflow-hidden shadow-2xl border-[4px] border-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/QeIDLrpSX9Q"
              title="LetsLink Shorts"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SusHero;
