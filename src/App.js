import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Box } from "@mui/material";
import Login from "./components/login"; // ✅ keep capital L
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Joinus from "./components/Joinus";

const App = () => {
  return (
    <Router>
      {" "}
      {/* ✅ wrap everything inside Router */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        {/* ✅ Routes will decide what to render */}
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Joinus" element={<Joinus />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
};

export default App;
