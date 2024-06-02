import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: "#024E40",
    },
    secondary: {
      main: "#61908E",
    },
    info: {
      main: "#AAE8C3",
    },
    success: {
      main: "#7FC109",
    },
  },
  typography: {
    fontSize: 16,
    h1: { fontSize: 55 },
    h2: { fontSize: 32 },
    h3: { fontSize: 21 },
    body1: { fontSize: 16 },
    body2: { fontSize: 13 },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
