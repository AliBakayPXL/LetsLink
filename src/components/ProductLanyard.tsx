import Lanyard from "../assets/photos/productrebracelet.webp";

const ProductLanyard = () => {
  return (
    <div
      id="led-lanyard"
      className="scroll-mt-16 bg-white flex justify-center items-center py-12 md:py-16 px-4"
    >
      <div className="max-w-6xl w-full">
        {/* Mobile layout - Image on top */}
        <div className="flex flex-col md:hidden gap-6">
          <div className="w-full bg-gray-200 rounded-lg py-8 px-4 flex justify-center items-center">
            <img
              src={Lanyard}
              alt="Nylon LED Bracelet"
              className="max-w-full h-auto"
            />
          </div>

          <div className="w-full px-2">
            <h1 className="text-3xl font-semibold mb-4 pb-2 border-b border-gray-300">
               Nylon LED Bracelet
            </h1>

            <p className="text-base mb-3 leading-relaxed">
            The Nylon LED Bracelet is a stylish LED bracelet with a nylon strap with 
              <span className="font-bold"> quick release </span> 
              buckle suitable for events and group activities. The bracelet features
              <span className="font-bold"> powerful </span>LED lighting and can be easily operated and 
              personalized. This bracelet is rechargeable or one-time use.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Rechargeable 
              </button>
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Smart decks
              </button>
            </div>
          </div>
        </div>

        {/* Desktop layout - Image on right */}
        <div className="hidden md:flex flex-row gap-16 lg:gap-20 items-center">
          <div className="w-1/2 px-4 py-8">
            <h1 className="text-4xl font-semibold mb-4 pb-2 border-b border-gray-300">
              Nylon LED Bracelet
            </h1>

            <p className="text-lg mb-3 leading-relaxed">
            The Nylon LED Bracelet is a stylish LED bracelet with a nylon strap with 
              <span className="font-bold"> quick release </span> 
              buckle suitable for events and group activities. The bracelet features
              <span className="font-bold"> powerful </span>LED lighting and can be easily operated and 
              personalized. This bracelet is rechargeable or one-time use.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Rechargeable
              </button>
              <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Smart decks
              </button>
            </div>
          </div>

          <div className="w-1/2 bg-gray-200 rounded-lg py-8 px-4 flex justify-center items-center">
            <img
              src={Lanyard}
              alt="LED bracelet pro product"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLanyard;
