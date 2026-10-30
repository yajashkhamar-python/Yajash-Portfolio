import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function capture(url, outputPath, width = 1440, height = 900) {
  return new Promise((resolve) => {
    const absPath = path.resolve(outputPath);
    const dir = path.dirname(absPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const args = [
      '--headless=new',
      '--disable-gpu',
      `--window-size=${width},${height}`,
      '--hide-scrollbars',
      `--screenshot=${absPath}`,
      url
    ];

    const child = spawn(chromePath, args);
    child.on('close', (code) => {
      console.log(`[Exit ${code}] Captured: ${outputPath} (Exists: ${fs.existsSync(absPath)})`);
      resolve();
    });
  });
}

async function captureHeatShield() {
  console.log('\n--- Capturing HeatShield AI Pages ---');
  await capture('https://heatshield-ai-sand.vercel.app/', 'public/images/projects/heatshield-ai/home-overview.png');
  await capture('https://heatshield-ai-sand.vercel.app/dashboard', 'public/images/projects/heatshield-ai/dashboard.png');
  await capture('https://heatshield-ai-sand.vercel.app/heat-map', 'public/images/projects/heatshield-ai/heat-map.png');
  await capture('https://heatshield-ai-sand.vercel.app/analytics', 'public/images/projects/heatshield-ai/analytics.png');
  await capture('https://heatshield-ai-sand.vercel.app/recommendations', 'public/images/projects/heatshield-ai/recommendations.png');
  await capture('https://heatshield-ai-sand.vercel.app/reports', 'public/images/projects/heatshield-ai/reports.png');
}

async function captureStudyPulse() {
  console.log('\n--- Capturing StudyPulse AI Pages ---');
  await capture('https://study-project-jcpd-six.vercel.app/dashboard', 'public/images/projects/studypulse-ai/dashboard.png');
  await capture('https://study-project-jcpd-six.vercel.app/tasks', 'public/images/projects/studypulse-ai/tasks.png');
  await capture('https://study-project-jcpd-six.vercel.app/exams', 'public/images/projects/studypulse-ai/exams.png');
  await capture('https://study-project-jcpd-six.vercel.app/analytics', 'public/images/projects/studypulse-ai/analytics.png');
  await capture('https://study-project-jcpd-six.vercel.app/focus-center', 'public/images/projects/studypulse-ai/focus-timer.png');
  await capture('https://study-project-jcpd-six.vercel.app/ai-planner', 'public/images/projects/studypulse-ai/ai-planner.png');
}

async function run() {
  await captureHeatShield();
  await captureStudyPulse();
  console.log('Capture finished.');
}

run();
