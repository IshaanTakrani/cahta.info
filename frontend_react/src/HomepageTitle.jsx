import React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Typography from "@mui/joy/Typography";

function HomepageTitle() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        level="h1"
        sx={{
          fontFamily: "SixtyFour",
          fontSize: "3em",
          m: 1,
          p: 1,

          transition: "0.4s",
          "&:hover": {
            color: "white",
            bgcolor: "black",
          },
        }}
      >
        We are Project CAHTA
      </Typography>
      <Typography
        level="h3"
        sx={{
          fontFamily: "Lora",
          m: 1,

          // transition: "0.4s",
          // "&:hover": {
          //   color: "white",
          //   bgcolor: "black",
          // },
        }}
      >
        Catch Smarter. Tread Lighter. Sustain Our Oceans. The Sustainable Future of Bottom Trawling.
      </Typography>
    </div>
  );
}

export default HomepageTitle;
