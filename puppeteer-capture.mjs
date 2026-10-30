import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureHeatShield(browser) {
  console.log('Capturing HeatShield AI...');
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const dir = path.resolve('public/images/projects/heatshield-ai');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  await page.goto('https://heatshield-ai-sand.vercel.app/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(dir, 'overview.png') });
  console.log('HeatShield: overview.png');

  // Navigate to Dashboard
  try {
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, nav *'));
      const dash = links.find(el => el.textContent && el.textContent.trim().toLowerCase().includes('dashboard'));
      if (dash) dash.click();
    });
    await new Promise(r => setTimeout(r, 2500));
    await page.screenshot({ path: path.join(dir, 'dashboard.png') });
    console.log('HeatShield: dashboard.png');
  } catch (e) {
    console.error('HeatShield dash error:', e.message);
  }

  // Navigate to Heat Map
  try {
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, nav *'));
      const map = links.find(el => el.textContent && el.textContent.trim().toLowerCase().includes('heat map'));
      if (map) map.click();
    });
    await new Promise(r => setTimeout(r, 2500));
    await page.screenshot({ path: path.join(dir, 'heat-map.png') });
    console.log('HeatShield: heat-map.png');
  } catch (e) {
    console.error('HeatShield map error:', e.message);
  }

  // Navigate to Analytics
  try {
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, nav *'));
      const analytics = links.find(el => el.textContent && el.textContent.trim().toLowerCase().includes('analytics'));
      if (analytics) analytics.click();
    });
    await new Promise(r => setTimeout(r, 2500));
    await page.screenshot({ path: path.join(dir, 'analytics.png') });
    console.log('HeatShield: analytics.png');
  } catch (e) {
    console.error('HeatShield analytics error:', e.message);
  }

  // Recommendations
  try {
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, nav *'));
      const rec = links.find(el => el.textContent && el.textContent.trim().toLowerCase().includes('recommendation'));
      if (rec) rec.click();
    });
    await new Promise(r => setTimeout(r, 2500));
    await page.screenshot({ path: path.join(dir, 'recommendations.png') });
    console.log('HeatShield: recommendations.png');
  } catch (e) {
    console.error('HeatShield rec error:', e.message);
  }

  await page.close();
}

async function captureStudyPulse(browser) {
  console.log('Capturing StudyPulse AI...');
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const dir = path.resolve('public/images/projects/studypulse-ai');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  await page.goto('https://study-project-jcpd-six.vercel.app/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(dir, 'dashboard.png') });
  console.log('StudyPulse: dashboard.png');

  // Click Tasks
  try {
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, nav *'));
      const el = links.find(l => l.textContent && l.textContent.trim().toLowerCase() === 'tasks');
      if (el) el.click();
    });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(dir, 'tasks.png') });
    console.log('StudyPulse: tasks.png');
  } catch (e) {
    console.error('StudyPulse tasks error:', e.message);
  }

  // Click Exams
  try {
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, nav *'));
      const el = links.find(l => l.textContent && l.textContent.trim().toLowerCase() === 'exams');
      if (el) el.click();
    });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(dir, 'exams.png') });
    console.log('StudyPulse: exams.png');
  } catch (e) {
    console.error('StudyPulse exams error:', e.message);
  }

  // Click Focus Center / Timer
  try {
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, nav *'));
      const el = links.find(l => l.textContent && (l.textContent.toLowerCase().includes('focus') || l.textContent.toLowerCase().includes('timer')));
      if (el) el.click();
    });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(dir, 'focus-timer.png') });
    console.log('StudyPulse: focus-timer.png');
  } catch (e) {
    console.error('StudyPulse timer error:', e.message);
  }

  // Click Analytics
  try {
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, nav *'));
      const el = links.find(l => l.textContent && l.textContent.trim().toLowerCase() === 'analytics');
      if (el) el.click();
    });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(dir, 'analytics.png') });
    console.log('StudyPulse: analytics.png');
  } catch (e) {
    console.error('StudyPulse analytics error:', e.message);
  }

  // Click AI Planner / Assistant
  try {
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, nav *'));
      const el = links.find(l => l.textContent && l.textContent.toLowerCase().includes('planner'));
      if (el) el.click();
    });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(dir, 'ai-planner.png') });
    console.log('StudyPulse: ai-planner.png');
  } catch (e) {
    console.error('StudyPulse planner error:', e.message);
  }

  await page.close();
}

async function captureGlobeTrotter(browser) {
  console.log('Capturing GlobeTrotter...');
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const dir = path.resolve('public/images/projects/globetrotter');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  await page.goto('https://globe-trotter-bice.vercel.app/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(dir, 'dashboard.png') });
  console.log('GlobeTrotter: dashboard.png');

  // Look for interactive buttons or views
  try {
    // Check available buttons
    const buttons = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('button, a')).map(b => b.textContent.trim()).filter(Boolean);
    });
    console.log('GlobeTrotter buttons:', buttons.slice(0, 10));

    // Try scrolling to show itinerary / calendar section
    await page.evaluate(() => window.scrollBy(0, 600));
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(dir, 'itinerary-timeline.png') });
    console.log('GlobeTrotter: itinerary-timeline.png');

    await page.evaluate(() => window.scrollBy(0, 600));
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(dir, 'budget-breakdown.png') });
    console.log('GlobeTrotter: budget-breakdown.png');
  } catch (e) {
    console.error('GlobeTrotter error:', e.message);
  }

  await page.close();
}

async function captureSkyCast(browser) {
  console.log('Capturing SkyCast Analytics...');
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const dir = path.resolve('public/images/projects/skycast-analytics');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  await page.goto('https://skycast-analytics-navy.vercel.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(dir, 'dashboard.png') });
  console.log('SkyCast: dashboard.png');

  // Search or click different views if available
  try {
    // Scroll down to forecast and chart section
    await page.evaluate(() => window.scrollBy(0, 500));
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(dir, 'forecast-charts.png') });
    console.log('SkyCast: forecast-charts.png');

    await page.evaluate(() => window.scrollBy(0, 600));
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(dir, 'atmospheric-metrics.png') });
    console.log('SkyCast: atmospheric-metrics.png');
  } catch (e) {
    console.error('SkyCast error:', e.message);
  }

  await page.close();
}

async function captureShrine(browser) {
  console.log('Capturing Shrine Consultancy...');
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const dir = path.resolve('public/images/projects/shrine-consultancy');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  await page.goto('https://shrine-consultancy.vercel.app/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(dir, 'hero-homepage.png') });
  console.log('Shrine: hero-homepage.png');

  // Scroll to services
  try {
    await page.evaluate(() => {
      const s = document.querySelector('#services') || document.querySelector('section:nth-of-type(2)');
      if (s) s.scrollIntoView();
      else window.scrollBy(0, 700);
    });
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: path.join(dir, 'services-overview.png') });
    console.log('Shrine: services-overview.png');

    // Scroll to about / expertise
    await page.evaluate(() => window.scrollBy(0, 800));
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: path.join(dir, 'firm-expertise.png') });
    console.log('Shrine: firm-expertise.png');

    // Scroll to contact
    await page.evaluate(() => {
      const c = document.querySelector('#contact') || document.querySelector('footer');
      if (c) c.scrollIntoView();
      else window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: path.join(dir, 'client-inquiry.png') });
    console.log('Shrine: client-inquiry.png');
  } catch (e) {
    console.error('Shrine error:', e.message);
  }

  await page.close();
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    await captureHeatShield(browser);
    await captureStudyPulse(browser);
    await captureGlobeTrotter(browser);
    await captureSkyCast(browser);
    await captureShrine(browser);
    console.log('ALL SCREENSHOTS CAPTURED SUCCESSFULLY!');
  } finally {
    await browser.close();
  }
}

run();
