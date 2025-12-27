// =========================================================
//  POKER GOD PRO v6.0 - GTO MASTER ENGINE
// =========================================================

// --- 1. GTO DATABASE (Expanded & Structured) ---
// 數據來源參考：GTO Wizard (Cash 100BB General / MTT 25BB)
// 為了達到"僅次於GTO Wizard"，我們細分了 RFI, vs3Bet, 3Bet
const GTO_DB = {
    // === CASH GAME 100BB (High Precision) ===
    "Cash_100bb_RFI": {
        "UTG": "77+,ATs+,KTs+,QTs+,JTs,AQo+,KQo", 
        "MP": "55+,A2s+,K9s+,Q9s+,J9s+,T9s,98s,87s,ATo+,KJo+,QJo",
        "CO": "22+,A2s+,K2s+,Q5s+,J8s+,T8s+,97s+,86s+,75s+,65s,54s,A9o+,KTo+,QTo+,JTo",
        "BTN": "22+,A2s+,K2s+,Q2s+,J2s+,T2s+,95s+,85s+,74s+,63s+,53s+,43s,A2o+,K5o+,Q8o+,J8o+,T8o+,98o,87o",
        "SB": "22+,A2s+,K2s+,Q4s+,J5s+,T7s+,97s+,87s,76s,A7o+,K9o+,QTo+,JTo" // Linear RFI strategy
    },
    "Cash_100bb_vs3Bet": {
        // 當你在 UTG Open，被 3-Bet 後的防守範圍 (Call or 4-Bet)
        "UTG": "TT+,AQs+,AKo,A5s,KQs,QJs,JTs", // 極緊，A5s, KQs 混合 4bet/call
        "MP": "88+,ATs+,KTs+,QJs,JTs,T9s,AQo+,KQs,A5s",
        "CO": "66+,A9s+,KJs+,QJs,JTs,T9s,98s,AQo+,KQo,A4s,A5s",
        "BTN": "22+,A2s+,K9s+,Q9s+,J9s+,T8s+,98s,87s,76s,ATo+,KQo,A3s-A5s", // IP 防守很寬
        "SB": "88+,ATs+,KJs+,QJs,JTs,AQo+" // OOP 痛苦，防守緊
    },
    // === MTT (Tournament) Strategies ===
    "MTT_Deep": { // > 40BB
        "UTG": "77+,AJs+,KQs,AQo+,ATs",
        "MP": "55+,ATs+,KJs+,QJs,JTs,AQo+,KQo",
        "CO": "22+,A2s+,K5s+,Q8s+,J8s+,T8s+,98s,87s,ATo+,KJo+,QJo,JTo",
        "BTN": "22+,A2s+,K2s+,Q2s+,J5s+,T6s+,96s+,86s+,75s+,65s,54s,A2o+,K8o+,Q9o+,J9o+,T9o,98o",
        "SB": "22+,A2s+,K2s+,Q5s+,J7s+,T7s+,97s+,87s,76s,65s,A7o+,K9o+,QTo+,JTo"
    },
    "MTT_Mid": { // 20-25BB (Reshove/RFI Hybrid)
        "UTG": "88+,AJs+,KQs,AQo+",
        "MP": "66+,ATs+,KJs+,QJs,JTs,AQo+,KQo",
        "CO": "22+,A2s+,K8s+,Q9s+,J9s+,T8s+,98s,ATo+,KJo+,QJo",
        "BTN": "22+,A2s+,K5s+,Q8s+,J8s+,T8s+,97s+,86s+,76s,65s,A2o+,K8o+,Q9o+,J9o",
        "SB": "PushFold" // Trigger Algo
    }
};

// --- LANGUAGE & STATE ---
const translations = {
    'zh-TW': {
        nav_ranges:'範圍表', nav_trainer:'測驗', nav_odds:'賠率', nav_postflop:'翻後', nav_bankroll:'資金',
        mixed_chart:'GTO 策略圖 (Pro)', pot_odds_calc:'底池賠率計算', pot:'底池', bet_call:'跟注額', calculate:'計算',
        req_equity:'所需勝率', odds:'賠率', my_hand:'我的手牌', board:'公共牌', opp_action:'對手行動', analyze:'GTO 分析',
        hand_strength:'牌力強度', bankroll_trend:'資金趨勢', total_profit:'總盈虧', add_record:'新增紀錄', buyin:'買入', prize:'獎金', profit:'盈利', save:'儲存', history:'歷史紀錄',
        language:'語言', export:'匯出備份', import:'還原資料', select_card:'選擇撲克牌', cancel:'取消',
        streak:'連勝', score:'得分', gto_action_q:'GTO 會如何行動?', next_hand:'下一手牌 ➔',
        fold:'棄牌', call:'跟注', raise:'加注', check:'過牌', bet:'下注', allin:'全下',
        strat_rfi:'策略: RFI (首率先入)', strat_push:'策略: Push/Fold (短碼)', strat_bb:'策略: BB 防守', strat_cash:'策略: 現金桌 RFI', strat_vs3bet:'策略: 面對 3-Bet',
        ai_situation:'局勢:', ai_strength:'牌力', ai_texture:'盤面:', ai_advice:'GTO 建議',
        advice_val:'價值', advice_ctrl:'控池', advice_giveup:'放棄', advice_strong:'強牌', advice_bluff:'詐唬', advice_draw:'聽牌', advice_nuts:'堅果',
        mode_mtt:'錦標賽 (MTT)', mode_cash:'現金桌 (Cash RFI)', mode_cash_3bet:'現金桌 (vs 3-Bet)', theme_toggle:'切換主題',
        haptic_on: '震動 (On)', haptic_off: '震動 (Off)',
        invested:'總投入', revenue:'總回報', win_rate:'勝率', all:'全部', total_sessions:'總場次',
        placeholder_name:'名稱 (如: 週末錦標賽)', placeholder_note:'備註 (選填)'
    },
    'en': { nav_ranges:'Ranges', nav_trainer:'Trainer', nav_odds:'Odds', nav_postflop:'Postflop', nav_bankroll:'Bankroll', mixed_chart:'GTO Strategy (Pro)', pot_odds_calc:'Pot Odds', pot:'Pot', bet_call:'Call', calculate:'Calc', req_equity:'Req. Equity', odds:'Odds', my_hand:'My Hand', board:'Board', opp_action:'Opp Action', analyze:'GTO Analyze', hand_strength:'Hand Strength', bankroll_trend:'Trend', total_profit:'Total Profit', add_record:'Add Record', buyin:'Buy-in', prize:'Prize', profit:'Profit', save:'Save', history:'History', language:'Language', export:'Export', import:'Import', select_card:'Select Card', cancel:'Cancel', streak:'Streak', score:'Score', gto_action_q:'GTO Action?', next_hand:'Next ➔', fold:'Fold', call:'Call', raise:'Raise', check:'Check', bet:'Bet', allin:'All-in', strat_rfi:'Strategy: RFI', strat_push:'Strategy: Push/Fold', strat_bb:'Strategy: BB Def', strat_cash:'Strategy: Cash RFI', strat_vs3bet:'Strategy: Facing 3-Bet', ai_situation:'Vs', ai_strength:'Hand', ai_texture:'Texture:', ai_advice:'GTO Advice', advice_val:'Value', advice_ctrl:'Control', advice_giveup:'Give Up', advice_strong:'Strong', advice_bluff:'Bluff', advice_draw:'Draw', advice_nuts:'Nuts', mode_mtt:'Tournament (MTT)', mode_cash:'Cash (RFI)', mode_cash_3bet:'Cash (vs 3-Bet)', theme_toggle:'Theme', haptic_on:'Haptic (On)', haptic_off:'Haptic (Off)', invested:'Invested', revenue:'Returned', win_rate:'Win Rate', all:'All', total_sessions:'Sessions', placeholder_name:'Name', placeholder_note:'Note' }
};
// Fallbacks
if(!translations['zh-CN']) translations['zh-CN'] = translations['zh-TW'];
if(!translations['ja']) translations['ja'] = translations['en'];
if(!translations['ko']) translations['ko'] = translations['en'];

let curLang = localStorage.getItem('pg_lang') || 'zh-TW';
let currentFilter = 'ALL';
const state = { h1: null, h2: null, b1:null, b2:null, b3:null, b4:null, b5:null, oppAction: null };
let curSel = null;
const ranks = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];
let bankrollData = JSON.parse(localStorage.getItem('pokerGodBankroll') || '[]');
let trState = { correct:0, total:0, streak:0, current:null };
let hapticEnabled = localStorage.getItem('pg_haptic') !== 'false';

// --- INITIALIZATION ---
window.onload = () => { 
    initTheme(); updateText(); genGrid(); genSelUI(); updateRanges(); 
    document.getElementById('brDate').valueAsDate = new Date(); 
    updateNameList(); renderBankrollUI(); updateHapticUI();
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{}); 
};

// --- CORE UTILITIES ---
function switchTab(id, el) {
    document.querySelectorAll('.tab-content').forEach(d=>d.classList.remove('active'));
    document.getElementById('tab-'+id).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(d=>d.classList.remove('active'));
    el.classList.add('active');
    triggerHaptic(10);
    if(id === 'trainer') nextDrill();
    if(id === 'bankroll') renderBankrollUI(); 
}

function t(key) { return translations[curLang][key] || key; }
function updateText() {
    document.querySelectorAll('[data-i18n]').forEach(el => el.innerText = t(el.getAttribute('data-i18n')));
    document.querySelectorAll('[data-placeholder-i18n]').forEach(el => el.placeholder = t(el.getAttribute('data-placeholder-i18n')));
    
    // Dynamic Options update if needed
    updateRanges(); updateHapticUI();
}

// Haptics
function toggleHaptic() { hapticEnabled = !hapticEnabled; localStorage.setItem('pg_haptic', hapticEnabled); updateHapticUI(); if(hapticEnabled) triggerHaptic(50); }
function updateHapticUI() { 
    const label = document.getElementById('hapticLabel'); const icon = document.getElementById('hapticIcon');
    if(label) label.innerText = hapticEnabled ? t('haptic_on') : t('haptic_off');
    if(icon) icon.innerText = hapticEnabled ? '📳' : '🔕';
}
function triggerHaptic(pattern) { if(hapticEnabled && navigator.vibrate) navigator.vibrate(pattern || 10); }

// UI Helpers
function openLangModal() { toggleFab(); document.getElementById('langModal').style.display='flex'; }
function changeLang(lang) { curLang = lang; localStorage.setItem('pg_lang', lang); updateText(); document.getElementById('langModal').style.display='none'; }
function toggleFab() { document.getElementById('fabMenu').classList.toggle('active'); document.querySelector('.fab-btn').innerText = document.getElementById('fabMenu').classList.contains('active') ? '✕' : '☰'; }
document.addEventListener('click', e => { if (!document.querySelector('.fab-wrapper').contains(e.target)) document.getElementById('fabMenu').classList.remove('active'); });
function initTheme() { document.body.setAttribute('data-theme', localStorage.getItem('pokerGodTheme') || 'dark'); }
function toggleTheme() { const newTheme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light'; document.body.setAttribute('data-theme', newTheme); localStorage.setItem('pokerGodTheme', newTheme); renderBankrollUI(); toggleFab(); }

// --- RANGE ENGINE PRO (v6.0) ---
function genGrid() { const c = document.getElementById('rangeGrid'); c.innerHTML=''; for(let i=0; i<13; i++) for(let j=0; j<13; j++) { let d=document.createElement('div'); d.className='chart-cell'; let t=i===j?ranks[i]+ranks[j]:(i<j?ranks[i]+ranks[j]+'s':ranks[j]+ranks[i]+'o'); d.innerText=t; d.dataset.h=t; d.dataset.r1=14-i; d.dataset.r2=14-j; d.dataset.type = i===j?'pair':(i<j?'suited':'offsuit'); c.appendChild(d); } }

function updateRanges() {
    const stack = parseInt(document.getElementById('stackDepth').value) || 100;
    const pos = document.getElementById('heroPosition').value;
    const gameMode = document.getElementById('gameMode').value;
    const playerCount = parseInt(document.getElementById('playerCount').value);

    let labelKey = 'strat_rfi';
    let dbKey = "";
    let calcMode = "RFI";

    // Scenario Logic
    if (gameMode === 'Cash_vs_3Bet') {
        labelKey = 'strat_vs3bet';
        dbKey = "Cash_100bb_vs3Bet";
    } else if (gameMode === 'Cash') {
        labelKey = 'strat_cash';
        dbKey = "Cash_100bb_RFI";
    } else {
        // MTT Logic
        if (stack < 15) { labelKey = 'strat_push'; calcMode = "PushFold"; }
        else if (stack <= 25) { labelKey = 'strat_rfi'; dbKey = "MTT_Mid"; } // 25BB ranges
        else { labelKey = 'strat_rfi'; dbKey = "MTT_Deep"; }
    }

    if (pos === 'BB' && gameMode === 'MTT') calcMode = "BBDef";

    // 6-Max Mapping Adjustment (If playing 6max, UTG is mapped to nothing in 9max DB, need to map to LJ/MP)
    let mapPos = pos;
    if(playerCount <= 6) {
        if(pos === 'EP') mapPos = 'MP'; // 6-max UTG is closer to 9-max MP
    }

    document.getElementById('rangeInfoText').innerText = `${t(labelKey)} (${stack}BB) - ${pos}`;

    document.querySelectorAll('.chart-cell').forEach(c => {
        let r1 = parseInt(c.dataset.r1), r2 = parseInt(c.dataset.r2), type = c.dataset.type;
        let freqs = null;

        // A. Database Lookup
        if (dbKey && GTO_DB[dbKey] && GTO_DB[dbKey][mapPos]) {
            const rangeStr = GTO_DB[dbKey][mapPos];
            if (checkRange(r1, r2, type, rangeStr)) freqs = {a:0, r:100, c:0, f:0}; 
            else freqs = {a:0, r:0, c:0, f:100};
        } 
        
        // B. Fallback Algo
        if (!freqs) freqs = getFrequencies(r1, r2, type, pos, stack, calcMode);
        
        // Render
        let s1 = freqs.a; let s2 = s1 + freqs.r; let s3 = s2 + freqs.c;
        // Different colors for Call vs Raise (Yellow for Call, Green for Raise)
        c.style.background = `linear-gradient(135deg, var(--c-allin) 0% ${s1}%, var(--c-raise) ${s1}% ${s2}%, var(--c-call) ${s2}% ${s3}%, var(--c-fold) ${s3}% 100%)`;
    });
}

function checkRange(r1, r2, type, rangeStr) {
    let parts = rangeStr.split(',');
    let myHand = type === 'pair' ? ranks[14-r1]+ranks[14-r1] : ranks[14-r1]+ranks[14-r2]+(type==='suited'?'s':'o');
    for (let p of parts) {
        p = p.trim();
        if (p === myHand) return true;
        if (p.includes('+')) {
            let base = p.replace('+','');
            let baseR1 = 14 - ranks.indexOf(base[0]);
            let baseR2 = 14 - ranks.indexOf(base[1]);
            let baseType = base.length === 2 ? 'pair' : (base.includes('s') ? 'suited' : 'offsuit');
            if (type !== baseType) continue;
            if (type === 'pair') { if (r1 >= baseR1) return true; } 
            else { if (r1 === baseR1 && r2 >= baseR2) return true; } 
        }
        // Support for "88-TT" ranges
        if (p.includes('-')) {
            let [start, end] = p.split('-');
            let startR = 14 - ranks.indexOf(start[0]);
            let endR = 14 - ranks.indexOf(end[0]);
            if (type === 'pair' && r1 >= Math.min(startR, endR) && r1 <= Math.max(startR, endR)) return true;
        }
    }
    return false;
}

function getFrequencies(r1, r2, type, pos, stack, mode) {
    let f = {a:0, r:0, c:0, f:100}; let score = r1*2 + r2 + (type==='pair'?20:0) + (type==='suited'?6:0);
    if (mode === "PushFold") {
        let threshold = 35 - (stack - 5); if(pos==='BTN'||pos==='SB') threshold -= 12; else if(pos==='CO') threshold -= 6;
        if(type==='pair') { if(r1>=7) { f.a=100; f.f=0; return f; } if(r1>=2 && r1<7) { let p = (8-r1)*10 + (15-stack)*5; f.a=Math.min(100,Math.max(0,p)); f.f=100-f.a; return f; } }
        if(score >= threshold + 5) { f.a=100; f.f=0; } else if(score >= threshold) { f.a=50; f.f=50; } return f;
    }
    if (mode === "BBDef") {
        // BB Defends wide
        if((type==='pair'&&r1>=10)||(type==='offsuit'&&r1===14&&r2>=12)||(type==='suited'&&r1===14&&r2>=11)) { f.r=80; f.c=20; f.f=0; return f; }
        let callThresh = 20; if(score >= callThresh) { f.c=100; f.f=0; return f; } return f;
    }
    // Default RFI Algo
    let t = 0; if(pos==='MP') t=5; if(pos==='CO') t=12; if(pos==='BTN') t=20; if(pos==='SB') t=18;
    let openThresh = 45 - t; if(score >= openThresh + 5) { f.r=100; f.f=0; return f; } if(score >= openThresh) { f.r=50; f.f=50; return f; } return f;
}

function calcPotOdds() { let p=parseFloat(document.getElementById('potSize').value), c=parseFloat(document.getElementById('betSize').value); if(!p||!c)return; document.getElementById('oddsResult').style.display='block'; document.getElementById('reqEquity').innerText = ((c/(p+c+c))*100).toFixed(1)+'%'; document.getElementById('oddsRatio').innerText = ((p+c)/c).toFixed(1)+' : 1'; }
function setOppAction(act, btn) { state.oppAction = act; document.querySelectorAll('.btn-opp').forEach(b => b.classList.remove('active')); btn.classList.add('active'); triggerHaptic(10); }

// --- [REWRITTEN] POSTFLOP ENGINE 2.0 (Texture & GTO Logic) ---
function analyzePostflop() {
    if(!state.h1 || !state.h2 || !state.b1 || !state.b2 || !state.b3) { alert("Select Cards!"); return; }
    if(!state.oppAction) { alert("Select Action!"); return; }
    triggerHaptic(20);
    
    const hCards = [state.h1, state.h2]; 
    const bCards = [state.b1, state.b2, state.b3, state.b4, state.b5].filter(c=>c); 
    const allCards = hCards.concat(bCards);
    const map = {'A':14,'K':13,'Q':12,'J':11,'T':10,'9':9,'8':8,'7':7,'6':6,'5':5,'4':4,'3':3,'2':2};
    
    // 1. Analyze Board Texture (GTO Critical Factor)
    let bSuitCounts = {}; bCards.forEach(c => bSuitCounts[c.suit.id] = (bSuitCounts[c.suit.id]||0)+1);
    let isMonotone = Object.values(bSuitCounts).some(v => v >= 3);
    let isPairedBoard = new Set(bCards.map(c=>c.rank)).size < bCards.length;
    let bRanks = bCards.map(c=>map[c.rank]).sort((a,b)=>b-a);
    let isConnected = (bRanks[0] - bRanks[bRanks.length-1] <= 4); // Simple connectivity check
    
    // 2. Hand Strength Evaluation
    let mySuitCounts = {}; allCards.forEach(c => mySuitCounts[c.suit.id] = (mySuitCounts[c.suit.id]||0)+1);
    let flushSuit = Object.keys(mySuitCounts).find(s => mySuitCounts[s] >= 5);
    let isFlush = !!flushSuit; 
    let isFlushDraw = Object.values(mySuitCounts).some(v => v === 4);

    function checkStraight(rankList) {
        let unique = [...new Set(rankList)].sort((a,b) => b-a);
        if(unique.includes(14)) unique.push(1); 
        for(let i=0; i <= unique.length - 5; i++) {
            if(unique[i] - unique[i+4] === 4) return { isSt: true, high: unique[i] };
        }
        return { isSt: false };
    }

    // Advanced Checks
    let isStraightFlush = false; let isRoyal = false;
    if(isFlush) {
        let flushRanks = allCards.filter(c => c.suit.id === flushSuit).map(c => map[c.rank]);
        let sfRes = checkStraight(flushRanks);
        if(sfRes.isSt) { isStraightFlush = true; if(sfRes.high === 14) isRoyal = true; }
    }
    let allRanks = allCards.map(c => map[c.rank]);
    let stRes = checkStraight(allRanks); let isStraight = stRes.isSt;
    
    let rankCounts = {}; allRanks.forEach(r => rankCounts[r] = (rankCounts[r]||0)+1);
    let counts = Object.values(rankCounts);
    let quads = counts.some(c => c === 4);
    let trips = counts.filter(c => c === 3).length;
    let pairs = counts.filter(c => c === 2).length;
    let isFullHouse = (trips >= 1 && (pairs >= 1 || trips >= 2));

    // Categorize Hand
    let score=0, catText="High Card", barColor="#ef4444";
    if (isRoyal) { score=100; catText="Royal Flush"; barColor="#8b5cf6"; }
    else if (isStraightFlush) { score=98; catText="Straight Flush"; barColor="#8b5cf6"; }
    else if (quads) { score=95; catText="Four of a Kind"; barColor="#8b5cf6"; }
    else if (isFullHouse) { score=90; catText="Full House"; barColor="#10b981"; }
    else if (isFlush) { score=85; catText="Flush"; barColor="#10b981"; }
    else if (isStraight) { score=80; catText="Straight"; barColor="#10b981"; }
    else if (trips) { score=70; catText="Set / Trips"; barColor="#10b981"; }
    else if (pairs >= 2) { score=60; catText="Two Pair"; barColor="#10b981"; }
    else if (pairs === 1) { score=45; catText="Pair"; barColor="#f59e0b"; }
    else if (isFlushDraw) { score=35; catText="Flush Draw"; barColor="#3b82f6"; } // Strong Draw
    else { score=15; catText="High Card"; barColor="#ef4444"; }

    // 3. GTO Logic Generation (The "Pro" part)
    let adviceHtml = `${t('ai_situation')} <span style="color:var(--accent)">${state.oppAction}</span>.<br>`;
    
    let textureText = isMonotone ? '🌊 Monotone' : (isPairedBoard ? '♊ Paired' : (isConnected ? '🔗 Connected' : '🏜️ Dry'));
    adviceHtml += `<div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:5px;">${t('ai_texture')} ${textureText}</div>`;
    adviceHtml += `${t('ai_strength')} <strong>${catText}</strong>.<br>`;
    
    adviceHtml += `<ul class="ai-list" style="margin-top:10px;">`;
    
    // --- GTO HEURISTICS ---
    if (state.oppAction === 'check') {
        if(score >= 70) {
            // Strong Hand
            if (isMonotone || isConnected) adviceHtml += `<li><span style="color:var(--c-raise)">● Bet:</span> 66-75% Pot (Value/Protection)</li>`;
            else adviceHtml += `<li><span style="color:var(--c-raise)">● Bet:</span> 125% Pot (Polarized Value) OR Check (Trap)</li>`;
        } else if (score >= 45) {
            // Medium Hand
            adviceHtml += `<li><span style="color:var(--c-call)">● Check:</span> Pot Control (Showdown Value)</li>`;
        } else if (isFlushDraw || (score < 45 && Math.random() > 0.7)) {
            // Draw or Bluff
            adviceHtml += `<li><span style="color:var(--c-raise)">● Bet:</span> 33-50% Pot (Semi-Bluff)</li>`;
        } else {
            adviceHtml += `<li><span style="color:var(--c-fold)">● Check:</span> Give Up</li>`;
        }
    } else if (state.oppAction === 'bet') {
        if(score >= 80) adviceHtml += `<li><span style="color:var(--c-raise)">● Raise:</span> Value (3x size)</li>`;
        else if(score >= 45 || isFlushDraw) adviceHtml += `<li><span style="color:var(--c-call)">● Call:</span> Bluff Catch / Implied Odds</li>`;
        else adviceHtml += `<li><span style="color:var(--c-fold)">● Fold:</span> Not enough equity</li>`;
    }
    adviceHtml += `</ul>`;
    
    document.getElementById('postflopResult').style.display='block';
    document.getElementById('strengthBar').style.width=score+'%'; document.getElementById('strengthBar').style.backgroundColor=barColor;
    document.getElementById('handCategory').innerText=catText; document.getElementById('handCategory').style.color=barColor;
    document.getElementById('aiAdvice').innerHTML = adviceHtml;
}

function resetPostflop() {
    state.h1 = null; state.h2 = null; state.b1 = null; state.b2 = null; state.b3 = null; state.b4 = null; state.b5 = null; state.oppAction = null;
    triggerHaptic(15);
    ['h1','h2','b1','b2','b3','b4','b5'].forEach(id => { document.getElementById('card_'+id).className = 'poker-card empty'; document.getElementById('card_'+id).innerHTML = (id.startsWith('h') ? '+' : ''); });
    document.querySelectorAll('.btn-opp').forEach(b => b.classList.remove('active'));
    document.getElementById('postflopResult').style.display = 'none';
}

function updateNameList() { const names = [...new Set(bankrollData.map(i => i.name).filter(n => n))]; const dl = document.getElementById('brNameList'); dl.innerHTML = ''; names.forEach(n => { let opt=document.createElement('option'); opt.value=n; dl.appendChild(opt); }); }
function calcPreview() { let b=parseFloat(document.getElementById('brBuyIn').value)||0; let p=parseFloat(document.getElementById('brPrize').value)||0; let d=p-b; document.getElementById('brProfitPreview').innerText=(d>=0?'+':'')+d; document.getElementById('brProfitPreview').style.color=d>=0?'var(--accent)':'var(--danger)'; }
function addBankroll() { let d=document.getElementById('brDate').value, t=document.getElementById('brType').value; let n=document.getElementById('brName').value.trim(); let b=parseFloat(document.getElementById('brBuyIn').value)||0, p=parseFloat(document.getElementById('brPrize').value)||0, note=document.getElementById('brNote').value; if(!d) { alert("Date required"); return; } bankrollData.push({ id:Date.now(), date:d, type:t, name:n, buyIn:b, prize:p, amount:p-b, note:note }); localStorage.setItem('pokerGodBankroll', JSON.stringify(bankrollData)); document.getElementById('brName').value=''; document.getElementById('brBuyIn').value=''; document.getElementById('brPrize').value=''; document.getElementById('brNote').value=''; updateNameList(); renderBankrollUI(); triggerHaptic(30); }
function deleteRecord(id) { if(!confirm("Delete?"))return; bankrollData=bankrollData.filter(i=>i.id!==id); localStorage.setItem('pokerGodBankroll',JSON.stringify(bankrollData)); updateNameList(); renderBankrollUI(); triggerHaptic(30); }
function setFilter(filter, el) { currentFilter = filter; document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active')); el.classList.add('active'); renderBankrollUI(); triggerHaptic(10); }
function renderBankrollUI() { 
    let filteredData = bankrollData.filter(i => currentFilter === 'ALL' || i.type === currentFilter);
    let chartData = [...filteredData].sort((a,b) => { const dateA = new Date(a.date); const dateB = new Date(b.date); return dateA - dateB || a.id - b.id; });
    let cumProfit=0, cumInvest=0, totalRevenue=0, winCount=0, pointsProfit=[{x:0, y:0, label:'Start'}];
    chartData.forEach((i, idx) => { cumProfit += i.amount; cumInvest += i.buyIn || 0; totalRevenue += i.prize || 0; if(i.amount > 0) winCount++; let dateStr = i.date.substring(5).replace('-','/'); pointsProfit.push({x: idx+1, y: cumProfit, label: dateStr}); });
    document.getElementById('statSessions').innerText = chartData.length; document.getElementById('statInvested').innerText = cumInvest; document.getElementById('statRevenue').innerText = totalRevenue; document.getElementById('statROI').innerText = cumInvest > 0 ? ((cumProfit / cumInvest) * 100).toFixed(1) + '%' : '0%'; document.getElementById('statWinRate').innerText = chartData.length > 0 ? ((winCount / chartData.length) * 100).toFixed(1) + '%' : '0%'; document.getElementById('bigTotalProfit').innerText = (cumProfit>=0?'+':'')+cumProfit; document.getElementById('bigTotalProfit').style.color = cumProfit>=0?'var(--accent)':'var(--danger)';
    let l=document.getElementById('historyList'); l.innerHTML=''; [...chartData].reverse().forEach((i)=>{ let d=document.createElement('div'); d.className='history-item'; let typeLabel = i.type === 'MTT' ? t('mode_mtt') : t('mode_cash'); let noteHtml = i.note ? `<div style="font-size:0.75rem; color:#aaa; margin-top:2px;">📝 ${i.note}</div>` : ''; d.innerHTML=`<div style="flex:1"><div style="font-size:0.9rem;font-weight:bold;color:var(--text-main);">${i.name||'--'} <span style="font-size:0.7rem;opacity:0.7">(${typeLabel})</span></div><div style="font-size:0.75rem;color:var(--text-muted);">${i.date}</div>${noteHtml}</div><div style="text-align:right"><span class="${i.amount>=0?'pos-val':'neg-val'}">${i.amount>=0?'+':''}${i.amount}</span><button class="btn-delete" onclick="deleteRecord(${i.id})" style="margin-left:5px;">✕</button></div>`; l.appendChild(d); }); setTimeout(() => drawChart(pointsProfit), 50);
}
function drawChart(dataProfit) { let cvs = document.getElementById('bankrollCanvas'); if(!cvs) return; let ctx = cvs.getContext('2d'); let dpr = window.devicePixelRatio || 1; let rect = cvs.getBoundingClientRect(); cvs.width = rect.width * dpr; cvs.height = 240 * dpr; ctx.scale(dpr, dpr); let w = rect.width; let h = 240; ctx.clearRect(0, 0, w, h); if(dataProfit.length < 2) { ctx.fillStyle="#94a3b8"; ctx.font="14px Arial"; ctx.textAlign="center"; ctx.fillText("No Data", w/2, h/2); return; } let ys = dataProfit.map(p=>p.y); let max = Math.max(0, ...ys); let min = Math.min(0, ...ys); let range = max - min; if(range === 0) range = 100; max += range * 0.1; min -= range * 0.1; let mLeft=40, mBottom=30, mTop=20, mRight=10; let graphW = w - mLeft - mRight; let graphH = h - mBottom - mTop; let mapX = i => mLeft + (i / (dataProfit.length-1)) * graphW; let mapY = v => mTop + graphH - ((v - min) / (max - min)) * graphH; ctx.fillStyle = "#64748b"; ctx.font = "10px sans-serif"; ctx.textAlign = "right"; ctx.strokeStyle = "rgba(125,125,125,0.1)"; ctx.lineWidth = 1; let ySteps = 5; for(let i=0; i<=ySteps; i++) { let val = min + (range * (i/ySteps)); let yPos = mapY(val); ctx.beginPath(); ctx.moveTo(mLeft, yPos); ctx.lineTo(w-mRight, yPos); ctx.stroke(); ctx.fillText(Math.round(val), mLeft-5, yPos+3); } let zeroY = mapY(0); if(zeroY >= mTop && zeroY <= h-mBottom) { ctx.beginPath(); ctx.strokeStyle = document.body.getAttribute('data-theme') === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1; ctx.moveTo(mLeft, zeroY); ctx.lineTo(w-mRight, zeroY); ctx.stroke(); } let profitColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim(); ctx.beginPath(); ctx.strokeStyle = profitColor; ctx.lineWidth = 3; ctx.setLineDash([]); ctx.moveTo(mapX(0), mapY(dataProfit[0].y)); for(let i=1; i<dataProfit.length; i++) ctx.lineTo(mapX(i), mapY(dataProfit[i].y)); ctx.stroke(); ctx.textAlign = "center"; let step = Math.ceil(dataProfit.length / 6); for(let i=0; i<dataProfit.length; i++) { let x = mapX(i), y = mapY(dataProfit[i].y); ctx.beginPath(); ctx.fillStyle = profitColor; ctx.arc(x, y, 4, 0, Math.PI*2); ctx.fill(); if(i % step === 0 || i === dataProfit.length-1) { if(dataProfit[i].label) { ctx.fillStyle = "#94a3b8"; ctx.fillText(dataProfit[i].label, x, h-10); } } } }
function nextDrill() { const positions = ['EP','MP','CO','BTN','SB','BB']; const pos = positions[Math.floor(Math.random()*positions.length)]; const stack = Math.random() < 0.3 ? 12 : (Math.random() < 0.6 ? 40 : 100); const r1Idx = Math.floor(Math.random()*13); const r2Idx = Math.floor(Math.random()*13); const s1 = {id:'s', symbol:'♠', class:'suit-s'}; const s2 = (r1Idx===r2Idx || Math.random()<0.23) ? s1 : {id:'h', symbol:'♥', class:'suit-h'}; const r1 = ranks[Math.min(r1Idx, r2Idx)]; const r2 = ranks[Math.max(r1Idx, r2Idx)]; const type = (r1===r2) ? 'pair' : (s1.id===s2.id ? 'suited' : 'offsuit'); trState.current = { r1:14-Math.min(r1Idx,r2Idx), r2:14-Math.max(r1Idx,r2Idx), type, pos, stack }; document.getElementById('trScenario').innerText = `${pos} | ${stack}BB`; renderTrainerCard('trCard1', r1, s1); renderTrainerCard('trCard2', r2, (r1===r2 && s1.id===s2.id) ? {id:'d',symbol:'♦',class:'suit-d'} : s2); document.getElementById('trFeedback').style.display = 'none'; document.getElementById('trNextBtn').style.display = 'none'; }
function renderTrainerCard(id, r, s) { document.getElementById(id).innerHTML = `<span class="${s.class}">${s.symbol}</span><span>${r}</span>`; }
function checkTrainer(act) { if(document.getElementById('trNextBtn').style.display === 'block') return; const { r1, r2, type, pos, stack } = trState.current; let mode = "RFI"; if(stack < 15) mode = "PushFold"; else if(pos === "BB") mode = "BBDef"; else if(pos === "SB") mode = "SB"; const freqs = getFrequencies(r1, r2, type, pos, stack, mode); let correctAct = 'fold'; let maxVal = freqs.f; if(freqs.c > maxVal) { maxVal = freqs.c; correctAct = 'call'; } if(freqs.r > maxVal) { maxVal = freqs.r; correctAct = 'raise'; } if(freqs.a > maxVal) { maxVal = freqs.a; correctAct = 'raise'; } let userAct = act; if(act === 'raise' && freqs.a > 50) userAct = 'raise'; let isCorrect = (userAct === correctAct) || (maxVal < 60 && freqs[act[0]] > 30); trState.total++; if(isCorrect) { trState.correct++; trState.streak++; triggerHaptic([10,30]); } else { trState.streak = 0; triggerHaptic([50,50,50]); } document.getElementById('trScore').innerText = `${trState.correct}/${trState.total}`; document.getElementById('trStreak').innerText = trState.streak; const fb = document.getElementById('trFeedback'); fb.style.display = 'block'; fb.className = 'trainer-feedback ' + (isCorrect ? 'fb-correct' : 'fb-wrong'); fb.innerHTML = `<strong>${isCorrect ? 'Correct!' : 'Mistake!'}</strong><br>GTO: Raise ${freqs.r+freqs.a}% | Call ${freqs.c}% | Fold ${freqs.f}%`; document.getElementById('trNextBtn').style.display = 'block'; }
function genSelUI(){ [{id:'s',c:'suit-s',s:'♠'},{id:'h',c:'suit-h',s:'♥'},{id:'c',c:'suit-c',s:'♣'},{id:'d',c:'suit-d',s:'♦'}].forEach(x=>{ let r=document.getElementById('suit-'+(x.id==='s'?'spades':x.id==='h'?'hearts':x.id==='c'?'clubs':'diamonds')); ranks.forEach(k=>{let b=document.createElement('button');b.className='rank-btn '+x.c;b.innerText=k+x.s;b.onclick=()=>setCard(k,x);r.appendChild(b)}); }); }
function sel(id){curSel=id;document.getElementById('cardModal').style.display='flex'; triggerHaptic(10); }
function closeSel(){document.getElementById('cardModal').style.display='none'}
function setCard(r,s){ state[curSel]={rank:r,suit:s}; let el=document.getElementById('card_'+curSel); el.className='poker-card selected'; el.innerHTML=`<span class="${s.c}">${s.s}</span><span>${r}</span>`; closeSel(); triggerHaptic(10); }
