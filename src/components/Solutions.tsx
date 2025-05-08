import React from "react";
import Handshake from "../assets/handshake.svg";
import Lightbulb from "../assets/lightbulb-shining.svg";
import Tag from "../assets/tag.svg";
import Contactless from "../assets/contactless.svg";
import Key from "../assets/Vector-4.svg";
import Analytics from "../assets/analytics.svg";

type SolutionItem = {
  icon: string;
  title: string;
  desc: string;
};

const solutions: SolutionItem[] = [
  {
    icon: Handshake,
    title: "Smart Networking",
    desc: "Wearables that automatically network attendees at any event.",
  },
  {
    icon: Lightbulb,
    title: "Immersive Displays",
    desc: "Crowds synced as glowing light experiences.",
  },
  {
    icon: Analytics,
    title: "Crowd Analytics",
    desc: "Real-time data to optimize event flow.",
  },
  {
    icon: Contactless,
    title: "Contactless Payments",
    desc: "NFC transactions for seamless purchases.",
  },
  {
    icon: Tag,
    title: "Brand Amplification",
    desc: "Wearables that market your event organically.",
  },
  {
    icon: Key,
    title: "Secure Access",
    desc: "One-tap entry using secure NFC technology",
  },
];

const Solutions = () => (
  <section className="h-screen flex justify-center flex-col px-4">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Our solutions
      </h2>
    </div>
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      {solutions.map((sol, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
          <div className="text-gray-900">
            <img
              src={sol.icon}
              alt={sol.title}
              className="w-10 h-10 mx-auto mb-4"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {sol.title}
          </h3>
          <p className="text-gray-700 text-base">{sol.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Solutions;
