// // src/components/AboutUs.js
// import React from "react";
// import { Box, Typography } from "@mui/material";
// import aboutImg from "../components/tiffin-bg.jpg"; // ✅ तुझ्याकडे जे image आहे ते वापर

// const AboutUs = () => {
//   return (
//     <Box
//       sx={{
//         flex: 1,
//         backgroundColor: "white",
//         minHeight: "80vh",
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" }, // ✅ mobile वर column, मोठ्या screen वर row
//         alignItems: "center",
//         justifyContent: "center",
//         p: 4,
//       }}
//     >
//       {/* Left Side Image */}
//       <Box
//         component="img"
//         src={aboutImg}
//         alt="About Us"
//         sx={{
//           width: { xs: "100%", md: "50%" },
//           maxHeight: "400px",
//           objectFit: "cover",
//           borderRadius: "12px",
//           boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
//         }}
//       />

//       {/* Right Side Text */}
//       <Box
//         sx={{
//           flex: 1,
//           textAlign: "left",
//           p: { xs: 2, md: 5 },
//         }}
//       >
//         <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
//           About Us
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{ fontSize: "1.2rem", lineHeight: 1.6 }}
//         >
//           MealsOnTheWay is dedicated to serving <b>100% homemade food</b>
//           that feels just like home.
//           <br />
//           <br />
//           Our mission is to empower homemakers to deliver their delicious dishes
//           and spread love through food. Every meal is cooked with
//           <b> passion, care, and authenticity</b>, bringing you a wholesome
//           experience every day.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default AboutUs;

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import missionImg from "../components/mission.png"; // वरचा image
import visionImg from "../components/vision.png"; // खालीचा image

const AboutUs = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 10 } }}>
      {/* Mission Section */}
      <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={missionImg}
            alt="Our Mission"
            sx={{ width: "88%", borderRadius: 2 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
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
            We bring in technology & solutions for building a healthy <br />{" "}
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
      <Grid container spacing={4} alignItems="center">
        {/* Left side text, Right side image */}
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={visionImg}
            alt="Our Vision"
            sx={{ width: "88%", borderRadius: 2 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;

// import React from "react";
// import { Box, Grid, Typography } from "@mui/material";
// import missionImg from "../components/mission.png";
// import visionImg from "../components/vision.png";

// const AboutUs = () => {
//   return (
//     <Box sx={{ p: { xs: 2, md: 10 } }}>
//       {/* Mission Section */}
//       <Grid
//         container
//         spacing={4}
//         alignItems="center"
//         sx={{ mb: 6, flexDirection: { xs: "column", md: "row" } }}
//       >
//         <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
//           <Box
//             component="img"
//             src={missionImg}
//             alt="Our Mission"
//             sx={{ width: { xs: "100%", md: "88%" }, borderRadius: 2 }}
//           />
//         </Grid>
//         <Grid item xs={12} md={6} textAlign="center">
//           <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//             Our Mission
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             sx={{ fontStyle: "italic", color: "#d32f2f", mb: 2 }}
//           >
//             “Jo Khao, Wahi Khilao”
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 1 }}>
//             We bring in technology & solutions for building a healthy <br />{" "}
//             society by delivering the best homemade <br />
//             food from nearby home chefs.
//           </Typography>
//           <Typography variant="body1">
//             Your neighbourhood kitchens are going to serve <br />
//             what they are going to serve their family. Our basic <br />
//             motto is “Jo Khao Wahi Khilao”. So, you can rest <br />
//             assured that you are going to get healthy & tasty <br />
//             home food that has soul in it.
//           </Typography>
//         </Grid>
//       </Grid>

//       {/* Vision Section */}
//       <Grid
//         container
//         spacing={4}
//         alignItems="center"
//         sx={{ flexDirection: { xs: "column", md: "row-reverse" } }}
//       >
//         <Grid item xs={12} md={6} textAlign="center">
//           <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//             Our Vision
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             sx={{ fontStyle: "italic", color: "#d32f2f", mb: 2 }}
//           >
//             “Healthy India”
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 1 }}>
//             Unifying India by removing unseen regional cuisine boundaries
//           </Typography>
//           <Typography variant="body1">
//             Creating a healthy India by converting outside <br /> food
//             equivalent to home cooked food.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "right" }}>
//           <Box
//             component="img"
//             src={visionImg}
//             alt="Our Vision"
//             sx={{ width: { xs: "100%", md: "88%" }, borderRadius: 2 }}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default AboutUs;

// import React from "react";
// import { Box, Typography } from "@mui/material";
// import missionImg from "../components/mission.png";
// import visionImg from "../components/vision.png";

// const AboutUs = () => {
//   return (
//     <Box sx={{ p: { xs: 2, md: 10 } }}>
//       {/* Mission Section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           textAlign: "center",
//           mb: 8,
//         }}
//       >
//         <Box
//           component="img"
//           src={missionImg}
//           alt="Our Mission"
//           sx={{
//             width: { xs: "100%", md: "50%" },
//             borderRadius: 2,
//             mb: 4,
//           }}
//         />
//         <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//           Our Mission
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           sx={{ fontStyle: "italic", color: "#d32f2f", mb: 2 }}
//         >
//           “Jo Khao, Wahi Khilao”
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.6 }}>
//           We bring in technology & solutions for building a healthy society by
//           delivering the best homemade food from nearby home chefs.
//         </Typography>
//         <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
//           Your neighbourhood kitchens are going to serve what they are going to
//           serve their family. Our basic motto is “Jo Khao Wahi Khilao”. So, you
//           can rest assured that you are going to get healthy & tasty home food
//           that has soul in it.
//         </Typography>
//       </Box>

//       {/* Vision Section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           textAlign: "center",
//         }}
//       >
//         <Box
//           component="img"
//           src={visionImg}
//           alt="Our Vision"
//           sx={{
//             width: { xs: "100%", md: "50%" },
//             borderRadius: 2,
//             mb: 4,
//           }}
//         />
//         <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//           Our Vision
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           sx={{ fontStyle: "italic", color: "#d32f2f", mb: 2 }}
//         >
//           “Healthy India”
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.6 }}>
//           Unifying India by removing unseen regional cuisine boundaries
//         </Typography>
//         <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
//           Creating a healthy India by converting outside food equivalent to home
//           cooked food.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default AboutUs;

// import React from "react";
// import { Box, Grid, Typography } from "@mui/material";
// import missionImg from "../components/mission.png";
// import visionImg from "../components/vision.png";

// const AboutUs = () => {
//   return (
//     <Box sx={{ p: { xs: 2, md: 10 } }}>
//       {/* Mission Section */}
//       <Grid
//         container
//         spacing={4}
//         alignItems="center"
//         sx={{ mb: 8, flexDirection: { xs: "column", md: "row" } }}
//       >
//         {/* Mission Image */}
//         <Grid item xs={12} md={6} display="flex" justifyContent="center">
//           <Box
//             component="img"
//             src={missionImg}
//             alt="Our Mission"
//             sx={{ width: { xs: "88%", md: "80%" }, borderRadius: 2 }}
//           />
//         </Grid>

//         {/* Mission Text */}
//         <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
//           <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//             Our Mission
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             sx={{ fontStyle: "italic", color: "#d32f2f", mb: 2 }}
//           >
//             “Jo Khao, Wahi Khilao”
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.6 }}>
//             We bring in technology & solutions for building a <br /> healthy
//             society by delivering the best homemade <br />
//             food from nearby home chefs.
//           </Typography>
//           <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
//             Your neighbourhood kitchens are going to serve
//             <br /> what they are going to serve their family. Our basic <br />
//             motto is “Jo Khao Wahi Khilao”. So, you can rest <br />
//             assured that you are going to get healthy & tasty
//             <br /> home food that has soul in it.
//           </Typography>
//         </Grid>
//       </Grid>

//       {/* Vision Section */}
//       <Grid
//         container
//         spacing={4}
//         alignItems="center"
//         sx={{ flexDirection: { xs: "column", md: "row-reverse" } }}
//       >
//         {/* Vision Image */}
//         <Grid item xs={12} md={6} display="flex" justifyContent="center">
//           <Box
//             component="img"
//             src={visionImg}
//             alt="Our Vision"
//             sx={{ width: { xs: "88%", md: "80%" }, borderRadius: 2 }}
//           />
//         </Grid>

//         {/* Vision Text */}
//         <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
//           <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//             Our Vision
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             sx={{ fontStyle: "italic", color: "#d32f2f", mb: 2 }}
//           >
//             “Healthy India”
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.6 }}>
//             Unifying India by removing unseen regional cuisine boundaries
//           </Typography>
//           <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
//             Creating a healthy India by converting outside <br />
//             food equivalent to home cooked food.
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default AboutUs;
