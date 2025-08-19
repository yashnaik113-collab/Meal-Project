import React from "react";
import Homebg from "../components/homebg.jpg"; // adjust path if needed

const Home = () => {
  return (
    <div
      style={{
        flex: 1,
        backgroundImage: `url(${Homebg})`, // 👈 background
        backgroundSize: "cover", // make sure it covers full screen
        backgroundPosition: "center", // center the image
        backgroundRepeat: "no-repeat", // avoid tiling
        height: "100vh", // full screen height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // center vertically
        alignItems: "center", // center horizontally
        color: "white", // text color (change if needed)
        textAlign: "center",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          justifyContent: "flex-end", // moves text to the right side
          alignItems: "center", // keeps it vertically centered
          textAlign: "center",
          color: "white",
        }}
      >
        <h1>Ghar Jaisa Khana...</h1>
        <h3>Where Every Bite...</h3>
        <p>feels like Home</p>
        <p>is made with Mother's Love</p>
        <p>brings back memories</p>
      </div>
    </div>
  );
};

export default Home;
