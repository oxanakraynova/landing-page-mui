import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../theme";

function Layout(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="xl"
        style={{
          padding: "7.5rem 9.125rem",
        }}
      >
        {props.children}
      </Container>
    </ThemeProvider>
  );
}

export default Layout;
