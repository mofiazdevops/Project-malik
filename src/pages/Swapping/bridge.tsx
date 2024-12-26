import React from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { makeStyles } from "@material-ui/core";
import styled from "@emotion/styled";

const useStyles = makeStyles((theme) => ({
  //   container: {
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     minHeight: "100vh",
  //     // backgroundColor: "#000d17",
  //     padding: "16px",
  //   },
  card: {
    fontFamily: "SF Pro Display",
    width: "100%",
    maxWidth: "400px",
    padding: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    [theme.breakpoints.down("sm")]: {
      padding: "16px",
    },
  },
  section: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
    border: "2px solid white",
    width: "100%", // Takes full width of its parent
    maxWidth: "600px",
    height: "50px",
    color: "#FFFFFF",
    padding: "12px 10px",
    borderRadius: "10px",
  },
  swapButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // margin: "16px 0",
    border: "1px solid white",
    width: "26px",
    height: "26px",
    margin: "16px auto",
    borderRadius: "6px",
  },
  select: {
    backgroundColor: "#0A1725",
    color: "#FFFFFF",
    borderRadius: "12px",
    width: "50%",
    minWidth: "50px", // Ensures the select doesn't get too small
    maxWidth: "150px", // Sets a maximum width for larger screens
    height: "35px",
    // padding: "8px 12px", // Adds consistent internal spacing
    boxSizing: "border-box",
    "& .MuiSelect-select": {
      color: "#FFFFFF", // Color for the selected/default value
    },
  },
  button: {
    backgroundColor: "#2979FF",
    color: "#FFFFFF",
    borderRadius: "18px",
    textTransform: "none",
    padding: "12px",
    maxWidth: "349px",
    width: "100px",
    height: "52px",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: 600,
    fontFamily: "SF Pro Display",
    marginBottom: "32px",
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  balanceText: {
    color: "#FFFFFF",
    // marginLeft: "5px",
  },
  balanceText2: {
    fontSize: "12px",
    paddingTop: "14px",
    fontWeight: 400,
    fontFamily: "SF Pro Display",
    color: "#FFFFFF",
    textAlign: "right",
  },
}));

const PrimaryButton = styled.button`
  font-size: 16px;
  line-height: 1.5rem;
  font-weight: 400;
  font-family: "SF Pro Display";
  border-radius: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 14px;
  padding-right: 14px;
  display: block;
  width: 100%;
  max-width: 349px; /* Corrected property name */
  height: 45px; /* Corrected property name */
  color: #ffffff; /* Text color */
  background-color: #0c71bc;
  cursor: pointer;
  outline: none;
  border: none;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.01em;
  padding-bottom: 12px;
  color: #0a0b0d;
`;

export const Bridge = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      <Box className={classes.card}>
        <Title
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "SF Pro Display",
            fontWeight: 600,
            background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Bridge
        </Title>

        <Box>
          <Typography
            variant="body1"
            className={classes.balanceText}
            style={{ marginBottom: "8px" }}
          >
            Transfer from
          </Typography>
          <Box className={classes.section}>
            <Select
              fullWidth
              defaultValue="Ethereum"
              className={classes.select}
              sx={{
                "& .MuiSelect-icon": {
                  color: "white", // Apply white color to the arrow icon
                },
                "& .MuiOutlinedInput-input": {
                  fontSize: "12px", // Font size for the input text (selected value)
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove the border
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove border on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove border when focused
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "#333", // Background color for the dropdown
                    "& .MuiMenuItem-root": {
                      color: "white", // Text color for the dropdown items
                      fontSize: "12px",
                    },
                    "& .MuiMenuItem-root:hover": {
                      bgcolor: "gray", // Optional: Hover background color for dropdown items
                    },
                  },
                },
              }}
            >
              <MenuItem value="Ethereum">Ethereum</MenuItem>
              <MenuItem value="Binance Smart Chain">
                Binance Smart Chain
              </MenuItem>
              <MenuItem value="Avalanche">Avalanche</MenuItem>
            </Select>
            <p className={classes.balanceText2}>
              Balance:
              <br /> 0
            </p>
          </Box>
        </Box>

        <Box className={classes.swapButton}>
          <SwapHorizIcon
            style={{ color: "#FFFFFF", fontSize: isMobile ? "18px" : "24px" }}
          />
        </Box>

        <Box>
          <Typography
            variant="body1"
            className={classes.balanceText}
            style={{ marginBottom: "8px" }}
          >
            Transfer to
          </Typography>
          <Box className={classes.section}>
            <Select
              fullWidth
              defaultValue="IDEA Network"
              className={classes.select}
              sx={{
                "& .MuiSelect-icon": {
                  color: "white", // Apply white color to the arrow icon
                },
                "& .MuiOutlinedInput-input": {
                  fontSize: "12px", // Font size for the input text (selected value)
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove the border
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove border on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove border when focused
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "#333", // Background color for the dropdown
                    "& .MuiMenuItem-root": {
                      color: "white", // Text color for the dropdown items
                      fontSize: "12px",
                    },
                    "& .MuiMenuItem-root:hover": {
                      bgcolor: "gray", // Optional: Hover background color for dropdown items
                    },
                  },
                },
              }}
            >
              <MenuItem value="IDEA Network">IDEA Network</MenuItem>
              <MenuItem value="Solana">Solana</MenuItem>
              <MenuItem value="Fantom">Fantom</MenuItem>
            </Select>
            <p className={classes.balanceText2}>
              Balance:
              <br /> 0
            </p>
          </Box>
        </Box>

        <PrimaryButton>Connect Bridge</PrimaryButton>
      </Box>
    </Box>
  );
};
