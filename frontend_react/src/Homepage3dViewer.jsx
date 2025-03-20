import React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import Model3d from "./Model3d";

function Homepage3dViewer() {
  return (
    <Sheet
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        color: "text.primary",
        m: 4,
        mt: 8,
        // maxWidth: "66%",
        // width: "66%",
        minWidth: "200px",
        width: "70%",
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
  );
}

export default Homepage3dViewer;
