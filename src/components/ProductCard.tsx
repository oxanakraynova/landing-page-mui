import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Box,
} from "@mui/material";
import { categoryImages } from "../enums/CategoryEnum";
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
  const imageSrc =
    categoryImages[product.category as keyof typeof categoryImages];

  const handleClick = () => {
    if (product.image) {
      window.open(product.image, "_blank");
    }
  };
  return (
    <Card
      sx={{
        width: "24.5rem",
        height: "39.1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        borderRadius: "0.938rem",
        background: "linear-gradient(180deg, #FFFFFF 0%, #E7E7E7 100%)",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          alt="Product Image"
          src={imageSrc}
          sx={{
            objectFit: "cover",
            height: "13.6rem",
            width: "24.5rem",
            position: "relative",
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
          <Typography variant="body2" fontWeight="bold">
            {product.rating.rate + "/5"}
          </Typography>
        </Box>
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "2rem",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color={theme.palette.primary.main}
          style={{
            paddingBottom: "2rem",
          }}
        >
          {truncateString(product.title, 60)}
        </Typography>
        <Typography variant="body1" color={theme.palette.primary.main}>
          {truncateString(product.description, 142)}
        </Typography>
      </CardContent>
      <CardActions>
        <ColorButton
          disableElevation
          style={{ textTransform: "none" }}
          variant="contained"
          backgroundColor={theme.palette.success.main}
          onClick={handleClick}
          disabled={!product.image}
          sx={{ marginTop: "3rem", marginLeft: "2rem", marginBottom: "2rem" }}
        >
          Detail produktu
        </ColorButton>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
