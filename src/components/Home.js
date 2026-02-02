import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import foodsticker from "../components/home2padd.png";
import whyBg from "../components/whychooseus.jpg";
import foodrangoli from "../components/foodrangoli.jpg";
import easyOrder from "../components/easy-to-order.jpg";
import noRestaurant from "../components/norestaurant.jpg";
import homedelivery from "../components/homedelivery.jpg";
import { useGetfoodListData } from "../services/fetchProduct";
import joinCustomer from "../components/joincustomerbg.png";
import joinChef from "../components/joinchefbg.png";

const Home = () => {
  const { data: foodList } = useGetfoodListData();
  const items = useMemo(() => {
    if (!foodList) return [];
    if (Array.isArray(foodList)) return foodList;
    if (Array.isArray(foodList.data)) return foodList.data;
    if (Array.isArray(foodList.items)) return foodList.items;
    return [];
  }, [foodList]);

  const [email, setEmail] = useState("");

  const testimonials = [
    {
      name: "Anita S.",
      text: "Reminds me of my mother's cooking — delicious and homey!",
      city: "Pune",
    },
    {
      name: "Rohit K.",
      text: "Fast delivery and great portion sizes. Highly recommend.",
      city: "Mumbai",
    },
    {
      name: "Priya M.",
      text: "Quality is consistent and authentic — my family loves it.",
      city: "Bengaluru",
    },
  ];

  const orderSteps = [
    {
      step: "1",
      title: "Download Mealsontheway App",
      description:
        "Download Mealsontheway app from iOS or Playstore. An app that has got all the traditional and regional flavours of India.",
    },
    {
      step: "2",
      title: "Create Your Account",
      description:
        "Create your profile with the help of your mobile number. Set your email and cuisine preferences and you are good to go.",
    },
    {
      step: "3",
      title: "Order Homemade Food",
      description:
        "You can choose homemade food from a variety of cuisine. You can place daily as well as advance order.",
    },
    {
      step: "4",
      title: "Food Delivery in Minutes",
      description:
        "You will get the homemade food delivered at your home, office, or anywhere else in no time.",
    },
  ];

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          py: { xs: 4, md: 8 },
          px: { xs: 2, md: 8 },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 1 }}>
            100%...
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", color: "#f44336", mb: 2 }}
          >
            Ghar Jaisa Khana
          </Typography>
          <Typography variant="h5">Where Every Bite...</Typography>
          <Typography>Feels like Home</Typography>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="warning"
            sx={{ mt: 3 }}
          >
            Order Now
          </Button>
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={foodsticker}
            alt="Food"
            sx={{ width: "80%", maxWidth: 450 }}
          />
        </Box>
      </Box>

      {/* Popular Dishes */}
      <Box sx={{ py: { xs: 3, md: 4 }, px: { xs: 2, md: 8 } }}>
        <Box
          sx={{
            maxWidth: 1100,
            mx: "auto",
            backgroundColor: "#fff3e0",
            borderRadius: 2,
            px: { xs: 3, md: 6 },
            py: { xs: 2.5, md: 3.5 },
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", color: "#e65100" }}
          >
            We DO NOT Serve Food From Restaurants
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", color: "#6b6b6b", mb: 2 }}
          >
            Having your original instant homemade cuisines
          </Typography>

          {items.length > 0 && (
            <Grid container spacing={3} sx={{ mt: 1 }}>
              {items.map((item, idx) => {
                const title =
                  item.name ||
                  item.title ||
                  item.food_name ||
                  item.productName ||
                  `Dish ${idx + 1}`;
                const image =
                  item.image ||
                  item.img ||
                  item.picture ||
                  item.thumbnail ||
                  "";
                const price =
                  item.price ?? item.p ?? item.cost ?? item.amount ?? null;
                return (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        transition: "transform 0.3s ease",
                        "&:hover": { transform: "translateY(-4px)" },
                      }}
                    >
                      {image ? (
                        <CardMedia
                          component="img"
                          image={image}
                          alt={title}
                          sx={{ height: 160, objectFit: "cover" }}
                        />
                      ) : (
                        <Box
                          sx={{
                            height: 160,
                            backgroundColor: "#f5f5f5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography color="text.secondary">
                            No image
                          </Typography>
                        </Box>
                      )}

                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {title}
                        </Typography>
                        {price != null && (
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 1 }}
                          >
                            ₹ {price}
                          </Typography>
                        )}
                      </CardContent>

                      <CardActions>
                        <Button
                          size="small"
                          component={Link}
                          to="/login"
                          variant="contained"
                          color="warning"
                        >
                          Order
                        </Button>
                        <Button
                          size="small"
                          component={Link}
                          to="#"
                          variant="outlined"
                        >
                          Details
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>
      </Box>

      {/* Features */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 8 },
          backgroundColor: "#ffffff",
        }}
      >
        <Grid
          container
          spacing={6}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: "center", px: 2 }}>
              <Box
                sx={{
                  width: { xs: 140, sm: 180, md: 220 },
                  height: { xs: 140, sm: 180, md: 220 },
                  borderRadius: "50%",
                  mx: "auto",
                  backgroundImage: `url(${easyOrder})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                }}
              />
              <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 700 }}>
                Easy to Order
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#666", maxWidth: 360, mx: "auto" }}
              >
                Visit our Mealsontheway website. No manual process login or
                signup & place a homemade food order.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: "center", px: 2 }}>
              <Box
                sx={{
                  width: { xs: 140, sm: 180, md: 220 },
                  height: { xs: 140, sm: 180, md: 220 },
                  borderRadius: "50%",
                  mx: "auto",
                  backgroundImage: `url(${noRestaurant})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                }}
              />
              <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 700 }}>
                No Restaurant
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#666", maxWidth: 360, mx: "auto" }}
              >
                Home-made food served from nearby family kitchens. We do not
                partner with restaurants or dhabas — only authentic home-cooked
                meals.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: "center", px: 2 }}>
              <Box
                sx={{
                  width: { xs: 140, sm: 180, md: 220 },
                  height: { xs: 140, sm: 180, md: 220 },
                  borderRadius: "50%",
                  mx: "auto",
                  backgroundImage: `url(${homedelivery})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                }}
              />
              <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 700 }}>
                Reliable Home Delivery
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#666", maxWidth: 360, mx: "auto" }}
              >
                We have a reliable door-to-door delivery. Place advance or
                subscription orders and we'll take care of the rest.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* FOOD RANGOLI */}
      <Box
        sx={{
          py: { xs: 4, md: 8 },
          px: { xs: 2, md: 8 },
          backgroundColor: "#fff",
        }}
      >
        <Grid
          container
          spacing={10}
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={foodrangoli}
              alt="Food Rangoli"
              sx={{
                width: { xs: "72%", sm: "64%", md: "100%" },
                maxWidth: 520,
                height: "auto",
                objectFit: "contain",
                borderRadius: 2,
                boxShadow: "0 12px 30px rgba(250, 17, 17, 0.95)",
                display: "block",
                mx: { xs: "auto", md: 0 },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                pl: { md: 8 },
                pr: { xs: 2, md: 0 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: 700, color: "#4caf50", mb: 2 }}
              >
                Regional Snacks
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#444",
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  lineHeight: 1.6,
                  mb: 1,
                }}
              >
                You can order a variety of your choice
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#444",
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  lineHeight: 1.6,
                  mb: 1,
                }}
              >
                regional snacks such as pickles, papad, sweets,
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#444",
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  lineHeight: 1.6,
                }}
              >
                any side snacks, etc.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Order in 4 Simple Steps */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 8 },
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ maxWidth: 1100, mx: "auto" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 4,
              textAlign: "center",
              color: "orange",
              fontSize: { xs: "1.6rem", md: "2rem" },
            }}
          >
            Order in 4 simple steps
          </Typography>
          <Box>
            {orderSteps.map((step, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  gap: 3,
                  alignItems: "flex-start",
                  py: 2,
                  px: { xs: 1, md: 2 },
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    minWidth: 56,
                    minHeight: 56,
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    backgroundColor: "orange",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                    flexShrink: 0,
                  }}
                  aria-hidden
                >
                  {step.step}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 0.5,
                      fontSize: { xs: "1rem", md: "1.05rem" },
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#555",
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            ))}
            <Box sx={{ height: 1, backgroundColor: "#f0f0f0", mt: 2 }} />
          </Box>
        </Box>
      </Box>

      {/* JOIN AS A CUSTOMER */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 5 },
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        <Grid container spacing={10} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 280, sm: 360, md: 480 },
                height: { xs: 280, sm: 360, md: 480 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -36,
                  left: -60,
                  width: { xs: 340, sm: 480, md: 620 },
                  height: { xs: 120, sm: 150, md: 180 },
                  bgcolor: "#ffd9b3",
                  borderTopLeftRadius: "999px",
                  borderTopRightRadius: "999px",
                  zIndex: 1,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                }}
              />
              <Box
                component="img"
                src={joinCustomer}
                alt="Join as Customer"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  zIndex: 2,
                  boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box sx={{ maxWidth: 560, width: "100%" }}>
              <Typography variant="overline" sx={{ color: "#6b6b6b" }}>
                Homemade food
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "#4caf50", mt: 1 }}
              >
                JOIN AS A CUSTOMER
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#4caf50", mb: 2 }}
              >
                Order your choice of homemade food right away
              </Typography>
              <Typography sx={{ color: "#333", mb: 3, lineHeight: 1.8 }}>
                You can get the best homemade food within no time. Place online
                food orders on the go or schedule advance orders.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                  flexWrap: "wrap",
                }}
              >
                <Box
                  component="a"
                  href="#"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: "#000",
                    color: "white",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                  }}
                >
                  <Typography sx={{ fontSize: "1.1rem" }}>🍎</Typography>
                  <Box>
                    <Typography sx={{ fontSize: "0.75rem", lineHeight: 1 }}>
                      Download on the
                    </Typography>
                    <Typography sx={{ fontSize: "0.95rem", fontWeight: 600 }}>
                      App Store
                    </Typography>
                  </Box>
                </Box>
                <Box
                  component="a"
                  href="#"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: "#000",
                    color: "white",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                  }}
                >
                  <Typography sx={{ fontSize: "1.1rem" }}>▶️</Typography>
                  <Box>
                    <Typography sx={{ fontSize: "0.75rem", lineHeight: 1 }}>
                      GET IT ON
                    </Typography>
                    <Typography sx={{ fontSize: "0.95rem", fontWeight: 600 }}>
                      Google Play
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* JOIN AS A HOME CHEF */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 5 },
          maxWidth: 1200,
          mx: "auto",
          backgroundColor: "#ffffff",
        }}
      >
        <Grid container spacing={10} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box sx={{ maxWidth: 560, width: "100%" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "#4caf50", mb: 1 }}
              >
                JOIN AS A HOME CHEF
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#67b246", mb: 2 }}
              >
                Earn and grow with us as a Home Chef
              </Typography>
              <Typography sx={{ color: "#333", mb: 3, lineHeight: 1.8 }}>
                It's time to earn from cooking you have been doing your whole
                life. Also, by delivering a share of your food, you will make a
                healthy & happy society around you.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                  flexWrap: "wrap",
                }}
              >
                <Box
                  component="a"
                  href="#"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: "#000",
                    color: "white",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                  }}
                >
                  <Typography sx={{ fontSize: "1.1rem" }}>🍎</Typography>
                  <Box>
                    <Typography sx={{ fontSize: "0.75rem", lineHeight: 1 }}>
                      Download on the
                    </Typography>
                    <Typography sx={{ fontSize: "0.95rem", fontWeight: 600 }}>
                      App Store
                    </Typography>
                  </Box>
                </Box>
                <Box
                  component="a"
                  href="#"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: "#000",
                    color: "white",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                  }}
                >
                  <Typography sx={{ fontSize: "1.1rem" }}>▶️</Typography>
                  <Box>
                    <Typography sx={{ fontSize: "0.75rem", lineHeight: 1 }}>
                      GET IT ON
                    </Typography>
                    <Typography sx={{ fontSize: "0.95rem", fontWeight: 600 }}>
                      Google Play
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 280, sm: 360, md: 480 },
                height: { xs: 280, sm: 360, md: 480 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -36,
                  right: -60,
                  width: { xs: 340, sm: 480, md: 620 },
                  height: { xs: 120, sm: 150, md: 180 },
                  bgcolor: "#ff9fb0",
                  borderTopLeftRadius: "999px",
                  borderTopRightRadius: "999px",
                  zIndex: 1,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                }}
              />
              <Box
                component="img"
                src={joinChef}
                alt="Join as Home Chef"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  zIndex: 2,
                  boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials */}
      <Box
        sx={{
          backgroundColor: "#fafafa",
          py: { xs: 10, md: 14 },
          px: { xs: 2, md: 8 },
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: 8, textAlign: "center" }}
        >
          What People Say
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {testimonials.map((t, i) => (
            <Grid item xs={12} sm={6} md={3.5} key={i}>
              <Card
                sx={{
                  p: 3,
                  height: "100%",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  borderTop: "4px solid #4CAF50",
                  transition: "box-shadow 0.3s",
                  "&:hover": { boxShadow: "0 4px 16px rgba(0,0,0,0.15)" },
                }}
              >
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{ mb: 2, fontStyle: "italic" }}
                  >
                    "{t.text}"
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {t.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {t.city}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Newsletter / CTA */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          px: { xs: 2, md: 8 },
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Stay updated with offers
        </Typography>
        <Typography variant="body1" sx={{ mb: 5, color: "text.secondary" }}>
          Join our newsletter for exclusive discounts and fresh dish updates.
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            if (!email) return;
            alert(`Thanks! We'll send updates to ${email}`);
            setEmail("");
          }}
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <TextField
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
            sx={{ minWidth: 260 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Subscribe
          </Button>
        </Box>
      </Box>

      {/* Why Choose Us */}
      <Box
        sx={{
          backgroundImage: `url(${whyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 10 },
          textAlign: "center",
          color: "#000806f4",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            maxWidth: 900,
            mx: "auto",
            mt: { xs: -3, md: -6 },
            px: { xs: 3, md: 6 },
            py: { xs: 2.5, md: 3.5 },
            backgroundColor: "rgba(255,255,255,0.88)",
            borderRadius: 2,
            boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Why Choose Us?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.05rem",
              color: "#222",
            }}
          >
            We provide fresh, healthy, and homemade meals prepared by local
            housewives. No restaurants, no compromise — only authentic ghar
            jaisa khana delivered to your doorstep.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
