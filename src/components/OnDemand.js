import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, Chip, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useGetfoodListData } from '../services/fetchProduct';
import { useCart } from './CartContext';

// Import slider images
import slider1 from './ondemandslider1.jpg';
import slider2 from './ondemandslider2.jpg';
import slider3 from './ondemandslider3.jpg';
import slider4 from './ondemandslider4.jpg';
import slider5 from './ondemandslider5.jpg';
import slider6 from './ondemandslider6.jpg';

const SLIDER_IMAGES = [slider1, slider2, slider3, slider4, slider5, slider6];

const OnDemand = () => {
    const { data: foodListData } = useGetfoodListData();
    const { addToCart } = useCart();
    const [selectedExtras, setSelectedExtras] = useState({});
    const [searchQuery, setSearchQuery] = useState("");
    
    // Animated Placeholder Logic
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true); // true = in, false = out

    const placeholders = [
        "Search for Pavbhaji",
        "Search for Varan Bhat",
        "Search for Biryani",
        "Search for Chicken Thali",
        "Search for Veg Thali",
        "Search for Samosa",
        "Search for Khaman Dhokla",
        "Search for Chole Bhature",
        "Search for Puri Bhaji",
        "Search for Aloo Paneer"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(false); // Trigger exit animation
            
            setTimeout(() => {
                setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
                setIsAnimating(true); // Trigger enter animation
            }, 600); // Time for exit animation to complete

        }, 4000); // 3 seconds stay + 1 second transition total

        return () => clearInterval(interval);
    }, [placeholders.length]);

    // Slider state
    const [current, setCurrent] = useState(0);
    const outerRef = useRef(null);
    const autoRef = useRef(null);
    const total = SLIDER_IMAGES.length;

    const resetAuto = useCallback(() => {
        clearInterval(autoRef.current);
        autoRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, 3500);
    }, [total]);

    useEffect(() => {
        resetAuto();
        return () => clearInterval(autoRef.current);
    }, [resetAuto]);

    const handleAddToCart = (food) => {
        const extras = selectedExtras[food._id] || [];
        const chosenAddons = extras.map(idx => food.addons[idx]);
        const addonsTotal = chosenAddons.reduce((sum, a) => sum + (a.price || 0), 0);
        const totalName = food.foodName + (chosenAddons.length > 0 ? ` (+ ${chosenAddons.map(a => a.name).join(", ")})` : "");
        
        addToCart({ 
            id: food._id + (extras.length > 0 ? "-" + extras.join("-") : ""), 
            name: totalName, 
            price: food.price + addonsTotal, 
            image: food.images[0], 
            cuisine: 'On Demand' 
        }, 1);
        alert(`${food.foodName} added to cart!`);
    };

    const filteredFoods = (foodListData?.data || []).filter(food => 
        food.foodName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (food.description && food.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <Box sx={{ 
            minHeight: '100vh', 
            backgroundColor: '#ffffff', 
            pb: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/* Global Styles for Placeholder Animation */}
            <style>
                {`
                    @keyframes slideInLeft {
                        from { transform: translateX(-40px); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes slideOutLeft {
                        from { transform: translateX(0); opacity: 1; }
                        to { transform: translateX(-40px); opacity: 0; }
                    }
                    .placeholder-enter {
                        animation: slideInLeft 0.6s ease-out forwards;
                    }
                    .placeholder-exit {
                        animation: slideOutLeft 0.6s ease-in forwards;
                    }
                `}
            </style>

            {/* Search Bar Section */}
            <Box sx={{ width: '100%', maxWidth: '800px', mt: 4, px: 2, position: 'relative' }}>
                <TextField
                    fullWidth
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#28a745' }} />
                            </InputAdornment>
                        ),
                        sx: {
                            borderRadius: '12px',
                            backgroundColor: '#f1f3f6',
                            '& fieldset': { border: 'none' },
                            height: '50px',
                            fontSize: '15px'
                        }
                    }}
                />
                {/* Custom Animated Placeholder Overlay */}
                {!searchQuery && (
                    <Box 
                        sx={{ 
                            position: 'absolute', 
                            left: '60px', 
                            top: '50%', 
                            transform: 'translateY(-50%)', 
                            pointerEvents: 'none',
                            color: '#999',
                            fontSize: '15px',
                            overflow: 'hidden',
                            width: 'calc(100% - 100px)'
                        }}
                    >
                        <div className={isAnimating ? 'placeholder-enter' : 'placeholder-exit'}>
                            {placeholders[placeholderIndex]}
                        </div>
                    </Box>
                )}
            </Box>

            {/* Slider Section */}
            <Box sx={{ 
                width: '100%', 
                maxWidth: '1280px', 
                mt: 4, 
                px: 2, 
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Box sx={{ 
                    display: 'flex', 
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${current * (100 / (window.innerWidth < 900 ? 1 : 3))}%)`,
                    gap: 2
                }}>
                    {SLIDER_IMAGES.map((img, idx) => (
                        <Box 
                            key={idx} 
                            sx={{ 
                                minWidth: { xs: '100%', md: 'calc(33.333% - 11px)' },
                                height: { xs: '200px', md: '250px' },
                                borderRadius: '15px',
                                overflow: 'hidden',
                                flexShrink: 0
                            }}
                        >
                            <img 
                                src={img} 
                                alt={`Offer ${idx + 1}`} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                        </Box>
                    ))}
                </Box>
                
                {/* Dots indicator */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 1 }}>
                    {SLIDER_IMAGES.map((_, idx) => (
                        <Box 
                            key={idx} 
                            onClick={() => { setCurrent(idx); resetAuto(); }}
                            sx={{ 
                                width: 8, 
                                height: 8, 
                                borderRadius: '50%', 
                                cursor: 'pointer',
                                backgroundColor: current === idx ? '#28a745' : '#ddd',
                                transition: 'background-color 0.3s'
                            }} 
                        />
                    ))}
                </Box>
            </Box>

            {/* Content Section */}
            <Box sx={{ width: '100%', maxWidth: '1280px', mt: 8, px: { xs: 2, md: 4 } }}>
                <Typography variant="h5" sx={{ 
                    fontWeight: 800, 
                    color: '#2c1a06', 
                    mb: 4, 
                    pl: 2,
                    borderLeft: '5px solid #28a745'
                }}>
                    Family Kitchens Near You
                </Typography>

                <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="flex-start">
                    {filteredFoods.length > 0 ? (
                        filteredFoods.map((food) => (
                            <Grid item key={food._id} xs={12} sm={6} md={4} lg={3}>
                                <Card sx={{ 
                                    borderRadius: "15px", 
                                    overflow: "hidden", 
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    "&:hover": { transform: "translateY(-6px)", boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }
                                }}>
                                    <Box sx={{ position: "relative" }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={food.images && food.images[0] ? food.images[0] : "https://via.placeholder.com/300x200?text=No+Image"}
                                            alt={food.foodName}
                                            sx={{ objectFit: "cover" }}
                                        />
                                        <Box sx={{ 
                                            position: 'absolute', 
                                            bottom: 15, 
                                            left: 15, 
                                            bgcolor: 'rgba(255,255,255,0.95)', 
                                            p: '4px 8px', 
                                            borderRadius: '6px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1
                                        }}>
                                            <Box sx={{ 
                                                width: 10, 
                                                height: 10, 
                                                border: `1px solid ${food.category === "veg" ? "#28a745" : "#dc3545"}`, 
                                                p: "1px", 
                                                display: "flex", 
                                                alignItems: "center", 
                                                justifyContent: "center" 
                                            }}>
                                                <Box sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: food.category === "veg" ? "#28a745" : "#dc3545" }} />
                                            </Box>
                                            <Typography sx={{ fontSize: '10px', fontWeight: 800, color: '#333' }}>
                                                {food.category === 'veg' ? 'VEG' : 'NON-VEG'}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Typography sx={{ fontWeight: 800, color: '#2c1a06', mb: 0.5, fontSize: '1.1rem' }}>
                                            {food.foodName}
                                        </Typography>
                                        
                                        <Typography variant="body2" color="text.secondary" sx={{ 
                                            mb: 2, 
                                            fontSize: "0.85rem",
                                            lineHeight: 1.4,
                                            height: '38px',
                                            overflow: 'hidden'
                                        }}>
                                            {food.description || "Fresh homemade meal prepared with care."}
                                        </Typography>

                                        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography variant="h6" sx={{ color: "#2c1a06", fontWeight: 800 }}>
                                                ₹{food.price}
                                            </Typography>
                                            <Button 
                                                variant="contained" 
                                                size="small"
                                                onClick={() => handleAddToCart(food)}
                                                sx={{ 
                                                    bgcolor: '#fff', 
                                                    color: '#28a745',
                                                    border: '1px solid #28a745',
                                                    fontWeight: 800,
                                                    borderRadius: '8px',
                                                    textTransform: 'none',
                                                    "&:hover": { bgcolor: '#28a745', color: '#fff' }
                                                }}
                                            >
                                                ADD +
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Box sx={{ width: '100%', textAlign: 'center', mt: 4 }}>
                            <Typography variant="h6" color="text.secondary">No items match your search.</Typography>
                        </Box>
                    )}
                </Grid>
            </Box>
        </Box>
    );
};

export default OnDemand;
