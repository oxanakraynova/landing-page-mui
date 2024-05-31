import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ProductCard, { Product } from "./ProductCard";
import axios from "axios";

function ProductCardList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=6"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    };
    fetchProducts();
  }, []);
  return (
    <Grid container spacing={{ xs: 2, sm: 5, md: 10, lg: 15 }}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductCardList;
