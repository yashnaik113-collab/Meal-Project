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
import { loginUser, registerUser } from "../services/authService";

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
    desc: "Enjoy a new menu every day from a rotating meal plan.",
    icon: <EventNoteIcon />,
  },
  {
    title: "Eco Friendly Packaging",
    desc: "Meals are packed carefully with cleaner, sustainable materials.",
    icon: <ParkIcon />,
  },
  {
    title: "Doorstep Delivery",
    desc: "Fresh meals are delivered quickly and reliably to your address.",
    icon: <LocalShippingIcon />,
  },
  {
    title: "100% Home Made Food",
    desc: "Meals are prepared in a home-style kitchen experience.",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "Flexible Reschedule",
    desc: "You can adjust the plan when your schedule changes.",
    icon: <CalendarTodayIcon />,
  },
];

const Signup = () => {
  const navigate = useNavigate();
  const [openSignupModal, setOpenSignupModal] = useState(true);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signupErrors, setSignupErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetSignupState = () => {
    setSignupData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setSignupErrors({});
    setSubmitted(false);
    setLoading(false);
  };

  const handleCloseSignup = () => {
    setOpenSignupModal(false);
    resetSignupState();
    navigate("/login");
  };

  const validateField = (field, value, data) => {
    if (field === "name") {
      if (!value.trim()) return "Full name is required.";
      if (value.trim().length < 3) return "Name must be at least 3 characters.";
      return "";
    }

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

    if (field === "confirmPassword") {
      if (!value) return "Please confirm your password.";
      if (value !== data.password) return "Passwords do not match.";
      return "";
    }

    return "";
  };

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    const nextData = { ...signupData, [field]: value };
    setSignupData(nextData);

    if (submitted) {
      setSignupErrors((prev) => ({
        ...prev,
        [field]: validateField(field, value, nextData),
        confirmPassword:
          field === "password"
            ? validateField("confirmPassword", nextData.confirmPassword, nextData)
            : prev.confirmPassword,
        form: "",
      }));
    }
  };

  const handleSignupSubmit = async () => {
    setSubmitted(true);
    const errors = {
      name: validateField("name", signupData.name, signupData),
      email: validateField("email", signupData.email, signupData),
      password: validateField("password", signupData.password, signupData),
      confirmPassword: validateField("confirmPassword", signupData.confirmPassword, signupData),
    };
    setSignupErrors(errors);

    if (Object.values(errors).some(Boolean)) {
      return;
    }

    try {
      setLoading(true);
      await registerUser({
        name: signupData.name.trim(),
        email: signupData.email.trim(),
        password: signupData.password,
      });

      const loginData = await loginUser({
        email: signupData.email.trim(),
        password: signupData.password,
      });

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("motw-token", loginData.accessToken);
      localStorage.setItem("motw-user", JSON.stringify(loginData.user));

      handleCloseSignup();
    } catch (error) {
      setSignupErrors((prev) => ({
        ...prev,
        form:
          error.message ||
          error.response?.data?.message ||
          "Unable to create your account right now. Please try again.",
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "#f8fff2" }}>
      {openSignupModal && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(2px)",
            zIndex: 999,
          }}
          onClick={handleCloseSignup}
        />
      )}

      <Drawer
        anchor="right"
        open={openSignupModal}
        onClose={handleCloseSignup}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: 450 },
            backgroundColor: "white",
            p: 3,
            boxShadow: "-2px 0 12px rgba(0,0,0,0.15)",
            overflowY: "auto",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
          <IconButton onClick={handleCloseSignup} size="small">
            <CloseIcon sx={{ fontSize: "28px", color: "#333" }} />
          </IconButton>
        </Box>

        <Box>
          <Typography sx={{ fontSize: "32px", fontWeight: "700", color: "#2d8659", mb: 1 }}>
            Create Account
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#666", mb: 3 }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#2d8659", textDecoration: "underline" }}>
              Login here
            </Link>
          </Typography>

          <TextField
            fullWidth
            placeholder="Full Name"
            value={signupData.name}
            onChange={handleChange("name")}
            sx={{
              mb: signupErrors.name ? 0.5 : 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                "& fieldset": { borderColor: signupErrors.name ? "#d32f2f" : "#ddd", borderWidth: "2px" },
                "&:hover fieldset": { borderColor: signupErrors.name ? "#d32f2f" : "#2d8659" },
                "&.Mui-focused fieldset": { borderColor: signupErrors.name ? "#d32f2f" : "#2d8659" },
              },
            }}
          />
          {signupErrors.name && (
            <Typography sx={{ fontSize: "12px", color: "#d32f2f", mb: 2, pl: 1 }}>
              {signupErrors.name}
            </Typography>
          )}

          <TextField
            fullWidth
            placeholder="Email Address"
            type="email"
            value={signupData.email}
            onChange={handleChange("email")}
            sx={{
              mb: signupErrors.email ? 0.5 : 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                "& fieldset": { borderColor: signupErrors.email ? "#d32f2f" : "#ddd", borderWidth: "2px" },
                "&:hover fieldset": { borderColor: signupErrors.email ? "#d32f2f" : "#2d8659" },
                "&.Mui-focused fieldset": { borderColor: signupErrors.email ? "#d32f2f" : "#2d8659" },
              },
            }}
          />
          {signupErrors.email && (
            <Typography sx={{ fontSize: "12px", color: "#d32f2f", mb: 2, pl: 1 }}>
              {signupErrors.email}
            </Typography>
          )}

          <TextField
            fullWidth
            placeholder="Password"
            type="password"
            value={signupData.password}
            onChange={handleChange("password")}
            sx={{
              mb: signupErrors.password ? 0.5 : 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                "& fieldset": { borderColor: signupErrors.password ? "#d32f2f" : "#ddd", borderWidth: "2px" },
                "&:hover fieldset": { borderColor: signupErrors.password ? "#d32f2f" : "#2d8659" },
                "&.Mui-focused fieldset": { borderColor: signupErrors.password ? "#d32f2f" : "#2d8659" },
              },
            }}
          />
          {signupErrors.password && (
            <Typography sx={{ fontSize: "12px", color: "#d32f2f", mb: 2, pl: 1 }}>
              {signupErrors.password}
            </Typography>
          )}

          <TextField
            fullWidth
            placeholder="Confirm Password"
            type="password"
            value={signupData.confirmPassword}
            onChange={handleChange("confirmPassword")}
            sx={{
              mb: signupErrors.confirmPassword ? 0.5 : 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                "& fieldset": { borderColor: signupErrors.confirmPassword ? "#d32f2f" : "#ddd", borderWidth: "2px" },
                "&:hover fieldset": { borderColor: signupErrors.confirmPassword ? "#d32f2f" : "#2d8659" },
                "&.Mui-focused fieldset": { borderColor: signupErrors.confirmPassword ? "#d32f2f" : "#2d8659" },
              },
            }}
          />
          {signupErrors.confirmPassword && (
            <Typography sx={{ fontSize: "12px", color: "#d32f2f", mb: 2, pl: 1 }}>
              {signupErrors.confirmPassword}
            </Typography>
          )}

          {signupErrors.form && (
            <Typography sx={{ fontSize: "12px", color: "#d32f2f", mb: 2, pl: 1 }}>
              {signupErrors.form}
            </Typography>
          )}

          <Button
            fullWidth
            onClick={handleSignupSubmit}
            disabled={loading}
            sx={{
              backgroundColor: "#2d8659",
              color: "white",
              fontWeight: "700",
              fontSize: "16px",
              p: 1.5,
              borderRadius: 3,
              mb: 3,
              mt: 1,
              textTransform: "uppercase",
              "&:hover": { backgroundColor: "#245a47" },
            }}
          >
            {loading ? <CircularProgress size={22} sx={{ color: "white" }} /> : "Create Account"}
          </Button>

          <Box sx={{ borderTop: "1px solid #ddd", my: 3 }} />
          <Typography sx={{ fontSize: "20px", fontWeight: "700", color: "#333", mb: 2 }}>
            Why Join Mealsontheway?
          </Typography>
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
            component={Link}
            to="/login"
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
              SIGN UP WITH
              <br />
              NAME, EMAIL
              <br />
              AND PASSWORD
            </Typography>
            <Typography sx={{ mt: 2, fontSize: "18px", fontWeight: 600, color: "#163124" }}>
              MealsOnTheWay registration now writes directly to your backend user API.
            </Typography>
            <Button
              onClick={() => setOpenSignupModal(true)}
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
              Open Signup Slider
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
          Why Customers Register
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

export default Signup;
