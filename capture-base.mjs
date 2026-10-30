import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function capture(url, outputPath, width = 1440, height = 900) {
  return new Promise((resolve) => {
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const args = [
      '--headless=new',
      '--disable-gpu',
      `--window-size=${width},${height}`,
      '--hide-scrollbars',
      `--screenshot=${outputPath}`,
      url
    ];

    const child = spawn(chromePath, args);
    child.on('close', (code) => {
      console.log(`Captured: ${path.basename(outputPath)} (exit code ${code})`);
      resolve();
    });
  });
}

async function run() {
  console.log('Capturing base views...');
  await capture('https://heatshield-ai-sand.vercel.app/', 'public/images/projects/heatshield-ai/dashboard.png');
  await capture('https://study-project-jcpd-six.vercel.app/', 'public/images/projects/studypulse-ai/dashboard.png');
  await capture('https://globe-trotter-bice.vercel.app/', 'public/images/projects/globetrotter/homepage.png');
  await capture('https://skycast-analytics-navy.vercel.app/', 'public/images/projects/skycast-analytics/dashboard.png');
  await capture('https://shrine-consultancy.vercel.app/', 'public/images/projects/shrine-consultancy/homepage.png');
  console.log('Base views captured successfully.');
}

run();
