import React, { useState } from "react";
import { Link } from "react-router-dom";
import djBracelet from "../assets/photos/experiencenetworkcorpright.webp";
import carglassunizobracelet from "../assets/photos/experiencenetworkcorpleft.webp";
import bottomphoto from "../assets/photos/experiencecorpbru.webp";

const ExperienceNetworkCorp: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [carglassunizobracelet, djBracelet];

  const openGallery = (index: number) => {
    setActiveImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start">
          {/* Left side images */}
          <div className="md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div
                className="cursor-pointer relative"
                onClick={() => openGallery(0)}
              >
                <img
                  src={carglassunizobracelet}
                  alt="Blue LED wearable with corporate branding"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div
                className="cursor-pointer relative"
                onClick={() => openGallery(1)}
              >
                <img
                  src={djBracelet}
                  alt="Control panel with yellow LED wearable"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src={bottomphoto}
                alt="Blue LED wearable with corporate branding"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Corporate Events
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Bring clarity, control, and energy to your corporate event with
              LetsLink. Our LED wearables reinforce your brand identity, and
              keep every guest connected and informed at all times. From
              large-scale conferences to executive retreats, we ensure your
              event runs smoothly and every moment feels coordinated and
              impactful.
            </p>

            {/* Features list */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-200 text-blue-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">
                    Role-Based Identification
                  </h3>
                  <p className="text-gray-700">
                    Color-coded lights clearly distinguish between executives,
                    departments, teams, and guest tiers, removing the need for
                    printed badges and making navigation effortless.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-200 text-blue-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">
                    Instant Notifications
                  </h3>
                  <p className="text-gray-700">
                    Bracelets and lanyards pulse or flash to alert guests of
                    keynote starts, session changes, or important announcements,
                    keeping everyone perfectly in sync.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-200 text-blue-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Brand Immersion</h3>
                  <p className="text-gray-700">
                    Wearables showcase your company colors, slogans, and logos,
                    transforming every guest into a vibrant brand ambassador.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xl text-blue-400 italic mt-8">
              "Every light pulse is the heartbeat of your brand."
            </p>

            <Link
              to="/Contact#contact"
              className="inline-block mt-8 px-8 py-3 bg-[#3CACD2] hover:bg-[#4BC8D0] text-white font-medium rounded-full transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 text-white hover:text-gray-300"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="max-w-4xl w-full mx-auto relative">
            <img
              src={images[activeImageIndex]}
              alt={`Gallery image ${activeImageIndex + 1}`}
              className="w-full max-h-[80vh] object-contain"
            />

            <div className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-4">
              <button
                onClick={prevImage}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              >
                &lt;
              </button>
              <button
                onClick={nextImage}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              >
                &gt;
              </button>
            </div>

            <div className="text-center text-white mt-4">
              Image {activeImageIndex + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceNetworkCorp;
