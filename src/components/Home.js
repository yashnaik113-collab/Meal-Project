// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import foodsticker from "../components/home2padd.png";

// const Home = () => {
//   return (
//     <Box>
//       {/* ✅ Hero Section */}
//       <Box
//         sx={{
//           flex: 1,
//           backgroundColor: "white",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           minHeight: "100vh", // 🔥 full page height
//           display: "flex",
//           alignItems: "center",
//           pl: 10,
//           justifyContent: "flex-start",
//         }}
//       >
//         <Box sx={{ mt: -30, pr: 5, pl: 10 }}>
//           <Typography
//             variant="h2"
//             sx={{ fontWeight: "bold", mb: 2, color: "black" }}
//           >
//             100%...
//           </Typography>
//           <Typography
//             variant="h2"
//             sx={{ fontWeight: "bold", mb: 2, color: "#f44336" }}
//           >
//             Ghar Jaisa Khana
//           </Typography>
//           <Typography variant="h4" sx={{ mb: 1 }}>
//             Where Every Bite...
//           </Typography>
//           <Typography variant="body1">Feels like Home</Typography>
//           <Typography variant="body1">Made with Mother's Love</Typography>
//           <Typography variant="body1">Brings back memories</Typography>

//           <Button
//             component={Link}
//             to="/login"
//             variant="contained"
//             color="warning"
//             sx={{
//               mt: 5,
//               px: 6,
//               py: 1.5,
//               fontSize: "1rem",
//               borderRadius: "8px",
//             }}
//           >
//             Order Now
//           </Button>
//         </Box>

//         {/* ✅ Right Side - Food Sticker */}
//         <Box
//           sx={{ flex: 1, display: "flex", justifyContent: "center", mt: -30 }}
//         >
//           <img
//             src={foodsticker}
//             alt="Food Thali"
//             style={{ width: "80%", maxWidth: "450px", objectFit: "contain" }}
//           />
//         </Box>
//       </Box>

//       {/* ✅ New Info Section (scroll to see) */}
//       <Box
//         sx={{
//           backgroundColor: "#f9f9f9",
//           py: 6,
//           px: 4,
//           textAlign: "center",
//         }}
//       >
//         <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//           Why Choose Us?
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{ maxWidth: "800px", margin: "0 auto" }}
//         >
//           We provide fresh, healthy, and homemade meals prepared by local
//           housewives. No restaurants, no compromise — only authentic ghar jaisa
//           khana delivered to your doorstep.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Home;

// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import foodsticker from "../components/home2padd.png";
// import fullImage from "../components/indiabg.jpg"; // ✅ tuza full screen image import

// const Home = () => {
//   return (
//     <Box>
//       {/* ✅ Hero Section */}
//       <Box
//         sx={{
//           flex: 1,
//           backgroundColor: "white",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           minHeight: "100vh", // 🔥 full page height
//           display: "flex",
//           alignItems: "center",
//           pl: 10,
//           justifyContent: "flex-start",
//         }}
//       >
//         <Box sx={{ mt: -30, pr: 5, pl: 10 }}>
//           <Typography
//             variant="h2"
//             sx={{ fontWeight: "bold", mb: 2, color: "black" }}
//           >
//             100%...
//           </Typography>
//           <Typography
//             variant="h2"
//             sx={{ fontWeight: "bold", mb: 2, color: "#f44336" }}
//           >
//             Ghar Jaisa Khana
//           </Typography>
//           <Typography variant="h4" sx={{ mb: 1 }}>
//             Where Every Bite...
//           </Typography>
//           <Typography variant="body1">Feels like Home</Typography>
//           <Typography variant="body1">Made with Mother's Love</Typography>
//           <Typography variant="body1">Brings back memories</Typography>

//           <Button
//             component={Link}
//             to="/login"
//             variant="contained"
//             color="warning"
//             sx={{
//               mt: 5,
//               px: 6,
//               py: 1.5,
//               fontSize: "1rem",
//               borderRadius: "8px",
//             }}
//           >
//             Order Now
//           </Button>
//         </Box>

//         {/* ✅ Right Side - Food Sticker */}
//         <Box
//           sx={{ flex: 1, display: "flex", justifyContent: "center", mt: -30 }}
//         >
//           <img
//             src={foodsticker}
//             alt="Food Thali"
//             style={{ width: "80%", maxWidth: "450px", objectFit: "contain" }}
//           />
//         </Box>
//       </Box>

//       {/* ✅ Info Section */}
//       <Box
//         sx={{
//           backgroundImage: "",
//           py: 6,
//           px: 4,
//           textAlign: "center",
//         }}
//       >
//         <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//           Why Choose Us?
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{ maxWidth: "800px", margin: "0 auto" }}
//         >
//           We provide fresh, healthy, and homemade meals prepared by local
//           housewives. No restaurants, no compromise — only authentic ghar jaisa
//           khana delivered to your doorstep.
//         </Typography>
//       </Box>

//       {/* ✅ Full-Width Responsive Image */}
//       <Box sx={{ width: "100%", height: "100vh", overflow: "hidden" }}>
//         <img
//           src={fullImage}
//           alt="Full Width"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Home;

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import foodsticker from "../components/home2padd.png";
// import fullImage from "../components/indiabg.jpg"; // Full screen image
import whyBg from "../components/whychooseus.jpg"; // Background image for Why Choose Us

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          pl: { xs: 2, md: 10 },
          justifyContent: "flex-start",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Text */}
        <Box
          sx={{
            mt: { xs: 5, md: -30 },
            pr: { md: 5 },
            pl: { md: 10 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", mb: 2, color: "black" }}
          >
            100%...
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", mb: 2, color: "#f44336" }}
          >
            Ghar Jaisa Khana
          </Typography>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Where Every Bite...
          </Typography>
          <Typography variant="body1">Feels like Home</Typography>
          <Typography variant="body1">Made with Mother's Love</Typography>
          <Typography variant="body1">Brings back memories</Typography>

          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="warning"
            sx={{
              mt: 5,
              px: 6,
              py: 1.5,
              fontSize: "1rem",
              borderRadius: "8px",
            }}
          >
            Order Now
          </Button>
        </Box>

        {/* Right Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            mt: { xs: 5, md: -30 },
          }}
        >
          <img
            src={foodsticker}
            alt="Food Thali"
            style={{ width: "80%", maxWidth: "450px", objectFit: "contain" }}
          />
        </Box>
      </Box>

      {/* Why Choose Us Section with Background */}
      <Box
        sx={{
          backgroundImage: `url(${whyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: { xs: 6, md: 12 },
          px: { xs: 2, md: 10 },
          textAlign: "center",
          color: "#000806f4", // Makes text visible on bg
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Why Choose Us?
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "800px", margin: "0 auto" }}
        >
          We provide fresh, healthy, and homemade meals prepared by local
          housewives. No restaurants, no compromise — only authentic ghar jaisa
          khana delivered to your doorstep.
        </Typography>
      </Box>

      {/* Full-Width Responsive Image */}
      {/* <Box sx={{ width: "100%", height: "100vh", overflow: "hidden" }}>
        <img
          src={whyBg}
          alt="Full Width"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box> */}
    </Box>
  );
};

export default Home;
