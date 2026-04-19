import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Divider,
  TextField,
  Card,
  CardContent,
  Paper,
  Select,
  MenuItem,
  FormControl,
  Chip,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import httpClient from "../httpClient";

// ─── RAZORPAY CONFIG ───────────────────────────────────────────────────────────
const RAZORPAY_KEY_ID = "rzp_test_SZ2dIOsRiszVVg";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (document.getElementById("razorpay-script")) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};
// ───────────────────────────────────────────────────────────────────────────────

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } =
    useCart();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Calculations
  const subTotal = totalPrice || 0;
  const deliveryCharges = 40;
  const platformFee = 5;
  const taxes = subTotal * 0.05; // 5% GST
  const discount = 10;
  const grandTotal = subTotal + deliveryCharges + platformFee + taxes - discount;

  const orangeTheme = {
    primary: "#ff6d00",
    secondary: "#fff3e0",
    text: "#2c1a06",
    grey: "#f5f5f5",
    border: "#e0e0e0",
  };

  // Preload Razorpay script on mount
  useEffect(() => {
    loadRazorpayScript();
  }, []);

  const handleProceedToPay = async () => {
    const token = localStorage.getItem("motw-token");
    if (!token) {
        setSnackbar({
            open: true,
            message: "Please login to proceed with the payment.",
            severity: "warning",
        });
        navigate('/login');
        return;
    }

    if (!date || !timeSlot) {
        setSnackbar({
            open: true,
            message: "Please select both date and time slot for delivery.",
            severity: "warning",
        });
        return;
    }

    setPaymentLoading(true);

    try {
        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded) {
            throw new Error("Razorpay SDK failed to load. Check your internet connection.");
        }

        // 1. Create the order in your backend database
        const orderData = {
            address: "Balewadi High St, Laxman Nagar, Baner, Pune, Maharashtra 411045, India",
            items: cartItems.map(item => ({
                foodId: item.id,
                quantity: item.quantity,
                foodName: item.name,
                price: item.price
            }))
        };

        const { data: orderResponse } = await httpClient.post('/orders/create', orderData);
        const { orderId } = orderResponse.data;

        // 2. Create the Razorpay order
        const { data: razorpayResponse } = await httpClient.post('/payments/create-order', {
            orderId: orderId,
            amount: Math.round(grandTotal)
        });

        // 3. Configure Razorpay options
        const options = {
            key: RAZORPAY_KEY_ID,
            amount: razorpayResponse.amount, 
            currency: razorpayResponse.currency,
            name: "MealsOnTheWay",
            description: "Food Order Payment",
            image: "/logo.png",
            order_id: razorpayResponse.razorpayOrderId,
            handler: async (response) => {
                try {
                    // 4. Verify payment on the backend
                    const verificationData = {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    };

                    const { data: verifyResponse } = await httpClient.post('/payments/verify-payment', verificationData);

                    if (verifyResponse.success) {
                        setSnackbar({
                            open: true,
                            message: "Payment successful! Your order has been placed.",
                            severity: "success",
                        });
                        clearCart();
                        setTimeout(() => navigate('/my-orders'), 1500);
                    } else {
                        setSnackbar({
                            open: true,
                            message: "Payment verification failed. Please contact support.",
                            severity: "error",
                        });
                    }
                } catch (error) {
                    console.error("Verification Error:", error);
                    setSnackbar({
                        open: true,
                        message: "An error occurred during payment verification.",
                        severity: "error",
                    });
                } finally {
                    setPaymentLoading(false);
                }
            },
            prefill: {
                name: JSON.parse(localStorage.getItem("motw-user") || "{}").name || "",
                email: JSON.parse(localStorage.getItem("motw-user") || "{}").email || "",
                contact: ""
            },
            notes: {
                address: "MealsOnTheWay Delivery",
                date_slot: date,
                time_slot: timeSlot
            },
            theme: {
                color: orangeTheme.primary,
            },
            modal: {
                ondismiss: function () {
                  setPaymentLoading(false);
                },
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
            setPaymentLoading(false);
            setSnackbar({
                open: true,
                message: `Payment failed: ${response.error.description}`,
                severity: "error",
            });
        });
        rzp.open();

    } catch (error) {
        setPaymentLoading(false);
        console.error("Payment Error:", error);
        setSnackbar({
            open: true,
            message: error.response?.data?.message || error.message || "Failed to initiate payment. Please try again.",
            severity: "error",
        });
    }
  };

  if (totalItems === 0) {
    return (
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
          Your cart is empty
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/services")}
          sx={{
            bgcolor: orangeTheme.primary,
            "&:hover": { bgcolor: "#e65100" },
          }}
        >
          Go to Services
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#f1f3f6", flex: 1, py: 6 }}>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box sx={{ width: "100%", maxWidth: "1280px" }}>
          <Box sx={{ mb: 4, display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={() => navigate(-1)}
              sx={{
                mr: 2,
                bgcolor: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Box>

          <Grid container spacing={5} justifyContent="center">
            {/* LEFT SECTION: ADDRESS */}
            <Grid item xs={12} md={7}>
              <Card
                sx={{
                  borderRadius: "0px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  mb: 3,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <LocationOnIcon sx={{ color: orangeTheme.primary }} />{" "}
                      Delivery Address
                    </Typography>
                    <Button
                      variant="text"
                      sx={{ color: orangeTheme.primary, textTransform: "none" }}
                    >
                      Edit
                    </Button>
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: 700, mb: 1 }}>
                    Delivery At
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 4, lineHeight: 1.6 }}
                  >
                    Balewadi High St, Laxman Nagar, Baner, Pune, Maharashtra
                    411045, India
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* RIGHT SECTION: ITEMS, SLOTS, BILLING */}
            <Grid item xs={12} md={5}>
              {/* Items List */}
              <Paper sx={{ borderRadius: "0px", p: 3, mb: 3 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 800,
                    color: "#999",
                    textTransform: "uppercase",
                    mb: 2,
                    display: "block",
                  }}
                >
                  Items
                </Typography>
                {cartItems.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "8px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                          {item.name}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 800 }}>
                          ₹{item.price}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        px: 1,
                      }}
                    >
                      <Button
                        size="small"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.cuisine,
                            item.quantity - 1,
                          )
                        }
                        sx={{ minWidth: 30, color: orangeTheme.primary }}
                      >
                        -
                      </Button>
                      <Typography sx={{ mx: 1, fontWeight: 800 }}>
                        {item.quantity}
                      </Typography>
                      <Button
                        size="small"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.cuisine,
                            item.quantity + 1,
                          )
                        }
                        sx={{ minWidth: 30, color: orangeTheme.primary }}
                      >
                        +
                      </Button>
                    </Box>
                  </Box>
                ))}
                <Button
                  fullWidth
                  sx={{
                    color: orangeTheme.primary,
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                  startIcon={<span>+</span>}
                >
                  Add more item
                </Button>
              </Paper>

              {/* Date & Time Slots */}
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, borderRadius: "12px" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 800,
                        color: "#999",
                        textAlign: "center",
                        display: "block",
                        mb: 1,
                      }}
                    >
                      DATE SLOT
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: orangeTheme.grey,
                        p: 1,
                        borderRadius: "8px",
                      }}
                    >
                      <TextField
                        type="date"
                        variant="standard"
                        fullWidth
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        inputProps={{
                          min: new Date().toISOString().split("T")[0],
                        }}
                        InputProps={{
                          disableUnderline: true,
                          sx: { fontSize: "12px" },
                        }}
                      />
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, borderRadius: "12px" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 800,
                        color: "#999",
                        textAlign: "center",
                        display: "block",
                        mb: 1,
                      }}
                    >
                      TIME SLOT
                    </Typography>
                    <FormControl fullWidth variant="standard">
                      <Select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        displayEmpty
                        disableUnderline
                        sx={{
                          bgcolor: orangeTheme.grey,
                          borderRadius: "8px",
                          px: 1,
                          fontSize: "12px",
                          height: "35px",
                        }}
                      >
                        <MenuItem value="">
                          <em>Select Slot</em>
                        </MenuItem>
                        <MenuItem value="9-10">9:00 AM - 10:00 AM</MenuItem>
                        <MenuItem value="12-1">12:00 PM - 1:00 PM</MenuItem>
                        <MenuItem value="1-2">1:00 PM - 2:00 PM</MenuItem>
                      </Select>
                    </FormControl>
                  </Paper>
                </Grid>
              </Grid>

              {/* Offers */}
              <Paper
                sx={{
                  p: 2,
                  borderRadius: "16px",
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <LocalOfferIcon sx={{ color: "#4caf50" }} />
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: "12px" }}>
                      WELCOME
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Flat ₹10 Off
                    </Typography>
                  </Box>
                </Box>
                <Button size="small" sx={{ color: "#d32f2f", fontWeight: 800 }}>
                  Remove
                </Button>
              </Paper>

              {/* Billing Summary */}
              <Paper sx={{ p: 3, borderRadius: "0px" }}>
                <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
                  TO PAY
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Sub Total
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    ₹{subTotal}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Delivery Charges
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    ₹{deliveryCharges}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Platform Charges
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    ₹{platformFee}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Applicable Taxes
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    ₹{taxes.toFixed(2)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                    color: "#4caf50",
                  }}
                >
                  <Typography variant="body2">Coupon Discount</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    - ₹{discount}
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h6" sx={{ fontWeight: 900 }}>
                    Grand Total
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 900, color: orangeTheme.primary }}
                  >
                    ₹{grandTotal.toFixed(2)}
                  </Typography>
                </Box>

                {/* ── RAZORPAY BUTTON ── */}
                <Button
                  fullWidth
                  variant="contained"
                  disabled={paymentLoading}
                  onClick={handleProceedToPay}
                  sx={{
                    mt: 4,
                    py: 2,
                    borderRadius: "12px",
                    bgcolor: orangeTheme.primary,
                    fontWeight: 900,
                    fontSize: "16px",
                    "&:hover": { bgcolor: "#e65100" },
                    "&:disabled": { bgcolor: "#ffb380", color: "#fff" },
                  }}
                >
                  {paymentLoading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'PROCEED TO PAY'}
                </Button>

                {/* Razorpay branding badge */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 1.5,
                    gap: 0.5,
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontSize: "10px" }}
                  >
                    Secured by
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontSize: "10px", fontWeight: 700, color: "#072654" }}
                  >
                    Razorpay
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Toast Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
          iconMapping={{
            success: <CheckCircleOutlineIcon fontSize="inherit" />,
            error: <ErrorOutlineIcon fontSize="inherit" />,
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CartPage;
