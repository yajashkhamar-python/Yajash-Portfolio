import https from 'https';

const urls = [
  'https://heatshield-ai-sand.vercel.app/',
  'https://study-project-jcpd-six.vercel.app/',
  'https://globe-trotter-bice.vercel.app/',
  'https://skycast-analytics-navy.vercel.app/',
  'https://shrine-consultancy.vercel.app/'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`URL: ${url} | Status: ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(`URL: ${url} | Error:`, e.message);
  });
});
