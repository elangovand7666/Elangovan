const django = '/images/django.png';
const mysql = '/images/mysql.png';
const unity = '/images/unity.png';
const Ayurvedha = '/images/Ayurvedha.png';
const WaterTracker = '/images/WaterTracker.jpg';
const Bank = '/images/Bank.jpg';
const Association = '/images/Association.jpg';
const IEF = '/images/IEF.jpg';
const mentor_connect = '/images/metor_connect.png';
const hospital_management_system = '/images/hospital_management_system.png';
const AR_app = '/images/AR_App.jpeg';
const VR_game = '/images/VR_game.jpg';
const law_management_system = '/images/Law_management_system.png';
const Ayurveda_Website = '/images/Ayurveda_Website.jpg';
const Currency_convertion = '/images/Currency_convertion.jpg';


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

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Developement", icon: web },
  { title: "MERN Stack Developer", icon: mobile },
  { title: "Django Backend Developer", icon: backend },
  { title: "VR/AR Developer", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Django", icon: django },
  { name: "MongoDB", icon: mongodb },
  { name: "MySql", icon: mysql },
  { name: "git", icon: git },
  { name: "Unity", icon: unity },
];

const experiences = [
  {
    title: "Ayurveda Website",
    company_name: "React with Django Framework",
    icon: Ayurvedha,
    iconBg: "#383E56",
    date: "Jan 2025 - March 2025",
    points: [
      "The Ayurveda E-Commerce Website is a full-stack web application...",
    ],
  },
  {
    title: "Water Tracker",
    company_name: "MERN Stack",
    icon: WaterTracker,
    iconBg: "#383E56",
    date: "Sep 2024 - Feb 2025",
    points: [
      "🚀 A full-stack MERN project to help users monitor their daily water consumption...",
    ],
  },
  {
    title: "Internet Banking",
    company_name: "HTML and Django Framework",
    icon: Bank,
    iconBg: "#383E56",
    date: "Oct 2024 - Dec 2024",
    points: [
      "The Internet Banking System is a full-stack web application...",
    ],
  },
  {
    title: "VR Basketball Game",
    company_name: "Meta Oculus",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Dec 2024",
    points: [
      "Virtual Basketball Challenge: Step into the court...",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Joint_Secretary 2024-2025",
    name: "CSDA",
    designation: "Computer Science And Design",
    company: "Kongu Engineering College",
    image: Association,
  },
  {
    testimonial: "Newsletter_Member 2023-2024",
    name: "CSDA",
    designation: "Computer Science And Design",
    company: "Kongu Engineering College",
    image: Association,
  },
  {
    testimonial: "Gamethon 2024-2025",
    name: "IEF Club",
    designation: "I got 1st place in the event",
    company: "Kongu Engineering College",
    image: IEF,
  },
];

const projects = [
  {
    name: "Mentor Connect",
    description:
      "Mentor Connect simplifies the process of finding mentors by allowing users to search...",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "django", color: "green-text-gradient" },
      { name: "mongoDB", color: "pink-text-gradient" },
    ],
    image: mentor_connect,
    source_code_link: "https://github.com/elangovand7666/Mentor-Connect",
  },
  {
    name: "Hospital Management System",
    description:
      "This project is a Hospital Management System designed to streamline hospital operations...",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Django", color: "pink-text-gradient" },
      { name: "Mysql", color: "red-text-gradient" },
    ],
    image: hospital_management_system,
    source_code_link:
      "https://github.com/elangovand7666/Hospital-App-in-Django",
  },
  {
    name: "AR Application",
    description:
      "3D model furniture AR app using the Vuforia engine, focusing on markerless functionalities...",
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "c#", color: "green-text-gradient" },
      { name: "Vuforia", color: "pink-text-gradient" },
    ],
    image: AR_app,
    source_code_link: "https://github.com/elangovand7666/3D-furniture-AR-app",
  },
  {
    name: "VR Basketball Game",
    description:
      "Virtual Basketball Challenge: Step into the court with our immersive VR Basketball Game...",
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "c#", color: "green-text-gradient" },
      { name: "Meta Interaction SDK", color: "pink-text-gradient" },
    ],
    image: VR_game,
    source_code_link: "https://github.com/elangovand7666/VR-basketBall-Game",
  },
  {
    name: "Law Management System",
    description:
      "The Law Management System is a full-stack web application built using the MERN stack...",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: law_management_system,
    source_code_link: "https://github.com/elangovand7666/VR-basketBall-Game",
  },
  {
    name: "Ayurvedha Website",
    description:
      "The Ayurveda E-Commerce Website is a full-stack web application...",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: Ayurveda_Website,
    source_code_link: "https://github.com/elangovand7666/E-Commerce-Web",
  },
  {
    name: "Currency Convertion UDP",
    description:
      "A Django-based currency converter application using real-time exchange rates via API...",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "Currency API", color: "pink-text-gradient" },
    ],
    image: Currency_convertion,
    source_code_link:
      "https://github.com/elangovand7666/Currency-convertion-UDP",
  },
];

export { services, technologies, experiences, testimonials, projects };
