import eventTableImg from "../assets/photos/homecontentshowcaseleft.webp";
import braceletImg from "../assets/contentpreviewbracelet.webp";

const ContentShowcase = () => (
  <section className="bg-[#131c23] min-h-screen flex flex-col justify-start sm:justify-center items-center py-8 sm:py-16 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: photo top, text bottom */}
      <div className="flex flex-col gap-8">
        <img
          src={eventTableImg}
          alt="Event Table"
          className="rounded-2xl w-full max-h-[400px] object-cover shadow-lg"
        />
        <div className="flex items-start gap-4"></div>
        <div>
          <h3 className="font-semibold text-lg text-white mb-1">What</h3>
          <p className="text-gray-300 text-base">
            We provide LED products designed to enhance engagement, manage
            crowds, and simplify payments. Each product is customizable,
            rechargeable, and built to transform your event into a seamless,
            connected experience
          </p>
        </div>
      </div>

      {/* Right: heading, icon-text rows, photo bottom */}
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
          Revolutionizing event
          <br className="hidden md:block" />
          connections
        </h2>
        <div className="flex items-start gap-4">
          <div>
            <h3 className="font-semibold text-lg text-white mb-1">Why</h3>
            <p className="text-gray-300 text-base">
              We believe that events are about more than just being there. They
              are about connecting, sharing moments, and creating memories.
              LetsLink exists to make every connection effortless and every
              experience unforgettable.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div>
            <h3 className="font-semibold text-lg text-white mb-1">How</h3>
            <p className="text-gray-300 text-base">
              By combining smart LED wearables with real-time data and NFC
              technology, we bring people together in ways that feel natural and
              exciting. Our solutions light up crowds, streamline networking,
              and make events safer, smoother, and more interactive.
            </p>
          </div>
        </div>
        <img
          src={braceletImg}
          alt="Bracelet Hands"
          className="rounded-2xl w-full max-h-[200px] object-cover shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default ContentShowcase;
