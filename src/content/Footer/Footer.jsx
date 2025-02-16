import React from "react";
import { Box, Typography, Fab, Link } from "@mui/material";
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
          backgroundColor: "black",
          padding: "20px",
          textAlign: "center",
          marginTop: 5,
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
            Built with ReactJS, Vite and MUI, deployed on Github Pages.
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ fontWeight: "bold", my: 1 }}>
          <Link
            href="https:antoniaalicefrey.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            antoniaalicefrey.com
          </Link>
        </Typography>

        <Typography variant="body2" sx={{ marginTop: 2 }}>
          &copy; {new Date().getFullYear()} Antonia Alice Frey. All rights
          reserved.
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
