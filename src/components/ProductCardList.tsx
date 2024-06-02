import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ProductCard, { Product } from "./ProductCard";
import axios from "axios";

function ProductCardList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [limit, setLimit] = useState<number>(6);
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
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductCardList;
