import React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import HomepageTitle from "./HomepageTitle";
import HomepageSummary from "./HomepageSummary";
import HomepageCards from "./HomepageCards";
import Homepage3dViewer from "./Homepage3dViewer";

function Homepage() {
  return (
    <Sheet
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        p: 3,
        pt: 20,
        borderRadius: 25,
        bgcolor: "background.body",
        color: "text.primary",
      }}
    >
      <HomepageTitle />
      <HomepageSummary />
      <Homepage3dViewer /> 
      <HomepageCards />
    </Sheet>
  );
}

export default Homepage;
