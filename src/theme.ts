import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: "#024E40",
      light: "#7FC109",
    },
    secondary: {
      main: "#61908E",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
