import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Drawer,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ParkIcon from "@mui/icons-material/Park";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import chefImg from "./home2padd.png";
import whyChooseUsImg from "./whychooseus.jpg";
import { loginUser } from "../services/authService";

const benefits = [
  "100% Home Made Food",
  "Everyday Different Menu",
  "Doorstep Delivery",
  "Flexible Reschedule",
  "Eco Friendly Packaging",
];

const reasons = [
  {
    title: "Har Din Special Menu",
    desc: "Say goodbye to repeats and enjoy a fresh menu every day.",
    icon: <EventNoteIcon />,
  },
  {
    title: "Eco Friendly Packaging",
    desc: "Healthy food packed in a cleaner, earth-friendly way.",
    icon: <ParkIcon />,
  },
  {
    title: "Doorstep Delivery",
    desc: "Fresh meals arrive right at your door when you need them.",
    icon: <LocalShippingIcon />,
  },
  {
    title: "100% Home Made Food",
    desc: "Authentic home-style cooking prepared with care.",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "Flexible Reschedule",
    desc: "Pause, skip, or reschedule your meals with ease.",
    icon: <CalendarTodayIcon />,
  },
];

const Login = () => {
  const navigate = useNavigate();
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetLoginState = () => {
    setLoginData({ email: "", password: "" });
    setLoginErrors({});
    setSubmitted(false);
    setLoading(false);
  };

  const handleLoginClick = () => {
    resetLoginState();
    setOpenLoginModal(true);
  };

  const handleCloseModal = () => {
    setOpenLoginModal(false);
    resetLoginState();
  };

  const validateField = (field, value) => {
    if (field === "email") {
      if (!value.trim()) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Enter a valid email address.";
      }
      return "";
    }

    if (field === "password") {
      if (!value) return "Password is required.";
      if (value.length < 8) return "Password must be at least 8 characters.";
      return "";
    }

    return "";
  };

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setLoginData((prev) => ({ ...prev, [field]: value }));

    if (submitted) {
      setLoginErrors((prev) => ({
        ...prev,
        [field]: validateField(field, value),
        form: "",
      }));
    }
  };

  const handleLoginSubmit = async () => {
    setSubmitted(true);
    const errors = {
      email: validateField("email", loginData.email),
      password: validateField("password", loginData.password),
    };
    setLoginErrors(errors);

    if (Object.values(errors).some(Boolean)) {
      return;
    }

    try {
      setLoading(true);
      const data = await loginUser(loginData);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("motw-token", data.accessToken);
      localStorage.setItem("motw-user", JSON.stringify(data.user));
      handleCloseModal();
      navigate("/");
    } catch (error) {
      setLoginErrors((prev) => ({
        ...prev,
        form:
          error.message ||
          error.response?.data?.message ||
          "Unable to login right now. Please check your credentials.",
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "#f8fff2" }}>
      {openLoginModal && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(2px)",
            zIndex: 999,
          }}
          onClick={handleCloseModal}
        />
      )}

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
          <Typography sx={{ fontSize: "32px", fontWeight: "700", color: "#2d8659", mb: 1 }}>
            Login
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#666", mb: 3 }}>
            or{" "}
            <Link to="/signup" style={{ color: "#2d8659", textDecoration: "underline" }}>
              Create An Account
            </Link>
          </Typography>

          <TextField
            fullWidth
            placeholder="Email address"
            type="email"
            value={loginData.email}
            onChange={handleChange("email")}
            sx={{
              mb: loginErrors.email ? 0.5 : 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                "& fieldset": { borderColor: loginErrors.email ? "#d32f2f" : "#ddd", borderWidth: "2px" },
                "&:hover fieldset": { borderColor: loginErrors.email ? "#d32f2f" : "#2d8659" },
                "&.Mui-focused fieldset": { borderColor: loginErrors.email ? "#d32f2f" : "#2d8659" },
              },
            }}
          />
          {loginErrors.email && (
            <Typography sx={{ fontSize: "12px", color: "#d32f2f", mb: 2, pl: 1 }}>
              {loginErrors.email}
            </Typography>
          )}

          <TextField
            fullWidth
            placeholder="Password"
            type="password"
            value={loginData.password}
            onChange={handleChange("password")}
            sx={{
              mb: loginErrors.password ? 0.5 : 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                "& fieldset": { borderColor: loginErrors.password ? "#d32f2f" : "#ddd", borderWidth: "2px" },
                "&:hover fieldset": { borderColor: loginErrors.password ? "#d32f2f" : "#2d8659" },
                "&.Mui-focused fieldset": { borderColor: loginErrors.password ? "#d32f2f" : "#2d8659" },
              },
            }}
          />
          {loginErrors.password && (
            <Typography sx={{ fontSize: "12px", color: "#d32f2f", mb: 2, pl: 1 }}>
              {loginErrors.password}
            </Typography>
          )}

          {loginErrors.form && (
            <Typography sx={{ fontSize: "12px", color: "#d32f2f", mb: 2, pl: 1 }}>
              {loginErrors.form}
            </Typography>
          )}

          <Button
            fullWidth
            onClick={handleLoginSubmit}
            disabled={loading}
            sx={{
              backgroundColor: "#2d8659",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              p: 1.5,
              borderRadius: 3,
              mb: 4,
              textTransform: "uppercase",
              "&:hover": { backgroundColor: "#245a47" },
            }}
          >
            {loading ? <CircularProgress size={22} sx={{ color: "white" }} /> : "Submit"}
          </Button>

          <Box sx={{ borderTop: "1px solid #ddd", my: 3 }} />
          <Typography sx={{ fontSize: "28px", fontWeight: "700", color: "#333", mb: 2 }}>
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

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {benefits.map((benefit) => (
              <Box key={benefit} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <CheckCircleIcon sx={{ color: "#2d8659", fontSize: "24px", flexShrink: 0 }} />
                <Typography sx={{ color: "#666", fontWeight: "500", fontSize: "14px" }}>
                  {benefit}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>

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
        <Box sx={{ fontSize: "24px", fontWeight: "bold", color: "#2d8659" }}>mealsontheway</Box>
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

      <Box sx={{ backgroundColor: "#1ec670", py: { xs: 5, md: 9 }, px: { xs: 2, md: 6 } }}>
        <Grid container spacing={6} alignItems="center" maxWidth="1280px" mx="auto">
          <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={chefImg}
              alt="Meals on the Way Chef"
              sx={{
                width: "100%",
                maxWidth: "380px",
                objectFit: "contain",
                filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.15))",
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontSize: { xs: "36px", md: "50px" }, fontWeight: 900, lineHeight: 1.05 }}>
              LOGIN WITH
              <br />
              YOUR BACKEND
              <br />
              ACCOUNT
            </Typography>
            <Typography sx={{ mt: 2, fontSize: "18px", fontWeight: 600, color: "#163124" }}>
              MealsOnTheWay login now uses your real backend API with email and password.
            </Typography>
            <Button
              onClick={handleLoginClick}
              sx={{
                mt: 3,
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
              Open Login Slider
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={whyChooseUsImg}
              alt="Why choose us"
              sx={{
                width: "100%",
                maxWidth: "360px",
                borderRadius: "28px",
                boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ px: { xs: 2, md: 8 }, py: 8 }}>
        <Typography sx={{ fontSize: { xs: "28px", md: "38px" }, fontWeight: 800, color: "#2d8659", mb: 4, textAlign: "center" }}>
          5 Reasons To Love MealsOnTheWay
        </Typography>
        <Grid container spacing={3} maxWidth="1200px" mx="auto">
          {reasons.map((item) => (
            <Grid item xs={12} md={6} key={item.title}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 3,
                  p: 3,
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.06)",
                }}
              >
                <Box sx={{ backgroundColor: "#61a84b", color: "white", borderRadius: 2, p: 1, display: "flex" }}>
                  {item.icon}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "15px", color: "#111" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "13px", color: "#555", mt: 0.5, lineHeight: 1.5 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
