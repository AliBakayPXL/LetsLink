import eventTableImg from "../assets/photos/homecontentshowcaseleft.jpeg";
import braceletImg from "../assets/contentpreviewbracelet.jpeg";

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
        <div className="flex items-start gap-4">
          <div>
            <h3 className="font-semibold text-lg text-white mb-1">
              Why It Matters
            </h3>
            <p className="text-gray-300 text-base">
              We make every event more engaging for attendees, more valuable for
              brands, and easier to manage for organizers.
            </p>
          </div>
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
            <h3 className="font-semibold text-lg text-white mb-1">
              What We Do
            </h3>
            <p className="text-gray-300 text-base">
              Immersive experiences through smart wearables –<br />
              from networking lanyards to crowd-synced LED bracelets that light
              up your event.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div>
            <h3 className="font-semibold text-lg text-white mb-1">
              How It Works
            </h3>
            <p className="text-gray-300 text-base">
              Our tech connects guests automatically while transforming crowds
              into dazzling light displays, with added tools for payments and
              crowd control.
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
