// import React from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardActionArea,
//   CardMedia,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import bgImage from "../components/indiabg.jpg"; // 🔥 background image import

// const cuisines = [
//   { name: "Punjabi", img: "/images/punjabi.jpg", link: "/punjabi" },
//   { name: "Gujarati", img: "/images/gujarati.jpg", link: "/gujarati" },
//   { name: "South Indian", img: "/images/south.jpg", link: "/south" },
//   { name: "Kashmiri", img: "/images/kashmiri.jpg", link: "/kashmiri" },
//   {
//     name: "Maharashtrian",
//     img: "/images/maharashtrian.jpg",
//     link: "/maharashtrian",
//   },
//   { name: "Bihari", img: "/images/bihari.jpg", link: "/bihari" },
//   { name: "North-Eastern", img: "/images/north.jpg", link: "/north" },
//   { name: "Bengali", img: "/images/bengali.jpg", link: "/bengali" },
//   { name: "Rajasthani", img: "/images/rajasthani.jpg", link: "/rajasthani" },
// ];

// const Services = () => {
//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: "100vh",
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backdropFilter: "blur(5px)", // 🔥 blur effect
//           backgroundColor: "rgba(0,0,0,0.4)",
//         },
//       }}
//     >
//       <Box
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           p: 5,
//           textAlign: "center",
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{ fontWeight: "bold", color: "white", mb: 4 }}
//         >
//           Check out What's Cooking?
//         </Typography>

//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr" },
//             gap: 3,
//             justifyItems: "center",
//           }}
//         >
//           {cuisines.map((item) => (
//             <Card
//               key={item.name}
//               sx={{
//                 width: 310,
//                 borderRadius: 3,
//                 overflow: "hidden",
//                 boxShadow: "0 4px 12px rgba(3, 0, 0, 0.66)",
//               }}
//             >
//               <CardActionArea onClick={() => navigate(item.link)}>
//                 <CardMedia
//                   component="img"
//                   image={item.img}
//                   alt={item.name}
//                   sx={{ height: 150, objectFit: "cover" }}
//                 />
//               </CardActionArea>
//             </Card>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Services;

import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import bgImage from "../components/indiabg.jpg"; // background image

const cuisines = [
  { name: "Punjabi", img: "/images/punjabi.jpg", link: "/punjabi" },
  { name: "Gujarati", img: "/images/gujarati.jpg", link: "/gujarati" },
  { name: "South Indian", img: "/images/south.jpg", link: "/south" },
  { name: "Kashmiri", img: "/images/kashmiri.jpg", link: "/kashmiri" },
  {
    name: "Maharashtrian",
    img: "/images/maharashtrian.jpg",
    link: "/maharashtrian",
  },
  { name: "Bihari", img: "/images/bihari.jpg", link: "/bihari" },
  { name: "North-Eastern", img: "/images/north.jpg", link: "/north" },
  { name: "Bengali", img: "/images/bengali.jpg", link: "/bengali" },
  { name: "Rajasthani", img: "/images/rajasthani.jpg", link: "/rajasthani" },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0,0,0,0.4)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          p: 5,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "white", mb: 4 }}
        >
          Check Out What's Cooking?
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: 1.5, // gap कमी केले
            justifyItems: "center",
          }}
        >
          {cuisines.map((item) => (
            <Card
              key={item.name}
              sx={{
                width: 310,
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(3, 0, 0, 0.66)",
              }}
            >
              <CardActionArea onClick={() => navigate(item.link)}>
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.name}
                  sx={{ height: 150, objectFit: "cover" }}
                />
                <Box
                  sx={{
                    p: 1,
                    textAlign: "center",
                    backgroundColor: "rgba(4, 0, 0, 1)",
                  }}
                >
                  <Typography sx={{ color: "white", fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
