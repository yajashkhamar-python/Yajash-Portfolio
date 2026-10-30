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

async function inspectAll() {
  const apps = [
    { name: 'StudyPulse AI', url: 'https://study-project-jcpd-six.vercel.app/' },
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
      
      // Look for paths
      const paths = [...js.matchAll(/path[:=]["'](\/[a-zA-Z0-9_\/-]*)["']/g)].map(m => m[1]);
      const uniquePaths = [...new Set(paths)].filter(p => p.length > 1 && !p.includes('.') && !p.startsWith('/assets'));
      if (uniquePaths.length) {
        console.log(`Paths in ${jsPath}:`, uniquePaths);
      }
    }
  }
}

inspectAll();
