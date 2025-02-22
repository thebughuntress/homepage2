import { Box, Typography, Button, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const contacts = [
  {
    label: "",
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/antonia-alice-frey/",
  },
  {
    label: "",
    icon: <GitHubIcon />,
    url: "https://github.com/thebughuntress",
  },
  {
    label: "",
    icon: <WhatsAppIcon />,
    url: "https://wa.me/4915146782868",
  },
  {
    label: "",
    icon: <FontAwesomeIcon icon={faDiscord} style={{ color: "#ffffff" }} />,
    url: "https://discord.com/users/1138415841344503899",
  },
];

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 1,
        marginY: 3,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          background:
            "linear-gradient(131deg, rgb(156, 131, 255) 42%, rgba(224, 240, 16, 0.94) 70%, rgb(255, 144, 81) 75%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textTransform: "none",
        }}
      >
        Let's connect :)
      </Typography>
      <Typography variant="body1">Talking is better in person.</Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginY: 2,
          gap: 1,
        }}
      >
        {contacts.map((item, index) => (
          <IconButton
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              color: "white",
              transition: "transform 0.3s ease", // Smooth transition for the hover effect
              "&:hover": {
                transform: "translateY(-5px)", // Move the icon up by 5px on hover
              },
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Box>
      <Button
        variant="outlined"
        startIcon={<EmailIcon />}
        sx={{ marginBottom: 2 }}
        href="mailto:antonia.frey@outlook.com"
      >
        Contact Me
      </Button>
    </Box>
  );
}

export default Contact;
