Google Sheets + Apps Script integration (for leads capture)

Steps to configure the backend (Google Apps Script) that receives form submissions from the front-end:

1. Create a Google Sheet and note its ID (part of the URL: https://docs.google.com/spreadsheets/d/THIS_ID/edit)
2. In the Sheet, create a header row if desired (or not required); we'll just append rows.
3. Extensions -> Apps Script: create a new script project and paste the following code into `Code.gs`:

```js
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, message: 'No post data' })).setMimeType(ContentService.MimeType.JSON);
    }

    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById('YOUR_SHEET_ID');
    const sheet = ss.getSheetByName('Sheet1') || ss.getSheets()[0];

    // Create a timestamp formatted for Sheets as the first column
    // Use Brasília timezone and format date as dd/MM/yyyy
    // If you want Sheets to store the value as an actual Date type (so you can use date functions),
    // use `new Date()` directly instead of a formatted string (see note below).
    // const timestamp = new Date();
    const tz = 'America/Sao_Paulo';
    const timestamp = Utilities.formatDate(new Date(), tz, "dd/MM/yyyy");

    // Append a row with timestamp as the first column
    sheet.appendRow([timestamp, data.name || '', data.email || '', data.phone || '']);

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, message: err.message })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Deploy -> Deploy new deployment -> Select "Web app"
   - Execute as: Me (owner)
   - Who has access: Anyone
   - Deploy and copy the generated "Web app" URL.
5. Copy the URL and set it to `VITE_SHEETS_URL` in your `.env` file (or in Netlify/Vercel environment variable `VITE_SHEETS_URL`). Example:

```
VITE_SHEETS_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
```

Usage in the front-end:
- The site will call the Google Apps Script URL via POST with JSON body {name, email, phone}
- The Apps Script appends the row into the selected sheet.

If you prefer Sheets to contain a real Date object (so it appears as a date/time cell and you can use formatting and date functions), replace the `timestamp` assignment with:

```js
// Store as Date object. Ensure the spreadsheet timezone is set to (GMT-03:00) America/Sao_Paulo in File -> Settings
const timestamp = new Date();
```

Notes & security:
- Anyone can call the Apps Script URL if you set access to "Anyone". If you want to restrict access, create a validation token or add reCAPTCHA (verify token) on server.
- For moderate traffic, Apps Script is fine, but very large traffic can hit Google quotas.
- For production use and more advanced validation, use a serverless function to verify reCAPTCHA and relay data to the Google Sheet with the script running as Owner.

Overcoming CORS in the browser
--------------------------------
When calling a Google Apps Script Web App from the browser you may get a CORS preflight error like:

```
Access to fetch at 'https://script.google.com/macros/s/...' from origin 'http://localhost:5173' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

Why this happens: The browser sends preflight OPTIONS requests for cross-origin requests, and if the server (Apps Script) doesn't reply with CORS headers the request is blocked. Apps Script endpoints don't reliably allow you to control the OPTIONS preflight response, so the most robust solution is to proxy the request via a server-side function.

Recommended solution (Netlify/Vercel/Cloudflare Workers): create a serverless function that receives the POST from your website and forwards it (server-to-server) to the Google Apps Script URL. Since that call happens from the server side, CORS is not involved.

Example Netlify function `netlify/functions/submit.js` (already included in this repo):

```js
// (Serverless) Proxy to the GAS web app to avoid CORS and hide your GAS URL
exports.handler = async function (event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }
  const sheetsUrl = process.env.SHEETS_URL || process.env.VITE_SHEETS_URL || '';
  const res = await fetch(sheetsUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: event.body });
  const text = await res.text();
  return { statusCode: res.status, headers, body: text || JSON.stringify({ ok: true }) };
};
```

How to use it in this repo
- Set the `SHEETS_URL` environment variable in Netlify (or `VITE_SHEETS_URL`) to your Apps Script URL.
- The client `src/lib/sheets.ts` already defaults to call the path `/.netlify/functions/submit` if `VITE_SHEETS_URL` is not set.
- For local testing, you can:
  - Run the included mock server: `node scripts/mock-sheets-server.js` and set `VITE_SHEETS_URL=http://localhost:3333/exec` to test a local stub.
  - Or deploy the Netlify function to test the end-to-end flow.

This approach avoids the CORS error while keeping your GAS URL secret and allowing server-side validations.
