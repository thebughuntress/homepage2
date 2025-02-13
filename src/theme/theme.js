import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#121212",
    },
    background: {
      default: "#000000",
      paper: "#ffffff",
    },
    text: {
      primary: "#ffffff",
    },
    gray:{
      primary: "#A9A9A9",
    }
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "3.2rem", // Adjusted size for better readability
      fontWeight: 700,
      letterSpacing: "0.2px", // Added slight letter spacing for elegance
    },
    h2: {
      fontSize: "2.2rem", // Slightly reduced size
      textTransform: "uppercase",
      fontWeight: 700,
      letterSpacing: "0.3px", // Added letter spacing
    },
    h3: {
      textTransform: "uppercase",
      fontSize: "1.8rem", // Adjusted size for more balance
      fontWeight: 700,
      letterSpacing: "0.4px", // Added letter spacing
    },
    h4: {
      fontSize: "1.1rem", // Slight increase to ensure readability
      fontWeight: 500,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "0.9rem", // Increased size for clarity
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.9rem", // Increased to 0.9rem for better legibility
    },
    body2: {
      fontSize: "0.7rem", // Adjusted for consistency
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          border: "2px solid",
          borderColor: "white",
          borderRadius: "25px",
          textTransform: "none",
          padding: "5px 20px",
          fontWeight: 600,
          fontSize: "0.9rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px", // Retained radius for a smooth card
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)", // Slightly increased shadow for better contrast
        },
      },
    },
  },
});

export default theme;
