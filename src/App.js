// import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import { Box } from "@mui/material";
// import Login from "./components/login";
// import Signup from "./components/Signup";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Joinus from "./components/Joinus";
// import AboutUs from "./components/Aboutus";
// import Services from "./components/Services";

// const App = () => {
//   return (
//     <Router>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           minHeight: "100vh",
//         }}
//       >
//         <Navbar />

//         <Box sx={{ flex: 1 }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/joinus" element={<Joinus />} />
//             {/* ✅ changed path */}
//             <Route path="/about" element={<AboutUs />} />
//             <Route path="/services" element={<Services />} />
//             {/* ✅ keep lowercase */}
//           </Routes>
//         </Box>

//         <Footer />
//       </Box>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Box } from "@mui/material";
import Login from "./components/login";
import Signup from "./components/Signup";
import Joinus from "./components/Joinus";
import AboutUs from "./components/Aboutus";
import Services from "./components/Services";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Language pages
import PunjabiPage from "./components/PunjabiPage";
import GujaratiPage from "./components/GujaratiPage";
import SouthPage from "./components/SouthPage";
import KashmiriPage from "./components/KashmiriPage";
import MaharashtrianPage from "./components/MaharashtrianPage";
import BihariPage from "./components/BihariPage";
import NorthPage from "./components/NorthPage";
import BengaliPage from "./components/BengaliPage";
import RajasthaniPage from "./components/RajasthaniPage";

const App = () => {
  return (
    <Router>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />

        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/joinus" element={<Joinus />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />

            {/* Language-specific routes */}
            <Route path="/Punjabi" element={<PunjabiPage />} />
            <Route path="/gujarati" element={<GujaratiPage />} />
            <Route path="/south" element={<SouthPage />} />
            <Route path="/kashmiri" element={<KashmiriPage />} />
            <Route path="/maharashtrian" element={<MaharashtrianPage />} />
            <Route path="/bihari" element={<BihariPage />} />
            <Route path="/north" element={<NorthPage />} />
            <Route path="/bengali" element={<BengaliPage />} />
            <Route path="/rajasthani" element={<RajasthaniPage />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
};

export default App;
