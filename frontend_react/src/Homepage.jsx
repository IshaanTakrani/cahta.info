import React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import HomepageTitle from "./HomepageTitle";
import HomepageSummary from "./HomepageSummary";
import HomepageCards from "./HomepageCards";
import Model3d from "./Model3d.jsx";

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

      {/* <Sheet
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 10,
            color: "text.primary",
            justifyContent: "center",
            p: 5,
            px: 2,
            mt: 10,
            width: "95%",
            bgcolor: "background.tertiary",
          }}
        ></Sheet> */}

      <HomepageCards />

      <Sheet
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          color: "text.primary",
          mb: 4,
          minWidth: "200px",
          maxWidth: "50%",
          height: 600,
        }}
      >
        <Typography
          level="h2"
          sx={{
            fontFamily: "Lora",
            p: 2,
          }}
        >
          Interactive 3D Model: CAHTA Prototype
        </Typography>
        <Model3d />
      </Sheet>
    </Sheet>
  );
}

export default Homepage;
