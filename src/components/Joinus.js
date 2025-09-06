import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
} from "@mui/material";

const Joinus = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    speciality: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    alert("Thank you for registering! We'll contact you soon.");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff8f2",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{ p: 4, maxWidth: 500, width: "100%", borderRadius: 3 }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Register as Home-Chef Today...
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            required
          />

          {/* Email */}
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            required
          />

          {/* City Dropdown */}
          <TextField
            select
            label="Choose Your City"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            defaultValue=""
            required
          >
            <MenuItem value="" disabled>
              Select your city
            </MenuItem>
            <MenuItem value="Kankavli">Kankavli</MenuItem>
          </TextField>

          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={2}
            required
          />

          <TextField
            fullWidth
            label="Speciality Dish"
            name="speciality"
            value={formData.speciality}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Experience (in years)"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="warning"
            sx={{ mt: 3, width: "100%" }}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Joinus; // ✅ name match App.js import
