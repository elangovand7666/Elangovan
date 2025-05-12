import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

const django='/django.png'
const mysql='/mysql.png'
const unity='/unity.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developement",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Django Backend Developer",
    icon: backend,
  },
  {
    title: "VR/AR Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Unity",
    icon: unity,
  }
];

const Ayurvedha='/Ayurvedha.png'
const WaterTracker='/WaterTracker.jpg'
const Bank='/Bank.jpg'

const experiences = [
  {
    title: "Ayurveda Website",
    company_name: "React with Django Framework",
    icon: Ayurvedha,
    iconBg: "#383E56",
    date: "Jan 2025 - March 2025",
    points: [
      "The Ayurveda E-Commerce Website is a full-stack web application that offers a seamless platform for users to browse, purchase, and learn about Ayurvedic products. The website integrates modern technologies to enhance user experience, including AI-powered chatbot assistance, video consultations with Ayurvedic experts, and an interactive map for locating Ayurvedic stores.",
    ],
  },
  {
    title: "Water Tracker",
    company_name: "MERN Stack",
    icon: WaterTracker,
    iconBg: "#383E56",
    date: "Sep 2024 - Feb 2025",
    points: [
      "🚀 A full-stack MERN (MongoDB, Express.js, React.js, Node.js) project to help users monitor their daily water consumption based on their weight, age, and hydration needs.",
    ],
  },
  {
    title: "Internet Banking",
    company_name: "HTML and Django Framework",
    icon: Bank,
    iconBg: "#383E56",
    date: "Oct 2024 - Dec 2024",
    points: [
      "The Internet Banking System is a full-stack web application that allows users to manage their bank accounts online. It provides secure access to features such as account creation, deposits, withdrawals, fund transfers, and transaction history.",
    ],
  },
  {
    title: "VR Basketball Game",
    company_name: "Meta Oculus",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Dec 2024",
    points: [
      "Virtual Basketball Challenge : Step into the court with our immersive VR Basketball Game, built using the Meta XR Interaction SDK. Experience the thrill of shooting hoops, dribbling, and playing mini basketball challenges in a realistic virtual environment.",
    ],
  },
];

const Association='/Association.jpg'
const IEF='/IEF.jpg'

const testimonials = [
  {
    testimonial:
      "Joint_Secretary 2024-2025",
    name: "CSDA",
    designation: "Computer Science And Design",
    company: "Kongu Engineering College",
    image: Association,
  },
  {
    testimonial:
      "Newsletter_Member 2023-2024",
    name: "CSDA",
    designation: "Computer Science And Design",
    company: "Kongu Engineering College",
    image: Association,
  },
  {
    testimonial:
      "Gamethon 2024-2025",
    name: "IEF Club",
    designation: "I got 1st place in the event",
    company: "Kongu Engineering College",
    image: IEF,
  },
  
];

const mentor_connect='/metor_connect.png';
const hospital_management_system='/hospital_management_system.png';
const AR_app='/AR_app.jpeg';
const VR_game='/VR_game.jpg';
const law_management_system='/law_management_system.png';
const Ayurveda_Website='/Ayurveda_Website.jpg';
const Currency_convertion='/Currency_convertion.jpg';


const projects = [
  {
    name: "Mentor Connect",
    description:
      "Mentor Connect simplifies the process of finding mentors by allowing users to search by name or specific expertise areas. A filter button further refines search results based on location, years of experience, industry focus, or other relevant criteria, helping users quickly identify mentors who meet their needs.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: mentor_connect,
    source_code_link: "https://github.com/elangovand7666/Mentor-Connect",
  },
  {
    name: "Hospital Management System",
    description:
      "This project is a Hospital Management System designed to streamline hospital operations, particularly in managing patient admissions, discharges, billing, and tracking doctors visited. The system ensures efficient record-keeping and improves the overall patient experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "Mysql",
        color: "red-text-gradient",
      },
    ],
    image: hospital_management_system,
    source_code_link: "https://github.com/elangovand7666/Hospital-App-in-Django",
  },
  {
    name: "AR Application",
    description:
      "3D model furniture AR app using the Vuforia engine, focusing on markerless functionalities with rotation and scaling features",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "Vuforia",
        color: "pink-text-gradient",
      },
    ],
    image: AR_app,
    source_code_link: "https://github.com/elangovand7666/3D-furniture-AR-app",
  },
  {
    name: "VR Basketball Game",
    description:
      "Virtual Basketball Challenge : Step into the court with our immersive VR Basketball Game, built using the Meta XR Interaction SDK. Experience the thrill of shooting hoops, dribbling, and playing mini basketball challenges in a realistic virtual environment.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "Meta Interaction SDK",
        color: "pink-text-gradient",
      },
    ],
    image: VR_game,
    source_code_link: "https://github.com/elangovand7666/VR-basketBall-Game",
  },
  {
    name: "Law Management System",
    description:
      "The Law Management System is a full-stack web application built using the MERN stack to streamline and digitize the storage, tracking, and management of legal cases. It is designed for use by law firms, legal departments, and independent legal practitioners to manage their caseload efficiently and securely.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: law_management_system,
    source_code_link: "https://github.com/elangovand7666/VR-basketBall-Game",
  },
  {
    name: "Ayurvedha Website",
    description:
      "The Ayurveda E-Commerce Website is a full-stack web application that offers a seamless platform for users to browse, purchase, and learn about Ayurvedic products",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: Ayurveda_Website,
    source_code_link: "https://github.com/elangovand7666/E-Commerce-Web",
  },
  {
    name: "Currency Convertion UDP",
    description:
      "Currency Converter with API Integration A Django-based currency converter application that allows users to convert between different currencies using real-time exchange rates fetched from an external API.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Currency API",
        color: "pink-text-gradient",
      },
    ],
    image: Currency_convertion,
    source_code_link: "https://github.com/elangovand7666/Currency-convertion-UDP",
  },
];

export { services, technologies, experiences, testimonials, projects };
