import React from "react";

const solutions = [
  {
    icon: (
      // Handshake
      <svg
        className="w-10 h-10 mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20l9-5-9-5-9 5 9 5zm0 0v-8m0 8l-3.5-2m3.5 2l3.5-2m-7.5-5v-1a3 3 0 013-3h2a3 3 0 013 3v1"
        />
      </svg>
    ),
    title: "Smart Networking",
    desc: "Wearables that automatically network attendees at any event.",
  },
  {
    icon: (
      // Lightbulb
      <svg
        className="w-10 h-10 mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a7 7 0 00-4 12.9V17a2 2 0 002 2h4a2 2 0 002-2v-2.1A7 7 0 0012 2z"
        />
      </svg>
    ),
    title: "Immersive Displays",
    desc: "Crowds synced as glowing light experiences.",
  },
  {
    icon: (
      // Analytics
      <svg
        className="w-10 h-10 mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 17v-2a4 4 0 014-4h1a4 4 0 014 4v2M21 17v-2a4 4 0 00-4-4h-1a4 4 0 00-4 4v2"
        />
      </svg>
    ),
    title: "Crowd Analytics",
    desc: "Real-time data to optimize event flow.",
  },
  {
    icon: (
      // NFC / Contactless Payments
      <svg
        className="w-10 h-10 mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 7a8 8 0 018 8M7 11a4 4 0 014 4m1 5h-2a2 2 0 01-2-2v-1a2 2 0 012-2h2a2 2 0 012 2v1a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Contactless Payments",
    desc: "NFC transactions for seamless purchases.",
  },
  {
    icon: (
      // Tag / Brand
      <svg
        className="w-10 h-10 mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 7l10 10M7 17L17 7M5 11a2 2 0 012-2h.01a2 2 0 012 2v.01a2 2 0 01-2 2H7a2 2 0 01-2-2v-.01A2 2 0 017 11z"
        />
      </svg>
    ),
    title: "Brand Amplification",
    desc: "Wearables that market your event organically.",
  },
  {
    icon: (
      // Key / Secure Access
      <svg
        className="w-10 h-10 mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="15" cy="9" r="3" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.94 17.94a10 10 0 01-13.88 0 10 10 0 0113.88 0z"
        />
      </svg>
    ),
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
          <div className="text-gray-900">{sol.icon}</div>
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
