import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { Typography, Box, Chip, Link } from "@mui/material";

const technologies = [
  {
    label: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    label: "Django",
    img: "https://static-00.iconduck.com/assets.00/django-icon-1606x2048-lwmw1z73.png",
  },
  {
    label: "NodeJS",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    label: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
  },
  {
    label: "Vue",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
  },
  {
    label: "Angular",
    img: "https://platri.de/wp-content/uploads/2024/01/Angular-Framework-e1649312852136.png",
  },
  {
    label: "TypeScript",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    label: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    label: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    label: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    label: "Redux",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    label: "Storybook",
    img: "https://www.svgrepo.com/show/354397/storybook-icon.svg",
  },
  {
    label: "Bootstrap",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
  },
  {
    label: "Material UI",
    img: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
  },
  {
    label: "Styled Components",
    img: "https://avatars.githubusercontent.com/u/20658825?s=200&v=4",
  },
  {
    label: "Sass",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  },
  {
    label: "Cypress",
    img: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_10f53e90961b98df0191922f13efd135/cypress.png",
  },
  {
    label: "Selenium",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png",
  },
  {
    label: "Postman",
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    label: "PHP",
    img: "https://pngimg.com/d/php_PNG34.png",
  },
  {
    label: "Symfony",
    img: "https://avatars.githubusercontent.com/u/143937?v=4",
  },
  {
    label: "MATLAB",
    img: "https://img.icons8.com/?size=512&id=r5Y16PcDkoWI&format=png",
  },
  {
    label: "Raspberry Pi",
    img: "https://upload.wikimedia.org/wikipedia/de/thumb/c/cb/Raspberry_Pi_Logo.svg/570px-Raspberry_Pi_Logo.svg.png",
  },
  {
    label: "Java",
    img: "https://static-00.iconduck.com/assets.00/java-icon-756x1024-oq8lkwya.png",
  },
  {
    label: "C#",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
  },
  {
    label: "Firebase",
    img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    label: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  },
  {
    label: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
];

function Projects() {
  return (
    <SectionWrapper title="Projects" id="projects">
      <Typography>
        In my past projects at work, university, and during my free time, I have
        worked with a variety of technologies and tools. My personal{" "}
        <Link
          href="https://github.com/thebughuntress"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          GitHub
        </Link>{" "}
        account highlights projects I’ve developed using these technologies.
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {technologies.map((tech, index) => (
          <Chip
            sx={{
              borderRadius: 5, // Add border radius for rounded corners
              borderWidth: 2, // Add border width
              borderStyle: "solid", // Ensure the border is solid
              borderImage:
                "linear-gradient(131deg, rgb(156, 131, 255) 42%, rgba(224, 240, 16, 0.94) 70%, rgb(255, 144, 81) 75%) 1", // Apply gradient to the border
            }}
            key={index}
            label={tech.label}
            icon={
              <img
                src={tech.img}
                alt={tech.label}
                style={{ width: 20, height: 20, marginRight: 2 }}
              />
            }
          />
        ))}
      </Box>
    </SectionWrapper>
  );
}

export default Projects;
