/* ============================================================
 * app.js — 英语口语小达人：全部交互逻辑
 * 纯原生 JS，无任何外部依赖。
 * ============================================================ */
"use strict";

/* ---------- 工具 ---------- */
function $(id) { return document.getElementById(id); }
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}
function todayStr() {
  var d = new Date();
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}
function yesterdayStr() {
  var d = new Date(Date.now() - 864e5);
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}
function toast(msg) {
  var t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(function () { t.classList.remove("show"); }, 2200);
}

/* ---------- 学习记录（localStorage） ---------- */
var LS_KEY = "speakFunStatsV1";
function defaultState() {
  return { words: {}, sentences: {}, dialogues: {}, challenges: {}, streak: { last: "", count: 0 } };
}
function loadState() {
  try {
    var s = JSON.parse(localStorage.getItem(LS_KEY));
    if (s && s.words && s.streak) return Object.assign(defaultState(), s);
  } catch (e) { /* 忽略损坏的缓存 */ }
  return defaultState();
}
var S = loadState();
function saveState() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) { /* 存储满了就忽略 */ }
}
function totalStars() {
  var t = 0;
  ["words", "sentences", "dialogues", "challenges"].forEach(function (k) {
    Object.keys(S[k]).forEach(function (id) { t += S[k][id]; });
  });
  return t;
}
function bumpStreak() {
  var t = todayStr();
  if (S.streak.last === t) return;
  S.streak.count = (S.streak.last === yesterdayStr()) ? S.streak.count + 1 : 1;
  S.streak.last = t;
}
/* 只有拿到星星才记为“练过”，保留历史最高分 */
function recordResult(kind, id, stars) {
  if (stars <= 0) return;
  bumpStreak();
  if (stars > (S[kind][id] || 0)) S[kind][id] = stars;
  saveState();
  updateHeader();
}

/* ---------- 视图切换 ---------- */
function showView(name) {
  document.querySelectorAll(".view").forEach(function (v) { v.classList.remove("active"); });
  $("view-" + name).classList.add("active");
  document.querySelectorAll(".nav-item").forEach(function (n) {
    n.classList.toggle("active", n.getAttribute("data-view") === name);
  });
  window.scrollTo(0, 0);
  if (name === "achievements") renderAchievements();
  if (name === "home") renderDailyTask();
}
function updateHeader() {
  $("hdr-stars").textContent = "⭐ " + totalStars();
}

/* ---------- 语音：朗读（TTS） ---------- */
var TTS_VOICES = [];
function loadTtsVoices() {
  try { TTS_VOICES = window.speechSynthesis.getVoices() || []; } catch (e) { TTS_VOICES = []; }
}
function pickEnVoice() {
  var fallback = null;
  for (var i = 0; i < TTS_VOICES.length; i++) {
    var lang = String(TTS_VOICES[i].lang || "").toLowerCase().replace("_", "-");
    if (lang.indexOf("en-us") === 0) return TTS_VOICES[i];
    if (!fallback && lang.indexOf("en") === 0) fallback = TTS_VOICES[i];
  }
  return fallback;
}
if ("speechSynthesis" in window) {
  loadTtsVoices(); /* 部分浏览器/手机语音列表是异步加载的 */
  try { window.speechSynthesis.onvoiceschanged = loadTtsVoices; } catch (e) {}
}
function speak(text, rate) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    toast("😢 当前浏览器不支持语音朗读，换 Chrome 或 Edge 试试");
    return;
  }
  try {
    var synth = window.speechSynthesis;
    synth.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = rate || 0.85;   /* 慢一点，孩子听得清 */
    u.pitch = 1.05;
    if (!TTS_VOICES.length) loadTtsVoices();
    var v = pickEnVoice();
    if (v) u.voice = v;
    var spoke = false, finished = false;
    /* iOS 偶发朗读中途暂停，检测到就唤醒 */
    var resumeTimer = setInterval(function () {
      try { if (!finished && synth.paused) synth.resume(); } catch (e) {}
    }, 400);
    function done() { finished = true; clearInterval(resumeTimer); clearTimeout(watchdog); }
    u.onstart = function () { spoke = true; };
    u.onend = function () { done(); };
    u.onerror = function () { done(); if (!spoke) toast("😢 朗读失败，换 Chrome 或 Edge 试试"); };
    /* 3 秒还没出声，大概率是这台设备没声音，给个温柔提示 */
    var watchdog = setTimeout(function () {
      if (!spoke && !finished) toast("🔊 如果没听到声音，可以换 Chrome 或 Edge 浏览器试试");
    }, 3000);
    /* iOS 修复：cancel 后紧接着 speak 会被吞掉，错开一个节拍再播 */
    setTimeout(function () {
      try { synth.speak(u); }
      catch (e) { done(); toast("😢 朗读失败，请再试一次"); }
    }, 60);
  } catch (e) { toast("😢 朗读失败，请再试一次"); }
}

/* ---------- 语音：识别（STT） ---------- */
var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
var activeRec = null; /* 正在进行的识别：{ rec, btn, startedAt, stop } */
function stopActiveRec() {
  if (activeRec) { try { activeRec.rec.stop(); } catch (e) {} activeRec = null; }
}
/* 错误码 → 家长/孩子能看懂的提示 */
function srErrorMsg(code) {
  if (code === "not-allowed" || code === "service-not-allowed")
    return "🔒 麦克风权限被拒绝了：点一下浏览器地址栏旁边的 🔒 图标，把「麦克风」设为允许，然后再试一次";
  if (code === "audio-capture")
    return "🎤 麦克风被其他应用占用了：关掉其他正在用麦克风的应用再试";
  if (code === "network")
    return "📡 语音识别需要联网：检查一下网络连接再试";
  if (code === "unsupported")
    return "😢 当前浏览器不支持语音识别（微信、QQ、Safari 里用不了），请用 Chrome 或 Edge 打开";
  if (code === "startup-failed" || code === "start-failed")
    return "😢 麦克风启动失败，换 Chrome 或 Edge 浏览器试试";
  return null; /* no-speech 之类走默认鼓励语 */
}
/*
 * 开始一次语音识别（Promise）。
 * opts: { btn, onlive(text) }
 * - continuous + interim：持续聆听、实时显示，不会"没时间说话"
 * - 识别中再点同一按钮 = 手动结束；30 秒无操作自动结束
 */
function listenOnce(opts) {
  opts = opts || {};
  return new Promise(function (resolve, reject) {
    if (!SR) { reject({ code: "unsupported" }); return; }
    stopActiveRec();
    var rec;
    try { rec = new SR(); } catch (e) { reject({ code: "start-failed" }); return; }
    var done = false, finalText = "", lastInterim = "", audioStarted = false;
    rec.lang = "en-US";
    rec.continuous = true;
    rec.interimResults = true;
    rec.maxAlternatives = 3;
    var timer = setTimeout(function () { try { rec.stop(); } catch (e) {} }, 30000);
    function cleanup() { clearTimeout(timer); if (activeRec && activeRec.rec === rec) activeRec = null; }
    function ok(text) { if (done) return; done = true; cleanup(); resolve(text); }
    function fail(code) { if (done) return; done = true; cleanup(); try { rec.abort(); } catch (e) {} reject({ code: code }); }
    activeRec = {
      rec: rec, btn: opts.btn || null, startedAt: Date.now(),
      stop: function () { if (!done) { try { rec.stop(); } catch (e) {} } }
    };
    rec.onaudiostart = function () { audioStarted = true; };
    rec.onresult = function (e) {
      var interim = "";
      for (var i = e.resultIndex; i < e.results.length; i++) {
        var tr = e.results[i][0].transcript;
        if (e.results[i].isFinal) finalText += tr + " ";
        else interim += tr;
      }
      lastInterim = interim;
      if (opts.onlive) opts.onlive((finalText + interim).trim());
    };
    rec.onerror = function (e) {
      var code = (e && e.error) || "unknown";
      if (code === "aborted" || code === "no-speech") ok((finalText + " " + lastInterim).trim());
      else fail(code);
    };
    rec.onend = function () {
      if (done) return;
      if (!audioStarted && !finalText && !lastInterim) fail("startup-failed");
      else ok((finalText + " " + lastInterim).trim());
    };
    try { rec.start(); } catch (e) { fail("start-failed"); }
  });
}
/* 识别中再次点击同一按钮：手动结束（1 秒内防抖，避免点太快误触） */
function toggleStop(btn) {
  if (activeRec && activeRec.btn === btn) {
    if (Date.now() - activeRec.startedAt < 1000) return true;
    activeRec.stop();
    return true;
  }
  return false;
}

/* ---------- 打分：宽容的模糊匹配 ---------- */
function norm(s) {
  return String(s).toLowerCase().replace(/[^a-z\s']/g, " ").replace(/\s+/g, " ").trim();
}
function scoreText(target, heard) {
  var t = norm(target).split(" ").filter(Boolean);
  var h = {};
  norm(heard).split(" ").filter(Boolean).forEach(function (w) { h[w] = true; });
  if (!t.length) return { ratio: 0, hit: 0, total: 0 };
  var hit = t.filter(function (w) { return h[w]; }).length;
  return { ratio: hit / t.length, hit: hit, total: t.length };
}
function starsFor(ratio) {
  if (ratio >= 0.8) return 3;
  if (ratio >= 0.5) return 2;
  if (ratio > 0) return 1;
  return 0;
}
var FEEDBACK = {
  3: ["太棒了！发音超标准！", "完美！你是英语小明星！", "哇！说得和老师一样好！"],
  2: ["很不错！继续加油！", "很好！多练几次会更棒！", "有进步！再来一次拿三星吧！"],
  1: ["勇敢开口就是胜利！再试一次吧！", "不错的尝试！先听一听再跟读吧！", "别灰心，多听几遍就会啦！"],
  0: ["没听清楚，再试一次，你可以的！", "声音太小啦，大声一点再说一遍！", "好像没听到，再来一次吧！"]
};
function feedbackHtml(stars) {
  var arr = FEEDBACK[stars];
  var msg = arr[Math.floor(Math.random() * arr.length)];
  var cls = stars === 3 ? "fb-great" : stars === 2 ? "fb-good" : stars === 1 ? "fb-ok" : "fb-retry";
  var icon = stars > 0 ? "⭐".repeat(stars) : "🎤";
  return '<div class="feedback-msg ' + cls + '">' + icon + " " + escapeHtml(msg) + "</div>";
}
function renderStars(elId, n) {
  var el = $(elId);
  if (!el) return;
  el.innerHTML = n > 0
    ? "★".repeat(n) + '<span class="star-off">' + "★".repeat(3 - n) + "</span>"
    : "";
}

/* ---------- 撒花动画（纯 CSS/JS） ---------- */
function confetti() {
  var em = ["⭐", "🎉", "✨", "🌟", "💫", "🎊"];
  for (var i = 0; i < 28; i++) {
    var s = document.createElement("span");
    s.className = "confetti-piece";
    s.textContent = em[Math.floor(Math.random() * em.length)];
    s.style.left = (15 + Math.random() * 70) + "vw";
    s.style.fontSize = (18 + Math.random() * 24) + "px";
    s.style.animationDuration = (1.6 + Math.random() * 1.4) + "s";
    s.style.animationDelay = (Math.random() * 0.4) + "s";
    document.body.appendChild(s);
    (function (el) { setTimeout(function () { el.remove(); }, 3800); })(s);
  }
}

/* ============================================================
 * 首页：今日任务
 * ============================================================ */
var dailyGo = null;
function renderDailyTask() {
  var day = Math.floor(Date.now() / 864e5);
  var kind = day % 3, html;
  if (kind === 0) {
    var c = WORD_CATEGORIES[day % WORD_CATEGORIES.length];
    dailyGo = { view: "words", tab: c.id };
    html = "📝 今日任务：跟读 5 个「" + c.emoji + c.name + "」单词！";
  } else if (kind === 1) {
    var t = SENTENCE_TOPICS[day % SENTENCE_TOPICS.length];
    dailyGo = { view: "sentences", tab: t.id };
    html = "📝 今日任务：跟读 3 个「" + t.emoji + t.name + "」句子！";
  } else {
    dailyGo = { view: "challenge", tab: null };
    html = "📝 今日任务：完成 2 个「看图说话」挑战！";
  }
  $("daily-text").innerHTML = html;
}
function goDaily() {
  if (!dailyGo) return;
  showView(dailyGo.view);
  if (dailyGo.tab) {
    if (dailyGo.view === "words") selectWordCat(dailyGo.tab);
    else selectSentTopic(dailyGo.tab);
  }
}

/* ============================================================
 * 单词乐园
 * ============================================================ */
var curWordCat = WORD_CATEGORIES[0].id;
function renderWordTabs() {
  $("word-tabs").innerHTML = WORD_CATEGORIES.map(function (c) {
    return '<button class="chip' + (c.id === curWordCat ? " active" : "") +
      '" data-act="wcat" data-id="' + c.id + '">' + c.emoji + " " + c.name + "</button>";
  }).join("");
}
function selectWordCat(id) {
  curWordCat = id;
  renderWordTabs();
  renderWords();
}
function renderWords() {
  var cat = WORD_CATEGORIES.find(function (c) { return c.id === curWordCat; });
  $("word-grid").innerHTML = cat.words.map(function (w) {
    var id = cat.id + "-" + w.en; /* 分类+单词，避免 orange（食物/颜色）这类重名冲突 */
    var visual = w.num
      ? '<div class="word-num">' + w.num + "</div>"
      : '<div class="word-emoji">' + w.emoji + "</div>";
    return '<div class="card word-card">' + visual +
      '<div class="word-en">' + escapeHtml(w.en) + "</div>" +
      '<div class="word-phon">' + escapeHtml(w.phon) + "</div>" +
      '<div class="word-zh">' + escapeHtml(w.zh) + "</div>" +
      '<div class="card-stars" id="stars-words-' + id + '"></div>' +
      '<div class="btn-row">' +
      '<button class="btn btn-listen" data-act="listen" data-text="' + escapeHtml(w.en) + '">🔊 听一听</button>' +
      '<button class="btn btn-speak" data-act="speak-word" data-id="' + id + '" data-text="' + escapeHtml(w.en) + '">🎤 跟我读</button>' +
      "</div>" +
      '<div class="feedback" id="fb-words-' + id + '"></div>' +
      "</div>";
  }).join("");
  cat.words.forEach(function (w) { renderStars("stars-words-" + cat.id + "-" + w.en, S.words[cat.id + "-" + w.en] || 0); });
}
function noSRWarn(fbEl) {
  fbEl.innerHTML = '<div class="feedback-msg fb-retry">😢 当前浏览器不支持语音识别（微信、QQ、Safari 里用不了），请用 Chrome 或 Edge 打开；「🔊 听一听」不受影响</div>';
}
async function practiceWord(btn) {
  var id = btn.getAttribute("data-id"), text = btn.getAttribute("data-text");
  var fb = $("fb-words-" + id);
  if (!SR) { noSRWarn(fb); return; }
  if (toggleStop(btn)) return; /* 识别中再点 = 说完了，手动结束 */
  var old = btn.innerHTML;
  btn.innerHTML = "🛑 说完了，点我结束";
  fb.innerHTML = '<div class="heard live">🎤 麦克风启动中…开始说吧</div>';
  try {
    var heard = await listenOnce({ btn: btn, onlive: function (t) {
      fb.innerHTML = '<div class="heard live">🎤 听到：' + escapeHtml(t || "…") + "</div>";
    } });
    var sc = scoreText(text, heard);
    var stars = starsFor(sc.ratio);
    recordResult("words", id, stars);
    renderStars("stars-words-" + id, S.words[id] || 0);
    fb.innerHTML = '<div class="heard">你说的是：' + escapeHtml(heard || "（没听清）") + "</div>" + feedbackHtml(stars);
    if (stars === 3) confetti();
  } catch (e) {
    var msg = srErrorMsg(e && e.code);
    fb.innerHTML = msg
      ? '<div class="feedback-msg fb-retry">' + escapeHtml(msg) + "</div>"
      : '<div class="feedback-msg fb-retry">🎤 ' + escapeHtml(FEEDBACK[0][Math.floor(Math.random() * FEEDBACK[0].length)]) + "</div>";
  }
  btn.innerHTML = old;
}

/* ============================================================
 * 句子跟读
 * ============================================================ */
var curSentTopic = SENTENCE_TOPICS[0].id;
function renderSentTabs() {
  $("sent-tabs").innerHTML = SENTENCE_TOPICS.map(function (t) {
    return '<button class="chip' + (t.id === curSentTopic ? " active" : "") +
      '" data-act="stopic" data-id="' + t.id + '">' + t.emoji + " " + t.name + "</button>";
  }).join("");
}
function selectSentTopic(id) {
  curSentTopic = id;
  renderSentTabs();
  renderSentences();
}
function renderSentences() {
  var topic = SENTENCE_TOPICS.find(function (t) { return t.id === curSentTopic; });
  $("sent-list").innerHTML = topic.sentences.map(function (s) {
    return '<div class="card sent-card">' +
      '<div class="sent-en">' + escapeHtml(s.en) + "</div>" +
      '<div class="sent-zh">' + escapeHtml(s.zh) + "</div>" +
      '<div class="card-stars" id="stars-sentences-' + s.id + '"></div>' +
      '<div class="btn-row">' +
      '<button class="btn btn-listen" data-act="listen" data-text="' + escapeHtml(s.en) + '">🔊 听一听</button>' +
      '<button class="btn btn-speak" data-act="speak-sentence" data-id="' + s.id + '" data-text="' + escapeHtml(s.en) + '">🎤 跟我读</button>' +
      "</div>" +
      '<div class="feedback" id="fb-sentences-' + s.id + '"></div>' +
      "</div>";
  }).join("");
  topic.sentences.forEach(function (s) { renderStars("stars-sentences-" + s.id, S.sentences[s.id] || 0); });
}
async function practiceSentence(btn) {
  var id = btn.getAttribute("data-id"), text = btn.getAttribute("data-text");
  var fb = $("fb-sentences-" + id);
  if (!SR) { noSRWarn(fb); return; }
  if (toggleStop(btn)) return; /* 识别中再点 = 说完了，手动结束 */
  var old = btn.innerHTML;
  btn.innerHTML = "🛑 说完了，点我结束";
  fb.innerHTML = '<div class="heard live">🎤 麦克风启动中…开始说吧</div>';
  try {
    var heard = await listenOnce({ btn: btn, onlive: function (t) {
      fb.innerHTML = '<div class="heard live">🎤 听到：' + escapeHtml(t || "…") + "</div>";
    } });
    var sc = scoreText(text, heard);
    var stars = starsFor(sc.ratio);
    recordResult("sentences", id, stars);
    renderStars("stars-sentences-" + id, S.sentences[id] || 0);
    fb.innerHTML = '<div class="heard">你说的是：' + escapeHtml(heard || "（没听清）") + "</div>" + feedbackHtml(stars);
    if (stars === 3) confetti();
  } catch (e) {
    var msg = srErrorMsg(e && e.code);
    fb.innerHTML = msg
      ? '<div class="feedback-msg fb-retry">' + escapeHtml(msg) + "</div>"
      : '<div class="feedback-msg fb-retry">🎤 ' + escapeHtml(FEEDBACK[0][Math.floor(Math.random() * FEEDBACK[0].length)]) + "</div>";
  }
  btn.innerHTML = old;
}

/* ============================================================
 * 情景对话
 * ============================================================ */
var RP = null; /* 角色扮演状态 */
function renderDialogList() {
  $("dlg-list").innerHTML = DIALOGUES.map(function (d) {
    var done = S.dialogues[d.id] > 0;
    return '<div class="card dlg-item" data-act="open-dialog" data-id="' + d.id + '">' +
      '<div class="dlg-emoji">' + d.emoji + "</div>" +
      '<div class="dlg-info"><div class="dlg-title">' + escapeHtml(d.title) + "</div>" +
      '<div class="dlg-sub">' + escapeHtml(d.en_title) + " · " + d.lines.length + " 句" + (done ? " · 已完成" : "") + "</div></div>" +
      '<div class="dlg-stars">' + (done ? "★".repeat(S.dialogues[d.id]) : "") + "</div>" +
      '<div class="dlg-arrow">›</div></div>';
  }).join("");
  $("dlg-list").hidden = false;
  $("dlg-detail").hidden = true;
  RP = null;
}
function openDialogue(id) {
  var d = DIALOGUES.find(function (x) { return x.id === id; });
  if (!d) return;
  RP = null;
  var roles = [];
  d.lines.forEach(function (l) { if (roles.indexOf(l.sp) < 0) roles.push(l.sp); });
  var html = '<button class="btn btn-ghost back-btn" data-act="dlg-back">‹ 返回对话列表</button>' +
    '<div class="card dlg-head"><div class="dlg-emoji">' + d.emoji + '</div>' +
    "<div><div class='dlg-title'>" + escapeHtml(d.title) + "</div>" +
    '<div class="dlg-sub">' + escapeHtml(d.en_title) + "</div></div></div>" +
    '<div class="bubbles">' + d.lines.map(function (l, i) {
      return '<div class="bubble ' + (i % 2 ? "right" : "left") + '" data-act="speak-line" data-text="' + escapeHtml(l.en) + '">' +
        '<div class="bubble-sp">' + escapeHtml(l.sp) + ' 🔊</div>' +
        '<div class="bubble-en">' + escapeHtml(l.en) + "</div>" +
        '<div class="bubble-zh">' + escapeHtml(l.zh) + "</div></div>";
    }).join("") + "</div>" +
    '<div class="card rp-intro"><div class="rp-intro-title">🎭 想试试角色扮演吗？</div>' +
    '<div class="rp-intro-sub">选一个角色，我来演另一个，跟我对话吧！</div>' +
    '<div class="btn-row center">' +
    '<button class="btn btn-speak" data-act="choose-role" data-id="' + d.id + '" data-role="0">🎭 我演 ' + escapeHtml(roles[0]) + "</button>" +
    '<button class="btn btn-speak" data-act="choose-role" data-id="' + d.id + '" data-role="1">🎭 我演 ' + escapeHtml(roles[1]) + "</button>" +
    "</div></div>";
  $("dlg-detail").innerHTML = html;
  $("dlg-list").hidden = true;
  $("dlg-detail").hidden = false;
  window.scrollTo(0, 0);
}
function chooseRole(id, role) {
  var d = DIALOGUES.find(function (x) { return x.id === id; });
  if (!d) return;
  var roles = [];
  d.lines.forEach(function (l) { if (roles.indexOf(l.sp) < 0) roles.push(l.sp); });
  RP = { dlg: d, roles: roles, role: role, step: 0, scores: [] };
  renderRP();
}
function bubbleHtml(l, side) {
  return '<div class="bubble ' + side + '">' +
    '<div class="bubble-sp">' + escapeHtml(l.sp) + "</div>" +
    '<div class="bubble-en">' + escapeHtml(l.en) + "</div>" +
    '<div class="bubble-zh">' + escapeHtml(l.zh) + "</div></div>";
}
function renderRP() {
  var d = RP.dlg, el = $("dlg-detail");
  /* 结束 */
  if (RP.step >= d.lines.length) {
    var avg = RP.scores.length ? RP.scores.reduce(function (a, b) { return a + b; }, 0) / RP.scores.length : 0;
    var stars = avg >= 2.5 ? 3 : avg >= 1.5 ? 2 : avg > 0 ? 1 : 0;
    recordResult("dialogues", d.id, stars);
    el.innerHTML = '<div class="card rp-done">' +
      '<div class="rp-done-emoji">🎉</div>' +
      '<div class="rp-done-title">对话完成！</div>' +
      '<div class="rp-done-stars">' + (stars > 0 ? "★".repeat(stars) : "🎤") + "</div>" +
      feedbackHtml(stars) +
      '<div class="btn-row center"><button class="btn btn-listen" data-act="open-dialog" data-id="' + d.id + '">🔁 再来一次</button>' +
      '<button class="btn btn-ghost" data-act="dlg-back">返回列表</button></div></div>';
    if (stars >= 2) confetti();
    window.scrollTo(0, 0);
    return;
  }
  var html = '<button class="btn btn-ghost back-btn" data-act="open-dialog" data-id="' + d.id + '">‹ 退出角色扮演</button>' +
    '<div class="rp-progress">第 ' + (RP.step + 1) + " / " + d.lines.length + " 句</div>" +
    '<div class="bubbles">';
  for (var i = 0; i < RP.step; i++) {
    html += bubbleHtml(d.lines[i], i % 2 ? "right done" : "left done");
  }
  var line = d.lines[RP.step];
  var isMine = (line.sp === RP.roles[RP.role]);
  if (isMine) {
    html += "</div>" +
      '<div class="card rp-turn"><div class="rp-turn-title">🎭 轮到你了！你是 <b>' + escapeHtml(line.sp) + "</b></div>" +
      '<div class="rp-turn-en">' + escapeHtml(line.en) + "</div>" +
      '<div class="rp-turn-zh">' + escapeHtml(line.zh) + "</div>" +
      '<button class="btn btn-speak btn-big" data-act="rp-mic">🎤 我来说</button>' +
      '<div class="feedback" id="rp-fb"></div></div>';
  } else {
    html += bubbleHtml(line, RP.step % 2 ? "right" : "left") + "</div>" +
      '<div class="card rp-turn"><div class="rp-turn-title">👂 听我说（我是 <b>' + escapeHtml(line.sp) + "</b>）</div>" +
      '<div class="btn-row center">' +
      '<button class="btn btn-listen" data-act="rp-replay">🔊 再听一遍</button>' +
      '<button class="btn btn-speak" data-act="rp-next">下一句 ▶</button>' +
      "</div></div>";
    setTimeout(function () { speak(line.en, 0.85); }, 500);
  }
  el.innerHTML = html;
  window.scrollTo(0, document.body.scrollHeight);
}
async function rpMic(btn) {
  var line = RP.dlg.lines[RP.step];
  var fb = $("rp-fb");
  if (!SR) { noSRWarn(fb); return; }
  if (toggleStop(btn)) return; /* 识别中再点 = 说完了，手动结束 */
  var old = btn.innerHTML;
  btn.innerHTML = "🛑 说完了，点我结束";
  fb.innerHTML = '<div class="heard live">🎤 麦克风启动中…开始说吧</div>';
  try {
    var heard = await listenOnce({ btn: btn, onlive: function (t) {
      fb.innerHTML = '<div class="heard live">🎤 听到：' + escapeHtml(t || "…") + "</div>";
    } });
    var stars = starsFor(scoreText(line.en, heard).ratio);
    RP.scores.push(stars);
    fb.innerHTML = '<div class="heard">你说的是：' + escapeHtml(heard || "（没听清）") + "</div>" + feedbackHtml(stars);
    if (stars === 3) confetti();
    setTimeout(function () { if (RP) { RP.step++; renderRP(); } }, 1800);
  } catch (e) {
    var msg = srErrorMsg(e && e.code);
    fb.innerHTML = msg
      ? '<div class="feedback-msg fb-retry">' + escapeHtml(msg) + "</div>"
      : '<div class="feedback-msg fb-retry">🎤 ' + escapeHtml(FEEDBACK[0][Math.floor(Math.random() * FEEDBACK[0].length)]) + "</div>";
    btn.innerHTML = old;
  }
}

/* ============================================================
 * 趣味挑战：看图说话
 * ============================================================ */
function renderChallenges() {
  $("challenge-list").innerHTML = SCENES.map(function (sc) {
    return '<div class="card scene-card">' +
      '<div class="scene-art">' + sc.art + "</div>" +
      '<div class="scene-title">看图说话 👀</div>' +
      '<div class="scene-prompt">图上有什么？用英语大声说出来！</div>' +
      '<div class="scene-hint" id="hint-' + sc.id + '" hidden>💡 例句：' + escapeHtml(sc.example) +
      "<br>关键词：" + sc.keywords.map(escapeHtml).join("、") + "</div>" +
      '<div class="card-stars" id="stars-challenges-' + sc.id + '"></div>' +
      '<div class="btn-row center">' +
      '<button class="btn btn-ghost" data-act="hint" data-id="' + sc.id + '">💡 提示</button>' +
      '<button class="btn btn-speak" data-act="speak-challenge" data-id="' + sc.id + '">🎤 说一说</button>' +
      "</div>" +
      '<div class="feedback" id="fb-challenges-' + sc.id + '"></div>' +
      "</div>";
  }).join("");
  SCENES.forEach(function (sc) { renderStars("stars-challenges-" + sc.id, S.challenges[sc.id] || 0); });
}
async function practiceChallenge(btn) {
  var id = btn.getAttribute("data-id");
  var sc = SCENES.find(function (x) { return x.id === id; });
  var fb = $("fb-challenges-" + id);
  if (!SR) { noSRWarn(fb); return; }
  if (toggleStop(btn)) return; /* 识别中再点 = 说完了，手动结束 */
  var old = btn.innerHTML;
  btn.innerHTML = "🛑 说完了，点我结束";
  fb.innerHTML = '<div class="heard live">🎤 麦克风启动中…开始说吧</div>';
  try {
    var heard = await listenOnce({ btn: btn, onlive: function (t) {
      fb.innerHTML = '<div class="heard live">🎤 听到：' + escapeHtml(t || "…") + "</div>";
    } });
    var hset = {};
    norm(heard).split(" ").filter(Boolean).forEach(function (w) { hset[w] = true; });
    var hit = sc.keywords.filter(function (k) { return hset[k]; });
    var stars = starsFor(hit.length / sc.keywords.length);
    recordResult("challenges", id, stars);
    renderStars("stars-challenges-" + id, S.challenges[id] || 0);
    var kwHtml = sc.keywords.map(function (k) {
      return '<span class="kw ' + (hset[k] ? "kw-hit" : "kw-miss") + '">' + escapeHtml(k) + "</span>";
    }).join(" ");
    fb.innerHTML = '<div class="heard">你说的是：' + escapeHtml(heard || "（没听清）") + "</div>" +
      '<div class="kw-row">关键词：' + kwHtml + "</div>" + feedbackHtml(stars);
    if (stars === 3) confetti();
  } catch (e) {
    var msg = srErrorMsg(e && e.code);
    fb.innerHTML = msg
      ? '<div class="feedback-msg fb-retry">' + escapeHtml(msg) + "</div>"
      : '<div class="feedback-msg fb-retry">🎤 ' + escapeHtml(FEEDBACK[0][Math.floor(Math.random() * FEEDBACK[0].length)]) + "</div>";
  }
  btn.innerHTML = old;
}

/* ============================================================
 * 我的成就
 * ============================================================ */
function badgeEarned(b) {
  if (b.key === "words") return Object.keys(S.words).length >= 20;
  if (b.key === "sentences") return Object.keys(S.sentences).length >= 15;
  if (b.key === "dialogues") return Object.keys(S.dialogues).length >= 3;
  if (b.key === "challenges") return Object.keys(S.challenges).length >= 5;
  if (b.key === "streak") return S.streak.count >= 3;
  if (b.key === "stars") return totalStars() >= 50;
  return false;
}
function renderAchievements() {
  var stats = [
    { emoji: "⭐", num: totalStars(), label: "总星星" },
    { emoji: "📖", num: Object.keys(S.words).length, label: "练习单词" },
    { emoji: "💬", num: Object.keys(S.sentences).length, label: "练习句子" },
    { emoji: "🔥", num: S.streak.count, label: "连续天数" }
  ];
  var html = '<div class="stat-grid">' + stats.map(function (st) {
    return '<div class="card stat-card"><div class="stat-emoji">' + st.emoji + '</div>' +
      '<div class="stat-num">' + st.num + '</div><div class="stat-label">' + st.label + "</div></div>";
  }).join("") + "</div>";
  html += '<h3 class="section-title">🏅 我的徽章</h3><div class="badge-grid">' + BADGES.map(function (b) {
    var got = badgeEarned(b);
    return '<div class="card badge-card' + (got ? " earned" : " locked") + '">' +
      '<div class="badge-emoji">' + (got ? b.emoji : "🔒") + "</div>" +
      '<div class="badge-name">' + b.name + "</div>" +
      '<div class="badge-desc">' + b.desc + "</div></div>";
  }).join("") + "</div>";
  html += '<div class="center"><button class="btn btn-ghost" data-act="reset">🗑️ 清空学习记录</button></div>';
  $("ach-content").innerHTML = html;
}
function resetStats() {
  if (!confirm("确定要清空所有学习记录吗？星星和徽章都会消失哦！")) return;
  try { localStorage.removeItem(LS_KEY); } catch (e) {}
  S = defaultState();
  updateHeader();
  renderWords(); renderSentences(); renderDialogList(); renderChallenges(); renderAchievements();
  toast("🧹 记录已清空，重新开始吧！");
}

/* ============================================================
 * 全局点击委托
 * ============================================================ */
document.addEventListener("click", function (e) {
  var b = e.target.closest("[data-act]");
  if (!b) return;
  var act = b.getAttribute("data-act");
  if (act === "nav") showView(b.getAttribute("data-view"));
  else if (act === "daily-go") goDaily();
  else if (act === "listen") speak(b.getAttribute("data-text"));
  else if (act === "speak-word") practiceWord(b);
  else if (act === "speak-sentence") practiceSentence(b);
  else if (act === "speak-line") speak(b.getAttribute("data-text"));
  else if (act === "speak-challenge") practiceChallenge(b);
  else if (act === "wcat") selectWordCat(b.getAttribute("data-id"));
  else if (act === "stopic") selectSentTopic(b.getAttribute("data-id"));
  else if (act === "open-dialog") openDialogue(b.getAttribute("data-id"));
  else if (act === "dlg-back") renderDialogList();
  else if (act === "choose-role") chooseRole(b.getAttribute("data-id"), parseInt(b.getAttribute("data-role"), 10));
  else if (act === "rp-mic") rpMic(b);
  else if (act === "rp-next") { RP.step++; renderRP(); }
  else if (act === "rp-replay") { var line = RP.dlg.lines[RP.step]; speak(line.en, 0.85); }
  else if (act === "hint") { var h = $("hint-" + b.getAttribute("data-id")); h.hidden = !h.hidden; }
  else if (act === "reset") resetStats();
});

/* ---------- 初始化 ---------- */
document.addEventListener("DOMContentLoaded", function () {
  renderWordTabs();
  renderWords();
  renderSentTabs();
  renderSentences();
  renderDialogList();
  renderChallenges();
  renderDailyTask();
  updateHeader();
  if (!SR) {
    var n = $("sr-notice");
    n.hidden = false;
  }
});
