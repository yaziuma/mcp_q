const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function greet(name = 'World') {
  return `Hello, ${name}!`;
}

// Home page
app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>CircleCI Express Demo</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; background: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .result { background: #e8f4fd; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #007acc; }
            .api-link { display: inline-block; margin: 10px 5px; padding: 8px 15px; background: #007acc; color: white; text-decoration: none; border-radius: 5px; }
            .api-link:hover { background: #005a9e; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 CircleCI Express Demo</h1>
            <div class="result">${greet()}</div>
            <div class="result">${greet('CircleCI')}</div>
            
            <h3>API Testing:</h3>
            <a href="/api/health" class="api-link">Health Check</a>
            <a href="/api/greet" class="api-link">Basic Greeting API</a>
            <a href="/api/greet/Express" class="api-link">Custom Greeting API</a>
            
            <p>This is an Express application for CircleCI MCP testing.</p>
        </div>
    </body>
    </html>
  `;
  res.send(html);
});

// API endpoints
app.get('/api/greet/:name?', (req, res) => {
  const name = req.params.name;
  res.json({ 
    message: greet(name),
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Only start server if not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`🚀 Express server running at http://localhost:${port}`);
  });
}

module.exports = { greet, app };