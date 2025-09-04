import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; // ✅ correct Link import
import foodsticker from "../components/home2padd.png";

const Home = () => {
  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        pl: 10,
        justifyContent: "flex-start",
      }}
    >
      <Box sx={{ mt: -30, pr: 5, pl: 10 }}>
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

        {/* ✅ Button now navigates to /login */}
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="warning"
          sx={{ mt: 5, px: 6, py: 1.5, fontSize: "1rem", borderRadius: "8px" }}
        >
          Order Now
        </Button>
      </Box>

      {/* ✅ Right Side - Food Sticker */}
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center", mt: -30 }}>
        <img
          src={foodsticker}
          alt="Food Thali"
          style={{ width: "80%", maxWidth: "450px", objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
};

export default Home;
