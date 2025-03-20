import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { List, ListItem, makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useBlog } from "contexts/blogContext";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import ShareBanner from "./ShareBanner";
import CardCarousel from "pages/IdeaNetwork/CardCarousel";
import { LinkedIn, Telegram } from "@mui/icons-material";

const useStyles = makeStyles((theme: any) => ({
  bg: {
    backgroundColor: "#081015",
  },
  root: {
    width: "100%", // Ensures it adapts to the container
    maxWidth: "1100px", // Limits the width to 1100px on large screens
    margin: "auto",
    padding: "0 5%", // Adds padding for better spacing on smaller screens

    [theme.breakpoints.down("md")]: {
      maxWidth: "900px", // Adjust width for medium screens (960px and below)
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "700px", // Adjust width for small screens (600px and below)
      padding: "0 8%", // Increase padding for smaller screens
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%", // Take full width for extra-small screens
      padding: "0 5%", // Extra padding for very small screens
    },
  },
  image: {
    width: "100%",
    maxWidth: "1100px",
    height: "auto",
    objectFit: "contain",
    margin: "auto",
  },
  imageCont: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    marginTop: "10%",

    [theme.breakpoints.down("sm")]: {
      marginTop: "17%",
    },

    [theme.breakpoints.down("xs")]: {
      marginTop: "30%", // Adjust padding for extra-small devices
    },
  },
  heading: {
    color: "#ffffff",
    fontFamily: "SF Pro Display",
    fontSize: "27px",
    lineHeight: "auto",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  left: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  content: {
    fontSize: "0.9rem",
    lineHeight: "1.6",
    color: "#ffffff",
    textAlign: "justify",
    wordBreak: "break-word",
    "& img": {
      width: "100%", // Ensures images inside the content are responsive
      height: "auto",
      borderRadius: "8px",
    },
    "& p": {
      marginBottom: "15px",
    },
    "& a": {
      color: "#007bff", // Ensures a bright blue color
      textDecoration: "none",
      fontWeight: "bold", // Optional: Make links stand out
      transition: "color 0.3s ease-in-out",
      "&:hover": {
        textDecoration: "underline",
        color: "#0056b3", // Darker blue on hover
      },
    },

    "& h2": {
      fontSize: "1.5rem", // Default size for large screens
      fontWeight: "bold",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.3rem",
      },
    },

    "& h3": {
      fontSize: "1.3rem", // Default size for large screens
      fontWeight: "bold",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
    // justifyContent: "center",
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
  img: {
    width: "100%", // Ensures images inside the content are responsive
    height: "auto",
    borderRadius: "8px",
  },
  container2: {
    backgroundColor: "#081015",
    color: "#fff",
    paddingLeft: "4%",
    maxWidth: "400px",
    borderRadius: "8px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  list: {
    paddingLeft: "10px",
  },
  activeItem: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#0af",
    borderLeft: "3px solid #0af",
    paddingLeft: "5px",
  },
  listItem: {
    fontSize: "16px",
    padding: "5px 0",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
      color: "#007bff",
    },
  },
  separator: {
    width: "100%",
    height: "2px", // Adjust thickness
    backgroundColor: "#333", // Adjust color
    margin: "20px 0", // Adjust spacing
    border: "none",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.5)", // Adds slight shadow like in the image
  },
  headingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "2rem",
    position: "relative",
  },
  headingText: {
    width: "75%",
    maxWidth: "1100px",
    margin: "auto",
    fontSize: "48px",
    fontWeight: "bold",
    fontFamily: "SF Pro Display",
    background: "linear-gradient(90deg, #fff, #007bff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "2px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "38px",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
      textAlign: "center",
    },
  },
}));

interface Post {
  title: string;
  content: string;
  thumbnail?: string;
}

const BlogPage: React.FC<Post> = () => {
  const classes = useStyles();
  const { url } = useParams<{ url: string }>(); // Get the blog URL
  const [tableOfContents, setTableOfContents] = useState<
    { id: string; tag: string; text: string }[]
  >([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  console.log("this is url posts", url);

  const { fetchPostsUrl, urlPosts, globalLoader, popularPosts } = useBlog();

  useEffect(() => {
    if (urlPosts?.content) {
      extractHeadings(urlPosts.content);
    }
  }, [urlPosts]);

  const extractHeadings = (htmlContent: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const headings: { id: string; tag: string; text: string }[] = [];

    doc.querySelectorAll("h2, h3").forEach((heading, index) => {
      const id = `heading-${index}`;
      heading.id = id;
      headings.push({
        id,
        tag: heading.tagName.toLowerCase(),
        text: heading.textContent || "Untitled",
      });
    });

    setTableOfContents(headings);
    urlPosts.content = doc.body.innerHTML;
  };

  useEffect(() => {
    if (url) {
      fetchPostsUrl(url);
    }
  }, [url]);

  // console.log(urlPosts.thumbnail, "this is url posts");
  if (!urlPosts) {
    return <p>Loading...</p>;
  }
  const imageUrl = urlPosts.thumbnail?.startsWith("http")
    ? urlPosts.thumbnail
    : `http://localhost:4000/${urlPosts.thumbnail}`;

  const imagelink = urlPosts.image?.startsWith("http")
    ? urlPosts.image
    : `http://localhost:4000/${urlPosts.image}`;

  const dateString = urlPosts?.date_created;
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

  const handleScrollToHeading = (id: string) => {
    setSelectedId(id);
    const headingElement = document.getElementById(id);
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={classes.bg}>
      <div className={classes.root}>
        <div className={classes.imageCont}>
          <img src={imageUrl} alt={urlPosts.title} className={classes.image} />
        </div>
        <div className={classes.container}>
          <div className={classes.left}>
            <div>
              <h2 className={classes.heading}>{urlPosts.title}</h2>
              {/* ✅ Social Icons */}
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
            </div>
            <div style={{ marginTop: "2%" }}>
              <p style={{ color: "white", fontSize: "12px" }}>
                {formattedDate}
              </p>
            </div>
            <div style={{ marginTop: "4%" }}>
              <div
                className={classes.content}
                dangerouslySetInnerHTML={{ __html: urlPosts.content }}
              />
            </div>
            <div>
              <img
                src={imagelink}
                alt={urlPosts.title}
                className={classes.img}
              />
            </div>
            <div>
              <ShareBanner />
            </div>
            <div className={classes.separator}></div>
          </div>
          {/* <div>2</div> */}
          {tableOfContents.length > 0 && (
            <div className={classes.container2}>
              <Typography className={classes.title}>In this article</Typography>
              <List>
                {tableOfContents.map((item, index) => (
                  <ListItem
                    key={index}
                    className={classes.listItem}
                    style={{
                      paddingLeft: item.tag === "h3" ? "20px" : "0px",
                      // fontSize: "16px",
                      fontSize: item.tag === "h2" ? "14px" : "12px",
                      fontWeight: item.tag === "h2" ? "bold" : "normal",
                      // color: item.tag === "h3" ? "#cccccc" : "#ffffff",
                      color:
                        selectedId === item.id
                          ? "blue"
                          : item.tag === "h3"
                          ? "#cccccc"
                          : "#ffffff",
                    }}
                    onClick={() => handleScrollToHeading(item.id)}
                  >
                    {item.text}
                  </ListItem>
                ))}
              </List>
            </div>
          )}
        </div>
      </div>

      <Box>
        <Box className={classes.headingContainer}>
          <h2 className={classes.headingText}>Hot Topics</h2>
        </Box>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "#000",
          }}
        >
          <CardCarousel data={popularPosts} loading={globalLoader} />
        </Container>
      </Box>
    </div>
  );
};

export default BlogPage;
