import React from "react";
import { Stack, Box, Typography, Container } from "@mui/material";
import theme from "../../theme";
import faces from "../../assets/hero/faces.png";
import Buttton from "../Button";
const Hero = () => {
  const colors = theme.palette;
  return (
    <Container
      sx={{
        padding: "2.5rem 1.9rem !important",
        position: "relative",
      }}
    >
      {/* Blur circles */}
      {/* left circle */}
      <Box
        sx={{
          width: { xs: "20px", sm: "200px", md: "210px" },
          height: { xs: "20px", sm: "200px", md: "210px" },
          borderRadius: "400px",
          background: colors.primary.main,
          filter: "blur(120px)",
          position: "absolute",
          top: "5rem",
          left: "-2rem",
        }}
      ></Box>

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={{ sm: "4rem", md: "2rem" }}
      >
        {/* left column starts*/}
        <Box
          width={{ sm: "90%", md: "40", xl: "50%" }}
          sx={{ color: colors.text.white, zIndex: 1 }}
        >
          <Stack justifyContent={"space-between"} gap={"1.5rem"}>
            <Typography sx={{ color: colors.accent.main, fontWeight: 700 }}>
              Welcome to Yorfy
            </Typography>
            <Typography
              variant="h1"
              fontSize={{ xs: "2rem", sm: "3rem", md: "4rem" }}
            >
              Now Available, Meet Yorfy NFT Collection ⭐️
            </Typography>
            <Typography sx={{ fontWeight: 200 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Stack>
          <Stack
            direction="row"
            marginTop={10}
            gap={{ xs: "1rem", sm: "2rem" }}
            sx={{ width: "auto" }}
          >
            <Box>
              <Typography
                variant="h3"
                fontSize={{ xs: "20px", sm: "30px", md: "60px" }}
              >
                546
              </Typography>
              <Typography sx={{ fontWeight: 400 }}>NFT Items</Typography>
            </Box>
            <hr style={{ border: "1px solid" }} />
            <Box>
              <Typography
                variant="h3"
                fontSize={{ xs: "20px", sm: "30px", md: "60px" }}
              >
                42
              </Typography>
              <Typography sx={{ fontWeight: 400 }}>Owners</Typography>
            </Box>
            <hr style={{ border: "1px solid" }} />
            <Box>
              <Typography
                variant="h3"
                fontSize={{ xs: "20px", sm: "30px", md: "60px" }}
              >
                378
              </Typography>
              <Typography sx={{ fontWeight: 400 }}>Items sold</Typography>
            </Box>
          </Stack>
        </Box>
        {/* left column ends*/}

        {/* right column starts*/}
        <Box position={"relative"} width={{ sm: "80%", md: "40", xl: "50%" }}>
          <Box
            sx={{
              width: { xs: "20px", sm: "200px", md: "210px" },
              height: { xs: "20px", sm: "200px", md: "210px" },
              borderRadius: "400px",
              background: colors.primary.main,
              filter: "blur(120px)",
              position: "absolute",
              top: { xs: "3rem", md: "5rem" },
              right: { xs: "1rem", md: "1rem" },
            }}
          ></Box>
          <Box
            sx={{
              width: "320px",
              height: "320px",
              borderRadius: "320px",
              background: colors.background.default,
              filter: "blur(120px)",
              position: "absolute",
              top: "6rem",
              right: "20rem",
            }}
          ></Box>
          <Box
            component={"img"}
            src={faces}
            width={"100%"}
            sx={{ zIndex: "1", position: "relative" }}
          />
          <Stack
            direction={"row"}
            gap={3.5}
            justifyContent={"center"}
            padding={{
              xs: "6rem 10px 20px 10px",
              sm: "8.5rem 10px 20px 10px",
              md: "5.2rem 5px 20px 5px",
              xl: "6rem 10px 40px 10px",
            }}
            border={`2px solid ${colors.primary.main}`}
            borderRadius={"8px"}
            sx={{
              position: "absolute",
              bottom: { xs: "-2.5rem", sm: "0" },
              right: "0",
              left: "0",
              margin: "auto",
              zIndex: "0",
              backdropFilter: "blur(15px) saturate(100%) contrast(80%)",
            }}
          >
            <Buttton
              text={"Buy on Open Sea"}
              border=""
              bg={colors.primary.main}
            />
            <Buttton
              text={"Learn Something More"}
              bg={""}
              border="1px solid white"
            />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Hero;
