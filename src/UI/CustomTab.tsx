import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface CustomTabProps {
  onChange: (newValue: string) => void;
  sortingOption: string;
}

export default function CustomTab({ onChange, sortingOption }: CustomTabProps) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={sortingOption}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="sorting tabs"
        style={{ marginBottom: "3.75rem" }}
      >
        <Tab value="best" label="Nejlepší" sx={{ marginRight: "1rem" }} />
        <Tab value="worst" label="Nejhorší" />
      </Tabs>
    </Box>
  );
}
