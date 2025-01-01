import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import identity from "../../../../assets/pngs/identity.png";
import contract from "../../../../assets/pngs/contract.png";
import token from "../../../../assets/pngs/token.png";
import star from "../../../../assets/pngs/staricon.png";

export const Features = () => {
  return (
    <div
      style={{
        backgroundColor: "#081015",
        paddingBottom: "20px",
        maxWidth: "1100px",
        display: "flex",
        margin: "auto",
      }}
    >
      {/* Main Section */}
      <Box
        pt={6}
        mx={{ xs: "auto", sm: "auto" }}
        textAlign={{ xs: "center", sm: "center" }}
        sx={{
          width: {
            xs: "86%", // 100% width on extra-small devices
            sm: "40%", // 90% width on small devices
            md: "95%", // 95% width on medium devices
            lg: "100%", // 100% width on large devices
          },
          maxWidth: 1100, // Maximum width for the Box
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent={{ xs: "left", md: "space-between" }}
          alignItems={{ xs: "left", md: "center" }}
          direction={{ xs: "column", md: "row" }}
        >
          {/* Decentralized Identity */}
          <Grid item xs={12} sm={4} textAlign={{ xs: "left", md: "left" }}>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={{ xs: "left", md: "flex-start" }}
              width={"252px"}
            >
              <img
                src={identity}
                alt="identity"
                style={{ width: 30, height: 30 }}
              />
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                pl={2}
                color="#FFFFFF"
                fontFamily="SF Pro Display"
                fontSize={{ xs: "12px", lg: "14px" }}
              >
                Decentralized Identity
              </Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant="body2"
                color="#D3D3D6"
                fontFamily="SF Pro Display"
                fontWeight="bold"
                lineHeight={1.5}
                fontSize={{ xs: "12px", lg: "14px" }}
              >
                Securely manage your digital identity across applications.
              </Typography>
            </Box>
          </Grid>

          {/* Smart Contract Automation */}
          <Grid item xs={12} sm={4} textAlign={{ xs: "left", md: "left" }}>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={{ xs: "left", md: "flex-start" }}
              width={"252px"}
            >
              <img
                src={contract}
                alt="contract"
                style={{ width: 30, height: 30 }}
              />
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                pl={2}
                color="#FFFFFF"
                fontFamily="SF Pro Display"
                fontSize={{ xs: "12px", lg: "14px" }}
              >
                Smart Contract Automation
              </Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant="body2"
                color="#D3D3D6"
                fontFamily="SF Pro Display"
                fontWeight="bold"
                lineHeight={1.5}
                fontSize={{ xs: "12px", lg: "14px" }}
              >
                Streamline operations with automated smart contracts.
              </Typography>
            </Box>
          </Grid>

          {/* Asset Tokenization */}
          <Grid item xs={12} sm={4} textAlign={{ xs: "left", md: "left" }}>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={{ xs: "left", md: "flex-start" }}
              width={"252px"}
            >
              <img src={token} alt="token" style={{ width: 30, height: 30 }} />
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                pl={2}
                color="#FFFFFF"
                fontFamily="SF Pro Display"
                fontSize={{ xs: "12px", lg: "14px" }}
              >
                Asset Tokenization
              </Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant="body2"
                color="#D3D3D6"
                fontFamily="SF Pro Display"
                fontWeight="bold"
                lineHeight={1.5}
                fontSize={{ xs: "12px", lg: "14px" }}
              >
                Digitally tokenize real-world assets for efficient management.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Display only on small and medium devices */}
      {/* <Box
        pt={6}
        display={{ xs: "block", sm: "block", md: "none" }}
        mx="auto"
        // textAlign={{ xs: "center", sm: "left" }}
        width={"252px"}
      >
        <Box
          display="flex"
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems="center"
        >
          <img src={token} alt="token" style={{ width: 30, height: 30 }} />
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            pl={2}
            color="#FFFFFF"
            fontFamily="SF Pro Display"
            fontSize={{ xs: "12px", lg: "14px" }}
          >
            Asset Tokenization
          </Typography>
        </Box>
        <Box pt={2}>
          <Typography
            variant="body2"
            color="#D3D3D6"
            fontFamily="SF Pro Display"
            fontWeight="bold"
            lineHeight={1.5}
            fontSize={{ xs: "12px", lg: "14px" }}
          >
            Digitally tokenize real-world assets for efficient management.
          </Typography>
        </Box>
      </Box> */}
    </div>
  );
};
