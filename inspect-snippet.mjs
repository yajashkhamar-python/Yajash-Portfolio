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

async function inspectSnippet() {
  const js = await fetchPage('https://heatshield-ai-sand.vercel.app/assets/index-zGBqW7P9.js');
  const idx = js.indexOf('Dashboard');
  console.log('Snippet around Dashboard:');
  console.log(js.substring(idx - 100, idx + 400));
}

inspectSnippet();
