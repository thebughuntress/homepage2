import React from "react";
import { Box, Button } from "@mui/material";

const BuyMeACoffee = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginY: 2,
      }}
    >
      <Box
        component="a"
        href="https://www.buymeacoffee.com/antoniafrey"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          padding: "20px",
        }}
      >
        <Box
          component="img"
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=antoniafrey&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
          alt="Buy me a coffee"
          sx={{
            height: "50px", // Adjust height if needed
            width: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default BuyMeACoffee;
