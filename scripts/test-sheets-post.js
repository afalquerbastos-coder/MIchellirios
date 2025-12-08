#!/usr/bin/env node
const url = process.env.VITE_SHEETS_URL || 'http://localhost:3333/exec';

async function run() {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Test', email: 'test@example.com', phone: '000000000' }),
    });
    const data = await res.json();
    console.log('Response:', data);
  } catch (err) {
    console.error('Error calling sheets url', err);
    process.exit(1);
  }
}

run();
