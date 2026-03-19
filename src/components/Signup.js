import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  IconButton,
  Drawer,
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";

import EventNoteIcon from "@mui/icons-material/EventNote";
import ParkIcon from "@mui/icons-material/Park";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import mumbaiImg from "./mumbai.jpg.jpeg";
import puneImg from "./pune.jpg.jpeg";
import bangaloreImg from "./bangalore.jpg.jpeg";
import kolkataImg from "./kolkata.jpg.jpeg";
import kotaImg from "./kota.jpg.jpeg";
import hyderabadImg from "./hyderabad.jpg.jpeg";
import chennaiImg from "./chennai.jpg.jpeg";
import chefImg from "./home2padd.png";
import whyChooseUsImg from "./whychooseus.jpg";

const Signup = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(true); // auto-open on /signup
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ── SIGNUP STATE ──
  const [signupData, setSignupData] = useState({
    fullName: "", email: "", phone: "", city: "", password: "", confirmPassword: "",
  });
  const [signupErrors, setSignupErrors] = useState({});
  const [signupSubmitted, setSignupSubmitted] = useState(false);

  const handleLoginClick = () => {
    setOpenSignupModal(false);
    setOpenLoginModal(true);
    setPhoneNumber(""); setPhoneError(""); setSubmitted(false);
  };
  const handleSignupClick = () => {
    setOpenLoginModal(false);
    setOpenSignupModal(true);
  };
  const handleCloseModal = () => {
    setOpenLoginModal(false);
    setPhoneNumber(""); setPhoneError(""); setSubmitted(false);
  };
  const handleCloseSignup = () => {
    setOpenSignupModal(false);
    setSignupData({ fullName: "", email: "", phone: "", city: "", password: "", confirmPassword: "" });
    setSignupErrors({}); setSignupSubmitted(false);
  };

  const validatePhone = (value) => {
    if (!value || value.trim() === "") {
      return "Mobile number is required.";
    }
    if (!/^\d+$/.test(value)) {
      return "Only digits are allowed.";
    }
    if (value.length !== 10) {
      return "Mobile number must be exactly 10 digits.";
    }
    if (!/^[6-9]/.test(value)) {
      return "Enter a valid Indian mobile number (starts with 6–9).";
    }
    return "";
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    // Allow only digits, max 10 chars
    if (/^\d{0,10}$/.test(val)) {
      setPhoneNumber(val);
      if (submitted) {
        setPhoneError(validatePhone(val));
      } else {
        // Live clear error once valid
        if (validatePhone(val) === "") setPhoneError("");
      }
    }
  };

  const validateSignupField = (field, value, allData) => {
    switch (field) {
      case "fullName":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 3) return "Name must be at least 3 characters.";
        if (!/^[a-zA-Z\s]+$/.test(value)) return "Name can only contain letters and spaces.";
        return "";
      case "email":
        if (!value.trim()) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address.";
        return "";
      case "phone":
        if (!value.trim()) return "Mobile number is required.";
        if (!/^\d+$/.test(value)) return "Only digits are allowed.";
        if (value.length !== 10) return "Must be exactly 10 digits.";
        if (!/^[6-9]/.test(value)) return "Must start with 6, 7, 8 or 9.";
        return "";
      case "city":
        if (!value) return "Please select your city.";
        return "";
      case "password":
        if (!value) return "Password is required.";
        if (value.length < 8) return "Password must be at least 8 characters.";
        if (!/[A-Z]/.test(value)) return "Must contain at least one uppercase letter.";
        if (!/[0-9]/.test(value)) return "Must contain at least one number.";
        if (!/[!@#$%^&*]/.test(value)) return "Must contain at least one special character.";
        return "";
      case "confirmPassword":
        if (!value) return "Please confirm your password.";
        if (value !== (allData ? allData.password : signupData.password)) return "Passwords do not match.";
        return "";
      default: return "";
    }
  };

  const handleSignupChange = (field) => (e) => {
    const value = e.target.value;
    if (field === "phone" && !/^\d{0,10}$/.test(value)) return;
    const updatedData = { ...signupData, [field]: value };
    setSignupData(updatedData);
    if (signupSubmitted) {
      const err = validateSignupField(field, value, updatedData);
      setSignupErrors((prev) => ({ ...prev, [field]: err }));
      if (field === "password") {
        const cpErr = validateSignupField("confirmPassword", updatedData.confirmPassword, updatedData);
        setSignupErrors((prev) => ({ ...prev, confirmPassword: cpErr }));
      }
    }
  };

  const handleSignupSubmit = () => {
    setSignupSubmitted(true);
    const fields = ["fullName", "email", "phone", "city", "password", "confirmPassword"];
    const errors = {};
    fields.forEach((f) => { errors[f] = validateSignupField(f, signupData[f], signupData); });
    setSignupErrors(errors);
    const hasErrors = Object.values(errors).some((e) => e !== "");
    if (!hasErrors) {
      alert("Account created successfully! 🎉");
      localStorage.setItem("isLoggedIn", "true");
      setOpenSignupModal(false);
    }
  };

  const fieldSx = (hasError) => ({
    mb: hasError ? 0.5 : 2,
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      "& fieldset": { borderColor: hasError ? "#d32f2f" : "#ddd", borderWidth: "2px" },
      "&:hover fieldset": { borderColor: hasError ? "#d32f2f" : "#2d8659" },
      "&.Mui-focused fieldset": { borderColor: hasError ? "#d32f2f" : "#2d8659" },
    },
  });

  const errorText = (msg) =>
    msg ? (
      <Typography sx={{ fontSize: "11.5px", color: "#d32f2f", mb: 1.5, pl: 1 }}>⚠️ {msg}</Typography>
    ) : null;

  const handleLoginSubmit = () => {
    setSubmitted(true);
    const error = validatePhone(phoneNumber);
    setPhoneError(error);
    if (!error) {
      alert(`OTP sent to +91 ${phoneNumber}`);
      localStorage.setItem("isLoggedIn", "true");
      setOpenLoginModal(false);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Signup Backdrop */}
      {openSignupModal && (
        <Box
          sx={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.3)", backdropFilter: "blur(2px)", zIndex: 999 }}
          onClick={handleCloseSignup}
        />
      )}
      {/* Login Backdrop */}
      {openLoginModal && (
        <Box
          sx={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.3)", backdropFilter: "blur(2px)", zIndex: 999 }}
          onClick={handleCloseModal}
        />
      )}

      {/* ── SIGNUP DRAWER ── */}
      <Drawer
        anchor="right"
        open={openSignupModal}
        onClose={handleCloseSignup}
        sx={{ "& .MuiDrawer-paper": { width: { xs: "100%", sm: 450 }, backgroundColor: "white", p: 3, boxShadow: "-2px 0 12px rgba(0,0,0,0.15)", overflowY: "auto" } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
          <IconButton onClick={handleCloseSignup} size="small"><CloseIcon sx={{ fontSize: "28px", color: "#333" }} /></IconButton>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "32px", fontWeight: "700", color: "#2d8659", mb: 1 }}>Create Account</Typography>
          <Typography sx={{ fontSize: "14px", color: "#666", mb: 3 }}>
            Already have an account?{" "}
            <Box component="span" onClick={handleLoginClick} sx={{ color: "#2d8659", textDecoration: "underline", cursor: "pointer" }}>Login here</Box>
          </Typography>

          <TextField fullWidth placeholder="Full Name" variant="outlined"
            value={signupData.fullName} onChange={handleSignupChange("fullName")}
            sx={fieldSx(!!signupErrors.fullName)} />
          {errorText(signupErrors.fullName)}

          <TextField fullWidth placeholder="Email Address" variant="outlined" type="email"
            value={signupData.email} onChange={handleSignupChange("email")}
            sx={fieldSx(!!signupErrors.email)} />
          {errorText(signupErrors.email)}

          <Box sx={{ display: "flex", alignItems: "center", border: `2px solid ${signupErrors.phone ? "#d32f2f" : "#ddd"}`, borderRadius: 3, mb: signupErrors.phone ? 0.5 : 2, overflow: "hidden" }}>
            <Typography sx={{ px: 2, fontWeight: "600", color: "#333", minWidth: "60px" }}>+91</Typography>
            <TextField fullWidth placeholder="Mobile Number" variant="standard" InputProps={{ disableUnderline: true }}
              value={signupData.phone} onChange={handleSignupChange("phone")}
              inputProps={{ maxLength: 10, inputMode: "numeric" }}
              sx={{ px: 2, py: 1.5, "& input::placeholder": { color: "#999", opacity: 1 } }} />
            <Typography sx={{ pr: 2, fontSize: "11px", color: signupData.phone.length === 10 ? "#2d8659" : "#aaa" }}>
              {signupData.phone.length}/10
            </Typography>
          </Box>
          {errorText(signupErrors.phone)}

          <FormControl fullWidth error={!!signupErrors.city} sx={{ mb: signupErrors.city ? 0.5 : 2, "& .MuiOutlinedInput-root": { borderRadius: 3, "& fieldset": { borderColor: signupErrors.city ? "#d32f2f" : "#ddd", borderWidth: "2px" } } }}>
            <Select displayEmpty value={signupData.city} onChange={handleSignupChange("city")}
              renderValue={(val) => val || <span style={{ color: "#999" }}>Select Your City</span>}>
              {["Mumbai", "Pune", "Bangalore", "Kolkata", "Kota", "Hyderabad", "Chennai"].map((city) => (
                <MenuItem key={city} value={city}>{city}</MenuItem>
              ))}
            </Select>
            {signupErrors.city && <FormHelperText>⚠️ {signupErrors.city}</FormHelperText>}
          </FormControl>

          <TextField fullWidth placeholder="Password" variant="outlined" type="password"
            value={signupData.password} onChange={handleSignupChange("password")}
            sx={fieldSx(!!signupErrors.password)} />
          {errorText(signupErrors.password)}

          <TextField fullWidth placeholder="Confirm Password" variant="outlined" type="password"
            value={signupData.confirmPassword} onChange={handleSignupChange("confirmPassword")}
            sx={fieldSx(!!signupErrors.confirmPassword)} />
          {signupData.confirmPassword && !signupErrors.confirmPassword && (
            <Typography sx={{ fontSize: "11px", color: "#2d8659", mb: 1.5, pl: 1 }}>✅ Passwords match</Typography>
          )}
          {errorText(signupErrors.confirmPassword)}

          <Button fullWidth onClick={handleSignupSubmit}
            sx={{ backgroundColor: "#2d8659", color: "white", fontWeight: "700", fontSize: "16px", p: 1.5, borderRadius: 3, mb: 3, mt: 1, textTransform: "uppercase", "&:hover": { backgroundColor: "#245a47" } }}>
            Create Account
          </Button>

          <Box sx={{ borderTop: "1px solid #ddd", my: 3 }} />
          <Typography sx={{ fontSize: "20px", fontWeight: "700", color: "#333", mb: 2 }}>Why Join Mealsontheway?</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {["100% Home Made Food", "Everyday Different Menu", "Doorstep Delivery", "Flexible Reschedule", "Eco Friendly Packaging"].map((b, i) => (
              <Box key={i} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <CheckCircleIcon sx={{ color: "#2d8659", fontSize: "24px", flexShrink: 0 }} />
                <Typography sx={{ color: "#666", fontWeight: "500", fontSize: "14px" }}>{b}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>

      {/* Login Drawer */}
      <Drawer
        anchor="right"
        open={openLoginModal}
        onClose={handleCloseModal}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: 450 },
            backgroundColor: "white",
            p: 3,
            boxShadow: "-2px 0 12px rgba(0,0,0,0.15)",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <IconButton onClick={handleCloseModal} size="small">
            <CloseIcon sx={{ fontSize: "28px", color: "#333" }} />
          </IconButton>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#2d8659",
              mb: 1,
            }}
          >
            Login
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#666", mb: 3 }}>
            or{" "}
            <Link
              to="/signup"
              style={{ color: "#2d8659", textDecoration: "underline" }}
            >
              Create An Account
            </Link>
          </Typography>

          {/* Phone Input */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: `2px solid ${phoneError ? "#d32f2f" : "#ddd"}`,
              borderRadius: 3,
              mb: phoneError ? 0.5 : 3,
              overflow: "hidden",
              transition: "border-color 0.2s",
            }}
          >
            <Typography
              sx={{ px: 2, fontWeight: "600", color: "#333", minWidth: "60px" }}
            >
              +91
            </Typography>
            <TextField
              fullWidth
              placeholder="Your mobile number"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              value={phoneNumber}
              onChange={handlePhoneChange}
              onBlur={() => {
                if (phoneNumber !== "") {
                  setPhoneError(validatePhone(phoneNumber));
                }
              }}
              inputProps={{ maxLength: 10, inputMode: "numeric" }}
              sx={{
                px: 2,
                py: 1.5,
                "& input::placeholder": { color: "#999", opacity: 1 },
              }}
            />
          </Box>

          {/* Inline error message */}
          {phoneError && (
            <Typography
              sx={{
                fontSize: "12px",
                color: "#d32f2f",
                mb: 2,
                pl: 1,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              ⚠️ {phoneError}
            </Typography>
          )}

          {/* Character counter */}
          <Typography
            sx={{
              fontSize: "11px",
              color: phoneNumber.length === 10 ? "#2d8659" : "#aaa",
              textAlign: "right",
              mb: 2,
              mt: phoneError ? 0 : -2,
            }}
          >
            {phoneNumber.length}/10
          </Typography>

          {/* Submit Button */}
          <Button
            fullWidth
            onClick={handleLoginSubmit}
            sx={{
              backgroundColor:
                phoneNumber.length === 10 && !phoneError ? "#2d8659" : "#999",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              p: 1.5,
              borderRadius: 3,
              mb: 4,
              textTransform: "uppercase",
              transition: "background-color 0.2s",
              "&:hover": {
                backgroundColor:
                  phoneNumber.length === 10 && !phoneError ? "#245a47" : "#777",
              },
            }}
          >
            Submit
          </Button>

          {/* Divider */}
          <Box sx={{ borderTop: "1px solid #ddd", my: 3 }} />

          {/* Flexible Plans */}
          <Typography
            sx={{ fontSize: "28px", fontWeight: "700", color: "#333", mb: 2 }}
          >
            Flexible Plans
          </Typography>
          <Box
            sx={{
              backgroundColor: "#1a2341",
              color: "white",
              px: 2,
              py: 1,
              borderRadius: 2,
              display: "inline-block",
              mb: 3,
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            3, 5, 10 or 20 Days
          </Box>

          {/* Benefits */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              "100% Home Made Food",
              "Everyday Different Menu",
              "Doorstep Delivery",
              "Flexible Reschedule",
              "Eco Friendly Packaging",
            ].map((benefit, idx) => (
              <Box
                key={idx}
                sx={{ display: "flex", gap: 2, alignItems: "center" }}
              >
                <CheckCircleIcon
                  sx={{ color: "#2d8659", fontSize: "24px", flexShrink: 0 }}
                />
                <Typography
                  sx={{ color: "#666", fontWeight: "500", fontSize: "14px" }}
                >
                  {benefit}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 8 },
          py: 2,
          backgroundColor: "white",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Box sx={{ fontSize: "24px", fontWeight: "bold", color: "#2d8659" }}>
          mealsontheway
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            onClick={handleLoginClick}
            sx={{
              border: "2px solid #333",
              color: "#333",
              borderRadius: 3,
              px: 3,
              py: 1,
              textTransform: "none",
              fontSize: "14px",
              fontWeight: "600",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/signup"
            sx={{
              backgroundColor: "#2d8659",
              color: "white",
              borderRadius: 3,
              px: 3,
              py: 1,
              textTransform: "none",
              fontSize: "14px",
              fontWeight: "600",
              "&:hover": { backgroundColor: "#245a47" },
            }}
          >
            Sign up
          </Button>
        </Box>
      </Box>

      {/* Hero Banner */}
      <Box
        sx={{
          backgroundColor: "#1ec670",
          py: { xs: 4, md: 10 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={{ xs: 6, md: 10 }}
          >
            {/* Left - Image */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                component="img"
                src={chefImg}
                alt="Meals on the Way Chef"
                sx={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.15))",
                }}
              />
            </Grid>

            {/* Center - Special Offer */}
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  sx={{
                    fontSize: { xs: "36px", md: "48px" },
                    fontWeight: "900",
                    color: "#1a1a1a",
                    mb: 1,
                    lineHeight: 1.1,
                  }}
                >
                  SPECIAL
                  <br />
                  OFFER
                  <br />
                  FOR YOU
                </Typography>

                <Box
                  sx={{
                    mb: 3,
                    mt: 2,
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: { xs: "center", md: "flex-start" },
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "56px", md: "72px" },
                      fontWeight: "900",
                      color: "#ffeb3b",
                      lineHeight: 1,
                    }}
                  >
                    42%
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "24px", md: "32px" },
                      fontWeight: "700",
                      color: "#1a1a1a",
                    }}
                  >
                    OFF
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#1a2341",
                    color: "white",
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: "700",
                    "&:hover": { backgroundColor: "#0f1520" },
                  }}
                >
                  Try 3-Day Plan
                </Button>
              </Box>
            </Grid>

            {/* Right - Why Mealawe */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{ textAlign: { xs: "center", md: "right" }, pl: { md: 4 } }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "28px", md: "36px" },
                    fontWeight: "900",
                    color: "white",
                    mb: 3,
                  }}
                >
                  Why Mealsontheway ?
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    alignItems: { xs: "center", md: "flex-end" },
                  }}
                >
                  {[
                    "100% cooked by homechefs",
                    "Up to 40% lower cost",
                    "Cornstarch packaging",
                    "Hot, fresh meal delivered",
                    "Regular kitchen hygiene audits",
                    "Pause, skip or reschedule anytime",
                  ].map((benefit, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                        justifyContent: { xs: "center", md: "flex-end" },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: "16px",
                          textAlign: { xs: "center", md: "right" },
                        }}
                      >
                        {benefit}
                      </Typography>
                      <CheckCircleIcon
                        sx={{ color: "white", fontSize: "24px" }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Cities and Stats Section */}
      <Box sx={{ py: 8, px: { xs: 2, md: 8 }, backgroundColor: "#ffffff" }}>
        {/* Cities Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: { xs: "nowrap", md: "wrap" },
            overflowX: { xs: "auto", md: "visible" },
            gap: { xs: 3, md: 4 },
            mb: 8,
            pb: { xs: 2, md: 0 },
            "&::-webkit-scrollbar": { height: "6px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ccc",
              borderRadius: "3px",
            },
          }}
        >
          {[
            { name: "MUMBAI", img: mumbaiImg },
            { name: "PUNE", img: puneImg },
            { name: "BANGALORE", img: bangaloreImg },
            { name: "KOLKATA", img: kolkataImg },
            { name: "KOTA", img: kotaImg },
            { name: "HYDERABAD", img: hyderabadImg, soon: true },
            { name: "CHENNAI", img: chennaiImg, soon: true },
          ].map((city, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "120px",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  mb: 2,
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={city.img}
                  alt={city.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    opacity: city.soon ? 0.3 : 1,
                  }}
                />
                {city.soon && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 800,
                        fontSize: "14px",
                        color: "#333",
                        textAlign: "center",
                        lineHeight: 1.2,
                      }}
                    >
                      Coming
                      <br />
                      Soon
                    </Typography>
                  </Box>
                )}
              </Box>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#666",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                {city.name}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Big Boxes Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {/* Card 1 */}
          <Box
            sx={{
              width: { xs: "100%", sm: "280px" },
              border: "1px solid #776a7e",
              borderRadius: 4,
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <MapOutlinedIcon
              sx={{ fontSize: "56px", color: "#776a7e", mb: 2 }}
            />
            <Typography
              sx={{
                fontSize: "48px",
                fontWeight: "700",
                color: "#776a7e",
                lineHeight: 1,
              }}
            >
              187+
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#776a7e",
                mt: 1,
              }}
            >
              Pin Codes
            </Typography>
          </Box>
          {/* Card 2 */}
          <Box
            sx={{
              width: { xs: "100%", sm: "280px" },
              border: "1px solid #776a7e",
              borderRadius: 4,
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <RestaurantMenuIcon
              sx={{ fontSize: "56px", color: "#776a7e", mb: 2 }}
            />
            <Typography
              sx={{
                fontSize: "48px",
                fontWeight: "700",
                color: "#776a7e",
                lineHeight: 1,
              }}
            >
              1000+
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#776a7e",
                mt: 1,
              }}
            >
              Home Chefs
            </Typography>
          </Box>
          {/* Card 3 */}
          <Box
            sx={{
              width: { xs: "100%", sm: "280px" },
              border: "1px solid #776a7e",
              borderRadius: 4,
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <TakeoutDiningOutlinedIcon
              sx={{ fontSize: "56px", color: "#776a7e", mb: 2 }}
            />
            <Typography
              sx={{
                fontSize: "48px",
                fontWeight: "700",
                color: "#776a7e",
                lineHeight: 1,
              }}
            >
              9,54,210+
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#776a7e",
                mt: 1,
              }}
            >
              Meals Delivered
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* 5 Reasons Section */}
      <Box 
        sx={{ 
          position: "relative", 
          width: "100%", 
          minHeight: "800px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          overflow: "hidden", 
          backgroundColor: "#f2ffe6",
          py: 8
        }}
      >
        {/* Concentric Circles Background */}
        <Box sx={{ position: "absolute", width: "1300px", height: "1300px", borderRadius: "50%", backgroundColor: "#e2ffd1", zIndex: 1, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <Box sx={{ position: "absolute", width: "1000px", height: "1000px", borderRadius: "50%", backgroundColor: "#c7fba9", zIndex: 2, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <Box sx={{ position: "absolute", width: "700px", height: "700px", borderRadius: "50%", backgroundColor: "#a6df7a", zIndex: 3, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <Box sx={{ position: "absolute", width: "450px", height: "450px", borderRadius: "50%", backgroundColor: "#7cb658", zIndex: 4, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

        {/* Content Container */}
        <Box 
          sx={{ 
            zIndex: 10, 
            width: "100%", 
            maxWidth: "1300px", 
            mx: "auto", 
            display: "flex", 
            flexDirection: { xs: "column", md: "row" }, 
            justifyContent: "space-between", 
            alignItems: "center", 
            position: "relative",
            gap: { xs: 6, md: 0 }
          }}
        >
          {/* Left - "5 Reasons" Text */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: { xs: "center", md: "flex-end" }, pr: { md: 6 }, pb: { xs: 4, md: 0 } }}>
            <Box 
              sx={{ 
                backgroundColor: "white", 
                borderRadius: 4, 
                p: 3, 
                display: "inline-flex", 
                alignItems: "center", 
                gap: 2, 
                boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <Typography sx={{ fontSize: "80px", fontWeight: "900", color: "#61a84b", lineHeight: 0.8 }}>5</Typography>
              <Typography sx={{ fontSize: "22px", fontWeight: "800", color: "#61a84b", lineHeight: 1.1 }}>
                REASONS<br/>TO LOVE<br/>MEALAWE
              </Typography>
            </Box>
          </Box>

          {/* Center - Circle Image & Button */}
          <Box sx={{ flexShrink: 0, position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box 
              sx={{
                width: "400px", 
                height: "400px", 
                borderRadius: "50%", 
                overflow: "hidden", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                backgroundColor: "#d5d2bd" // Fallback if image has transparency or loads late
              }}
            >
              <Box component="img" src={whyChooseUsImg} alt="5 reasons" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Button 
              sx={{
                mt: -3, // overlaps the image slightly
                backgroundColor: "#61a84b", 
                color: "white", 
                px: 5, 
                py: 1.5, 
                borderRadius: 8, 
                fontSize: "16px", 
                fontWeight: "700",
                textTransform: "none",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                "&:hover": { backgroundColor: "#4f8d3c" }
              }}
            >
              Subscribe Now
            </Button>
          </Box>

          {/* Right - 5 Floating Tooltips */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3, pl: { md: 2 } }}>
            {[
              { title: "Har Din Special Menu", desc: "Say goodbye to boring repeats - enjoy a new menu every day!", icon: <EventNoteIcon />, ml: { xs: 0, md: -6 } },
              { title: "Eco Friendly Packaging", desc: "Healthy food in earth-friendly packs.", icon: <ParkIcon />, ml: { xs: 0, md: 2 } },
              { title: "Doorstep Delivery", desc: "Your mom's kitchen, now just a doorbell away!", icon: <LocalShippingIcon />, ml: { xs: 0, md: 8 } },
              { title: "100% Home Made Food", desc: "Purely homemade, just like maa makes it.", icon: <HomeOutlinedIcon />, ml: { xs: 0, md: 2 } },
              { title: "Flexible Reschedule", desc: "Plans change? No worries! Easily reschedule your meals anytime.", icon: <CalendarTodayIcon />, ml: { xs: 0, md: -6 } },
            ].map((item, idx) => (
              <Box 
                key={idx}
                sx={{ 
                  backgroundColor: "white", 
                  borderRadius: 3, 
                  p: 2, 
                  pr: 4,
                  display: "flex", 
                  gap: 2, 
                  alignItems: "center",
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.06)", 
                  width: "100%",
                  maxWidth: "350px", 
                  ml: item.ml,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateX(5px)" }
                }}
              >
                <Box sx={{ backgroundColor: "#61a84b", color: "white", borderRadius: 2, p: 1, display: "flex", flexShrink: 0 }}>
                  {item.icon}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: "800", fontSize: "14px", color: "#111", lineHeight: 1.2 }}>{item.title}</Typography>
                  <Typography sx={{ fontSize: "12px", color: "#555", mt: 0.5, lineHeight: 1.4 }}>{item.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
