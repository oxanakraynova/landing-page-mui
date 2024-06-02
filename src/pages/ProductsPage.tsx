import { useState } from "react";
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
    </>
  );
}

export default ProductsPage;
