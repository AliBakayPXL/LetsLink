import ExperienceNavbar from "../components/ExperienceNavbar";
import ProductHero from "../components/ProductHero";
import ProductBracelet from "../components/ProductBracelet";
import ProductLanyard from "../components/ProductLanyard";
import ProductRebracelet from "../components/ProductRebracelet";
import ProductSmartTag from "..//components/ProductSmartTag";

const Products = () => {
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
