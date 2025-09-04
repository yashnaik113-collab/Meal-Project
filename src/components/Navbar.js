import React from "react";
import logo from "../components/logo.png";
import heroImage from "../components/tiffin-bg.jpg";

const Navbar = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px 0", // Reduced height

        width: "100%",
        boxShadow: "0px 3px 4px rgba(0,0,0,0.1)", // light shadow under navbar
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "white",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px", // Fixed height so menu items don't move
        }}
      >
        <img
          src={logo}
          alt="MealsOnTheWay Logo"
          style={{
            height: "250px", // Change this to adjust logo size
            width: "auto",
          }}
        />
      </div>

      {/* Navigation Links */}
      <nav style={{ marginTop: "5px" }}>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "30px",
            padding: 0,
            margin: 0,
          }}
        >
          {[
            { label: "About Us", href: "/About" },
            { label: "Services", href: "/services" },
            { label: "For Corporates", href: "/corporates" },
            { label: "Join Us", href: "/Joinus" },
            { label: "Contact Us", href: "/contact" },
          ].map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "orange")}
                onMouseOut={(e) => (e.target.style.color = "black")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
