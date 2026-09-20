# ContentCreatorSkills (CCS) 🎬🎵🎤

**Your AI Creative Partner for Content Creators, Musicians, Comedians & Showbiz**
*Urubuga rw'Ikoranabuhanga rya AI rigenewe Abahanzi, Abanyarwenya, Abakora Amashusho (TikTok/YouTube), n'Abanyamuziki.*

ContentCreatorSkills is a modern, responsive AI web application built with HTML, CSS, JavaScript (React + Vite + Tailwind), and the Google Gemini API. It natively supports **Kinyarwanda**, **Français**, **English**, and **Kiswahili**.

---

## 🇷🇼 Amabwiriza mu Kinyarwanda (Uko uyishyira kuri GitHub & Free Hosting)

### 1. Dosiye Z'ingenzi Ziri muri iyi Poroje (Pure HTML, CSS, JavaScript)
- `index.html`: Urupapuro rw'ibanze rwa HTML5 rurangwa n'ubwiza, modularity n'umuvuduko.
- `style.css`: CSS3 ifite amabara ya modern dark theme y'aba creators, responsive kuri telephone na mudasobwa.
- `app.js`: JavaScript (ES6 Vanilla) icunga ibiganiro, AI prompts, indimi 4, Text-to-Speech audio, no kubika scripts.
- `server.ts`: Server ya Express ikoreshwa mu gucunga Gemini API Key mu ibanga.
- `netlify/functions/chat.ts` & `netlify.toml`: Serverless backend ya Netlify (Ku buntu).
- `api/chat.ts` & `vercel.json`: Serverless backend ya Vercel (Ku buntu).
- `.github/workflows/deploy.yml`: GitHub Actions ituma uyishyira kuri GitHub Pages ku buntu mu buryo bwikora.

### 2. Uko uyishyira kuri GitHub
Fungura terminal mu bubiko bw'iyi poroje maze wandike:
```bash
git init
git add .
git commit -m "feat: ContentCreatorSkills AI with HTML, CSS, JS & Free Hosting"
git branch -M main
git remote add origin https://github.com/IZINA_RYAWE_KURI_GITHUB/ContentCreatorSkills.git
git push -u origin main
```

### 2. Uburyo 3 Bworoshye bwo Kuyikoresha & Kuyihostinga

#### Uburyo bwa 1: Gufungura nka "File Bisanzwe" (Direct Browser / No Terminal)
- Nta node, nta npm, nta terminal ukeneye!
- Kanda kabiri kuri **`index.html`** (Double-click) muri mudasobwa yawe.
- Ihita ifunguka muri Chrome, Edge, Firefox cyangwa Safari, interface yayo igaragara neza 100%!
- Kugira ngo AI igusubize, kanda kuri **⚙️ Settings** hejuru iburyo maze ushyiremo Gemini API Key yawe y'ubuntu.

#### Uburyo bwa 2: Kuri GitHub Pages (Urubuga rwawe ku buntu)
1. Shira dosiye kuri GitHub (`git add .`, `git commit -m "update"`, `git push`).
2. Jya muri repository yawe kuri GitHub > Kanda **Settings** > **Pages** (ibumoso).
3. Muri **Build and deployment**:
   - Hitamo **Deploy from a branch** > hitamo **main** branch na folder ya **/(root)** > Kanda **Save**.
4. Mu minota 1 gusa, urubuga rwawe ruhita ruboneka kuri: `https://<izina-ryawe>.github.io/<repo-name>/`!

#### Uburyo bwa 3: Kuyihostinga ku buntu kuri Netlify cyangwa Vercel
Kugira ngo AI (Gemini) ikorere mu ibanga kuri server:
- **Kuri Netlify**: Jya kuri [netlify.com](https://www.netlify.com) > Import repo > Shyiramo `GEMINI_API_KEY` muri Environment Variables > Deploy!
- **Kuri Vercel**: Jya kuri [vercel.com](https://vercel.com) > Import repo > Shyiramo `GEMINI_API_KEY` > Deploy!

---

## 🌟 Key Features

1. **ChatGPT-Inspired Creator Experience**:
   - Left collapsible sidebar with search, conversation management, renaming, and deletion.
   - **Refresh Button (Kugarura / Actualiser)**: Instantly resets to a clean, fresh interface with zero conversation clutter for presentations or new visitors.
   - **User Account & Login System**: Create an account or sign in with your stage/creator name; question histories are securely partitioned per user.
   - Beautiful Markdown formatting supporting headings, lists, tables, quotes, and code blocks.
   - Message bubble actions: Copy with feedback, Regenerate, and Like/Dislike reaction controls.
   - Voice speech-to-text dictation (Web Speech API) & file attachment simulation.

2. **Multilingual Fluency (4 Languages)**:
   - **Kinyarwanda (🇷🇼)**: "Mpa ideas 10 za TikTok videos", "Nkorera lyrics z'indirimbo ya Afrobeat", "Nkorera script ya YouTube".
   - **Français (🇫🇷)**: "Écris un script captivant pour un court-métrage", "Propose 10 concepts viraux pour TikTok".
   - **Kiswahili (🇹🇿/🇰🇪)**: "Nipe mawazo ya video za TikTok", "Nitungie mashairi ya Bongo Flava".
   - **English (🇬🇧/🇺🇸)**: High-impact video scripts, brand collaboration proposals, Spotify streaming bios.

3. **19 Specialized Content Creator AI Engines**:
   - Content Idea Generator, Video Script Generator, TikTok Hook Generator, Caption & Hashtag Generator, Content Calendar Generator.
   - Song Idea & Concept Generator, Music Lyrics Assistant, Comedy Skit Generator, Standup Bit Generator.
   - Film & Cinema Scene Generator, Screenplay Synopsis Generator, Actor Monologue Generator.
   - Artist Bio Generator, YouTube Title & Thumbnail Generator, Brand Collaboration Pitch, Press Release, Interview Questions, and Podcast Planner.

4. **Creator Personalization**:
   - Configure your creator name, stage name, primary niche, main platform, target audience, country, and preferred content style. The AI automatically tailors all subsequent recommendations.

5. **Free-First Architecture & Local Persistence**:
   - Zero required paid databases or third-party paid subscriptions.
   - Local browser storage for chat histories with complete JSON & Markdown export support.

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- Node.js 18+ or 20+
- npm or yarn

### 2. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/your-username/ContentCreatorSkills.git
cd ContentCreatorSkills
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Inside `.env`, configure your Gemini API Key:
```env
GEMINI_API_KEY="your-gemini-api-key-here"
```
> **How to get a Gemini API Key**:
> 1. Visit [Google AI Studio](https://aistudio.google.com/)
> 2. Click **Get API Key** and create a free key.
> 3. Paste it as `GEMINI_API_KEY` in `.env`.

### 4. Run Locally
Run the development server:
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 📦 Building for Production

To build the client-side SPA and server bundle:
```bash
npm run build
```
To run the production server:
```bash
npm run start
```

---

## 🌐 Deploying for Free on Netlify

ContentCreatorSkills is architected for free-tier deployment on [Netlify](https://www.netlify.com/).

### Option A: Deploy via Netlify CLI
1. Install the Netlify CLI if you haven't already:
   ```bash
   npm install -g netlify-cli
   ```
2. Link or initialize your project:
   ```bash
   netlify init
   ```
3. Set your environment variable:
   ```bash
   netlify env:set GEMINI_API_KEY "your-gemini-api-key-here"
   ```
4. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Option B: Deploy via Netlify Dashboard (Git Push)
1. Push your repository to GitHub or GitLab.
2. In the Netlify Dashboard, click **Add new site** > **Import an existing project**.
3. Choose your repository.
4. Netlify will automatically detect `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Functions directory**: `netlify/functions`
5. Go to **Site settings** > **Environment variables** > **Add a variable**:
   - Key: `GEMINI_API_KEY`
   - Value: `your-gemini-api-key-here`
6. Click **Deploy site**.

The included `netlify.toml` automatically proxies all `/api/*` requests to the serverless Netlify function in `netlify/functions/chat.ts`, so the app functions identically in the cloud without requiring a paid server.

---

## 🔧 Troubleshooting Common Problems

| Problem | Cause | Solution |
|---|---|---|
| `"GEMINI_API_KEY is not configured"` | Missing API key in environment variables | Add `GEMINI_API_KEY` to your `.env` locally or in Netlify Site Settings > Environment variables. |
| `"You appear to be offline"` | Network connection lost | Verify your device's internet connection. |
| Microphone button not working | Browser permissions or unsupported browser | Ensure your browser has granted microphone permission. Chrome, Edge, and Safari support the Web Speech API. |
| 404 on page refresh on Netlify | SPA routing redirect missing | The included `netlify.toml` contains `[[redirects]] from = "/*" to = "/index.html"` which handles client-side routing. |

---

## 🛡️ Security & Privacy
- **API Key Safety**: The Gemini API key is never exposed to the client browser. All generation requests are proxied securely through server-side endpoints (`/api/chat` on Express or `netlify/functions/chat.ts` on Netlify).
- **Client Privacy**: Chat histories remain stored on the creator's device inside `localStorage` unless exported.

---

## 📄 License
MIT License. Created for content creators, artists, and the showbiz entertainment industry worldwide.
