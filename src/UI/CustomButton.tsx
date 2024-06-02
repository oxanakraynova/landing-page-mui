import { darken, styled } from "@mui/material/styles";
import { Button } from "@mui/material";

interface ColorButtonProps {
  backgroundColor: string;
  textColor?: string;
}

export const ColorButton = styled(Button)<ColorButtonProps>((props) => ({
  color: props.textColor || "white",
  backgroundColor: props.backgroundColor,
  "&:hover": {
    backgroundColor: darken(props.backgroundColor, 0.2),
  },
}));
