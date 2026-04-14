import React from "react";
import Navbar from "./components/Navbar";
import ServiceNavbar from "./components/ServiceNavbar";
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
import MyAccount from "./components/MyAccount";
import CashBack from "./components/CashBack";
import MyWallet from "./components/MyWallet";
import Help from "./components/Help";
import MyOrders from "./components/MyOrders";
import { CartProvider } from "./components/CartContext";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

// Language pages
import CategoryPage from "./components/CategoryPage";
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
import Students from "./components/Students";
import Elderly from "./components/Elderly";
import Corporate from "./components/Corporate";
import OnDemand from "./components/OnDemand";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient";
import { useGetfoodListData } from "./services/fetchProduct";

const AppContent = () => {
  const { pathname } = useLocation();

  const servicePaths = [
    "/services",
    "/students",
    "/elderly",
    "/corporate",
    "/on-demand",
    "/special-thali",
    "/deluxe-thali",
    "/classic-thali",
    "/comfort-thali",
    "/standard-thali",
    "/jain-thali",
    "/rice-combo",
    "/healthy",
    "/breakfast",
    "/low-calorie-meals",
    "/protein-meal",
    "/salads"
  ];

  const isServicePage = servicePaths.includes(pathname);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {isServicePage ? <ServiceNavbar /> : <Navbar />}

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/joinus" element={<Joinus />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/corporates" element={<ForCorporates />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/cashback" element={<CashBack />} />
          <Route path="/my-wallet" element={<MyWallet />} />
          <Route path="/help" element={<Help />} />
          <Route path="/my-orders" element={<MyOrders />} />

          {/* Specific Thali Routes (Hardcoded + Backend) */}
          <Route path="/special-thali" element={<SpecialThali />} />
          <Route path="/deluxe-thali" element={<DeluxeThali />} />
          <Route path="/classic-thali" element={<ClassicThali />} />
          <Route path="/comfort-thali" element={<ComfortThali />} />
          <Route path="/standard-thali" element={<StandardThali />} />
          <Route path="/jain-thali" element={<JainThali />} />
          <Route path="/rice-combo" element={<RiceCombo />} />
          <Route path="/healthy" element={<Healthy />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/low-calorie-meals" element={<LowCalorieMeals />} />
          <Route path="/protein-meal" element={<ProteinMeal />} />
          <Route path="/salads" element={<Salads />} />
          <Route path="/students" element={<Students />} />
          <Route path="/elderly" element={<Elderly />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/on-demand" element={<OnDemand />} />

          {/* Dynamic Catch-all for other tags */}
          <Route path="/:categoryTag" element={<CategoryPage />} />
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;
