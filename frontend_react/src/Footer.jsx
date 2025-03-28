import React from "react";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

function Footer() {
  return (
    <Sheet
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 4,
        p: 3,
        pt: 0,
        height: "100%",
        borderRadius: 25,
        bgcolor: "text.primary",
        color: "background.body",
      }}
    >
      <Typography
        sx={{
          fontFamily: "SixtyFour",
          fontSize: "3em",
          m: 1,
          transition: "0.4s",
          "&:hover": {
            color: "white",
            bgcolor: "black",
          },
          my: 5,
          p: 2,
        }}
      ></Typography>
    </Sheet>
  );
}

export default Footer;
