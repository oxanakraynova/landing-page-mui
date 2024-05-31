import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

interface ColorButtonProps {
  color: string;
  textColor?: string;
}

export const ColorButton = styled(Button)<ColorButtonProps>((props) => ({
  color: props.textColor || "white",
  backgroundColor: "#7FC109",
  "&:hover": {
    backgroundColor: "#588706",
  },
}));
