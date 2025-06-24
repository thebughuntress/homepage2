import { Box } from "@mui/material";

const BuyMeACoffee = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="a"
        href="https://www.buymeacoffee.com/alicecodes"
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
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=alicecodes&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
          alt="Buy me a coffee"
          sx={{
            height: { xs: "40px", md: "50px" }, // Adjust height if needed
            width: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default BuyMeACoffee;
