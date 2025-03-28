import React from "react";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";

function AboutSummaryary() {
  return (
    <Sheet
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 10,
        // bgcolor: "background.body",
        color: "text.primary",
        // display: "flex",
        justifyContent: "center",
        // alignItems: "start",
        p: 5,
        px: 2,
        my: 4,
        // mt: 0,
        width: "95%",
        bgcolor: "background.tertiary",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: "lg",
        },

        // borderWidth: 1,
        // borderColor: "black",
      }}
    >
      <Box>
        <Typography
          sx={{
            // fontFamily: "Lora",
            mt: 1,
            fontSize: "1.25em",
          }}
        >
          Our multidisciplinary team is composed of science and engineering
          students at Toronto Metropolitan University.
        </Typography>
        {/* <img
        style={{ width: "100%", padding: "10px", alignSelf: "center" }}
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        alt="Empty placeholder image, no content"
      /> */}
      </Box>
    </Sheet>
  );
}

export default AboutSummaryary;
