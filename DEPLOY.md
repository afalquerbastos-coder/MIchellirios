# Como Fazer Deploy da Landing Page

Este guia mostra como colocar a landing page da Michelli Rios online gratuitamente.

## Opção 1: Vercel (Recomendado - Mais Rápido)

### Passo a Passo:

1. **Acesse o Vercel**
   - Vá para https://vercel.com
   - Clique em "Sign Up" (ou "Log In" se já tiver conta)
   - Faça login com GitHub, GitLab ou email

2. **Crie um Novo Projeto**
   - Clique em "Add New..." → "Project"
   - Clique em "Import Git Repository"
   - Se preferir, arraste a pasta do projeto diretamente

3. **Configure o Deploy**
   - Nome do projeto: `michelli-landing-page` (ou qualquer nome)
   - Framework Preset: Vercel detecta automaticamente (Vite)
   - Clique em "Deploy"

4. **Pronto!**
   - Em 1-2 minutos sua página estará online
   - Você receberá um link tipo: `michelli-landing-page.vercel.app`
   - Pode configurar domínio próprio depois (ex: michellirios.com.br)

**Vantagens:**
- Deploy em segundos
- SSL/HTTPS automático
- Atualizações automáticas quando você fizer mudanças

---

## Opção 2: Netlify (Alternativa Igualmente Boa)

### Passo a Passo:

1. **Acesse o Netlify**
   - Vá para https://netlify.com
   - Clique em "Sign Up" (ou "Log In")
   - Faça login com GitHub, GitLab ou email

2. **Faça Upload do Projeto**
   - Clique em "Add new site" → "Deploy manually"
   - Arraste a pasta `dist` (precisa rodar `npm run build` antes)
   - OU conecte com GitHub para deploy automático

3. **Configure**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Clique em "Deploy site"

4. **Pronto!**
   - Link tipo: `nome-aleatorio.netlify.app`
   - Pode mudar o nome nas configurações
   - SSL/HTTPS automático

**Vantagens:**
- Interface visual simples
- Deploy por arraste de pasta
- Formulários integrados (útil se quiser adicionar depois)

---

## Opção 3: GitHub Pages (Grátis para Sempre)

### Passo a Passo:

1. **Crie uma Conta no GitHub**
   - Vá para https://github.com
   - Clique em "Sign Up"

2. **Crie um Novo Repositório**
   - Clique no "+" → "New repository"
   - Nome: `michelli-landing-page`
   - Deixe público
   - Clique em "Create repository"

3. **Suba o Código**
   - Abra o terminal na pasta do projeto
   - Execute:
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/michelli-landing-page.git
   git branch -M main
   git push -u origin main
   ```

4. **Ative o GitHub Pages**
   - No repositório, vá em "Settings" → "Pages"
   - Source: "GitHub Actions"
   - Crie o arquivo `.github/workflows/deploy.yml` com:
   ```yaml
   name: Deploy
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

5. **Pronto!**
   - Link: `seu-usuario.github.io/michelli-landing-page`

---

## Qual Escolher?

| Plataforma | Velocidade | Facilidade | Melhor Para |
|------------|------------|------------|-------------|
| **Vercel** | ⚡⚡⚡ | ⭐⭐⭐ | Deploy rápido, profissional |
| **Netlify** | ⚡⚡⚡ | ⭐⭐⭐ | Interface visual, formulários |
| **GitHub Pages** | ⚡⚡ | ⭐⭐ | Grátis para sempre, código aberto |

**Recomendação:** Use Vercel para começar. É o mais rápido e simples.

---

## Domínio Próprio (Opcional)

Depois que sua página estiver online, você pode configurar um domínio próprio:

1. **Compre um Domínio**
   - registro.br (para .com.br)
   - GoDaddy, Namecheap, etc.

2. **Configure no Vercel/Netlify**
   - Vá em "Settings" → "Domains"
   - Adicione seu domínio
   - Siga as instruções para apontar o DNS

---

## Precisa de Ajuda?

- **Vercel:** https://vercel.com/docs
- **Netlify:** https://docs.netlify.com
- **GitHub Pages:** https://pages.github.com

---

**Dica Final:** O projeto já está configurado e pronto para deploy. Todas as plataformas acima são gratuitas para projetos pequenos como este.
