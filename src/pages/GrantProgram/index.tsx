import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/UploadFile";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "emailjs-com";
import pdf from "../../assets/pngs/pdf-icon.png";
import png from "../../assets/pngs/png-icon.png";
import jpg from "../../assets/pngs/jpg-icon.png";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "input:-webkit-autofill": {
      backgroundColor: "transparent !important",
      "-webkit-box-shadow": "0 0 0px 1000px transparent inset !important", // Ensure the autofill background is transparent
      "-webkit-text-fill-color": "#ffffff !important", // Text color for autofill
      transition: "background-color 5000s ease-in-out 0s", // Prevent autofill styles from flashing
    },
  },
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
      paddingTop: "17%",
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
      height: "350px",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  para: {
    fontFamily: "SF Pro Display",
    fontSize: 20,
    textAlign: "left",
    fontWeight: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
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
      fontSize: 28,
    },
    [theme.breakpoints.down("xs")]: {
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
    resize: "none",
    overflow: "hidden",
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
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [fileName, setFileName] = useState(""); // State to store the file name
  const [fileIcon, setFileIcon] = useState(null); // State to store file icon (for PDF, etc.)
  const [isActive, setIsActive] = useState(false);
  const [fileBinary, setFileBinary] = useState(null);

  const [base64Image, setBase64Image] = useState(""); // State for image Base64

  const handleFileRemove = () => {
    setFileName(""); // Clear the file name
    setFileIcon(null); // Reset the file icon
    setFileBinary(null); // Reset binary data
    setBase64Image(""); // Reset image Base64
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

  emailjs.init("xgY7CZ_J1S154HAiD");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Convert image to Base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setBase64Image(base64);
        setFormData((prevData) => ({
          ...prevData,
          img: base64, // Store Base64 image in formData
        }));
      };
      reader.readAsDataURL(file); // Convert image to Base64
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);

      // Set the appropriate icon based on file type
      if (file.type.includes("pdf")) {
        setFileIcon("pdf");
      } else if (file.type.includes("png")) {
        setFileIcon("png");
      } else if (file.type.includes("jpg") || file.type.includes("jpeg")) {
        setFileIcon("jpg");
      } else {
        setFileIcon("file"); // For other file types
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setFileBinary(base64); // Store Base64 binary data
        setFormData({
          ...formData,
          fileData: base64, // Store file data as Base64 in formData
        });
      };
      reader.readAsDataURL(file); // Read file as Base64
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setIsActive(true);
    try {
      if (formRef.current) {
        const response = await emailjs.sendForm(
          "service_mq3enkt",
          "template_5bfsvqw",
          formRef.current
        );
        console.log("SUCCESS!", response);
        enqueueSnackbar("Successfully submitted!", { variant: "success" });

        formRef.current.reset();
        setFormData({
          projectName: "",
          amount: "",
          email: "",
          message: "",
          img: "",
          fileData: "",
        });
        setFileName(""); // Reset file name state
        setFileIcon(null); // Reset file icon state
        setFileBinary(null); // Reset file binary data state
        setBase64Image("");
      }
      setIsActive(false);
    } catch (err) {
      setIsActive(false);
      enqueueSnackbar("Error! Please try again later.", { variant: "error" });
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
                <textarea
                  placeholder="Enter Your Project Description or Upload Documents"
                  className={classes.input1}
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
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
                            // backgroundColor: "#000000",
                            borderRadius: "4px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {fileIcon === "pdf" ? (
                            <img
                              src={pdf}
                              alt="pdf icon"
                              style={{ width: "16px" }}
                            />
                          ) : fileIcon === "png" ? (
                            <img
                              src={png}
                              alt="png icon"
                              style={{ width: "16px" }}
                            />
                          ) : fileIcon === "jpg" ? (
                            <img
                              src={jpg}
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

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                className={classes.button}
                type="submit"
              >
                {isActive ? "Submiting..." : "Submit "}
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
