import SeeInAction from "../assets/seeinaction.webp";
import Check from "../assets/check.svg";

const HowItWorks = () => (
  <section className="min-h-screen pb-8 flex justify-center flex-col px-4 md:px-8 bg-white">
    {/* Hier kan je de hele component aanpassen */}
    <div className="max-w-7xl mx-auto">
      {/* Hier gap aanpassen tussen afbeelding en tekst */}
      <div className="flex flex-col md:flex-row items-start gap-14 md:gap-40">
        {/* Afbeelding */}
        <div className="relative w-full md:w-[640px] flex-shrink-0">
          <img
            src={SeeInAction}
            alt="People connecting at event"
            className="rounded-xl w-full h-[420px] object-cover"
          />
          <div className="absolute bottom-6 left-6">
            <a
              href="https://www.youtube.com/watch?v=9fNVWD8bHzU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base font-semibold flex items-center gap-5 bg-black/50 px-4 py-2 rounded-full hover:bg-[#3CACD2] transition-all"
            >
              See it in action →
            </a>
          </div>
        </div>
        {/* Tekst content */}
        <div className="flex-1 flex flex-col justify-center gap-8">
          <h2 className="title">Connect people at events</h2>
          <p className="description">
            LetsLink makes connecting effortless, intuitive, and impactful. Our
            smart technology links your guests with the right people at the
            right time and place.LetsLink makes connecting to people easy and
            exciting.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <img
                src={Check}
                alt="check"
                className="w-5 h-5 mr-3 flex-shrink-0"
              />
              <span className="text-gray-900 font-semibold text-base">
                AI-Matchmaking
              </span>
            </li>
            <li className="flex items-center">
              <img
                src={Check}
                alt="check"
                className="w-5 h-5 mr-3 flex-shrink-0"
              />
              <span className="text-gray-900 font-semibold text-base">
                Frictionless networking
              </span>
            </li>
            <li className="flex items-center">
              <img
                src={Check}
                alt="check"
                className="w-5 h-5 mr-3 flex-shrink-0"
              />
              <span className="text-gray-900 font-semibold text-base">
                Events that truly engage
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
