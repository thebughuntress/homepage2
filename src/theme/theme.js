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
    gray: {
      primary: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "3.2rem",
      fontWeight: 700,
      letterSpacing: "0.2px",
    },
    h2: {
      fontSize: "2.2rem",
      textTransform: "uppercase",
      fontWeight: 700,
      letterSpacing: "0.3px",
    },
    h3: {
      textTransform: "uppercase",
      fontSize: "1.8rem",
      fontWeight: 700,
      letterSpacing: "0.4px",
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "0.9rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.7rem",
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
          borderRadius: "12px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
});

export default theme;
