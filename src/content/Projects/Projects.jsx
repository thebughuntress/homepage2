import Project from "../Project/Project";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { Typography, Box, Chip, Link } from "@mui/material";

const projects = [
  {
    name: "Flappy Bird",
    description:
      "A Flappy Bird clone built using Pygame Zero, a wrapper around the Pygame engine. Covers creating a side-scrolling game with animated backgrounds, realistic bird physics, obstacle generation, collision detection, and a scoring system. Built by following the 'Pygame Zero: Flappy Bird Tutorial'.",
    img: "https://cdn.neowin.com/news/images/uploaded/2025/04/1746001654_flappy_bird_android_epic_games_store_full.jpg",
    repo: "https://github.com/thebughuntress/flappy-bird",
  },
  {
    name: "Machine Learning / AI",
    description:
      "ML projects for practicing and learning different models and techniques",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png",
    repo: "https://github.com/thebughuntress/ml",
  },
  {
    name: "Django Blog Page",
    description:
      "Django-based web application, this project includes a blog where you can read posts.",
    img: "https://inspector.dev/wp-content/uploads/2023/04/logo-python-django.png",
    repo: "https://github.com/thebughuntress/my-django-site",
  },
  {
    name: "Homepage (antoniaalicefrey.com)",
    description:
      "This homepage, built with Vite, React, and JavaScript using Material UI. Deployed on Firebase.",
    img: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
    repo: "https://github.com/thebughuntress/homepage2",
  },
  {
    name: "Previous Homepage (Outdated)",
    description:
      "Homepage, built with Vite, React, and JavaScript using Material UI. Deployed on Firebase.",
    img: "https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-standard.svg",
    repo: "",
    url: "https://homepage-bdc65.web.app/"
  },
  {
    name: "Java Calculator-App",
    description:
      "Simple calculator application built with Java. It performs all the basic arithmetic operations.",
    img: "https://raw.githubusercontent.com/thebughuntress/calculator-app/main/images/calculator-app.png",
    repo: "https://github.com/thebughuntress/calculator-app",
  },
];

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
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1703155483443/e42a7be2-890a-4bd2-accf-306e53ccebbd.png",
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
    label: "LaTex",
    img: "https://www.latex-project.org/about/logos/latex-project-logo_288x288.svg",
  },
  {
    label: "Docker",
    img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
  },
  {
    label: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  },

  {
    label: "Kubernetes (CKAD)",
    img: "https://pbs.twimg.com/profile_images/511909265720614913/21_d3cvM_400x400.png",
  },
  {
    label: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
];

function Projects() {
  return (
    <SectionWrapper title="Projects" id="projects">
      <Typography variant="body1">
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
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        //sx={{justifyContent: "center"}}
      >
        {technologies.map((tech, index) => (
          <Chip
            sx={{
              //width: "120px",
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
                style={{ width: 20, height: "auto", marginRight: 2 }}
              />
            }
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          my: 2,
        }}
      >
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </Box>
    </SectionWrapper>
  );
}

export default Projects;
