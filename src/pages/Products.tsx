import ExperienceNavbar from "../components/ExperienceNavbar";
import ProductHero from "../components/ProductHero";
import ProductBracelet from "../components/ProductBracelet";
import ProductLanyard from "../components/ProductLanyard";
import ProductRebracelet from "../components/ProductRebracelet";
import ProductSmartTag from "..//components/ProductSmartTag";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const Products = () => {

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
  <main className="pt-24">
      <ExperienceNavbar/>
      <ProductHero/>
      <ProductBracelet></ProductBracelet>
      <ProductLanyard></ProductLanyard>
      <ProductRebracelet></ProductRebracelet>
      <ProductSmartTag></ProductSmartTag>
    </main>
  )
};

export default Products;
