import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 0 } }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          sx={{
            color: "#f44336",
            fontWeight: 600,
            fontSize: "0.875rem",
            letterSpacing: "2px",
            mb: 2,
            textAlign: "center",
          }}
        >
          CONTACT US
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="flex-start"
          sx={{ mb: 6 }}
        >
          {/* Left Side - Contact Information */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#20B2AA",
                mb: 3,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Get In Touch!
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#333333",
                mb: 4,
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.7,
              }}
            >
              We are here to answer any questions <br />
              you may have about Mealwe and
              <br />
              its services. Reach out to us and we'll <br />
              respond as soon as we can.
            </Typography>

            {/* Phone */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 2 }}>
              <PhoneIcon sx={{ color: "#f44336", fontSize: "1.5rem" }} />
              <Typography sx={{ color: "#333333", fontWeight: 600 }}>
                +91-9665 888 488
              </Typography>
            </Box>

            {/* Email */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 2 }}>
              <EmailIcon sx={{ color: "#f44336", fontSize: "1.5rem" }} />
              <Typography sx={{ color: "#333333", fontWeight: 600 }}>
                help@mealwe.com
              </Typography>
            </Box>

            {/* Address */}
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
              <LocationOnIcon
                sx={{ color: "#f44336", fontSize: "1.5rem", mt: 0.5 }}
              />
              <Box>
                <Typography
                  sx={{ color: "#333333", fontWeight: 600, lineHeight: 1.6 }}
                >
                  705/706, 66 High Street Square, Pan Card Club
                  <br />
                  Road, Baner, Pune, Maharashtra 411045
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {/* Name */}
              <TextField
                fullWidth
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f5f5f5",
                    borderRadius: 1,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e0e0e0",
                  },
                }}
              />

              {/* Email */}
              <TextField
                fullWidth
                placeholder="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f5f5f5",
                    borderRadius: 1,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e0e0e0",
                  },
                }}
              />

              {/* Mobile Number */}
              <TextField
                fullWidth
                placeholder="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f5f5f5",
                    borderRadius: 1,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e0e0e0",
                  },
                }}
              />

              {/* Message */}
              <TextField
                fullWidth
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                required
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f5f5f5",
                    borderRadius: 1,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e0e0e0",
                  },
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  color: "#4CAF50",
                  borderColor: "#4CAF50",
                  fontWeight: 600,
                  py: 1.5,
                  fontSize: "1rem",
                  borderRadius: 3,
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                    borderColor: "#4CAF50",
                  },
                  alignSelf: "flex-end",
                  paddingX: 4,
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
