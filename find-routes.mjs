import https from 'https';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function findRoutes() {
  const html = await fetchPage('https://heatshield-ai-sand.vercel.app/');
  const jsMatch = html.match(/src=["'](\/assets\/index-[^"']+\.js)["']/);
  if (jsMatch) {
    const jsUrl = 'https://heatshield-ai-sand.vercel.app' + jsMatch[1];
    console.log('Fetching JS bundle:', jsUrl);
    const js = await fetchPage(jsUrl);
    // Find path="..." or path:"..."
    const routeMatches = [...js.matchAll(/path[:=]["']([^"']+)["']/g)].map(m => m[1]);
    console.log('HeatShield Routes:', [...new Set(routeMatches)]);
  }
}

findRoutes();
