import {
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import appTheme from "../theme";
import heroImage from "../assets/image6.png";

function HeroSection() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        container
        direction={isDesktop || isTablet ? "row" : "column"}
        justifyContent={isDesktop || isTablet ? "space-between" : "flex-start"}
        alignItems={isDesktop || isTablet ? "flex-start" : "center"}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={appTheme.palette.secondary.main}
            style={{
              paddingTop: isDesktop ? "2.5rem" : isTablet ? "3.75" : "3rem",
              paddingBottom: isDesktop
                ? "1.75rem"
                : isTablet
                ? "1.5rem"
                : "1rem",
            }}
          >
            EYEBROW IPSUM
          </Typography>
          <Typography
            variant="h1"
            fontWeight="bold"
            color={appTheme.palette.primary.main}
            sx={{
              paddingBottom: isDesktop
                ? "2.5rem"
                : isTablet
                ? "3.75rem"
                : "3rem",
            }}
          >
            Lorem ipsum
          </Typography>
          {isDesktop && (
            <Typography
              variant="h3"
              color={appTheme.palette.primary.main}
              style={{
                paddingTop: "2.5rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisici elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            </Typography>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={7}
          sx={{
            display: "flex",
            justifyContent: isDesktop ? "flex-start" : "center",
            alignItems: "flex-end",
          }}
        >
          <CardMedia
            sx={{ height: 320, width: 422, marginLeft: "auto" }}
            image={heroImage}
            title="shopImage"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5}>
          <Typography
            variant="h3"
            color={appTheme.palette.primary.main}
            style={{
              paddingTop: isTablet ? "3.75rem" : "3rem",
              textAlign: "center",
              display: isDesktop ? "none" : "block",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default HeroSection;
