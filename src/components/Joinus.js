// // import React, { useState } from "react";
// // import {
// //   Box,
// //   TextField,
// //   Button,
// //   Typography,
// //   Paper,
// //   MenuItem,
// // } from "@mui/material";

// // const Joinus = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     phone: "",
// //     city: "",
// //     pincode: "",
// //     address: "",
// //     speciality: "",
// //     experience: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Registration Data:", formData);
// //     alert("Thank you for registering! We'll contact you soon.");
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: "100vh",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         backgroundColor: "#fff8f2",
// //         p: 2,
// //       }}
// //     >
// //       <Paper
// //         elevation={4}
// //         sx={{ p: 4, maxWidth: 500, width: "100%", borderRadius: 3 }}
// //       >
// //         <Typography variant="h5" fontWeight="bold" gutterBottom>
// //           Register as Home-Chef Today...
// //         </Typography>

// //         <form onSubmit={handleSubmit}>
// //           <TextField
// //             fullWidth
// //             label="Full Name"
// //             name="fullName"
// //             value={formData.fullName}
// //             onChange={handleChange}
// //             margin="normal"
// //             required
// //           />

// //           <TextField
// //             fullWidth
// //             label="Phone Number"
// //             name="phone"
// //             value={formData.phone}
// //             onChange={handleChange}
// //             margin="normal"
// //             required
// //           />

// //           {/* Email */}
// //           <TextField
// //             label="Email"
// //             type="email"
// //             variant="outlined"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //             required
// //           />

// //           {/* City Dropdown */}
// //           <TextField
// //             select
// //             label="Choose Your City"
// //             variant="outlined"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //             name="city"
// //             value={formData.city}
// //             onChange={handleChange}
// //             defaultValue=""
// //             required
// //           >
// //             <MenuItem value="" disabled>
// //               Select your city
// //             </MenuItem>
// //             <MenuItem value="Kankavli">Kankavli</MenuItem>
// //           </TextField>

// //           {/* Pincode */}
// //           <TextField
// //             fullWidth
// //             label="Pincode"
// //             name="pincode"
// //             value={formData.pincode}
// //             onChange={handleChange}
// //             margin="normal"
// //             required
// //           />

// //           <TextField
// //             fullWidth
// //             label="Address"
// //             name="address"
// //             value={formData.address}
// //             onChange={handleChange}
// //             margin="normal"
// //             multiline
// //             rows={2}
// //             required
// //           />

// //           <TextField
// //             fullWidth
// //             label="Speciality Dish"
// //             name="speciality"
// //             value={formData.speciality}
// //             onChange={handleChange}
// //             margin="normal"
// //             required
// //           />

// //           <TextField
// //             fullWidth
// //             label="Experience (in years)"
// //             name="experience"
// //             value={formData.experience}
// //             onChange={handleChange}
// //             margin="normal"
// //           />

// //           <Button
// //             type="submit"
// //             variant="contained"
// //             color="warning"
// //             sx={{ mt: 3, width: "100%" }}
// //           >
// //             Register
// //           </Button>
// //         </form>
// //       </Paper>
// //     </Box>
// //   );
// // };

// // export default Joinus; // ✅ name match App.js import

// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   MenuItem,
//   InputAdornment,
// } from "@mui/material";
// import joinus from "../components/joinus.jpg";
// import chopper from "../components/chopper.jpg";

// const Joinus = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     city: "",
//     pincode: "",
//     speciality: "",
//     experience: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   // ── VALIDATION RULES ──
//   const validateField = (name, value) => {
//     switch (name) {
//       case "fullName":
//         if (!value.trim()) return "Full name is required.";
//         if (value.trim().length < 3) return "Min 3 characters required.";
//         if (!/^[a-zA-Z\s]+$/.test(value)) return "Letters and spaces only.";
//         return "";

//       case "email":
//         if (!value.trim()) return "Email is required.";
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
//           return "Enter a valid email address.";
//         return "";

//       case "phone":
//         if (!value.trim()) return "Phone number is required.";
//         if (!/^\d+$/.test(value)) return "Digits only.";
//         if (value.length !== 10) return "Must be exactly 10 digits.";
//         if (!/^[6-9]/.test(value)) return "Must start with 6, 7, 8 or 9.";
//         return "";

//       case "city":
//         if (!value) return "Please select your city.";
//         return "";

//       case "pincode":
//         if (!value.trim()) return "Pincode is required.";
//         if (!/^\d+$/.test(value)) return "Digits only.";
//         if (value.length !== 6) return "Must be exactly 6 digits.";
//         return "";

//       case "speciality":
//         if (!value.trim()) return "Speciality dish is required.";
//         if (value.trim().length < 3) return "Enter a valid dish name.";
//         return "";

//       case "experience":
//         if (value === "") return "";
//         if (!/^\d+$/.test(value)) return "Must be a number.";
//         if (parseInt(value) > 50)
//           return "Enter a valid number of years (max 50).";
//         return "";

//       default:
//         return "";
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone" && !/^\d{0,10}$/.test(value)) return;
//     if (name === "pincode" && !/^\d{0,6}$/.test(value)) return;
//     if (name === "experience" && value !== "" && !/^\d{0,2}$/.test(value))
//       return;

//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (submitted) {
//       setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
//     }
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     if (value) {
//       setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     const allErrors = {};
//     Object.keys(formData).forEach((key) => {
//       allErrors[key] = validateField(key, formData[key]);
//     });
//     setErrors(allErrors);
//     const hasErrors = Object.values(allErrors).some((err) => err !== "");
//     if (!hasErrors) {
//       alert("Thank you for registering! We'll contact you soon. 🎉");
//     }
//   };

//   // Shared input style — cream/beige rounded fields matching screenshot
//   const inputSx = (name) => ({
//     mb: errors[name] ? 0.5 : 1.5,
//     "& .MuiOutlinedInput-root": {
//       borderRadius: "30px",
//       backgroundColor: "rgba(255,248,235,0.92)",
//       fontSize: "15px",
//       "& fieldset": {
//         borderColor: errors[name] ? "#d32f2f" : "transparent",
//         borderWidth: errors[name] ? "1.5px" : "1px",
//       },
//       "&:hover fieldset": {
//         borderColor: errors[name] ? "#d32f2f" : "rgba(180,120,60,0.4)",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: errors[name] ? "#d32f2f" : "#c47d2e",
//       },
//     },
//     "& input, & textarea": { color: "#3a2000" },
//     "& .MuiInputLabel-root": { display: "none" },
//   });

//   const errMsg = (name) =>
//     errors[name] ? (
//       <Typography
//         sx={{
//           fontSize: "11px",
//           color: "#c0392b",
//           mb: 1,
//           pl: 2,
//           fontWeight: 600,
//         }}
//       >
//         ⚠️ {errors[name]}
//       </Typography>
//     ) : null;

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         position: "relative",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         overflow: "hidden",
//         py: { xs: 4, md: 6 },
//         px: 2,
//       }}
//     >
//       {/* ── FULL SCREEN BACKGROUND ── */}
//       <Box
//         sx={{
//           position: "fixed",
//           inset: 0,
//           zIndex: 0,
//           backgroundImage: `url(${joinus})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           filter: "brightness(0.6)",
//         }}
//       />

//       {/* ── PAGE HEADER ── */}
//       <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", mb: 2 }}>
//         <Typography
//           sx={{
//             fontSize: { xs: "11px", md: "13px" },
//             fontWeight: 800,
//             color: "#f5c518",
//             letterSpacing: "0.2em",
//             textTransform: "uppercase",
//             mb: 0.5,
//           }}
//         >
//           Become a Home Chef
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: { xs: "2rem", md: "3rem" },
//             fontWeight: 900,
//             color: "#fff",
//             textShadow: "0 2px 12px rgba(0,0,0,0.5)",
//             fontFamily: "Georgia, serif",
//           }}
//         >
//           Join Us & Start Earning
//         </Typography>
//       </Box>

//       {/* ── CHOPPING BOARD FORM ── */}
//       <Box
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           width: { xs: "95%", sm: "75%", md: "58%", lg: "50%" },
//           maxWidth: 720,
//         }}
//       >
//         {/* Board image as background */}
//         <Box
//           sx={{
//             position: "relative",
//             borderRadius: "28px",
//             overflow: "hidden",
//             boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
//           }}
//         >
//           {/* Chopper board background */}
//           <Box
//             sx={{
//               position: "absolute",
//               inset: 0,
//               backgroundImage: `url(${chopper})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               zIndex: 0,
//             }}
//           />
//           {/* Warm overlay so fields are readable */}
//           <Box
//             sx={{
//               position: "absolute",
//               inset: 0,
//               backgroundColor: "rgba(227, 217, 207, 0.45)",
//               zIndex: 1,
//             }}
//           />

//           {/* ── FORM CONTENT ── */}
//           <Box
//             sx={{
//               position: "relative",
//               zIndex: 2,
//               px: { xs: 3, sm: 6, md: 8 },
//               py: { xs: 4, md: 5 },
//             }}
//           >
//             <form onSubmit={handleSubmit} noValidate>
//               {/* Full Name */}
//               <TextField
//                 fullWidth
//                 placeholder="Full Name"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 variant="outlined"
//                 sx={inputSx("fullName")}
//                 inputProps={{ style: { paddingLeft: "20px" } }}
//               />
//               {errMsg("fullName")}

//               {/* Email */}
//               <TextField
//                 fullWidth
//                 placeholder="Your Email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 variant="outlined"
//                 sx={inputSx("email")}
//                 inputProps={{ style: { paddingLeft: "20px" } }}
//               />
//               {errMsg("email")}

//               {/* Phone */}
//               <TextField
//                 fullWidth
//                 placeholder="Your Mobile No."
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 variant="outlined"
//                 inputProps={{
//                   maxLength: 10,
//                   inputMode: "numeric",
//                   style: { paddingLeft: "8px" },
//                 }}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Typography
//                         sx={{
//                           fontWeight: 700,
//                           color: "#7a4010",
//                           fontSize: "14px",
//                           pl: 1,
//                         }}
//                       >
//                         +91
//                       </Typography>
//                     </InputAdornment>
//                   ),
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <Typography
//                         sx={{
//                           fontSize: "11px",
//                           color:
//                             formData.phone.length === 10 ? "#2d8659" : "#aaa",
//                           pr: 1,
//                         }}
//                       >
//                         {formData.phone.length}/10
//                       </Typography>
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={inputSx("phone")}
//               />
//               {errMsg("phone")}

//               {/* City Dropdown */}
//               <TextField
//                 select
//                 fullWidth
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 variant="outlined"
//                 sx={{
//                   ...inputSx("city"),
//                   "& .MuiSelect-select": {
//                     paddingLeft: "20px",
//                     color: formData.city ? "#3a2000" : "#999",
//                   },
//                 }}
//                 SelectProps={{ displayEmpty: true }}
//                 inputProps={{ style: { paddingLeft: "20px" } }}
//               >
//                 <MenuItem value="" disabled sx={{ color: "#999" }}>
//                   -- Choose Your City --
//                 </MenuItem>
//                 <MenuItem value="Mumbai">Mumbai</MenuItem>
//                 <MenuItem value="Pune">Pune</MenuItem>
//                 <MenuItem value="Bangalore">Bangalore</MenuItem>
//                 <MenuItem value="Kolkata">Kolkata</MenuItem>
//                 <MenuItem value="Kota">Kota</MenuItem>
//                 <MenuItem value="Hyderabad">Hyderabad</MenuItem>
//                 <MenuItem value="Chennai">Chennai</MenuItem>
//                 <MenuItem value="Kankavli">Kankavli</MenuItem>
//               </TextField>
//               {errMsg("city")}

//               {/* Pincode */}
//               <TextField
//                 fullWidth
//                 placeholder="Pincode"
//                 name="pincode"
//                 value={formData.pincode}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 variant="outlined"
//                 inputProps={{
//                   maxLength: 6,
//                   inputMode: "numeric",
//                   style: { paddingLeft: "20px" },
//                 }}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <Typography
//                         sx={{
//                           fontSize: "11px",
//                           color:
//                             formData.pincode.length === 6 ? "#2d8659" : "#aaa",
//                           pr: 1,
//                         }}
//                       >
//                         {formData.pincode.length}/6
//                       </Typography>
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={inputSx("pincode")}
//               />
//               {errMsg("pincode")}

//               {/* Speciality Dish */}
//               <TextField
//                 fullWidth
//                 placeholder="Speciality Dish"
//                 name="speciality"
//                 value={formData.speciality}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 variant="outlined"
//                 sx={inputSx("speciality")}
//                 inputProps={{ style: { paddingLeft: "20px" } }}
//               />
//               {errMsg("speciality")}

//               {/* Experience */}
//               <TextField
//                 fullWidth
//                 placeholder="Experience in Years (optional)"
//                 name="experience"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 variant="outlined"
//                 inputProps={{
//                   maxLength: 2,
//                   inputMode: "numeric",
//                   style: { paddingLeft: "20px" },
//                 }}
//                 sx={inputSx("experience")}
//               />
//               {errMsg("experience")}

//               {/* Submit Button */}
//               <Box sx={{ mt: 1 }}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#2d8659",
//                     color: "white",
//                     fontWeight: 900,
//                     fontSize: "15px",
//                     px: 5,
//                     py: 1.4,
//                     borderRadius: "30px",
//                     letterSpacing: "0.12em",
//                     textTransform: "uppercase",
//                     boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
//                     "&:hover": { backgroundColor: "#1e6040" },
//                   }}
//                 >
//                   Submit
//                 </Button>
//               </Box>
//             </form>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Joinus;

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import joinus from "../components/joinus.jpg";
import chopper from "../components/chopper.jpg";

const Joinus = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    pincode: "",
    speciality: "",
    experience: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ── VALIDATION RULES ──
  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 3) return "Min 3 characters required.";
        if (!/^[a-zA-Z\s]+$/.test(value)) return "Letters and spaces only.";
        return "";

      case "email":
        if (!value.trim()) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Enter a valid email address.";
        return "";

      case "phone":
        if (!value.trim()) return "Phone number is required.";
        if (!/^\d+$/.test(value)) return "Digits only.";
        if (value.length !== 10) return "Must be exactly 10 digits.";
        if (!/^[6-9]/.test(value)) return "Must start with 6, 7, 8 or 9.";
        return "";

      case "city":
        if (!value) return "Please select your city.";
        return "";

      case "pincode":
        if (!value.trim()) return "Pincode is required.";
        if (!/^\d+$/.test(value)) return "Digits only.";
        if (value.length !== 6) return "Must be exactly 6 digits.";
        return "";

      case "speciality":
        if (!value.trim()) return "Speciality dish is required.";
        if (value.trim().length < 3) return "Enter a valid dish name.";
        return "";

      case "experience":
        if (value === "") return "";
        if (!/^\d+$/.test(value)) return "Must be a number.";
        if (parseInt(value) > 50)
          return "Enter a valid number of years (max 50).";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d{0,10}$/.test(value)) return;
    if (name === "pincode" && !/^\d{0,6}$/.test(value)) return;
    if (name === "experience" && value !== "" && !/^\d{0,2}$/.test(value))
      return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const allErrors = {};
    Object.keys(formData).forEach((key) => {
      allErrors[key] = validateField(key, formData[key]);
    });
    setErrors(allErrors);
    const hasErrors = Object.values(allErrors).some((err) => err !== "");
    if (!hasErrors) {
      alert("Thank you for registering! We'll contact you soon. 🎉");
    }
  };

  // Shared input style
  const inputSx = (name) => ({
    mb: errors[name] ? 0.75 : 1.5,
    "& .MuiOutlinedInput-root": {
      borderRadius: "30px",
      backgroundColor: "rgba(255,248,235,0.92)",
      fontSize: "13px",
      "& .MuiOutlinedInput-input": {
        padding: "10px 14px",
      },
      "& fieldset": {
        borderColor: errors[name] ? "#d32f2f" : "transparent",
        borderWidth: errors[name] ? "1.5px" : "1px",
      },
      "&:hover fieldset": {
        borderColor: errors[name] ? "#d32f2f" : "rgba(180,120,60,0.4)",
      },
      "&.Mui-focused fieldset": {
        borderColor: errors[name] ? "#d32f2f" : "#c47d2e",
      },
    },
    "& input, & textarea": { color: "#3a2000" },
    "& .MuiInputLabel-root": { display: "none" },
  });

  const errMsg = (name) =>
    errors[name] ? (
      <Typography
        sx={{
          fontSize: "11px",
          color: "#c0392b",
          mb: 1,
          pl: 2,
          fontWeight: 600,
        }}
      >
        ⚠️ {errors[name]}
      </Typography>
    ) : null;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        py: { xs: 4, md: 6 },
        px: 2,
      }}
    >
      {/* ── FULL SCREEN BACKGROUND ── */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${joinus})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.6)",
        }}
      />

      {/* ── PAGE HEADER ── */}
      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", mb: 2 }}>
        <Typography
          sx={{
            fontSize: { xs: "11px", md: "13px" },
            fontWeight: 800,
            color: "#f5c518",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            mb: 0.5,
          }}
        >
          Become a Home Chef
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 900,
            color: "#fff",
            textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            fontFamily: "Georgia, serif",
          }}
        >
          Join Us & Start Earning
        </Typography>
      </Box>

      {/* ── CHOPPING BOARD FORM ── */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: { xs: "98%", sm: "90%", md: "80%", lg: "70%" },
          maxWidth: 900,
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
          }}
        >
          {/* Chopper board background */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${chopper})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          />
          {/* Warm overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: "transparent",
              zIndex: 1,
            }}
          />

          {/* ── FORM CONTENT ── */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              px: { xs: 4, sm: 8, md: 18 },
              py: { xs: 8, md: 14 },
            }}
          >
            <form onSubmit={handleSubmit} noValidate style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px" }}>
              {/* Full Name */}
              <TextField
                fullWidth
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                sx={{ ...inputSx("fullName"), maxWidth: "420px" }}
                inputProps={{ style: { paddingLeft: "20px" } }}
              />
              {errMsg("fullName")}

              {/* Email */}
              <TextField
                fullWidth
                placeholder="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                sx={{ ...inputSx("email"), maxWidth: "420px" }}
                inputProps={{ style: { paddingLeft: "20px" } }}
              />
              {errMsg("email")}

              {/* Phone */}
              <TextField
                fullWidth
                placeholder="Your Mobile No."
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                sx={{ ...inputSx("phone"), maxWidth: "420px" }}
                inputProps={{
                  maxLength: 10,
                  inputMode: "numeric",
                  style: { paddingLeft: "8px" },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#7a4010",
                          fontSize: "14px",
                          pl: 1,
                        }}
                      >
                        +91
                      </Typography>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography
                        sx={{
                          fontSize: "11px",
                          color:
                            formData.phone.length === 10 ? "#2d8659" : "#aaa",
                          pr: 1,
                        }}
                      >
                        {formData.phone.length}/10
                      </Typography>
                    </InputAdornment>
                  ),
                }}
              />
              {errMsg("phone")}

              {/* City Dropdown */}
              <TextField
                select
                fullWidth
                name="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                sx={{
                  ...inputSx("city"),
                  maxWidth: "420px",
                  "& .MuiSelect-select": {
                    paddingLeft: "20px",
                    color: formData.city ? "#3a2000" : "#999",
                  },
                }}
                SelectProps={{ displayEmpty: true }}
                inputProps={{ style: { paddingLeft: "20px" } }}
              >
                <MenuItem value="" disabled sx={{ color: "#999" }}>
                  -- Choose Your City --
                </MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Pune">Pune</MenuItem>
                <MenuItem value="Bangalore">Bangalore</MenuItem>
                <MenuItem value="Kolkata">Kolkata</MenuItem>
                <MenuItem value="Kota">Kota</MenuItem>
                <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                <MenuItem value="Chennai">Chennai</MenuItem>
                <MenuItem value="Kankavli">Kankavli</MenuItem>
              </TextField>
              {errMsg("city")}

              {/* Pincode */}
              <TextField
                fullWidth
                placeholder="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                sx={{ ...inputSx("pincode"), maxWidth: "420px" }}
                inputProps={{
                  maxLength: 6,
                  inputMode: "numeric",
                  style: { paddingLeft: "20px" },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography
                        sx={{
                          fontSize: "11px",
                          color:
                            formData.pincode.length === 6 ? "#2d8659" : "#aaa",
                          pr: 1,
                        }}
                      >
                        {formData.pincode.length}/6
                      </Typography>
                    </InputAdornment>
                  ),
                }}
              />
              {errMsg("pincode")}

              {/* Speciality Dish */}
              <TextField
                fullWidth
                placeholder="Speciality Dish"
                name="speciality"
                value={formData.speciality}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                sx={{ ...inputSx("speciality"), maxWidth: "420px" }}
                inputProps={{ style: { paddingLeft: "20px" } }}
              />
              {errMsg("speciality")}

              {/* Experience */}
              <TextField
                fullWidth
                placeholder="Experience in Years (optional)"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                sx={{ ...inputSx("experience"), maxWidth: "420px" }}
                inputProps={{
                  maxLength: 2,
                  inputMode: "numeric",
                  style: { paddingLeft: "20px" },
                }}
              />
              {errMsg("experience")}

              {/* Submit Button */}
              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#2d8659",
                    color: "white",
                    fontWeight: 900,
                    fontSize: "15px",
                    px: 5,
                    py: 1.4,
                    borderRadius: "30px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
                    "&:hover": { backgroundColor: "#1e6040" },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>


    </Box>
  );
};

export default Joinus;
