import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import missionImg from "../components/mission.png";
import visionImg from "../components/vision.png";

const AboutUs = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
      {/* Mission Section */}
      <Grid
        container
        spacing={4}
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
            society by delivering the best homemade <br />
            food from nearby home chefs.
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
        spacing={4}
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
            Creating a healthy India by converting outside <br /> food
            equivalent to home cooked food.
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
    </Box>
  );
};

export default AboutUs;
