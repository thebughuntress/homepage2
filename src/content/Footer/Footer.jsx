import React from "react";
import { Box, Typography, Fab, Link } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          <Link
            href="https:antoniaalicefrey.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            antoniaalicefrey.com
          </Link>
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            marginTop: 2,
          }}
        >
          <Typography variant="body1">
            Built with Vite and MUI, deployed with Firebase.
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ marginTop: 3 }}>
          &copy; {new Date().getFullYear()} Antonia Alice Frey. All rights
          reserved.
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
