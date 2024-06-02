import {
  Container,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import appTheme from "../theme";

function Layout(props: { children: React.ReactNode }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  let padding;

  if (isDesktop) {
    padding = "7.5rem 9.125rem";
  } else if (isTablet) {
    padding = "3.75rem 7.5rem";
  } else {
    padding = "1.813rem 3rem";
  }

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Container
        maxWidth="xl"
        style={{
          padding: `${padding}`,
        }}
      >
        {props.children}
      </Container>
    </ThemeProvider>
  );
}

export default Layout;
