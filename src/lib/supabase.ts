import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  created_at?: string;
}

export async function saveLead(lead: Lead) {
  const { data, error } = await supabase
    .from('leads')
    .insert([
      {
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
      },
    ])
    .select()
    .maybeSingle();

  if (error) throw error;
  return data;
}
