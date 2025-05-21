import SusHero from "../components/SusHero.tsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SusContent from "../components/SusContent.tsx";
import ExperienceNavbar from "../components/ExperienceNavbar.tsx";

const SustainabilityPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Scroll naar sectie op basis van de hash in de URL (bv. #impact)
      const scrollToSection = () => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };
      setTimeout(scrollToSection, 100);
    }
  }, [location]);

  return (
    <main className="">
      <ExperienceNavbar />
      <SusHero />
      <SusContent />
    </main>
  );
};

export default SustainabilityPage;
