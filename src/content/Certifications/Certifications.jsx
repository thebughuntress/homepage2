import SectionWrapper from "../SectionWrapper/SectionWrapper";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Link,
} from "@mui/material";
import React, { useEffect } from "react";

// List of cert objects
const certs = [
  {
    imgUrl:
      "https://images.credly.com/size/340x340/images/37e26478-d80c-43e8-80eb-ec492f3a26c1/image.png",
    name: "Professional Python Programmer Level 1",
    issuedBy: "Python Institute",
    id: "efb5b4b1-47f8-4cd3-b497-6ab45b427232",
  },
  {
    imgUrl: "https://bjleeper.com/wp-content/uploads/2021/07/CTFL-badge.png",
    name: "ISTQB Certified Tester Foundation Level",
    issuedBy: "ASTQB",
    id: "",
  },
  {
    imgUrl:
      "https://images.credly.com/size/340x340/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png",
    name: "Professional Scrum Master I (PSM I)",
    issuedBy: "Scrum.org",
    id: "7b5d324e-72a9-49da-943d-0e7fcbf835c4",
  },

  {
    imgUrl:
      "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    name: "AWS Certified Cloud Practitioner",
    issuedBy: "AWS",
    id: "d7c6436d-91aa-4124-a530-67f185f6f372",
  },
  {
    imgUrl:
      "https://images.credly.com/size/340x340/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png",
    name: "Associate Cloud Engineer Certification",
    issuedBy: "Google Cloud",
    id: "4c6cef95-abb8-4a7f-acd9-467d0b6831f1",
  },
];

const Certifications = () => {
  useEffect(() => {
    // Dynamically load the Credly script for embedding badges
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCardClick = (id) => {
    if (id) {
      window.open(`https://www.credly.com/badges/${id}/public_url`, "_blank");
    }
  };

  return (
    <SectionWrapper title="Certifications" id="certifications">
      <Typography variant="body1">
        I enjoy learning new technologies and believe it is important to stay up
        to date in an ever-changing world. These IT certifications demonstrate
        my commitment to continuous learning and my ability to adapt to new
        tools and methodologies in the field.
      </Typography>
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        {certs.map((cert, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "60vw", md: "25%", lg: "200px" },
              height: 220, // Set consistent height
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "16px",
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              borderColor: "text.primary",
              cursor: cert.id ? "pointer" : "default",
              backgroundColor: "white",
            }}
            onClick={() => handleCardClick(cert.id)}
          >
            <CardMedia
              component="img"
              height="120"
              image={cert.imgUrl}
              alt={cert.name}
              sx={{
                objectFit: "contain",
                backgroundColor: "transparent",
                paddingY: 2,
              }}
            />
            <CardContent sx={{ color: "black", m: 0, p: 1, paddingX: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {cert.name}
              </Typography>
            </CardContent>
            {/* Footer Section */}
            <CardActions
              sx={{
                width: "90%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                Issued by{" "}
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: "none" }}
                >
                  {cert.issuedBy}
                </Link>
              </Typography>
            </CardActions>
          </Card>
        ))}
      </Box>
    </SectionWrapper>
  );
};

export default Certifications;
