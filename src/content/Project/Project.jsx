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
        sx={{
          width: "150px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "16px",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={project.img}
          alt="Calculator App"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            p: 2,
          }}
        />
      </Card>
      <Box sx={{ m: { sm: 0, md: 3 } }}>
        <Typography sx={{ fontWeight: "bold", paddingTop: 1 }}>
          {project.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: 1.43,
            color: "rgb(204, 204, 204)",
            opacity: 0.7,
            textAlign: "center",
            maxWidth: "400px",
          }}
        >
          {project.description}
        </Typography>
        <Button
          startIcon={<GitHubIcon sx={{ fontSize: "0.875rem", }} />}
          variant="outlined"
          size="small"
          sx={{ color: "white", fontSize: "0.8rem", p: 0, px: 1, m: 1 }}
          onClick={() => window.open(project.repo, "_blank")}
        >
          Show on Github
        </Button>
      </Box>
    </Box>
  );
};

export default Project;
