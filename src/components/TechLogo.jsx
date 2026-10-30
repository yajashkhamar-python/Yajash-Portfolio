import React from 'react';
// Import official brand icons from react-icons/si (Simple Icons), react-icons/di (Devicons), react-icons/vsc (VS Code), and react-icons/tb
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVite,
  SiVercel,
  SiRender,
  SiChartdotjs,
  SiLeaflet
} from 'react-icons/si';
import { DiJava, DiCss3 } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';
import { TbDatabase, TbCloudSearch } from 'react-icons/tb';

/**
 * Authentic Brand Logos for Yajash's Portfolio and Projects
 * Each uses its authentic, verified vector mark from Simple Icons / Devicons / Official VS Code
 * rendered with its official brand color:
 *
 * 1. Programming Languages
 *    - Python: SiPython (#3776AB)
 *    - Java: DiJava (#E76F00)
 *    - JavaScript: SiJavascript (#F7DF1E)
 *
 * 2. Frontend Development
 *    - React: SiReact (#61DAFB)
 *    - HTML5: SiHtml5 (#E34F26)
 *    - CSS3: DiCss3 (#1572B6)
 *    - Tailwind CSS: SiTailwindcss (#06B6D4)
 *
 * 3. Backend Development
 *    - Node.js: SiNodedotjs (#5FA04E)
 *    - Express.js: SiExpress (#000000)
 *    - Django: SiDjango (#092E20)
 *
 * 4. Databases
 *    - SQL: TbDatabase (#0064A5) - universal database symbol
 *    - MongoDB: SiMongodb (#47A248)
 *    - PostgreSQL: SiPostgresql (#4169E1)
 *
 * 5. Tools & Platforms
 *    - Git: SiGit (#F05032)
 *    - GitHub: SiGithub (#181717)
 *    - Visual Studio Code: VscVscode (#007ACC)
 *    - Vite: SiVite (#646CFF)
 *    - Vercel: SiVercel (#000000)
 *    - Render: SiRender (#46E3B7)
 *
 * 6. Verified Project-Specific Libraries & Services
 *    - Chart.js: SiChartdotjs (#FF6384)
 *    - Leaflet: SiLeaflet (#199900)
 *    - Open-Meteo API: TbCloudSearch (#0284C7)
 */
export const TechLogo = ({ name, size = 38, className = "" }) => {
  const norm = name.toLowerCase().trim();

  switch (norm) {
    // ----------------- 1. Programming Languages -----------------
    case 'python':
      return <SiPython size={size} color="#3776AB" className={className} title="Python" />;

    case 'java':
      return <DiJava size={size} color="#E76F00" className={className} title="Java" />;

    case 'javascript':
      return <SiJavascript size={size} color="#F7DF1E" className={className} title="JavaScript" />;

    // ----------------- 2. Frontend Development -----------------
    case 'react':
      return <SiReact size={size} color="#61DAFB" className={className} title="React" />;

    case 'html':
    case 'html5':
      return <SiHtml5 size={size} color="#E34F26" className={className} title="HTML5" />;

    case 'css':
    case 'css3':
      return <DiCss3 size={size} color="#1572B6" className={className} title="CSS3" />;

    case 'tailwind css':
    case 'tailwindcss':
      return <SiTailwindcss size={size} color="#06B6D4" className={className} title="Tailwind CSS" />;

    // ----------------- 3. Backend Development -----------------
    case 'node.js':
    case 'nodejs':
      return <SiNodedotjs size={size} color="#5FA04E" className={className} title="Node.js" />;

    case 'express.js':
    case 'express':
      return <SiExpress size={size} color="#000000" className={className} title="Express.js" />;

    case 'django':
      return <SiDjango size={size} color="#092E20" className={className} title="Django" />;

    // ----------------- 4. Databases -----------------
    case 'sql':
      return <TbDatabase size={size} color="#0064A5" className={className} title="SQL Database" />;

    case 'mongodb':
      return <SiMongodb size={size} color="#47A248" className={className} title="MongoDB" />;

    case 'postgresql':
    case 'postgres':
      return <SiPostgresql size={size} color="#4169E1" className={className} title="PostgreSQL" />;

    // ----------------- 5. Tools & Platforms -----------------
    case 'git':
      return <SiGit size={size} color="#F05032" className={className} title="Git" />;

    case 'github':
      return <SiGithub size={size} color="#181717" className={className} title="GitHub" />;

    case 'visual studio code':
    case 'vs code':
    case 'vscode':
      return <VscVscode size={size} color="#007ACC" className={className} title="Visual Studio Code" />;

    case 'vite':
      return <SiVite size={size} color="#646CFF" className={className} title="Vite" />;

    case 'vercel':
      return <SiVercel size={size} color="#000000" className={className} title="Vercel" />;

    case 'render':
      return <SiRender size={size} color="#46E3B7" className={className} title="Render" />;

    case 'rest apis':
    case 'api':
      return <TbDatabase size={size} color="#0284C7" className={className} title="REST APIs" />;

    // ----------------- 6. Project-Specific Verified Technologies -----------------
    case 'chart.js':
    case 'chartjs':
      return <SiChartdotjs size={size} color="#FF6384" className={className} title="Chart.js" />;

    case 'leaflet':
    case 'leaflet.js':
      return <SiLeaflet size={size} color="#199900" className={className} title="Leaflet" />;

    case 'open-meteo api':
    case 'open meteo':
    case 'open-meteo':
      return <TbCloudSearch size={size} color="#0284C7" className={className} title="Open-Meteo API" />;

    default:
      return null;
  }
};
