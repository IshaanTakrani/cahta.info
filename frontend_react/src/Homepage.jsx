import React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { styled } from "@mui/joy/styles";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Select
      value={mode}
      onChange={(event, newMode) => {
        setMode(newMode);
      }}
      sx={{ width: "max-content" }}
    >
      <Option value="system">System</Option>
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
}

const StyledCard = styled(Card)({
  margin: "16px",
  padding: "24px",
  flex: 1,
  minWidth: "280px",
  maxWidth: "400px",
  width: "100%",

  minHeight: "245px",
});

function Homepage() {
  return (
    <div>
      <Sheet
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: 1,
          p: 3,
          pt: 20,
          borderRadius: 25,
          bgcolor: "background.body",
          color: "text.primary",
        }}
      >
        <Typography
          level="h1"
          sx={{
            fontFamily: "SixtyFour",
            fontSize: 50,
            m: 1,
          }}
        >
          We are Project CAHTA
        </Typography>
        <Typography
          level="h3"
          sx={{
            fontFamily: "Lora",
            m: 1,
          }}
        >
          Catch Smarter. Tread Lighter. Sustain Our Oceans.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            p: 8,
            px: 2,
            m: 2,
            width: "100%",
            flexWrap: "wrap", // Allow wrapping for small screens
            gap: 2,
          }}
        >
          <StyledCard sx={{ m: 2, p: 3, flex: 1 }}>
            <Typography level="h3">Sustainability</Typography>

            <svg
              width="58px"
              height="58px"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M7 21C7 21 7.5 16.5 11 12.5"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M19.1297 4.24224L19.7243 10.4167C20.0984 14.3026 17.1849 17.7626 13.2989 18.1367C9.486 18.5039 6.03191 15.7168 5.66477 11.9039C5.29763 8.09099 8.09098 4.70237 11.9039 4.33523L18.475 3.70251C18.8048 3.67074 19.098 3.91239 19.1297 4.24224Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <Typography>
              The CAHTA net uses a single-point-of-contact system to
              significantly reduce the amount of seabed contact, drastically
              reducing the amount of carbon-rich sediment being released into
              ocean ecosystems, preserving the integrity of the food web
            </Typography>
          </StyledCard>
          <StyledCard sx={{ m: 2, p: 3, flex: 1 }}>
            <Typography level="h3">Fuel Efficiency</Typography>
            <svg
              width="58px"
              height="58px"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M4.5 16.5L18.5 10"
                stroke="#000000"
                stroke-width="1.5"
              ></path>
              <path
                d="M20 14C20 9.58172 12 2 12 2C12 2 4 9.58172 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14Z"
                stroke="#000000"
                stroke-width="1.5"
              ></path>
            </svg>
            <Typography>
              The CAHTA net's reduced seafloor surface contact reduces drag,
              allowing for more efficient trawling, saving fisheries on
              operating costs.
            </Typography>
          </StyledCard>
          <StyledCard sx={{ m: 2, p: 3, flex: 1 }}>
            <Typography level="h3">Targeted Catch</Typography>
            <svg
              width="58px"
              height="58px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M16 7C17.1046 7 18 6.10457 18 5C18 3.89543 17.1046 3 16 3C14.8954 3 14 3.89543 14 5C14 6.10457 14.8954 7 16 7ZM16 7C16 7 16 13.0948 16 17C16 23 6 23 6 17V13L8 15"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <Typography>
              By emitting species-specific sound frequencies, the hydroacoustic
              transducers (underwater speakers) equipped on the CAHTA net
              selectively attract desired fish while allowing non-target species
              to escape, reducing bycatch and waste.
            </Typography>
          </StyledCard>
        </Box>
        {/* <Sheet
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            borderRadius: 10,
            my: 5,
            bgcolor: "background.body",
            color: "text.primary",
            minWidth: "40%",
            maxWidth: "50%",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Lora",
                fontSize: "1em",
              }}
            >
              CAHTA introduces a groundbreaking bottom trawling net that uses
              sound technology to attract groundfish while minimizing
              environmental impact and reducing fuel costs.
            </Typography>
            <img
              style={{ width: "100%", padding: "10px", alignSelf: "center" }}
              src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              alt="Empty placeholder image, no content"
            />
          </Box>
        </Sheet> */}
      </Sheet>
    </div>
  );
}

export default Homepage;
