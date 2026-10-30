/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Centralized, verified information for Yajash Khamar.
 * Computer Engineering student at Lok Jagruti University, Ahmedabad.
 */

export const personalInfo = {
  // Personal brand / initials
  initials: "YK",
  fullName: "Yajash Khamar",
  shortName: "Yajash",
  eyebrow: "AVAILABLE FOR INTERNSHIPS & ENTRY ROLES",
  subEyebrow: "CE · SOFTWARE DEVELOPMENT",
  headlinePrefix: "Building digital experiences with ",
  headlineAccent: "purpose",
  tagline: "Computer Engineering Student",

  // Concise, honest student introduction
  bioIntro: "I'm a Computer Engineering student passionate about building practical web applications and exploring AI/ML. I enjoy turning ideas into useful digital products while continuously strengthening my technical knowledge and development skills.",
  bioSecondary: "Currently pursuing Computer Engineering with a focus on practical digital craft, clean frontend architecture, and robust full-stack logic.",

  // Geographic context & metadata
  metadata: {
    discipline: "Computer Engineering",
    location: "Ahmedabad, India",
    graduation: "Expected 2028",
  },

  // Professional portrait asset path
  portrait: {
    src: "/images/portrait.jpg",
    fallbackSrc: "/images/portrait-placeholder.svg",
    alt: "Portrait of Yajash Khamar",
  },

  // Verified contacts and external profiles
  contacts: {
    email: "yajashkhamar@gmail.com",
    github: "https://github.com/yajashkhamar-python",
    linkedin: "https://www.linkedin.com/in/yajashkhamar/",
    // Resume PDF location
    resumeUrl: "/resume/Yajash_Khamar_Resume.pdf",
    resumeFileName: "Yajash_Khamar_Resume.pdf",
    location: "Ahmedabad, Gujarat, IN",
  },
};

export const aboutDetails = {
  heading: "Driven by curiosity, grounded in fundamentals.",
  subheading: "A Computer Engineering student building practical software and exploring machine intelligence.",
  coreFocusAreas: [
    "Full-Stack Web Architectures & Interactive State",
    "Applied Machine Learning Exploration & Data Processing",
    "Clean Frontend Architecture & Typographic UI Craft"
  ],
  narrative: [
    "I am currently in my Bachelor of Engineering in Computer Engineering at Lok Jagruti University (LJU) in Ahmedabad. My journey began with an innate fascination for how lines of code translate into real-time tools that solve tangible problems.",
    "Rather than treating engineering purely as abstract theory, I treat it as an active craft: architecting web applications, experimenting with computer vision models, and exploring AI/ML principles through hands-on implementation.",
    "My focus is on writing clean, readable code, designing thoughtful user experiences, and continuously expanding my software development capabilities to build products that make a real difference."
  ]
};

export const engineeringApproach = {
  heading: "Turning ideas into useful digital experiences.",
  description: "I enjoy understanding a problem, exploring possible solutions, and building practical applications that make everyday tasks simpler. My approach combines continuous learning, thoughtful design, and hands-on development.",
  principles: [
    {
      number: "01",
      title: "Learn by Building",
      description: "I strengthen my understanding by creating practical projects, experimenting with technologies, and solving real development problems."
    },
    {
      number: "02",
      title: "Think Beyond the Interface",
      description: "I enjoy understanding how frontend experiences, backend logic, and data work together to create useful applications."
    },
    {
      number: "03",
      title: "Improve Through Iteration",
      description: "I believe good software takes refinement. I test ideas, identify problems, and keep improving the experience."
    }
  ]
};

export const technicalSkills = [
  {
    category: "Programming Languages",
    number: "01",
    description: "Core programming languages for software development, systems architecture, and algorithmic design.",
    skills: ["Python", "Java", "JavaScript"]
  },
  {
    category: "Frontend Development",
    number: "02",
    description: "Building responsive, modern, component-driven, and accessible user interfaces.",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend Development",
    number: "03",
    description: "Server-side architectures, RESTful APIs, and scalable web backend services.",
    skills: ["Node.js", "Express.js", "Django"]
  },
  {
    category: "Databases",
    number: "04",
    description: "Relational and document-oriented databases, query optimization, and schema design.",
    skills: ["SQL", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Tools & Platforms",
    number: "05",
    description: "Version control, development environments, build tooling, and cloud deployment platforms.",
    skills: ["Git", "GitHub", "Visual Studio Code", "Vite", "Vercel", "Render"]
  }
];

export const educationList = [
  {
    id: "degree",
    level: "Bachelor of Engineering (B.E.)",
    field: "Computer Engineering",
    institution: "Lok Jagruti University",
    location: "Ahmedabad, Gujarat",
    duration: "2024–2028 (Expected)",
    currentSemester: 5,
    description: "Core computer engineering curriculum encompassing data structures and algorithms, operating systems, database management systems, object-oriented software engineering, and computer networking.",
    performance: [
      {
        label: "Semester 3",
        score: "9.92",
        scale: "/ 10",
        type: "Semester SPI"
      },
      {
        label: "Semester 4",
        score: "9.48",
        scale: "/ 10",
        type: "Semester SPI"
      }
    ]
  },
  {
    id: "class-12",
    level: "Class 12 — Higher Secondary",
    field: "Science Stream (HSC)",
    institution: "A-One School",
    board: "Gujarat Secondary and Higher Secondary Education Board (GSEB)",
    passingYear: "2024",
    performance: [
      {
        label: "Overall Performance",
        score: "90.79",
        scale: "Percentile",
        type: "GSEB Board Examination"
      }
    ]
  },
  {
    id: "class-10",
    level: "Class 10 — Secondary",
    field: "Secondary School Certificate (SSC)",
    institution: "Amrit Jyoti School",
    board: "Gujarat Secondary and Higher Secondary Education Board (GSEB)",
    passingYear: "2022",
    performance: [
      {
        label: "Percentage",
        score: "84.83%",
        scale: "Marks: 509/600",
        type: "GSEB Board Examination"
      }
    ]
  }
];

export const educationDetails = educationList[0];

export const learningApproach = [
  {
    number: "01",
    title: "Learning by Building",
    description: "Translating theoretical computer engineering concepts into working full-stack applications with real interactive states."
  },
  {
    number: "02",
    title: "Clean Code & Usability",
    description: "Prioritizing maintainable code structure, responsive layouts, and intuitive user interfaces that communicate clearly."
  },
  {
    number: "03",
    title: "Applied Exploration",
    description: "Continuously broadening technical capabilities across modern JavaScript frameworks, backend systems, and applied AI/ML pipelines."
  }
];

export const selectedProjects = [
  {
    id: "heatshield-ai",
    number: "01",
    featured: true,
    tag: "Applied AI / Vision",
    name: "HeatShield AI",
    category: "Safety Monitoring Interface",
    description: "An AI-driven climate-health intelligence platform designed to protect individuals and communities during extreme heat conditions. It evaluates real-time environmental metrics such as temperature, humidity, and heat stress indicators to assess local thermal risk. The platform generates personalized heat safety protocols, custom hydration targets, and actionable guidance to help users navigate heat waves safely.",
    technologies: ["React", "Python", "Computer Vision (YOLO/OpenCV)", "REST APIs", "Modern CSS"],
    screenshot: "/images/projects/heatshield-ai.png",
    liveUrl: "https://heatshield-ai-sand.vercel.app/",
    sourceUrl: "https://github.com/yajashkhamar-python/HeatShieldAI",
    domain: "heatshield-ai-sand.vercel.app"
  },
  {
    id: "studypulse-ai",
    number: "02",
    featured: true,
    tag: "Productivity Platform",
    name: "StudyPulse AI",
    category: "Student Study Companion",
    description: "An AI-powered student productivity platform designed to help students organize their academic routines. Users can manage daily tasks, track exams, set study goals, maintain notes, and monitor their progress through an analytics dashboard. It also includes an AI study planner and Pomodoro timer to support better study planning and time management.",
    technologies: ["React", "Vite", "Node.js", "LocalStorage", "Modern CSS"],
    screenshot: "/images/projects/studypulse-ai.png",
    liveUrl: "https://study-project-jcpd-six.vercel.app/",
    sourceUrl: "https://github.com/yajashkhamar-python/Study-Project",
    domain: "study-project-jcpd-six.vercel.app"
  },
  {
    id: "globetrotter",
    number: "03",
    featured: false,
    tag: "Interactive Web App",
    name: "GlobeTrotter",
    category: "Geography Challenge Application",
    description: "A multi-city travel planning application that helps users organize their trips in one place. Users can create trips, add destinations, plan activities, manage travel dates, and organize their itineraries. It also includes budget tracking and calendar-based trip planning to make managing travel plans easier.",
    technologies: ["React", "JavaScript", "Vite", "Game State Logic", "Modern CSS"],
    screenshot: "/images/projects/globetrotter.png",
    liveUrl: "https://globe-trotter-bice.vercel.app/",
    sourceUrl: "https://github.com/yajashkhamar-python/GlobeTrotter",
    domain: "globe-trotter-bice.vercel.app"
  },
  {
    id: "skycast-analytics",
    number: "04",
    featured: false,
    tag: "Weather Dashboard",
    name: "SkyCast Analytics",
    category: "Data Visualization Web App",
    description: "An interactive weather analytics dashboard that provides real-time weather information and forecasts for different locations. Users can search for cities, explore current weather conditions, view forecast data, and analyze weather trends through interactive charts. It also provides weather insights, comfort indicators, and downloadable weather reports.",
    technologies: ["JavaScript", "React", "Open-Meteo API", "Chart Visualization", "CSS Grid"],
    screenshot: "/images/projects/skycast-analytics.png",
    liveUrl: "https://skycast-analytics-navy.vercel.app/",
    sourceUrl: "https://github.com/yajashkhamar-python/SkyCast-Analytics",
    domain: "skycast-analytics-navy.vercel.app"
  },
  {
    id: "shrine-consultancy",
    number: "05",
    featured: false,
    tag: "Client Web Presence",
    name: "Shrine Consultancy",
    category: "Advisory Web Presence",
    description: "A professional website developed for an accounting and business consultancy. It introduces the consultancy, presents its services and industry expertise, and helps visitors understand the business solutions offered. The website also provides dedicated information pages and a contact section for potential clients.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
    screenshot: "/images/projects/shrine-consultancy.png",
    liveUrl: "https://shrine-consultancy.vercel.app/",
    sourceUrl: "",
    domain: "shrine-consultancy.vercel.app"
  }
];
