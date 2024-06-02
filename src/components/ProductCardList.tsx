import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ProductCard, { Product } from "./ProductCard";
import axios from "axios";
import Footer from "./Footer";

interface ProductCardListProps {
  sortingOption: string;
}

function ProductCardList({ sortingOption }: ProductCardListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [limit] = useState<number>(6);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?limit=${limit}&offset=${offset}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    };
    fetchProducts();
  }, [sortingOption, offset]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + 6);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortingOption === "best") {
      return b.rating.rate - a.rating.rate;
    } else if (sortingOption === "worst") {
      return a.rating.rate - b.rating.rate;
    }
    return 0;
  });

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {sortedProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Footer onClick={handleLoadMore} />
    </>
  );
}

export default ProductCardList;
