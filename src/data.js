import { Github, Linkedin, Mail, Code, Terminal, Database, Cpu, Globe, Video, Server, Cloud, PenTool, Layout, Box, Trophy } from "lucide-react";

export const profile = {
    name: "Deepak Kumar",
    role: "Software Developer | Full-Stack Enthusiast",
    location: "India",
    email: "deepakkumar@nitmanipur.ac.in",
    resumeUrl: "https://drive.google.com/file/d/1k1ZRaIWuT6tqgIoqgWIoJo51HjRbSGbP/view?usp=drive_link",
    social: {
        linkedin: "https://www.linkedin.com/in/deepak-kumar-34921b269/",
        github: "https://github.com/dk2430098",
        portfolio: "#",
    },
    about: "I’m Deepak Kumar, a final-year CSE student at NIT Manipur (CGPA: 8.30) passionate about building scalable software. With strong expertise in Data Structures, Algorithms, and Full-Stack Development, I’ve solved 1000+ DSA problems and built complex systems like IMeet (a real-time interview platform). My experience includes a research paper at IEEE CICT 2025, reaching the semi-finals in Flipkart GRiD, and developing production-grade APIs during my internship at Incubyte. Outside of coding, I stay disciplined through cricket and table tennis.",
};

export const skills = [
    {
        category: "Languages",
        icon: Code,
        items: [
            { name: "C / C++", level: 98 },
            { name: "JavaScript", level: 95 },
            { name: "Python", level: 90 },
            { name: "Java", level: 88 }
        ]
    },
    {
        category: "Frontend",
        icon: Layout,
        items: [
            { name: "HTML5 / CSS3", level: 98 },
            { name: "React.js", level: 95 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Redux", level: 90 },
            { name: "React Native", level: 85 }
        ]
    },
    {
        category: "Backend",
        icon: Server,
        items: [
            { name: "Node.js", level: 92 },
            { name: "Express.js", level: 92 },
            { name: "REST APIs", level: 96 },
            { name: "Auth (JWT/Clerk)", level: 92 }
        ]
    },
    {
        category: "Database",
        icon: Database,
        items: [
            { name: "MongoDB", level: 95 },
            { name: "MySQL", level: 92 },
            { name: "PostgreSQL", level: 90 }
        ]
    },
    {
        category: "Tools & Cloud",
        icon: Cloud,
        items: [
            { name: "Git / GitHub", level: 96 },
            { name: "Postman", level: 95 },
            { name: "Vercel / Render", level: 92 },
            { name: "Docker", level: 90 },
            { name: "AWS (Basics)", level: 85 }
        ]
    },
    {
        category: "Core CS",
        icon: Cpu,
        items: [
            { name: "Data Structures", level: 98 },
            { name: "Algorithms", level: 95 },
            { name: "OOPs", level: 95 },
            { name: "System Design", level: 90 }
        ]
    }
];

export const experience = [
    {
        company: "Incubyte",
        role: "Software Engineering Intern",
        duration: "June 2025 – Aug 2025",
        location: "Ahmedabad, Gujarat",
        description: [
            "Engineered a full-stack Sweet Shop Management System using TDD, executing 25+ Red–Green–Refactor cycles to drive reliability.",
            "Developed and optimized 10+ RESTful APIs with JWT authentication and persistent storage, achieving 95% test coverage.",
            "Built a responsive SPA interface and leveraged AI-assisted development to accelerate debugging and test generation by 30%.",
        ]
    },
    {
        company: "Smart Health Referral & Tracking System (Govt. of India)",
        role: "System Developer",
        duration: "Aug 2025 – Oct 2025",
        location: "Remote",
        description: [
            "Streamlined referral operations across 20+ tribal villages, cutting manual delays by 40% and accelerating patient movement through district healthcare channels.",
            "Built real-time ambulance telemetry and hospital status modules, issuing automated arrival alerts to 50+ ANM/ASHA personnel.",
            "Implemented secure Aadhaar/ABHA identity validation and architected the end-to-end emergency workflow engine, boosting reporting accuracy by 60%.",
        ]
    }
];

export const projects = [
    {
        title: "IMeet – Video Interview Platform",
        description: "Scalable platform supporting 500+ concurrent interviews with video/audio calls, screen sharing, and collaborative code editor. Implemented real-time sync with 99.9% uptime.",
        tech: ["Next.js", "Convex", "Clerk", "Stream", "WebRTC"],
        link: "https://i-meet-73tv-git-main-deepak-kumars-projects-fcc2a798.vercel.app",
        github: "https://github.com/dk2430098/IMeet"
    },
    {
        title: "Sweet Shop Management System",
        description: "Full-stack app for managing inventory, users, and orders. Supports customer browsing, admin inventory management, and TDD practices.",
        tech: ["React (Vite)", "Node.js", "Express", "MongoDB"],
        link: "https://sweet-shop-management-system-mse4.vercel.app/",
        github: "https://github.com/dk2430098/Sweet-Shop-Management-System"
    },
    {
        title: "StudentFeedback Portal",
        description: "High-throughput complaint platform supporting 1000+ monthly submissions. Features status workflow, closure proofs, and automated routing.",
        tech: ["Node.js", "Express", "MongoDB", "Cloud Storage"],
        link: "https://student-feedback-xjx1.onrender.com/",
        github: "https://github.com/dk2430098/student_feedback"
    },
    {
        title: "TruePic – AI Image Forensics",
        description: "End-to-end system for identifying authentic vs AI-generated images. Uses FFT/DCT for frequency analysis, texture descriptors, and pixel-level anomaly detection.",
        tech: ["React 18", "TypeScript", "Python", "TensorFlow/PyTorch", "OpenCV"],
        link: "https://true-pic-git-main-deepak-kumars-projects-fcc2a798.vercel.app/",
        github: "https://github.com/dk2430098/TruePic"
    },
    {
        title: "Airbnb Clone",
        description: "Full-stack replica of Airbnb allowing users to explore listings, view details, and manage properties. Features secure authentication and dynamic content rendering.",
        tech: ["Node.js", "Express", "MongoDB", "EJS"],
        link: "https://airbnb-colon.onrender.com/",
        github: "https://github.com/dk2430098/airbnb_colon"
    },
    {
        title: "AI-Assisted Quiz App",
        description: "Interactive knowledge quiz built for SDE assignment. Features AI-generated questions, retry logic, global state management, and personalized AI feedback.",
        tech: ["React", "TypeScript", "Vite", "Context API", "AI Service"],
        link: "https://quiz-2fzcgmqq1-deepak-kumars-projects-fcc2a798.vercel.app",
        github: "https://github.com/dk2430098/quiz"
    },
    {
        title: "Spam Detection App",
        description: "Full-stack app to classify messages as spam or legitimate. Integrates python-based ML logic with a clean web interface.",
        tech: ["React", "Python", "FastAPI/Flask", "Tailwind CSS"],
        link: "https://spam-detection-1f181s9p5-deepak-kumars-projects-fcc2a798.vercel.app",
        github: "https://github.com/dk2430098/spam_detection"
    },
    {
        title: "Simon Game",
        description: "Classic memory game clone where players repeat sequences of colors/sounds. Showcases DOM interaction and game logic.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        link: "https://simongame-8glo.onrender.com",
        github: "https://github.com/dk2430098/simongame"
    }
];

export const competitiveProfiles = [
    {
        platform: "LeetCode",
        url: "https://leetcode.com/u/mnaHgm4Sk4/",
        color: "#FFA116",
        description: "Solving challenging algorithmic problems",
        apiType: "leetcode",
        stats: { rating: "1800+" }
    },
    {
        platform: "Codeforces",
        url: "https://codeforces.com/profile/deepak.phulo",
        color: "#1F8ACB",
        description: "Competing in global contests",
        apiType: "codeforces",
        stats: { rating: "1500+" }
    },
    {
        platform: "CodeChef",
        url: "https://www.codechef.com/users/knot_wonder_24",
        color: "#5B4638",
        description: "Active competitive programmer",
        stats: { rating: "2000+", solved: "300+" }
    },
    {
        platform: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/profile/dk2432nn7?tab=activity",
        color: "#2F8D46",
        description: "Consistent problem solving practice",
        stats: { score: "1900+", solved: "500+" }
    }
];

export const achievements = [
    "Solved 1000+ DSA problems across coding platforms",
    "Published Research Paper at IEEE CICT 2025",
    "National Semi-Finalist in Flipkart GRiD",
    "Participated in ICPC and Smart India Hackathon"
];

export const certifications = [
    {
        title: "Amazon AWS Certification",
        description: "Certified in cloud fundamentals, covering AWS core services, architecture, and best practices.",
        link: "https://drive.google.com/file/d/1Tbd_jv4WVzTC82ZaOnInf1SjXzdDlvg9/view?usp=drive_link",
        icon: Cloud
    },
    {
        title: "Flipkart Grid – National Semi Finalist",
        description: "Recognized at the national level for problem-solving, innovation, and technical skills in one of India’s most competitive hackathons.",
        link: "https://drive.google.com/file/d/1yxzXos3iuxihhNBrYllc4yXlaldTnY3I/view?usp=drive_link",
        icon: Trophy
    },
    {
        title: "Google Certification",
        description: "Completed certified training focused on modern development practices, cloud fundamentals, and industry-standard tools.",
        link: "https://drive.google.com/file/d/1eodNjoH7xrUeFEA6Ve8MoVaNOo_esAge/view?usp=drive_link",
        icon: Globe
    },
    {
        title: "Microsoft Azure Fundamentals",
        description: "Demonstrates foundational knowledge of cloud concepts, Azure services, pricing models, and cloud security principles.",
        link: "https://drive.google.com/file/d/1UNbcRiHlyDnaSkBBGcjWOHoRJs_2Ih4y/view?usp=drive_link",
        icon: Cloud
    }
];

export const education = [
    {
        degree: "Bachelor of Technology in Computer Science and Engineering",
        institution: "National Institute of Technology, Manipur",
        period: "2022 – 2026",
        score: "CGPA: 8.30"
    },
    {
        degree: "Intermediate (Class XII)",
        institution: "L.S. College, Muzaffarpur (BSEB)",
        period: "2019 – 2021",
        score: "CGPA: 8.80"
    },
    {
        degree: "High School (Class X)",
        institution: "U.M.S Gangadharmpur, Sheohar (BSEB)",
        period: "2018 – 2019",
        score: "CGPA: 8.84"
    }
];
