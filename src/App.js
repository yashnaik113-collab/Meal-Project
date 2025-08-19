import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <div
          style={{
            // width: "200%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%", // 100% of viewport width
            height: "100vh",
            display: "flex",
            // alignItems: "center",
          }}
        >
          <Home />
        </div>

        <div></div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
