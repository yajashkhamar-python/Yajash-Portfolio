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

async function inspectAuth() {
  const html = await fetchPage('https://study-project-jcpd-six.vercel.app/');
  const jsMatches = [...html.matchAll(/src=["'](\/assets\/[^"']+\.js)["']/g)].map(m => m[1]);
  for (const p of jsMatches) {
    const full = 'https://study-project-jcpd-six.vercel.app' + p;
    const js = await fetchPage(full);
    const authIdx = js.indexOf('isAuthenticated');
    if (authIdx !== -1) {
      console.log('Found isAuthenticated in', p);
      console.log(js.substring(authIdx - 100, authIdx + 200));
    }
    const tokenIdx = js.indexOf('localStorage');
    if (tokenIdx !== -1) {
      console.log('Found localStorage usage around:');
      console.log(js.substring(tokenIdx - 50, tokenIdx + 150));
    }
  }
}

inspectAuth();
