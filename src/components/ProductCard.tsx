import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Box,
} from "@mui/material";
import theme from "../theme";
import { ColorButton } from "../UI/CustomButton";

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: Rating;
  category: string;
}

interface Rating {
  count: number;
  rate: number;
}

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const truncateString = (string: string, maxLength: number): string => {
    return string.length > maxLength
      ? string.substring(0, maxLength) + "..."
      : string;
  };
  return (
    <Card
      sx={{
        width: "24.5rem",
        height: "39.1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          alt="Product Image"
          src={product.image}
          sx={{
            objectFit: "contain",
            height: "13.6rem",
            position: "relative",
            backgroundColor: "#BFDBDC",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "2rem",
            right: "2rem",
            color: "white",
          }}
        >
          <Typography variant="subtitle2">
            {product.rating.rate + "/5"}
          </Typography>
        </Box>
      </Box>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color={theme.palette.primary.main}
          style={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          {truncateString(product.title, 60)}
        </Typography>
        <Typography variant="body2" color={theme.palette.primary.main}>
          {truncateString(product.description, 142)}
        </Typography>
      </CardContent>
      <CardActions>
        <ColorButton
          variant="contained"
          color="primary"
          sx={{ marginTop: "3rem", marginLeft: "2rem" }}
        >
          Detail produktu
        </ColorButton>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
