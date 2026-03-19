import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import indiaBg from "./indiabg.jpg";

// ── IMAGE IMPORTS ─────────────────────────────────────────────────────────────
// Place your images in src/assets/ and update these paths accordingly
// Slider images
import slider1 from "./slider1.jpeg";
import slider2 from "./slider2.jpeg";
import slider3 from "./slider3.jpeg";
import slider4 from "./slider4.jpeg";
import slider5 from "./slider5.jpeg";
import slider6 from "./slider6.jpeg";
import slider7 from "./slider7.jpeg";

// Segment card images
import studentsImg from "./students.jpeg";
import eldersImg from "./elderly.jpeg";
import corporatesImg from "./corporate.jpeg";

// Meal images
import specialThali from "./specialthali.png";
import deluxeThali from "./deluxethali.png";
import classicThali from "./classicthali.png";
import comfortThali from "./comfortthali.png";
import standardThali from "./standardthali.png";
import jainThali from "./jainthali.png";
import riceCombo from "./ricecombo.png";
import healthy from "./healthy.png";
import breakfast from "./breakfast.png";
import lowCalorie from "./lowcaloriemeals.png";
import proteinMeal from "./protein.png";
import salads from "./salad.png";
import testimonial1 from "./testimonial1.png";
import testimonial2 from "./testimonial2.png";
import testimonial3 from "./testimonial3.png";
import testimonial4 from "./testimonial4.png";
import testimonial5 from "./testimonial5.png";
import testimonial6 from "./testimonial6.png";
import liveKankavli from "./livekankavli.jpeg";

// ── DATA ──────────────────────────────────────────────────────────────────────
const SLIDES = [
  { src: slider1, alt: "Every Day Different Menu" },
  { src: slider2, alt: "100% Homemade Food starting at ₹99" },
  { src: slider3, alt: "We bring home to your doorstep" },
  { src: slider4, alt: "Fresh meals daily" },
  { src: slider5, alt: "Healthy choices" },
  { src: slider6, alt: "Authentic regional taste" },
  { src: slider7, alt: "Join as a home-chef" },
];

const SEGMENTS = [
  { src: studentsImg, alt: "Students", label: "STUDENTS" },
  { src: eldersImg, alt: "Elderly", label: "ELDERLY" },
  { src: corporatesImg, alt: "Corporate", label: "CORPORATE" },
];

const MEALS = [
  { src: specialThali, name: "Special Thali" },
  { src: deluxeThali, name: "Deluxe Thali" },
  { src: classicThali, name: "Classic Thali" },
  { src: comfortThali, name: "Comfort Thali" },
  { src: standardThali, name: "Standard Thali" },
  { src: jainThali, name: "Jain Thali" },
  { src: riceCombo, name: "Rice Combo" },
  { src: healthy, name: "Healthy" },
  { src: breakfast, name: "Breakfast" },
  { src: lowCalorie, name: "Low Calorie Meals" },
  { src: proteinMeal, name: "Protein Meal" },
  { src: salads, name: "Salads" },
];

const TESTIMONIALS = [
  {
    name: "Prachi More",
    role: "HR Manager — Viman Nagar",
    img: testimonial1,
    text: "Used to skip lunch or eat chips during busy workdays. Now with Mealawe, I get homemade thali right at my office. Highly recommended for corporate folks!",
    rating: 5,
  },
  {
    name: "Akshay Deshmukh",
    role: "Startup Founder — Baner",
    img: testimonial2,
    text: "Good daily variety. I like that I can customize my plan. Had a slight delay once, but the food quality makes it worth it.",
    rating: 5,
  },
  {
    name: "Vaibhav Jadhav",
    role: "MBA Student — Deccan",
    img: testimonial3,
    text: "Affordable, filling, and tastes like home. Nothing fancy, just good food served right. Happy with Mealawe.",
    rating: 5,
  },
  {
    name: "Sunita Sharma",
    role: "Homemaker — Kothrud",
    img: testimonial4,
    text: "I orders for my son who moved to a new city. He says it tastes just like my cooking. Thank you for this service!",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    role: "Software Engineer — Hinjewadi",
    img: testimonial5,
    text: "Perfect for my post-gym meals. The high-protein options are exactly what I needed. Delivery is always on time.",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    role: "Freelance Designer — Aundh",
    img: testimonial6,
    text: "The regional variety is amazing. I love exploring dishes from different parts of India every week!",
    rating: 5,
  },
];

const STATS = [
  { value: "187+", label: "Pin Codes" },
  { value: "1000+", label: "Homechefs" },
  { value: "954210+", label: "Meals delivered" },
];

const REGIONS = [
  { label: "PUNJABI", path: "/Punjabi", img: "/images/punjabi.jpg" },
  { label: "GUJARATI", path: "/gujarati", img: "/images/gujarati.jpg" },
  { label: "SOUTH INDIAN", path: "/south", img: "/images/south.jpg" },
  { label: "KASHMIRI", path: "/kashmiri", img: "/images/kashmiri.jpg" },
  {
    label: "MAHARASHTRIAN",
    path: "/maharashtrian",
    img: "/images/maharashtrian.jpg",
  },
  { label: "BIHARI", path: "/bihari", img: "/images/bihari.jpg" },
  { label: "NORTH-EASTERN", path: "/north", img: "/images/north.jpg" },
  { label: "BENGALI", path: "/bengali", img: "/images/bengali.jpg" },
  { label: "RAJASTHANI", path: "/rajasthani", img: "/images/rajasthani.jpg" },
];

// ── STYLES ────────────────────────────────────────────────────────────────────
const styles = {
  page: {
    fontFamily: "'Poppins', sans-serif",
    background: "#fff",
    color: "#222",
  },

  // --- SLIDER ---
  sliderSection: {
    padding: "36px 0 28px",
    background: "#fff",
  },
  sliderOuter: {
    position: "relative",
    maxWidth: "1100px",
    margin: "0 auto",
    overflow: "hidden",
    padding: "0 16px",
  },
  sliderTrack: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
    transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
    willChange: "transform",
  },
  slide: {
    minWidth: "420px",
    height: "220px",
    borderRadius: "20px",
    overflow: "hidden",
    flexShrink: 0,
    transition: "transform 0.4s, opacity 0.4s",
    opacity: 0.55,
    transform: "scale(0.93)",
    background: "#ccc",
  },
  slideActive: {
    opacity: 1,
    transform: "scale(1)",
  },
  slideImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  arrowBtn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.92)",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },
  dotsWrap: {
    display: "flex",
    justifyContent: "center",
    gap: "7px",
    marginTop: "18px",
  },
  dot: {
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    background: "#c8d5c8",
    cursor: "pointer",
    transition: "background 0.3s, transform 0.3s",
    border: "none",
    padding: 0,
  },
  dotActive: {
    background: "#3d8c3d",
    transform: "scale(1.25)",
  },

  // --- SECTION LABEL ---
  sectionLabel: {
    textAlign: "center",
    fontSize: "14px", // Increased from 12px
    fontWeight: 600,
    letterSpacing: "2.5px",
    color: "#888",
    textTransform: "uppercase",
    marginBottom: "28px",
    fontFamily: "'Poppins', sans-serif",
  },

  // --- SPECIAL SECTION ---
  specialSection: {
    padding: "0 24px 52px", // Removed top padding to move it upwards
    background: "#fff",
    marginTop: "-20px", // Negative margin to pull it even higher
  },
  specialCards: {
    display: "flex",
    justifyContent: "center",
    gap: "40px", // Increased gap between cards
    flexWrap: "wrap",
    maxWidth: "1140px", // Increased maxWidth to accommodate larger gap
    margin: "0 auto",
  },
  specialCard: {
    width: "270px", // Reduced from 300px
    height: "340px", // Reduced from 380px
    borderRadius: "22px",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    transition: "transform 0.3s",
    flexShrink: 0,
  },
  specialCardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
    display: "block",
  },

  // --- MEALS SECTION ---
  mealsSection: {
    padding: "12px 24px 64px",
    background: "#fff",
  },
  mealsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "40px 24px", // Increased gap for larger items
    maxWidth: "1100px", // Increased maxWidth for larger items
    margin: "0 auto",
    justifyItems: "center",
  },
  mealItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    transition: "transform 0.25s",
  },
  mealCircle: {
    width: "220px", // Increased from 180px
    height: "220px", // Increased from 180px
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  mealImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },
  mealName: {
    fontSize: "15px", // Increased from 13px
    fontWeight: 500,
    color: "#333",
    textAlign: "center",
    lineHeight: 1.3,
    fontFamily: "'Poppins', sans-serif",
  },

  // --- REVIEWS ---
  reviewsSection: {
    padding: "40px 24px 60px",
    background: "#fff",
    textAlign: "center",
  },
  reviewsTrack: {
    display: "flex",
    gap: "24px",
    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    width: "fit-content",
  },
  reviewsOuter: {
    maxWidth: "1010px", // (320px * 3) + (24px * 2) approx
    margin: "0 auto",
    overflow: "hidden",
    padding: "20px 10px 40px",
  },
  reviewCard: {
    background: "#fff", // Non-evoking: white
    border: "1px solid #eee",
    borderRadius: "22px",
    padding: "36px 24px 24px",
    width: "320px",
    position: "relative",
    textAlign: "left",
    boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
    marginTop: "25px",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: 0.6,
    transform: "scale(0.92)",
    flexShrink: 0,
  },
  reviewCardActive: {
    background: "#fffde7", // Evoking: soft yellow
    border: "1px solid #f9e8a0",
    opacity: 1,
    transform: "scale(1.05)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    zIndex: 2,
  },
  reviewAvatarWrap: {
    position: "absolute",
    top: "-25px",
    left: "24px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid #fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  reviewAvatar: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  reviewName: {
    fontSize: "16px",
    fontWeight: 800,
    color: "#222",
    marginBottom: "2px",
    display: "block",
  },
  reviewRole: {
    fontSize: "11px",
    color: "#777",
    marginBottom: "14px",
    display: "block",
    fontWeight: 500,
  },
  reviewText: {
    fontSize: "12px",
    color: "#444",
    lineHeight: "1.6",
    marginBottom: "18px",
    fontStyle: "italic",
    minHeight: "60px",
  },
  starsWrap: {
    display: "flex",
    gap: "3px",
  },

  // --- STATS ---
  statsSection: {
    padding: "20px 24px 80px",
    background: "#fff",
  },
  statsGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    maxWidth: "1080px",
    margin: "0 auto",
    flexWrap: "nowrap",
  },
  statCard: {
    flex: "0 0 auto",
    margin: "16px 12px",
    borderRadius: "12px",
    padding: "20px 16px",
    boxShadow: "0 3px 10px #0000001a",
    position: "relative",
    width: "30%",
    minWidth: "300px",
    textAlign: "center",
    backgroundColor: "#fffff4", // Light yellow cream
    border: ".5px solid #ffc922", // Golden border
    transition: "transform 0.3s ease",
  },
  statValue: {
    fontSize: "clamp(24px, 4vw, 32px)",
    fontWeight: 800,
    color: "#518937", // Matching primary color theme if applicable
    marginBottom: "4px",
    display: "block",
  },
  statLabel: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#78808e", // Grey color from vars
    textTransform: "capitalize",
    letterSpacing: "0.5px",
  },

  // --- LIVE SECTION ---
  liveSection: {
    position: "relative",
    width: "100%",
    background: "#fff",
    overflow: "hidden",
    marginTop: "-20px",
  },
  liveImg: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  kankavliOverlay: {
    position: "absolute",
    top: "14%",
    left: "22%",
    fontSize: "clamp(24px, 6vw, 72px)",
    fontWeight: 800,
    fontStyle: "italic",
    color: "#cbd5cb",
    fontFamily: "'Poppins', sans-serif",
    zIndex: 2,
  },
  puneMasker: {
    position: "absolute",
    top: "15%",
    left: "21.5%",
    width: "25%",
    height: "15%",
    background: "#f7f7f7", // Matches the solid background color of the image area
    zIndex: 1,
  },

  // --- COOKING SECTION ---
  cookingSection: {
    padding: "80px 24px 100px",
    backgroundImage: `url(${indiaBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
    textAlign: "center",
  },
  cookingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.55)", // Faint black tint for readability while keeping it HD
    zIndex: 1,
  },
  cookingTitle: {
    fontSize: "clamp(28px, 5vw, 48px)",
    fontWeight: 800,
    color: "#fff",
    marginBottom: "50px",
    position: "relative",
    zIndex: 2,
    textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
  },
  cookingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    maxWidth: "1080px", // Accommodates 3 cards of ~320px + gaps
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
    justifyItems: "center",
  },
  regionalCard: {
    background: "transparent",
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    position: "relative",
    width: "320.4px",
    height: "149.56px",
    boxShadow: "none",
  },
  regionalImg: {
    width: "100%",
    height: "100%",
    objectFit: "fill", // Set to 'fill' or 'cover' since user provided exact dimensions matching the image
    display: "block",
  },
};

// ── SUBCOMPONENTS ─────────────────────────────────────────────────────────────
function Star() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#ffc107">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}
function ChevronLeft() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#333"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#333"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
const Services = () => {
  const [current, setCurrent] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [hoverCard, setHoverCard] = useState(null);
  const [hoverMeal, setHoverMeal] = useState(null);
  const [hoverRegion, setHoverRegion] = useState(null);
  const navigate = useNavigate();
  const outerRef = useRef(null);
  const autoRef = useRef(null);
  const autoReviewRef = useRef(null);
  const total = SLIDES.length;
  const totalReviews = TESTIMONIALS.length;

  // Compute translate so the active slide is centered in the viewport
  const getTranslate = useCallback((idx) => {
    if (!outerRef.current) return 0;
    const wrapperW = outerRef.current.offsetWidth - 32; // subtract padding
    const slideW = Math.min(420, wrapperW * 0.8);
    const gap = 18;
    const fullW = slideW + gap;
    const offset = idx * fullW - (wrapperW / 2 - slideW / 2);
    return Math.max(0, offset);
  }, []);

  const goTo = useCallback(
    (idx) => {
      setCurrent(((idx % total) + total) % total);
    },
    [total],
  );

  const resetAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % total),
      3200,
    );
  }, [total]);

  useEffect(() => {
    resetAuto();
    autoReviewRef.current = setInterval(() => {
      setCurrentReview((c) => (c + 1) % totalReviews);
    }, 4000);
    return () => {
      clearInterval(autoRef.current);
      clearInterval(autoReviewRef.current);
    };
  }, [resetAuto, totalReviews]);

  const handleArrow = (dir) => {
    resetAuto();
    goTo(current + dir);
  };

  const translate = getTranslate(current);

  // Responsive slide width
  const slideStyle = (idx) => ({
    ...styles.slide,
    minWidth: "clamp(260px, 38vw, 420px)",
    ...(idx === current ? styles.slideActive : {}),
  });

  return (
    <div style={styles.page}>
      {/* ── GOOGLE FONT ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        @media (max-width: 900px) {
          .meals-grid-resp { grid-template-columns: repeat(3,1fr) !important; }
          .special-card-resp { width: 240px !important; height: 300px !important; }
        }
        @media (max-width: 640px) {
          .meals-grid-resp { grid-template-columns: repeat(2,1fr) !important; }
          .special-cards-resp { flex-direction: column !important; align-items: center !important; }
          .special-card-resp { width: 100% !important; max-width: 320px !important; height: 290px !important; }
          .meal-circle-resp { width: 160px !important; height: 160px !important; border-radius: 0 !important; background: transparent !important; }
        }
        @media (max-width: 900px) {
          .cooking-grid-resp { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .cooking-grid-resp { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════
          SECTION 1 — SLIDER
      ══════════════════════════════════════════════ */}
      <section style={styles.sliderSection}>
        <div
          ref={outerRef}
          style={styles.sliderOuter}
          onMouseEnter={() => clearInterval(autoRef.current)}
          onMouseLeave={resetAuto}
        >
          {/* Left arrow */}
          <button
            style={{ ...styles.arrowBtn, left: "4px" }}
            onClick={() => handleArrow(-1)}
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>

          {/* Track */}
          <div
            style={{
              ...styles.sliderTrack,
              transform: `translateX(-${translate}px)`,
            }}
          >
            {SLIDES.map((slide, i) => (
              <div key={i} style={slideStyle(i)}>
                <img src={slide.src} alt={slide.alt} style={styles.slideImg} />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            style={{ ...styles.arrowBtn, right: "4px" }}
            onClick={() => handleArrow(1)}
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div style={styles.dotsWrap}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                resetAuto();
                goTo(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                ...styles.dot,
                ...(i === current ? styles.dotActive : {}),
              }}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — SPECIALLY FOR YOU
      ══════════════════════════════════════════════ */}
      <section style={styles.specialSection}>
        <p style={styles.sectionLabel}>Specially for you</p>

        <div className="special-cards-resp" style={styles.specialCards}>
          {SEGMENTS.map((seg, i) => (
            <div
              key={i}
              className="special-card-resp"
              style={{
                ...styles.specialCard,
                background:
                  i === 0
                    ? "linear-gradient(180deg,#d8e8d8,#c5dcc5)"
                    : i === 1
                      ? "linear-gradient(180deg,#dce8e0,#caddce)"
                      : "linear-gradient(180deg,#d5e5d5,#bfd4bf)",
                transform:
                  hoverCard === i ? "translateY(-6px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoverCard(i)}
              onMouseLeave={() => setHoverCard(null)}
            >
              <img src={seg.src} alt={seg.alt} style={styles.specialCardImg} />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — MEAL SUBSCRIPTIONS
      ══════════════════════════════════════════════ */}
      <section style={styles.mealsSection}>
        <p style={styles.sectionLabel}>Meal subscriptions</p>

        <div className="meals-grid-resp" style={styles.mealsGrid}>
          {MEALS.map((meal, i) => (
            <div
              key={i}
              style={{
                ...styles.mealItem,
                transform:
                  hoverMeal === i ? "translateY(-4px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoverMeal(i)}
              onMouseLeave={() => setHoverMeal(null)}
            >
              <div className="meal-circle-resp" style={styles.mealCircle}>
                <img src={meal.src} alt={meal.name} style={styles.mealImg} />
              </div>
              <span style={styles.mealName}>{meal.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3.5 — CHECK OUT WHAT'S COOKING
      ══════════════════════════════════════════════ */}
      <section style={styles.cookingSection}>
        <div style={styles.cookingOverlay}></div>
        <h2 style={styles.cookingTitle}>Check out What's Cooking?</h2>

        <div className="cooking-grid-resp" style={styles.cookingGrid}>
          {REGIONS.map((reg, i) => (
            <div
              key={i}
              style={{
                ...styles.regionalCard,
                transform: hoverRegion === i ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHoverRegion(i)}
              onMouseLeave={() => setHoverRegion(null)}
              onClick={() => navigate(reg.path)}
              aria-label={`Go to ${reg.label} page`}
            >
              <img src={reg.img} alt={reg.label} style={styles.regionalImg} />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — REVIEWS
      ══════════════════════════════════════════════ */}
      <section style={styles.reviewsSection}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <p style={{ ...styles.sectionLabel, marginBottom: 0 }}>REVIEWS</p>
        </div>

        <div style={styles.reviewsOuter}>
          <div
            style={{
              ...styles.reviewsTrack,
              transform: `translateX(-${currentReview * 344}px)`, // 320 card + 24 gap
            }}
          >
            {/* Doubling testimonials for a smoother loop feel if needed, but keeping it simple for now */}
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.reviewCard,
                  ...(idx === currentReview ? styles.reviewCardActive : {}),
                }}
              >
                <div style={styles.reviewAvatarWrap}>
                  <img src={t.img} alt={t.name} style={styles.reviewAvatar} />
                </div>
                <span style={styles.reviewName}>{t.name}</span>
                <span style={styles.reviewRole}>{t.role}</span>
                <p style={styles.reviewText}>"{t.text}"</p>
                <div style={styles.starsWrap}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ ...styles.dotsWrap, marginTop: "10px" }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentReview(i)}
              style={{
                ...styles.dot,
                width: "8px",
                height: "8px",
                background: i === currentReview ? "#3d8c3d" : "#ddd",
                border: "none",
                cursor: "pointer",
              }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 5 — STATS
      ══════════════════════════════════════════════ */}
      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>
          {STATS.map((s, i) => (
            <div key={i} style={styles.statCard}>
              <span style={styles.statValue}>{s.value}</span>
              <span style={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 6 — LIVE KANKAVLI
      ══════════════════════════════════════════════ */}
      <section style={styles.liveSection}>
        <img src={liveKankavli} alt="Live Kankavli" style={styles.liveImg} />
        <div style={styles.puneMasker}></div>
        <div style={styles.kankavliOverlay}></div>
      </section>
    </div>
  );
};

export default Services;
