import React, { useState, useEffect, useRef, useCallback } from 'react';
import './specialthali.css';
import { useNavigate } from 'react-router-dom';

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

const Salads = () => {
    const navigate = useNavigate();
    
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
                <h1 style={{ textAlign: 'center', marginTop: '40px', color: '#333' }}>Salads Coming Soon</h1>
            </div>
        </div>
    );
};

export default Salads;
