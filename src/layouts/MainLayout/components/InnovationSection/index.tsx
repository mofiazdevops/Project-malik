import { Box, Button, Typography } from "@mui/material";

export const InnovationSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#081015",
        paddingTop: "10%",
        paddingBottom: "20px",
      }}
    >
      <Box
        sx={{
          fontFamily: "SF Pro Display",
          width: {
            xs: "100%", // 100% on extra-small devices
            sm: "90%", // 90% width on small devices
            md: "95%", // 75% width on medium devices
            lg: "100%", // 60% width on large devices
          },
          maxWidth: 1100, // Maximum width
          height: {
            xs: "auto",
            sm: "27rem",
            md: "25rem",
            lg: "400",
          },

          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: { sm: "center", md: "flex-start" },
        }}
      >
        <Box
          sx={{
            width: {
              // xs: 335,
              sm: 560,
            },
            mx: { xs: "2" },
            height: { sm: 120 },
            fontFamily: "SF Pro Display",
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "center",
              md: "flex-start",
            },
            pb: 4,
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontWeight: "semiBold",
              fontSize: {
                xs: 24,
                sm: 28,
                md: 38,
                lg: 48,
              },
              lineHeight: "60px",
              textAlign: {
                xs: "center",
                md: "left",
              },
              background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              px: { xs: 2, sm: 0 },
            }}
          >
            Where Innovation Meets
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontWeight: "semiBold",
              fontSize: {
                xs: 24,
                sm: 28,
                md: 38,
                lg: 48,
              },
              lineHeight: "60px",
              textAlign: {
                xs: "center",
                md: "left",
              },
              background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              px: { xs: 2, sm: 0 },
            }}
          >
            Seamless Integration
          </Typography>
          <Typography
            sx={{
              fontWeight: "regular",
              textAlign: {
                xs: "center",
                md: "left",
              },
              fontSize: {
                xs: 12,
                sm: 14,
                md: 16,
                lg: 20,
              },
              lineHeight: "35px",
              color: "#D3D3D6",
              px: { xs: 2, sm: 0 },
              wordBreak: "break-word",
              pt: 2,
              pb: 4,
            }}
          >
            Discover the future with IdeaScan, your gateway to real-time
            insights & seamless navigation on the Idea Network. Manage your
            crypto effortlessly with IdeaWallet, the secure mobile app for
            multi-chain transactions.
            <br /> Experience the thrill of Zwae Exchange, where cross-chain
            trading meets unparalleled liquidity. Elevate your DeFi journey
            today!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "column",
            },
            // pt: 4,
            mt: { sm: 8, md: 0 },
            alignItems: "center",
            fontFamily: "SF Pro Display",
            // lg: { pt: 3 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: { xs: 2, lg: 5 },
              mr: { sm: 5, md: 0 },
            }}
          >
            <Typography
              sx={{
                fontWeight: "regular",
                fontSize: {
                  xs: 32,
                  sm: 30,
                  md: 54,
                  lg: 64,
                },
                lineHeight: "60px",
                background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              200+
            </Typography>
            <Typography
              sx={{
                fontWeight: "regular",
                fontSize: {
                  xs: 12,
                  sm: 14,
                  md: 20,
                  lg: 22,
                },
                // pb: { md: "10%" },
                lineHeight: "35px",
                color: "#D3D3D6",
              }}
            >
              Trading Pairs Available
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: { xs: 2, lg: 5 },
              mr: { sm: 5, md: 0 },
            }}
          >
            <Typography
              sx={{
                fontWeight: "regular",
                fontSize: {
                  xs: 32,
                  sm: 30,
                  md: 54,
                  lg: 64,
                },
                lineHeight: "60px",
                background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              150K+
            </Typography>
            <Typography
              sx={{
                fontWeight: "regular",
                fontSize: {
                  xs: 12,
                  sm: 14,
                  md: 20,
                  lg: 20,
                },
                lineHeight: "35px",
                color: "#D3D3D6",
                // pb: { md: "10%" },
              }}
            >
              Transactions Tracked Daily
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: { sm: 2, md: 0 },
            }}
          >
            <Typography
              sx={{
                fontWeight: "regular",
                fontSize: {
                  xs: 32,
                  sm: 30,
                  md: 54,
                  lg: 64,
                },
                lineHeight: "60px",
                color: "transparent",
                background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              30K+
            </Typography>
            <Typography
              sx={{
                fontWeight: "regular",
                fontSize: {
                  xs: 12,
                  sm: 14,
                  md: 20,
                  lg: 22,
                },
                lineHeight: "35px",
                color: "#D3D3D6",
              }}
            >
              Active Users
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
