import { Container, CssBaseline } from "@mui/material";
import React from "react";

function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="lg"
        style={{
          marginTop: "7.5rem",
          marginLeft: "9.125rem",
          marginRight: "9.125rem",
          marginBottom: "7.5rem",
        }}
      >
        {props.children}
      </Container>
    </>
  );
}

export default Layout;
