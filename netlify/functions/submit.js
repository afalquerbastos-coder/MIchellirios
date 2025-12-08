// Netlify serverless function to proxy client POSTs to Google Apps Script (Sheets) endpoint
// Adds CORS headers and avoids exposing the GAS URL on the client

exports.handler = async function (event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const sheetsUrl = process.env.SHEETS_URL || process.env.VITE_SHEETS_URL || '';
  if (!sheetsUrl) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ ok: false, message: 'SHEETS_URL not configured' }),
    };
  }

  try {
    const data = event.body;

    const res = await fetch(sheetsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data,
    });

    const respText = await res.text();
    return {
      statusCode: res.status,
      headers,
      body: respText || JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error('Netlify function proxy error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ ok: false, message: 'Proxy error' }),
    };
  }
};
