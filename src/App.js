import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Box } from "@mui/material";
import Login from "./components/login";
import Signup from "./components/Signup";
import Joinus from "./components/Joinus";
import AboutUs from "./components/Aboutus";
import Services from "./components/Services";
import ContactUs from "./components/contactus";
import ForCorporates from "./components/forcorporates";
import CartPage from "./components/CartPage";
import { CartProvider } from "./components/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

// Language pages
import PunjabiPage from "./components/PunjabiPage";
import GujaratiPage from "./components/GujaratiPage";
import SouthPage from "./components/SouthPage";
import KashmiriPage from "./components/KashmiriPage";
import MaharashtrianPage from "./components/MaharashtrianPage";
import BihariPage from "./components/BihariPage";
import NorthPage from "./components/NorthPage";
import BengaliPage from "./components/BengaliPage";
import RajasthaniPage from "./components/RajasthaniPage";
import SpecialThali from "./components/specialthali";
import DeluxeThali from "./components/DeluxeThali";
import ClassicThali from "./components/ClassicThali";
import ComfortThali from "./components/ComfortThali";
import StandardThali from "./components/StandardThali";
import JainThali from "./components/JainThali";
import RiceCombo from "./components/RiceCombo";
import Healthy from "./components/Healthy";
import Breakfast from "./components/Breakfast";
import LowCalorieMeals from "./components/LowCalorieMeals";
import ProteinMeal from "./components/ProteinMeal";
import Salads from "./components/Salads";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient";
import { useGetfoodListData } from "./services/fetchProduct";

const App = () => {
  const { data: foodData } = useGetfoodListData();
  console.log("foodData", foodData?.data);

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Router>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Navbar />

            <Box sx={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/joinus" element={<Joinus />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/corporates" element={<ForCorporates />} />

                {/* Language-specific routes */}
                <Route path="/cart" element={<CartPage />} />
                <Route path="/Punjabi" element={<PunjabiPage />} />
                <Route path="/gujarati" element={<GujaratiPage />} />
                <Route path="/south" element={<SouthPage />} />
                <Route path="/kashmiri" element={<KashmiriPage />} />
                <Route path="/maharashtrian" element={<MaharashtrianPage />} />
                <Route path="/bihari" element={<BihariPage />} />
                <Route path="/north" element={<NorthPage />} />
                <Route path="/bengali" element={<BengaliPage />} />
                <Route path="/rajasthani" element={<RajasthaniPage />} />
                <Route path="/special-thali" element={<SpecialThali />} />
                <Route path="/deluxe-thali" element={<DeluxeThali />} />
                <Route path="/classic-thali" element={<ClassicThali />} />
                <Route path="/comfort-thali" element={<ComfortThali />} />
                <Route path="/standard-thali" element={<StandardThali />} />
                <Route path="/jain-thali" element={<JainThali />} />
                <Route path="/rice-combo" element={<RiceCombo />} />
                <Route path="/healthy" element={<Healthy />} />
                <Route path="/breakfast" element={<Breakfast />} />
                <Route
                  path="/low-calorie-meals"
                  element={<LowCalorieMeals />}
                />
                <Route path="/protein-meal" element={<ProteinMeal />} />
                <Route path="/salads" element={<Salads />} />
              </Routes>
            </Box>

            <Footer />
          </Box>
        </Router>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;
