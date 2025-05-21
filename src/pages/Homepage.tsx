import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ExperiencesPreview from "../components/ExperiencesPreview";
import ContentShowcase from "../components/ContentShowcase";
import Solutions from "../components/Solutions";
import CTABlock from "../components/CTABlock";
import ProductsPreview from "../components/ProductsPreview";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Homepage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait a bit to ensure components have rendered
      const scrollToSection = () => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };
      setTimeout(scrollToSection, 100); // delay allows components to mount
    }
  }, [location]);

  return (
    <main>
      <Navbar />
      <Hero />
      <ExperiencesPreview />
      <HowItWorks />
      <ContentShowcase />
      <Solutions />
      <CTABlock />
      <ProductsPreview />
    </main>
  );
};

export default Homepage;
