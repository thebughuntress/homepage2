import { Box, Typography } from "@mui/material";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

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
    </SectionWrapper>
  );
}

export default AboutMe;
