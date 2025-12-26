// --- GTO DATABASE (Compressed for 6-Max Cash 100BB & MTT) ---
const GTO_DB = {
    "Cash_100bb_6max": {
        "EP": "77+,AJs+,KQs,AQo+,66,ATs,KJs,QJs,JTs", 
        "MP": "66+,ATs+,KJs+,QJs,JTs,AQo+,KQo,55,A9s,KTs,QTs,J9s,T9s,98s",
        "CO": "22+,A2s+,K8s+,Q9s+,J8s+,T8s+,97s+,86s+,75s+,65s,A9o+,KTo+,QTo+,JTo,A8o,K9o",
        "BTN": "22+,A2s+,K2s+,Q2s+,J4s+,T5s+,95s+,84s+,74s+,63s+,53s+,43s,A2o+,K5o+,Q8o+,J8o+,T8o+,98o",
        "SB": "22+,A2s+,K2s+,Q4s+,J5s+,T6s+,96s+,85s+,75s+,64s+,54s,A7o+,K9o+,Q9o+,J9o+,T9o"
    },
    "MTT_Deep_9max": {
        "EP": "77+,AJs+,KQs,AQo+",
        "MP": "55+,ATs+,KJs+,QJs,JTs,AQo+,KQo",
        "CO": "22+,A2s+,K5s+,Q8s+,J8s+,T8s+,98s,87s,ATo+,KJo+,QJo,JTo",
        "BTN": "22+,A2s+,K2s+,Q2s+,J5s+,T6s+,96s+,86s+,75s+,65s,54s,A2o+,K8o+,Q9o+,J9o+,T9o,98o",
        "SB": "22+,A2s+,K2s+,Q2s+,J5s+,T6s+,96s+,86s+,76s,65s,A2o+,K5o+,Q8o+,J9o+,T9o"
    }
};

const translations = {
    'zh-TW': {
        nav_ranges:'範圍表', nav_trainer:'測驗', nav_odds:'賠率', nav_postflop:'翻後', nav_bankroll:'資金',
        mixed_chart:'混合策略圖 (GTO)', pot_odds_calc:'底池賠率計算', pot:'底池', bet_call:'跟注額', calculate:'計算',
        req_equity:'所需勝率', odds:'賠率', my_hand:'我的手牌', board:'公共牌', opp_action:'對手行動', analyze:'AI 分析決策',
        hand_strength:'牌力強度', bankroll_trend:'資金趨勢', total_profit:'總盈虧', add_record:'新增紀錄', buyin:'買入', prize:'獎金', profit:'盈利', save:'儲存', history:'歷史紀錄',
        language:'語言', export:'匯出備份', import:'還原資料', select_card:'選擇撲克牌', cancel:'取消',
        streak:'連勝', score:'得分', gto_action_q:'GTO 會如何行動?', next_hand:'下一手牌 ➔',
        fold:'棄牌', call:'跟注', raise:'加注', check:'過牌', bet:'下注', allin:'全下',
        strat_rfi:'策略: RFI (首率先入)', strat_push:'策略: Push/Fold (推/棄)', strat_bb:'策略: BB 防守', strat_cash:'策略: 現金桌 (Pro)',
        ai_situation:'局勢: 面對', ai_strength:'牌力', blocker_effect:'🛡️ 阻擋牌效應:', ai_advice:'建議',
        advice_val:'價值', advice_ctrl:'控池', advice_giveup:'放棄', advice_strong:'強牌', advice_bluff:'抓詐唬', advice_draw:'聽牌', advice_nuts:'堅果牌', advice_snap:'秒接', advice_math:'計算賠率',
        mode_mtt:'錦標賽 (MTT)', mode_cash:'現金桌 (Cash)', theme_toggle:'切換主題',
        invested:'總投入', revenue:'總回報', win_rate:'勝率', all:'全部', total_sessions:'總場次',
        placeholder_name:'名稱 (如: 週末錦標賽)', placeholder_note:'備註 (選填)'
    },
    'zh-CN': { nav_ranges:'范围表', nav_trainer:'测验', nav_odds:'赔率', nav_postflop:'翻后', nav_bankroll:'资金', mixed_chart:'混合策略图 (GTO)', pot_odds_calc:'底池赔率', pot:'底池', bet_call:'跟注额', calculate:'计算', req_equity:'所需胜率', odds:'赔率', my_hand:'我的手牌', board:'公共牌', opp_action:'对手行动', analyze:'AI 分析', hand_strength:'牌力强度', bankroll_trend:'资金趋势', total_profit:'总盈亏', add_record:'新增纪录', buyin:'买入', prize:'奖金', profit:'盈利', save:'储存', history:'历史纪录', language:'语言', export:'汇出备份', import:'还原资料', select_card:'选择扑克牌', cancel:'取消', streak:'连胜', score:'得分', gto_action_q:'GTO 会如何行动?', next_hand:'下一手牌 ➔', fold:'弃牌', call:'跟注', raise:'加注', check:'过牌', bet:'下注', allin:'全下', strat_rfi:'策略: RFI (首率先入)', strat_push:'策略: Push/Fold (推/弃)', strat_bb:'策略: BB 防守', strat_cash:'策略: 现金桌 (Pro)', ai_situation:'局势: 面对', ai_strength:'牌力', blocker_effect:'🛡️ 阻挡牌效应:', ai_advice:'建议', advice_val:'价值', advice_ctrl:'控池', advice_giveup:'放弃', advice_strong:'强牌', advice_bluff:'抓诈唬', advice_draw:'听牌', advice_nuts:'坚果牌', advice_snap:'秒接', advice_math:'计算赔率', mode_mtt:'锦标赛 (MTT)', mode_cash:'现金桌 (Cash)', theme_toggle:'切换主题', invested:'总投入', revenue:'总回报', win_rate:'胜率', all:'全部', total_sessions:'总场次', placeholder_name:'名称', placeholder_note:'备注' },
    'en': { nav_ranges:'Ranges', nav_trainer:'Trainer', nav_odds:'Odds', nav_postflop:'Postflop', nav_bankroll:'Bankroll', mixed_chart:'Mixed Strategy (GTO)', pot_odds_calc:'Pot Odds', pot:'Pot', bet_call:'Call', calculate:'Calc', req_equity:'Req. Equity', odds:'Odds', my_hand:'My Hand', board:'Board', opp_action:'Opp Action', analyze:'AI Analyze', hand_strength:'Hand Strength', bankroll_trend:'Trend', total_profit:'Total Profit', add_record:'Add Record', buyin:'Buy-in', prize:'Prize', profit:'Profit', save:'Save', history:'History', language:'Language', export:'Export', import:'Import', select_card:'Select Card', cancel:'Cancel', streak:'Streak', score:'Score', gto_action_q:'GTO Action?', next_hand:'Next ➔', fold:'Fold', call:'Call', raise:'Raise', check:'Check', bet:'Bet', allin:'All-in', strat_rfi:'Strategy: RFI', strat_push:'Strategy: Push/Fold', strat_bb:'Strategy: BB Def', strat_cash:'Strategy: Cash (Pro)', ai_situation:'Vs', ai_strength:'Hand', blocker_effect:'🛡️ Blockers:', ai_advice:'Advice', advice_val:'Value', advice_ctrl:'Control', advice_giveup:'Give Up', advice_strong:'Strong', advice_bluff:'Bluff Catch', advice_draw:'Draw', advice_nuts:'Nuts', advice_snap:'Snap', advice_math:'Check Odds', mode_mtt:'Tournament (MTT)', mode_cash:'Cash Game', theme_toggle:'Theme', invested:'Invested', revenue:'Returned', win_rate:'Win Rate', all:'All', total_sessions:'Sessions', placeholder_name:'Name', placeholder_note:'Note' },
    'ja': { nav_ranges:'レンジ', nav_trainer:'練習', nav_odds:'オッズ', nav_postflop:'フロップ後', nav_bankroll:'資金', mixed_chart:'GTO戦略', pot_odds_calc:'ポットオッズ', pot:'ポット', bet_call:'コール額', calculate:'計算', req_equity:'必要勝率', odds:'オッズ', my_hand:'手札', board:'ボード', opp_action:'相手', analyze:'AI分析', hand_strength:'強さ', bankroll_trend:'推移', total_profit:'総利益', add_record:'記録追加', buyin:'バイイン', prize:'賞金', profit:'利益', save:'保存', history:'履歴', language:'言語', export:'出力', import:'復元', select_card:'選択', cancel:'取消', streak:'連勝', score:'スコア', gto_action_q:'GTOアクション?', next_hand:'次へ ➔', fold:'フォールド', call:'コール', raise:'レイズ', check:'チェック', bet:'ベット', allin:'オールイン', strat_rfi:'戦略: RFI', strat_push:'戦略: Push/Fold', strat_bb:'戦略: BB Def', strat_cash:'戦略: Cash (Pro)', ai_situation:'状況:', ai_strength:'ハンド', blocker_effect:'🛡️ ブロッカー:', ai_advice:'助言', advice_val:'バリュー', advice_ctrl:'管理', advice_giveup:'降りる', advice_strong:'強い', advice_bluff:'ブラフ', advice_draw:'ドロー', advice_nuts:'ナッツ', advice_snap:'即コール', advice_math:'オッズ', mode_mtt:'トーナメント (MTT)', mode_cash:'キャッシュ (Cash)', theme_toggle:'テーマ', invested:'投資', revenue:'回収', win_rate:'勝率', all:'全て', total_sessions:'回数', placeholder_name:'名前', placeholder_note:'メモ' },
    'ko': { nav_ranges:'레인지', nav_trainer:'트레이너', nav_odds:'오즈', nav_postflop:'포스트플랍', nav_bankroll:'뱅크롤', mixed_chart:'GTO 전략', pot_odds_calc:'팟 오즈', pot:'팟', bet_call:'콜 금액', calculate:'계산', req_equity:'필요 승률', odds:'오즈', my_hand:'내 핸드', board:'보드', opp_action:'상대', analyze:'AI 분석', hand_strength:'핸드 파워', bankroll_trend:'추세', total_profit:'총 수익', add_record:'기록 추가', buyin:'바이인', prize:'상금', profit:'수익', save:'저장', history:'기록', language:'언어', export:'내보내기', import:'가져오기', select_card:'선택', cancel:'취소', streak:'연승', score:'점수', gto_action_q:'GTO 액션?', next_hand:'다음 ➔', fold:'폴드', call:'콜', raise:'레이즈', check:'체크', bet:'벳', allin:'올인', strat_rfi:'전략: RFI', strat_push:'전략: Push/Fold', strat_bb:'전략: BB 방어', strat_cash:'전략: Cash (Pro)', ai_situation:'상황:', ai_strength:'핸드', blocker_effect:'🛡️ 블로커:', ai_advice:'조언', advice_val:'밸류', advice_ctrl:'컨트롤', advice_giveup:'포기', advice_strong:'강함', advice_bluff:'블러프 캐치', advice_draw:'드로우', advice_nuts:'너츠', advice_snap:'스냅', advice_math:'오즈', mode_mtt:'토너먼트 (MTT)', mode_cash:'캐시 (Cash)', theme_toggle:'테마', invested:'투자', revenue:'회수', win_rate:'승률', all:'전체', total_sessions:'게임 수', placeholder_name:'이름', placeholder_note:'메모' }
};

let curLang = localStorage.getItem('pg_lang') || 'zh-TW';
let currentFilter = 'ALL';
const state = { h1: null, h2: null, b1:null, b2:null, b3:null, b4:null, b5:null, oppAction: null };
let curSel = null;
const ranks = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];
let bankrollData = JSON.parse(localStorage.getItem('pokerGodBankroll') || '[]');
let trState = { correct:0, total:0, streak:0, current:null };

window.onload = () => { initTheme(); updateText(); genGrid(); genSelUI(); updateRanges(); document.getElementById('brDate').valueAsDate = new Date(); updateNameList(); renderBankrollUI(); if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{}); };

function switchTab(id, el) {
    document.querySelectorAll('.tab-content').forEach(d=>d.classList.remove('active'));
    document.getElementById('tab-'+id).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(d=>d.classList.remove('active'));
    el.classList.add('active');
    if(id === 'trainer') nextDrill();
    if(id === 'bankroll') renderBankrollUI(); 
}

function t(key) { return translations[curLang][key] || key; }
function updateText() {
    document.querySelectorAll('[data-i18n]').forEach(el => el.innerText = t(el.getAttribute('data-i18n')));
    document.querySelectorAll('[data-placeholder-i18n]').forEach(el => el.placeholder = t(el.getAttribute('data-placeholder-i18n')));
    const mttOpt = document.querySelector('#brType option[value="MTT"]'); if(mttOpt) mttOpt.innerText = t('mode_mtt');
    const cashOpt = document.querySelector('#brType option[value="Cash"]'); if(cashOpt) cashOpt.innerText = t('mode_cash');
    updateRanges(); 
}
function openLangModal() { toggleFab(); document.getElementById('langModal').style.display='flex'; }
function changeLang(lang) { curLang = lang; localStorage.setItem('pg_lang', lang); updateText(); document.getElementById('langModal').style.display='none'; }
function toggleFab() { document.getElementById('fabMenu').classList.toggle('active'); document.querySelector('.fab-btn').innerText = document.getElementById('fabMenu').classList.contains('active') ? '✕' : '☰'; }
document.addEventListener('click', e => { if (!document.querySelector('.fab-wrapper').contains(e.target)) document.getElementById('fabMenu').classList.remove('active'); });

function exportData() { const fullData = { bankroll: bankrollData }; const blob = new Blob([JSON.stringify(fullData)], {type: "application/json"}); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = "pg_backup_" + new Date().toISOString().slice(0,10) + ".json"; a.click(); toggleFab(); }
function importData(input) {
    const file = input.files[0]; if (!file) return;
    if(!confirm("Overwrite?")) { input.value = ''; return; }
    const reader = new FileReader();
    reader.onload = function(e) {
        try { const json = JSON.parse(e.target.result); if (json.bankroll) bankrollData = json.bankroll; else if(Array.isArray(json)) bankrollData = json; localStorage.setItem('pokerGodBankroll', JSON.stringify(bankrollData)); updateNameList(); renderBankrollUI(); alert("Success!"); } catch (err) { alert("Error"); }
    }; reader.readAsText(file); input.value = ''; toggleFab();
}

function initTheme() { document.body.setAttribute('data-theme', localStorage.getItem('pokerGodTheme') || 'dark'); }
function toggleTheme() { const newTheme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light'; document.body.setAttribute('data-theme', newTheme); localStorage.setItem('pokerGodTheme', newTheme); renderBankrollUI(); toggleFab(); }

function genGrid() { const c = document.getElementById('rangeGrid'); c.innerHTML=''; for(let i=0; i<13; i++) for(let j=0; j<13; j++) { let d=document.createElement('div'); d.className='chart-cell'; let t=i===j?ranks[i]+ranks[j]:(i<j?ranks[i]+ranks[j]+'s':ranks[j]+ranks[i]+'o'); d.innerText=t; d.dataset.h=t; d.dataset.r1=14-i; d.dataset.r2=14-j; d.dataset.type = i===j?'pair':(i<j?'suited':'offsuit'); c.appendChild(d); } }
function updateRanges() {
    const stack=parseInt(document.getElementById('stackDepth').value); const pos=document.getElementById('heroPosition').value; const mode = document.getElementById('gameMode').value === 'Cash' ? 'Cash' : (stack < 15 ? "PushFold" : "RFI");
    let labelMode = mode==='Cash'?'strat_cash':(mode==='PushFold'?'strat_push':(pos==='BB'?'strat_bb':'strat_rfi'));
    document.getElementById('rangeInfoText').innerText = `${t(labelMode)} (${stack}BB) - ${pos}`;
    let calcMode = mode; if(pos==='BB' && document.getElementById('gameMode').value !== 'Cash') calcMode = "BBDef"; 
    
    let dbKey = "";
    if (mode === 'Cash') dbKey = "Cash_100bb_6max";
    else if (mode === 'RFI') dbKey = "MTT_Deep_9max";

    document.querySelectorAll('.chart-cell').forEach(c => {
        let r1 = parseInt(c.dataset.r1), r2 = parseInt(c.dataset.r2), type = c.dataset.type;
        let freqs = null;
        if (dbKey && GTO_DB[dbKey] && GTO_DB[dbKey][pos]) {
            const rangeStr = GTO_DB[dbKey][pos];
            if (checkRange(r1, r2, type, rangeStr)) freqs = {a:0, r:100, c:0, f:0};
            else freqs = {a:0, r:0, c:0, f:100};
        } 
        if (!freqs) freqs = getFrequencies(r1, r2, type, pos, stack, calcMode);
        let s1 = freqs.a; let s2 = s1 + freqs.r; let s3 = s2 + freqs.c;
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
    }
    return false;
}

function getFrequencies(r1, r2, type, pos, stack, mode) {
    let f = {a:0, r:0, c:0, f:100}; let score = r1*2 + r2 + (type==='pair'?20:0) + (type==='suited'?6:0);
    if (mode === 'Cash') {
        let t = 0; if(pos==='CO') t=4; if(pos==='MP') t=8; if(pos==='EP') t=12; 
        if(type==='suited') { let gap = r1-r2; if(gap===1 && r1<=11) score+=15; if(gap===2 && r1<=11) score+=10; }
        if(type==='offsuit') { let gap = r1-r2; if(gap===1 && r1<=11) { if(pos==='CO'||pos==='BTN'||pos==='SB') score+=12; else score-=10; } }
        if(type==='suited') score += 5; if(type==='pair') score += 8; 
        let thresh = 40 - (10 - t); if(score >= thresh) { f.r=100; f.f=0; } else if(score >= thresh - 3) { f.r=50; f.f=50; }
        return f;
    }
    if(mode === "PushFold") {
        let threshold = 35 - (stack - 5); if(pos==='BTN'||pos==='SB') threshold -= 12; else if(pos==='CO') threshold -= 6;
        if(type==='pair') { if(r1>=7) { f.a=100; f.f=0; return f; } if(r1>=2 && r1<7) { let p = (8-r1)*10 + (15-stack)*5; if(pos==='BTN'||pos==='SB') p+=30; f.a=Math.min(100,Math.max(0,p)); f.f=100-f.a; return f; } }
        if(score >= threshold + 5) { f.a=100; f.f=0; } else if(score >= threshold) { f.a=50; f.f=50; } return f;
    }
    if(mode === "BBDef") {
        if((type==='pair'&&r1>=10)||(type==='offsuit'&&r1===14&&r2>=12)||(type==='suited'&&r1===14&&r2>=11)) { f.r=80; f.c=20; f.f=0; return f; }
        let callThresh = 25; if(score >= callThresh) { f.c=100; f.f=0; return f; } if(score >= callThresh - 5) { f.c=40; f.f=60; return f; } return f;
    }
    let t = 0; if(pos==='MP') t=5; if(pos==='CO') t=12; if(pos==='BTN') t=20; if(pos==='SB') t=18;
    let openThresh = 45 - t; if(score >= openThresh + 5) { f.r=100; f.f=0; return f; } if(score >= openThresh) { f.r=50; f.f=50; return f; } return f;
}

function calcPotOdds() { let p=parseFloat(document.getElementById('potSize').value), c=parseFloat(document.getElementById('betSize').value); if(!p||!c)return; document.getElementById('oddsResult').style.display='block'; document.getElementById('reqEquity').innerText = ((c/(p+c+c))*100).toFixed(1)+'%'; document.getElementById('oddsRatio').innerText = ((p+c)/c).toFixed(1)+' : 1'; }
function setOppAction(act, btn) { state.oppAction = act; document.querySelectorAll('.btn-opp').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }

// --- [FIX] FIXED ANALYZE POSTFLOP ---
function analyzePostflop() {
    if(!state.h1 || !state.h2 || !state.b1 || !state.b2 || !state.b3) { alert("Select Cards!"); return; }
    if(!state.oppAction) { alert("Select Action!"); return; }
    
    const hCards = [state.h1, state.h2]; 
    const bCards = [state.b1, state.b2, state.b3, state.b4, state.b5].filter(c=>c); 
    const allCards = hCards.concat(bCards);
    
    const map = {'A':14,'K':13,'Q':12,'J':11,'T':10,'9':9,'8':8,'7':7,'6':6,'5':5,'4':4,'3':3,'2':2};
    
    // 1. Analyze Texture
    let suitCounts = {}; bCards.forEach(c => suitCounts[c.suit.id] = (suitCounts[c.suit.id]||0)+1);
    let isMonotone = Object.values(suitCounts).some(v => v >= 3);
    
    // 2. Analyze Hand Strength
    let mySuitCounts = {}; allCards.forEach(c => mySuitCounts[c.suit.id] = (mySuitCounts[c.suit.id]||0)+1);
    let flushSuit = Object.keys(mySuitCounts).find(s => mySuitCounts[s] >= 5);
    let isFlush = !!flushSuit;
    let isDraw = Object.values(mySuitCounts).some(v => v === 4);

    // Helper: Check Straight
    function checkStraight(rankList) {
        let unique = [...new Set(rankList)].sort((a,b) => b-a);
        if(unique.includes(14)) unique.push(1); // Wheel Ace
        for(let i=0; i <= unique.length - 5; i++) {
            if(unique[i] - unique[i+4] === 4) return { isSt: true, high: unique[i] };
        }
        return { isSt: false };
    }

    // Check Straight Flush
    let isStraightFlush = false; let isRoyal = false;
    if(isFlush) {
        let flushRanks = allCards.filter(c => c.suit.id === flushSuit).map(c => map[c.rank]);
        let sfRes = checkStraight(flushRanks);
        if(sfRes.isSt) { isStraightFlush = true; if(sfRes.high === 14) isRoyal = true; }
    }

    // Check Straight (Normal)
    let allRanks = allCards.map(c => map[c.rank]);
    let stRes = checkStraight(allRanks);
    let isStraight = stRes.isSt;

    // Check Pairs/Sets/Quads
    let rankCounts = {}; allRanks.forEach(r => rankCounts[r] = (rankCounts[r]||0)+1);
    let counts = Object.values(rankCounts);
    let quads = counts.some(c => c === 4);
    let trips = counts.filter(c => c === 3).length;
    let pairs = counts.filter(c => c === 2).length;
    let isFullHouse = (trips >= 1 && (pairs >= 1 || trips >= 2));

    // Scoring
    let score=0, catText="High Card", barColor="#ef4444";
    if (isRoyal) { score=100; catText="Royal Flush"; barColor="#8b5cf6"; }
    else if (isStraightFlush) { score=98; catText="Straight Flush"; barColor="#8b5cf6"; }
    else if (quads) { score=95; catText="Four of a Kind"; barColor="#8b5cf6"; }
    else if (isFullHouse) { score=90; catText="Full House"; barColor="#10b981"; }
    else if (isFlush) { score=85; catText="Flush"; barColor="#10b981"; }
    else if (isStraight) { score=80; catText="Straight"; barColor="#10b981"; }
    else if (trips) { score=70; catText="Set (Three of a Kind)"; barColor="#f59e0b"; }
    else if (pairs >= 2) { score=60; catText="Two Pair"; barColor="#f59e0b"; }
    else if (pairs === 1) { score=45; catText="Pair"; barColor="#f59e0b"; }
    else if (isDraw) { score=35; catText="Draw"; barColor="#3b82f6"; }
    else { score=15; catText="High Card"; barColor="#ef4444"; }

    // 3. Generate Advice
    let adviceHtml = `${t('ai_situation')} <span style="color:var(--accent)">${state.oppAction}</span>.<br>`;
    adviceHtml += `<div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:5px;">Board: ${isMonotone?'🌊 Monotone':'🏜️ Dry'}</div>`;
    adviceHtml += `${t('ai_strength')} <strong>${catText}</strong>.<br>`;
    
    adviceHtml += `<ul class="ai-list">`;
    if (state.oppAction === 'check') {
        if(score > 60) adviceHtml += `<li><span style="color:var(--c-raise)">● ${t('bet')}:</span> ${isMonotone ? '33% Pot (Protection)' : '75% Pot (Value)'}</li>`;
        else if(isDraw) adviceHtml += `<li><span style="color:var(--c-raise)">● ${t('bet')}:</span> 50% Pot (Semi-Bluff)</li>`;
        else adviceHtml += `<li><span style="color:var(--c-call)">● ${t('check')}:</span> Pot Control</li>`;
    } else if (state.oppAction === 'bet') {
        if(score > 80) adviceHtml += `<li><span style="color:var(--c-raise)">● ${t('raise')}:</span> ${t('advice_strong')}</li>`;
        else if(score > 40 || isDraw) adviceHtml += `<li><span style="color:var(--c-call)">● ${t('call')}:</span> ${t('advice_bluff')} / Odds</li>`;
        else adviceHtml += `<li><span style="color:var(--c-fold)">● ${t('fold')}:</span> ${t('advice_giveup')}</li>`;
    }
    adviceHtml += `</ul>`;
    
    document.getElementById('postflopResult').style.display='block';
    document.getElementById('strengthBar').style.width=score+'%'; document.getElementById('strengthBar').style.backgroundColor=barColor;
    document.getElementById('handCategory').innerText=catText; document.getElementById('handCategory').style.color=barColor;
    document.getElementById('aiAdvice').innerHTML = adviceHtml;
}

function updateNameList() { const names = [...new Set(bankrollData.map(i => i.name).filter(n => n))]; const dl = document.getElementById('brNameList'); dl.innerHTML = ''; names.forEach(n => { let opt=document.createElement('option'); opt.value=n; dl.appendChild(opt); }); }
function calcPreview() { let b=parseFloat(document.getElementById('brBuyIn').value)||0; let p=parseFloat(document.getElementById('brPrize').value)||0; let d=p-b; document.getElementById('brProfitPreview').innerText=(d>=0?'+':'')+d; document.getElementById('brProfitPreview').style.color=d>=0?'var(--accent)':'var(--danger)'; }
function addBankroll() { let d=document.getElementById('brDate').value, t=document.getElementById('brType').value; let n=document.getElementById('brName').value.trim(); let b=parseFloat(document.getElementById('brBuyIn').value)||0, p=parseFloat(document.getElementById('brPrize').value)||0, note=document.getElementById('brNote').value; if(!d) { alert("Date required"); return; } bankrollData.push({ id:Date.now(), date:d, type:t, name:n, buyIn:b, prize:p, amount:p-b, note:note }); localStorage.setItem('pokerGodBankroll', JSON.stringify(bankrollData)); document.getElementById('brName').value=''; document.getElementById('brBuyIn').value=''; document.getElementById('brPrize').value=''; document.getElementById('brNote').value=''; updateNameList(); renderBankrollUI(); }
function deleteRecord(id) { if(!confirm("Delete?"))return; bankrollData=bankrollData.filter(i=>i.id!==id); localStorage.setItem('pokerGodBankroll',JSON.stringify(bankrollData)); updateNameList(); renderBankrollUI(); }
function setFilter(filter, el) { currentFilter = filter; document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active')); el.classList.add('active'); renderBankrollUI(); }

function renderBankrollUI() { 
    let filteredData = bankrollData.filter(i => currentFilter === 'ALL' || i.type === currentFilter);
    let chartData = [...filteredData].sort((a,b) => { const dateA = new Date(a.date); const dateB = new Date(b.date); return dateA - dateB || a.id - b.id; });
    let cumProfit=0, cumInvest=0, totalRevenue=0, winCount=0, pointsProfit=[{x:0, y:0, label:'Start'}];
    chartData.forEach((i, idx) => { cumProfit += i.amount; cumInvest += i.buyIn || 0; totalRevenue += i.prize || 0; if(i.amount > 0) winCount++; let dateStr = i.date.substring(5).replace('-','/'); pointsProfit.push({x: idx+1, y: cumProfit, label: dateStr}); });
    document.getElementById('statSessions').innerText = chartData.length; document.getElementById('statInvested').innerText = cumInvest; document.getElementById('statRevenue').innerText = totalRevenue; document.getElementById('statROI').innerText = cumInvest > 0 ? ((cumProfit / cumInvest) * 100).toFixed(1) + '%' : '0%'; document.getElementById('statWinRate').innerText = chartData.length > 0 ? ((winCount / chartData.length) * 100).toFixed(1) + '%' : '0%'; document.getElementById('bigTotalProfit').innerText = (cumProfit>=0?'+':'')+cumProfit; document.getElementById('bigTotalProfit').style.color = cumProfit>=0?'var(--accent)':'var(--danger)';
    let l=document.getElementById('historyList'); l.innerHTML=''; [...chartData].reverse().forEach((i)=>{ let d=document.createElement('div'); d.className='history-item'; let typeLabel = i.type === 'MTT' ? t('mode_mtt') : t('mode_cash'); let noteHtml = i.note ? `<div style="font-size:0.75rem; color:#aaa; margin-top:2px;">📝 ${i.note}</div>` : ''; d.innerHTML=`<div style="flex:1"><div style="font-size:0.9rem;font-weight:bold;color:var(--text-main);">${i.name||'--'} <span style="font-size:0.7rem;opacity:0.7">(${typeLabel})</span></div><div style="font-size:0.75rem;color:var(--text-muted);">${i.date}</div>${noteHtml}</div><div style="text-align:right"><span class="${i.amount>=0?'pos-val':'neg-val'}">${i.amount>=0?'+':''}${i.amount}</span><button class="btn-delete" onclick="deleteRecord(${i.id})" style="margin-left:5px;">✕</button></div>`; l.appendChild(d); }); setTimeout(() => drawChart(pointsProfit), 50);
}

function drawChart(dataProfit) { 
    let cvs=document.getElementById('bankrollCanvas'); if(!cvs) return; let ctx=cvs.getContext('2d'); cvs.width = cvs.parentElement.clientWidth || 300; cvs.height = 240; let w=cvs.width, h=cvs.height; let mLeft=40, mBottom=30, mTop=20, mRight=10; let graphW = w - mLeft - mRight; let graphH = h - mBottom - mTop; ctx.clearRect(0,0,w,h); 
    if(dataProfit.length < 2) { ctx.fillStyle="#94a3b8"; ctx.font="14px Arial"; ctx.textAlign="center"; ctx.fillText("No Data",w/2,h/2); return; } 
    let ys = dataProfit.map(p=>p.y); let max=Math.max(0, ...ys), min=Math.min(0, ...ys); let range=max-min; if(range === 0) range = 100; max += range * 0.1; min -= range * 0.1; 
    let mapX=i=>mLeft + (i / (dataProfit.length-1)) * graphW; let mapY=v=>mTop + graphH - ((v - min) / (max - min)) * graphH; 
    ctx.fillStyle = "#64748b"; ctx.font = "10px sans-serif"; ctx.textAlign = "right"; ctx.strokeStyle = "rgba(125,125,125,0.1)"; ctx.lineWidth = 1; let ySteps = 5; for(let i=0; i<=ySteps; i++) { let val = min + (range * (i/ySteps)); let yPos = mapY(val); ctx.beginPath(); ctx.moveTo(mLeft, yPos); ctx.lineTo(w-mRight, yPos); ctx.stroke(); ctx.fillText(Math.round(val), mLeft-5, yPos+3); }
    let zeroY = mapY(0); if(zeroY >= mTop && zeroY <= h-mBottom) { ctx.beginPath(); ctx.strokeStyle = document.body.getAttribute('data-theme') === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1; ctx.moveTo(mLeft, zeroY); ctx.lineTo(w-mRight, zeroY); ctx.stroke(); }
    let profitColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim(); ctx.beginPath(); ctx.strokeStyle = profitColor; ctx.lineWidth = 3; ctx.setLineDash([]); ctx.moveTo(mapX(0), mapY(dataProfit[0].y)); for(let i=1; i<dataProfit.length; i++) ctx.lineTo(mapX(i), mapY(dataProfit[i].y)); ctx.stroke();
    ctx.textAlign = "center"; let step = Math.ceil(dataProfit.length / 6); for(let i=0; i<dataProfit.length; i++) { let x = mapX(i), y = mapY(dataProfit[i].y); ctx.beginPath(); ctx.fillStyle = profitColor; ctx.arc(x, y, 4, 0, Math.PI*2); ctx.fill(); if(i % step === 0 || i === dataProfit.length-1) { if(dataProfit[i].label) { ctx.fillStyle = "#94a3b8"; ctx.fillText(dataProfit[i].label, x, h-10); } } }
}

function nextDrill() { const positions = ['EP','MP','CO','BTN','SB','BB']; const pos = positions[Math.floor(Math.random()*positions.length)]; const stack = Math.random() < 0.3 ? 12 : (Math.random() < 0.6 ? 40 : 100); const r1Idx = Math.floor(Math.random()*13); const r2Idx = Math.floor(Math.random()*13); const s1 = {id:'s', symbol:'♠', class:'suit-s'}; const s2 = (r1Idx===r2Idx || Math.random()<0.23) ? s1 : {id:'h', symbol:'♥', class:'suit-h'}; const r1 = ranks[Math.min(r1Idx, r2Idx)]; const r2 = ranks[Math.max(r1Idx, r2Idx)]; const type = (r1===r2) ? 'pair' : (s1.id===s2.id ? 'suited' : 'offsuit'); trState.current = { r1:14-Math.min(r1Idx,r2Idx), r2:14-Math.max(r1Idx,r2Idx), type, pos, stack }; document.getElementById('trScenario').innerText = `${pos} | ${stack}BB`; renderTrainerCard('trCard1', r1, s1); renderTrainerCard('trCard2', r2, (r1===r2 && s1.id===s2.id) ? {id:'d',symbol:'♦',class:'suit-d'} : s2); document.getElementById('trFeedback').style.display = 'none'; document.getElementById('trNextBtn').style.display = 'none'; }
function renderTrainerCard(id, r, s) { document.getElementById(id).innerHTML = `<span class="${s.class}">${s.symbol}</span><span>${r}</span>`; }
function checkTrainer(act) { if(document.getElementById('trNextBtn').style.display === 'block') return; const { r1, r2, type, pos, stack } = trState.current; let mode = "RFI"; if(stack < 15) mode = "PushFold"; else if(pos === "BB") mode = "BBDef"; else if(pos === "SB") mode = "SB"; const freqs = getFrequencies(r1, r2, type, pos, stack, mode); let correctAct = 'fold'; let maxVal = freqs.f; if(freqs.c > maxVal) { maxVal = freqs.c; correctAct = 'call'; } if(freqs.r > maxVal) { maxVal = freqs.r; correctAct = 'raise'; } if(freqs.a > maxVal) { maxVal = freqs.a; correctAct = 'raise'; } let userAct = act; if(act === 'raise' && freqs.a > 50) userAct = 'raise'; let isCorrect = (userAct === correctAct) || (maxVal < 60 && freqs[act[0]] > 30); trState.total++; if(isCorrect) { trState.correct++; trState.streak++; } else { trState.streak = 0; } document.getElementById('trScore').innerText = `${trState.correct}/${trState.total}`; document.getElementById('trStreak').innerText = trState.streak; const fb = document.getElementById('trFeedback'); fb.style.display = 'block'; fb.className = 'trainer-feedback ' + (isCorrect ? 'fb-correct' : 'fb-wrong'); fb.innerHTML = `<strong>${isCorrect ? 'Correct!' : 'Mistake!'}</strong><br>GTO: Raise ${freqs.r+freqs.a}% | Call ${freqs.c}% | Fold ${freqs.f}%`; document.getElementById('trNextBtn').style.display = 'block'; }
function genSelUI(){ [{id:'s',c:'suit-s',s:'♠'},{id:'h',c:'suit-h',s:'♥'},{id:'c',c:'suit-c',s:'♣'},{id:'d',c:'suit-d',s:'♦'}].forEach(x=>{ let r=document.getElementById('suit-'+(x.id==='s'?'spades':x.id==='h'?'hearts':x.id==='c'?'clubs':'diamonds')); ranks.forEach(k=>{let b=document.createElement('button');b.className='rank-btn '+x.c;b.innerText=k+x.s;b.onclick=()=>setCard(k,x);r.appendChild(b)}); }); }
function sel(id){curSel=id;document.getElementById('cardModal').style.display='flex'}
function closeSel(){document.getElementById('cardModal').style.display='none'}
function setCard(r,s){ state[curSel]={rank:r,suit:s}; let el=document.getElementById('card_'+curSel); el.className='poker-card selected'; el.innerHTML=`<span class="${s.c}">${s.s}</span><span>${r}</span>`; closeSel(); }
