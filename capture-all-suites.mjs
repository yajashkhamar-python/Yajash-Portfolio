import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureAllRealScreens() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // ================= 1. HeatShield AI =================
  console.log('--- 1. Capturing HeatShield AI ---');
  const hsDir = path.resolve('public/images/projects/heatshield-ai');
  if (!fs.existsSync(hsDir)) fs.mkdirSync(hsDir, { recursive: true });

  await page.goto('https://heatshield-ai-sand.vercel.app/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(hsDir, 'home-overview.png') });
  console.log('HeatShield: home-overview.png');

  // Dashboard with map
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a, button, nav *')).find(e => e.textContent && e.textContent.trim().toLowerCase() === 'dashboard');
    if (el) el.click();
  });
  await new Promise(r => setTimeout(r, 6000)); // wait for tiles and data to load
  await page.screenshot({ path: path.join(hsDir, 'dashboard.png') });
  console.log('HeatShield: dashboard.png');

  // Heat Map
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a, button, nav *')).find(e => e.textContent && e.textContent.trim().toLowerCase() === 'heat map');
    if (el) el.click();
  });
  await new Promise(r => setTimeout(r, 5000));
  await page.screenshot({ path: path.join(hsDir, 'heat-map.png') });
  console.log('HeatShield: heat-map.png');

  // Analytics
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a, button, nav *')).find(e => e.textContent && e.textContent.trim().toLowerCase() === 'analytics');
    if (el) el.click();
  });
  await new Promise(r => setTimeout(r, 4000));
  await page.screenshot({ path: path.join(hsDir, 'analytics.png') });
  console.log('HeatShield: analytics.png');

  // Recommendations
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a, button, nav *')).find(e => e.textContent && e.textContent.trim().toLowerCase() === 'recommendations');
    if (el) el.click();
  });
  await new Promise(r => setTimeout(r, 4000));
  await page.screenshot({ path: path.join(hsDir, 'recommendations.png') });
  console.log('HeatShield: recommendations.png');

  // Reports
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a, button, nav *')).find(e => e.textContent && e.textContent.trim().toLowerCase() === 'reports');
    if (el) el.click();
  });
  await new Promise(r => setTimeout(r, 4000));
  await page.screenshot({ path: path.join(hsDir, 'reports.png') });
  console.log('HeatShield: reports.png');

  // ================= 2. StudyPulse AI =================
  console.log('\n--- 2. Capturing StudyPulse AI (with mock session token) ---');
  const spDir = path.resolve('public/images/projects/studypulse-ai');
  if (!fs.existsSync(spDir)) fs.mkdirSync(spDir, { recursive: true });

  await page.goto('https://study-project-jcpd-six.vercel.app/', { waitUntil: 'networkidle2' });
  
  // Set localStorage user & token so router unlocks protected views
  await page.evaluate(() => {
    localStorage.setItem('study_planner_token', 'mock_jwt_token_for_student');
    localStorage.setItem('study_planner_user', JSON.stringify({
      id: 'usr_1',
      name: 'Yajash',
      email: 'student@university.edu',
      streak: 3
    }));
  });

  // Reload or navigate internally to dashboard
  await page.goto('https://study-project-jcpd-six.vercel.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(spDir, 'dashboard.png') });
  console.log('StudyPulse: dashboard.png');

  // Click Tasks
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a, button, nav *')).find(l => l.textContent && l.textContent.trim().toLowerCase() === 'tasks');
    if (el) el.click();
  });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(spDir, 'tasks.png') });
  console.log('StudyPulse: tasks.png');

  // Click Exams
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a, button, nav *')).find(l => l.textContent && l.textContent.trim().toLowerCase() === 'exams');
    if (el) el.click();
  });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(spDir, 'exams.png') });
  console.log('StudyPulse: exams.png');

  // Click Focus Center
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a, button, nav *')).find(l => l.textContent && l.textContent.toLowerCase().includes('focus'));
    if (el) el.click();
  });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(spDir, 'focus-timer.png') });
  console.log('StudyPulse: focus-timer.png');

  // Click Analytics
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a, button, nav *')).find(l => l.textContent && l.textContent.trim().toLowerCase() === 'analytics');
    if (el) el.click();
  });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(spDir, 'analytics.png') });
  console.log('StudyPulse: analytics.png');

  // Click AI Planner
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a, button, nav *')).find(l => l.textContent && l.textContent.toLowerCase().includes('planner'));
    if (el) el.click();
  });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(spDir, 'ai-planner.png') });
  console.log('StudyPulse: ai-planner.png');

  // ================= 3. GlobeTrotter =================
  console.log('\n--- 3. Capturing GlobeTrotter ---');
  const gtDir = path.resolve('public/images/projects/globetrotter');
  if (!fs.existsSync(gtDir)) fs.mkdirSync(gtDir, { recursive: true });

  await page.goto('https://globe-trotter-bice.vercel.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(gtDir, 'hero-landing.png') });
  console.log('GlobeTrotter: hero-landing.png');

  // Scroll to trip planner preview
  await page.evaluate(() => window.scrollBy(0, 650));
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(gtDir, 'itinerary-timeline.png') });
  console.log('GlobeTrotter: itinerary-timeline.png');

  // Scroll to features / budget
  await page.evaluate(() => window.scrollBy(0, 700));
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(gtDir, 'features-overview.png') });
  console.log('GlobeTrotter: features-overview.png');

  // Scroll to budget / calendar
  await page.evaluate(() => window.scrollBy(0, 700));
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(gtDir, 'budget-planning.png') });
  console.log('GlobeTrotter: budget-planning.png');

  // ================= 4. SkyCast Analytics =================
  console.log('\n--- 4. Capturing SkyCast Analytics ---');
  const scDir = path.resolve('public/images/projects/skycast-analytics');
  if (!fs.existsSync(scDir)) fs.mkdirSync(scDir, { recursive: true });

  await page.goto('https://skycast-analytics-navy.vercel.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: path.join(scDir, 'live-dashboard.png') });
  console.log('SkyCast: live-dashboard.png');

  // Scroll to 7-Day Forecast & Charts
  await page.evaluate(() => window.scrollBy(0, 480));
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(scDir, 'forecast-charts.png') });
  console.log('SkyCast: forecast-charts.png');

  // Scroll to atmospheric metrics & comfort indicators
  await page.evaluate(() => window.scrollBy(0, 550));
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(scDir, 'atmospheric-metrics.png') });
  console.log('SkyCast: atmospheric-metrics.png');

  // Scroll to details & export
  await page.evaluate(() => window.scrollBy(0, 500));
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(scDir, 'weather-details.png') });
  console.log('SkyCast: weather-details.png');

  // ================= 5. Shrine Consultancy =================
  console.log('\n--- 5. Capturing Shrine Consultancy ---');
  const shDir = path.resolve('public/images/projects/shrine-consultancy');
  if (!fs.existsSync(shDir)) fs.mkdirSync(shDir, { recursive: true });

  await page.goto('https://shrine-consultancy.vercel.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(shDir, 'homepage-hero.png') });
  console.log('Shrine: homepage-hero.png');

  // Scroll to Services Overview
  await page.evaluate(() => window.scrollBy(0, 750));
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(shDir, 'services-overview.png') });
  console.log('Shrine: services-overview.png');

  // Scroll to Firm Expertise & About
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(shDir, 'firm-expertise.png') });
  console.log('Shrine: firm-expertise.png');

  // Scroll to Client Consultation & Contact
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(shDir, 'client-inquiry.png') });
  console.log('Shrine: client-inquiry.png');

  await browser.close();
  console.log('\nALL 5 PROJECTS SCREENSHOT SUITES CAPTURED!');
}

captureAllRealScreens();
