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
    desc: "Wearables that match and connect your guests automatically. Turn every event into a seamless networking experience",
  },
  {
    icon: Lightbulb,
    title: "Immersive Light Shows",
    desc: "Transform crowds into a living light display. Sync lights with music and moments for unforgettable engagement.",
  },
  {
    icon: Analytics,
    title: "Crowd Data",
    desc: "Track and manage crowd flow with live data. Optimize movement and keep your event running smoothly.",
  },
  {
    icon: Contactless,
    title: "Cashless Payments",
    desc: "Fast, secure transactions with smart NFC. Make purchases simple and hassle-free for every guest",
  },
  {
    icon: Tag,
    title: "Brand Amplification",
    desc: "Let your wearables do the marketing. Spread your message naturally as attendees light up your brand.",
  },
  {
    icon: Key,
    title: "Secure One-Tap Access",
    desc: "Instant, safe entry with NFC tech. Smooth check-ins and VIP access at the tap of a wrist.",
  },
];

const Solutions = () => (
  <section className="min-h-screen flex flex-col items-center px-4 py-8 pt-30 sm:pt-34 sm:py-12">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Our solutions
      </h2>
    </div>
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
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
