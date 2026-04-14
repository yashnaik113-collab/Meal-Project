import React, { useState, useEffect, useRef, useCallback } from 'react';
import './specialthali.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { useGetfoodListData } from '../services/fetchProduct';

// Import images
import combo1 from './ricecombo1.jpg';
import combo2 from './ricecombo2.jpg';
import combo3 from './ricecombo3.jpg';
import combo4 from './ricecombo4.jpg';

// Slider images from Services
import slider1 from './slider1.jpeg';
import slider2 from './slider2.jpeg';
import slider3 from './slider3.jpeg';
import slider4 from './slider4.jpeg';
import slider5 from './slider5.jpeg';
import slider6 from './slider6.jpeg';
import slider7 from './slider7.jpeg';
import slider8 from './slider8.jpeg';
import slider9 from './slider9.jpeg';

const SLIDES = [
    { src: slider1, alt: "Every Day Different Menu" },
    { src: slider2, alt: "100% Homemade Food starting at ₹99" },
    { src: slider3, alt: "We bring home to your doorstep" },
    { src: slider4, alt: "Fresh meals daily" },
    { src: slider5, alt: "Healthy choices" },
    { src: slider6, alt: "Authentic regional taste" },
    { src: slider7, alt: "Join as a home-chef" },
    { src: slider8, alt: "Tiffin services at its best" },
    { src: slider9, alt: "Delicious regional flavors" },
];

function ChevronLeft() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
        </svg>
    );
}

function ChevronRight() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );
}

const RiceCombo = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [selectedMeal, setSelectedMeal] = useState(null);
    const { data: foodListData } = useGetfoodListData();
    
    // Slider logic from Services.js
    const [current, setCurrent] = useState(0);
    const outerRef = useRef(null);
    const autoRef = useRef(null);
    const total = SLIDES.length;

    const getTranslate = useCallback((idx) => {
        if (!outerRef.current) return 0;
        const wrapperW = outerRef.current.offsetWidth - 32;
        const slideW = Math.min(420, wrapperW * 0.8);
        const gap = 18;
        const fullW = slideW + gap;
        const offset = idx * fullW - (wrapperW / 2 - slideW / 2);
        return Math.max(0, offset);
    }, []);

    const goTo = useCallback((idx) => {
        setCurrent(((idx % total) + total) % total);
    }, [total]);

    const resetAuto = useCallback(() => {
        clearInterval(autoRef.current);
        autoRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), 3200);
    }, [total]);

    useEffect(() => {
        resetAuto();
        return () => clearInterval(autoRef.current);
    }, [resetAuto]);

    const handleArrow = (dir) => {
        resetAuto();
        goTo(current + dir);
    };

    const translate = getTranslate(current);
    const slideStyle = (idx) => ({
        transform: idx === current ? "scale(1)" : "scale(0.93)",
        opacity: idx === current ? 1 : 0.55,
    });

    const mealPlans = [
        {
            id: 'rc-monthly',
            title: 'Rice Combo - Monthly',
            price: 2100,
            originalPrice: 3300,
            discount: '36% OFF',
            description: 'Delicious home-cooked Rice Combos delivered fresh to your doorstep.',
            plan: '20-Day Plan (1 meal/day)',
            perMealPrice: 105,
            perMealOriginal: 165,
            image: combo1,
            category: 'veg'
        },
        {
            id: 'rc-3months',
            title: 'Rice Combo - 3 Months',
            price: 6500,
            originalPrice: 9900,
            discount: '34% OFF',
            description: 'Delicious home-cooked Rice Combos delivered fresh to your doorstep.',
            plan: '60-Day Plan (1 meal/day)',
            perMealPrice: 108,
            perMealOriginal: 165,
            image: combo2,
            category: 'veg'
        },
        {
            id: 'rc-biweekly',
            title: 'Rice Combo - Biweekly',
            price: 1150,
            originalPrice: 1650,
            discount: '30% OFF',
            description: 'Delicious home-cooked Rice Combos delivered fresh to your doorstep.',
            plan: '10-Day Plan (1 meal/day)',
            perMealPrice: 115,
            perMealOriginal: 165,
            image: combo3,
            category: 'veg'
        },
        {
            id: 'rc-weekly',
            title: 'Rice Combo - Weekly (Trial)',
            price: 625,
            originalPrice: 825,
            discount: '24% OFF',
            description: 'Delicious home-cooked Rice Combos delivered fresh to your doorstep.',
            plan: '5-Day Plan (1 meal/day)',
            perMealPrice: 125,
            perMealOriginal: 165,
            image: combo4,
            category: 'veg'
        }
    ];

    // Filter backend foods with tag 'rice combo'
    const backendFoods = foodListData?.data?.filter(food => 
        food.tags?.some(tag => tag.toLowerCase().trim() === 'rice combo')
    ).map(food => ({
        id: food._id,
        title: food.foodName,
        price: food.price,
        originalPrice: Math.round(food.price * 1.25),
        discount: '20% OFF',
        description: food.description,
        plan: 'On Demand / Daily',
        perMealPrice: food.price,
        perMealOriginal: Math.round(food.price * 1.15),
        image: food.images[0],
        isBackend: true,
        category: food.category
    })) || [];

    const allMealPlans = [...mealPlans, ...backendFoods];

    const handleAddToCart = (meal) => {
        addToCart({
            id: meal.id,
            name: meal.title,
            price: meal.price,
            image: meal.image,
            cuisine: 'Rice Combo'
        }, 1);
        alert(`${meal.title} added to cart!`);
    };

    return (
        <div className="special-thali-page-root">
            <section className="slider-section">
                <div
                    ref={outerRef}
                    className="slider-outer"
                    onMouseEnter={() => clearInterval(autoRef.current)}
                    onMouseLeave={resetAuto}
                >
                    <button className="arrow-btn left" onClick={() => handleArrow(-1)}>
                        <ChevronLeft />
                    </button>

                    <div
                        className="slider-track"
                        style={{ transform: `translateX(-${translate}px)` }}
                    >
                        {SLIDES.map((slide, i) => (
                            <div key={i} className="slider-slide" style={slideStyle(i)}>
                                <img src={slide.src} alt={slide.alt} className="slide-img" />
                            </div>
                        ))}
                    </div>

                    <button className="arrow-btn right" onClick={() => handleArrow(1)}>
                        <ChevronRight />
                    </button>
                </div>

                <div className="dots-wrap">
                    {SLIDES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { resetAuto(); goTo(i); }}
                            className={`dot-btn ${i === current ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </section>

            <div className="special-thali-container">
                <div className="section-label">MEAL PLANS</div>

                <div className="meal-plans-list">
                    {allMealPlans.map((meal) => (
                        <div key={meal.id} className="meal-card">
                            <div className="meal-info">
                                <div className="veg-icon">
                                    <div className="veg-dot" style={{ backgroundColor: meal.category === 'non-veg' ? '#dc3545' : '#28a745' }}></div>
                                </div>
                                <h3 className="meal-title">{meal.title}</h3>
                                <div className="meal-pricing">
                                    <span className="current-price">₹{meal.price}</span>
                                    <span className="original-price">₹{meal.originalPrice}</span>
                                    <span className="discount-tag">{meal.discount}</span>
                                </div>
                                <p className="meal-description">
                                    {meal.description} <span className="read-more" onClick={() => setSelectedMeal(meal)}>read more</span>
                                </p>
                                <div className="plan-duration">
                                    {meal.plan} <span className="info-icon">i</span>
                                </div>
                            </div>
                            <div className="meal-image-container">
                                <div className="per-meal-badge">
                                    ₹{meal.perMealPrice} <span className="meal-badge-original">₹{meal.perMealOriginal}</span> Per Meal
                                </div>
                                <img src={meal.image} alt={meal.title} />
                                <div className="add-btn-container">
                                    <button className="add-btn" onClick={() => handleAddToCart(meal)}>ADD +</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedMeal && (
                <div className="modal-overlay" onClick={() => setSelectedMeal(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setSelectedMeal(null)}>×</button>
                        
                        <div className="modal-left">
                            <h2 className="modal-title">{selectedMeal.title || selectedMeal.foodName}</h2>
                            <div className="modal-pricing">
                                <span className="current-price">₹{selectedMeal.price}</span>
                                <span className="original-price">₹{selectedMeal.originalPrice || Math.round(selectedMeal.price * 1.25)}</span>
                                <span className="discount-tag">{selectedMeal.discount || '20% OFF'}</span>
                            </div>
                            <p className="modal-description">{selectedMeal.description}</p>
                        </div>

                        <div className="modal-right">
                            <img src={selectedMeal.image || (selectedMeal.images && selectedMeal.images[0])} alt={selectedMeal.title} className="modal-img" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RiceCombo;
