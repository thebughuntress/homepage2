import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Hero from "./content/Hero/Hero";
import Footer from "./content/Footer/Footer";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material/";
import BackgroundPattern from "./assets/BackgroundPattern.png";
import Box from "@mui/material/Box";
import AppBar from "./content/AppBar/AppBar";
import AboutMe from "./content/AboutMe/AboutMe";
import Experience from "./content/Experience/Experience";
import Contact from "./content/Contact/Contact";
import Projects from "./content/Projects/Projects";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        id="top"
        sx={{
          backgroundImage: `url(${BackgroundPattern})`,
        }}
      >
        <AppBar />
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
