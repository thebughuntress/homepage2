import React from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import devoteamLogo from "../../assets/devoteamLogo.png";
import elcaLogo from "../../assets/elcaLogo.svg";

function Experience() {
  const experiences = [
    {
      startDate: "Feb. 2022",
      endDate: "Present",
      company: "Devoteam GmbH",
      position: "Senior Software Engineer",
      location: "Remote",
      image: devoteamLogo,
    },
    {
      startDate: "2010",
      endDate: "Present",
      company: "Superprof",
      position: "Tutoring (Python, Java, Web) & Freelance",
      location: "Remote",
      image: "https://s3-eu-west-1.amazonaws.com/tpd/logos/5e5d075094f7cb00015e5dca/0x0.png",
    },
    {
      startDate: "Jan. 2021",
      endDate: "Jan. 2022",
      company: "ELCA Informatik",
      position: "System Analyst",
      location: "Granada, Spain | Switzerland",
      image: elcaLogo,
    },
    {
      startDate: "Aug. 2019",
      endDate: "Jan. 2020",
      company: "Intel Labs",
      position: "Software Engineer (Student)",
      location: "Karlsruhe, Germany",
      image: "https://avatars.githubusercontent.com/u/1492758?s=280&v=4",
    },
    {
      startDate: "Sept. 2018",
      endDate: "Feb. 2019",
      company: "BMW M",
      position: "System Engineer (Student)",
      location: "Munich, Germany",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGFTtaY-PgUt2lo6-JuryWPGCoShSoifCwQ&s",
    },
  ];

  return (
    <SectionWrapper title="Experience" id="experience">
      <TableContainer>
        <Table>
          <TableBody>
            {experiences.map((exp, index) => (
              <TableRow
                key={index}
                sx={{
                  borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                {/* Image Column */}
                <TableCell
                  sx={{ width: "100px", verticalAlign: "center", py: 2 }}
                >
                  <img
                    src={exp.image}
                    alt={exp.company}
                    style={{
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </TableCell>

                {/* Content Column */}
                <TableCell sx={{ paddingX: { xs: "5px", md: "50px" } }}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {exp.position}
                    </Typography>
                    <Typography variant="body1" sx={{ fontStyle: "bold" }}>
                      {exp.company}
                    </Typography>

                    <Typography variant="body1" sx={{ color: "gray.primary" }}>
                      {exp.startDate} - {exp.endDate}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <LocationOnIcon
                        sx={{
                          fontSize: "20px",
                          color: "gray.primary",
                          marginRight: "2px",
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ color: "gray.primary" }}
                      >
                        {exp.location}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Divider />
    </SectionWrapper>
  );
}

export default Experience;
