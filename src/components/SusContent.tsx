import React from "react";
import Circle from "../assets/CirkelLeandro.webp";

const ProductSmartTag: React.FC = () => {
  return (
    <div
      id="smart-tag"
      className="scroll-mt-16 min-h-screen bg-white flex justify-center items-center py-12 md:py-16 px-4"
    >
      <div className="max-w-6xl w-full">
        {/* Mobile layout - Image on top */}
        <div className="flex flex-col md:hidden gap-6">
          <div className="w-full rounded-lg py-8 px-4 flex justify-center items-center">
            <img src={Circle} alt="Circle" className="max-w-full h-auto" />
          </div>

          <div className="w-full px-2">
            <h1 className="text-3xl font-semibold mb-4 pb-2 border-b border-gray-300">
              Europe’s first patended, <br /> ECO-Friendly and smart
              LED-Wearables
            </h1>
            <p className="text-lg mb-3 leading-relaxed">
              From our rechargeable LED bracelets to our eco-friendly campus,
              every detail supports a cleaner, smarter way to connect.
              <br />
              <br />
              More light, less impact. More connection, less footprint.
              <br />
              With LetsLink, your event does more than bring people together. It
              helps build a more sustainable tomorrow.
            </p>
          </div>
        </div>

        {/* Desktop layout - Image on right */}
        <div className="hidden md:flex flex-row gap-16 lg:gap-20 items-center">
          <div className="w-1/2 px-4 py-8">
            <h1 className="text-4xl font-semibold mb-4 pb-2 border-b border-gray-300">
              Europe’s first patended,
              <br /> ECO-Friendly and <br />
              smart LED-Wearables
            </h1>
            {/*   Embedded with
              <span className="font-bold"> NFC/RFID technology </span> , these
              tags enable cashless payments, access control, and ticket
              scanning-all in one sleek device. Streamline events with
              cutting-edge convenience               Ideal for festivals or conferences, they replace paper
              <span className="font-bold"> tickets</span> and
              <span className="font-bold"> tokens</span>, reducing clutter while
              enhancing
              <span className="font-bold"> security</span> and attendee flow*/}
            <p className="text-lg mb-3 leading-relaxed">
              From our rechargeable LED bracelets to our eco-friendly campus,
              every detail supports a cleaner, smarter way to connect.
              <br />
              <br />
              More light, less impact. More connection, less footprint.
              <br />
              With LetsLink, your event does more than bring people together. It
              helps build a more sustainable tomorrow.
            </p>
          </div>

          <div className="w-1/2 rounded-lg py-8 px-4 flex justify-center items-center">
            <img src={Circle} alt="Circle" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSmartTag;
