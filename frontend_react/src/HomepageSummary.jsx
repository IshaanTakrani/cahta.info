import React from "react";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";

function HomepageSummary() {
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
        mt: 10,
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
        <Typography level="h2" sx={{ fontFamily: "Lora" }}>
          What is CAHTA?
        </Typography>
        <Typography
          sx={{
            // fontFamily: "Lora",
            mt: 1,
            fontSize: "1.25em",
          }}
        >
          Aggressive fishing practices like bottom trawling harm marine
          ecosystems, deplete fish stocks, and release massive CO2 emissions.
          Our solution, Project CAHTA, replaces destructive steel-weighted
          trawls with hydroacoustic transducers that use targeted sound waves to
          attract groundfish. This reduces bycatch, minimizes seabed disruption,
          and lowers fuel costs for fisheries. Using proven acoustic attraction
          methods, our technology balances efficiency and sustainability,
          helping fisheries maintain profitability while protecting marine life.
          By offering a scalable, eco-friendly alternative, we align with
          Canada’s conservation goals and ensure a sustainable future for both
          fishers and consumers.
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

export default HomepageSummary;
