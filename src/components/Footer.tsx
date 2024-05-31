import { Box, Button } from "@mui/material";

function Footer() {
  return (
    <>
      <Box padding="2rem" display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="info"
          style={{
            textAlign: "center",
            marginTop: "7.5rem",
          }}
        >
          Načíst další
        </Button>
      </Box>
    </>
  );
}

export default Footer;
