import { Box } from "@mui/material";
import appTheme from "../theme";
import { ColorButton } from "../UI/CustomButton";

interface ButtonProps {
  onClick: () => void;
}

function Footer({ onClick }: ButtonProps) {
  return (
    <>
      <Box padding="2rem" display="flex" justifyContent="center">
        <ColorButton
          variant="contained"
          backgroundColor={appTheme.palette.info.main}
          textColor={appTheme.palette.primary.main}
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
