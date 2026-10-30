/**
 * EXTENDED PROJECT DETAILS FOR DEDICATED PROJECT CASE STUDY PAGES
 * 
 * Each project contains verified functionality, actual problems solved,
 * implemented features, verified project-specific tech stack with authentic logos,
 * genuine multi-screenshot gallery, development takeaways, and external links.
 */

export const projectDetailsMap = {
  "heatshield-ai": {
    id: "heatshield-ai",
    number: "01",
    tag: "Applied AI / Climate Health",
    name: "HeatShield AI",
    category: "Climate-Health Intelligence Platform",
    oneLiner: "An AI-powered climate-health platform assessing localized extreme heat stress and generating personalized safety protocols and hydration guidance.",
    heroScreenshot: "/images/projects/heatshield-ai/dashboard.png",
    liveUrl: "https://heatshield-ai-sand.vercel.app/",
    sourceUrl: "https://github.com/yajashkhamar-python/HeatShieldAI",
    domain: "heatshield-ai-sand.vercel.app",
    overview: {
      problem: "Rising urban temperatures and prolonged heat waves pose severe health hazards, especially for vulnerable households lacking adequate cooling resources or awareness of wet-bulb temperature risks.",
      solution: "HeatShield AI integrates environmental indicators (temperature, humidity, air quality, solar intensity) with personal household parameters to assess localized thermal danger and produce customized safety and hydration action plans.",
      users: "At-risk households, outdoor workers, community health organizers, and municipal teams seeking tailored heat mitigation guidance."
    },
    features: [
      {
        title: "Real-Time Thermal Risk Assessment",
        description: "Evaluates live ambient temperature, relative humidity, and heat stress indices to classify danger into clear advisory tiers."
      },
      {
        title: "Geospatial Heat Island Mapping",
        description: "Interactive visual map displaying satellite surface temperature distribution, thermal anomalies, and urban hotspot concentrations."
      },
      {
        title: "Personalized Safety & Hydration Guidance",
        description: "Calculates tailored fluid intake targets, safe outdoor exposure windows, and custom cooling protocols based on personal vulnerability."
      },
      {
        title: "Atmospheric Telemetry & Analytics",
        description: "Tracks diurnal temperature fluctuations, solar radiation levels, and humidity trends over historical and forecasted timelines."
      },
      {
        title: "Cooling Resource Directory & Emergency Protocols",
        description: "Surfaces actionable information on municipal cooling shelters, medical symptoms of heat stroke, and prompt triage procedures."
      },
      {
        title: "Incident Logging & Risk Reports",
        description: "Generates structured incident summaries and downloadable thermal risk reports for community planners and family units."
      }
    ],
    technologies: [
      { name: "React", role: "Component architecture, interactive hazard dashboard & dynamic state" },
      { name: "Python", role: "Environmental risk classification algorithms & telemetry data pipelines" },
      { name: "JavaScript", role: "Client-side telemetry parsing, geospatial transforms & UI reactivity" },
      { name: "Tailwind CSS", role: "Utility styling, high-contrast alert badges & responsive viewport layout" }
    ],
    screenshots: [
      {
        src: "/images/projects/heatshield-ai/dashboard.png",
        caption: "Central HeatShield AI risk dashboard featuring localized temperature metrics and alert categories"
      },
      {
        src: "/images/projects/heatshield-ai/heat-map.png",
        caption: "Geospatial urban heat map visualizing satellite surface temperatures and neighborhood risk zones"
      },
      {
        src: "/images/projects/heatshield-ai/analytics.png",
        caption: "Atmospheric telemetry view displaying multi-variable thermal curves and diurnal exposure patterns"
      },
      {
        src: "/images/projects/heatshield-ai/recommendations.png",
        caption: "Personalized hydration guidelines and vulnerability-specific cooling action recommendations"
      },
      {
        src: "/images/projects/heatshield-ai/home-overview.png",
        caption: "Landing overview introducing climate-health assessment methodology and core capabilities"
      },
      {
        src: "/images/projects/heatshield-ai/reports.png",
        caption: "Thermal incident reporting interface with structured logging and exported metrics"
      }
    ],
    learnings: [
      "Translating complex multi-factor environmental indices (humidity, wet-bulb temp, solar exposure) into intuitive, actionable risk categories.",
      "Formulating rules-based fallback logic so safety recommendations remain accessible even when external meteorological services fluctuate.",
      "Designing accessible, high-contrast alert hierarchies that communicate urgency clearly without causing unnecessary alarm."
    ]
  },

  "studypulse-ai": {
    id: "studypulse-ai",
    number: "02",
    tag: "Productivity Platform",
    name: "StudyPulse AI",
    category: "Student Study Companion",
    oneLiner: "An AI-enhanced academic productivity application designed to organize course tasks, exam dates, study goals, and focused study intervals.",
    heroScreenshot: "/images/projects/studypulse-ai/dashboard.png",
    liveUrl: "https://study-project-jcpd-six.vercel.app/",
    sourceUrl: "https://github.com/yajashkhamar-python/Study-Project",
    domain: "study-project-jcpd-six.vercel.app",
    overview: {
      problem: "University students frequently struggle with managing multiple assignment deadlines, exam preparations, and maintaining consistent study habits across semesters.",
      solution: "StudyPulse AI offers a unified dashboard combining daily task management, examination tracking, target-setting, structured study session timers, and an AI study assistance planner to help students stay organized.",
      users: "Students and lifelong learners looking to balance multiple subjects, schedule structured revision sessions, and monitor academic progress."
    },
    features: [
      {
        title: "Intelligent Student Dashboard",
        description: "Unified overview showcasing daily study streaks, pending assignments, countdown to upcoming examinations, and quick action shortcuts."
      },
      {
        title: "Task & Assignment Management",
        description: "Log, filter, and prioritize coursework deliverables by subject, due date, and urgency with real-time status transitions."
      },
      {
        title: "Examination Countdown & Scheduling",
        description: "Keep critical midterms and finals front-and-center with automated day counters, subject categorization, and prep milestones."
      },
      {
        title: "Integrated Focus Center & Pomodoro Timer",
        description: "Structured 25-minute deep-work intervals with customizable breaks, interval tracking, and distraction-free audio cues."
      },
      {
        title: "AI Study Planner & Revision Strategies",
        description: "Generates tailored revision roadmaps based on syllabus topics, days remaining, and estimated study difficulty."
      },
      {
        title: "Academic Notes & Schedule Calendar",
        description: "Organize subject-specific revision notes and review monthly study events on an integrated interactive calendar."
      }
    ],
    technologies: [
      { name: "React", role: "Stateful component hierarchy, interactive tab navigation & dynamic forms" },
      { name: "Node.js", role: "REST backend architecture for authentication, study stats & data persistence" },
      { name: "JavaScript", role: "Client-side interval timer engines, state stores & async API integrations" },
      { name: "Tailwind CSS", role: "Glassmorphism styling, clean dark/light mode tokens & responsive grid layout" }
    ],
    screenshots: [
      {
        src: "/images/projects/studypulse-ai/dashboard.png",
        caption: "Main student dashboard showing current streak, task counts, AI planner banner, and exam alerts"
      },
      {
        src: "/images/projects/studypulse-ai/tasks.png",
        caption: "Task management interface with subject filtering, priority tags, and deadline tracking"
      },
      {
        src: "/images/projects/studypulse-ai/exams.png",
        caption: "Upcoming examinations tracker displaying days remaining, syllabus coverage, and subject breakdown"
      },
      {
        src: "/images/projects/studypulse-ai/focus-timer.png",
        caption: "Focus Center Pomodoro interface providing structured interval timers and session tracking"
      },
      {
        src: "/images/projects/studypulse-ai/ai-planner.png",
        caption: "AI Study Planner tool generating personalized revision timelines for approaching exams"
      },
      {
        src: "/images/projects/studypulse-ai/notes.png",
        caption: "Course revision notes workspace organized by subject with rich text preview and filtering"
      }
    ],
    learnings: [
      "Building interval-based Pomodoro timer logic with persistent background tracking and tab synchronization in React.",
      "Implementing JWT token authentication flows with protected route guards and automatic session validation.",
      "Designing an uncluttered, high-contrast dashboard layout that minimizes cognitive load during intense study sessions."
    ]
  },

  "globetrotter": {
    id: "globetrotter",
    number: "03",
    tag: "Interactive Web App",
    name: "GlobeTrotter",
    category: "Travel Planning Application",
    oneLiner: "A multi-city travel planning platform to organize itineraries, destinations, activities, and trip budgets in one central workspace.",
    heroScreenshot: "/images/projects/globetrotter/dashboard.png",
    liveUrl: "https://globe-trotter-bice.vercel.app/",
    sourceUrl: "https://github.com/yajashkhamar-python/GlobeTrotter",
    domain: "globe-trotter-bice.vercel.app",
    overview: {
      problem: "Planning vacations across multiple cities often forces travelers to juggle disparate notes, spreadsheets, flight timings, and activity bookings, leading to fragmented itineraries and overlooked costs.",
      solution: "GlobeTrotter consolidates trip organization into a streamlined web interface. Users can structure multi-destination journeys, map daily schedules, track expense budgets, and view trips chronologically.",
      users: "Independent travelers, students, and groups coordinating multi-leg holidays who require a clear, centralized itinerary tracker."
    },
    features: [
      {
        title: "Authenticated User Dashboard",
        description: "Personalized travel workspace showcasing active itineraries, destination counts, planned activities, and quick trip creation triggers."
      },
      {
        title: "Curated Destination Discovery",
        description: "Interactive exploration interface featuring global destinations, regional highlights, and travel inspiration cards."
      },
      {
        title: "Day-by-Day Itinerary Planner",
        description: "Organize sightseeing stops, transit connections, and reservation times chronologically with interactive schedule tabs."
      },
      {
        title: "Interactive Travel Calendar",
        description: "Comprehensive monthly calendar view plotting scheduled trip milestones, transit departures, and daily plans."
      },
      {
        title: "Budget Planning & Expense Tracking",
        description: "Monitor planned budgets against incurred expenses with categorical breakdowns across lodging, transport, dining, and activities."
      },
      {
        title: "Saved Trips & Favorite Places",
        description: "Curated bookmarks repository storing bucket-list destinations, recommended spots, and custom travel collections."
      }
    ],
    technologies: [
      { name: "React", role: "Component hierarchy, dynamic authenticated routes & state management" },
      { name: "Node.js", role: "Backend runtime executing REST API routes & session authentication" },
      { name: "Express.js", role: "Server routing framework handling user auth, trip models & notifications" },
      { name: "PostgreSQL", role: "Relational database persisting users, trips, destinations, and activities" },
      { name: "JavaScript", role: "Client and server business logic, budget computations & API handlers" },
      { name: "Leaflet", role: "Interactive mapping & geolocation visualization across travel routes" }
    ],
    screenshots: [
      {
        src: "/images/projects/globetrotter/dashboard.png",
        caption: "Authenticated user dashboard showing personal travel stats, active trips, and quick action shortcuts"
      },
      {
        src: "/images/projects/globetrotter/trip-details.png",
        caption: "Detailed trip itinerary view with day-by-day schedules, destination details, and activity cards"
      },
      {
        src: "/images/projects/globetrotter/explore-destinations.png",
        caption: "Explore destinations catalog featuring worldwide travel spots, country summaries, and highlights"
      },
      {
        src: "/images/projects/globetrotter/create-trip.png",
        caption: "Interactive trip planning wizard for configuring dates, travel styles, and destination stops"
      },
      {
        src: "/images/projects/globetrotter/calendar-view.png",
        caption: "Travel calendar view plotting multi-day trip timelines and scheduled destination events"
      },
      {
        src: "/images/projects/globetrotter/budget-tracker.png",
        caption: "Comprehensive budget tracker showing planned allocations, currency conversions, and expenditures"
      },
      {
        src: "/images/projects/globetrotter/saved-trips.png",
        caption: "Saved destinations collection with bookmarked places, travel notes, and wishlist items"
      }
    ],
    learnings: [
      "Structuring relational PostgreSQL database schemas with tables for users, trips, destinations, activities, and budget items.",
      "Implementing JWT bearer token authentication and session persistence across client-side React routes.",
      "Building responsive multi-column trip timelines and interactive map integrations with Leaflet."
    ]
  },

  "skycast-analytics": {
    id: "skycast-analytics",
    number: "04",
    tag: "Weather Dashboard",
    name: "SkyCast Analytics",
    category: "Data Visualization Web App",
    oneLiner: "An interactive meteorological analytics dashboard delivering real-time weather metrics, multi-day forecasts, and atmospheric trend charts.",
    heroScreenshot: "/images/projects/skycast-analytics/weather-dashboard.png",
    liveUrl: "https://skycast-analytics-navy.vercel.app/",
    sourceUrl: "https://github.com/yajashkhamar-python/SkyCast-Analytics",
    domain: "skycast-analytics-navy.vercel.app",
    overview: {
      problem: "Standard weather apps often show isolated temperature numbers without context regarding humidity, UV exposure, barometric pressure shifts, or visual trend comparisons over time.",
      solution: "SkyCast Analytics fetches open meteorological data and presents current conditions, hourly trajectories, comfort indicators, and interactive trend charts in an analytical visual dashboard.",
      users: "Outdoor professionals, travelers, and weather enthusiasts who need detailed atmospheric readings and downloadable summary reports."
    },
    features: [
      {
        title: "City Search & Live Autocomplete",
        description: "Fast global city lookup with real-time dropdown suggestions and geocoded coordinate resolution."
      },
      {
        title: "Atmospheric Telemetry Dashboard",
        description: "Real-time metrics for temperature, feels-like index, relative humidity, wind speed, barometric pressure, and UV index."
      },
      {
        title: "7-Day Meteorological Forecast",
        description: "Extended outlook highlighting expected daily conditions, precipitation probability, and high/low temperature spreads."
      },
      {
        title: "Interactive Weather Trend Charts",
        description: "Dynamic curve charts visualizing hourly temperature trajectories, dew point variations, and atmospheric pressure gradients."
      },
      {
        title: "Analytics & Atmospheric Breakdown",
        description: "Dedicated analytics view presenting air comfort evaluations, visibility metrics, and historical trend comparisons."
      },
      {
        title: "Downloadable Weather Reports",
        description: "Client-side PDF report generator producing structured, exportable weather summaries for outdoor planning."
      }
    ],
    technologies: [
      { name: "HTML5", role: "Semantic layout structure, search containers & data visualization wrappers" },
      { name: "CSS3", role: "Glassmorphism styling, responsive dashboard grid system & custom dark/light theme" },
      { name: "JavaScript", role: "Vanilla asynchronous data fetching, geocoding & DOM manipulation" },
      { name: "Chart.js", role: "Interactive meteorological trend charts rendering hourly curves and telemetry" },
      { name: "Open-Meteo API", role: "Real-time open meteorological API delivering weather telemetry and forecast models" }
    ],
    screenshots: [
      {
        src: "/images/projects/skycast-analytics/weather-dashboard.png",
        caption: "Primary weather dashboard displaying real-time atmospheric metrics, current temperature, and conditions"
      },
      {
        src: "/images/projects/skycast-analytics/city-search-suggestions.png",
        caption: "Global location search interface with instant autocomplete suggestions and location matching"
      },
      {
        src: "/images/projects/skycast-analytics/seven-day-forecast.png",
        caption: "Extended 7-day meteorological forecast highlighting daily condition icons and temperature ranges"
      },
      {
        src: "/images/projects/skycast-analytics/weather-charts.png",
        caption: "Dynamic Chart.js data visualization plotting temperature trends and hourly atmospheric curves"
      },
      {
        src: "/images/projects/skycast-analytics/analytics-breakdown.png",
        caption: "In-depth atmospheric analytics breakdown covering humidity, dew points, wind speeds, and UV ratings"
      },
      {
        src: "/images/projects/skycast-analytics/report-export.png",
        caption: "Download report action panel allowing users to export structured meteorological summary documents"
      }
    ],
    learnings: [
      "Integrating the Open-Meteo REST API and parsing multi-variable JSON feeds into structured time-series arrays.",
      "Configuring interactive Chart.js line and area charts with smooth spline curves and responsive canvas scaling.",
      "Implementing custom dual-theme toggle (light & dark mode) and client-side PDF document generation."
    ]
  },

  "shrine-consultancy": {
    id: "shrine-consultancy",
    number: "05",
    tag: "Corporate Advisory",
    name: "Shrine Consultancy",
    category: "Client Web Presence",
    oneLiner: "A clean, modern corporate website developed for an accounting and business consultancy to showcase services, industry domains, and client inquiries.",
    heroScreenshot: "/images/projects/shrine-consultancy/about-page.png",
    liveUrl: "https://shrine-consultancy.vercel.app/",
    sourceUrl: "", // Private client repository - no public repo exists
    domain: "shrine-consultancy.vercel.app",
    overview: {
      problem: "Growing professional consultancies require a credible, accessible digital presence to present their advisory scope, communicate domain expertise, and convert inbound client inquiries.",
      solution: "The Shrine Consultancy website delivers an authoritative, beautifully structured web presence highlighting accounting services, business advisory solutions, and frictionless contact touchpoints.",
      users: "Business owners, entrepreneurs, and corporate clients seeking tax planning, auditing, statutory compliance, and strategic advisory services."
    },
    features: [
      {
        title: "Company Heritage & Leadership (About Page)",
        description: "Authoritative firm background presenting founding principles, professional experience, and advisory mission."
      },
      {
        title: "Comprehensive Practice Areas (Services Page)",
        description: "Structured service catalog covering statutory auditing, tax planning, GST compliance, and corporate finance."
      },
      {
        title: "Industry Domain Specializations (Industries Page)",
        description: "Sector-specific advisory breakdowns for manufacturing, retail, technology, logistics, and professional services."
      },
      {
        title: "Strategic Value Proposition (Why Shrine Page)",
        description: "Detailed firm differentiators highlighting personalized service, compliance track record, and senior advisory attention."
      },
      {
        title: "Direct Client Inquiry & Contact (Contact Page)",
        description: "Frictionless inquiry intake with direct contact channels, office location coordinates, and consultation forms."
      },
      {
        title: "Practice Overview & Advisory Highlights",
        description: "Visual practice cards detailing accounting, audit, tax solutions, and advisory engagement pathways."
      }
    ],
    technologies: [
      { name: "React", role: "Component modularity, multi-page client-side routing & dynamic layout" },
      { name: "JavaScript", role: "Client interactivity, form handling & smooth page transitions" },
      { name: "Vite", role: "High-performance frontend build pipeline and fast development server" },
      { name: "HTML5", role: "Semantic document architecture, accessible markup & search engine optimization" },
      { name: "CSS3", role: "Custom typography, corporate styling, responsive grid & card layouts" }
    ],
    screenshots: [
      {
        src: "/images/projects/shrine-consultancy/about-page.png",
        caption: "About page detailing firm background, leadership experience, and corporate advisory principles"
      },
      {
        src: "/images/projects/shrine-consultancy/services-page.png",
        caption: "Services page cataloging accounting, auditing, taxation, GST, and statutory compliance practices"
      },
      {
        src: "/images/projects/shrine-consultancy/industries-page.png",
        caption: "Industries page showcasing sector-specific consulting across retail, manufacturing, and tech sectors"
      },
      {
        src: "/images/projects/shrine-consultancy/why-shrine-page.png",
        caption: "Why Shrine page highlighting firm credentials, client value propositions, and advisory standards"
      },
      {
        src: "/images/projects/shrine-consultancy/contact-page.png",
        caption: "Contact page with structured consultation inquiry form, office coordinates, and direct channels"
      },
      {
        src: "/images/projects/shrine-consultancy/practice-overview.png",
        caption: "Practice overview section detailing comprehensive financial reporting and compliance services"
      }
    ],
    learnings: [
      "Structuring client-side multi-page routing in React with clean navigation transitions between corporate sections.",
      "Aligning commercial web development with client branding expectations and corporate credibility factors.",
      "Optimizing production assets and ensuring high accessibility across mobile, tablet, and desktop viewports."
    ]
  }
};
