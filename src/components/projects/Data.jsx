import Project2 from "../../assets/PriceTracker.png";
import Project3 from "../../assets/project3.webp";
import LMS from "../../assets/LMS.jpg";

export const projectsData = [
  {
    id: 1,
    image: LMS,
    title: "Learning Management",
    category: "A",
    tags: "Next, React, Tailwind, Prisma, MYSQL, Stripe, Mux",
  },
  {
    id: 2,
    image: Project2,
    title: "Price Tracker",
    category: "B",
    tags: "Next, Typescript, Tailwind, Axios, Cheerio",
    secTags: "Nodemailer, MongoDB",
  },
  {
    id: 3,
    image: Project3,
    title: "Project 3",
    category: "C",
    tags: "Next.js, Tailwind, Firebase",
  },
];

export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "A",
  },
  {
    name: "B",
  },
  {
    name: "C",
  },
];
