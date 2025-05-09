import Lanyard from "../assets/Lanyard.png"

const ProductLanyard = () => {
    return (
        <div id="led-lanyard" className="scroll-mt-16 bg-white flex justify-center items-center py-12 md:py-16 px-4">
      <div className="max-w-6xl w-full">
        {/* Mobile layout - Image on top */}
        <div className="flex flex-col md:hidden gap-6">
          <div className="w-full bg-gray-200 rounded-lg py-8 px-4 flex justify-center items-center">
            <img 
              src={Lanyard} 
              alt="LED lanyard" 
              className="max-w-full h-auto"
            />
          </div>
          
          <div className="w-full px-2">
            <h1 className="text-3xl font-semibold mb-4 pb-2 border-b border-gray-300">
              LED Lanyard
            </h1>
            
            <p className="text-base mb-3 leading-relaxed">
            Combining practicality with modern style, our LED Lanyards feature  
            <span className="font-bold"> customizable colors </span> to distinguish groups or roles
            ideal for conferences or corporate events, they integrate seamlessly with  
            <span className="font-bold"> badge systems</span>.
            </p>
            
            <p className="text-base mb-4 leading-relaxed">
            The built-in lighting ensures visibility in dim environments, enhancing both
            <span className="font-bold"> safety</span> and 
            <span className="font-bold"> aesthetics</span>. A sleek solution for organizers and attendees alike.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Badge-ready
              </button>
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Low-light visibility
              </button>
            </div>
          </div>
        </div>
        
        {/* Desktop layout - Image on right */}
        <div className="hidden md:flex flex-row gap-16 lg:gap-20 items-center">
          <div className="w-1/2 px-4">
            <h1 className="text-4xl font-semibold mb-4 pb-2 border-b border-gray-300">
              LED Lanyard
            </h1>
            
            <p className="text-lg mb-3 leading-relaxed">
            Combining practicality with modern style, our LED Lanyards feature  
            <span className="font-bold"> customizable colors </span> to distinguish groups or roles
            ideal for conferences or corporate events, they integrate seamlessly with  
            <span className="font-bold"> badge systems</span>.
            </p>
            
            <p className="text-lg mb-4 leading-relaxed">
            The built-in lighting ensures visibility in dim environments, enhancing both
            <span className="font-bold"> safety</span> and 
            <span className="font-bold"> aesthetics</span>. A sleek solution for organizers and attendees alike.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Badge-ready
              </button>
              <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Low-light visibility
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