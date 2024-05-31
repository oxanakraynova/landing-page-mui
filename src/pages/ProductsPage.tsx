import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProductCardList from "../components/ProductCardList";
import CustomTab from "../UI/CustomTab";

function ProductsPage() {
  return (
    <>
      <HeroSection />
      <CustomTab />
      <ProductCardList />
      <Footer />
    </>
  );
}

export default ProductsPage;
