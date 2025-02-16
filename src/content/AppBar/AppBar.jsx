import React, { useState } from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  useMediaQuery,
  Box,
  Button,
  Tooltip,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "./AppBar.css";

function AppBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)"); // Checks if the screen size is mobile

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuLinks = [
    "About Me",
    "Experience",
    "Projects",
    "Certifications",
    "Contact",
  ];

  const handleScroll = (text) => {
    let id = text.replace(" ", "-").toLowerCase();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <MuiAppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.background.default,
          py: 1,
        }}
      >
        <Toolbar>
          {/* Left Side: Name */}
          <Typography variant="h3" className="gradient-text">
            {"<AAF/>"}
          </Typography>
          {/* Right Side: Links on larger screens */}
          {!isMobile && (
            <Box sx={{ display: "flex", marginRight: 3 }}>
              {menuLinks.map((text) => (
                <Button
                  key={text}
                  onClick={() => handleScroll(text)}
                  sx={{
                    marginLeft: 2,
                    textTransform: "uppercase",
                    fontWeight: 700,
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                    },
                    border: "none",
                  }}
                >
                  {text}
                </Button>
              ))}
              <Tooltip title="I like coffee!" arrow>
                <a
                  href="https://www.buymeacoffee.com/antoniafrey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    className="coffee-icon"
                    aria-label="buy-me-a-coffee"
                    color="white"
                    sx={{
                      marginLeft: 2,
                      border: "2px solid white",
                      color: "white",
                      padding: "5px",
                      borderRadius: "50%",
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)", // Subtle hover effect
                      },
                    }}
                  >
                    <LocalCafeIcon
                      sx={{ fontSize: "20px" }}
                    />
                  </IconButton>
                </a>
              </Tooltip>
            </Box>
          )}

          {/* Menu Icon for mobile view */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="end"
              onClick={toggleDrawer}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </MuiAppBar>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            height: "100vh",
          },
        }}
      >
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingY: 5,
              gap: 2,
            }}
          >
            {menuLinks.map((text) => (
              <Button
                key={text}
                onClick={() => {
                  // First close the drawer, then scroll to the section
                  toggleDrawer();
                  handleScroll(text);
                }}
                sx={{
                  color: "black",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  border: "none",
                }}
              >
                {text}
              </Button>
            ))}
            <IconButton
              aria-label="close-appbar"
              color="black"
              onClick={toggleDrawer}
            >
              <KeyboardDoubleArrowRightIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} /> {/* Spacer to push content down */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "25vh",
            }}
          >
            <Typography variant="h3" className="gradient-text">
              {"<AAF/>"}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default AppBar;
