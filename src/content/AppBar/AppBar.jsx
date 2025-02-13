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
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./AppBar.css";

function AppBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)"); // Checks if the screen size is mobile

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuLinks = ["About Me", "Experience", "Projects", "Contact"];

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
          backgroundColor: theme.palette.background.default, // Use color from theme
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
                  }}
                >
                  {text}
                </Button>
              ))}
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
            paddingTop: 8,
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
}

export default AppBar;
