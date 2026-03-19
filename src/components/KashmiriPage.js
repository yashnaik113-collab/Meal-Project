import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "./CartContext";

const kashmiriDishes = [
  { id: 1, name: "Rogan Josh", price: 250, tag: "Bestseller", emoji: "🍖" },
  { id: 2, name: "Yakhni", price: 200, tag: "Classic", emoji: "🍲" },
  { id: 3, name: "Dum Aloo", price: 130, tag: "Veg", emoji: "🥔" },
  { id: 4, name: "Haak Saag", price: 90, tag: "Healthy", emoji: "🌿" },
  { id: 5, name: "Seekh Kebab", price: 180, tag: "Grill", emoji: "🍢" },
  { id: 6, name: "Shab Deg", price: 220, tag: "Winter Special", emoji: "🥣" },
  { id: 7, name: "Kashmiri Pulao", price: 150, tag: "Fragrant", emoji: "🍚" },
  { id: 8, name: "Kahwa", price: 60, tag: "Tea", emoji: "🍵" },
  { id: 9, name: "Shufta", price: 100, tag: "Dessert", emoji: "🍯" },
  { id: 10, name: "Modur Pulao", price: 130, tag: "Sweet", emoji: "🌹" },
];

const KashmiriPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [hoveredId, setHoveredId]       = useState(null);
  const [selectedDish, setSelectedDish] = useState(null);
  const [quantity, setQuantity]         = useState(1);

  const handleTryNow = (dish) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setSelectedDish(dish);
      setQuantity(1);
    }
  };

  const handleClose = () => setSelectedDish(null);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        py: { xs: 5, md: 9 },
        px: { xs: 2, md: 6 },
      }}
    >
      {/* PAGE HEADER */}
      <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
        <Typography
          sx={{
            fontSize: { xs: "2.4rem", md: "3.8rem" },
            fontWeight: 900,
            color: "#1a1a1a",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            fontFamily: "Georgia, serif",
          }}
        >
          Kashmiri Kitchen
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.3rem" },
            color: "#666",
            mt: 1.5,
            fontWeight: 500,
            letterSpacing: "0.04em",
          }}
        >
          Authentic Kashmiri Home Food — Wazwan at Home
        </Typography>
        <Box
          sx={{ width: 80, height: 4, backgroundColor: "#880e4f", borderRadius: 2, mx: "auto", mt: 2.5 }}
        />
      </Box>

      {/* FOOD GRID */}
      <Box sx={{ maxWidth: 750, mx: "auto" }}>
        <Grid container spacing={5} justifyContent="center">
          {kashmiriDishes.map((dish) => (
            <Grid item xs={12} key={dish.id} sx={{ display: "flex", justifyContent: "center" }}>
              <Card
                onMouseEnter={() => setHoveredId(dish.id)}
                onMouseLeave={() => setHoveredId(null)}
                sx={{
                  width: "100%",
                  maxWidth: 700,
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  border: "1px solid #eaeaea",
                  boxShadow: hoveredId === dish.id ? "0 12px 32px rgba(0,0,0,0.12)" : "0 4px 16px rgba(0,0,0,0.07)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  transform: hoveredId === dish.id ? "translateY(-5px)" : "translateY(0)",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "280px",
                    backgroundColor: "#fafafa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "8rem", lineHeight: 1 }}>{dish.emoji}</Typography>
                </Box>

                <Box sx={{ p: 3, display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "#0d6efd",
                      mb: 1,
                      fontFamily: "'Segoe UI', Roboto, sans-serif",
                    }}
                  >
                    {dish.name}
                  </Typography>
                  <Typography sx={{ fontSize: "1rem", color: "#555", lineHeight: 1.7, mb: 2.5 }}>
                    A treasured recipe from our Kashmiri home kitchen — made fresh daily with aromatic spices and premium ingredients. A royal experience delivered to your door. — ₹{dish.price} per plate.
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      onClick={() => handleTryNow(dish)}
                      variant="contained"
                      sx={{
                        backgroundColor: "#0d6efd",
                        color: "#fff",
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "1rem",
                        borderRadius: "8px",
                        px: 3.5,
                        py: 1,
                        boxShadow: "none",
                        "&:hover": { backgroundColor: "#0b5ed7", boxShadow: "none" },
                      }}
                    >
                      Try Now!
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* BOTTOM CTA */}
      <Box sx={{ textAlign: "center", mt: { xs: 7, md: 10 } }}>
        <Typography sx={{ fontSize: "1rem", color: "#666", mb: 2.5, fontWeight: 500 }}>
          Craving something authentic? Order fresh from home kitchens.
        </Typography>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#880e4f",
            color: "#fff",
            fontWeight: 800,
            px: 5,
            py: 1.5,
            borderRadius: "14px",
            fontSize: "1rem",
            letterSpacing: "0.04em",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            "&:hover": { backgroundColor: "#880e4fcc", color: "#fff" },
          }}
        >
          Order Kashmiri Food Now ❄️
        </Button>
      </Box>

      {/* ZOMATO-STYLE POPUP DIALOG */}
      <Dialog
        open={Boolean(selectedDish)}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: "16px", overflow: "hidden" } }}
      >
        {selectedDish && (
          <>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "220px",
                  backgroundColor: "#fafafa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: "8rem", lineHeight: 1 }}>{selectedDish.emoji}</Typography>
              </Box>
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  backgroundColor: "rgba(255,255,255,0.9)",
                  "&:hover": { backgroundColor: "#fff" },
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <DialogContent sx={{ px: 4, pt: 3, pb: 1 }}>
              <Typography sx={{ fontSize: "1.8rem", fontWeight: 800, color: "#1a1a1a", mb: 0.5 }}>
                {selectedDish.name}
              </Typography>
              <Typography sx={{ fontSize: "1.1rem", color: "#777", mb: 3 }}>
                ₹{selectedDish.price} per plate
              </Typography>
              <Typography sx={{ fontSize: "0.97rem", color: "#555", lineHeight: 1.8, mb: 3 }}>
                A treasured recipe from our Kashmiri home kitchen — made fresh daily with aromatic spices and premium ingredients. A royal experience delivered to your door. Crafted fresh daily, delivered to your door.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1.5px solid #e0e0e0",
                  borderRadius: "12px",
                  overflow: "hidden",
                  width: "fit-content",
                  mb: 1,
                }}
              >
                <IconButton
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  sx={{ borderRadius: 0, px: 2.5, py: 1.5, color: "#e53935", "&:hover": { backgroundColor: "#fce4e4" } }}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ px: 3, fontWeight: "bold", fontSize: "1.4rem", color: "#1a1a1a" }}>
                  {quantity}
                </Typography>
                <IconButton
                  onClick={() => setQuantity(quantity + 1)}
                  sx={{ borderRadius: 0, px: 2.5, py: 1.5, color: "#2d8659", "&:hover": { backgroundColor: "#e8f5e9" } }}
                >
                  <AddIcon />
                </IconButton>
              </Box>
            </DialogContent>

            <DialogActions
              sx={{
                px: 4,
                py: 3,
                borderTop: "1px solid #f0f0f0",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "0.8rem", color: "#999", mb: 0.3 }}>Total Amount</Typography>
                <Typography sx={{ fontWeight: 900, fontSize: "1.6rem", color: "#111" }}>
                  ₹{selectedDish.price * quantity}
                </Typography>
              </Box>
              <Button
                variant="contained"
                onClick={() => {
                  addToCart({ ...selectedDish, cuisine: "Kashmiri" }, quantity);
                  handleClose();
                  navigate("/cart");
                }}
                sx={{
                  backgroundColor: "#0d6efd",
                  "&:hover": { backgroundColor: "#0b5ed7" },
                  borderRadius: "10px",
                  px: 4,
                  py: 1.5,
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  textTransform: "none",
                  boxShadow: "0 4px 14px rgba(13,110,253,0.35)",
                }}
              >
                Add Item +
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default KashmiriPage;
