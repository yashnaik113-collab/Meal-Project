import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import ProfileDropdown from './ProfileDropdown';

// Simple SVG Icons to match screenshot
const MealPlanIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const OnDemandIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
        <path d="M10 19v-3.5a1.5 1.5 0 0 1 3 0V19" />
        <circle cx="17" cy="19" r="2" />
        <path d="M19 19h2" />
    </svg>
);

const NavmoolIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
    </svg>
);

const BulkIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
    </svg>
);

const UserIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const ServiceNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { totalItems } = useCart();
    const [dropOpen, setDropOpen] = useState(false);
    const dropRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handle = (e) => {
            if (dropRef.current && !dropRef.current.contains(e.target)) {
                setDropOpen(false);
            }
        };
        document.addEventListener('mousedown', handle);
        return () => document.removeEventListener('mousedown', handle);
    }, []);

    const navItems = [
        { 
            name: "Meal Plan", 
            path: "/services", 
            icon: <MealPlanIcon />, 
            active: location.pathname === "/services" || [
                "/special-thali", "/deluxe-thali", "/classic-thali", "/comfort-thali", 
                "/standard-thali", "/jain-thali", "/rice-combo", "/healthy", 
                "/breakfast", "/low-calorie-meals", "/protein-meal", "/salads",
                "/students", "/elderly", "/corporate"
            ].includes(location.pathname)
        },
        { 
            name: "On Demand", 
            path: "/on-demand", 
            icon: <OnDemandIcon />,
            active: location.pathname === "/on-demand"
        },
        { name: "Navmool", path: "/navmool", icon: <NavmoolIcon />, active: location.pathname === "/navmool" },
        { name: "Bulk", path: "/bulk", icon: <BulkIcon />, active: location.pathname === "/bulk" },
    ];

    return (
        <header style={styles.header}>
            <div style={styles.container}>
                {/* ── LEFT: Branded Name ── */}
                <div style={styles.leftSection}>
                    <Link to="/" style={styles.logoLink}>
                        <span style={styles.logoSpan}>
                            MealsOnTheWay
                            <sup style={styles.sup}>®</sup>
                        </span>
                    </Link>
                </div>

                {/* ── CENTER: Nav Menu ── */}
                <nav style={styles.nav}>
                    <ul style={styles.ul}>
                        {navItems.map((item) => (
                            <li key={item.name} style={styles.li}>
                                <Link 
                                    to={item.path} 
                                    style={{
                                        ...styles.navLink,
                                        color: item.active ? '#28a745' : '#2c1a06'
                                    }}
                                >
                                    <span style={{...styles.iconSpan, color: item.active ? '#28a745' : '#777'}}>{item.icon}</span>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* ── RIGHT: Cart & Profile ── */}
                <div style={styles.rightSection}>
                    <Link 
                        to="/cart" 
                        style={{
                            ...styles.cartButton,
                            backgroundColor: totalItems > 0 ? '#ff6d00' : '#777'
                        }}
                    >
                        <span style={{ fontSize: '15px', marginRight: '6px' }}>🛒</span>
                        <span>Cart</span>
                        {totalItems > 0 && (
                            <span style={styles.cartBadge}>{totalItems}</span>
                        )}
                    </Link>

                    {/* Profile with Dropdown */}
                    <div ref={dropRef} style={{ position: 'relative' }}>
                        <button
                            onClick={() => setDropOpen(prev => !prev)}
                            title="My Profile"
                            style={{
                                ...styles.profileCircle,
                                border: dropOpen ? '2px solid #b35a00' : '2px solid transparent',
                                backgroundColor: dropOpen ? '#ffe0b2' : '#001a1a',
                                cursor: 'pointer',
                                outline: 'none',
                            }}
                        >
                            <UserIcon />
                        </button>

                        {dropOpen && <ProfileDropdown onClose={() => setDropOpen(false)} />}
                    </div>
                </div>
            </div>
        </header>
    );
};

const styles = {
    header: {
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        width: '100%',
        height: '80px',
        backgroundColor: '#fafaf7',
        borderBottom: '1.5px solid #e0dbc8',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.32)',
        display: 'flex',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center',
        height: '100%',
    },
    leftSection: {
        display: 'flex',
        alignItems: 'center',
    },
    logoLink: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
    },
    logoSpan: {
        fontSize: "25px",
        fontWeight: "900",
        color: "#9a7f05fc",
        letterSpacing: "-0.2px",
        textTransform: "uppercase",
        fontFamily: "Georgia, 'Times New Roman', serif",
        userSelect: "none",
        display: 'flex',
        alignItems: 'baseline',
    },
    sup: {
        fontSize: "9px",
        fontWeight: "900",
        color: "#2c1a06",
        verticalAlign: "super",
        marginLeft: "1px",
    },
    nav: {
        display: 'flex',
        justifyContent: 'center', // Center navigation menu
    },
    ul: {
        display: 'flex',
        gap: '36px',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    li: {
        display: 'flex',
        alignItems: 'center',
    },
    navLink: {
        textDecoration: 'none',
        fontSize: '13px',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'color 0.2s',
        textTransform: 'uppercase',
    },
    iconSpan: {
        display: 'flex',
        alignItems: 'center',
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '30px', // Increased gap between Cart and Profile icon
    },
    profileCircle: {
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        backgroundColor: '#001a1a',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
    },
    cartButton: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#777',
        color: '#fff',
        padding: '8px 16px', // Reduced padding to make button slightly smaller
        borderRadius: '6px',
        textDecoration: 'none',
        fontWeight: '700',
        fontSize: '12px', // Slightly smaller font
        position: 'relative',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        transition: 'background-color 0.2s',
    },
    cartBadge: {
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        backgroundColor: '#e53935',
        color: '#fff',
        borderRadius: '50%',
        width: '18px',
        height: '18px',
        fontSize: '9px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid white',
        fontWeight: '900',
    }
};

export default ServiceNavbar;
