import { Card, CardMedia, Typography, Box, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = ({ project }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      <Card
        key={project.name}
        sx={{
          width: { xs: "80vw", md: "400px" },
          height: {xs: 240, md: 200}, // Set consistent height
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "16px",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          borderColor: "text.primary",
          backgroundColor: "white",
          color: "black",
          p: 1
        }}
      >
        <CardMedia
          component="img"
          image={project.img}
          alt="Calculator App"
          sx={{
            height: "40%",
            width: "auto",
            objectFit: "contain",
            p:1
          }}
        />

        <Box sx={{ m: { sm: 0 } }}>
          <Typography sx={{ fontWeight: "bold", paddingTop: 1 }}>
            {project.name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              fontSize: "0.875rem",
              lineHeight: 1.43,
              color: "black",
              opacity: 0.7,
              textAlign: "center",
              maxWidth: "400px",
            }}
          >
            {project.description}
          </Typography>
          <Button
            startIcon={<GitHubIcon sx={{ fontSize: "0.875rem" }} />}
            size="small"
            sx={{ color: "black", fontSize: "0.8rem", p: 0, px: 1, m: 1 }}
            onClick={() => window.open(project.repo, "_blank")}
          >
            Show on Github
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Project;
