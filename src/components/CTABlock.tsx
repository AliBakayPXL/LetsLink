import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import LetsLinkVideo from "../assets/LetsLink.mp4";

const CTABlock: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Blurred Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover filter blur-md brightness-60"
        src={LetsLinkVideo} // <-- Zet je videobestand hier
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Transform Your Event with <br />
          Smart, Connected Experiences
        </h1>
        <Link
          to="/Contact#contact"
          className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full backdrop-blur-md border border-white transition-all duration-200 text-lg shadow"
        >
          Get a Free Quote &rarr;
        </Link>
      </div>
      {/* Extra donker overlay voor contrast */}
      <div className="absolute inset-0 bg-black/60"></div>
    </section>
  );
};
export default CTABlock;
