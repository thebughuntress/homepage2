import { Box, Typography, Avatar } from "@mui/material";
import DownloadButton from "../DownloadButton/DownloadButton";
import avatar from "../../assets/woman-technologist_1f469-200d-1f4bb.png";
//import avatar from "../../assets/girl-with-laptop.jpg";
import cvFallback from "../../assets/CV_AntoniaFrey.pdf";

function Hero() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        marginTop: { xs: "-80px", md: "-20px", lg: "-60px" },
      }}
    >
      <Avatar
        sx={{
          bgcolor: "secondary.main",
          width: { xs: "140px", lg: "200px" },
          height: { xs: "140px", lg: "200px" },
          p: 2,
        }}
        alt="avatar"
        src={avatar}
      />
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: "2.2rem", md: "inherit", lg: "2.8rem" } }}
      >
        Antonia Frey
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 1, md: 0 },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, marginRight: 1 }}>
          Turning Ideas into Code &{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              background:
                "linear-gradient(131deg, rgb(156, 131, 255) 42%, rgba(224, 240, 16, 0.94) 70%, rgb(255, 144, 81) 75%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            Making the Web Cooler
          </Typography>
          <Typography variant="h5" sx={{ marginLeft: "2px" }}>
            🚀
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="h5"
        sx={{ width: { xs: "90%", md: "60%", lg: "40%" }, textAlign: "center" }}
      >
        <b>Hey!</b> I&apos;m a full-stack developer who loves building efficient,
        scalable, and user-friendly applications that make life easier.
        Mastering new technologies drives me, and I can become unstoppable when
        encountering a challenge.
      </Typography>

      <DownloadButton
        label="Download CV"
        color="primary.main"
        url="https://raw.githubusercontent.com/thebughuntress/cv-overleaf/main/cv.pdf"
        downloadFileName="CV_AntoniaFrey.pdf"
        fallbackFile={cvFallback}
      />
    </Box>
  );
}

export default Hero;
