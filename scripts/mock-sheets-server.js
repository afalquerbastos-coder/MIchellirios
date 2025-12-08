#!/usr/bin/env node
import http from 'node:http';

const port = process.env.PORT || 3333;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      console.log('Received POST to mock server:', body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    });
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Mock Sheets Server');
});

server.listen(port, () => {
  console.log(`Mock Sheets Server running on http://localhost:${port}`);
});
