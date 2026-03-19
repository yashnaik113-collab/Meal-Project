// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../components/logo.png";
// import tiffinBg from "../components/tiffin-bg.jpg";

// const Navbar = () => {
//   const location = useLocation(); // Get current location
//   // Fixed sizes (removed scroll-based resizing to avoid disappearing navbar)
//   const navHeight = 140; // px
//   const logoHeight = 95; // px

//   const navItems = [
//     { name: "About Us", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "For Corporates", path: "/corporates" },
//     { name: "Join Us", path: "/joinus" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <header
//       style={{
//         position: "sticky",
//         top: 0,
//         zIndex: 1100,
//         width: "100%",
//         height: navHeight,
//         backgroundImage: `url(${tiffinBg})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "100% 100%",
//         backgroundPosition: "center",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//         transition: "height 0.3s ease, box-shadow 0.3s ease",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: 8,
//             width: "100%",
//             transition: "gap 0.25s ease",
//           }}
//         >
//           <Link to="/" style={{ display: "block", flexShrink: 0 }}>
//             <img
//               src={logo}
//               alt="MealsOnTheWay Logo"
//               style={{
//                 height: logoHeight,
//                 width: "auto",
//                 objectFit: "contain",
//                 display: "block",
//                 transition: "height 0.3s ease, transform 0.3s ease",
//               }}
//             />
//           </Link>

//           <nav>
//             <ul
//               style={{
//                 display: "flex",
//                 gap: 24,
//                 listStyle: "none",
//                 margin: 0,
//                 padding: 8,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexWrap: "wrap",
//               }}
//             >
//               {navItems.map((item) => {
//                 const isActive = location.pathname === item.path;
//                 return (
//                   <li key={item.path}>
//                     <Link
//                       to={item.path}
//                       style={{
//                         textDecoration: "none",
//                         color: isActive ? "#ff6a00" : "#1a1a1a",
//                         fontWeight: 700,
//                         fontSize: 14,
//                         transition:
//                           "color 0.2s ease, transform 0.12s ease, font-size 0.3s ease",
//                         display: "inline-block",
//                         padding: "8px 4px",
//                       }}
//                       onMouseOver={(e) => {
//                         if (!isActive) {
//                           e.currentTarget.style.color = "#ff6a00";
//                         }
//                         e.currentTarget.style.transform = "translateY(-2px)";
//                       }}
//                       onMouseOut={(e) => {
//                         if (!isActive) {
//                           e.currentTarget.style.color = "#1a1a1a";
//                         }
//                         e.currentTarget.style.transform = "translateY(0)";
//                       }}
//                     >
//                       {item.name}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "./CartContext";

const Navbar = () => {
  const location = useLocation();
  const { totalItems } = useCart();

  const navItems = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "For Corporates", path: "/corporates" },
    { name: "Join Us", path: "/joinus" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        width: "100%",
        height: "80px",
        backgroundColor: "#fafaf7",
        borderBottom: "1.5px solid #e0dbc8",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.32)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* ── LEFT: MealsOnTheWay brand name ── */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "25px",
              fontWeight: "900",
              color: "#9a7f05fc",
              letterSpacing: "-0.2px",
              textTransform: "uppercase",
              fontFamily: "Georgia, 'Times New Roman', serif",
              userSelect: "none",
            }}
          >
            MealsOnTheWay
            <sup
              style={{
                fontSize: "9px",
                fontWeight: "900",
                color: "#2c1a06",
                verticalAlign: "super",
                marginLeft: "1px",
              }}
            >
              ®
            </sup>
          </span>
        </Link>

        {/* ── CENTER: Nav Items ── */}
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "36px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{
                      textDecoration: "none",
                      color: isActive ? "#b35a00" : "#2c1a06",
                      fontWeight: "700",
                      fontSize: "13px",
                      letterSpacing: "0.09em",
                      textTransform: "uppercase",
                      display: "inline-block",
                      padding: "4px 0",
                      borderBottom: isActive
                        ? "2px solid #b35a00"
                        : "2px solid transparent",
                      transition:
                        "color 0.2s ease, border-color 0.2s ease, transform 0.12s ease",
                    }}
                    onMouseOver={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#b35a00";
                        e.currentTarget.style.borderColor = "#b35a00";
                      }
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseOut={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#2c1a06";
                        e.currentTarget.style.borderColor = "transparent";
                      }
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── RIGHT: Cart + Order Now ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Cart Icon with Badge */}
          <Link
            to="/cart"
            style={{
              textDecoration: "none",
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              backgroundColor: totalItems > 0 ? "#0d6efd" : "#f0f0f0",
              transition: "background-color 0.2s ease, transform 0.15s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
            title="View Cart"
          >
            <span style={{ fontSize: "18px" }}>🛒</span>
            {totalItems > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-4px",
                  right: "-4px",
                  backgroundColor: "#e53935",
                  color: "white",
                  borderRadius: "50%",
                  width: "18px",
                  height: "18px",
                  fontSize: "10px",
                  fontWeight: "900",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid white",
                }}
              >
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>

          <Link
            to="/login"
            style={{
              textDecoration: "none",
              backgroundColor: "#2c1a06",
              color: "#fafaf7",
              fontWeight: "700",
              fontSize: "12px",
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              padding: "10px 24px",
              borderRadius: "4px",
              display: "inline-block",
              transition: "background-color 0.2s ease, transform 0.15s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#b35a00";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#2c1a06";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Order Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
