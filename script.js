(function(){
  // ===== TICKER (with illustrative stock pricing for publicly traded names) =====
  var tickerItems = [
    { label: 'AUTOTRADER — NEW DEALER SOURCING FLOW' },
    { label: 'CARS.COM — CONVERSATIONAL SHOPPING SIGNAL', ticker:'CARS', price:'18.42', dir:'up', chg:'0.6%' },
    { label: 'CARMAX — AI PRICING INVESTMENT', ticker:'KMX', price:'78.90', dir:'down', chg:'0.3%' }
  ];
  var track = document.getElementById('tickerTrack');
  if(track){
    var html = '';
    for(var r=0;r<4;r++){
      tickerItems.forEach(function(item){
        var parts = item.label.split(' — ');
        var px = item.ticker ? ' <span class="px '+(item.dir==='up'?'px-up':'px-down')+'">('+item.ticker+') $'+item.price+' '+(item.dir==='up'?'▲':'▼')+item.chg+'</span>' : '';
        html += '<span><b>'+parts[0]+'</b>'+px+' — '+parts[1]+'</span>';
      });
    }
    track.innerHTML = html;
  }

  // ===== STORY MODAL DATA =====
  // trust: 'verified' (direct source — site/filing/job post), 'inferred' (desk synthesis
  // across sources), 'unvalidated' (tip-line-level, unconfirmed).
  var stories = {
    'autotrader-sourcing': {
      sources: 4,
      tag: 'AUTOTRADER / DEALER SOURCING',
      eyebrow: 'HIGH CONFIDENCE · AUTOTRADER / DEALER SOURCING',
      title: 'AutoTrader is moving deeper into dealer sourcing.',
      body: 'New product surfaces suggest a broader push beyond marketplace discovery and into acquisition workflows.',
      then: 'Dealer tools centered on listing inventory and generating marketplace leads.',
      now: 'A dedicated acquisition journey brings sourcing, valuation, and dealer inventory into one workflow.',
      why: 'The battleground is shifting upstream. Dealer acquisition workflows could become as important as consumer discovery.',
      trust: 'verified',
      answer: {
        lead: 'AutoTrader is building dedicated dealer-acquisition tooling — not just another sourcing feature.',
        bullets: [
          { text:'A new acquisition workflow connects sourcing, valuation, and dealer inventory into one flow, replacing the old listing-only model.', ev:1 },
          { text:'Four dealer-acquisition roles have posted in the last 60 days, pointing to sustained investment rather than a one-off test.', ev:0 },
          { text:'This shifts the competitive battleground upstream of search — CarGurus has no comparable acquisition workflow on its roadmap today.' }
        ]
      },
      evidence: [
        { icon:'💼', type:'Job posting', title:'AutoTrader Careers — Dealer Acquisition roles', date:'Oct 2, 2026', url:'https://www.autotrader.com/careers' },
        { icon:'🖥️', type:'Competitor site', title:'AutoTrader.com — Dealer Solutions', date:'Oct 6, 2026', url:'https://www.autotrader.com' }
      ],
      followups: [
        'What would it take for CarGurus to compete on dealer sourcing?',
        'Which other competitors are building acquisition tooling?',
        'How is this different from AutoTrader’s existing dealer tools?'
      ]
    },
    'carscom-conversational': {
      sources: 3,
      tag: 'CARS.COM / CONSUMER EXPERIENCE',
      eyebrow: 'MEDIUM CONFIDENCE · CARS.COM / CONSUMER EXPERIENCE',
      title: 'A more conversational way to find the next car.',
      body: 'New shopping language points to a more guided, intent-led consumer journey.',
      then: 'Search began with make, model, and structured filters.',
      now: 'Illustrative product language introduces needs-based discovery and guided recommendations.',
      why: 'Watch whether conversational discovery improves lead quality, not just engagement.',
      trust: 'inferred',
      answer: {
        lead: 'Cars.com is testing a more conversational, needs-based way to search.',
        bullets: [
          { text:'New product language replaces structured make/model filters with guided, intent-led discovery.', ev:0 },
          { text:'It reads like an early beta test, not a full launch — scope still looks limited.' },
          { text:'Worth watching whether this improves lead quality, not just engagement, before CarGurus follows.' }
        ]
      },
      evidence: [
        { icon:'📰', type:'Product language', title:'Cars.com — guided-discovery beta copy', date:'Oct 5, 2026', url:'https://www.cars.com' }
      ],
      followups: [
        'How does this compare to CarGurus’ current search?',
        'Is Cars.com testing this broadly or in a limited market?',
        'What would conversational search mean for lead quality?'
      ]
    },
    'carmax-pricing': {
      sources: 5,
      tag: 'CARMAX / AI & VALUATION',
      eyebrow: 'MEDIUM CONFIDENCE · CARMAX / AI & VALUATION',
      title: 'The next pricing advantage might be under the hood.',
      body: 'A cluster of hiring signals suggests renewed investment in real-time valuation.',
      then: 'Valuation was presented as a single-point estimate.',
      now: 'Illustrative hiring signals emphasize real-time models and inventory-level pricing.',
      why: 'Faster valuation could shorten the distance between a consumer offer and a dealer acquisition.',
      trust: 'inferred',
      answer: {
        lead: 'CarMax is hiring toward real-time, inventory-level vehicle pricing.',
        bullets: [
          { text:'Five roles tied to real-time pricing and inventory valuation have opened this quarter.', ev:0 },
          { text:'Today’s valuation is a single-point estimate; this hiring pattern points toward pricing at the inventory level instead.' },
          { text:'Faster valuation could shorten the distance between a consumer offer and a dealer acquisition — an advantage CarGurus doesn’t have yet.' }
        ]
      },
      evidence: [
        { icon:'💼', type:'Job posting', title:'CarMax Careers — Real-Time Pricing roles', date:'Sep 29, 2026', url:'https://www.carmax.com/careers' }
      ],
      followups: [
        'How many pricing-related roles has CarMax posted this quarter?',
        'Could this affect CarMax’s appraisal offers?',
        'What should CarGurus watch for next?'
      ]
    },
    'carscom-tradein': {
      sources: 2,
      tag: 'CARS.COM / TRADE-IN',
      eyebrow: 'HIGH CONFIDENCE · CARS.COM / TRADE-IN',
      title: 'Trade-in moves closer to the shopping journey.',
      body: 'An updated entry point puts vehicle valuation earlier in the path to purchase.',
      then: 'Trade-in valuation sat in a separate tool.',
      now: 'A trade-in entry point appears beside the consumer shopping journey.',
      why: 'Earlier trade-in engagement may influence affordability and conversion.',
      trust: 'verified',
      answer: {
        lead: 'Cars.com moved trade-in valuation earlier into the shopping journey.',
        bullets: [
          { text:'Trade-in now sits beside the main shopping flow instead of living in a separate tool.', ev:0 },
          { text:'This is a confirmed, live change — not a rumor or a limited test.' },
          { text:'Trade-in-first flows are becoming table stakes across competitors, not a differentiator — worth re-scoping CarGurus’ own placement, not just tracking it.' }
        ]
      },
      evidence: [
        { icon:'🖥️', type:'Competitor site', title:'Cars.com — trade-in entry point', date:'Oct 6, 2026', url:'https://www.cars.com' }
      ],
      followups: [
        'Do other competitors offer trade-in this early in the journey?',
        'How does this affect affordability messaging?',
        'Is this live nationwide or in test markets?'
      ]
    },
    'carvana-financing': {
      sources: 2,
      tag: 'CARVANA / FINANCING',
      eyebrow: 'HIGH CONFIDENCE · CARVANA / FINANCING',
      title: 'Financing gets a little less fragmented.',
      body: 'A simplified prequalification flow reduces the handoffs between browsing and buying.',
      then: 'Financing options appeared late in the purchase sequence.',
      now: 'A consolidated prequalification path surfaces payment context earlier.',
      why: 'Payment-first discovery remains a meaningful consumer experience differentiator.',
      trust: 'verified',
      answer: {
        lead: 'Carvana simplified financing to surface payment context earlier.',
        bullets: [
          { text:'A consolidated prequalification path now appears earlier in the browsing flow instead of late in checkout.', ev:0 },
          { text:'This removes a handoff between browsing and buying that used to slow sellers down.' },
          { text:'Payment-first discovery remains a lever CarGurus hasn’t tested at scale.' }
        ]
      },
      evidence: [
        { icon:'🖥️', type:'Competitor site', title:'Carvana — prequalification flow', date:'Oct 3, 2026', url:'https://www.carvana.com' }
      ],
      followups: [
        'What does Carvana’s hiring tell us about this?',
        'Should CarGurus test payment-first discovery?',
        'How does this compare to CarMax’s financing flow?'
      ]
    }
  };
  var genericFollowups = [
    'What else changed this week?',
    'Which competitor is under the most pressure?',
    'What should CarGurus consider doing about this?'
  ];

  var overlay = document.getElementById('storyOverlay');
  function openStory(key){
    var s = stories[key]; if(!s || !overlay) return;
    document.getElementById('mEyebrow').textContent = s.eyebrow;
    document.getElementById('mTitle').textContent = s.title;
    document.getElementById('mBody').textContent = s.body;
    document.getElementById('mThen').textContent = s.then;
    document.getElementById('mNow').textContent = s.now;
    document.getElementById('mWhy').textContent = s.why;
    overlay.classList.add('open');
  }
  document.querySelectorAll('[data-story]').forEach(function(el){
    el.addEventListener('click', function(){ openStory(this.getAttribute('data-story')); });
  });
  if(overlay){
    document.getElementById('storyClose').addEventListener('click', function(){ overlay.classList.remove('open'); });
    overlay.addEventListener('click', function(e){ if(e.target === overlay) overlay.classList.remove('open'); });
  }

  // ===== TIP MODAL =====
  var tipOverlay = document.getElementById('tipOverlay');
  document.querySelectorAll('[data-open-tip]').forEach(function(btn){
    btn.addEventListener('click', function(){ if(tipOverlay) tipOverlay.classList.add('open'); });
  });
  if(tipOverlay){
    document.getElementById('tipClose').addEventListener('click', function(){ tipOverlay.classList.remove('open'); });
    tipOverlay.addEventListener('click', function(e){ if(e.target === tipOverlay) tipOverlay.classList.remove('open'); });
    var tipForm = document.getElementById('tipForm');
    if(tipForm) tipForm.addEventListener('submit', function(e){
      e.preventDefault();
      document.getElementById('tipConfirm').style.display = 'block';
      this.reset();
    });
  }

  // ===== ASK THE DESK / CHAT DRAWER (docked, with a real message transcript) =====
  var chatSidebar = document.getElementById('chatSidebar');
  var chatPill = document.getElementById('chatPill');
  var chatTranscript = document.getElementById('chatTranscript');
  var chatQuickRow = document.getElementById('chatQuickRow');
  var chatSearchInput = document.getElementById('chatSearchInput');
  var chatSendBtn = document.getElementById('chatSendBtn');

  // Keywords are deliberately multi-word/specific phrases, not bare competitor names —
  // a bare "autotrader" or "carmax" would false-match unrelated questions that merely
  // mention the competitor (e.g. a hiring-card topic like "CarMax's hiring themes").
  var answers = [
    { k:['instant offer'], trust:'verified', lead:'No — AutoTrader doesn’t offer this today.', bullets:[
      'There’s no instant online-offer flow for sellers on AutoTrader.com as of this week.',
      'CarMax and Carvana both already have one; AutoTrader doesn’t yet match them here.'
    ]},
    { k:['changed with carmax','carmax this month','change with carmax'], trust:'inferred', lead:'The clearest change this month is hiring, not a shipped feature.', bullets:[
      'CarMax has posted multiple roles tied to real-time, inventory-level pricing in the last 40 days.',
      'See "Hiring themes" below for the full pattern.'
    ]},
    { k:['dealer-side sourcing','dealer side sourcing'], trust:'inferred', lead:'AutoTrader is the one competitor actively building this.', bullets:[
      'A dedicated acquisition workflow connects sourcing, valuation, and dealer inventory into one flow.',
      'CarGurus has sourcing today, but the gap is in acquisition tooling specifically, not listing coverage.'
    ]},
    { k:['payment calculator'], trust:'verified', lead:'Payment calculators are fully commoditized across the set we track.', bullets:[
      'Every tracked competitor — AutoTrader, Cars.com, CarMax, and Carvana — has one in-listing.',
      'Not worth continued tracking effort as a differentiator.'
    ]},
    { k:['most pressure','under pressure','pressure right now'], trust:'inferred', lead:'CarMax is under the most competitive pressure right now.', bullets:[
      'Its pricing/valuation hiring cluster and dealer-adjacent tooling put it ahead of the others we track.',
      'Carvana is a close second, driven by its financing and inventory moves.'
    ]},
    { k:['carvana hiring',"carvana's hiring"], trust:'inferred', lead:'Carvana’s hiring points to an end-to-end play, not just a checkout tweak.', bullets:[
      'Financing-prequalification work pairs with inventory- and supply-chain-themed roles.',
      'Read together, that looks like investment across the full acquisition-to-resale path.',
      'See "Hiring themes" below for the specific roles.'
    ]},
    { k:['how many products','products launched'], trust:'verified', lead:'CarMax has shipped the most this year.', bullets:[
      'Its product-launch pace has accelerated every quarter — the steepest curve of any competitor we track.',
      'See "Products launched, by competitor" below for the full breakdown.'
    ]},
    { k:['conversational search','conversational shopping'], trust:'inferred', lead:'Cars.com is the one testing conversational search today.', bullets:[
      'New needs-based, guided-discovery language replaces structured filters.',
      'CarGurus has no equivalent on the roadmap yet.'
    ]}
  ];

  // Exact story-title match (covers "Tell me more" on a specific card) — more accurate
  // than keyword guessing, which can false-match on a competitor name mentioned elsewhere.
  function matchStoryKey(q){
    var topic = q.replace(/^tell me about:\s*/i, '').replace(/[.?]+$/, '').trim().toLowerCase();
    return Object.keys(stories).filter(function(k){ return stories[k].title.toLowerCase().replace(/[.?]+$/, '') === topic; })[0];
  }

  function findAnswerData(q){
    var storyKey = matchStoryKey(q);
    if(storyKey){
      var s = stories[storyKey];
      return { lead:s.answer.lead, bullets:s.answer.bullets, trust:s.trust, evidence:s.evidence, followups:s.followups, storyKey:storyKey };
    }
    var ql = q.toLowerCase();
    for(var i=0;i<answers.length;i++){
      for(var j=0;j<answers[i].k.length;j++){
        if(ql.indexOf(answers[i].k[j]) !== -1){
          return { lead:answers[i].lead, bullets:answers[i].bullets, trust:answers[i].trust, evidence:null, followups:genericFollowups };
        }
      }
    }
    var topic = q.replace(/^tell me about:\s*/i, '').replace(/[.?]+$/, '').trim();
    if(!topic) return null;
    return {
      lead: 'Nothing confirmed yet on “' + topic + '.”',
      bullets: [
        'It isn’t in the stories or signals the desk is tracking right now.',
        'Flag it on the tip line if you want the desk to start digging in.'
      ],
      trust: 'unvalidated',
      evidence: null,
      followups: genericFollowups
    };
  }

  // Scroll the page behind the drawer to a signal card and flash-highlight it —
  // the drawer stays open/docked so the user can keep cross-referencing.
  function scrollToAndHighlight(storyKey){
    var card = document.querySelector('.insight-card[data-story="'+storyKey+'"]') ||
               document.querySelector('[data-story="'+storyKey+'"]');
    if(!card) return;
    card.scrollIntoView({ behavior:'smooth', block:'center' });
    card.classList.remove('highlight-flash');
    void card.offsetWidth; // restart animation if clicked again
    card.classList.add('highlight-flash');
    setTimeout(function(){ card.classList.remove('highlight-flash'); }, 1800);
  }
  window.scrollToAndHighlight = scrollToAndHighlight;

  function trustLabel(trust){
    if(trust === 'verified') return '✓ Verified';
    if(trust === 'inferred') return '◆ Inferred';
    return '△ Unvalidated';
  }

  // Inline numbered citation pill — click opens a small source-preview popover
  // (icon, title, date, type, link out), the standard "hover card" citation pattern.
  function renderBullets(bullets, evidence){
    if(!bullets || !bullets.length) return '';
    return '<ul class="bot-bullets">' + bullets.map(function(b){
      var text = typeof b === 'string' ? b : b.text;
      var hasEv = typeof b !== 'string' && b.ev !== undefined && evidence && evidence[b.ev];
      var pill = hasEv ? ' <button class="cite-pill" data-ev="'+b.ev+'">'+(b.ev+1)+'</button>' : '';
      return '<li>' + text + pill + '</li>';
    }).join('') + '</ul>';
  }

  function renderSourcesToggle(evidence, msgId){
    if(!evidence || !evidence.length) return '';
    var n = evidence.length;
    return '<button class="sources-toggle" data-msg="'+msgId+'" aria-expanded="false">'+n+' source'+(n===1?'':'s')+' <span class="st-caret">▾</span></button>' +
      '<div class="evidence-list" id="evidence-'+msgId+'" hidden>' + evidence.map(function(e){
        return '<div class="evidence-card"><span class="ev-icon">'+e.icon+'</span>'+
          '<div class="ev-body"><div class="ev-title">'+e.title+'</div><div class="ev-meta">'+e.type+' · '+e.date+'</div></div>'+
          '<a class="ev-link" href="'+e.url+'" target="_blank" rel="noopener" title="Open source" aria-label="Open source">↗</a></div>';
      }).join('') + '</div>';
  }

  function renderFollowups(list){
    if(!list || !list.length) return '';
    return '<div class="followup-row"><div class="followup-label">Related questions</div>' +
      list.map(function(q){ return '<button class="followup-chip">'+q+'</button>'; }).join('') +
      '</div>';
  }

  function renderActions(msgId){
    return '<div class="msg-actions">' +
      '<button class="msg-action" data-action="alert" data-msg="'+msgId+'">Get alerts</button>' +
      '<button class="msg-action" data-action="share" data-msg="'+msgId+'">Share</button>' +
      '<button class="msg-action" data-action="flag" data-msg="'+msgId+'">Flag as incorrect</button>' +
      '</div>';
  }

  function handleMsgAction(btn){
    var action = btn.getAttribute('data-action');
    if(action === 'alert'){
      if(!btn.classList.contains('active')){ btn.classList.add('active'); btn.textContent = 'Alerts on'; }
      else { btn.classList.remove('active'); btn.textContent = 'Get alerts'; }
    } else if(action === 'share'){
      var original = btn.textContent;
      var url = window.location.href.split('#')[0] + '#' + btn.getAttribute('data-msg');
      if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(url).catch(function(){}); }
      btn.textContent = 'Link copied';
      setTimeout(function(){ btn.textContent = original; }, 1800);
    } else if(action === 'flag'){
      btn.textContent = 'Flagged — thanks';
      btn.disabled = true;
      btn.classList.add('active');
    }
  }

  // ===== Citation popover (shared, escapes the drawer's scroll clipping via position:fixed) =====
  var citePopover = document.getElementById('citePopover');
  var activeCitePill = null;
  function closeCitePopover(){
    if(citePopover){ citePopover.classList.remove('open'); }
    if(activeCitePill){ activeCitePill.classList.remove('active'); activeCitePill = null; }
  }
  function openCitePopover(pill, evidenceItem){
    if(!citePopover || !evidenceItem) return;
    citePopover.innerHTML =
      '<div class="cp-head"><span class="cp-icon">'+evidenceItem.icon+'</span><span class="cp-title">'+evidenceItem.title+'</span></div>'+
      '<div class="cp-meta">'+evidenceItem.type+' · '+evidenceItem.date+'</div>'+
      '<a class="cp-link" href="'+evidenceItem.url+'" target="_blank" rel="noopener">Open source →</a>';
    var r = pill.getBoundingClientRect();
    citePopover.style.top = (r.bottom + 6) + 'px';
    var left = Math.min(r.left, window.innerWidth - 300);
    citePopover.style.left = Math.max(left, 8) + 'px';
    citePopover.classList.add('open');
    if(activeCitePill) activeCitePill.classList.remove('active');
    pill.classList.add('active');
    activeCitePill = pill;
  }
  document.addEventListener('click', function(e){
    if(e.target.classList && e.target.classList.contains('cite-pill')){
      e.stopPropagation();
      var pill = e.target;
      if(activeCitePill === pill){ closeCitePopover(); return; }
      var wrapper = pill.closest('.chat-msg');
      var evIdx = parseInt(pill.getAttribute('data-ev'), 10);
      var evidenceItem = wrapper && wrapper.__evidence ? wrapper.__evidence[evIdx] : null;
      openCitePopover(pill, evidenceItem);
    } else if(e.target.classList && e.target.classList.contains('sources-toggle')){
      var list = document.getElementById('evidence-' + e.target.getAttribute('data-msg'));
      if(list){
        var open = !list.hasAttribute('hidden');
        if(open){ list.setAttribute('hidden', ''); e.target.setAttribute('aria-expanded', 'false'); }
        else { list.removeAttribute('hidden'); e.target.setAttribute('aria-expanded', 'true'); }
      }
    } else if(citePopover && !citePopover.contains(e.target)){
      closeCitePopover();
    }
  });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeCitePopover(); });

  // Chat history persists in localStorage so it survives reloads, not just repeated
  // clicks within a session (the transcript DOM already never gets cleared in-session).
  var CHAT_LOG_KEY = 'idChatLog_v1';
  var chatLog = [];
  function saveChatLog(){
    try{ localStorage.setItem(CHAT_LOG_KEY, JSON.stringify(chatLog)); }catch(e){}
  }

  var msgCounter = 0;
  function addUserMessage(text, skipLog){
    if(!chatTranscript) return;
    var row = document.createElement('div');
    row.className = 'chat-msg user';
    var bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = text;
    row.appendChild(bubble);
    chatTranscript.appendChild(row);
    chatTranscript.scrollTop = chatTranscript.scrollHeight;
    if(!skipLog){ chatLog.push({ role:'user', text: text }); saveChatLog(); }
  }

  function addThinkingMessage(){
    if(!chatTranscript) return null;
    var row = document.createElement('div');
    row.className = 'chat-msg bot thinking';
    row.innerHTML = '<div class="bubble"><span class="thinking-dot"></span><span class="thinking-dot"></span><span class="thinking-dot"></span></div>';
    chatTranscript.appendChild(row);
    chatTranscript.scrollTop = chatTranscript.scrollHeight;
    return row;
  }

  function addBotMessage(data, skipLog){
    if(!chatTranscript) return;
    if(!skipLog){ chatLog.push({ role:'bot', data: data }); saveChatLog(); }
    msgCounter++;
    var id = 'm' + msgCounter;
    var row = document.createElement('div');
    row.className = 'chat-msg bot';
    row.__evidence = data.evidence || [];
    var html = '<div class="bubble fade-in">';
    html += '<p class="bot-lead"><b>' + data.lead + '</b></p>';
    html += renderBullets(data.bullets, data.evidence);
    html += '<span class="trust-tag ' + data.trust + '">' + trustLabel(data.trust) + '</span>';
    html += renderSourcesToggle(data.evidence, id);
    if(data.storyKey){ html += '<button class="view-onpage-link" data-cite="' + data.storyKey + '">View on page →</button>'; }
    html += renderFollowups(data.followups);
    html += renderActions(id);
    html += '</div>';
    row.innerHTML = html;
    chatTranscript.appendChild(row);
    var bubble = row.querySelector('.bubble');
    var cite = bubble.querySelector('.view-onpage-link');
    if(cite) cite.addEventListener('click', function(){ scrollToAndHighlight(this.getAttribute('data-cite')); });
    bubble.querySelectorAll('.followup-chip').forEach(function(chip){
      chip.addEventListener('click', function(){ sendMessage(this.textContent); });
    });
    bubble.querySelectorAll('.msg-action').forEach(function(btn){
      btn.addEventListener('click', function(){ handleMsgAction(this); });
    });
    chatTranscript.scrollTop = chatTranscript.scrollHeight;
  }

  function sendMessage(text){
    text = (text || '').trim();
    if(!text || !chatTranscript) return;
    expandDrawer();
    if(chatQuickRow) chatQuickRow.setAttribute('hidden', '');
    addUserMessage(text);
    var thinkingRow = addThinkingMessage();
    var data = findAnswerData(text);
    setTimeout(function(){
      if(thinkingRow) thinkingRow.remove();
      if(data) addBotMessage(data);
    }, 650 + Math.random() * 400);
  }
  window.sendMessage = sendMessage;

  (function restoreChatHistory(){
    var saved;
    try{ saved = JSON.parse(localStorage.getItem(CHAT_LOG_KEY) || '[]'); }catch(e){ saved = []; }
    if(!saved || !saved.length) return;
    saved.forEach(function(entry){
      if(entry.role === 'user') addUserMessage(entry.text, true);
      else if(entry.role === 'bot') addBotMessage(entry.data, true);
    });
    chatLog = saved;
    if(chatQuickRow) chatQuickRow.setAttribute('hidden', '');
  })();

  // Drawer has three states on <body>: nothing (never opened), "drawer-open" (docked,
  // pushes page content left on desktop), "drawer-collapsed" (hidden but resumable via pill).
  // The page itself is never dimmed or blocked — it stays scrollable/clickable throughout.
  function expandDrawer(){
    document.body.classList.add('drawer-open');
    document.body.classList.remove('drawer-collapsed');
  }
  function collapseDrawer(){
    document.body.classList.remove('drawer-open');
    document.body.classList.add('drawer-collapsed');
  }

  function openChatSidebar(presetQuery){
    if(!chatSidebar) return;
    expandDrawer();
    if(chatSearchInput) chatSearchInput.focus();
    if(presetQuery !== undefined) sendMessage(presetQuery);
  }

  function askAboutTopic(topic){ openChatSidebar('Tell me about: ' + topic); }
  window.askAboutTopic = askAboutTopic;

  document.querySelectorAll('[data-open-chat]').forEach(function(btn){
    btn.addEventListener('click', function(e){
      var q = this.getAttribute('data-q');
      openChatSidebar(q !== null ? q : undefined);
    });
  });
  document.querySelectorAll('.chat-chip').forEach(function(c){
    c.addEventListener('click', function(e){ e.stopPropagation(); openChatSidebar(this.getAttribute('data-q')); });
  });
  document.querySelectorAll('.tell-me-more').forEach(function(el){
    el.addEventListener('click', function(e){
      e.stopPropagation(); e.preventDefault();
      askAboutTopic(this.getAttribute('data-topic'));
    });
  });
  var chatCollapseBtn = document.getElementById('chatCollapseBtn');
  if(chatCollapseBtn) chatCollapseBtn.addEventListener('click', collapseDrawer);
  if(chatPill) chatPill.addEventListener('click', expandDrawer);
  if(chatSendBtn && chatSearchInput){
    chatSendBtn.addEventListener('click', function(){ sendMessage(chatSearchInput.value); chatSearchInput.value = ''; });
    chatSearchInput.addEventListener('keydown', function(e){
      if(e.key === 'Enter'){ sendMessage(this.value); this.value = ''; }
    });
  }

  // ===== AUDIO BRIEFING =====
  var playBtn = document.getElementById('playBtn');
  if(playBtn){
    var status = document.getElementById('audioTime');
    var briefing = "This week's briefing. AutoTrader is moving deeper into dealer sourcing, with a new acquisition workflow that goes beyond marketplace discovery. Cars dot com is testing more conversational, needs based search language. And CarMax hiring signals point to renewed investment in real time pricing and valuation. That's the briefing.";
    var speaking = false;
    var defaultLabel = status.textContent;
    playBtn.addEventListener('click', function(){
      if(!('speechSynthesis' in window)){ status.textContent = 'Unavailable'; return; }
      if(speaking){ window.speechSynthesis.cancel(); speaking=false; playBtn.textContent='▶'; status.textContent=defaultLabel; return; }
      var u = new SpeechSynthesisUtterance(briefing); u.rate = 1.0;
      u.onstart=function(){ status.textContent='On air'; playBtn.textContent='❙❙'; speaking=true; };
      u.onend=function(){ status.textContent=defaultLabel; playBtn.textContent='▶'; speaking=false; };
      u.onerror=function(){ status.textContent='Playback error'; speaking=false; playBtn.textContent='▶'; };
      window.speechSynthesis.speak(u);
    });
  }

  // ===== GENERIC FILTER PILLS (visual only) =====
  document.querySelectorAll('.pill-row[data-filter-group]').forEach(function(group){
    group.querySelectorAll('.pill').forEach(function(p){
      p.addEventListener('click', function(){
        group.querySelectorAll('.pill').forEach(function(x){ x.classList.remove('active'); });
        this.classList.add('active');
      });
    });
  });

  // ===== TRENDING TOPICS (slow marquee, duplicated for seamless loop) =====
  var topicsRow = document.getElementById('topicsRow');
  if(topicsRow){
    var topics = [
      {t:'Dealer sourcing', cat:'dealer'},
      {t:'AI-powered valuation', cat:'both'},
      {t:'Conversational shopping', cat:'consumer'},
      {t:'Financing prequalification', cat:'consumer'},
      {t:'Trade-in experience', cat:'consumer'},
      {t:'Lead management', cat:'dealer'},
      {t:'Inventory intelligence', cat:'dealer'},
      {t:'Payment calculator', cat:'consumer'},
      {t:'Acquisition workflows', cat:'dealer'},
      {t:'Real-time pricing models', cat:'both'}
    ];
    function renderTopics(cat){
      var filtered = topics.filter(function(x){ return cat === 'all' || x.cat === cat || x.cat === 'both'; });
      var pills = filtered.map(function(x){ return '<span class="topic-pill" data-topic="'+x.t+'">'+x.t+'</span>'; }).join('');
      topicsRow.innerHTML = pills + pills;
      topicsRow.querySelectorAll('.topic-pill').forEach(function(p){
        p.addEventListener('click', function(){ askAboutTopic(this.getAttribute('data-topic')); });
      });
    }
    renderTopics('all');
    document.querySelectorAll('#topicsFilter .pill').forEach(function(btn){
      btn.addEventListener('click', function(){ renderTopics(this.getAttribute('data-cat')); });
    });
  }

  // ===== BY THE NUMBERS: dealer rank by competitor =====
  var barsEl = document.getElementById('barsChart');
  if(barsEl){
    var rankData = [{m:'CarMax',rank:1},{m:'Carvana',rank:2},{m:'AutoTrader',rank:3},{m:'Cars.com',rank:4}];
    var maxRank = Math.max.apply(null, rankData.map(function(d){ return d.rank; }));
    barsEl.innerHTML = rankData.map(function(d){
      var h = Math.round(((maxRank - d.rank + 1) / maxRank) * 100);
      return '<div class="bar-col"><div class="bar" style="height:'+h+'%"><span class="val">#'+d.rank+'</span></div><div class="bar-label">'+d.m+'</div></div>';
    }).join('');
  }

  // ===== BY THE NUMBERS: launches-per-quarter grouped bar chart =====
  var launchEl = document.getElementById('launchChart');
  if(launchEl){
    var launchCompetitors = [
      {n:'CarMax', color:'var(--blue)', data:[1,2,3,4]},
      {n:'Carvana', color:'var(--amber)', data:[1,1,2,3]},
      {n:'AutoTrader', color:'var(--ink)', data:[0,1,1,2]},
      {n:'Cars.com', color:'var(--muted)', data:[1,1,1,2]}
    ];
    var quarters = ['Q1','Q2','Q3','Q4'];
    var launchMax = Math.max.apply(null, launchCompetitors.map(function(c){ return Math.max.apply(null, c.data); }));
    launchEl.innerHTML = quarters.map(function(q, qi){
      var bars = launchCompetitors.map(function(c){
        var h = Math.round((c.data[qi] / launchMax) * 100);
        return '<div class="launch-bar" style="height:'+Math.max(h,5)+'%; background:'+c.color+';" title="'+c.n+': '+c.data[qi]+'"></div>';
      }).join('');
      return '<div class="launch-group"><div class="launch-bars">'+bars+'</div><div class="launch-qlabel">'+q+'</div></div>';
    }).join('');
    document.getElementById('launchLegend').innerHTML = launchCompetitors.map(function(c){
      return '<div class="legend-item"><span class="legend-dot" style="background:'+c.color+';"></span>'+c.n+'</div>';
    }).join('');
  }

  // ===== SCROLL REVEAL (subtle fade-in as sections/cards enter the viewport) =====
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealTargets = document.querySelectorAll(
    '.wrap > section, .wrap > .chat-teaser, .wrap > .util-strip, .insight-card, .hire-card, .glossary-card, .chart-card'
  );
  if(!reduceMotion && 'IntersectionObserver' in window && revealTargets.length){
    revealTargets.forEach(function(el){ el.classList.add('reveal'); });
    var revealIO = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          revealIO.unobserve(entry.target);
        }
      });
    }, { threshold:0.12, rootMargin:'0px 0px -40px 0px' });
    revealTargets.forEach(function(el){ revealIO.observe(el); });
  }
})();
