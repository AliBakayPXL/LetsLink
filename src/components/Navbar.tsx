import { useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import LogoPrimary from "../assets/logo.png";

interface MenuItem {
  label: string;
  href: string;
}

interface NavbarLinksProps {
  className: string;
  onClick: () => void;
}

const menuItems: MenuItem[] = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const MenuButton = memo(
  ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
    <button
      className="md:hidden"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  )
);
MenuButton.displayName = "MenuButton";

const NavbarLinks = memo(({ className, onClick }: NavbarLinksProps) => (
  <>
    {menuItems.map((item) => (
      <li key={item.href}>
        <Link to={item.href} className={className} onClick={onClick}>
          {item.label}
        </Link>
      </li>
    ))}
  </>
));
NavbarLinks.displayName = "NavbarLinks";

// Constants for class names to avoid string concatenation on every render
const MOBILE_MENU_BASE_CLASSES =
  "md:hidden absolute left-0 right-0 bg-[var(--background-primary)] transform transition-all duration-300 ease-in-out";
const MOBILE_MENU_OPEN_CLASSES = "translate-y-0 opacity-100 visible";
const MOBILE_MENU_CLOSED_CLASSES = "-translate-y-full opacity-0 invisible";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Memoized handlers to prevent recreation on renders
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  // Memoized class strings
  const navClasses = `relative w-full z-50 transition-colors duration-300 ${
    isSidebarOpen ? "bg-[var(--background-primary)]" : "bg-transparent"
  }`;

  const mobileMenuClasses = `${MOBILE_MENU_BASE_CLASSES} ${
    isSidebarOpen ? MOBILE_MENU_OPEN_CLASSES : MOBILE_MENU_CLOSED_CLASSES
  }`;

  return (
    <div className="relative z-50">
      <nav className={navClasses}>
        <div className="container mx-auto px-6 sm:px-8 h-16 md:h-24 flex justify-between items-center">
          <Link to="/">
            <img
              src={LogoPrimary}
              alt="logo-primary"
              className="h-6 md:h-8"
              width="auto"
              height="32"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10">
            <NavbarLinks
              className="hover:text-[var(--text-primary)] hover:opacity-80"
              onClick={handleLinkClick}
            />
          </ul>

          {/* Desktop Button */}
          <Link to="/" className="hidden md:block btn-secondary">
            Dashboard
          </Link>

          {/* Mobile Menu Button */}
          <MenuButton isOpen={isSidebarOpen} onClick={toggleSidebar} />
        </div>

        {/* Mobile Menu - Slides down */}
        <div className={mobileMenuClasses}>
          <div className="p-6 sm:p-8">
            <ul className="flex flex-col gap-6">
              <NavbarLinks className="text-lg" onClick={handleLinkClick} />
              <li>
                <Link to="/" className="inline-block btn-secondary">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Overlay for closing menu when clicking outside */}
      {isSidebarOpen && (
        <div
          className="md:hidden absolute top-full inset-x-0 h-screen bg-black/50"
          onClick={handleLinkClick}
        />
      )}
    </div>
  );
};

export default memo(Navbar);
