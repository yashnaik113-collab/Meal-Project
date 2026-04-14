import React, { useState, useEffect, useRef, useCallback } from 'react';
import './specialthali.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { useGetfoodListData } from '../services/fetchProduct';

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

const CategoryPage = () => {
    const { categoryTag } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [selectedMeal, setSelectedMeal] = useState(null);
    const { data: foodListData, isLoading } = useGetfoodListData();
    
    // Slider logic
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

    // Helper to format category tag for matching
    const formatTag = (tag) => tag.toLowerCase().replace(/-/g, ' ');

    // Filter foods based on the tag
    const filteredFoods = foodListData?.data?.filter(food => {
        const targetTag = formatTag(categoryTag);
        return food.tags?.some(tag => tag.toLowerCase() === targetTag);
    }) || [];

    const handleAddToCart = (food) => {
        addToCart({
            id: food._id,
            name: food.foodName,
            price: food.price,
            image: food.images[0],
            cuisine: categoryTag.replace(/-/g, ' ').toUpperCase()
        }, 1);
        alert(`${food.foodName} added to cart!`);
    };

    if (isLoading) return <div style={{ padding: '100px', textAlign: 'center' }}>Loading delicious meals...</div>;

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
                <div className="section-label">{categoryTag.replace(/-/g, ' ').toUpperCase()}</div>

                <div className="meal-plans-list">
                    {filteredFoods.length > 0 ? (
                        filteredFoods.map((food) => (
                            <div key={food._id} className="meal-card">
                                <div className="meal-info">
                                    <div className="veg-icon">
                                        <div className="veg-dot" style={{ backgroundColor: food.category === 'veg' ? '#28a745' : '#dc3545' }}></div>
                                    </div>
                                    <h3 className="meal-title">{food.foodName}</h3>
                                    <div className="meal-pricing">
                                        <span className="current-price">₹{food.price}</span>
                                        {/* Since dynamic data might not have original price, we can mock it or hide */}
                                        <span className="original-price">₹{Math.round(food.price * 1.2)}</span>
                                        <span className="discount-tag">20% OFF</span>
                                    </div>
                                    <p className="meal-description">
                                        {food.description} <span className="read-more" onClick={() => setSelectedMeal(food)}>read more</span>
                                    </p>
                                    {food.addons?.length > 0 && (
                                        <div className="plan-duration" style={{ fontSize: '12px' }}>
                                            Addons: {food.addons.map(a => a.name).join(', ')}
                                        </div>
                                    )}
                                </div>
                                <div className="meal-image-container">
                                    <img src={food.images[0]} alt={food.foodName} />
                                    <div className="add-btn-container">
                                        <button className="add-btn" onClick={() => handleAddToCart(food)}>ADD +</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', width: '100%', padding: '40px' }}>
                            <h3>No items found in this category yet.</h3>
                            <p>Admin is currently adding delicious meals for {categoryTag.replace(/-/g, ' ')}!</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedMeal && (
                <div className="modal-overlay" onClick={() => setSelectedMeal(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setSelectedMeal(null)}>×</button>
                        
                        <div className="modal-left">
                            <h2 className="modal-title">{selectedMeal.foodName}</h2>
                            <div className="modal-pricing">
                                <span className="current-price">₹{selectedMeal.price}</span>
                                <span className="original-price">₹{Math.round(selectedMeal.price * 1.2)}</span>
                                <span className="discount-tag">20% OFF</span>
                            </div>
                            <p className="modal-description">{selectedMeal.description}</p>
                        </div>

                        <div className="modal-right">
                            <img src={selectedMeal.images[0]} alt={selectedMeal.foodName} className="modal-img" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryPage;
