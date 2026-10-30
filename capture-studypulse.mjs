import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureStudyPulseAuth() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const dir = path.resolve('public/images/projects/studypulse-ai');

  await page.goto('https://study-project-jcpd-six.vercel.app/login', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(dir, 'login-auth.png') });
  console.log('Captured login-auth.png');

  // Click "Sign In to Dashboard" button
  try {
    await page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Sign In'));
      if (btn) btn.click();
    });
    await new Promise(r => setTimeout(r, 2500));
    console.log('Current URL after sign-in click:', page.url());
    await page.screenshot({ path: path.join(dir, 'dashboard.png') });
    console.log('Captured dashboard.png after login');

    // Now navigate to tasks
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, nav *'));
      const t = links.find(l => l.textContent && l.textContent.trim().toLowerCase() === 'tasks');
      if (t) t.click();
    });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(dir, 'tasks.png') });
    console.log('Captured tasks.png');

    // Exams
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, nav *'));
      const t = links.find(l => l.textContent && l.textContent.trim().toLowerCase() === 'exams');
      if (t) t.click();
    });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(dir, 'exams.png') });
    console.log('Captured exams.png');

    // Focus Timer
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, nav *'));
      const t = links.find(l => l.textContent && (l.textContent.toLowerCase().includes('focus') || l.textContent.toLowerCase().includes('timer')));
      if (t) t.click();
    });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(dir, 'focus-timer.png') });
    console.log('Captured focus-timer.png');

    // Analytics
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, nav *'));
      const t = links.find(l => l.textContent && l.textContent.trim().toLowerCase() === 'analytics');
      if (t) t.click();
    });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(dir, 'analytics.png') });
    console.log('Captured analytics.png');

    // AI Planner
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, nav *'));
      const t = links.find(l => l.textContent && l.textContent.toLowerCase().includes('planner'));
      if (t) t.click();
    });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(dir, 'ai-planner.png') });
    console.log('Captured ai-planner.png');
  } catch (e) {
    console.error('Error during authenticated capture:', e.message);
  } finally {
    await browser.close();
  }
}

captureStudyPulseAuth();
