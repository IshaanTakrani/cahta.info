import React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import { styled } from "@mui/joy/styles";
import AboutSummary from "./AboutSummary";

import HomepageTitle from "./HomepageTitle";
import HomepageSummary from "./HomepageSummary";
import HomepageCards from "./HomepageCards";
import Model3d from "./Model3d.jsx";

const StyledCard = styled(Card)({
  margin: "16px",
  padding: "24px",
  flex: 1,
  minWidth: "180px",
  maxWidth: "400px",
  width: "100%",

  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 2px 4px #bdbdbd",
  },
});

function AboutUs() {
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
        Meet The Team
      </Typography>
      <AboutSummary />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <StyledCard>
          <Typography level="h3" sx={{ mb: 1 }}>
            Jazmyne Mohamed
          </Typography>
          {/* <Typography>Design Alchemist</Typography> */}
          <Box>
            <img
              src="assets/jazmyne_headshot.jpg"
              alt="Placeholder"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>
        </StyledCard>
        <StyledCard>
          <Typography level="h3" sx={{ mb: 1 }}>
            Fahmida Parvage
          </Typography>
          {/* <Typography>Sustainability Exploratoire</Typography> */}
          <Box>
            <img
              src="assets/fahmida_headshot.jpg"
              alt="Placeholder"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>
        </StyledCard>
        <StyledCard>
          <Typography level="h3" sx={{ mb: 1 }}>
            Ishaan Takrani
          </Typography>
          {/* <Typography>Computer Mage</Typography> */}
          <Box>
            <img
              src="assets/ishaan_headshot.jpg"
              alt="Placeholder"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>
        </StyledCard>
        <StyledCard>
          <Typography level="h3" sx={{ mb: 1 }}>
            Venujan Suthakaran
          </Typography>
          {/* <Typography>Circuit Samurai</Typography> */}
          <Box>
            <img
              src="assets/venujan_headshot.jpg"
              alt="Placeholder"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>
        </StyledCard>
      </Box>
    </Sheet>
  );
}

export default AboutUs;
