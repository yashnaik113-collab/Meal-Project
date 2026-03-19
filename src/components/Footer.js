import React from "react";
import { Box, Typography, Grid, Link as MuiLink } from "@mui/material";
import { Facebook, Instagram, YouTube, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#210bb0ff",
        py: { xs: 3, md: 5 },
        px: { xs: 2, md: 8 },
        borderTop: "1px solid #e0e0e0",
        position: "relative",
        zIndex: 10,
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Grid container spacing={3} justifyContent="space-between">
          {/* Left Column - Logo & Description */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#f5fcfdff",
                  mb: 0.5,
                  fontSize: "1.1rem",
                }}
              >
                mealsontheway
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#f8fbf8ff", fontSize: "0.7rem" }}
              >
                Khao Ghar Ka...
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "#f9f6f6ff",
                lineHeight: 1.6,
                mb: 2,
                fontSize: "0.9rem",
              }}
            >
              We at Mealsontheway bring in technology and solutions for building
              a healthy society by delivering the best homemade food from nearby
              home chefs.
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  border: "2px solid #f9f7f7ff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#fcf9f9ff",
                    color: "white",
                  },
                }}
              >
                <Facebook sx={{ fontSize: "1.2rem" }} />
              </Box>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  border: "2px solid #fbf8f8ff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#f9f7f7ff",
                    color: "white",
                  },
                }}
              >
                <Instagram sx={{ fontSize: "1.2rem" }} />
              </Box>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  border: "2px solid #fbf7f7ff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#f5f1f1ff",
                    color: "white",
                  },
                }}
              >
                <YouTube sx={{ fontSize: "1.2rem" }} />
              </Box>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  border: "2px solid #fcf8f8ff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#faf6f6ff",
                    color: "white",
                  },
                }}
              >
                <LinkedIn sx={{ fontSize: "1.2rem" }} />
              </Box>
            </Box>
          </Grid>

          {/* Company Column */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#f8f2f2ff",
                mb: 1.5,
                fontSize: "0.95rem",
              }}
            >
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <MuiLink
                href="#"
                sx={{
                  color: "#f7f4f4ff",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  transition: "color 0.3s",
                  "&:hover": { color: "#f4f8f4ff" },
                }}
              >
                About us
              </MuiLink>
              <MuiLink
                href="#"
                sx={{
                  color: "#fcf7f7ff",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  transition: "color 0.3s",
                  "&:hover": { color: "#f2f5f2ff" },
                }}
              >
                Why us
              </MuiLink>
              <MuiLink
                href="#"
                sx={{
                  color: "#f9f4f4ff",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  transition: "color 0.3s",
                  "&:hover": { color: "#f4f8f4ff" },
                }}
              >
                Join Us
              </MuiLink>
              <MuiLink
                href="#"
                sx={{
                  color: "#f9f5f5ff",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  transition: "color 0.3s",
                  "&:hover": { color: "#fbfffbff" },
                }}
              >
                Careers
              </MuiLink>
              <MuiLink
                href="#"
                sx={{
                  color: "#f7f3f3ff",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  transition: "color 0.3s",
                  "&:hover": { color: "#f7faf7ff" },
                }}
              >
                Contact Us
              </MuiLink>
            </Box>
          </Grid>

          {/* Information Column */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#f00808ff",
                mb: 1.5,
                fontSize: "0.95rem",
              }}
            >
              Information
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <MuiLink
                href="#"
                sx={{
                  color: "#f8f4f4ff",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  transition: "color 0.3s",
                  "&:hover": { color: "#f3f7f3ff" },
                }}
              >
                Privacy Policy
              </MuiLink>
              <MuiLink
                href="#"
                sx={{
                  color: "#f9f5f5ff",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  transition: "color 0.3s",
                  "&:hover": { color: "#f3f7f4ff" },
                }}
              >
                Terms & Conditions
              </MuiLink>
              <MuiLink
                href="#"
                sx={{
                  color: "#f3ededff",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  transition: "color 0.3s",
                  "&:hover": { color: "#f3f5f3ff" },
                }}
              >
                Cancellation & Refunds
              </MuiLink>
              <MuiLink
                href="#"
                sx={{
                  color: "#fbf8f8ff",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  transition: "color 0.3s",
                  "&:hover": { color: "#f2f8f3ff" },
                }}
              >
                Blogs
              </MuiLink>
            </Box>
          </Grid>

          {/* Contact Column */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#f9f4f4ff",
                mb: 1.5,
                fontSize: "0.95rem",
              }}
            >
              Contact us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                <Typography sx={{ color: "#f6f3f3ff", fontSize: "1.4rem" }}>
                  📞
                </Typography>
                <Typography
                  sx={{
                    color: "#f9f6f6ff",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                >
                  +91-9665 888 488
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                <Typography sx={{ color: "#f2f1f1ff", fontSize: "1.4rem" }}>
                  ✉️
                </Typography>
                <Typography
                  sx={{
                    color: "#f9f4f4ff",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                >
                  help@mealsontheway.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Divider */}
        <Box sx={{ borderTop: "1px solid #ddd", mt: 3, pt: 2.5 }}>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "#fffefeff",
              fontSize: "0.8rem",
            }}
          >
            © 2024 Mealsontheway. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
