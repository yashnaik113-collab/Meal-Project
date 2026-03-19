const fs = require('fs');
const path = require('path');

const pages = [
  {
    file: 'GujaratiPage.js',
    componentName: 'GujaratiPage',
    dishesVar: 'gujaratiDishes',
    title: 'Gujarati Kitchen',
    subtitle: 'Authentic Gujarati Home Food — Swad Si Zindagi',
    accentColor: '#e65100',
    ctaText: 'Order Gujarati Food Now 🥘',
    dishes: [
      { id: 1,  name: 'Dhokla',     price: 80,  tag: 'Popular',     emoji: '🍰' },
      { id: 2,  name: 'Thepla',     price: 60,  tag: 'Classic',     emoji: '🫓' },
      { id: 3,  name: 'Fafda',      price: 90,  tag: 'Crunchy',     emoji: '🥨' },
      { id: 4,  name: 'Khandvi',    price: 100, tag: 'Must Try',    emoji: '🌯' },
      { id: 5,  name: 'Undhiyu',    price: 150, tag: 'Seasonal',    emoji: '🍲' },
      { id: 6,  name: 'Handvo',     price: 120, tag: 'Homemade',    emoji: '🍞' },
      { id: 7,  name: 'Dal Dhokli', price: 110, tag: 'Comfort Food',emoji: '🥣' },
      { id: 8,  name: 'Basundi',    price: 70,  tag: 'Dessert',     emoji: '🥛' },
      { id: 9,  name: 'Shrikhand',  price: 80,  tag: 'Dessert',     emoji: '🍨' },
      { id: 10, name: 'Muthia',     price: 85,  tag: 'Snack',       emoji: '🥟' },
    ],
    dishDescription: 'A classic from our Gujarati home kitchen — made fresh daily with premium ingredients. Perfect for a wholesome meal delivered straight to your door.'
  },
  {
    file: 'SouthPage.js',
    componentName: 'SouthPage',
    dishesVar: 'southDishes',
    title: 'South Indian Kitchen',
    subtitle: 'Authentic South Indian Home Food — Rusichi Ruchi',
    accentColor: '#1b5e20',
    ctaText: 'Order South Indian Food Now 🍛',
    dishes: [
      { id: 1,  name: 'Idli Sambar',       price: 60,  tag: 'Classic',    emoji: '🫓' },
      { id: 2,  name: 'Masala Dosa',        price: 90,  tag: 'Bestseller', emoji: '🥞' },
      { id: 3,  name: 'Rava Upma',          price: 50,  tag: 'Breakfast',  emoji: '🍚' },
      { id: 4,  name: 'Pongal',             price: 70,  tag: 'Traditional',emoji: '🍲' },
      { id: 5,  name: 'Vada',               price: 40,  tag: 'Snack',      emoji: '🍩' },
      { id: 6,  name: 'Avial',              price: 100, tag: 'Veggie',     emoji: '🥗' },
      { id: 7,  name: 'Chettinad Chicken',  price: 200, tag: 'Spicy',      emoji: '🍗' },
      { id: 8,  name: 'Rasam',              price: 50,  tag: 'Comfort',    emoji: '🍵' },
      { id: 9,  name: 'Payasam',            price: 60,  tag: 'Dessert',    emoji: '🍮' },
      { id: 10, name: 'Filter Coffee',      price: 30,  tag: 'Refreshing', emoji: '☕' },
    ],
    dishDescription: 'A staple from our South Indian home kitchen — made fresh daily with premium ingredients. Perfect for a wholesome, authentic meal delivered to your door.'
  },
  {
    file: 'KashmiriPage.js',
    componentName: 'KashmiriPage',
    dishesVar: 'kashmiriDishes',
    title: 'Kashmiri Kitchen',
    subtitle: 'Authentic Kashmiri Home Food — Wazwan at Home',
    accentColor: '#880e4f',
    ctaText: 'Order Kashmiri Food Now ❄️',
    dishes: [
      { id: 1,  name: 'Rogan Josh',     price: 250, tag: 'Bestseller', emoji: '🍖' },
      { id: 2,  name: 'Yakhni',         price: 200, tag: 'Classic',    emoji: '🍲' },
      { id: 3,  name: 'Dum Aloo',       price: 130, tag: 'Veg',        emoji: '🥔' },
      { id: 4,  name: 'Haak Saag',      price: 90,  tag: 'Healthy',    emoji: '🌿' },
      { id: 5,  name: 'Seekh Kebab',    price: 180, tag: 'Grill',      emoji: '🍢' },
      { id: 6,  name: 'Shab Deg',       price: 220, tag: 'Winter Special',emoji:'🥣'},
      { id: 7,  name: 'Kashmiri Pulao', price: 150, tag: 'Fragrant',   emoji: '🍚' },
      { id: 8,  name: 'Kahwa',          price: 60,  tag: 'Tea',        emoji: '🍵' },
      { id: 9,  name: 'Shufta',         price: 100, tag: 'Dessert',    emoji: '🍯' },
      { id: 10, name: 'Modur Pulao',    price: 130, tag: 'Sweet',      emoji: '🌹' },
    ],
    dishDescription: 'A treasured recipe from our Kashmiri home kitchen — made fresh daily with aromatic spices and premium ingredients. A royal experience delivered to your door.'
  },
  {
    file: 'MaharashtrianPage.js',
    componentName: 'MaharashtrianPage',
    dishesVar: 'maharashtrianDishes',
    title: 'Maharashtrian Kitchen',
    subtitle: 'Authentic Maharashtrian Home Food — Aamchi Chav',
    accentColor: '#ff6f00',
    ctaText: 'Order Maharashtrian Food Now 🌶️',
    dishes: [
      { id: 1,  name: 'Vada Pav',       price: 50,  tag: 'Street Classic', emoji: '🍔' },
      { id: 2,  name: 'Poha',           price: 40,  tag: 'Breakfast',      emoji: '🍚' },
      { id: 3,  name: 'Misal Pav',      price: 80,  tag: 'Spicy',          emoji: '🌶️' },
      { id: 4,  name: 'Puran Poli',     price: 60,  tag: 'Festival',       emoji: '🫓' },
      { id: 5,  name: 'Kothimbir Vadi', price: 70,  tag: 'Snack',          emoji: '🥜' },
      { id: 6,  name: 'Sabudana Khichdi',price:75,  tag: 'Fasting',        emoji: '🫙' },
      { id: 7,  name: 'Kolhapuri Chicken',price:200,tag: 'Spicy',          emoji: '🍗' },
      { id: 8,  name: 'Bharli Vangi',   price: 120, tag: 'Veg',            emoji: '🍆' },
      { id: 9,  name: 'Shreekhand',     price: 80,  tag: 'Dessert',        emoji: '🍨' },
      { id: 10, name: 'Modak',          price: 60,  tag: 'Festive',        emoji: '🍡' },
    ],
    dishDescription: 'A beloved recipe from our Maharashtrian home kitchen — made fresh daily with regional spices and authentic ingredients. The true taste of Maharashtra, delivered to you.'
  },
  {
    file: 'BihariPage.js',
    componentName: 'BihariPage',
    dishesVar: 'bihariDishes',
    title: 'Bihari Kitchen',
    subtitle: 'Authentic Bihari Home Food — Desi Swad',
    accentColor: '#5d4037',
    ctaText: 'Order Bihari Food Now 🍲',
    dishes: [
      { id: 1,  name: 'Litti Chokha',   price: 80,  tag: 'Bestseller', emoji: '🫙' },
      { id: 2,  name: 'Sattu Paratha',  price: 60,  tag: 'Breakfast',  emoji: '🫓' },
      { id: 3,  name: 'Dal Pithhi',     price: 90,  tag: 'Classic',    emoji: '🥣' },
      { id: 4,  name: 'Thekua',         price: 50,  tag: 'Festive',    emoji: '🍪' },
      { id: 5,  name: 'Ghugni',         price: 70,  tag: 'Snack',      emoji: '🥜' },
      { id: 6,  name: 'Chana Ghugni',   price: 75,  tag: 'Street',     emoji: '🍛' },
      { id: 7,  name: 'Mutton Curry',   price: 220, tag: 'Non-Veg',    emoji: '🍖' },
      { id: 8,  name: 'Aloo Chokha',    price: 50,  tag: 'Side Dish',  emoji: '🥔' },
      { id: 9,  name: 'Malpua',         price: 60,  tag: 'Dessert',    emoji: '🥞' },
      { id: 10, name: 'Kheer',          price: 70,  tag: 'Dessert',    emoji: '🍮' },
    ],
    dishDescription: 'A classic recipe from our Bihari home kitchen — prepared fresh daily with earthy flavors and authentic ingredients. The soul of Bihar, delivered to your doorstep.'
  },
  {
    file: 'NorthPage.js',
    componentName: 'NorthPage',
    dishesVar: 'northEasternDishes',
    title: 'North Eastern Kitchen',
    subtitle: 'Authentic North Eastern Home Food — From the 7 Sisters',
    accentColor: '#1a237e',
    ctaText: 'Order North Eastern Food Now 🍜',
    dishes: [
      { id: 1,  name: 'Momos',            price: 80,  tag: 'Bestseller', emoji: '🥟' },
      { id: 2,  name: 'Thukpa',           price: 90,  tag: 'Noodle Soup',emoji: '🍜' },
      { id: 3,  name: 'Jadoh',            price: 150, tag: 'Rice Meat',  emoji: '🍚' },
      { id: 4,  name: 'Bamboo Shoot Curry',price:120, tag: 'Exotic',     emoji: '🎋' },
      { id: 5,  name: 'Smoked Pork',      price: 200, tag: 'Must Try',   emoji: '🥩' },
      { id: 6,  name: 'Khar',             price: 100, tag: 'Traditional',emoji: '🍲' },
      { id: 7,  name: 'Eromba',           price: 90,  tag: 'Spicy',      emoji: '🌶️' },
      { id: 8,  name: 'Rice Beer',        price: 60,  tag: 'Drink',      emoji: '🍺' },
      { id: 9,  name: 'Chak-Hao Kheer',  price: 70,  tag: 'Black Rice',  emoji: '🍮' },
      { id: 10, name: 'Til Pitha',        price: 50,  tag: 'Dessert',    emoji: '🍡' },
    ],
    dishDescription: 'A unique recipe from our North Eastern home kitchen — made fresh with indigenous herbs, bamboo, and exotic flavors that tell the story of the 7 Sisters. Delivered hot to you.'
  },
  {
    file: 'BengaliPage.js',
    componentName: 'BengaliPage',
    dishesVar: 'bengaliDishes',
    title: 'Bengali Kitchen',
    subtitle: 'Authentic Bengali Home Food — Amar Sonar Bangla',
    accentColor: '#006064',
    ctaText: 'Order Bengali Food Now 🐟',
    dishes: [
      { id: 1,  name: 'Kosha Mangsho',  price: 250, tag: 'Bestseller', emoji: '🍖' },
      { id: 2,  name: 'Macher Jhol',    price: 180, tag: 'Fish Curry', emoji: '🐟' },
      { id: 3,  name: 'Shorshe Ilish',  price: 300, tag: 'Hilsa',      emoji: '🐠' },
      { id: 4,  name: 'Dal Bhat',        price: 80,  tag: 'Classic',    emoji: '🍚' },
      { id: 5,  name: 'Aloo Posto',      price: 90,  tag: 'Veg',        emoji: '🥔' },
      { id: 6,  name: 'Chingri Malai',   price: 280, tag: 'Prawn',      emoji: '🦐' },
      { id: 7,  name: 'Sandesh',         price: 60,  tag: 'Dessert',    emoji: '🍬' },
      { id: 8,  name: 'Rasgulla',        price: 50,  tag: 'Sweet',      emoji: '🍡' },
      { id: 9,  name: 'Mishti Doi',      price: 70,  tag: 'Dessert',    emoji: '🍮' },
      { id: 10, name: 'Luchi Alur Dom',  price: 100, tag: 'Puri',       emoji: '🫓' },
    ],
    dishDescription: 'A beloved recipe from our Bengali home kitchen — made fresh daily with mustard, hilsa, and the warmth of a true Bengali household. Authentic flavors delivered to you.'
  },
  {
    file: 'RajasthaniPage.js',
    componentName: 'RajasthaniPage',
    dishesVar: 'rajasthaniDishes',
    title: 'Rajasthani Kitchen',
    subtitle: 'Authentic Rajasthani Home Food — Mharo Rajasthan',
    accentColor: '#bf360c',
    ctaText: 'Order Rajasthani Food Now 🏜️',
    dishes: [
      { id: 1,  name: 'Dal Baati Churma', price: 150, tag: 'Bestseller', emoji: '🍛' },
      { id: 2,  name: 'Gatte ki Sabzi',   price: 110, tag: 'Classic',    emoji: '🥘' },
      { id: 3,  name: 'Ker Sangri',        price: 100, tag: 'Desert Veg', emoji: '🌵' },
      { id: 4,  name: 'Laal Maas',         price: 250, tag: 'Spicy',      emoji: '🍖' },
      { id: 5,  name: 'Bajre ki Roti',     price: 50,  tag: 'Traditional',emoji: '🫓' },
      { id: 6,  name: 'Mohan Maas',        price: 220, tag: 'Royal',      emoji: '🥩' },
      { id: 7,  name: 'Pyaaz Kachori',     price: 60,  tag: 'Snack',      emoji: '🥮' },
      { id: 8,  name: 'Mawa Kachori',      price: 70,  tag: 'Sweet Snack',emoji: '🍩' },
      { id: 9,  name: 'Gulab Jamun',       price: 50,  tag: 'Dessert',    emoji: '🍮' },
      { id: 10, name: 'Kalakand',          price: 80,  tag: 'Dessert',    emoji: '🧁' },
    ],
    dishDescription: 'A royal recipe from our Rajasthani home kitchen — prepared fresh daily with rich ghee, whole spices, and the majestic flavors of the desert state. Delivered to your doorstep.'
  },
  {
    file: 'PunjabiPage.js',
    componentName: 'PunjabiPage',
    dishesVar: 'punjabiDishes',
    title: 'Punjabi Kitchen',
    subtitle: 'Authentic Punjabi Home Food — Swad Si Zindagi',
    accentColor: '#d32f2f',
    ctaText: 'Order Punjabi Food Now 🥘',
    dishes: [
      { id: 1, name: "Butter Chicken",     price: 180, tag: "Bestseller",   emoji: "🍗" },
      { id: 2, name: "Dal Makhani",        price: 120, tag: "Must Try",     emoji: "🫕" },
      { id: 3, name: "Sarson da Saag",     price: 110, tag: "Seasonal",     emoji: "🌿" },
      { id: 4, name: "Amritsari Kulcha",   price: 90,  tag: "Popular",      emoji: "🫓" },
      { id: 5, name: "Chole Bhature",      price: 100, tag: "Classic",      emoji: "🍛" },
      { id: 6, name: "Makki di Roti",      price: 60,  tag: "Traditional",  emoji: "🌽" },
      { id: 7, name: "Tandoori Chicken",   price: 220, tag: "Bestseller",   emoji: "🍖" },
      { id: 8, name: "Paneer Tikka",       price: 160, tag: "Veg Special",  emoji: "🧀" },
      { id: 9, name: "Lassi",              price: 50,  tag: "Refreshing",   emoji: "🥛" },
      { id: 10, name: "Pinni",             price: 40,  tag: "Dessert",      emoji: "🍡" },
    ],
    dishDescription: 'A classic from our Punjabi home kitchen — made fresh daily with premium ingredients. Perfect for a wholesome meal delivered straight to your door.'
  },
];

function buildPage(p) {
  const dishesJson = p.dishes.map(d =>
    `  { id: ${d.id}, name: "${d.name}", price: ${d.price}, tag: "${d.tag}", emoji: "${d.emoji}" },`
  ).join('\n');

  return `import React, { useState } from "react";
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

const ${p.dishesVar} = [
${dishesJson}
];

const ${p.componentName} = () => {
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
          ${p.title}
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
          ${p.subtitle}
        </Typography>
        <Box
          sx={{ width: 80, height: 4, backgroundColor: "${p.accentColor}", borderRadius: 2, mx: "auto", mt: 2.5 }}
        />
      </Box>

      {/* FOOD GRID */}
      <Box sx={{ maxWidth: 750, mx: "auto" }}>
        <Grid container spacing={5} justifyContent="center">
          {${p.dishesVar}.map((dish) => (
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
                    ${p.dishDescription.replace(/\$/g, '\\$')} — ₹{dish.price} per plate.
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
            backgroundColor: "${p.accentColor}",
            color: "#fff",
            fontWeight: 800,
            px: 5,
            py: 1.5,
            borderRadius: "14px",
            fontSize: "1rem",
            letterSpacing: "0.04em",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            "&:hover": { backgroundColor: "${p.accentColor}cc", color: "#fff" },
          }}
        >
          ${p.ctaText}
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
                ${p.dishDescription} Crafted fresh daily, delivered to your door.
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
                  addToCart({ ...selectedDish, cuisine: "${p.title.split(' ')[0]}" }, quantity);
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

export default ${p.componentName};
`;
}

pages.forEach(p => {
  const content = buildPage(p);
  const targetPath = path.join(__dirname, p.file);
  fs.writeFileSync(targetPath, content, 'utf-8');
  console.log('✅ Written: ' + targetPath);
});
