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

async function analyze() {
  const urls = {
    heatshield: 'https://heatshield-ai-sand.vercel.app/',
    studypulse: 'https://study-project-jcpd-six.vercel.app/',
    globetrotter: 'https://globe-trotter-bice.vercel.app/',
    skycast: 'https://skycast-analytics-navy.vercel.app/',
    shrine: 'https://shrine-consultancy.vercel.app/'
  };

  for (const [key, url] of Object.entries(urls)) {
    try {
      const html = await fetchPage(url);
      console.log(`=== ${key.toUpperCase()} (${url}) ===`);
      // Find title, meta, links, script chunks
      const titleMatch = html.match(/<title>(.*?)<\/title>/i);
      console.log('Title:', titleMatch ? titleMatch[1] : 'No title');
      
      // Look for internal links or route patterns
      const links = [...html.matchAll(/href=["'](\/[^"']*)["']/g)].map(m => m[1]);
      console.log('Internal links sample:', [...new Set(links)].slice(0, 8));
    } catch (e) {
      console.error(`Error fetching ${key}:`, e.message);
    }
  }
}

analyze();
