import { Box, Button } from "@mui/material";

interface ButtonProps {
  onClick: () => void;
}

function Footer({ onClick }: ButtonProps) {
  return (
    <>
      <Box padding="2rem" display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="info"
          onClick={onClick}
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
