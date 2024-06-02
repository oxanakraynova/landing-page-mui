import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

interface CustomTabProps {
  onChange: (newValue: string) => void;
  sortingOption: string;
}

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(0.5),
  padding: theme.spacing(1, 3),
  textTransform: "none",
  "&.Mui-selected": {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

export default function CustomTab({ onChange, sortingOption }: CustomTabProps) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <StyledTabs
        value={sortingOption}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="sorting tabs"
        style={{ marginBottom: "3.75rem" }}
      >
        <StyledTab
          value="best"
          label="Nejlepší"
          sx={{
            marginRight: "1rem",
            textTransform: "none",
            fontWeight: "bold",
          }}
        />
        <StyledTab
          value="worst"
          label="Nejhorší"
          sx={{ textTransform: "none", fontWeight: "bold" }}
        />
      </StyledTabs>
    </Box>
  );
}
