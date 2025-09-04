import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box
        sx={{
          width: 400,
          p: 4,
          backgroundColor: "white",
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Sign Up
        </Typography>
        <TextField fullWidth label="Name" variant="outlined" margin="normal" />
        <TextField fullWidth label="Email" variant="outlined" margin="normal" />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
        />
        <Button
          fullWidth
          variant="contained"
          color="warning"
          sx={{ mt: 2, py: 1.2 }}
        >
          Sign Up
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "red", textDecoration: "none" }}>
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
