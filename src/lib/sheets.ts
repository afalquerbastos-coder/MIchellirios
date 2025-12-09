import type { Lead } from './supabase';

// URL do Google Apps Script para salvar leads na planilha
const SCRIPTS_URL = import.meta.env.VITE_SHEETS_URL;

if (!SCRIPTS_URL) {
  console.warn('VITE_SHEETS_URL não está configurada. O formulário não funcionará.');
}

export async function saveLead(lead: Lead) {
  if (!SCRIPTS_URL) throw new Error('VITE_SHEETS_URL is not configured');

  const payload = {
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
  };

  // Para Google Apps Script, precisamos usar mode: 'no-cors' ou enviar como form data
  // Usando redirect: 'follow' para lidar com o redirecionamento do Google
  await fetch(SCRIPTS_URL as string, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify(payload),
  });

  // Com mode: 'no-cors', não conseguimos ler a resposta, mas a requisição é enviada
  // Se chegou aqui sem erro de rede, consideramos sucesso
  return { ok: true };
}

export default saveLead;
