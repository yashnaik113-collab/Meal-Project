// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../components/logo.png";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const linkStyle = {
//     textDecoration: "none",
//     color: "black",
//     fontWeight: "bold",
//     transition: "color 0.3s ease",
//   };

//   const handleMouseOver = (e) => (e.target.style.color = "orange");
//   const handleMouseOut = (e) => (e.target.style.color = "black");

//   return (
//     <header
//       style={{
//         position: "sticky",
//         top: 0,
//         zIndex: 1000,
//         backgroundColor: "white",
//         boxShadow: isScrolled
//           ? "0px 3px 8px rgba(0,0,0,0.15)"
//           : "0px 2px 4px rgba(0,0,0,0.1)",
//         transition: "all 0.4s ease",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           padding: "0 20px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           transition: "all 0.4s ease",
//           height: isScrolled ? "60px" : "90px",
//           overflow: "hidden",
//         }}
//       >
//         {/* ✅ Logo */}
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <img
//             src={logo}
//             alt="MealsOnTheWay Logo"
//             style={{
//               height: isScrolled ? "140px" : "170px",
//               width: "auto",
//               cursor: "pointer",
//               transition: "all 0.4s ease",
//             }}
//           />
//         </Link>

//         {/* ✅ Navigation */}
//         <nav style={{ whiteSpace: "nowrap" }}>
//           <ul
//             style={{
//               display: "flex",
//               listStyle: "none",
//               gap: "25px",
//               margin: 0,
//               padding: 0,
//             }}
//           >
//             {[
//               { name: "About Us", path: "/about" },
//               { name: "Services", path: "/services" },
//               { name: "For Corporates", path: "/corporates" },
//               { name: "Join Us", path: "/joinus" },
//               { name: "Contact Us", path: "/contact" },
//             ].map((item) => (
//               <li key={item.path}>
//                 <Link
//                   to={item.path}
//                   style={linkStyle}
//                   onMouseOver={handleMouseOver}
//                   onMouseOut={handleMouseOut}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../components/logo.png";
import tiffinBg from "../components/tiffin-bg.jpg";

const Navbar = () => {
  const location = useLocation(); // Get current location
  // Fixed sizes (removed scroll-based resizing to avoid disappearing navbar)
  const navHeight = 140; // px
  const logoHeight = 95; // px

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
        height: navHeight,
        backgroundImage: `url(${tiffinBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "height 0.3s ease, box-shadow 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            width: "100%",
            transition: "gap 0.25s ease",
          }}
        >
          <Link to="/" style={{ display: "block", flexShrink: 0 }}>
            <img
              src={logo}
              alt="MealsOnTheWay Logo"
              style={{
                height: logoHeight,
                width: "auto",
                objectFit: "contain",
                display: "block",
                transition: "height 0.3s ease, transform 0.3s ease",
              }}
            />
          </Link>

          <nav>
            <ul
              style={{
                display: "flex",
                gap: 24,
                listStyle: "none",
                margin: 0,
                padding: 8,
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
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
                        color: isActive ? "#ff6a00" : "#1a1a1a",
                        fontWeight: 700,
                        fontSize: 14,
                        transition:
                          "color 0.2s ease, transform 0.12s ease, font-size 0.3s ease",
                        display: "inline-block",
                        padding: "8px 4px",
                      }}
                      onMouseOver={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = "#ff6a00";
                        }
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseOut={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = "#1a1a1a";
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
