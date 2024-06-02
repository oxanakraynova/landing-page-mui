import { CardMedia, Grid, Typography } from "@mui/material";
import theme from "../theme";
import heroImage from "../assets/image6.png";

function HeroSection() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={4}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={theme.palette.secondary.main}
            style={{ paddingTop: "2.5rem", paddingBottom: "1.75rem" }}
          >
            EYEBROW IPSUM
          </Typography>
          <Typography
            variant="h1"
            fontWeight="bold"
            color={theme.palette.primary.main}
          >
            Lorem ipsum
          </Typography>
          <Typography
            variant="h3"
            color={theme.palette.primary.main}
            style={{ paddingTop: "2.5rem", paddingBottom: "7.5rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-end",
          }}
        >
          <CardMedia
            sx={{ height: 320, width: 422, marginLeft: "auto" }}
            image={heroImage}
            title="shopImage"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default HeroSection;
