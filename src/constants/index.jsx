import apiImg from "../assets/api.webp";
import companyProfile from "../assets/company-profile.webp";
import inventoryManagement from "../assets/inventory_management.webp";
import pointOfSales from "../assets/point-of-sales.webp";

import { RiJavaLine } from "@remixicon/react";

import {
    SiApachekafka,
    SiBootstrap,
    SiCss3,
    SiDocker,
    SiGo,
    SiHtml5,
    SiJavascript,
    SiLaravel,
    SiMongodb,
    SiMysql,
    SiPhp,
    SiPostgresql,
    SiReact,
    SiSpringboot,
    SiTailwindcss,
} from "react-icons/si";

export const NAVIGATION_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Work Experience", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export const PROFILE = {
    name: "Thoriq Aufar Nubli",
    role: "Full Stack Developer",
    subheading:
        "Motivated junior software engineer with a strong foundation in fullstack development. Eager to contribute to a dynamic team and enhance my skills as a software engineer.",
};

export const PROJECTS = [
    {
        id: 1,
        title: "Point of Sales Web Application",
        description:
            "A web-based point of sales application with user authentication, product management, and real-time sales tracking.",
        techStack: ["PHP", "Laravel", "Filament", "MySQL"],
        imgSrc: pointOfSales,
        link: "https://github.com/thoriqaufar/point-of-sales",
    },
    {
        id: 2,
        title: "Inventory Management Web Application",
        description:
            "A web-based inventory management app with authentication, role-based access, product tracking, and streamlined stock management.",
        techStack: ["PHP", "Laravel", "React", "MySQL", "MDB"],
        imgSrc: inventoryManagement,
        link: "https://github.com/thoriqaufar/inventory-management",
    },
    {
        id: 3,
        title: "Jago Bank API",
        description:
            "A secure RESTful API for Jago Bank, providing user authentication, transaction management, and real-time account balance retrieval to streamline banking operations.",
        techStack: ["Golang", "Gin", "MySQL", "JWT"],
        imgSrc: apiImg,
        link: "https://github.com/thoriqaufar/jago-bank-api",
    },
    {
        id: 4,
        title: "Company Profile",
        description:
            "A professional company profile showcasing the mission, values, and services, emphasizing a commitment to excellence and customer satisfaction in every project.",
        techStack: ["React", "Tailwind CSS"],
        imgSrc: companyProfile,
        link: "https://thoriqaufar.github.io/company-profile/",
    },
];

export const SKILLS = [
    {
        name: "HTML",
        icon: <SiHtml5 style={{ color: "#E34F26" }} />,
    },
    {
        name: "CSS",
        icon: <SiCss3 style={{ color: "#1572B6" }} />,
    },
    {
        name: "Bootstrap",
        icon: <SiBootstrap style={{ color: "#7952B3" }} />,
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss style={{ color: "#06B6D4" }} />,
    },
    {
        name: "JavaScript",
        icon: <SiJavascript style={{ color: "#F7DF1E" }} />,
    },
    {
        name: "React",
        icon: <SiReact style={{ color: "#61DAFB" }} />,
    },
    {
        name: "PHP",
        icon: <SiPhp style={{ color: "#777BB4" }} />,
    },
    {
        name: "Golang",
        icon: <SiGo style={{ color: "#00ADD8" }} />,
    },
    {
        name: "Java",
        icon: <RiJavaLine className="text-orange-600" />,
    },
    {
        name: "Laravel",
        icon: <SiLaravel style={{ color: "#FF2D20" }} />,
    },
    {
        name: "Spring Boot",
        icon: <SiSpringboot style={{ color: "#6DB33F" }} />,
    },
    {
        name: "MySQL",
        icon: <SiMysql style={{ color: "#4479A1" }} />,
    },
    {
        name: "PostgreSQL",
        icon: <SiPostgresql style={{ color: "#4169E1" }} />,
    },
    {
        name: "MongoDB",
        icon: <SiMongodb style={{ color: "#47A248" }} />,
    },
    {
        name: "Apache Kafka",
        icon: <SiApachekafka className="text-white" />,
    },
    {
        name: "Docker",
        icon: <SiDocker style={{ color: "#2496ED" }} />,
    },
];

export const EXPERIENCES = [
    {
        yearRange: "June - July 2023",
        role: "Full Stack Developer Intern",
        company: "Balai Monitor SFR Kelas I Medan",
        description:
            "Developed web applications using App Script, HTML, CSS, and Javascript. Collaborated with stakeholders to define project requirements and timelines.",
        techStack: ["App Script", "HTML", "CSS", "JavaScript"],
    },
];

export const EDUCATION = [
    {
        id: 1,
        degree: "Bachelor of Computer Science",
        institution: "Universitas Sumatera Utara",
        duration: "2020 - 2024",
        description:
            "Graduated with honors in Computer Science, focusing on algorithms, data structures, and software engineering. Experienced in various kinds of software development, such as web development, desktop-app development, and mobile-app development",
    },
    {
        id: 2,
        degree: "Google Data Analytics Professional Certification",
        institution: "Google",
        duration: "2024",
        description:
            "Earned a certification in Google Data Analytics, covering data analysis, visualization, and interpretation using tools like SQL, R, and Tableau.",
    },
];
