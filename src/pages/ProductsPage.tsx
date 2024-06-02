import { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProductCardList from "../components/ProductCardList";
import CustomTab from "../UI/CustomTab";

function ProductsPage() {
  const [sortingOption, setSortingOption] = useState("best");

  const handleSortingChange = (option: string) => {
    setSortingOption(option);
  };
  return (
    <>
      <HeroSection />
      <CustomTab onChange={handleSortingChange} sortingOption={sortingOption} />
      <ProductCardList sortingOption={sortingOption} />
      <Footer />
    </>
  );
}

export default ProductsPage;
