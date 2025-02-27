import { Box, Typography } from "@mui/material";

function SectionWrapper({ title, id, children }) {
  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 1,
        paddingY: 4,
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <Typography
        variant="h5"
        sx={{
          background:
            "linear-gradient(131deg, rgb(156, 131, 255) 42%, rgba(224, 240, 16, 0.94) 70%, rgb(255, 144, 81) 75%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: 1,
          letterSpacing: "2px",
        }}
      >
        Explore Now
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          //backgroundColor: "red",
          width: { xs: "90%", md: "70%", lg: "70%" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default SectionWrapper;
