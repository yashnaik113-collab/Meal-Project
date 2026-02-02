import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import missionImg from "../components/mission.png";
import visionImg from "../components/vision.png";
import valuesImg from "../components/valuesimg.png";
import regionalSnacksImg from "../components/regionalsnacks.png";
import advanceOrderImg from "../components/advanceorder.png";
import spicesImg from "../components/spices.jpg";

const AboutUs = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
      {/* Mission Section */}
      <Grid
        container
        spacing={10}
        alignItems="center"
        sx={{ mb: 10, display: "flex", justifyContent: "center" }}
      >
        {/* Left side image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            src={missionImg}
            alt="Our Mission"
            sx={{ width: "100%", maxWidth: 450, borderRadius: 2 }}
          />
        </Grid>

        {/* Right side text */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Our Mission
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontStyle: "italic", color: "#d32f2f", mb: 2 }}
          >
            “Jo Khao, Wahi Khilao”
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            We bring in technology & solutions for building a healthy <br />
            society by delivering the best homemade food from <br />
            nearby home chefs.
          </Typography>
          <Typography variant="body1">
            Your neighbourhood kitchens are going to serve <br />
            what they are going to serve their family. Our basic <br />
            motto is “Jo Khao Wahi Khilao”. So, you can rest <br />
            assured that you are going to get healthy & tasty <br />
            home food that has soul in it.
          </Typography>
        </Grid>
      </Grid>

      {/* Vision Section */}
      <Grid
        container
        spacing={10}
        alignItems="center"
        sx={{ mb: 10, display: "flex", justifyContent: "center" }}
      >
        {/* Left side text */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Our Vision
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontStyle: "italic", color: "#d32f2f", mb: 2 }}
          >
            “Healthy India”
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Unifying India by removing unseen regional cuisine boundaries
          </Typography>
          <Typography variant="body1">
            Creating a healthy India by converting outside food equivalent{" "}
            <br />
            to home cooked food.
          </Typography>
        </Grid>

        {/* Right side image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            src={visionImg}
            alt="Our Vision"
            sx={{ width: "100%", maxWidth: 450, borderRadius: 2 }}
          />
        </Grid>
      </Grid>

      {/* Values Section */}
      <Grid
        container
        spacing={15}
        alignItems="center"
        sx={{ mb: 10, display: "flex", justifyContent: "center" }}
      >
        {/* Left side image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            src={valuesImg}
            alt="Our Mission"
            sx={{ width: "100%", maxWidth: 450, borderRadius: 2 }}
          />
        </Grid>

        {/* Right side text */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Our Values
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontStyle: "italic", color: "#d32f2f", mb: 2 }}
          >
            “Cooking with Love”
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Empowering all home chefs to earn from the same daily <br />
            cooking that they have been doing for years for their <br />
            loved ones.
          </Typography>
          <Typography variant="body1">
            Health, Satisfaction, Collaboration & Happiness are our <br />
            core values.
          </Typography>
        </Grid>
      </Grid>

      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
      >
        what we offer
      </Typography>

      {/* Background container with spices image */}
      <Box
        sx={{
          backgroundImage: `url(${spicesImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          py: { xs: 6, md: 10 },
          mt: 6,
          position: "relative",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(1px)",
            zIndex: 1,
          },
        }}
      >
        {/* Regional Snacks Section */}
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid
            container
            spacing={{ xs: 3, md: 15 }}
            alignItems="center"
            sx={{ mb: { xs: 6, md: 10 } }}
          >
            {/* Image - Left on desktop, top on mobile */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                order: { xs: -1, md: 1 },
              }}
            >
              <Box
                component="img"
                src={regionalSnacksImg}
                alt="Regional Snacks"
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  borderRadius: 2,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.0)",
                }}
              />
            </Grid>

            {/* Text - Right on desktop, bottom on mobile */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "orange",
                  mb: 2,
                }}
              >
                Regional Snacks
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  fontWeight: 600,
                }}
              >
                Are you missing regional snacks such as pickles, sweets or{" "}
                <br />
                any traditional snack from your region? Do not worry we <br />
                got you covered.
              </Typography>
            </Grid>
          </Grid>

          {/* Advanced Order Section */}
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
            {/* Text - Left on desktop, top on mobile */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: { xs: "center", md: "left" },
                order: { xs: -1, md: 1 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "orange",
                  mb: 2,
                }}
              >
                Advance Order
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  fontWeight: 600,
                }}
              >
                Having weekend plans or guests are coming home. You <br />
                can place a single or bulk food order in advance <br />
                (max. two days before) from your favourite kitchen.
              </Typography>
            </Grid>

            {/* Image - Right on desktop, bottom on mobile */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={advanceOrderImg}
                alt="Advance Order"
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  borderRadius: 2,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.0)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 2, textAlign: "center", mt: 6 }}
      >
        what we offer
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontStyle: "italic",
          color: "#d32f2f",
          mb: 2,
          textAlign: "right",
          paddingRight: { xs: 10, md: 50 },
        }}
      ></Typography> */}
    </Box>
  );
};

export default AboutUs;
