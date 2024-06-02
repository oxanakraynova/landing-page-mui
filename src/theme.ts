import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// A custom theme for this app
let appTheme = createTheme({
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          width: "100%",
          height: "38.813rem",
          background:
            "linear-gradient(180deg, #FEE694 0%, rgba(254, 230, 148, 0) 100%)",
          backgroundRepeat: "no-repeat",
        },
      },
    },
  },
});

appTheme = responsiveFontSizes(appTheme);

export default appTheme;
