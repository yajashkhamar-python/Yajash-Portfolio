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

async function inspectMore() {
  const apps = [
    { name: 'GlobeTrotter', url: 'https://globe-trotter-bice.vercel.app/' },
    { name: 'SkyCast Analytics', url: 'https://skycast-analytics-navy.vercel.app/' },
    { name: 'Shrine Consultancy', url: 'https://shrine-consultancy.vercel.app/' }
  ];

  for (const app of apps) {
    console.log(`\n================== ${app.name} ==================`);
    const html = await fetchPage(app.url);
    const jsMatches = [...html.matchAll(/src=["'](\/assets\/[^"']+\.js)["']/g)].map(m => m[1]);
    for (const jsPath of jsMatches) {
      const fullUrl = app.url.replace(/\/$/, '') + jsPath;
      const js = await fetchPage(fullUrl);
      
      // Look for href="#" or button labels or section IDs
      const hrefs = [...js.matchAll(/href[:=]["'](#?[a-zA-Z0-9_\/-]+)["']/g)].map(m => m[1]);
      console.log(`Hrefs in ${jsPath}:`, [...new Set(hrefs)].slice(0, 15));
      
      // Look for nav or tab state keywords
      const navWords = ['trip', 'itinerary', 'weather', 'forecast', 'radar', 'services', 'about', 'contact', 'pricing'];
      navWords.forEach(w => {
        const c = (js.match(new RegExp(w, 'gi')) || []).length;
        if (c > 3) console.log(`Keyword "${w}": found ${c} times`);
      });
    }
  }
}

inspectMore();
