/**
 * ContentCreatorSkills - Vanilla JavaScript Studio Engine
 * Pure modern ES6 JavaScript (No frameworks, runs in any browser & platform)
 */

(function () {
  'use strict';

  // --- Multi-Language Translations & Configurations ---
  const I18N = {
    rw: {
      brandSub: 'Ubufatanye bwa AI n\'abahanzi n\'aba creators',
      statusOnline: 'AI Irakora',
      btnNewChat: 'Ikiganiro Gishya',
      btnSaved: 'Ibibitswe',
      btnSettings: 'Igenamiterere',
      catTikTok: 'TikTok & Reels Hooks',
      catYouTube: 'YouTube Titles & Scripts',
      catMusic: 'Indirimbo & Amagambo (Lyrics)',
      catShowbiz: 'Showbiz & PR / Amatangazo',
      catMonetize: 'Kwinjiza Amafaranga & Brands',
      catStrategy: 'Gahunda y\'Ukwezi (Calendar)',
      toneLabel: 'Umwuka:',
      toneViral: '⚡ Viral & Iguruka',
      tonePro: '💼 Professional & Ubucuruzi',
      toneStory: '🎭 Inkuru & Amarangamutima',
      toneHumor: '😄 Urwenya & Gusetsa',
      formatLabel: 'Imiterere:',
      formatBullet: '📋 Ingingo z\'ingenzi',
      formatFull: '📜 Script irambuye',
      formatStep: '⏱️ Intambwe ku yindi',
      heroTag: 'AI YAGENEYE ABA CREATORS N\'ABAHANZI',
      heroTitle: 'Hanga ibintu bikaze, wagure abagukurikira, kora ubucuruzi.',
      heroDesc: 'Koresha ubushobozi bwa AI mu kwandika scripts za TikTok, imitwe ya YouTube ikurura abantu, amagambo y\'indirimbo, no kuganira n\'abaterankunga.',
      placeholder: 'Andika icyo ukeneye hano... (Kanda Enter wohereze, Shift+Enter ku murongo mushya)',
      btnSend: 'Ohereza',
      card1Title: 'Hook ya TikTok / Reels',
      card1Desc: 'Script y\'amasegonda 30 ifite igikurura abantu mu masegonda 3 ya mbere.',
      card2Title: 'YouTube Titles & Ideas',
      card2Desc: 'Imitwe 5 y\'amashusho yihuta kurebwa (high CTR) n\'ingingo z\'ingenzi.',
      card3Title: 'Amagambo y\'indirimbo (Lyrics)',
      card3Desc: 'Igitero n\'inyikirizo bifite injyana mu Kinyarwanda cyangwa uruvange.',
      card4Title: 'Uburyo bwo gusaba sponsorship',
      card4Desc: 'Ibaruwa / Email yo gusaba ubaterankunga n\'ibiciro wakwaka brand.',
      copied: 'Byakoporowe!',
      emptyHistory: 'Nta butumwa burabikwa.',
      ttsReading: 'Turimo gusoma...',
      ttsStop: 'Hagarika ijwi'
    },
    en: {
      brandSub: 'AI Creative Partner for Creators & Showbiz',
      statusOnline: 'AI Active',
      btnNewChat: 'New Chat',
      btnSaved: 'Saved Scripts',
      btnSettings: 'Settings',
      catTikTok: 'TikTok & Reels Hooks',
      catYouTube: 'YouTube Titles & Scripts',
      catMusic: 'Songwriting & Lyrics',
      catShowbiz: 'Showbiz & PR Releases',
      catMonetize: 'Monetization & Brand Deals',
      catStrategy: '30-Day Content Calendar',
      toneLabel: 'Tone:',
      toneViral: '⚡ Viral & Punchy',
      tonePro: '💼 Professional & Brand',
      toneStory: '🎭 Storytelling & Emotion',
      toneHumor: '😄 Humorous & Relatable',
      formatLabel: 'Format:',
      formatBullet: '📋 Key Bullet Points',
      formatFull: '📜 Complete Script',
      formatStep: '⏱️ Step-by-Step Guide',
      heroTag: 'DESIGNED FOR CREATORS, ARTISTS & ENTERTAINERS',
      heroTitle: 'Create viral scripts, grow your audience, secure deals.',
      heroDesc: 'Harness specialized AI for viral TikTok hooks, clickable YouTube titles, hit song lyrics, and professional sponsorship pitch decks.',
      placeholder: 'Ask ContentCreatorSkills anything... (Press Enter to send, Shift+Enter for newline)',
      btnSend: 'Send',
      card1Title: 'Viral 30s TikTok Script',
      card1Desc: 'High-retention script featuring a 3-second psychological hook.',
      card2Title: 'High-CTR YouTube Ideas',
      card2Desc: '5 viral titles and thumbnail concept pairings.',
      card3Title: 'Hit Song Verse & Chorus',
      card3Desc: 'Catchy melodic structure and rhyming lyrics for modern music.',
      card4Title: 'Brand Pitch Email',
      card4Desc: 'Direct pitch template to secure paid brand sponsorships.',
      copied: 'Copied to clipboard!',
      emptyHistory: 'No saved scripts yet.',
      ttsReading: 'Reading script...',
      ttsStop: 'Stop Voice'
    },
    fr: {
      brandSub: 'Partenaire IA pour Créateurs de Contenu & Showbiz',
      statusOnline: 'IA En Ligne',
      btnNewChat: 'Nouveau Chat',
      btnSaved: 'Enregistrés',
      btnSettings: 'Paramètres',
      catTikTok: 'TikTok & Reels Accroches',
      catYouTube: 'Titres & Scripts YouTube',
      catMusic: 'Paroles & Musique',
      catShowbiz: 'Showbiz, Presse & PR',
      catMonetize: 'Monétisation & Marques',
      catStrategy: 'Calendrier de Contenu',
      toneLabel: 'Ton:',
      toneViral: '⚡ Viral & Dynamique',
      tonePro: '💼 Professionnel & Marque',
      toneStory: '🎭 Récit & Émotion',
      toneHumor: '😄 Humoristique & Léger',
      formatLabel: 'Format:',
      formatBullet: '📋 Points Clés',
      formatFull: '📜 Script Complet',
      formatStep: '⏱️ Étape par Étape',
      heroTag: 'CONÇU POUR LES CRÉATEURS ET ARTISTES',
      heroTitle: 'Créez du contenu percutant, développez votre audience.',
      heroDesc: 'Une IA dédiée aux scripts vidéo, paroles musicales, relations presse et partenariats rémunérés.',
      placeholder: 'Posez votre question... (Entrée pour envoyer, Maj+Entrée pour saut de ligne)',
      btnSend: 'Envoyer',
      card1Title: 'Accroche TikTok 30s',
      card1Desc: 'Script à forte rétention avec accroche de 3 secondes.',
      card2Title: 'Titres YouTube Viraux',
      card2Desc: '5 idées de titres à fort taux de clics et concepts visuels.',
      card3Title: 'Paroles Couplet / Refrain',
      card3Desc: 'Structure entraînante et rimes adaptées aux tendances.',
      card4Title: 'Email Partenariat Sponsor',
      card4Desc: 'Modèle professionnel pour approcher des marques.',
      copied: 'Copié !',
      emptyHistory: 'Aucun script sauvegardé.',
      ttsReading: 'Lecture en cours...',
      ttsStop: 'Arrêter l\'audio'
    },
    sw: {
      brandSub: 'Mshirika wa AI kwa Wabunifu wa Maudhui na Sanaa',
      statusOnline: 'AI Iko Hewani',
      btnNewChat: 'Mjadala Mpya',
      btnSaved: 'Iliyohifadhiwa',
      btnSettings: 'Mipangilio',
      catTikTok: 'Hooks za TikTok na Reels',
      catYouTube: 'Titles na Scripts za YouTube',
      catMusic: 'Mashairi na Nyimbo (Lyrics)',
      catShowbiz: 'Showbiz na Mahusiano ya Umma',
      catMonetize: 'Mapato na Mikataba ya Brands',
      catStrategy: 'Ratiba ya Mwezi ya Maudhui',
      toneLabel: 'Mlio:',
      toneViral: '⚡ Viral na Yenye Nguvu',
      tonePro: '💼 Kitaalamu na Kibiashara',
      toneStory: '🎭 Masimulizi na Hisia',
      toneHumor: '😄 Vichekesho na Furaha',
      formatLabel: 'Muundo:',
      formatBullet: '📋 Pointi Muhimu',
      formatFull: '📜 Script Kamili',
      formatStep: '⏱️ Hatua kwa Hatua',
      heroTag: 'KWA WABUNIFU WA MAUDHUI NA WASANII',
      heroTitle: 'Tengeneza maudhui moto, ongeza mashabiki, pata mikataba.',
      heroDesc: 'Tumia nguvu ya AI kuandika scripts za video fupi, vichwa vya YouTube, mashairi ya nyimbo na barua pepe za biashara.',
      placeholder: 'Uliza hapa... (Bonyeza Enter kutuma, Shift+Enter kwa mstari mpya)',
      btnSend: 'Tuma',
      card1Title: 'Script ya TikTok ya Sekunde 30',
      card1Desc: 'Script yenye mvuto mkubwa ndani ya sekunde 3 za mwanzo.',
      card2Title: 'Vichwa 5 Bora vya YouTube',
      card2Desc: 'Titles zenye click-through rate kubwa na maelezo.',
      card3Title: 'Ubeti na Kiitikio cha Wimbo',
      card3Desc: 'Mashairi yenye mdundo mzuri wa kisasa.',
      card4Title: 'Barua ya Kuomba Udhamini (Pitch)',
      card4Desc: 'Ujumbe wa kitaalamu kwa kampuni na biashara.',
      copied: 'Imenakiliwa!',
      emptyHistory: 'Hakuna scripts zilizohifadhiwa.',
      ttsReading: 'Inasoma...',
      ttsStop: 'Simamisha sauti'
    }
  };

  // State
  let currentLang = 'rw';
  let currentCategory = 'tiktok';
  let currentTone = 'viral';
  let currentFormat = 'full';
  let messages = [];
  let isLoading = false;
  let activeUtterance = null;
  let savedScripts = JSON.parse(localStorage.getItem('ccs_saved_scripts') || '[]');
  let customApiKey = localStorage.getItem('ccs_custom_gemini_key') || '';

  // DOM Elements
  const el = {
    brandSub: document.getElementById('brandSub'),
    statusText: document.getElementById('statusText'),
    btnNewChat: document.getElementById('btnNewChat'),
    btnSavedToggle: document.getElementById('btnSavedToggle'),
    btnSettingsToggle: document.getElementById('btnSettingsToggle'),
    langSelect: document.getElementById('langSelect'),
    toneSelect: document.getElementById('toneSelect'),
    formatSelect: document.getElementById('formatSelect'),
    categoryButtons: document.querySelectorAll('.category-btn'),
    messagesFeed: document.getElementById('messagesFeed'),
    welcomeHero: document.getElementById('welcomeHero'),
    composerInput: document.getElementById('composerInput'),
    btnSend: document.getElementById('btnSend'),
    btnClearChat: document.getElementById('btnClearChat'),
    btnExportChat: document.getElementById('btnExportChat'),
    charCount: document.getElementById('charCount'),
    sidebar: document.getElementById('sidebar'),
    sidebarToggle: document.getElementById('sidebarToggle'),
    savedModal: document.getElementById('savedModal'),
    savedModalClose: document.getElementById('savedModalClose'),
    savedList: document.getElementById('savedList'),
    settingsModal: document.getElementById('settingsModal'),
    settingsModalClose: document.getElementById('settingsModalClose'),
    apiKeyInput: document.getElementById('apiKeyInput'),
    btnSaveSettings: document.getElementById('btnSaveSettings'),
    quickCards: document.querySelectorAll('.hero-card'),
    promptChips: document.querySelectorAll('.prompt-chip'),
    toast: document.getElementById('appToast')
  };

  // --- Initializer ---
  function init() {
    updateLanguage(currentLang);
    bindEvents();
    renderSavedScripts();
    if (customApiKey && el.apiKeyInput) {
      el.apiKeyInput.value = customApiKey;
    }
  }

  // --- Language Switcher ---
  function updateLanguage(lang) {
    currentLang = lang;
    const t = I18N[lang] || I18N.rw;

    if (el.brandSub) el.brandSub.textContent = t.brandSub;
    if (el.statusText) el.statusText.textContent = t.statusOnline;
    if (el.btnNewChat) el.btnNewChat.querySelector('span') ? el.btnNewChat.querySelector('span').textContent = t.btnNewChat : null;
    if (el.composerInput) el.composerInput.placeholder = t.placeholder;
    if (el.btnSend) el.btnSend.querySelector('span') ? el.btnSend.querySelector('span').textContent = t.btnSend : null;

    // Update Category button text
    const catMap = {
      tiktok: t.catTikTok,
      youtube: t.catYouTube,
      music: t.catMusic,
      showbiz: t.catShowbiz,
      monetize: t.catMonetize,
      strategy: t.catStrategy
    };

    el.categoryButtons.forEach(btn => {
      const cat = btn.dataset.cat;
      const textSpan = btn.querySelector('.cat-text');
      if (textSpan && catMap[cat]) {
        textSpan.textContent = catMap[cat];
      }
    });

    // Update Tone Select options
    if (el.toneSelect) {
      el.toneSelect.options[0].text = t.toneViral;
      el.toneSelect.options[1].text = t.tonePro;
      el.toneSelect.options[2].text = t.toneStory;
      el.toneSelect.options[3].text = t.toneHumor;
    }

    // Update Format Select options
    if (el.formatSelect) {
      el.formatSelect.options[0].text = t.formatFull;
      el.formatSelect.options[1].text = t.formatBullet;
      el.formatSelect.options[2].text = t.formatStep;
    }

    // Update Hero Screen text
    if (el.welcomeHero) {
      const heroTag = el.welcomeHero.querySelector('.hero-pill span');
      if (heroTag) heroTag.textContent = t.heroTag;
      const heroTitle = el.welcomeHero.querySelector('h2');
      if (heroTitle) heroTitle.textContent = t.heroTitle;
      const heroDesc = el.welcomeHero.querySelector('p');
      if (heroDesc) heroDesc.textContent = t.heroDesc;

      const cards = el.welcomeHero.querySelectorAll('.hero-card');
      if (cards[0]) {
        cards[0].querySelector('h4').textContent = t.card1Title;
        cards[0].querySelector('p').textContent = t.card1Desc;
      }
      if (cards[1]) {
        cards[1].querySelector('h4').textContent = t.card2Title;
        cards[1].querySelector('p').textContent = t.card2Desc;
      }
      if (cards[2]) {
        cards[2].querySelector('h4').textContent = t.card3Title;
        cards[2].querySelector('p').textContent = t.card3Desc;
      }
      if (cards[3]) {
        cards[3].querySelector('h4').textContent = t.card4Title;
        cards[3].querySelector('p').textContent = t.card4Desc;
      }
    }
  }

  // --- Event Bindings ---
  function bindEvents() {
    // Language dropdown
    if (el.langSelect) {
      el.langSelect.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
      });
    }

    // Tone & Format
    if (el.toneSelect) {
      el.toneSelect.addEventListener('change', (e) => {
        currentTone = e.target.value;
      });
    }
    if (el.formatSelect) {
      el.formatSelect.addEventListener('change', (e) => {
        currentFormat = e.target.value;
      });
    }

    // Category buttons
    el.categoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        el.categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.cat;
        if (window.innerWidth < 900 && el.sidebar) {
          el.sidebar.classList.remove('open');
        }
      });
    });

    // Mobile sidebar toggle
    if (el.sidebarToggle && el.sidebar) {
      el.sidebarToggle.addEventListener('click', () => {
        el.sidebar.classList.toggle('open');
      });
    }

    // Textarea input and auto-resize
    if (el.composerInput) {
      el.composerInput.addEventListener('input', () => {
        el.composerInput.style.height = 'auto';
        el.composerInput.style.height = Math.min(el.composerInput.scrollHeight, 180) + 'px';
        if (el.charCount) {
          el.charCount.textContent = el.composerInput.value.length;
        }
        if (el.btnSend) {
          el.btnSend.disabled = el.composerInput.value.trim().length === 0 || isLoading;
        }
      });

      // Keyboard submit: Enter = send, Shift+Enter = newline
      el.composerInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSendMessage();
        }
      });
    }

    // Send Button
    if (el.btnSend) {
      el.btnSend.addEventListener('click', handleSendMessage);
    }

    // New chat
    if (el.btnNewChat) {
      el.btnNewChat.addEventListener('click', handleNewChat);
    }

    // Clear chat
    if (el.btnClearChat) {
      el.btnClearChat.addEventListener('click', handleNewChat);
    }

    // Export chat
    if (el.btnExportChat) {
      el.btnExportChat.addEventListener('click', handleExportChat);
    }

    // Hero cards quick prompts
    el.quickCards.forEach(card => {
      card.addEventListener('click', () => {
        const title = card.querySelector('h4').textContent;
        const desc = card.querySelector('p').textContent;
        const prompt = `${title}: ${desc}`;
        sendMessage(prompt);
      });
    });

    // Sidebar prompt chips
    el.promptChips.forEach(chip => {
      chip.addEventListener('click', () => {
        sendMessage(chip.textContent.trim());
      });
    });

    // Modals
    if (el.btnSavedToggle) {
      el.btnSavedToggle.addEventListener('click', () => {
        renderSavedScripts();
        el.savedModal.classList.add('open');
      });
    }
    if (el.savedModalClose) {
      el.savedModalClose.addEventListener('click', () => {
        el.savedModal.classList.remove('open');
      });
    }

    if (el.btnSettingsToggle) {
      el.btnSettingsToggle.addEventListener('click', () => {
        el.settingsModal.classList.add('open');
      });
    }
    if (el.settingsModalClose) {
      el.settingsModalClose.addEventListener('click', () => {
        el.settingsModal.classList.remove('open');
      });
    }

    // Save Settings
    if (el.btnSaveSettings) {
      el.btnSaveSettings.addEventListener('click', () => {
        customApiKey = el.apiKeyInput.value.trim();
        localStorage.setItem('ccs_custom_gemini_key', customApiKey);
        el.settingsModal.classList.remove('open');
        showToast('Settings saved successfully!');
      });
    }

    // Close modals on background click
    window.addEventListener('click', (e) => {
      if (e.target === el.savedModal) el.savedModal.classList.remove('open');
      if (e.target === el.settingsModal) el.settingsModal.classList.remove('open');
    });
  }

  // --- Send Message Handler ---
  function handleSendMessage() {
    if (isLoading) return;
    const text = el.composerInput.value.trim();
    if (!text) return;
    sendMessage(text);
  }

  function sendMessage(userText) {
    if (isLoading) return;

    // Reset textarea
    el.composerInput.value = '';
    el.composerInput.style.height = 'auto';
    if (el.charCount) el.charCount.textContent = '0';
    if (el.btnSend) el.btnSend.disabled = true;

    // Hide welcome hero if first message
    if (el.welcomeHero) {
      el.welcomeHero.style.display = 'none';
    }

    // Add user message to state & feed
    const userMsg = { role: 'user', content: userText, timestamp: new Date() };
    messages.push(userMsg);
    renderMessage(userMsg);

    // Show typing indicator
    showTypingIndicator();
    isLoading = true;

    // Request AI response
    callAI(userText);
  }

  // --- AI API Call ---
  async function callAI(userPrompt) {
    const langNames = {
      rw: 'Ikinyarwanda',
      en: 'English',
      fr: 'Français',
      sw: 'Kiswahili'
    };

    const systemInstruction = `You are ContentCreatorSkills, an expert AI creative partner designed specifically for content creators, YouTubers, TikTokers, podcasters, musicians, comedians, and showbiz entertainers.
Target Language for response: Respond naturally in ${langNames[currentLang] || 'Ikinyarwanda'}.
Current Category: ${currentCategory}
Selected Tone: ${currentTone}
Selected Output Format: ${currentFormat}

Guidelines:
1. Provide actionable, creative, viral-worthy content advice, scripts, titles, lyrics, or pitches.
2. If providing scripts, include clear cues: [Hook / 0-3s], [Visual Action], [Spoken Words / Voiceover], [Sound/Music Cue], [Call To Action].
3. Ensure the tone is punchy, high-energy, and tailored for real-world entertainment production.
4. Format your output cleanly with markdown headings, bullet points, and bold text for readability.`;

    const payload = {
      messages: messages.map(m => ({ role: m.role, content: m.content })),
      systemInstruction
    };

    try {
      let aiText = '';

      // Check if custom key is provided for direct client-side call (e.g. GitHub Pages static hosting)
      if (customApiKey) {
        aiText = await callDirectGemini(payload, customApiKey);
      } else {
        // Otherwise use server endpoint (/api/chat or /.netlify/functions/chat)
        const isStaticHost = window.location.protocol === 'file:' || window.location.hostname.includes('github.io');
        
        let serverFailed = false;
        if (!isStaticHost) {
          try {
            const endpoint = window.location.hostname.includes('netlify.app') 
              ? '/.netlify/functions/chat' 
              : '/api/chat';

            const res = await fetch(endpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });

            if (res.ok) {
              const data = await res.json();
              aiText = data.text;
            } else {
              serverFailed = true;
            }
          } catch (e) {
            serverFailed = true;
          }
        } else {
          serverFailed = true;
        }

        // If on static hosting (GitHub Pages / file://) without a server and without a custom key
        if (serverFailed && !aiText) {
          aiText = generateStaticCreatorResponse(userPrompt, currentCategory, currentTone, currentFormat, currentLang);
        }
      }

      // Remove typing indicator
      removeTypingIndicator();

      // Add Model Message
      const modelMsg = {
        role: 'model',
        content: aiText,
        timestamp: new Date()
      };
      messages.push(modelMsg);
      renderMessage(modelMsg);

    } catch (err) {
      removeTypingIndicator();
      const errMsg = {
        role: 'model',
        content: `⚠️ **Error / Ikosa:** ${err.message || 'Ntabwo twabashije kubona igisubizo. Gerageza kongera wohereze cyangwa urebe interineti.'}`,
        timestamp: new Date()
      };
      messages.push(errMsg);
      renderMessage(errMsg);
    } finally {
      isLoading = false;
      if (el.composerInput) {
        el.composerInput.focus();
        if (el.btnSend) {
          el.btnSend.disabled = el.composerInput.value.trim().length === 0;
        }
      }
    }
  }

  // --- Fallback Direct Gemini Client (for static GitHub Pages hosting with user key) ---
  async function callDirectGemini(payload, apiKey) {
    const candidateModels = [
      'gemini-2.5-flash',
      'gemini-2.0-flash',
      'gemini-1.5-flash',
      'gemini-3.1-flash-lite',
      'gemini-flash-latest'
    ];

    const contents = payload.messages.map(m => ({
      role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    let lastError = null;
    for (const model of candidateModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents,
            systemInstruction: {
              parts: [{ text: payload.systemInstruction }]
            },
            generationConfig: {
              temperature: 0.85,
              topP: 0.95
            }
          })
        });

        if (res.ok) {
          const data = await res.json();
          if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            return data.candidates[0].content.parts.map(p => p.text).join('');
          }
        } else {
          const errData = await res.json().catch(() => ({}));
          lastError = new Error(errData.error?.message || `HTTP ${res.status}`);
        }
      } catch (err) {
        lastError = err;
      }
    }
    throw lastError || new Error('Could not generate response from available AI models.');
  }

  // --- Offline & Static Creator Engine (Runs everywhere without server) ---
  function generateStaticCreatorResponse(prompt, cat, tone, format, lang) {
    const isRw = lang === 'rw';
    const isFr = lang === 'fr';
    const isSw = lang === 'sw';

    const tipNotice = isRw 
      ? `> 💡 **Inama yo kuri GitHub Pages / Static File**: Ubu uri gukorera mu buryo bwa Static (nta server iri inyuma). Kugira ngo AI iguhe ibisubizo byagutse bya Gemini Live kuri buri kintu cyose, kanda kuri **⚙️ Settings** hejuru maze ushyiremo Gemini API Key yawe y'ubuntu (ubona kuri aistudio.google.com).`
      : isFr
      ? `> 💡 **Mode Statique / GitHub Pages**: Vous utilisez l'application en mode statique. Pour activer la génération en direct par l'IA Gemini, configurez votre clé API gratuite dans **⚙️ Paramètres** en haut.`
      : isSw
      ? `> 💡 **Mfumo wa Static / GitHub Pages**: Unatumia mfumo bila seva. Kuwezesha AI moja kwa moja, weka Gemini API Key yako ya bure kwenye **⚙️ Mipangilio** hapo juu.`
      : `> 💡 **Static / GitHub Pages Mode**: You are running in client-only static mode. To connect directly to Google Gemini models, enter your free API Key under **⚙️ Settings** at the top right.`;

    if (cat === 'tiktok') {
      return `${tipNotice}\n\n### ⚡ Viral TikTok / Reels Script: "${prompt.slice(0, 45)}"\n\n**1. [Hook / Amasegonda 0-3 (Grab Attention)]**\n> *"Niba uri gukora iki kosa, uri gutakaza abagukurikira n'amafaranga utabizi!"*  \n*(Visual Cue: Erekana telephone cyangwa ufate kamera hafi cyane, uhindure umuvuduko)*\n\n**2. [Ikibazo & Amatsiko (3-12s)]**\n* Abantu benshi batekereza ko gukora content ari iby'abafite camera zihenze cyangwa studio.\n* Ukuri guhari ni uko ukeneye ibintu 3 gusa bituma video igenda (algorithm retention).\n\n**3. [Igisubizo mu ngingo 3 (12-25s)]**\n1. **Hook ikomeye**: Tangira video udatezuka ku ngingo (No greeting, dive right in).\n2. **Sound Trends**: Koresha indirimbo cyangwa amajwi ari trending ariko ugaragaze igitekerezo cyawe bwite.\n3. **Visual Pacing**: Hindura amashusho buri masegonda 2 cyangwa 3 (jump cuts & captions).\n\n**4. [Call to Action (25-30s)]**\n> *"Kanda follow niba ushaka indi script nkiyi mu cyiciro cyawe, kandi usige igitekerezo muri comments!"*`;
    }

    if (cat === 'youtube') {
      return `${tipNotice}\n\n### 🎬 YouTube High-CTR Package: "${prompt.slice(0, 45)}"\n\n#### 🎯 Imitwe 5 ikurura abantu (High CTR Titles):\n1. **"Nakoze Ibi Bintu 3 Muri Showbiz... Ibyambayeho Biratunguranye!"** *(High Curiosity)*\n2. **"Uko Watangira Content Creation Nta Kintu Na Kimwe Ufite (Step-by-Step)"** *(Actionable Guide)*\n3. **"Amabanga 5 Abahanzi n'aba Creators Bakomeye Batakubwira!"** *(Insider Secret)*\n4. **"Narekeye Aho Gukora Ibi: Impamvu Video Zanjye Zihise Zirebwa Cyane"** *(Transformation)*\n5. **"Niba Ushaka Kwinjiza Amafaranga muri Showbiz, Reba Iyi Video Mbere yo Gutangira!"** *(Urgency)*\n\n#### 🖼️ Thumbnail Concept:\n* **Left Side**: Isura yawe ifite expression y'amatsiko cyangwa gutangara.\n* **Right Side**: Grafiki cyangwa ikintu kigaragaza impinduka z'umuvuduko (Arrow / Contrast).\n* **Text Overlay (Max 3 words)**: *"AMABANGA YAHISHWE"* cyangwa *"DO THIS INSTEAD"*.`;
    }

    if (cat === 'music') {
      return `${tipNotice}\n\n### 🎵 Amagambo n'Injyana y'Indirimbo (Songwriting & Lyrics)\n**Injyana**: Afrobeat / Afro-Pop (Tempo: 104 BPM)\n\n**[Igitero cya 1 (Verse 1)]**\nInzira nanyuze ntabwo yari yoroshye,\nAmaso y'abantu yandebaga nk'uwatsinzwe,\nAriko umutima wanjye warabizi neza,\nIjoro uko ryaba ryirabura kose, bucya gitondo...\n\n**[Pre-Chorus]**\nBambwiraga ko ntagera kure,\nNone dore urugendo ruracyakomeza,\nUmva ijwi rirahamagara,\nIki nicyo gihe cyo kumurika...\n\n**[Inyikirizo (Chorus)]**\n*(Rhythm ikubita hejuru, log drums na bass)*\nSinzasubira inyuma, oya sinzatezuka,\nInzozi zanjye nzirinda amanywa n'ijoro,\nTubyinire ibyiza biri imbere,\nYeh yeh, dore turi kuryoshya!\n\n**[Inama y'umuhanzi (Musician Note)]**\n* Koresha melodi yoroshye kwibukwa ku nshuro ya mbere (Earworm effect).\n* Ongera amajwi y'inyuma (harmonies) muri chorus kugira ngo yaguke mu matwi y'umufana.`;
    }

    if (cat === 'showbiz' || cat === 'monetize') {
      return `${tipNotice}\n\n### 💼 Sponsorship Pitch & Deal Proposal\n\n**Subject**: *Ubufatanye hagati ya [Izina Ryawe/Channel] na [Izina rya Brand] – Kugeraho abantu 50,000+*\n\nMuraho neza Team ya **[Brand Name]**,\n\nNitwa **[Izina Ryawe]**, nkora ibijyanye na content creation kuri [TikTok / YouTube / Instagram] aho ngeze ku bantu barenga [Umubare w'abakukurikira] bakurikirana ibiganiro byanjye byibanze kuri [Ingingo ukoraho: Entertainment / Music / Tech / Lifestyle].\n\nNabonye ibicuruzwa byanyu bishya bya [Izina ry'igicuruzwa cyabo], kandi mbona bikwiranye neza cyane n'abantu bankurikira (benshi bari hagati y'imyaka 18-35 bafite ubushobozi bwo kugura).\n\n**Icyo mbaha mu bufatanye (Deliverables):**\n* 📱 Video 1 ya TikTok / Reels y'amasegonda 60 irimo product placement n'inkuru ifatika.\n* 🎬 Segment y'amasegonda 30 muri video yanjye ya YouTube itaha.\n* 🔗 Link yo kugura (Call-to-Action) hamwe na Promo Code yihariye izwi gusa ku banyuraho.\n\nNshobora kuboherereza Media Kit yanjye irimo imibare nyakuri y'uburyo abantu bita ku byo nkora (Engagement Rate: [e.g. 8.4%]).\n\nNiba mwiteguye, twashyiraho akanya gato ko kuganira kuri telephone muri iki cyumweru.\n\nMwakoze cyane,\n**[Izina Ryawe]**  \n[Email & Telephone]`;
    }

    return `${tipNotice}\n\n### 📅 Gahunda y'Icyumweru y'Umuremyi w'Ibihangano (Content Plan)\n\n* **Ku wa Mbere (Monday Motivation)**: Gushyira hanze video ngufi yerekana inyuma y'amashusho (Behind-the-scenes) cyangwa inama z'ubuzima.\n* **Ku wa Gatatu (Deep Dive)**: Gusohora video y'ingingo ikomeye kuri YouTube cyangwa podcast igaruka ku ngingo igezweho muri showbiz.\n* **Ku wa Gatanu (Entertainment / Music)**: Video ishyushye y'indirimbo, challenge, cyangwa urwenya rwibanze ku mpera z'icyumweru.\n* **Ku Cyumweru (Community Engagement)**: Q&A Live hamwe n'abafana cyangwa gushyira hanze amatora (Polls) muri YouTube Community tab.\n\n**Inama y'ingenzi**: Komeza kuba indahemuka ku mwihariko wawe (consistency) – ireme n'ingufu bishyirwemo nibyo bituma urambana igikundiro!`;
  }

  // --- UI Renderers ---
  function renderMessage(msg) {
    const isUser = msg.role === 'user';
    const row = document.createElement('div');
    row.className = `message-row ${isUser ? 'user' : 'model'}`;

    const avatar = isUser ? '👤' : '⚡';
    const sender = isUser ? 'You' : 'ContentCreatorSkills AI';
    const formattedContent = isUser ? escapeHtml(msg.content) : parseMarkdown(msg.content);
    const timeStr = formatTime(msg.timestamp);

    let actionsHtml = '';
    if (!isUser) {
      actionsHtml = `
        <div class="message-actions">
          <button class="action-btn btn-copy" title="Copy to clipboard">
            📋 Copy
          </button>
          <button class="action-btn btn-speak" title="Listen to script">
            🔊 Listen
          </button>
          <button class="action-btn btn-save" title="Save to Favorites">
            ⭐ Save
          </button>
        </div>
      `;
    }

    row.innerHTML = `
      <div class="message-avatar">${avatar}</div>
      <div class="message-body">
        <div class="message-header">
          <span class="sender-name">${sender}</span>
          <span class="message-time">${timeStr}</span>
        </div>
        <div class="message-content">${formattedContent}</div>
        ${actionsHtml}
      </div>
    `;

    // Attach actions
    if (!isUser) {
      const copyBtn = row.querySelector('.btn-copy');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(msg.content);
          copyBtn.textContent = '✅ Copied!';
          setTimeout(() => { copyBtn.textContent = '📋 Copy'; }, 2000);
        });
      }

      const speakBtn = row.querySelector('.btn-speak');
      if (speakBtn) {
        speakBtn.addEventListener('click', () => {
          toggleSpeech(msg.content, speakBtn);
        });
      }

      const saveBtn = row.querySelector('.btn-save');
      if (saveBtn) {
        saveBtn.addEventListener('click', () => {
          saveScript(msg.content);
          saveBtn.textContent = '⭐ Saved!';
          setTimeout(() => { saveBtn.textContent = '⭐ Save'; }, 2000);
        });
      }
    }

    el.messagesFeed.appendChild(row);
    scrollToBottom();
  }

  function showTypingIndicator() {
    const existing = document.getElementById('typingIndicator');
    if (existing) return;

    const row = document.createElement('div');
    row.id = 'typingIndicator';
    row.className = 'message-row model';
    row.innerHTML = `
      <div class="message-avatar">⚡</div>
      <div class="message-body">
        <div class="message-header">
          <span class="sender-name">ContentCreatorSkills AI</span>
        </div>
        <div class="typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>
    `;
    el.messagesFeed.appendChild(row);
    scrollToBottom();
  }

  function removeTypingIndicator() {
    const existing = document.getElementById('typingIndicator');
    if (existing) existing.remove();
  }

  function scrollToBottom() {
    el.messagesFeed.scrollTop = el.messagesFeed.scrollHeight;
  }

  // --- Speech Synthesis (Text-to-Speech) ---
  function toggleSpeech(text, btn) {
    if (!('speechSynthesis' in window)) {
      showToast('Speech synthesis is not supported on this browser.');
      return;
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      btn.classList.remove('active-speech');
      btn.textContent = '🔊 Listen';
      return;
    }

    // Clean markdown before speaking
    const cleanText = text
      .replace(/[*#_`>]/g, '')
      .replace(/\[.*?\]/g, '')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    // Pick voice based on language if available
    const voices = window.speechSynthesis.getVoices();
    if (currentLang === 'fr') {
      const frVoice = voices.find(v => v.lang.startsWith('fr'));
      if (frVoice) utterance.voice = frVoice;
    } else if (currentLang === 'sw') {
      const swVoice = voices.find(v => v.lang.startsWith('sw'));
      if (swVoice) utterance.voice = swVoice;
    } else {
      const enVoice = voices.find(v => v.lang.startsWith('en'));
      if (enVoice) utterance.voice = enVoice;
    }

    btn.classList.add('active-speech');
    btn.textContent = '⏹️ Stop';

    utterance.onend = () => {
      btn.classList.remove('active-speech');
      btn.textContent = '🔊 Listen';
    };

    utterance.onerror = () => {
      btn.classList.remove('active-speech');
      btn.textContent = '🔊 Listen';
    };

    window.speechSynthesis.speak(utterance);
  }

  // --- Saved Scripts Management ---
  function saveScript(content) {
    const title = content.slice(0, 50).replace(/[#*]/g, '').trim() + '...';
    const item = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString()
    };
    savedScripts.unshift(item);
    localStorage.setItem('ccs_saved_scripts', JSON.stringify(savedScripts));
    showToast('Script saved to Favorites!');
  }

  function renderSavedScripts() {
    if (!el.savedList) return;
    if (savedScripts.length === 0) {
      el.savedList.innerHTML = `<p style="color: var(--text-dim); text-align: center; padding: 20px;">${I18N[currentLang].emptyHistory}</p>`;
      return;
    }

    el.savedList.innerHTML = savedScripts.map(item => `
      <div class="saved-item" data-id="${item.id}">
        <div class="saved-item-title">${escapeHtml(item.title)}</div>
        <div class="saved-item-snippet">${escapeHtml(item.content.slice(0, 140))}...</div>
        <div class="saved-item-actions">
          <button class="action-btn copy-saved" data-id="${item.id}">📋 Copy</button>
          <button class="action-btn delete-saved" data-id="${item.id}" style="color: var(--accent-rose);">🗑️ Delete</button>
        </div>
      </div>
    `).join('');

    // Attach copy & delete
    el.savedList.querySelectorAll('.copy-saved').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = Number(btn.dataset.id);
        const script = savedScripts.find(s => s.id === id);
        if (script) {
          navigator.clipboard.writeText(script.content);
          showToast('Copied to clipboard!');
        }
      });
    });

    el.savedList.querySelectorAll('.delete-saved').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = Number(btn.dataset.id);
        savedScripts = savedScripts.filter(s => s.id !== id);
        localStorage.setItem('ccs_saved_scripts', JSON.stringify(savedScripts));
        renderSavedScripts();
        showToast('Script removed.');
      });
    });
  }

  // --- Chat Actions ---
  function handleNewChat() {
    messages = [];
    el.messagesFeed.innerHTML = '';
    if (el.welcomeHero) {
      el.welcomeHero.style.display = 'block';
      el.messagesFeed.appendChild(el.welcomeHero);
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    showToast('New chat started.');
  }

  function handleExportChat() {
    if (messages.length === 0) {
      showToast('No messages to export.');
      return;
    }

    let textContent = `# ContentCreatorSkills - Chat Export\nDate: ${new Date().toLocaleString()}\n\n`;
    messages.forEach(m => {
      const sender = m.role === 'user' ? 'Creator' : 'ContentCreatorSkills AI';
      textContent += `### ${sender} (${formatTime(m.timestamp)}):\n${m.content}\n\n---\n\n`;
    });

    const blob = new Blob([textContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `content-creator-script-${Date.now()}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('Exported to file successfully!');
  }

  // --- Utility Functions ---
  function formatTime(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Lightweight Markdown to HTML Parser
  function parseMarkdown(md) {
    if (!md) return '';
    let html = escapeHtml(md);

    // Code blocks ```code```
    html = html.replace(/```([\s\S]*?)```/g, (match, p1) => {
      return `<pre><code>${p1.trim()}</code></pre>`;
    });

    // Inline code `code`
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold **text**
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Italic *text*
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Blockquotes > text
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

    // Bullet lists
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Paragraph line breaks
    html = html.replace(/\n\n+/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');

    return `<p>${html}</p>`;
  }

  function showToast(message) {
    if (!el.toast) return;
    el.toast.textContent = message;
    el.toast.style.display = 'block';
    el.toast.style.opacity = '1';
    setTimeout(() => {
      el.toast.style.opacity = '0';
      setTimeout(() => { el.toast.style.display = 'none'; }, 300);
    }, 2500);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
