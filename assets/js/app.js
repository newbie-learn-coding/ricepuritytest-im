(function(){
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const clampScore = (n) => Math.max(0, Math.min(100, Number.isFinite(n) ? Math.round(n) : 75));
  const path = window.location.pathname;
  const prefix = path.match(/^\/(es|pt|id|de|fr|zh|ja)\//)?.[1] || 'en';
  const base = prefix === 'en' ? '' : '/' + prefix;
  const ASSET_VERSION = 'ui-20260609-p43-mobilecards';
  const QR_CANONICAL_URL = 'https://ricepuritytest.im/take/';
  const QR_ASSET_URL = `/assets/img/qr-ricepuritytest-take.svg?v=${ASSET_VERSION}`;
  const DEFAULT_SCORE = 75;

  const CARD_TEMPLATES = [
    {id:'classic', name:'Classic Score Card', desc:'Academic report card style'},
    {id:'notebook', name:'Notebook Grid', desc:'Retro school worksheet style'},
    {id:'neon', name:'Dark Neon', desc:'Late-night social style'},
    {id:'pastel', name:'Cute Pastel', desc:'Soft social post style'},
    {id:'minimal', name:'Minimal Clean', desc:'Quiet editorial style'}
  ];

  const CARD_SIZES = [
    {id:'story', name:'TikTok/IG Story', shortName:'Story', desc:'1080 x 1920', width:1080, height:1920, ratio:'9:16'},
    {id:'square', name:'Instagram/Post', shortName:'Post', desc:'1080 x 1080', width:1080, height:1080, ratio:'1:1'},
    {id:'landscape', name:'Link Preview/X', shortName:'Link/X', desc:'1200 x 630', width:1200, height:630, ratio:'1.91:1'}
  ];

  const ui = {
    en: {
      copiedImage:'Image copied.',
      copyImageUnsupported:'Copy image is not supported in this browser. Downloaded PNG instead.',
      copyImageFailed:'Copy failed. Downloaded PNG instead.',
      copiedLink:'Result link copied.',
      copiedCaption:'Caption copied.',
      shareTitle:'Rice Purity Test Score',
      shareFallback:'Sharing files is not supported here. Sharing the link instead.',
      cardTop:'I got',
      cardMiddle:'on the Rice Purity Test',
      cardPrompt:'Can you beat my score?',
      cardPrivacy:'Private · Browser-based · Answers not stored',
      cardPrivacyShort:'Private · Answers not stored',
      studioTitle:'Score Card Studio',
      compactTitle:'Share a score-only card',
      studioLead:'Create a private challenge card that shows only your score.',
      scoreLabel:'Customize score',
      badgeLabel:'Badge text style',
      normalBadge:'Classic Normal',
      socialBadge:'Social Meme',
      templateLabel:'Choose card theme',
      sizeLabel:'Target size',
      detailsLabel:'Card details',
      showWebsite:'Show website',
      showPrivacy:'Show privacy',
      showQr:'Show QR code',
      previewLabel:'High-fidelity preview',
      download:'Download PNG Card',
      copyImage:'Copy Image',
      share:'Share',
      copyLink:'Copy Link',
      retake:'Retake Test',
      scoreMeaning:'Score Meaning',
      openResult:'Open Result Page',
      copyCaption:'Copy caption',
      captionLabel:'Smart caption',
      socialLabel:'Share it anywhere',
      teaserEyebrow:'Score-only challenge card',
      teaserTitle:'Turn your score into a challenge card',
      teaserScoreTitle:'Share score {score} as a challenge card',
      teaserLead:'Preview the card here, then open the studio for templates, sizes, PNG, copy image, and sharing.',
      createCard:'Create share card'
    },
    zh: {
      copiedImage:'图片已复制。',
      copyImageUnsupported:'此浏览器不支持复制图片，已改为下载 PNG。',
      copyImageFailed:'复制失败，已改为下载 PNG。',
      copiedLink:'结果链接已复制。',
      copiedCaption:'文案已复制。',
      shareTitle:'Rice Purity Test 分数',
      shareFallback:'当前浏览器不支持分享图片，已改为分享链接。',
      cardTop:'我得了',
      cardMiddle:'在 Rice Purity Test',
      cardPrompt:'你能超过我的分数吗？',
      cardPrivacy:'私密 · 浏览器本地 · 不保存答案',
      cardPrivacyShort:'私密 · 不保存答案',
      studioTitle:'结果卡工作台',
      compactTitle:'分享只含分数的卡片',
      studioLead:'生成只展示分数的私密挑战卡。',
      scoreLabel:'调整分数',
      badgeLabel:'Badge 文案风格',
      normalBadge:'普通版',
      socialBadge:'社交版',
      templateLabel:'选择卡片模板',
      sizeLabel:'目标尺寸',
      detailsLabel:'卡片信息',
      showWebsite:'显示网站名',
      showPrivacy:'显示隐私标签',
      showQr:'显示二维码',
      previewLabel:'高清预览',
      download:'下载 PNG 卡片',
      copyImage:'复制图片',
      share:'分享',
      copyLink:'复制链接',
      retake:'重新测试',
      scoreMeaning:'分数含义',
      openResult:'打开结果页',
      copyCaption:'复制文案',
      captionLabel:'智能社交文案',
      socialLabel:'分享到社交平台',
      teaserEyebrow:'只含分数的挑战卡',
      teaserTitle:'把你的分数变成可分享挑战卡',
      teaserScoreTitle:'把 {score} 分做成挑战卡',
      teaserLead:'先在这里预览，再打开工作台选择模板、尺寸、PNG、复制图片和分享。',
      createCard:'制作分享卡'
    },
    es: {
      copiedImage:'Imagen copiada.',
      copyImageUnsupported:'Este navegador no permite copiar imagenes. Se descargo PNG.',
      copyImageFailed:'No se pudo copiar. Se descargo PNG.',
      copiedLink:'Enlace del resultado copiado.',
      copiedCaption:'Texto copiado.',
      shareTitle:'Puntuación del Rice Purity Test',
      shareFallback:'No se puede compartir la imagen aqui. Se compartira el enlace.',
      cardTop:'Obtuve',
      cardMiddle:'en el Rice Purity Test',
      cardPrompt:'Puedes superar mi puntuacion?',
      cardPrivacy:'Privado · En el navegador · Respuestas no guardadas',
      cardPrivacyShort:'Privado · Respuestas no guardadas',
      studioTitle:'Estudio de tarjeta',
      compactTitle:'Comparte una tarjeta solo con tu puntuacion',
      studioLead:'Crea una tarjeta privada que muestra solo tu puntuacion.',
      scoreLabel:'Personalizar puntuacion',
      badgeLabel:'Estilo de insignia',
      normalBadge:'Normal',
      socialBadge:'Social',
      templateLabel:'Tema de tarjeta',
      sizeLabel:'Tamano objetivo',
      detailsLabel:'Detalles',
      showWebsite:'Mostrar sitio',
      showPrivacy:'Mostrar privacidad',
      showQr:'Mostrar QR',
      previewLabel:'Vista previa',
      download:'Descargar PNG',
      copyImage:'Copiar imagen',
      share:'Compartir',
      copyLink:'Copiar enlace',
      retake:'Repetir test',
      scoreMeaning:'Significado',
      openResult:'Pagina de resultado',
      copyCaption:'Copiar texto',
      captionLabel:'Texto social',
      socialLabel:'Comparte o envia',
      teaserEyebrow:'Tarjeta de reto solo con puntuacion',
      teaserTitle:'Convierte tu puntuacion en una tarjeta de reto',
      teaserScoreTitle:'Comparte la puntuacion {score} como tarjeta de reto',
      teaserLead:'Previsualiza la tarjeta aqui y abre el estudio para plantillas, tamanos, PNG, copiar imagen y compartir.',
      createCard:'Crear tarjeta'
    },
    pt: {
      copiedImage:'Imagem copiada.',
      copyImageUnsupported:'Este navegador nao permite copiar imagens. PNG baixado.',
      copyImageFailed:'Nao foi possivel copiar. PNG baixado.',
      copiedLink:'Link do resultado copiado.',
      copiedCaption:'Legenda copiada.',
      shareTitle:'Pontuacao do Rice Purity Test',
      shareFallback:'Compartilhar imagem nao e suportado aqui. Compartilhando link.',
      cardTop:'Tirei',
      cardMiddle:'no Rice Purity Test',
      cardPrompt:'Consegue superar minha pontuacao?',
      cardPrivacy:'Privado · No navegador · Respostas nao salvas',
      cardPrivacyShort:'Privado · Respostas nao salvas',
      studioTitle:'Estudio do cartao',
      compactTitle:'Compartilhe um cartao so com a pontuacao',
      studioLead:'Crie um cartao privado que mostra apenas sua pontuacao.',
      scoreLabel:'Personalizar pontuacao',
      badgeLabel:'Estilo do badge',
      normalBadge:'Normal',
      socialBadge:'Social',
      templateLabel:'Tema do cartao',
      sizeLabel:'Tamanho alvo',
      detailsLabel:'Detalhes',
      showWebsite:'Mostrar site',
      showPrivacy:'Mostrar privacidade',
      showQr:'Mostrar QR',
      previewLabel:'Previa',
      download:'Baixar PNG',
      copyImage:'Copiar imagem',
      share:'Compartilhar',
      copyLink:'Copiar link',
      retake:'Refazer teste',
      scoreMeaning:'Significado',
      openResult:'Pagina de resultado',
      copyCaption:'Copiar legenda',
      captionLabel:'Legenda social',
      socialLabel:'Compartilhe ou envie',
      teaserEyebrow:'Cartao de desafio so com pontuacao',
      teaserTitle:'Transforme sua pontuacao em um cartao de desafio',
      teaserScoreTitle:'Compartilhe a pontuacao {score} como cartao de desafio',
      teaserLead:'Veja a previa aqui e abra o estudio para modelos, tamanhos, PNG, copiar imagem e compartilhar.',
      createCard:'Criar cartao'
    },
    id: {
      copiedImage:'Gambar disalin.',
      copyImageUnsupported:'Browser ini tidak mendukung salin gambar. PNG diunduh.',
      copyImageFailed:'Gagal menyalin. PNG diunduh.',
      copiedLink:'Tautan hasil disalin.',
      copiedCaption:'Caption disalin.',
      shareTitle:'Skor Rice Purity Test',
      shareFallback:'Berbagi gambar tidak didukung. Membagikan tautan.',
      cardTop:'Saya mendapat',
      cardMiddle:'di Rice Purity Test',
      cardPrompt:'Bisa kalahkan skor saya?',
      cardPrivacy:'Privat · Di browser · Jawaban tidak disimpan',
      cardPrivacyShort:'Privat · Jawaban tidak disimpan',
      studioTitle:'Studio kartu skor',
      compactTitle:'Bagikan kartu khusus skor',
      studioLead:'Buat kartu tantangan privat yang hanya menampilkan skor.',
      scoreLabel:'Atur skor',
      badgeLabel:'Gaya badge',
      normalBadge:'Normal',
      socialBadge:'Social',
      templateLabel:'Tema kartu',
      sizeLabel:'Ukuran target',
      detailsLabel:'Detail',
      showWebsite:'Tampilkan situs',
      showPrivacy:'Tampilkan privasi',
      showQr:'Tampilkan QR',
      previewLabel:'Pratinjau',
      download:'Unduh PNG',
      copyImage:'Salin gambar',
      share:'Bagikan',
      copyLink:'Salin tautan',
      retake:'Ulangi tes',
      scoreMeaning:'Arti skor',
      openResult:'Halaman hasil',
      copyCaption:'Salin caption',
      captionLabel:'Caption sosial',
      socialLabel:'Bagikan atau kirim',
      teaserEyebrow:'Kartu tantangan khusus skor',
      teaserTitle:'Ubah skormu menjadi kartu tantangan',
      teaserScoreTitle:'Bagikan skor {score} sebagai kartu tantangan',
      teaserLead:'Lihat pratinjau di sini, lalu buka studio untuk template, ukuran, PNG, salin gambar, dan berbagi.',
      createCard:'Buat kartu'
    },
    de: {
      copiedImage:'Bild kopiert.',
      copyImageUnsupported:'Dieser Browser unterstuetzt Bildkopie nicht. PNG wurde heruntergeladen.',
      copyImageFailed:'Kopieren fehlgeschlagen. PNG wurde heruntergeladen.',
      copiedLink:'Ergebnislink kopiert.',
      copiedCaption:'Caption kopiert.',
      shareTitle:'Rice Purity Test Punktzahl',
      shareFallback:'Bildteilen wird hier nicht unterstuetzt. Link wird geteilt.',
      cardTop:'Ich habe',
      cardMiddle:'im Rice Purity Test',
      cardPrompt:'Kannst du meine Punktzahl schlagen?',
      cardPrivacy:'Privat · Im Browser · Antworten nicht gespeichert',
      cardPrivacyShort:'Privat · Antworten nicht gespeichert',
      studioTitle:'Score Card Studio',
      compactTitle:'Teile eine Karte nur mit Punktzahl',
      studioLead:'Erstelle eine private Challenge-Karte nur mit Punktzahl.',
      scoreLabel:'Punktzahl anpassen',
      badgeLabel:'Badge-Stil',
      normalBadge:'Normal',
      socialBadge:'Social',
      templateLabel:'Kartenthema',
      sizeLabel:'Zielgroesse',
      detailsLabel:'Details',
      showWebsite:'Website zeigen',
      showPrivacy:'Privatsphaere zeigen',
      showQr:'QR zeigen',
      previewLabel:'Vorschau',
      download:'PNG herunterladen',
      copyImage:'Bild kopieren',
      share:'Teilen',
      copyLink:'Link kopieren',
      retake:'Test wiederholen',
      scoreMeaning:'Bedeutung',
      openResult:'Ergebnisseite',
      copyCaption:'Caption kopieren',
      captionLabel:'Social Caption',
      socialLabel:'Teilen oder senden',
      teaserEyebrow:'Challenge-Karte nur mit Punktzahl',
      teaserTitle:'Mach aus deiner Punktzahl eine Challenge-Karte',
      teaserScoreTitle:'Teile Punktzahl {score} als Challenge-Karte',
      teaserLead:'Sieh dir die Karte hier an und oeffne das Studio fuer Vorlagen, Groessen, PNG, Bildkopie und Teilen.',
      createCard:'Karte erstellen'
    },
    fr: {
      copiedImage:'Image copiee.',
      copyImageUnsupported:'Ce navigateur ne copie pas les images. PNG telecharge.',
      copyImageFailed:'Copie impossible. PNG telecharge.',
      copiedLink:'Lien du resultat copie.',
      copiedCaption:'Legende copiee.',
      shareTitle:'Score Rice Purity Test',
      shareFallback:'Le partage image est indisponible ici. Partage du lien.',
      cardTop:"J'ai obtenu",
      cardMiddle:'au Rice Purity Test',
      cardPrompt:'Tu peux battre mon score ?',
      cardPrivacy:'Prive · Dans le navigateur · Reponses non stockees',
      cardPrivacyShort:'Prive · Reponses non stockees',
      studioTitle:'Studio de carte',
      compactTitle:'Partage une carte avec le score seulement',
      studioLead:'Cree une carte privee qui montre seulement ton score.',
      scoreLabel:'Ajuster le score',
      badgeLabel:'Style du badge',
      normalBadge:'Normal',
      socialBadge:'Social',
      templateLabel:'Theme de carte',
      sizeLabel:'Format cible',
      detailsLabel:'Details',
      showWebsite:'Afficher le site',
      showPrivacy:'Afficher confidentialite',
      showQr:'Afficher QR',
      previewLabel:'Apercu',
      download:'Telecharger PNG',
      copyImage:'Copier image',
      share:'Partager',
      copyLink:'Copier le lien',
      retake:'Refaire le test',
      scoreMeaning:'Signification',
      openResult:'Page de resultat',
      copyCaption:'Copier la legende',
      captionLabel:'Legende sociale',
      socialLabel:'Partager ou envoyer',
      teaserEyebrow:'Carte defi avec score seulement',
      teaserTitle:'Transforme ton score en carte defi',
      teaserScoreTitle:'Partage le score {score} en carte defi',
      teaserLead:'Apercu ici, puis ouvre le studio pour modeles, formats, PNG, copie image et partage.',
      createCard:'Creer la carte'
    },
    ja: {
      copiedImage:'画像をコピーしました。',
      copyImageUnsupported:'このブラウザでは画像コピーに対応していません。PNGを保存しました。',
      copyImageFailed:'コピーできませんでした。PNGを保存しました。',
      copiedLink:'結果リンクをコピーしました。',
      copiedCaption:'キャプションをコピーしました。',
      shareTitle:'Rice Purity Test スコア',
      shareFallback:'画像共有に対応していません。リンクを共有します。',
      cardTop:'スコアは',
      cardMiddle:'Rice Purity Test',
      cardPrompt:'このスコアを超えられる？',
      cardPrivacy:'プライベート · ブラウザ内 · 回答は保存されません',
      cardPrivacyShort:'プライベート · 回答は保存されません',
      studioTitle:'スコアカード作成',
      compactTitle:'スコアだけのカードを共有',
      studioLead:'スコアだけを表示するプライベートなカードを作成します。',
      scoreLabel:'スコア調整',
      badgeLabel:'バッジ文体',
      normalBadge:'通常',
      socialBadge:'ソーシャル',
      templateLabel:'カードテーマ',
      sizeLabel:'サイズ',
      detailsLabel:'詳細',
      showWebsite:'サイト名',
      showPrivacy:'プライバシー',
      showQr:'QR表示',
      previewLabel:'プレビュー',
      download:'PNG保存',
      copyImage:'画像コピー',
      share:'共有',
      copyLink:'リンクコピー',
      retake:'再テスト',
      scoreMeaning:'スコアの意味',
      openResult:'結果ページ',
      copyCaption:'キャプションコピー',
      captionLabel:'共有キャプション',
      socialLabel:'共有または送信',
      teaserEyebrow:'スコアだけのチャレンジカード',
      teaserTitle:'スコアを共有用チャレンジカードにする',
      teaserScoreTitle:'{score} 点をチャレンジカードで共有',
      teaserLead:'ここでカードを確認し、スタジオでテンプレート、サイズ、PNG、画像コピー、共有を選べます。',
      createCard:'カード作成'
    }
  };

  const text = Object.assign({}, ui.en, ui[prefix] || {});
  const monoFont = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace';
  const sansFont = 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif';
  const serifFont = 'Georgia, "Times New Roman", serif';

  function createCardState(overrides={}){
    return Object.assign({
      score: DEFAULT_SCORE,
      template: 'classic',
      size: 'story',
      badgeMode: 'social',
      showWebsite: true,
      showPrivacy: true,
      showQr: true
    }, overrides);
  }

  const cardState = createCardState();

  const studioRoots = [];
  let toastTimer = null;
  let qrLoaded = false;
  let qrFailed = false;
  const qrImage = new Image();
  const qrReady = new Promise(resolve => {
    qrImage.onload = () => { qrLoaded = true; resolve(true); renderAllStudios(); };
    qrImage.onerror = () => { qrFailed = true; resolve(false); renderAllStudios(); };
  });
  qrImage.src = QR_ASSET_URL;

  function scoreProfile(score, mode=cardState.badgeMode){
    const social = mode === 'social';
    if(score >= 90){
      return {
        key:'very-high',
        normalLabel:'Very High Score',
        socialLabel:'Almost Untouched Energy',
        label:social ? 'Almost Untouched Energy' : 'Very High Score',
        desc:'Almost untouched by chaos.',
        color:'#10b981',
        color2:'#047857',
        soft:'#ecfdf5',
        caption:`I survived the Rice Purity Test with a very high score: ${score}/100. Can you beat my score?`
      };
    }
    if(score >= 70){
      return {
        key:'high',
        normalLabel:'High Score',
        socialLabel:'High Score Energy',
        label:social ? 'High Score Energy' : 'High Score',
        desc:'Some stories. Still pretty innocent.',
        color:'#3b82f6',
        color2:'#1d4ed8',
        soft:'#eff6ff',
        caption:`I got ${score}/100 on the Rice Purity Test. Can you beat my score?`
      };
    }
    if(score >= 50){
      return {
        key:'moderate',
        normalLabel:'Moderate Score',
        socialLabel:'Balanced Energy',
        label:social ? 'Balanced Energy' : 'Moderate Score',
        desc:'Plenty of stories. No judgment.',
        color:'#f59e0b',
        color2:'#b45309',
        soft:'#fffbeb',
        caption:`Right in the middle: ${score}/100 on the Rice Purity Test. No judgment. What is yours?`
      };
    }
    if(score >= 20){
      return {
        key:'experienced',
        normalLabel:'Experienced Score',
        socialLabel:'Main Character Energy',
        label:social ? 'Main Character Energy' : 'Experienced Score',
        desc:'Experienced, but still human.',
        color:'#8b5cf6',
        color2:'#6d28d9',
        soft:'#faf5ff',
        caption:`I got ${score}/100 on the Rice Purity Test. I have got stories. Can you beat my score?`
      };
    }
    return {
      key:'very-experienced',
      normalLabel:'Very Experienced Score',
      socialLabel:'Experienced Energy',
      label:social ? 'Experienced Energy' : 'Very Experienced Score',
      desc:"Let's not talk about it.",
      color:'#f43f5e',
      color2:'#be123c',
      soft:'#fff1f2',
      caption:`I got ${score}/100 on the Rice Purity Test. Let's not talk about it. What is yours?`
    };
  }

  function getSize(id=cardState.size){
    return CARD_SIZES.find(s => s.id === id) || CARD_SIZES[0];
  }

  function escapeHtml(value){
    return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  }

  function setText(sel, value, root=document){
    const el = $(sel, root);
    if(el) el.textContent = value;
  }

  function setHref(sel, href, root=document){
    const el = $(sel, root);
    if(el) el.href = href;
  }

  function showNotice(message){
    let toast = $('#siteToast');
    if(!toast){
      toast = document.createElement('div');
      toast.id = 'siteToast';
      toast.className = 'site-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function pageScore(defaultScore=DEFAULT_SCORE){
    const params = new URLSearchParams(location.search);
    if(params.has('score')) return clampScore(parseInt(params.get('score'), 10));
    const scoreEl = $('#resultScore');
    if(scoreEl) return clampScore(parseInt(scoreEl.textContent, 10));
    return defaultScore;
  }

  function updateScoreSurfaces(score){
    const safeScore = clampScore(score);
    const checked = 100 - safeScore;
    const profile = scoreProfile(safeScore, 'normal');
    setText('#resultScore', safeScore);
    setText('#resultChecked', checked);
    setText('#resultBand', profile.normalLabel);
    const meter = $('#resultMeter span');
    if(meter) meter.style.width = safeScore + '%';
    setHref('#resultScoreLink', `${base}/score/${safeScore}/`);
    setHref('#scoreMeaningLink', `${base}/score/${safeScore}/`);
    setHref('#resultPageLink', `${base}/result/?score=${safeScore}`);
    $$('[data-score-meaning-action]').forEach(el => { el.href = `${base}/score/${safeScore}/`; });
    $$('[data-result-page-action]').forEach(el => { el.href = `${base}/result/?score=${safeScore}`; });
  }

  function initNav(){
    const btn = $('#mobileToggle'), menu = $('#mobileMenu');
    if(btn && menu){ btn.addEventListener('click', () => menu.classList.toggle('open')); }
    const langSelect = $('#languageSelect');
    if(langSelect){ langSelect.addEventListener('change', e => { window.location.href = e.target.value; }); }
  }

  function initScoreJump(){
    $$('.scoreJumpForm').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const input = $('input', form);
        const score = clampScore(parseInt(input.value, 10));
        window.location.href = `${base}/score/${score}/`;
      });
    });
  }

	function initTest(){
	  const host = $('#questionList');
	  if(!host || !window.RPT_QUESTIONS) return;
    const cats = new Map();
    window.RPT_QUESTIONS.forEach(q => {
      if(!cats.has(q.cat)) cats.set(q.cat, []);
      cats.get(q.cat).push(q);
    });

    let html = '';
    for(const [cat, qs] of cats){
      html += `<section class="question-group"><h2>${escapeHtml(cat)}</h2><div class="question-list">`;
      qs.forEach(q => {
        html += `<label class="q"><input type="checkbox" data-id="${q.id}" data-cat="${escapeHtml(cat)}"><span><b>${q.id}. ${escapeHtml(q.text)}</b><small>${escapeHtml(cat)}</small></span></label>`;
      });
      html += `</div></section>`;
    }
    host.innerHTML = html;

	  const progress = $('#testProgress span') || $('.question-toolbar .progress span') || $('.progress span');
	  const checkedCount = $('#checkedCount');
	  const scoreOut = $('#liveScore');
	  function currentScore(){
	    const checked = $$('input[type=checkbox]:checked', host).length;
	    return {checked, score: 100 - checked};
	  }
	  function syncVisibleInlineResult(score){
	    const result = $('#inlineResult');
	    if(!result || result.hasAttribute('hidden')) return;
	    cardState.score = clampScore(score);
	    updateScoreSurfaces(cardState.score);
	    history.replaceState(null, '', `${base}/take/?score=${cardState.score}`);
	    renderAllStudios();
	  }
	  function update(){
	    const {checked, score} = currentScore();
	    if(progress) progress.style.width = checked + '%';
	    if(checkedCount) checkedCount.textContent = checked;
	    if(scoreOut) scoreOut.textContent = score;
	    const sticky = $('#liveScoreSticky');
	    if(sticky) sticky.textContent = score;
	    syncVisibleInlineResult(score);
	  }
    host.addEventListener('change', update);
    update();

    const reset = $('#resetTest');
	    if(reset){
	      reset.addEventListener('click', () => {
	        $$('input[type=checkbox]', host).forEach(input => { input.checked = false; });
	        $('#inlineResult')?.setAttribute('hidden', '');
	        history.replaceState(null, '', `${base}/take/`);
	        update();
	      });
	    }

    const finish = $('#finishTest');
	    if(finish){
	      finish.addEventListener('click', () => {
	        const {score} = currentScore();
	        const result = $('#inlineResult');
	        if(result) result.removeAttribute('hidden');
	        update();
	        result?.scrollIntoView({behavior:'smooth', block:'start'});
	      });
	    }
	  }

  function initResult(){
    const resultPage = $('#resultPage');
    if(!resultPage) return;
    const score = pageScore(DEFAULT_SCORE);
    cardState.score = score;
    updateScoreSurfaces(score);
    renderAllStudios();
  }

  function renderStudioMarkup(mode, state=cardState){
    if(mode === 'teaser' || mode === 'score') return renderTeaserMarkup(mode, state);
	    const full = mode === 'full';
	    const templateButtons = CARD_TEMPLATES.map(tmpl => `
	      <button class="studio-option" type="button" data-card-template="${tmpl.id}" aria-pressed="false">
	        <span><b>${escapeHtml(tmpl.name)}</b><small>${escapeHtml(tmpl.desc)}</small></span>
	      </button>`).join('');
    const sizeButtons = CARD_SIZES.map(size => `
      <button class="studio-size" type="button" data-card-size="${size.id}" aria-pressed="false">
        <b>${escapeHtml(size.name)}</b><small>${escapeHtml(size.ratio)}</small>
      </button>`).join('');
		    const scorePanel = full ? `
		      <div class="studio-panel">
		        <div class="studio-panel-head"><h3>${escapeHtml(text.scoreLabel)}</h3><strong><span data-studio-score>${state.score}</span> / 100</strong></div>
		        <input class="studio-range" type="range" min="0" max="100" value="${state.score}" data-score-range data-card-score-control aria-label="${escapeHtml(text.scoreLabel)}">
		        <div class="studio-range-labels"><span>0</span><span>50</span><span>100</span></div>
		      </div>` : '';
	    const bottomLinks = full ? `
	      <a class="btn secondary" data-score-meaning-action href="${base}/score/${state.score}/">${escapeHtml(text.scoreMeaning)}</a>
	      <a class="btn secondary" href="${base}/take/">${escapeHtml(text.retake)}</a>` : `
	      <a class="btn secondary" data-result-page-action href="${base}/result/?score=${state.score}">${escapeHtml(text.openResult)}</a>`;

    return `
      <div class="card-studio card-studio-${full ? 'full' : 'compact'}">
        <div class="studio-heading">
          <span class="eyebrow">${escapeHtml(full ? text.studioTitle : text.compactTitle)}</span>
          <p class="muted">${escapeHtml(text.studioLead)}</p>
        </div>
        <div class="card-studio-grid">
          <aside class="studio-controls" aria-label="${escapeHtml(text.studioTitle)} controls">
            ${scorePanel}
            <div class="studio-panel">
              <h3>${escapeHtml(text.badgeLabel)}</h3>
              <div class="studio-segmented">
                <button type="button" data-badge-mode="normal" aria-pressed="false">${escapeHtml(text.normalBadge)}</button>
                <button type="button" data-badge-mode="social" aria-pressed="false">${escapeHtml(text.socialBadge)}</button>
              </div>
            </div>
            <div class="studio-panel">
              <h3>${escapeHtml(text.templateLabel)}</h3>
              <div class="studio-option-list">${templateButtons}</div>
            </div>
            <div class="studio-panel">
              <h3>${escapeHtml(text.sizeLabel)}</h3>
              <div class="studio-size-grid">${sizeButtons}</div>
            </div>
            <div class="studio-panel">
              <h3>${escapeHtml(text.detailsLabel)}</h3>
              <div class="studio-toggle-grid">
                <button id="toggleWebsite" type="button" data-card-toggle="showWebsite" aria-pressed="true">${escapeHtml(text.showWebsite)}</button>
                <button id="togglePrivacy" type="button" data-card-toggle="showPrivacy" aria-pressed="true">${escapeHtml(text.showPrivacy)}</button>
                <button id="toggleQr" type="button" data-card-toggle="showQr" aria-pressed="true">${escapeHtml(text.showQr)}</button>
              </div>
            </div>
          </aside>
          <section class="studio-preview-panel" aria-label="${escapeHtml(text.previewLabel)}">
            <div class="studio-preview-top">
              <span>${escapeHtml(text.previewLabel)}</span>
              <span data-card-dimensions></span>
            </div>
	            <div class="studio-card-shell">
	              <div data-card-view aria-label="Rice Purity Test score card preview"></div>
	              <canvas class="share-canvas export-canvas" data-export-canvas width="1080" height="1920" aria-hidden="true"></canvas>
	            </div>
            <div class="studio-actions">
              <button class="btn pink" id="downloadShare" type="button" data-download-share>${escapeHtml(text.download)}</button>
              <button class="btn secondary" id="copyShare" type="button" data-copy-share>${escapeHtml(text.copyImage)}</button>
              <button class="btn secondary" id="nativeShare" type="button" data-native-share>${escapeHtml(text.share)}</button>
              <button class="btn secondary" id="copyLink" type="button" data-copy-link>${escapeHtml(text.copyLink)}</button>
              ${bottomLinks}
            </div>
            <div class="share-secondary-label">${escapeHtml(text.socialLabel)}</div>
            <div class="share-platforms sharethis-like" aria-label="Share platforms">
              <button class="st-btn st-facebook st-first" type="button" data-share-platform="facebook" aria-label="Share on Facebook"><img class="st-icon" src="/assets/img/share-icons/facebook.svg" alt="" aria-hidden="true"><span class="st-label">Share</span></button>
              <button class="st-btn st-twitter" type="button" data-share-platform="twitter" aria-label="Post on X"><img class="st-icon" src="/assets/img/share-icons/x.svg" alt="" aria-hidden="true"><span class="st-label">Post</span></button>
              <button class="st-btn st-linkedin" type="button" data-share-platform="linkedin" aria-label="Share on LinkedIn"><img class="st-icon" src="/assets/img/share-icons/linkedin.svg" alt="" aria-hidden="true"><span class="st-label">Share</span></button>
              <button class="st-btn st-wechat" type="button" data-share-platform="wechat" aria-label="Copy link for WeChat"><img class="st-icon" src="/assets/img/share-icons/wechat.svg" alt="" aria-hidden="true"><span class="st-label">WeChat</span></button>
              <button class="st-btn st-whatsapp" type="button" data-share-platform="whatsapp" aria-label="Send on WhatsApp"><img class="st-icon" src="/assets/img/share-icons/whatsapp.svg" alt="" aria-hidden="true"><span class="st-label">WhatsApp</span></button>
              <button class="st-btn st-copy st-last" type="button" data-share-platform="copy" aria-label="Copy result link"><img class="st-icon" src="/assets/img/share-icons/link.svg" alt="" aria-hidden="true"><span class="st-label">Copy</span></button>
            </div>
            <div class="studio-caption-panel">
              <div>
                <b>${escapeHtml(text.captionLabel)}</b>
                <p id="shareCaptionText" data-share-caption-text></p>
              </div>
              <button class="btn secondary small" id="copyCaption" type="button" data-copy-caption>${escapeHtml(text.copyCaption)}</button>
            </div>
          </section>
        </div>
	      </div>`;
	  }

  function renderMiniCardControls(mode, state){
    const templateButtons = CARD_TEMPLATES.map(tmpl => `
      <button class="teaser-chip" type="button" data-card-template="${tmpl.id}" aria-pressed="false">${escapeHtml(tmpl.name.replace(' Score Card', ''))}</button>`).join('');
    const sizeButtons = CARD_SIZES.map(size => `
      <button class="teaser-chip" type="button" data-card-size="${size.id}" aria-pressed="false">${escapeHtml(size.shortName || size.name)}</button>`).join('');
    const scoreControls = mode === 'teaser' ? `
      <div class="teaser-control-block">
        <div class="teaser-control-head"><span>${escapeHtml(text.scoreLabel)}</span><strong><span data-studio-score>${state.score}</span> / 100</strong></div>
        <input class="studio-range" type="range" min="0" max="100" value="${state.score}" data-card-score-control aria-label="${escapeHtml(text.scoreLabel)}">
        <div class="teaser-chip-row" aria-label="${escapeHtml(text.scoreLabel)} presets">
          ${[95, 75, 55, 35, 9].map(score => `<button class="teaser-chip" type="button" data-score-chip="${score}">${score}</button>`).join('')}
        </div>
      </div>` : '';
    return `
      <div class="teaser-controls" aria-label="${escapeHtml(text.studioTitle)} quick controls">
        ${scoreControls}
        <div class="teaser-control-block">
          <div class="teaser-control-head"><span>${escapeHtml(text.templateLabel)}</span></div>
          <div class="teaser-chip-row">${templateButtons}</div>
        </div>
        <div class="teaser-control-block">
          <div class="teaser-control-head"><span>${escapeHtml(text.sizeLabel)}</span></div>
          <div class="teaser-chip-row">${sizeButtons}</div>
        </div>
      </div>`;
  }

  function renderTeaserMarkup(mode, state){
    const score = clampScore(state.score);
    const profile = scoreProfile(score, state.badgeMode);
    const title = (mode === 'score' ? text.teaserScoreTitle : text.teaserTitle).replace('{score}', score);
    const primaryHref = `${base}/result/?score=${score}`;
    const secondaryHref = `${base}/take/`;
    const secondaryText = mode === 'score' ? text.retake : 'Start Test';
    return `
      <div class="card-teaser card-teaser-${mode}">
        <div class="teaser-copy">
          <span class="eyebrow">${escapeHtml(text.teaserEyebrow)}</span>
          <h2>${escapeHtml(title)}</h2>
          <p class="muted">${escapeHtml(text.teaserLead)}</p>
          <div class="teaser-scoreline"><strong><span data-studio-score>${score}</span> / 100</strong><span style="--pill-color:${profile.color}" data-dom-badge-label>${escapeHtml(profile.normalLabel)}</span></div>
          ${renderMiniCardControls(mode, state)}
          <div class="actions">
            <a class="btn pink" data-result-page-action href="${primaryHref}">${escapeHtml(text.createCard)}</a>
            <a class="btn secondary" href="${secondaryHref}">${escapeHtml(secondaryText)}</a>
          </div>
          <p class="mini">${escapeHtml(text.cardPrivacy)}</p>
        </div>
        <div class="teaser-preview-panel" aria-label="${escapeHtml(text.previewLabel)}">
          <div class="studio-preview-top">
            <span>${escapeHtml(text.previewLabel)}</span>
            <span data-card-dimensions></span>
          </div>
          <div class="teaser-card-shell">
            <div data-card-view aria-label="Rice Purity Test score card preview"></div>
            <canvas class="share-canvas export-canvas" data-export-canvas width="1200" height="630" aria-hidden="true"></canvas>
          </div>
        </div>
      </div>`;
  }

	  function initCardStudios(){
	    $$('[data-card-studio]').forEach(mount => {
	      const rawMode = mount.dataset.cardStudio;
	      const mode = rawMode === 'compact' || rawMode === 'teaser' || rawMode === 'score' ? rawMode : 'full';
	      const isSharedState = mode === 'full' || mode === 'compact';
	      const defaultPreviewSize = mode === 'teaser' || mode === 'score' ? 'square' : 'landscape';
	      const state = isSharedState ? cardState : createCardState({
	        score: clampScore(parseInt(mount.dataset.cardScore, 10)),
	        template: mount.dataset.cardTemplate || 'classic',
	        size: mount.dataset.cardSize || defaultPreviewSize,
	        badgeMode: mount.dataset.badgeMode || 'social',
	        showWebsite: mount.dataset.showWebsite !== 'false',
	        showPrivacy: mount.dataset.showPrivacy !== 'false',
	        showQr: mount.dataset.showQr === 'true'
	      });
	      mount.innerHTML = renderStudioMarkup(mode, state);
	      studioRoots.push({mount, mode, state});
	      bindStudioEvents(mount, mode, state);
	    });
	    if(studioRoots.length) renderAllStudios();
	  }

	  function bindStudioEvents(root, mode, state=cardState){
	    $$('button[data-card-template]', root).forEach(button => {
	      button.addEventListener('click', () => {
	        state.template = button.dataset.cardTemplate;
	        renderAllStudios();
	      });
	    });
	    $$('button[data-card-size]', root).forEach(button => {
	      button.addEventListener('click', () => {
	        state.size = button.dataset.cardSize;
	        renderAllStudios();
	      });
	    });
	    $$('button[data-badge-mode]', root).forEach(button => {
	      button.addEventListener('click', () => {
	        state.badgeMode = button.dataset.badgeMode;
	        renderAllStudios();
	      });
	    });
	    $$('button[data-card-toggle]', root).forEach(button => {
	      button.addEventListener('click', () => {
	        const key = button.dataset.cardToggle;
	        state[key] = !state[key];
	        renderAllStudios();
	      });
	    });
	    $$('[data-score-range], [data-card-score-control]', root).forEach(range => {
	      range.addEventListener('input', () => {
	        state.score = clampScore(parseInt(range.value, 10));
	        if(state === cardState) updateScoreSurfaces(state.score);
	        renderAllStudios();
	      });
	    });
	    $$('button[data-score-chip]', root).forEach(button => {
	      button.addEventListener('click', () => {
	        state.score = clampScore(parseInt(button.dataset.scoreChip, 10));
	        if(state === cardState) updateScoreSurfaces(state.score);
	        renderAllStudios();
	      });
	    });
	    $('[data-download-share]', root)?.addEventListener('click', () => downloadShare(root, state));
	    $('[data-copy-share]', root)?.addEventListener('click', () => copyShare(root, state));
	    $('[data-native-share]', root)?.addEventListener('click', () => nativeShare(root, state));
	    $('[data-copy-link]', root)?.addEventListener('click', () => copyResultLink(state.score));
	    $('[data-copy-caption]', root)?.addEventListener('click', () => copyCaption(state));
	    $$('[data-share-platform]', root).forEach(button => {
	      button.addEventListener('click', () => shareToPlatform(button.dataset.sharePlatform, state.score, state.badgeMode));
	    });
	    if(mode === 'compact'){
	      root.classList.add('compact-share-mount');
	    }
	  }

	  function renderAllStudios(){
	    studioRoots.forEach(({mount, state}) => {
	      const size = getSize(state.size);
	      const profile = scoreProfile(state.score, state.badgeMode);
	      mount.style.setProperty('--preview-ratio', `${size.width} / ${size.height}`);
	      mount.style.setProperty('--score-accent', profile.color);
	      $$('button[data-card-template]', mount).forEach(button => setPressed(button, button.dataset.cardTemplate === state.template));
	      $$('button[data-card-size]', mount).forEach(button => setPressed(button, button.dataset.cardSize === state.size));
	      $$('button[data-badge-mode]', mount).forEach(button => setPressed(button, button.dataset.badgeMode === state.badgeMode));
	      $$('button[data-card-toggle]', mount).forEach(button => {
	        const active = !!state[button.dataset.cardToggle];
	        setPressed(button, active);
	        button.classList.toggle('is-on', active);
	      });
	      $$('[data-score-range], [data-card-score-control]', mount).forEach(range => {
	        if(Number(range.value) !== state.score) range.value = state.score;
	      });
	      $$('button[data-score-chip]', mount).forEach(button => setPressed(button, clampScore(parseInt(button.dataset.scoreChip, 10)) === state.score));
	      $$('[data-studio-score]', mount).forEach(el => { el.textContent = state.score; });
	      $$('[data-dom-badge-label]', mount).forEach(el => { el.textContent = profile.normalLabel; });
	      $$('[data-card-dimensions]', mount).forEach(el => { el.textContent = `${size.width} x ${size.height} px`; });
	      $$('[data-share-caption-text]', mount).forEach(el => { el.textContent = profile.caption; });
	      $$('[data-score-meaning-action]', mount).forEach(el => { el.href = `${base}/score/${state.score}/`; });
	      $$('[data-result-page-action]', mount).forEach(el => { el.href = `${base}/result/?score=${state.score}`; });
	      renderDomCard(mount, state);
	      syncExportCanvas(mount, state);
	    });
	  }

  function syncExportCanvas(root, state){
    const canvas = $('[data-export-canvas]', root);
    if(!canvas) return;
    const size = getSize(state.size);
    canvas.width = size.width;
    canvas.height = size.height;
    canvas.dataset.cardSize = size.id;
    canvas.dataset.cardTemplate = state.template;
  }

  function renderDomCard(root, state){
    const target = $('[data-card-view]', root);
    if(!target) return;
    const size = getSize(state.size);
    const score = clampScore(state.score);
    const profile = scoreProfile(score, state.badgeMode);
    const privacy = size.id === 'story' ? text.cardPrivacyShort : text.cardPrivacy;
    const footerClass = state.showQr ? ' has-qr' : '';
    const privacyMarkup = state.showPrivacy ? `<p>${escapeHtml(privacy)}</p>` : '';
    const websiteMarkup = state.showWebsite ? '<b>ricepuritytest.im</b>' : '';
    const qrMarkup = state.showQr ? `
      <div class="dom-card-qr">
        <img src="${QR_ASSET_URL}" alt="QR code for ${QR_CANONICAL_URL}">
      </div>` : '';

    target.className = `dom-result-card dom-card-${state.template} dom-card-${size.id} dom-profile-${profile.key}`;
    target.dataset.cardSize = size.id;
    target.dataset.cardTemplate = state.template;
    target.dataset.score = String(score);
    target.style.setProperty('--card-accent', profile.color);
    target.style.setProperty('--card-accent-2', profile.color2);
    target.style.setProperty('--card-soft', profile.soft);
    target.innerHTML = `
      <div class="dom-card-inner">
        <div class="dom-card-header">
          <span>RICE PURITY TEST</span>
          <span>ANONYMOUS SCORE CARD</span>
        </div>
        <div class="dom-card-body">
          <div class="dom-score-block">
            <div class="dom-card-kicker">${escapeHtml(text.cardTop)}</div>
            <div class="dom-score-lockup"><strong>${score}</strong><small>/100</small></div>
            <div class="dom-card-middle">${escapeHtml(text.cardMiddle)}</div>
          </div>
          <div class="dom-card-copy">
            <div class="dom-card-badge">${escapeHtml(profile.label)}</div>
            <div class="dom-card-prompt">${escapeHtml(text.cardPrompt)}</div>
            <p>${escapeHtml(profile.desc)}</p>
          </div>
        </div>
        <div class="dom-card-footer${footerClass}">
          <div class="dom-card-footnote">
            ${privacyMarkup}
            ${websiteMarkup}
          </div>
          ${qrMarkup}
        </div>
      </div>`;
  }

	  function setPressed(button, active){
	    button.setAttribute('aria-pressed', active ? 'true' : 'false');
	    button.classList.toggle('active', active);
	  }

  function templateStyle(template, profile){
    const map = {
      classic: {
        template:'classic',
        bg:'#f6f3ef', card:'#fdfbf7', border:'#050505', text:'#151719', muted:'#5d6469',
        header:['#f87171', profile.color, '#fbbf24'], shadow:'#050505', font:monoFont, score:profile.color,
        grid:'lines', radius:12, borderWidth:8, shadowX:24, shadowY:24, dashed:false
      },
      notebook: {
        template:'notebook',
        bg:'#f7f2e8', card:'#faf9f6', border:'#2c3e50', text:'#243447', muted:'#62717f',
        header:['rgba(248,113,113,.22)', 'rgba(59,130,246,.22)', 'rgba(251,191,36,.22)'], shadow:'rgba(44,62,80,.22)', font:serifFont, score:profile.color,
        grid:'notebook', radius:10, borderWidth:8, shadowX:18, shadowY:18, dashed:true
      },
      neon: {
        template:'neon',
        bg:'#07080d', card:'#0b0c10', border:'#26313d', text:'#e6fbff', muted:'#7dd3fc',
        header:['#111827', '#172554', '#0f172a'], shadow:'rgba(0,229,255,.22)', font:monoFont, score:'#00e5ff',
        grid:'dots', radius:16, borderWidth:5, shadowX:0, shadowY:0, dashed:false
      },
      pastel: {
        template:'pastel',
        bg:'#f4ede9', card:'#fdfbf7', border:'#6b7c85', text:'#33383d', muted:'#6b7280',
        header:['#fce7f3', '#e0f2fe', '#fef3c7'], shadow:'#e5c5b5', font:sansFont, score:'#f472b6',
        grid:'pastel', radius:40, borderWidth:10, shadowX:24, shadowY:24, dashed:false
      },
      minimal: {
        template:'minimal',
        bg:'#f5f5f4', card:'#ffffff', border:'#d4d4d4', text:'#171717', muted:'#737373',
        header:['#ffffff', '#ffffff', '#ffffff'], shadow:'rgba(23,23,23,.08)', font:sansFont, score:'#171717',
        grid:'none', radius:4, borderWidth:3, shadowX:0, shadowY:10, dashed:false
      }
    };
    return map[template] || map.classic;
  }

  function renderShareCard(canvas, state){
    const size = getSize(state.size);
    const score = clampScore(state.score);
    const profile = scoreProfile(score, state.badgeMode);
    const style = templateStyle(state.template, profile);
    const ctx = canvas.getContext('2d');
    canvas.width = size.width;
    canvas.height = size.height;
    canvas.dataset.cardSize = size.id;
    canvas.dataset.cardTemplate = state.template;

    ctx.clearRect(0, 0, size.width, size.height);
    ctx.fillStyle = style.bg;
    ctx.fillRect(0, 0, size.width, size.height);
    drawOuterPattern(ctx, size, style);

    const layout = getCardLayout(size);
    const x = layout.x, y = layout.y, w = layout.w, h = layout.h;
    drawCardBase(ctx, x, y, w, h, style);
    drawCardHeader(ctx, x, y, w, layout.headerH, style);

    if(size.id === 'landscape') drawLandscapeContent(ctx, layout, style, profile, score, state);
    else drawPortraitContent(ctx, layout, style, profile, score, state);

    drawCardFooter(ctx, layout, style, profile, state);
  }

  function getCardLayout(size){
    const margin = size.id === 'landscape' ? 54 : size.id === 'square' ? 64 : 80;
    return {
      id:size.id,
      x:margin,
      y:margin,
      w:size.width - margin * 2,
      h:size.height - margin * 2,
      headerH:size.id === 'landscape' ? 82 : size.id === 'square' ? 104 : 138,
      footerH:size.id === 'landscape' ? 94 : size.id === 'square' ? 166 : 250
    };
  }

  function drawOuterPattern(ctx, size, style){
    ctx.save();
    if(style.grid === 'dots' || style.grid === 'pastel'){
      const gap = style.grid === 'dots' ? 42 : 52;
      ctx.fillStyle = style.grid === 'dots' ? 'rgba(0,229,255,.12)' : 'rgba(244,114,182,.24)';
      for(let y=20; y<size.height; y+=gap){
        for(let x=20; x<size.width; x+=gap){
          ctx.beginPath();
          ctx.arc(x, y, style.grid === 'dots' ? 2 : 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    } else {
      const gap = style.grid === 'notebook' ? 44 : 48;
      ctx.strokeStyle = style.grid === 'notebook' ? 'rgba(44,62,80,.08)' : 'rgba(21,23,25,.06)';
      ctx.lineWidth = 1;
      for(let x=0; x<=size.width; x+=gap){ ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, size.height); ctx.stroke(); }
      for(let y=0; y<=size.height; y+=gap){ ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(size.width, y); ctx.stroke(); }
    }
    ctx.restore();
  }

  function drawCardBase(ctx, x, y, w, h, style){
    ctx.save();
    if(style.shadowX || style.shadowY){
      ctx.fillStyle = style.shadow;
      roundRect(ctx, x + style.shadowX, y + style.shadowY, w, h, style.radius, true, false);
    }
    if(style.template === 'neon'){
      ctx.shadowColor = 'rgba(0,229,255,.25)';
      ctx.shadowBlur = 28;
    }
    ctx.fillStyle = style.card;
    roundRect(ctx, x, y, w, h, style.radius, true, false);
    ctx.shadowBlur = 0;
    ctx.strokeStyle = style.border;
    ctx.lineWidth = style.borderWidth;
    if(style.dashed) ctx.setLineDash([22, 14]);
    roundRect(ctx, x, y, w, h, style.radius, false, true);
    ctx.setLineDash([]);
    ctx.restore();
  }

  function drawCardHeader(ctx, x, y, w, h, style){
    ctx.save();
    const grad = ctx.createLinearGradient(x, y, x + w, y);
    grad.addColorStop(0, style.header[0]);
    grad.addColorStop(.55, style.header[1]);
    grad.addColorStop(1, style.header[2]);
    ctx.fillStyle = grad;
    topRoundRect(ctx, x, y, w, h, style.radius, true);
    ctx.strokeStyle = style.border;
    ctx.lineWidth = Math.max(2, style.borderWidth * .7);
    ctx.beginPath(); ctx.moveTo(x, y + h); ctx.lineTo(x + w, y + h); ctx.stroke();
    ctx.fillStyle = style.text;
    ctx.font = `900 ${h > 100 ? 27 : 20}px ${style.font}`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.fillText('RICE PURITY TEST', x + 42, y + h / 2);
    ctx.textAlign = 'right';
    ctx.font = `900 ${h > 100 ? 22 : 17}px ${style.font}`;
    ctx.fillText('ANONYMOUS SCORE CARD', x + w - 42, y + h / 2);
    ctx.restore();
  }

  function drawPortraitContent(ctx, layout, style, profile, score, state){
    const centerX = layout.x + layout.w / 2;
    const bodyTop = layout.y + layout.headerH;
    const bodyH = layout.h - layout.headerH - layout.footerH;
    const scoreSize = layout.id === 'story' ? 258 : 186;
    const gotY = bodyTop + bodyH * (layout.id === 'story' ? .18 : .17);
    const scoreY = bodyTop + bodyH * (layout.id === 'story' ? .42 : .43);
    const middleY = scoreY + scoreSize * .48;
    const badgeY = middleY + (layout.id === 'story' ? 96 : 72);
    const challengeY = badgeY + (layout.id === 'story' ? 112 : 86);
    const descY = challengeY + (layout.id === 'story' ? 82 : 62);

    drawFitText(ctx, text.cardTop.toUpperCase(), centerX, gotY, layout.w - 150, layout.id === 'story' ? 42 : 32, 20, 900, style.font, style.muted, 'center');
    drawScoreText(ctx, centerX, scoreY, score, scoreSize, style.score, style.text, 'center');
    drawFitText(ctx, text.cardMiddle, centerX, middleY, layout.w - 130, layout.id === 'story' ? 38 : 29, 18, 900, style.font, style.text, 'center');
    drawBadge(ctx, profile.label, centerX, badgeY, profile, style, layout.id === 'story' ? 32 : 24);
    drawFitText(ctx, text.cardPrompt, centerX, challengeY, layout.w - 150, layout.id === 'story' ? 58 : 42, 24, 950, sansFont, style.text, 'center');
    drawAccentText(ctx, profile.desc, centerX, descY, layout.w - 180, profile, style, layout.id === 'story');
  }

  function drawLandscapeContent(ctx, layout, style, profile, score, state){
    const bodyTop = layout.y + layout.headerH;
    const bodyBottom = layout.y + layout.h - layout.footerH;
    const bodyH = bodyBottom - bodyTop;
    const leftX = layout.x + 78;
    const rightX = layout.x + layout.w - 78;
    const scoreY = bodyTop + bodyH * .52;
    drawFitText(ctx, text.cardTop.toUpperCase(), leftX, bodyTop + 56, layout.w * .42, 31, 18, 900, style.font, style.muted, 'left');
    drawScoreText(ctx, leftX, scoreY, score, 164, style.score, style.text, 'left');
    drawFitText(ctx, text.cardMiddle, leftX, scoreY + 105, layout.w * .45, 30, 18, 900, style.font, style.text, 'left');
    drawBadge(ctx, profile.label, leftX + 145, scoreY + 158, profile, style, 22);
    drawFitText(ctx, text.cardPrompt, rightX, bodyTop + 94, layout.w * .42, 45, 24, 950, sansFont, style.text, 'right');
    drawAccentText(ctx, profile.desc, rightX, bodyTop + 184, layout.w * .38, profile, style, false, 'right');
  }

  function drawScoreText(ctx, x, y, score, size, color, textColor, align){
    ctx.save();
    ctx.textBaseline = 'middle';
    ctx.textAlign = align;
    ctx.fillStyle = color;
    ctx.font = `950 ${size}px ${serifFont}`;
    ctx.fillText(String(score), x, y);
    const mainWidth = ctx.measureText(String(score)).width;
    ctx.fillStyle = textColor === '#e6fbff' ? 'rgba(230,251,255,.66)' : 'rgba(82,82,82,.62)';
    ctx.font = `900 ${Math.round(size * .25)}px ${sansFont}`;
    if(align === 'center') ctx.fillText('/100', x + mainWidth / 2 + size * .18, y + size * .25);
    else ctx.fillText('/100', x + mainWidth + size * .06, y + size * .25);
    ctx.restore();
  }

  function drawBadge(ctx, label, x, y, profile, style, fontSize){
    ctx.save();
    ctx.font = `900 ${fontSize}px ${sansFont}`;
    const width = Math.min(620, ctx.measureText(label).width + fontSize * 2.2);
    const height = fontSize * 2.1;
    ctx.fillStyle = style.card === '#0b0c10' ? 'rgba(8,47,73,.8)' : '#050505';
    roundRect(ctx, x - width / 2, y - height / 2, width, height, height / 2, true, false);
    ctx.fillStyle = style.card === '#0b0c10' ? '#a5f3fc' : '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x, y + 1);
    ctx.restore();
  }

  function drawAccentText(ctx, label, x, y, maxWidth, profile, style, large, align='center'){
    ctx.save();
    const fontSize = large ? 35 : 24;
    ctx.font = `850 ${fontSize}px ${sansFont}`;
    const lines = wrapLines(ctx, label, maxWidth, 3);
    const lineH = fontSize * 1.25;
    const totalH = lineH * lines.length;
    const left = align === 'right' ? x - maxWidth : align === 'left' ? x : x - maxWidth / 2;
    const textX = align === 'right' ? x - 22 : align === 'left' ? x + 22 : x;
    ctx.strokeStyle = profile.color;
    ctx.lineWidth = large ? 9 : 6;
    ctx.beginPath();
    ctx.moveTo(left, y - fontSize);
    ctx.lineTo(left, y - fontSize + totalH + fontSize * .2);
    ctx.stroke();
    ctx.fillStyle = style.text;
    ctx.textAlign = align;
    ctx.textBaseline = 'top';
    lines.forEach((line, i) => ctx.fillText(line, textX, y - fontSize + i * lineH));
    ctx.restore();
  }

  function drawCardFooter(ctx, layout, style, profile, state){
    const x = layout.x;
    const y = layout.y + layout.h - layout.footerH;
    const w = layout.w;
    const h = layout.footerH;
    ctx.save();
    ctx.strokeStyle = style.card === '#0b0c10' ? 'rgba(125,211,252,.22)' : 'rgba(21,23,25,.13)';
    ctx.lineWidth = Math.max(2, style.borderWidth * .35);
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + w, y); ctx.stroke();
    const padX = layout.id === 'landscape' ? 54 : 64;
    const baseY = y + (layout.id === 'landscape' ? 34 : 66);
    ctx.fillStyle = style.muted;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.font = `900 ${layout.id === 'story' ? 31 : layout.id === 'square' ? 22 : 18}px ${sansFont}`;
    if(state.showPrivacy){
      const privacy = layout.id === 'story' ? text.cardPrivacyShort : text.cardPrivacy;
      drawFitText(ctx, privacy, x + padX, baseY, state.showQr ? w - padX * 2 - h * .8 : w - padX * 2, layout.id === 'story' ? 31 : 22, 13, 900, sansFont, style.muted, 'left');
    }
    if(state.showWebsite){
      ctx.fillStyle = style.text;
      ctx.font = `950 ${layout.id === 'story' ? 35 : layout.id === 'square' ? 26 : 20}px ${sansFont}`;
      ctx.fillText('ricepuritytest.im', x + padX, baseY + (layout.id === 'landscape' ? 32 : 54));
    }
    if(state.showQr){
      const qrSize = layout.id === 'landscape' ? 72 : layout.id === 'square' ? 108 : 152;
      const qrX = x + w - padX - qrSize;
      const qrY = y + (h - qrSize) / 2;
      ctx.fillStyle = '#ffffff';
      roundRect(ctx, qrX - 10, qrY - 10, qrSize + 20, qrSize + 20, 10, true, false);
      ctx.strokeStyle = style.card === '#0b0c10' ? '#7dd3fc' : style.border;
      ctx.lineWidth = layout.id === 'landscape' ? 3 : 5;
      roundRect(ctx, qrX - 10, qrY - 10, qrSize + 20, qrSize + 20, 10, false, true);
      if(qrLoaded) ctx.drawImage(qrImage, qrX, qrY, qrSize, qrSize);
      else {
        ctx.fillStyle = '#111827';
        ctx.font = `900 ${Math.max(12, qrSize * .13)}px ${sansFont}`;
        ctx.textAlign = 'center';
        ctx.fillText(qrFailed ? 'QR' : '...', qrX + qrSize / 2, qrY + qrSize / 2);
      }
    }
    ctx.restore();
  }

  function drawFitText(ctx, label, x, y, maxWidth, startSize, minSize, weight, font, color, align='center'){
    ctx.save();
    let size = startSize;
    ctx.textAlign = align;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = color;
    ctx.font = `${weight} ${size}px ${font}`;
    while(ctx.measureText(label).width > maxWidth && size > minSize){
      size -= 1;
      ctx.font = `${weight} ${size}px ${font}`;
    }
    ctx.fillText(label, x, y);
    ctx.restore();
  }

  function wrapLines(ctx, label, maxWidth, maxLines=3){
    const words = String(label).split(/\s+/);
    const lines = [];
    let current = '';
    words.forEach(word => {
      const next = current ? `${current} ${word}` : word;
      if(ctx.measureText(next).width <= maxWidth || !current) current = next;
      else { lines.push(current); current = word; }
    });
    if(current) lines.push(current);
    if(lines.length > maxLines){
      const clipped = lines.slice(0, maxLines);
      clipped[maxLines - 1] = clipped[maxLines - 1].replace(/\s+\S+$/, '') + '...';
      return clipped;
    }
    return lines;
  }

  function roundRect(ctx,x,y,w,h,r,fill,stroke){
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.closePath();
    if(fill) ctx.fill();
    if(stroke) ctx.stroke();
  }

  function topRoundRect(ctx,x,y,w,h,r,fill){
    const radius = Math.min(r, w / 2, h);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.lineTo(x + w, y + h);
    ctx.lineTo(x, y + h);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();
    if(fill) ctx.fill();
  }

  async function ensureCardAssets(state=cardState){
    if(state.showQr && !qrLoaded && !qrFailed) await qrReady;
  }

	  function canvasToBlob(canvas){
	    return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
	  }

  function getExportCanvas(root){
    return $('[data-export-canvas]', root) || $('.share-canvas', root);
  }

	  async function downloadShare(root, state=cardState){
	    await ensureCardAssets(state);
	    const canvas = getExportCanvas(root);
	    if(!canvas) return;
	    renderShareCard(canvas, state);
    const link = document.createElement('a');
    link.download = `rice-purity-test-score-${state.score}-${state.size}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

	  async function copyShare(root, state=cardState){
	    await ensureCardAssets(state);
	    const canvas = getExportCanvas(root);
	    if(!canvas) return;
    renderShareCard(canvas, state);
    const blob = await canvasToBlob(canvas);
    if(!blob) return downloadShare(root, state);
    if(!navigator.clipboard || !window.ClipboardItem){
      showNotice(text.copyImageUnsupported);
      await downloadShare(root, state);
      return;
    }
    try{
      await navigator.clipboard.write([new ClipboardItem({'image/png': blob})]);
      showNotice(text.copiedImage);
    } catch(e){
      showNotice(text.copyImageFailed);
      await downloadShare(root, state);
    }
  }

	  async function nativeShare(root, state=cardState){
	    await ensureCardAssets(state);
	    const canvas = getExportCanvas(root);
    const payload = buildSharePayload(state.score, state.badgeMode);
    if(canvas) renderShareCard(canvas, state);
    try{
      if(canvas && navigator.share && window.File){
        const blob = await canvasToBlob(canvas);
        if(blob){
          const file = new File([blob], `rice-purity-test-score-${state.score}-${state.size}.png`, {type:'image/png'});
          if(!navigator.canShare || navigator.canShare({files:[file]})){
            await navigator.share({title:payload.title, text:payload.text, url:payload.url, files:[file]});
            return;
          }
        }
      }
      if(navigator.share){
        showNotice(text.shareFallback);
        await navigator.share({title:payload.title, text:payload.text, url:payload.url});
      } else {
        await copyResultLink(state.score);
      }
    } catch(e){}
  }

  async function copyCaption(state=cardState){
    const caption = scoreProfile(state.score, state.badgeMode).caption;
    try{
      await navigator.clipboard.writeText(caption);
      showNotice(text.copiedCaption);
    } catch(e){
      window.prompt(text.copiedCaption, caption);
    }
  }

  async function copyResultLink(score){
    const payload = buildSharePayload(score);
    try{
      await navigator.clipboard.writeText(payload.url);
      showNotice(text.copiedLink);
    } catch(e){
      window.prompt(text.copiedLink, payload.url);
    }
  }

  function buildSharePayload(score, badgeMode=cardState.badgeMode){
    const safeScore = clampScore(score);
    const url = `${window.location.origin}${base}/result/?score=${safeScore}`;
    const caption = scoreProfile(safeScore, badgeMode).caption;
    return {title:text.shareTitle, text:caption, url, message:`${caption} ${url}`};
  }

  function platformShareUrl(platform, payload){
    const encodedMessage = encodeURIComponent(payload.message);
    if(platform === 'facebook') return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(payload.url)}`;
    if(platform === 'twitter' || platform === 'x') return `https://twitter.com/intent/tweet?url=${encodeURIComponent(payload.url)}&text=${encodeURIComponent(payload.text)}`;
    if(platform === 'linkedin') return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(payload.url)}`;
    if(platform === 'whatsapp') return `https://wa.me/?text=${encodedMessage}`;
    if(platform === 'telegram') return `https://t.me/share/url?url=${encodeURIComponent(payload.url)}&text=${encodeURIComponent(payload.text)}`;
    if(platform === 'line') return `https://line.me/R/msg/text/?${encodedMessage}`;
    return '';
  }

  async function shareToPlatform(platform, score, badgeMode=cardState.badgeMode){
    if(platform === 'wechat' || platform === 'copy'){
      await copyResultLink(score);
      return;
    }
    const url = platformShareUrl(platform, buildSharePayload(score, badgeMode));
    if(!url) return;
    const opened = window.open(url, '_blank');
    if(opened) opened.opener = null;
    else window.location.href = url;
  }

  document.addEventListener('DOMContentLoaded', () => {
    cardState.score = pageScore(DEFAULT_SCORE);
    initNav();
    initScoreJump();
    initCardStudios();
    initResult();
    initTest();
    renderAllStudios();
  });
})();
