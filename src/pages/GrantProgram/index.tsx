import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/UploadFile";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#081015",
  },
  rootContainer: {
    fontFamily: "SF Pro Display",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "10%",
    maxWidth: "1300px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      paddingTop: "15%",
    },
  },
  container1: {
    maxWidth: 450,
    margin: "auto",
    // padding: 24,
    paddingTop: "6%",
    color: "white",
    height: "730px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 350,
      height: "430px",
      paddingTop: "3%",
    },
  },
  formContainer: {
    maxWidth: 400,
    margin: "auto",
    padding: "24px 12px",
    backgroundColor: "#000D17",
    borderRadius: 16,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 350,
    },
  },
  title: {
    textAlign: "center",
    marginBottom: "24px",
    fontSize: 24,
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  para: {
    fontFamily: "SF Pro Display",
    fontSize: 20,
    textAlign: "left",
    fontWeight: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  title1: {
    textAlign: "left",
    marginBottom: "24px",
    fontSize: 48,
    fontFamily: "SF Pro Display",
    fontWeight: 500,
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  },
  input: {
    width: "100%",
    padding: "12px",
    backgroundColor: "transparent",
    borderRadius: 8,
    color: "white",
    fontSize: 16,
    outline: "none",
    border: "1px solid white",
  },
  button: {
    textTransform: "none",
    backgroundColor: "#49A8FF",
    height: "49px",
    fontFamily: "SF Pro Display",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "space-between",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: 8,
    padding: "8px 8px",
    color: "white",
    marginTop: "8px",
  },
  input1: {
    flexGrow: 1,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    color: "white",
    fontSize: 16,
    marginRight: 8,
    width: "326px",
    height: "108px",
    // padding: "8px", // Adds padding for better spacing
    resize: "none", // Prevents resizing of the textarea
    overflow: "hidden", // Hides the scrollbar
    display: "block",
    textAlign: "left", // Ensures text aligns to the left
    verticalAlign: "top", // Aligns text vertically to the top
    lineHeight: "1.5",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "280px",
      height: "128px",
    },
  },
  uploadButton: {
    position: "absolute",
    width: "94px",
    bottom: "4px",
    left: "72%",
    [theme.breakpoints.down("sm")]: {
      left: "67%",
    },
  },
}));

const GrantProgram = () => {
  const classes = useStyles();
  const [fileName, setFileName] = useState(""); // State to store the file name
  const [fileIcon, setFileIcon] = useState(null); // State to store file icon (for PDF, etc.)
  const [fileBinary, setFileBinary] = useState(null);

  const handleFileRemove = () => {
    setFileName(""); // Clear the file name
    setFileIcon(null); // Reset the file icon
    setFileBinary(null); // Reset binary data
    setFormData({
      ...formData,
      fileData: null, // Remove file data from formData
    });
  };
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    projectName: "",
    amount: "",
    email: "",
    message: "",
    img: "",
    fileData: null,
  });
  // Initialize emailjs with public key
  emailjs.init("xgY7CZ_J1S154HAiD");

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        img: URL.createObjectURL(file), // Store the image URL to display it
      });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileIcon(file.type.includes("pdf") ? "pdf" : "file"); // Set icon based on file type

      // Convert file to binary and store it
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileBinary(reader.result); // Store the binary data
        setFormData({
          ...formData,
          fileData: reader.result, // Store file binary data in formData
        });
      };
      reader.readAsArrayBuffer(file); // Read file as binary
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    try {
      if (formRef.current) {
        const response = await emailjs.sendForm(
          "service_mq3enkt",
          "template_5bfsvqw",
          formRef.current
        );
        console.log("SUCCESS!", response);

        // Log form data for debugging
        console.log("Form Data:", formData);

        // Optionally reset the form and state
        formRef.current.reset();
        setFormData({
          projectName: "",
          amount: "",
          email: "",
          message: "",
          img: "",
          fileData: null,
        });
      }
    } catch (err) {
      console.log("FAILED...", err);
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.rootContainer}>
        <div className={classes.container1}>
          <p className={classes.title1}>Grant Program</p>
          <p className={classes.para}>
            Empowering Innovators to Build on the Future of Blockchain. <br />{" "}
            <br />
            The IDEA 3.0 Network Grant Program is designed to support
            developers, entrepreneurs, researchers, and creators who aim to
            contribute to the growth and innovation of the IDEA 3.0 ecosystem.
            By providing funding, resources, and mentorship, the program ensures
            that impactful projects have the support they need to succeed.
          </p>
        </div>
        {/* <div> */}
        <form
          className={classes.formContainer}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h1 className={classes.title}>Apply For Grant Program</h1>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                sx={{
                  my: 1,
                }}
              >
                Project Name
              </Typography>
              <input
                type="text"
                placeholder="Enter Project Name"
                className={classes.input}
                id="projectName"
                value={formData.projectName}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{
                  my: 1,
                }}
              >
                Required Funding Amount
              </Typography>
              <input
                type="number"
                placeholder="Enter Required Funding Amount"
                className={classes.input}
                id="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{
                  my: 1,
                }}
              >
                Email
              </Typography>
              <input
                type="email"
                placeholder="Enter Your Email"
                className={classes.input}
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.inputContainer}>
                <input
                  placeholder="Enter Your Project Description or Upload Documents"
                  className={classes.input1}
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {/* <Button
                  variant="contained"
                  startIcon={
                    <CloudUploadIcon sx={{ fontSize: 12, color: "white" }} />
                  }
                  className={classes.uploadButton}
                  sx={{
                    display: "flex",
                    aliginItems: "center",
                    backgroundColor: "#19252E",
                    paddingLeft: "3px",
                    paddingRight: "3px",
                    "&:hover": {
                      backgroundColor: "#555", // Apply hover background color directly
                    },
                  }}
                >
                  <input type="file" style={{ display: "none" }} />
                </Button> */}
                {/* <Button
                  variant="contained"
                  startIcon={
                    <CloudUploadIcon sx={{ fontSize: 16, color: "white" }} />
                  }
                  className={classes.uploadButton}
                  sx={{
                    display: "flex",
                    alignItems: "center", // Fixed typo: 'aliginItems' to 'alignItems'
                    justifyContent: "center",
                    backgroundColor: "#19252E",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    borderRadius: "8px",
                    color: "#ffffff",
                    fontSize: "14px",
                    "&:hover": {
                      backgroundColor: "#555",
                    },
                  }}
                  component="label" // Makes the button clickable for the file input
                >
                  Upload
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={(event) => console.log(event.target.files[0])}
                  />
                </Button> */}
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  {/* Upload button */}
                  {!fileName && (
                    <Button
                      variant="contained"
                      startIcon={
                        <CloudUploadIcon
                          sx={{ fontSize: 16, color: "white" }}
                        />
                      }
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#19252E",
                        paddingLeft: "12px",
                        paddingRight: "12px",
                        borderRadius: "8px",
                        color: "#ffffff",
                        fontSize: "14px",
                        "&:hover": {
                          backgroundColor: "#555",
                        },
                      }}
                      component="label"
                    >
                      Upload
                      <input
                        type="file"
                        style={{ display: "none" }}
                        accept="image/*, .pdf"
                        onChange={handleFileChange}
                      />
                    </Button>
                  )}

                  {/* Display selected file */}
                  {fileName && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        maxWidth: "400px", // Limit width for responsiveness
                        backgroundColor: "#19252E",
                        color: "#fff",
                        borderRadius: "8px",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        {/* File icon */}
                        <Box
                          sx={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#fff",
                            borderRadius: "4px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {fileIcon === "pdf" ? (
                            <img
                              src="pdf-icon.png"
                              alt="pdf icon"
                              style={{ width: "16px" }}
                            />
                          ) : fileIcon === "png" ? (
                            <img
                              src="png-icon.png"
                              alt="png icon"
                              style={{ width: "16px" }}
                            />
                          ) : fileIcon === "jpg" ? (
                            <img
                              src="jpg-icon.png"
                              alt="jpg icon"
                              style={{ width: "16px" }}
                            />
                          ) : (
                            <span>{fileIcon === "file" ? "📄" : "📂"}</span>
                          )}
                        </Box>
                        {/* File name */}
                        <span
                          style={{
                            maxWidth: "200px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {fileName}
                        </span>
                      </Box>

                      {/* Remove button */}
                      <IconButton
                        onClick={handleFileRemove}
                        sx={{ color: "#ffffff" }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>
                  )}
                </div>
              </Box>
            </Grid>

            {/* <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button variant="contained" className={classes.button}>
                Upload
              </Button>
            </Grid> */}

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                className={classes.button}
                type="submit"
              >
                Apply
              </Button>
            </Grid>
          </Grid>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default GrantProgram;
