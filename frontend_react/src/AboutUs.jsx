import React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import HomepageTitle from "./HomepageTitle";
import HomepageSummary from "./HomepageSummary";
import HomepageCards from "./HomepageCards";
import Model3d from "./Model3d.jsx";

function AboutUs() {
  return (
    <Sheet
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        m: 2,
        mt: 4,
        p: 3,
        pt: 20,
        borderRadius: 25,
        bgcolor: "background.body",
        color: "text.primary",
      }}
    ></Sheet>
  );
}

export default AboutUs;
