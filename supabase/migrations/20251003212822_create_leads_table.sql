/*
  # Criar tabela de leads

  1. Nova Tabela
    - `leads`
      - `id` (uuid, chave primária) - Identificador único do lead
      - `name` (text) - Nome completo do lead
      - `email` (text, único) - E-mail do lead
      - `phone` (text) - Telefone do lead
      - `created_at` (timestamptz) - Data de criação do registro
      
  2. Segurança
    - Habilita RLS na tabela `leads`
    - Adiciona política para permitir inserção pública (para captura de leads)
    - Adiciona política para leitura apenas por usuários autenticados (admin)
    
  3. Índices
    - Adiciona índice no campo email para buscas rápidas
    - Adiciona índice no campo created_at para ordenação

  Observações:
    - Email é único para evitar duplicatas
    - A tabela permite inserções públicas (sem autenticação) para captura de leads
    - Apenas usuários autenticados podem ler os leads (controle administrativo)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer pessoa pode inserir leads"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Apenas usuários autenticados podem ler leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
