import { Box, Typography, List, ListItem } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const degrees = [
  {
    title: "Master of Science",
    program: "Electrical Engineering and Information Technology",
    institution: "Karlsruhe Institute of Technology (KIT)",
    year: 2020,
  },
  {
    title: "Bachelor of Science",
    program: "Electrical Engineering and Information Technology",
    institution: "Karlsruhe Institute of Technology (KIT)",
    year: 2018,
  },
];

function AboutMe() {
  return (
    <SectionWrapper title="About Me" id="about-me">
      <Typography variant="body1">
        During my Electrical Engineering studies, I discovered my passion for IT
        and programming. Since graduating in 2020, I've worked as a software
        engineer, contributing to projects across various technologies and
        industries. I enjoy learning new programming languages, writing clean,
        robust code, and focusing on automation and design to simplify complex
        challenges.
      </Typography>

      <Box sx={{ mt: 2 }}>
        <List sx={{ p: 0 }}>
          {degrees.map((degree, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                m: 0,
                p: 0,
                paddingTop: index !== 0 ? 2 : 0, // Add padding between items
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "space-between",
                  marginBottom: 1,
                }}
              >
                <SchoolIcon
                  sx={{
                    color: "white",
                    marginRight: 2,
                  }}
                />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {degree.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    {degree.program}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "gray.primary",
                    }}
                  >
                    {degree.institution}, {degree.year}
                  </Typography>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </SectionWrapper>
  );
}

export default AboutMe;
