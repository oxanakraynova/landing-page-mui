import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function CustomTab() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        style={{ marginBottom: "3.75rem" }}
      >
        <Tab value="one" label="Nejlepší" sx={{ marginRight: "1rem" }} />
        <Tab value="two" label="Nejhorší" />
      </Tabs>
    </Box>
  );
}