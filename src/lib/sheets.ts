import type { Lead } from './supabase';

const SCRIPTS_URL = import.meta.env.VITE_SHEETS_URL || '/.netlify/functions/submit';

if (!SCRIPTS_URL) {
  // Not throwing to avoid crashing in dev, but warn developers
  // We'll still try to avoid any uncaught errors at runtime
  // Silently allowing undefined helps local dev without env vars
}

export async function saveLead(lead: Lead) {
  if (!SCRIPTS_URL) throw new Error('VITE_SHEETS_URL is not configured');

  const payload = {
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
  };

  const res = await fetch(SCRIPTS_URL as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Failed to save lead: ${res.status} ${text}`);
  }

  // The Google Apps Script should return a JSON with at least {ok:true}
  const data = await res.json().catch(() => null);
  return data;
}

export default saveLead;
