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

async function findNav() {
  const js = await fetchPage('https://heatshield-ai-sand.vercel.app/assets/index-zGBqW7P9.js');
  // Look for label, title, or navigation items
  const words = ['Dashboard', 'Heat Map', 'Analytics', 'Recommendations', 'Reports', 'Settings'];
  words.forEach(w => {
    console.log(`Word "${w}" index in bundle:`, js.indexOf(w));
  });
}

findNav();
