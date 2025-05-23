import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import NeonButton from "./NeonButton";
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
          Make Your Event Unforgettable with
          <br />
          Seamless Connections and Smart Technology
        </h1>
        <NeonButton
          to="/Contact#contact"
          LinkComponent={Link}
          className="px-8 py-4 text-white font-semibold rounded-fulltransition-all duration-200 text-lg"
        >
          Get a free quote &rarr;
        </NeonButton>
      </div>
      {/* Extra donker overlay voor contrast */}
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
};
export default CTABlock;
