import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgb(30, 144, 255)",
        color: "white",
        padding: "40px 20px 20px",
        fontFamily: "Arial, sans-serif",
        marginTop: "auto",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {/* Section 1 */}
        <div style={{ flex: "1 1 200px", margin: "10px 20px" }}>
          <h3 style={{ marginBottom: "10px", color: "#fff" }}>Mealsontheway</h3>
          <p>
            <em>"swaad ghar ka..."</em>
          </p>
          <p>Delicious homemade food from local home chefs.</p>
        </div>

        {/* Section 2 */}
        <div style={{ flex: "1 1 200px", margin: "10px 20px" }}>
          <h4 style={{ marginBottom: "10px", color: "#fff" }}>Company</h4>
          <a
            href="/about"
            style={{
              display: "block",
              color: "#f2f2f2",
              textDecoration: "none",
              margin: "5px 0",
              fontSize: "14px",
            }}
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
              e.target.style.color = "#f2f2f2";
            }}
          >
            About Us
          </a>
          <a
            href="/why-us"
            style={{
              display: "block",
              color: "#f2f2f2",
              textDecoration: "none",
              margin: "5px 0",
              fontSize: "14px",
            }}
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
              e.target.style.color = "#f2f2f2";
            }}
          >
            Why Us
          </a>
          <a
            href="/join"
            style={{
              display: "block",
              color: "#f2f2f2",
              textDecoration: "none",
              margin: "5px 0",
              fontSize: "14px",
            }}
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
              e.target.style.color = "#f2f2f2";
            }}
          >
            Join Us
          </a>
          <a
            href="/contact"
            style={{
              display: "block",
              color: "#f2f2f2",
              textDecoration: "none",
              margin: "5px 0",
              fontSize: "14px",
            }}
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
              e.target.style.color = "#f2f2f2";
            }}
          >
            Contact
          </a>
        </div>

        {/* Section 3 */}
        <div style={{ flex: "1 1 200px", margin: "10px 20px" }}>
          <h4 style={{ marginBottom: "10px", color: "#fff" }}>Information</h4>
          <a
            href="/privacy"
            style={{
              display: "block",
              color: "#f2f2f2",
              textDecoration: "none",
              margin: "5px 0",
              fontSize: "14px",
            }}
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
              e.target.style.color = "#f2f2f2";
            }}
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            style={{
              display: "block",
              color: "#f2f2f2",
              textDecoration: "none",
              margin: "5px 0",
              fontSize: "14px",
            }}
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
              e.target.style.color = "#f2f2f2";
            }}
          >
            Terms & Conditions
          </a>
          <a
            href="/refunds"
            style={{
              display: "block",
              color: "#f2f2f2",
              textDecoration: "none",
              margin: "5px 0",
              fontSize: "14px",
            }}
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
              e.target.style.color = "#f2f2f2";
            }}
          >
            Refund Policy
          </a>
        </div>

        {/* Section 4 */}
        <div style={{ flex: "1 1 200px", margin: "10px 20px" }}>
          <h4 style={{ marginBottom: "10px", color: "#fff" }}>Contact</h4>
          <p>📞 +91-9665 888 488</p>
          <p>📧 help@mealsontheway.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          borderTop: "1px solid #f0f0f0",
          textAlign: "center",
          paddingTop: "10px",
          fontSize: "14px",
          color: "#f0f0f0",
        }}
      >
        <p>© 2025 Mealsontheway. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
