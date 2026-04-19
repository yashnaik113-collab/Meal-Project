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
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

// ─── PASTE YOUR RAZORPAY KEY ID HERE ───────────────────────────────────────────
const RAZORPAY_KEY_ID = "rzp_test_SZ2dIOsRiszVVg";
// ───────────────────────────────────────────────────────────────────────────────

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

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalItems, totalPrice } =
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
  const grandTotal =
    subTotal + deliveryCharges + platformFee + taxes - discount;

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

  const handlePayment = async () => {
    // Validate slots
    if (!date) {
      setSnackbar({
        open: true,
        message: "Please select a delivery date.",
        severity: "warning",
      });
      return;
    }
    if (!timeSlot) {
      setSnackbar({
        open: true,
        message: "Please select a time slot.",
        severity: "warning",
      });
      return;
    }

    setPaymentLoading(true);

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      setSnackbar({
        open: true,
        message: "Failed to load Razorpay. Check your internet connection.",
        severity: "error",
      });
      setPaymentLoading(false);
      return;
    }

    // Amount in paise (multiply by 100)
    const amountInPaise = Math.round(grandTotal * 100);

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: amountInPaise,
      currency: "INR",
      name: "MealsOnTheWay",
      description: `Order: ${cartItems.map((i) => `${i.name} x${i.quantity}`).join(", ")}`,

      // ─── If you have a backend that creates Razorpay orders, ────────────────
      // ─── replace the `amount` above with `order_id` from your server: ──────
      // order_id: 'order_XXXXXXXXXXXX',  // from POST /api/create-order
      // ────────────────────────────────────────────────────────────────────────

      prefill: {
        // These can be pulled from your user auth context
        name: "",
        email: "",
        contact: "",
      },

      notes: {
        delivery_address:
          "Balewadi High St, Laxman Nagar, Baner, Pune, Maharashtra 411045, India",
        date_slot: date,
        time_slot: timeSlot,
        items: cartItems
          .map((i) => `${i.name} x${i.quantity} @ ₹${i.price}`)
          .join(" | "),
      },

      theme: {
        color: "#ff6d00",
      },

      // ─── SUCCESS HANDLER ─────────────────────────────────────────────────────
      handler: function (response) {
        setPaymentLoading(false);
        // response contains:
        //   response.razorpay_payment_id
        //   response.razorpay_order_id    (if order_id was passed)
        //   response.razorpay_signature   (if order_id was passed)

        console.log("Payment successful:", response);

        // ─── TODO: Send response to your backend for signature verification ─
        // await axios.post('/api/verify-payment', response);
        // ────────────────────────────────────────────────────────────────────

        setSnackbar({
          open: true,
          message: `Payment successful! ID: ${response.razorpay_payment_id}`,
          severity: "success",
        });

        // Navigate to success page after short delay
        setTimeout(() => {
          navigate("/order-success", {
            state: {
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              grandTotal,
              date,
              timeSlot,
              items: cartItems,
            },
          });
        }, 1500);
      },

      modal: {
        ondismiss: function () {
          setPaymentLoading(false);
          setSnackbar({
            open: true,
            message: "Payment cancelled.",
            severity: "info",
          });
        },
        escape: true,
        backdropclose: false,
      },
    };

    try {
      const rzp = new window.Razorpay(options);

      // ─── PAYMENT FAILURE HANDLER ─────────────────────────────────────────
      rzp.on("payment.failed", function (response) {
        setPaymentLoading(false);
        console.error("Payment failed:", response.error);
        setSnackbar({
          open: true,
          message: `Payment failed: ${response.error.description}`,
          severity: "error",
        });
      });

      rzp.open();
    } catch (error) {
      setPaymentLoading(false);
      console.error("Razorpay init error:", error);
      setSnackbar({
        open: true,
        message: "Could not open payment gateway. Check your Key ID.",
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
                  onClick={handlePayment}
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
                  {paymentLoading ? "Opening Payment..." : "PROCEED TO PAY"}
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
