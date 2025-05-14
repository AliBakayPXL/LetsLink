import React from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const ContactForm: React.FC = () => {
  return (
    <div
      id="contact"
      className="scroll-mt-24 w-full bg-white py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Left: Text and Contact Info */}
          <div className="md:w-1/2 pr-0 md:pr-8 mb-12 md:mb-0 flex flex-col justify-between">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Ready to light up your event?
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Contact us to discover how LetsLink can transform your experience
              with smart technology and seamless connections.
            </p>

            <div className="space-y-6 text-gray-900">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-300">
                    <FiPhone className="text-white w-5 h-5" />
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">+32 468 31 28 31</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-300">
                    <FiMapPin className="text-white w-5 h-5" />
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">
                    Kempische Steenweg 303 3500 Hasselt, Belgium
                  </h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-300">
                    <FiMail className="text-white w-5 h-5" />
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Info@LetsLink.be</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="md:w-1/2 bg-gray-300 p-12 rounded-xl shadow-md flex flex-col justify-between">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 px-4 md:px-8">
              Send us a message
            </h2>
            <form className="space-y-6 px-4 md:px-8">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  className="w-full md:w-1/2 bg-white border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
                <input
                  type="tel"
                  className="w-full md:w-1/2 mt-4 md:mt-0 bg-white border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone number"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write a message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
