import React from "react";
import wait from "../../assets/svgs/wait.svg";
import { Box, Container, Grid, Typography } from "@mui/material";

const CommingSoon2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "#f8f9fa",
        textAlign: { xs: "center", lg: "left" },
        p: 2,
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Text Section */}
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h3"
              color="primary"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Coming Soon!
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              IdeaWallet is on its way! Our passionate team is working
              diligently to craft an innovative platform designed to empower
              your ideas. We are focused on perfecting every aspect to deliver a
              smooth and inspiring experience. Stay connected as we prepare for
              the big launch your gateway to transforming ideas into reality is
              coming soon!
            </Typography>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "400px",
                margin: "0 auto",
                animation: "float 3s ease-in-out infinite",
              }}
            >
              <img
                src={wait}
                alt="wait"
                style={{ width: "100%", display: "block" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CommingSoon2;
