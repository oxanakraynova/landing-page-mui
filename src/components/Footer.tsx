import { Box } from "@mui/material";
import theme from "../theme";
import { ColorButton } from "../UI/CustomButton";

interface ButtonProps {
  onClick: () => void;
}

function Footer({ onClick }: ButtonProps) {
  return (
    <>
      <Box padding="2rem" display="flex" justifyContent="center">
        <ColorButton
          disableElevation
          variant="contained"
          backgroundColor={theme.palette.info.main}
          textColor={theme.palette.primary.main}
          onClick={onClick}
          style={{
            textAlign: "center",
            marginTop: "7.5rem",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Načíst další
        </ColorButton>
      </Box>
    </>
  );
}

export default Footer;
