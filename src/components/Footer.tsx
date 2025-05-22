import { Link } from "react-router-dom";
import LogoPrimary from "../assets/logo.webp"; // Pas aan indien je pad anders is

// Je kunt deze SVG-iconen ook als losse componenten importeren, of uit een icon-library halen!
/*const LocationIcon = () => (
  <svg
    className="w-5 h-5 mr-2 inline"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c3.314 0 6 2.686 6 6H6c0-3.314 2.686-6 6-6z"
    />
  </svg>
);
const PhoneIcon = () => (
  <svg
    className="w-5 h-5 mr-2 inline"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h1a2 2 0 012 2v1a2 2 0 01-2 2h-.586a1 1 0 00-.707.293l-1.707 1.707a1 1 0 00-.293.707V17a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 01-2-2V5z"
    />
  </svg>
);
const MailIcon = () => (
  <svg
    className="w-5 h-5 mr-2 inline"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 12H8m0 0l-4 4m4-4V8a4 4 0 118 0v4m0 0l4 4"
    />
  </svg>
);*/

const Footer = () => (
  <footer className="bg-[#131c23] text-white pt-12 pb-6 px-4 md:px-0">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
      {/* Contact & logo */}
      <div>
        <img src={LogoPrimary} alt="Letslink logo" className="h-8 mb-10" />
        <div className="mb-2 flex items-start">
          {/*<LocationIcon />*/}
          <span>
            Kempische Steenweg 303
            <br />
            3500 Hasselt, Belgium
          </span>
        </div>
        <div className="mb-2 flex items-center">
          {/*<PhoneIcon />*/}
          <a href="tel:+32468312831" className="hover:text-[#3CACD2]">
            +32 468 31 28 31
          </a>
        </div>
        <div className="flex items-center">
          {/*<MailIcon />*/}
          <a href="mailto:info@letslink.be" className="hover:text-[#3CACD2]">
            info@letslink.be
          </a>
        </div>
      </div>
      {/* Products */}
      <div>
        <h4 className="font-semibold mb-10 text-lg">Products</h4>
        <ul className="space-y-4">
          <li>
            <Link to="/products#led-bracelet" className="hover:text-[#3CACD2]">
              LED Bracelet
            </Link>
          </li>
          <li>
            <Link to="/products#led-nylon" className="hover:text-[#3CACD2]">
              Nylon LED Bracelet
            </Link>
          </li>
          <li>
            <Link
              to="/products#led-rebracelet"
              className="hover:text-[#3CACD2]"
            >
              Rechargeable Bracelet
            </Link>
          </li>
          <li>
            <Link to="/products#smart-tag" className="hover:text-[#3CACD2]">
              Smart Tags
            </Link>
          </li>
        </ul>
      </div>
      {/* Company */}
      <div>
        <h4 className="font-semibold mb-10 text-lg">Company</h4>
        <ul className="space-y-4">
          <li>
            <Link to="/experiences#hero" className="hover:text-[#3CACD2]">
              Experiences
            </Link>
          </li>
          <li>
            <Link to="/howitworks" className="hover:text-[#3CACD2]">
              How It Works
            </Link>
          </li>
          <li>
            <Link to="/products#hero" className="hover:text-[#3CACD2]">
              Products
            </Link>
          </li>
          <li>
            <Link to="/Contact#contact" className="hover:text-[#3CACD2]">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {/* Social */}
      <div>
        <h4 className="font-semibold mb-10 text-lg">Socials</h4>
        <ul className="space-y-4">
          <li>
            <a href="https://www.linkedin.com/company/letslinkbe/posts/?feedView=all" className="hover:text-[#3CACD2]">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/letslink_be/" className="hover:text-[#3CACD2]">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@LetsLinkBE" className="hover:text-[#3CACD2]">
              Youtube
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@letslink_be?_t=ZG-8wZ2kq6RVjt&_r=1" className="hover:text-[#3CACD2]">
              TikTok
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
      <span>Copyright © 2025 LetsLink - BE:1009.578.374</span>
      <div className="flex gap-4 mt-2 md:mt-0">
        <Link to="/Privacy#hero" className="hover:text-[#3CACD2]">
          Privacy Policy
        </Link>
        <span>|</span>
        <Link to="/Cookies#hero" className="hover:text-[#3CACD2]">
          Cookies
        </Link>
      </div>
    </div>
  </footer>
);
export default Footer;
