import React from "react";
import { Box, Typography, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BuyMeACoffee from "../BuyMeACoffee/BuyMeACoffee";

function Footer() {
  const handleScrollToTop = () => {
    const section = document.getElementById("top");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Box
        component="footer"
        sx={{
          //backgroundColor: "#1a1a1a",
          background: "linear-gradient(131deg, #9c83ff 10%, #b89cff 30%, #e0f010 55%, #f5b342 75%, #ff9051 90%)",
          padding: "20px",
          textAlign: "center",
          marginTop: 5,
          color: "black"
        }}
      >
        {/* Scroll to Top Button */}
        <Fab
          color="secondary"
          onClick={handleScrollToTop}
          sx={{
            marginTop: "-60px",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            borderColor: "white",
            border: "2px solid",
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>

        <BuyMeACoffee />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            marginTop: 2,
          }}
        >
          <Typography variant="body1">
            Built with ReactJS, Vite and MUI, deployed on Firebase.
          </Typography>
        </Box>

        <a
          href="https://antoniaalicefrey.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }} // No underline for the link
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", my: 1 }}
          >
            antoniaalicefrey.com
          </Typography>
        </a>

        <Typography variant="body2" sx={{ marginTop: 2, color: "white" }}>
          &copy; {new Date().getFullYear()} Antonia Alice Frey. All rights
          reserved.
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
