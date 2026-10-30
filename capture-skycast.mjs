import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureSkyCastDeep() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const dir = path.resolve('public/images/projects/skycast-analytics');

  await page.goto('https://skycast-analytics-navy.vercel.app/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(dir, 'welcome-search.png') });
  console.log('SkyCast: welcome-search.png');

  // Click on "Ahmedabad" or "London" popular city pill
  try {
    await page.evaluate(() => {
      const pills = Array.from(document.querySelectorAll('button, span, a'));
      const ahmedabad = pills.find(p => p.textContent && p.textContent.includes('Ahmedabad'));
      if (ahmedabad) ahmedabad.click();
    });
    await new Promise(r => setTimeout(r, 4500)); // wait for Open-Meteo live API response
    await page.screenshot({ path: path.join(dir, 'live-telemetry.png') });
    console.log('SkyCast: live-telemetry.png');

    // Scroll to 7-Day Forecast & Trend Charts
    await page.evaluate(() => window.scrollBy(0, 520));
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(dir, 'forecast-charts.png') });
    console.log('SkyCast: forecast-charts.png');

    // Click on Forecast sidebar/tab
    await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('a, button, nav *'));
      const fc = items.find(i => i.textContent && i.textContent.trim().toLowerCase() === 'forecast');
      if (fc) fc.click();
    });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(dir, 'forecast-view.png') });
    console.log('SkyCast: forecast-view.png');

    // Click on Analytics sidebar/tab
    await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('a, button, nav *'));
      const an = items.find(i => i.textContent && i.textContent.trim().toLowerCase() === 'analytics');
      if (an) an.click();
    });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(dir, 'analytics-view.png') });
    console.log('SkyCast: analytics-view.png');
  } catch (e) {
    console.error('SkyCast deep error:', e.message);
  } finally {
    await browser.close();
  }
}

captureSkyCastDeep();
