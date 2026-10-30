# Yajash Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite** to showcase my work as a Computer Engineering student, including full-stack web applications, applied AI/ML projects, technical skills, academic background, and professional contact channels.

Designed with a clean, typography-focused aesthetic, structured layout hierarchy, and seamless client-side single-page routing for deep project case studies.

---

## 🌐 Live Demo

- **Live URL**: [https://yajash-portfolio.vercel.app/](https://yajash-portfolio.vercel.app/)
- **GitHub Repository**: [https://github.com/yajashkhamar-python/Yajash-Portfolio](https://github.com/yajashkhamar-python/Yajash-Portfolio)

---

## ✨ Features

- **Responsive Navigation**: Sticky top navigation bar with a live status dot, monogram brand mark, active section highlighting on scroll, and a mobile slide-out menu drawer.
- **Hero & Profile Showcase**: High-impact introduction highlighting computer engineering background, internship availability badge, direct resume download CTA, social links, and portrait presentation.
- **Featured Projects Grid**: Responsive two-column showcase displaying project cards styled in mock browser frames with direct links to live deployments, case studies, and GitHub source code.
- **Dedicated Project Detail Case Studies**: Client-side clean URL routing (`/projects/:projectId`) that provides in-depth technical breakdowns including problem/solution overviews, core architectural features, verified project tech stacks, interactive multi-screenshot galleries, and next/previous project navigation.
- **Screenshot Lightbox / Image Preview**: Interactive modal lightbox within project case studies allowing fullscreen inspection of application interfaces with keyboard escape-key handling and backdrop-click closing.
- **Technical Skills Categorization**: Five structured category rows (Programming Languages, Frontend, Backend, Databases, and Tools & Platforms) featuring official brand icon logos powered by Simple Icons and React Icons.
- **Academic Timeline (Education)**: Structured academic journey presenting Bachelor of Engineering in Computer Engineering at Lok Jagruti University (with semester SPI details) alongside Class 12 Higher Secondary and Class 10 Secondary achievements.
- **Direct Contact Hub**: Contact channel cards for direct email dispatch, LinkedIn networking, and GitHub exploration, complemented by a persistent footer and quick back-to-top button.
- **Resume Download**: One-click download button serving the verified PDF resume (`Yajash_Khamar_Resume.pdf`) stored in public assets.
- **Fully Responsive Architecture**: Fluid, mobile-first design system utilizing CSS Grid and Flexbox tailored across mobile, tablet, laptop, and ultra-wide desktop viewports.

---

## 🚀 Projects

The portfolio showcases five genuine projects spanning machine learning, climate safety, productivity, interactive web apps, and client consulting:

### 1. HeatShield AI
- **Tag**: Applied AI / Vision · Climate-Health Intelligence Platform
- **Description**: An AI-driven climate-health intelligence platform designed to protect individuals and communities during extreme heat conditions. It evaluates real-time environmental metrics such as temperature, humidity, and heat stress indicators to assess local thermal risk. The platform generates personalized heat safety protocols, custom hydration targets, and actionable guidance to help users navigate heat waves safely.
- **Technologies**: React, Python, Computer Vision (YOLO/OpenCV), REST APIs, Modern CSS
- **Live Demo**: [https://heatshield-ai-sand.vercel.app/](https://heatshield-ai-sand.vercel.app/)
- **GitHub**: [https://github.com/yajashkhamar-python/HeatShieldAI](https://github.com/yajashkhamar-python/HeatShieldAI)

### 2. StudyPulse AI
- **Tag**: Productivity Platform · Student Study Companion
- **Description**: An AI-powered student productivity platform designed to help students organize their academic routines. Users can manage daily tasks, track exams, set study goals, maintain notes, and monitor their progress through an analytics dashboard. It also includes an AI study planner and Pomodoro timer to support better study planning and time management.
- **Technologies**: React, Vite, Node.js, LocalStorage, Modern CSS
- **Live Demo**: [https://study-project-jcpd-six.vercel.app/](https://study-project-jcpd-six.vercel.app/)
- **GitHub**: [https://github.com/yajashkhamar-python/Study-Project](https://github.com/yajashkhamar-python/Study-Project)

### 3. GlobeTrotter
- **Tag**: Interactive Web App · Geography Challenge Application
- **Description**: A multi-city travel planning application that helps users organize their trips in one place. Users can create trips, add destinations, plan activities, manage travel dates, and organize their itineraries. It also includes budget tracking and calendar-based trip planning to make managing travel plans easier.
- **Technologies**: React, JavaScript, Vite, Game State Logic, Modern CSS
- **Live Demo**: [https://globe-trotter-bice.vercel.app/](https://globe-trotter-bice.vercel.app/)
- **GitHub**: [https://github.com/yajashkhamar-python/GlobeTrotter](https://github.com/yajashkhamar-python/GlobeTrotter)

### 4. SkyCast Analytics
- **Tag**: Weather Dashboard · Data Visualization Web App
- **Description**: An interactive weather analytics dashboard that provides real-time weather information and forecasts for different locations. Users can search for cities, explore current weather conditions, view forecast data, and analyze weather trends through interactive charts. It also provides weather insights, comfort indicators, and downloadable weather reports.
- **Technologies**: JavaScript, React, Open-Meteo API, Chart Visualization, CSS Grid
- **Live Demo**: [https://skycast-analytics-navy.vercel.app/](https://skycast-analytics-navy.vercel.app/)
- **GitHub**: [https://github.com/yajashkhamar-python/SkyCast-Analytics](https://github.com/yajashkhamar-python/SkyCast-Analytics)

### 5. Shrine Consultancy
- **Tag**: Client Web Presence · Advisory Web Presence
- **Description**: A professional website developed for an accounting and business consultancy. It introduces the consultancy, presents its services and industry expertise, and helps visitors understand the business solutions offered. The website also provides dedicated information pages and a contact section for potential clients.
- **Technologies**: HTML5, CSS3, JavaScript, React, Responsive Design
- **Live Demo**: [https://shrine-consultancy.vercel.app/](https://shrine-consultancy.vercel.app/)
- **GitHub**: *Private Client Repository (Source code unavailable publicly)*

---

## 🛠️ Tech Stack

### Frontend
- **React (v19)**: Component-based UI architecture and state management
- **React DOM (v19)**: Virtual DOM rendering engine
- **React Icons (`react-icons`)**: Lightweight iconography for navigation, social links, and UI states
- **Simple Icons (`simple-icons`)**: Official brand SVG logos for the technical skills showcase
- **Custom Client Router**: Lightweight History API-driven SPA routing (`window.history.pushState` and `popstate`) supporting clean deep links (`/projects/:projectId`) without external router overhead

### Styling
- **Vanilla CSS (Modern CSS3)**: Modular design system, CSS custom properties (variables), Flexbox, CSS Grid layouts, glassmorphism, responsive media queries, and fluid typography
- **Google Fonts**: Space Grotesk (display headings), Hanken Grotesk (body typography), and JetBrains Mono (technical metadata)

### Development Tools
- **Vite (v8)**: Fast build tool and frontend development server with Hot Module Replacement (HMR)
- **@vitejs/plugin-react (v6)**: Official React support plugin for Vite leveraging Oxc compiler tooling
- **Oxlint**: Ultra-fast, lightweight JavaScript and JSX linter

### Deployment
- **Vercel**: Optimized cloud hosting platform for Vite single-page applications

---

## 💻 Installation and Local Setup

### Prerequisites
- **Node.js**: `v18.x` or higher (tested on Node.js `v20+` / `v24+`)
- **npm**: `v9.x` or higher

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yajashkhamar-python/Yajash-Portfolio.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd Yajash-Portfolio
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Open your browser and navigate to the local URL printed in the terminal (typically `http://localhost:5173`).

---

## 📦 Production Build

To compile and bundle the portfolio for production:

```bash
npm run build
```

This compiles production assets and outputs them to the `dist/` directory.

To locally preview the generated production build before deploying:

```bash
npm run preview
```

---

## 📁 Project Structure

```text
Yajash-Portfolio/
├── public/                       # Static public assets served directly
│   ├── favicon.svg               # Portfolio browser favicon
│   ├── icons.svg                 # SVG sprite and iconography
│   ├── images/                   # Portrait and project media assets
│   │   ├── portrait.jpg          # Profile photo
│   │   └── projects/             # Screenshots and preview captures for project case studies
│   └── resume/                   # Downloadable documents
│       └── Yajash_Khamar_Resume.pdf
├── src/                          # Application source code
│   ├── assets/                   # Internal bundled assets and SVGs
│   ├── components/               # Modular React UI components
│   │   ├── About.jsx             # Personal narrative, education details, and focus areas
│   │   ├── Contact.jsx           # Direct contact channels, email, LinkedIn, and footer
│   │   ├── Engineering.jsx       # Engineering philosophy and approach highlights
│   │   ├── Experience.jsx        # Academic journey and education timeline
│   │   ├── Header.jsx            # Responsive navigation header and mobile drawer
│   │   ├── Hero.jsx              # Hero introduction, CTA buttons, and portrait card
│   │   ├── ProjectDetail.jsx     # Dedicated project case study page with lightbox preview
│   │   ├── Projects.jsx          # Selected projects grid with browser-frame mockups
│   │   ├── Skills.jsx            # Categorized skills matrix with brand logos
│   │   └── TechLogo.jsx          # SVG brand icon resolver component
│   ├── data/                     # Centralized content and verified data stores
│   │   ├── portfolioData.js      # Personal details, projects, skills, education, and links
│   │   └── projectDetailsData.js # Extended case study data, screenshots, and breakdowns
│   ├── App.css                   # Global styling, design system tokens, and component classes
│   ├── App.jsx                   # Root application component with client-side URL routing
│   ├── index.css                 # Base resets, typography, and utility styles
│   └── main.jsx                  # Application entry point mounting React root
├── index.html                    # HTML shell, SEO metadata, and Google Fonts preconnects
├── package.json                  # Dependencies, project metadata, and npm scripts
├── vite.config.js                # Vite build and plugin configuration
└── .oxlintrc.json                # Oxlint code linting rules
```

---

## 🚀 Deployment

This project is configured for deployment on [Vercel](https://vercel.com/):

1. **Push your code to GitHub**:
   Ensure your latest commits are pushed to the [Yajash-Portfolio](https://github.com/yajashkhamar-python/Yajash-Portfolio) repository.

2. **Import into Vercel**:
   - Log in to your [Vercel Dashboard](https://vercel.com/).
   - Click **Add New...** > **Project**.
   - Select and import the `Yajash-Portfolio` repository.

3. **Configure Project Settings**:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**:
   - Click **Deploy**. Vercel will build and assign a production URL.
   - Any future commits pushed to the `main` branch on GitHub will trigger automatic preview and production deployments.

---

## 👤 Author

**Yajash Khamar**  
*Computer Engineering Student at Lok Jagruti University, Ahmedabad*

- **GitHub**: [https://github.com/yajashkhamar-python](https://github.com/yajashkhamar-python)
- **LinkedIn**: [https://www.linkedin.com/in/yajashkhamar/](https://www.linkedin.com/in/yajashkhamar/)
- **Email**: [yajashkhamar@gmail.com](mailto:yajashkhamar@gmail.com)
- **Portfolio**: [https://yajash-portfolio.vercel.app/](https://yajash-portfolio.vercel.app/)
