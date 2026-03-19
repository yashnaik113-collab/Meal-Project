import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  const deliveryFee = totalPrice > 0 ? (totalPrice > 299 ? 0 : 40) : 0;
  const taxes = Math.round(totalPrice * 0.05);
  const grandTotal = totalPrice + deliveryFee + taxes;

  if (cartItems.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          px: 3,
        }}
      >
        <ShoppingCartOutlinedIcon sx={{ fontSize: "100px", color: "#e0e0e0", mb: 3 }} />
        <Typography sx={{ fontSize: "1.8rem", fontWeight: 700, color: "#333", mb: 1 }}>
          Your cart is empty
        </Typography>
        <Typography sx={{ fontSize: "1rem", color: "#999", mb: 4, textAlign: "center" }}>
          Add items from our regional cuisine pages to get started!
        </Typography>
        <Button
          component={Link}
          to="/services"
          variant="contained"
          sx={{
            backgroundColor: "#0d6efd",
            "&:hover": { backgroundColor: "#0b5ed7" },
            borderRadius: "10px",
            px: 5,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          Explore Menu
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", py: 4, px: { xs: 2, md: 6 } }}>
      {/* Header */}
      <Box sx={{ maxWidth: 1000, mx: "auto", mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
          <IconButton onClick={() => navigate(-1)} sx={{ color: "#333" }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography sx={{ fontSize: "1.8rem", fontWeight: 800, color: "#1a1a1a" }}>
            Your Cart
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#777", mt: 0.3 }}>
            ({totalItems} item{totalItems !== 1 ? "s" : ""})
          </Typography>
        </Box>
      </Box>

      <Box sx={{ maxWidth: 1000, mx: "auto", display: "flex", gap: 3, flexDirection: { xs: "column", md: "row" }, alignItems: "flex-start" }}>
        {/* Left: Cart Items */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
            {/* Restaurant Label */}
            <Box sx={{ px: 3, py: 2, borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box sx={{ width: 36, height: 36, borderRadius: "8px", backgroundColor: "#0d6efd", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography sx={{ fontSize: "1.2rem" }}>🍽️</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#1a1a1a" }}>
                  MealsOnTheWay Kitchen
                </Typography>
                <Typography sx={{ fontSize: "0.8rem", color: "#aaa" }}>
                  Fresh • Homemade • Delivered Daily
                </Typography>
              </Box>
            </Box>

            {/* Items */}
            {cartItems.map((item, idx) => (
              <Box key={`${item.id}-${item.cuisine}`}>
                <Box sx={{ px: 3, py: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
                  {/* Veg/NonVeg indicator */}
                  <Box
                    sx={{
                      width: 18,
                      height: 18,
                      border: "2px solid #2d8659",
                      borderRadius: "3px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#2d8659" }} />
                  </Box>

                  {/* Emoji */}
                  <Typography sx={{ fontSize: "2.2rem", flexShrink: 0 }}>{item.emoji}</Typography>

                  {/* Name + price */}
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "0.97rem", color: "#1a1a1a" }}>
                      {item.name}
                    </Typography>
                    {item.cuisine && (
                      <Typography sx={{ fontSize: "0.78rem", color: "#aaa" }}>{item.cuisine}</Typography>
                    )}
                    <Typography sx={{ fontSize: "0.9rem", color: "#555", mt: 0.3, fontWeight: 600 }}>
                      ₹{item.price}
                    </Typography>
                  </Box>

                  {/* Quantity Controls */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1.5px solid #0d6efd",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.id, item.cuisine, item.quantity - 1)}
                      sx={{ borderRadius: 0, px: 1, py: 0.5, color: "#0d6efd", "&:hover": { backgroundColor: "#e8f0fe" } }}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography sx={{ px: 2, fontWeight: 700, fontSize: "0.95rem", color: "#0d6efd" }}>
                      {item.quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.id, item.cuisine, item.quantity + 1)}
                      sx={{ borderRadius: 0, px: 1, py: 0.5, color: "#0d6efd", "&:hover": { backgroundColor: "#e8f0fe" } }}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Box>

                  {/* Subtotal */}
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1a1a", minWidth: "60px", textAlign: "right" }}>
                    ₹{item.price * item.quantity}
                  </Typography>

                  {/* Delete */}
                  <IconButton
                    size="small"
                    onClick={() => removeFromCart(item.id, item.cuisine)}
                    sx={{ color: "#e53935", "&:hover": { backgroundColor: "#fce4e4" } }}
                  >
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
                {idx < cartItems.length - 1 && <Divider sx={{ mx: 3 }} />}
              </Box>
            ))}

            {/* Clear Cart */}
            <Box sx={{ px: 3, py: 2, borderTop: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Button
                component={Link}
                to="/services"
                variant="text"
                startIcon={<ArrowBackIcon />}
                sx={{ color: "#0d6efd", textTransform: "none", fontWeight: 600 }}
              >
                Add more items
              </Button>
              <Button
                variant="text"
                onClick={clearCart}
                sx={{ color: "#e53935", textTransform: "none", fontWeight: 600 }}
              >
                Clear Cart
              </Button>
            </Box>
          </Box>

          {/* Delivery Info */}
          <Box sx={{ backgroundColor: "#fff", borderRadius: "12px", mt: 2, px: 3, py: 2.5, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
            <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#1a1a1a", mb: 2 }}>
              Delivery Details
            </Typography>
            {[
              { icon: "🚀", text: "Estimated delivery: 45–60 mins" },
              { icon: "🏠", text: "Delivering to your saved address" },
              { icon: "♻️", text: "Eco-friendly packaging used" },
            ].map((item, i) => (
              <Box key={i} sx={{ display: "flex", gap: 2, alignItems: "center", mb: 1.5 }}>
                <Typography sx={{ fontSize: "1.2rem" }}>{item.icon}</Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>{item.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right: Bill Summary */}
        <Box sx={{ width: { xs: "100%", md: 340 }, flexShrink: 0 }}>
          <Box sx={{ backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
            <Box sx={{ px: 3, py: 2.5, borderBottom: "1px solid #f0f0f0" }}>
              <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", color: "#1a1a1a" }}>
                Bill Details
              </Typography>
            </Box>

            <Box sx={{ px: 3, py: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                <Typography sx={{ color: "#555", fontSize: "0.9rem" }}>Item Total</Typography>
                <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#1a1a1a" }}>₹{totalPrice}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                <Typography sx={{ color: "#555", fontSize: "0.9rem" }}>Delivery Fee</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {deliveryFee === 0 ? (
                    <Typography sx={{ color: "#2d8659", fontWeight: 700, fontSize: "0.9rem" }}>FREE</Typography>
                  ) : (
                    <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#1a1a1a" }}>₹{deliveryFee}</Typography>
                  )}
                </Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography sx={{ color: "#555", fontSize: "0.9rem" }}>GST & Charges (5%)</Typography>
                <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#1a1a1a" }}>₹{taxes}</Typography>
              </Box>

              {totalPrice > 0 && totalPrice <= 299 && (
                <Box sx={{ backgroundColor: "#fff8e1", borderRadius: "8px", px: 2, py: 1.2, mb: 2 }}>
                  <Typography sx={{ fontSize: "0.8rem", color: "#f57c00", fontWeight: 600 }}>
                    🛵 Add ₹{300 - totalPrice} more for FREE delivery!
                  </Typography>
                </Box>
              )}
              {deliveryFee === 0 && totalPrice > 0 && (
                <Box sx={{ backgroundColor: "#e8f5e9", borderRadius: "8px", px: 2, py: 1.2, mb: 2 }}>
                  <Typography sx={{ fontSize: "0.8rem", color: "#2d8659", fontWeight: 600 }}>
                    🎉 You've unlocked FREE delivery!
                  </Typography>
                </Box>
              )}

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                <Typography sx={{ fontWeight: 800, fontSize: "1.05rem", color: "#1a1a1a" }}>To Pay</Typography>
                <Typography sx={{ fontWeight: 900, fontSize: "1.1rem", color: "#1a1a1a" }}>₹{grandTotal}</Typography>
              </Box>

              <Button
                fullWidth
                variant="contained"
                onClick={() => {
                  alert(`✅ Order placed successfully!\n\nTotal: ₹${grandTotal}\nThank you for ordering from MealsOnTheWay!`);
                  clearCart();
                  navigate("/");
                }}
                sx={{
                  backgroundColor: "#0d6efd",
                  "&:hover": { backgroundColor: "#0b5ed7" },
                  borderRadius: "10px",
                  py: 1.8,
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  textTransform: "none",
                  boxShadow: "0 4px 14px rgba(13,110,253,0.35)",
                }}
              >
                Place Order • ₹{grandTotal}
              </Button>
            </Box>
          </Box>

          {/* Safety */}
          <Box sx={{ backgroundColor: "#fff", borderRadius: "12px", mt: 2, px: 3, py: 2.5, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
            <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1a1a", mb: 2 }}>
              Why MealsOnTheWay?
            </Typography>
            {[
              "100% Fresh Home-cooked Food",
              "Hygienic Packaging",
              "On-time Delivery Guaranteed",
            ].map((text, i) => (
              <Box key={i} sx={{ display: "flex", gap: 1.5, alignItems: "center", mb: 1.2 }}>
                <CheckCircleOutlineIcon sx={{ color: "#2d8659", fontSize: "18px" }} />
                <Typography sx={{ fontSize: "0.85rem", color: "#555" }}>{text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;
