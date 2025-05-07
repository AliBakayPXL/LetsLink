import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ExperiencesPreview from "../components/ExperiencesPreview";
import ContentShowcase from "../components/ContentShowcase";
import Solutions from "../components/Solutions";
import CTABlock from "../components/CTABlock";
import ProductsPreview from "../components/ProductsPreview";

const Homepage = () => {
  return (
    <main>
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
