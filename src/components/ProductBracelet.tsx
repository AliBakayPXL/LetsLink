import Bracelet from "..//assets/bracelet.webp";

const ProductBracelet = () => {
  return (
    <div
      id="led-bracelet"
      className="scroll-mt-16 bg-white flex justify-center items-center py-12 md:py-16 px-4"
    >
      <div className="max-w-6xl w-full">
        {/* Mobile layout - Image on top */}
        <div className="flex flex-col md:hidden gap-6">
          <div className="w-full bg-[#131c23] rounded-lg py-8 px-4 flex justify-center items-center">
            <img
              src={Bracelet}
              alt="LED bracelet product"
              className="max-w-full h-auto"
            />
          </div>

          <div className="w-full px-2">
            <h1 className="text-3xl font-semibold mb-4 pb-2 border-b border-gray-300">
              LED Bracelet
            </h1>
            S
            <p className="text-base mb-3 leading-relaxed">
              Our LED bracelets connect participants in an intuitive and
              visually striking way.
              <span className="font-bold"> Programmable</span> to display
              <span className="font-bold"> different colors</span>, they help
              people with shared interests or groups identify each other
              effortlessly.
            </p>
            <p className="text-base mb-4 leading-relaxed">
              Perfect for networking
              <span className="font-bold"> events</span>,
              <span className="font-bold"> concerts</span>, or
              <span className="font-bold"> festivals</span>, these bracelets
              turn wearers into active contributors to the event's atmosphere.
              Their
              <span className="font-bold"> comfortable design</span> ensures an
              engaging, dynamic experience for all.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Color-coded
              </button>
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Interactive networking
              </button>
            </div>
          </div>
        </div>

        {/* Desktop layout - Image on left */}
        <div className="hidden md:flex flex-row gap-16 lg:gap-20 items-center">
          <div className="w-1/2 bg-[#131c23] rounded-lg py-8 px-4 flex justify-center items-center">
            <img
              src={Bracelet}
              alt="LED bracelet product"
              className="max-w-full h-auto"
            />
          </div>

          <div className="w-1/2 px-4 py-8">
            <h1 className="text-4xl font-semibold mb-4 pb-2 border-b border-gray-300">
              LED Bracelet
            </h1>

            <p className="text-lg mb-3 leading-relaxed">
              Our LED bracelets connect participants in an intuitive and
              visually striking way.
              <span className="font-bold"> Programmable</span> to display
              <span className="font-bold"> different colors</span>, they help
              people with shared interests or groups identify each other
              effortlessly.
            </p>

            <p className="text-lg mb-4 leading-relaxed">
              Perfect for networking
              <span className="font-bold"> events</span>,
              <span className="font-bold"> concerts</span>, or
              <span className="font-bold"> festivals</span>, these bracelets
              turn wearers into active contributors to the event's atmosphere.
              Their
              <span className="font-bold"> comfortable design</span> ensures an
              engaging, dynamic experience for all.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Color-coded
              </button>
              <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Interactive networking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBracelet;
