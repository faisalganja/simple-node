// server.js
const http = require('http');
const config = require('./config');

// Fetch parameters ONCE at startup
(async () => {
  const welcomeMessage = await config.getParam(config.WELCOME_MESSAGE);

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${welcomeMessage}\n`);
  });

  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
})();