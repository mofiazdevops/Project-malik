import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import { useBlog } from "contexts/blogContext";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ClickableCard from "pages/IdeaNetwork/ClickableCard";
import { useHistory, useLocation } from "react-router-dom";
import { LinkedIn, Telegram } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Post {
  title: string;
  content?: string; // Assuming there might be content in the blog
  author?: string; // Optional author field
  date?: string; // Assuming a date field (ISO format or string)
}

const useStyles = makeStyles((theme) => ({
  left: {
    width: "457px",
    height: "342px",
    color: "#fff",
    padding: "20px",
    borderRadius: "12px",
    [theme.breakpoints.down("xs")]: {
      width: "400px",
    },
  },
  header: {
    height: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "radial-gradient(circle at bottom left, #3CADFF, #000000 50%)", // Dark gradient
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    marginTop: "20px",
  },
  icon: {
    fontSize: "20px",
    color: "#ffffff",
    transition: "color 0.3s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      color: "#007bff",
    },
  },
  right: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "500px",
    width: "100%",
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      height: "auto", // Allow height to adjust
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      height: "auto", // Allow height to adjust
    },
  },
  image: {
    width: "100%", // Make image responsive
    height: "auto", // Maintain aspect ratio
    objectFit: "contain", // Ensure the image scales properly without cropping
    borderRadius: "10px", // Optional: Rounded corners for styling

    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1166px",
    margin: "auto",
    width: "90%",
    paddingTop: "5%",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "15%",
      flexDirection: "column-reverse",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "24%",
      flexDirection: "column-reverse",
      justifyContent: "center",
    },
  },
  blogContainer: {
    maxWidth: "1166px",
    margin: "auto",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "30px",
  },
  cardBox: {
    width: "250px", // Fixed width for each card
    height: "400px", // Fixed height for each card
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000000",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  separator: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1166px",
    margin: "auto",
    width: "90%",
    // width: "100%",
    height: "2px", // Adjust thickness
    backgroundColor: "#333", // Adjust color
    // margin: "20px 0", // Adjust spacing
    border: "none",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.5)", // Adds slight shadow like in the image
  },
}));

const Blogs: React.FC<Post> = () => {
  const history = useHistory();
  const classes = useStyles();
  const {
    singlepopularPosts,
    pageData,
    fetchDataPagination,
    globalLoader,
    pageLoading,
  } = useBlog();

  if (globalLoader)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          marginTop: "15%",
        }}
      >
        <CircularProgress sx={{ color: "white" }} />
      </Box>
    );

  if (!pageData || !singlepopularPosts || pageData.length === 0)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <Typography
          sx={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
        >
          No data found.
        </Typography>
      </Box>
    );

  const dateString = singlepopularPosts?.date_created;
  const date = new Date(dateString);

  const formattedDate =
    `${date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })} ` +
    `${date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    })}`;

  const imageUrl = singlepopularPosts?.thumbnail?.startsWith("http")
    ? singlepopularPosts?.thumbnail
    : `http://localhost:4000/${singlepopularPosts?.thumbnail}`;

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.container}>
          <div className={classes.left}>
            <h1>{singlepopularPosts?.title}</h1>
            <div className={classes.socialIcons}>
              <a
                href="https://www.facebook.com/ideaologytech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className={classes.icon} />
              </a>
              <a
                href="https://x.com/ideaologyio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className={classes.icon} />
              </a>
              <a
                href="https://www.instagram.com/ideaologyio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={classes.icon} />
              </a>

              <a
                href="https://t.me/ideaologyio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Telegram className={classes.icon} />
              </a>

              <a
                href="https://www.linkedin.com/company/ideaology-io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn className={classes.icon} />
              </a>
            </div>
            <div style={{ marginTop: "2%" }}>
              <p style={{ color: "white", fontSize: "12px" }}>
                {formattedDate}
              </p>
            </div>
            <button
              onClick={() => history.push(`/${singlepopularPosts.url}`)}
              style={{
                display: "flex",
                alignItems: "center",
                background: "#000000",
                border: "none",
                cursor: "pointer",
                padding: "6px 10px",
                borderRadius: "16px",
              }}
            >
              {/* Gradient Text */}
              <Typography
                sx={{
                  background: "linear-gradient(45deg, #ffffff, #3CADFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "14px",
                  fontWeight: 600,
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    background: "linear-gradient(45deg,  #3CADFF,#ffffff,)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                }}
              >
                Read Blog
              </Typography>
              {/* External Link Icon */}
              <OpenInNewIcon
                sx={{
                  fontSize: "15px",
                  color: "#ffffff",
                  paddingLeft: "3px",
                }}
              />
            </button>
          </div>
          <div className={classes.right}>
            <img
              className={classes.image}
              src={imageUrl}
              alt="Blog Thumbnail"
            />
          </div>
        </div>
      </div>
      <div className={classes.blogContainer}>
        {pageData.length > 0 ? (
          pageData.map((card) => {
            const imageUrl = card.thumbnail?.startsWith("http")
              ? card.thumbnail
              : `http://localhost:4000/${card.thumbnail}`;
            return (
              <div key={card._id} className={classes.cardBox}>
                <ClickableCard
                  thumbnail={imageUrl}
                  title={card.title}
                  createdAt={card.date_created}
                  onClick={() => history.push(`/${card.url}`)}
                />
              </div>
            );
          })
        ) : (
          <p>No posts available.</p>
        )}
      </div>
      <div className={classes.separator}></div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button
          type="button"
          onClick={() => {
            fetchDataPagination();
          }}
          disabled={pageLoading || !pageData || pageData.length === 0}
          variant="contained"
          sx={{
            backgroundColor: "#191919",
            color: "#3CADFF",
            fontSize: { xs: "12px", sm: "12px", md: "14px", lg: "16px" },
            borderRadius: "30px",
            marginBottom: "20px",
            padding: {
              xs: "6px 12px",
              sm: "8px 16px",
              md: "10px 20px",
              lg: "10px 20px",
            },
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#292929",
            },
            "&:disabled": {
              opacity: 0.5,
              cursor: "not-allowed",
            },
          }}
        >
          {pageLoading ? "Loading..." : "Load More"}
          <ExpandMoreIcon sx={{ color: "#3CADFF" }} />
        </Button>
      </div>
    </div>
  );
};

export default Blogs;
