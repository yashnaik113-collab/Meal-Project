import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import corporateBg from "../components/corporatebg.jpg";
import corporateCook from "../components/corporatecook.png";
import employeeGet1 from "../components/employeeget1.jpg";
import employeeGet2 from "../components/employeeget2.jpg";
import employeeGet3 from "../components/employeeget3.jpg";
import employeeBg from "../components/employeebg.jpg";
import dailyMealPlans from "../components/dailymealplans.jpg";
import instantFood from "../components/instantfood.jpg";

const ForCorporates = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${corporateBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          pt: { xs: 8, md: 12 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: 4, md: 8 },
            }}
          >
            {/* Left Side - Text Content */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 2,
              }}
            >
              {/* Label */}
              <Typography
                sx={{
                  color: "lemonchiffon",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Corporate Meal Solutions
              </Typography>

              {/* Main Heading */}
              <Typography
                variant="h2"
                sx={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: { xs: "2rem", md: "3rem" },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                You are What Your Employee Eat!
              </Typography>

              {/* Subtext */}
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  fontWeight: 500,
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                Bulk Orders | Corporate Get Together | Celebrations | Events
              </Typography>

              {/* Button */}
              <Box>
                <Button
                  sx={{
                    backgroundColor: "#ffffff",
                    color: "#4CAF50",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    px: 4,
                    py: 1.5,
                    borderRadius: 50,
                    textTransform: "capitalize",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  I'm Interested
                </Button>
              </Box>
            </Box>

            {/* Right Side - Corporate Cook Image */}
            <Box
              sx={{
                flex: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                alignItems: "flex-start",
                pt: 4,
              }}
            >
              <Box
                component="img"
                src={corporateCook}
                alt="Corporate Chef"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* What does Your Employee Get Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 0 },
          backgroundColor: "#f9f9f9",
        }}
      >
        <Container maxWidth="lg">
          {/* Section Title */}
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              color: "#20B2AA",
              fontWeight: "bold",
              mb: 6,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            What does Your Employee Get?
          </Typography>

          {/* Cards Grid */}
          <Grid container spacing={{ xs: 3, md: 10 }}>
            {/* Card 1 - Authentic Homemade Food */}
            <Grid item xs={4} sm={4} md={4}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 4px 12px rgba(31, 27, 27, 0.1)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={employeeGet1}
                  alt="Authentic Homemade Food"
                  sx={{
                    height: 180,
                    objectFit: "cover",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.75,
                    py: 1.5,
                    px: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#f44336",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Authentic Homemade Food
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#666666", lineHeight: 1.6 }}
                  >
                    We serve 100% Homemade meals. We <br />
                    have 9 different regional cuisines <br />
                    and related home kitchens. You can <br />
                    get food starting from standard <br />
                    meals to pizza and what not!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 2 - Exclusive Discounts */}
            <Grid item xs={4} sm={4} md={4}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={employeeGet2}
                  alt="Exclusive Discounts"
                  sx={{
                    height: 180,
                    objectFit: "cover",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.75,
                    py: 1.5,
                    px: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#f44336",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Exclusive Discounts
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#666666", lineHeight: 1.6 }}
                  >
                    We can curate exclusive offers for <br />
                    organisation which in turn can add <br />
                    a lot of value to your employees. <br />
                    Your employee can not only order <br />
                    from company but also from their <br />
                    respective homes.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 3 - Mealwe Trendy Application */}
            <Grid item xs={4} sm={4} md={4}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={employeeGet3}
                  alt="Mealwe Trendy Application"
                  sx={{
                    height: 180,
                    objectFit: "cover",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.75,
                    py: 1.5,
                    px: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#f44336",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Host Indian Food
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#666666", lineHeight: 1.6 }}
                  >
                    We have authentic kitchens from our <br />
                    different regions of India. We can do <br />
                    help you arrange regional food festival
                    <br />
                    (From Northern to Southern & Eastern
                    <br /> to Western part of India) in your
                    <br />
                    organisation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* What We Can Offer You Section */}
      <Box
        sx={{
          backgroundImage: `url(${employeeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          py: { xs: 6, md: 10 },
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          {/* Section Title */}
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              color: "#ffffff",
              fontWeight: "bold",
              mb: 6,
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            What We can Offer You?
          </Typography>

          {/* Section 1 - Daily Weekly Monthly Meal Plans */}
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
            sx={{ mb: 8 }}
          >
            {/* Image - Left */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                order: { xs: -1, md: 1 },
              }}
            >
              <Box
                component="img"
                src={dailyMealPlans}
                alt="Daily Weekly Monthly Meal Plans"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: 3,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                }}
              />
            </Grid>

            {/* Text - Right */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#FFA500",
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Daily, Weekly, Monthly Meal Plans
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                You can gift your employee with an amazing option to
                <br />
                order homemade food from the nearby kitchen.
                <br />
                We have daily, weekly & monthly subscription plans.
              </Typography>
            </Grid>
          </Grid>

          {/* Section 2 - Instant Food Orders */}
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* Text - Left */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: { xs: "center", md: "left" },
                order: { xs: -1, md: 1 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#FFA500",
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Instant Food Orders
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                Be spontaneous and surprise your employees with food
                <br />
                items such as cakes, sweets, snacks, etc. during <br />
                celebrations, special occasions, etc.
              </Typography>
            </Grid>

            {/* Image - Right */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={instantFood}
                alt="Instant Food Orders"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: 3,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ForCorporates;
