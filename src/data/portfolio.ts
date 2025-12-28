import { 
  Code2, 
  Database, 
  Globe, 
  Layout, 
  Server, 
  Shield, 
  Smartphone, 
  Terminal,
  Cpu,
  Brain
} from 'lucide-react';

export const personalInfo = {
  name: "Hayelom Hailay Tsadik",
  roles: [
    "Full Stack Developer",
    "System Designer",
    "Problem Solver",
    "Project Manager",
    "Prompt Engineer"
  ],
  tagline: "Building scalable, secure, and community-driven digital solutions.",
  about: "I am a passionate full-stack developer and system designer focused on building scalable, secure, and community-driven digital solutions. I combine technical expertise, research, and leadership to solve real-world problems through technology.",
  email: "contact@hayelom.com", // Placeholder, user didn't provide specific email
  socials: {
    telegram: "https://t.me/hayelom", // Placeholder
    linkedin: "https://linkedin.com/in/hayelom", // Placeholder
    twitter: "https://twitter.com/hayelom", // Placeholder
    github: "https://github.com/hayelom", // Placeholder
  }
};

export const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["HTML", "CSS", "Bootstrap", "React", "Flutter"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS"]
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MongoDB"]
  },
  {
    category: "Programming",
    icon: Code2,
    items: ["JavaScript", "Python", "Dart"]
  },
  {
    category: "Dev Tools",
    icon: Terminal,
    items: ["Git", "GitHub"]
  },
  {
    category: "Networking & Security",
    icon: Shield,
    items: ["Cisco (CCNA)", "Cybersecurity", "System Design"]
  },
  {
    category: "Emerging Tech",
    icon: Brain,
    items: ["Prompt Engineering"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Ride Application System",
    description: "A comprehensive ride-sharing platform connecting drivers and passengers.",
    problem: "Lack of reliable and efficient transportation options in local areas.",
    tech: ["Flutter", "Firebase"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Crime Detection & Public Security System",
    description: "Research-based IT solution for enhancing public safety through automated crime detection.",
    problem: "Rising crime rates and delayed response times from law enforcement.",
    tech: ["Python", "AI/ML", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Freelancing & Collaboration Platform",
    description: "A platform for freelancers to find work and collaborate on projects.",
    problem: "Difficulty for local talent to find global opportunities and collaborate effectively.",
    tech: ["NestJS", "MongoDB", "React"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    title: "Infinity Booking System",
    description: "A versatile booking system for various service industries.",
    problem: "Inefficient manual booking processes leading to errors and double bookings.",
    tech: ["Flutter", "Vue.js", "NestJS"],
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1000"
  }
];

export const education = [
  {
    degree: "BSc in Information Technology",
    institution: "Mekelle University",
    year: "Expected June 2026",
    description: "Focusing on software engineering, system design, and network security."
  },
  {
    degree: "Cisco Certified Network Associate (CCNA)",
    institution: "Cisco",
    year: "Certified",
    description: "Network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability."
  }
];
