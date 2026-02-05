# Charming Cabeleireiro - One Pager

Este é um website rápido, moderno e optimizado para SEO local, criado especificamente para "Charming - Hairstyling by Belenda" em Quarteira.

## 🚀 Como fazer Deploy (Colocar Online)

A forma mais fácil e gratuita é usando **Netlify**:

1. Crie uma conta no [Netlify](https://www.netlify.com/).
2. Arraste a pasta `dist` (que é gerada após correr o comando de build) para o painel do Netlify.
   * *Nota técnica:* Se ligar este repositório ao GitHub, o Netlify faz o deploy automático.
     * **Build Command:** `npm run build`
     * **Publish Directory:** `dist`

### Ativar Formulário de Contacto
O site já está configurado para **Netlify Forms**.
1. Após o deploy, vá ao painel do Netlify > **Forms**.
2. Verá as submissões a chegar lá automaticamente.
3. Pode configurar notificações por email no painel do Netlify (Site Settings > Forms > Form notifications).

---

## ✏️ Como Editar Conteúdos (Sem Programar)

Todo o texto e informações do site estão no ficheiro:
`content.json`

Para alterar preços, textos, horários ou morada:
1. Abra o ficheiro `content.json`.
2. Edite o texto dentro das aspas.
3. Guarde o ficheiro e faça um novo deploy (se estiver no GitHub, basta fazer commit).

**Exemplo:**
Para mudar o telefone, procure por `"phone": "+351289301432"` e altere o número.

---

## 🖼️ Imagens

Atualmente o site usa imagens "placeholder" (genéricas). Para colocar as suas fotos:

1. Coloque as suas fotos na pasta `/public` (crie a pasta se não existir na raiz).
2. Nomeie-as de forma organizada (ex: `salao-interior.jpg`).
3. No código (ficheiros `.tsx`) ou no `content.json` (se configurado), substitua `https://picsum.photos/...` pelo caminho da imagem (ex: `/salao-interior.jpg`).

**Tamanhos Recomendados:**
* **Hero (Topo):** 1200x800px (JPG otimizado).
* **Galeria:** 600x600px (Quadradas).
* **Serviços:** Ícones são automáticos, não precisa de imagens.

---

## 📊 Analytics e Call Tracking

O site está preparado para receber códigos de tracking.

### 1. Google Analytics 4 (GA4)
No ficheiro `index.html`, antes de `</head>`, cole o script fornecido pelo Google Analytics.

### 2. Call Tracking (Medir chamadas)
Existem duas formas de medir quem liga através do site:

**Opção A: Simples (Sem custos extra)**
O site já envia um evento `call_click` quando alguém clica nos botões de ligar.
1. Configure o GA4.
2. Crie uma "Conversão" no GA4 baseada no evento `call_click`.
*Limitação:* Mede a intenção (clique), não garante que a chamada foi atendida.

**Opção B: Avançada (Dynamic Number Insertion - DNI)**
Para saber exatamente de onde vem a chamada e gravar chamadas.
1. Contrate um serviço como **CallRail** ou utilize **Twilio**.
2. O serviço dar-lhe-á um "Snippet" (código JS).
3. Cole esse código no `index.html`.
4. O código irá substituir automaticamente o número `+351 289 301 432` por um número de rastreamento quando o visitante chega via anúncios.

---

## 🛠️ Desenvolvimento (Para Programadores)

Stack: React 18, TypeScript, Tailwind CSS, Vite.

```bash
# Instalar dependências
npm install

# Correr localmente
npm run dev

# Construir para produção
npm run build
```