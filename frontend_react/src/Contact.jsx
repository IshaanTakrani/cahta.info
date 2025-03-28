import React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

function Contact() {
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
        bgcolor: "background.body",
        color: "text.primary",
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
      >
        Contact Us
      </Typography>
      <Typography level="h3" sx={{ mb: 1 }}>
        Contact the Project CAHTA Team at:{" "}
        <a href="mailto:projectcahta@gmail.com">projectcahta@gmail.com</a>
      </Typography>
    </Sheet>
  );
}

export default Contact;
