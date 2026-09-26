/* ============================================================
 * data.js — 英语口语小达人：所有学习内容数据
 * 想加新单词/句子/对话/挑战，只需在这里按格式添加即可。
 * ============================================================ */

/* ---------- 单词乐园 ---------- */
const WORD_CATEGORIES = [
  {
    id: "animals", name: "动物", emoji: "🐾",
    words: [
      { en: "cat",      phon: "[kæt]",      zh: "猫",   emoji: "🐱" },
      { en: "dog",      phon: "[dɔːɡ]",     zh: "狗",   emoji: "🐶" },
      { en: "bird",     phon: "[bɜːd]",     zh: "鸟",   emoji: "🐦" },
      { en: "fish",     phon: "[fɪʃ]",      zh: "鱼",   emoji: "🐟" },
      { en: "monkey",   phon: "[ˈmʌŋki]",   zh: "猴子", emoji: "🐵" },
      { en: "panda",    phon: "[ˈpændə]",   zh: "熊猫", emoji: "🐼" },
      { en: "rabbit",   phon: "[ˈræbɪt]",   zh: "兔子", emoji: "🐰" },
      { en: "tiger",    phon: "[ˈtaɪɡər]",  zh: "老虎", emoji: "🐯" },
      { en: "elephant", phon: "[ˈelɪfənt]", zh: "大象", emoji: "🐘" },
      { en: "duck",     phon: "[dʌk]",      zh: "鸭子", emoji: "🦆" }
    ]
  },
  {
    id: "food", name: "食物", emoji: "🍎",
    words: [
      { en: "apple",  phon: "[ˈæpəl]",   zh: "苹果", emoji: "🍎" },
      { en: "banana", phon: "[bəˈnɑːnə]", zh: "香蕉", emoji: "🍌" },
      { en: "egg",    phon: "[eɡ]",      zh: "鸡蛋", emoji: "🥚" },
      { en: "milk",   phon: "[mɪlk]",    zh: "牛奶", emoji: "🥛" },
      { en: "rice",   phon: "[raɪs]",    zh: "米饭", emoji: "🍚" },
      { en: "bread",  phon: "[bred]",    zh: "面包", emoji: "🍞" },
      { en: "cake",   phon: "[keɪk]",    zh: "蛋糕", emoji: "🍰" },
      { en: "water",  phon: "[ˈwɔːtər]", zh: "水",   emoji: "💧" },
      { en: "orange", phon: "[ˈɔːrɪndʒ]", zh: "橙子", emoji: "🍊" },
      { en: "cookie", phon: "[ˈkʊki]",   zh: "饼干", emoji: "🍪" }
    ]
  },
  {
    id: "colors", name: "颜色", emoji: "🎨",
    words: [
      { en: "red",    phon: "[red]",      zh: "红色", emoji: "🔴" },
      { en: "yellow", phon: "[ˈjeloʊ]",  zh: "黄色", emoji: "🟡" },
      { en: "blue",   phon: "[bluː]",    zh: "蓝色", emoji: "🔵" },
      { en: "green",  phon: "[ɡriːn]",   zh: "绿色", emoji: "🟢" },
      { en: "orange", phon: "[ˈɔːrɪndʒ]", zh: "橙色", emoji: "🟠" },
      { en: "purple", phon: "[ˈpɜːrpəl]", zh: "紫色", emoji: "🟣" },
      { en: "pink",   phon: "[pɪŋk]",    zh: "粉色", emoji: "🌸" },
      { en: "black",  phon: "[blæk]",    zh: "黑色", emoji: "⚫" },
      { en: "white",  phon: "[waɪt]",    zh: "白色", emoji: "⚪" },
      { en: "brown",  phon: "[braʊn]",   zh: "棕色", emoji: "🟤" }
    ]
  },
  {
    id: "numbers", name: "数字", emoji: "🔢",
    words: [
      { en: "one",       phon: "[wʌn]",        zh: "一",   num: "1" },
      { en: "two",       phon: "[tuː]",        zh: "二",   num: "2" },
      { en: "three",     phon: "[θriː]",       zh: "三",   num: "3" },
      { en: "four",      phon: "[fɔːr]",       zh: "四",   num: "4" },
      { en: "five",      phon: "[faɪv]",       zh: "五",   num: "5" },
      { en: "six",       phon: "[sɪks]",       zh: "六",   num: "6" },
      { en: "seven",     phon: "[ˈsevən]",     zh: "七",   num: "7" },
      { en: "eight",     phon: "[eɪt]",        zh: "八",   num: "8" },
      { en: "nine",      phon: "[naɪn]",       zh: "九",   num: "9" },
      { en: "ten",       phon: "[ten]",        zh: "十",   num: "10" },
      { en: "eleven",    phon: "[ɪˈlevən]",    zh: "十一", num: "11" },
      { en: "twelve",    phon: "[twelv]",      zh: "十二", num: "12" },
      { en: "thirteen",  phon: "[ˌθɜːrˈtiːn]", zh: "十三", num: "13" },
      { en: "fourteen",  phon: "[ˌfɔːrˈtiːn]", zh: "十四", num: "14" },
      { en: "fifteen",   phon: "[ˌfɪfˈtiːn]",  zh: "十五", num: "15" },
      { en: "sixteen",   phon: "[ˌsɪksˈtiːn]", zh: "十六", num: "16" },
      { en: "seventeen", phon: "[ˌsevənˈtiːn]", zh: "十七", num: "17" },
      { en: "eighteen",  phon: "[ˌeɪˈtiːn]",   zh: "十八", num: "18" },
      { en: "nineteen",  phon: "[ˌnaɪnˈtiːn]", zh: "十九", num: "19" },
      { en: "twenty",    phon: "[ˈtwenti]",    zh: "二十", num: "20" }
    ]
  },
  {
    id: "family", name: "家庭", emoji: "👨‍👩‍👧",
    words: [
      { en: "father",   phon: "[ˈfɑːðər]", zh: "爸爸", emoji: "👨" },
      { en: "mother",   phon: "[ˈmʌðər]",  zh: "妈妈", emoji: "👩" },
      { en: "brother",  phon: "[ˈbrʌðər]", zh: "兄弟", emoji: "👦" },
      { en: "sister",   phon: "[ˈsɪstər]", zh: "姐妹", emoji: "👧" },
      { en: "grandpa",  phon: "[ˈɡrænpɑː]", zh: "爷爷", emoji: "👴" },
      { en: "grandma",  phon: "[ˈɡrænmɑː]", zh: "奶奶", emoji: "👵" },
      { en: "baby",     phon: "[ˈbeɪbi]",  zh: "宝宝", emoji: "👶" },
      { en: "family",   phon: "[ˈfæməli]", zh: "家庭", emoji: "👨‍👩‍👧‍👦" }
    ]
  },
  {
    id: "school", name: "学校", emoji: "🏫",
    words: [
      { en: "book",    phon: "[bʊk]",     zh: "书",   emoji: "📖" },
      { en: "pen",     phon: "[pen]",     zh: "钢笔", emoji: "🖊️" },
      { en: "pencil",  phon: "[ˈpensəl]", zh: "铅笔", emoji: "✏️" },
      { en: "school",  phon: "[skuːl]",   zh: "学校", emoji: "🏫" },
      { en: "teacher", phon: "[ˈtiːtʃər]", zh: "老师", emoji: "👩‍🏫" },
      { en: "bag",     phon: "[bæɡ]",     zh: "书包", emoji: "🎒" },
      { en: "ruler",   phon: "[ˈruːlər]", zh: "尺子", emoji: "📏" },
      { en: "crayon",  phon: "[ˈkreɪən]", zh: "蜡笔", emoji: "🖍️" }
    ]
  },
  {
    id: "body", name: "身体", emoji: "🖐️",
    words: [
      { en: "eye",   phon: "[aɪ]",   zh: "眼睛", emoji: "👀" },
      { en: "ear",   phon: "[ɪər]",  zh: "耳朵", emoji: "👂" },
      { en: "nose",  phon: "[noʊz]", zh: "鼻子", emoji: "👃" },
      { en: "mouth", phon: "[maʊθ]", zh: "嘴巴", emoji: "👄" },
      { en: "hand",  phon: "[hænd]", zh: "手",   emoji: "✋" },
      { en: "foot",  phon: "[fʊt]",  zh: "脚",   emoji: "🦶" },
      { en: "tooth", phon: "[tuːθ]", zh: "牙齿", emoji: "🦷" },
      { en: "hair",  phon: "[heər]", zh: "头发", emoji: "💇" }
    ]
  }
];

/* ---------- 句子跟读 ---------- */
const SENTENCE_TOPICS = [
  {
    id: "greetings", name: "打招呼", emoji: "👋",
    sentences: [
      { id: "g1", en: "Hello! How are you?",            zh: "你好！你好吗？" },
      { id: "g2", en: "Good morning, teacher!",         zh: "老师，早上好！" },
      { id: "g3", en: "Nice to meet you!",              zh: "很高兴见到你！" },
      { id: "g4", en: "Goodbye! See you tomorrow!",    zh: "再见！明天见！" },
      { id: "g5", en: "Have a nice day!",               zh: "祝你有美好的一天！" }
    ]
  },
  {
    id: "selfintro", name: "自我介绍", emoji: "🙋",
    sentences: [
      { id: "s1", en: "My name is Xiaoming.",       zh: "我叫小明。" },
      { id: "s2", en: "I am eight years old.",      zh: "我八岁了。" },
      { id: "s3", en: "I am from China.",           zh: "我来自中国。" },
      { id: "s4", en: "I like playing football.",   zh: "我喜欢踢足球。" },
      { id: "s5", en: "This is my friend, Lily.",   zh: "这是我的朋友莉莉。" }
    ]
  },
  {
    id: "school", name: "学校生活", emoji: "🏫",
    sentences: [
      { id: "c1", en: "I go to school by bus.",           zh: "我坐公交车上学。" },
      { id: "c2", en: "My favorite subject is English.",  zh: "我最喜欢的科目是英语。" },
      { id: "c3", en: "I like my teacher very much.",     zh: "我非常喜欢我的老师。" },
      { id: "c4", en: "We play games after class.",       zh: "下课后我们玩游戏。" },
      { id: "c5", en: "I do my homework in the evening.", zh: "我晚上做作业。" }
    ]
  },
  {
    id: "family", name: "我的家庭", emoji: "🏠",
    sentences: [
      { id: "f1", en: "There are four people in my family.", zh: "我家有四口人。" },
      { id: "f2", en: "My father is tall and strong.",       zh: "我爸爸又高又壮。" },
      { id: "f3", en: "My mother cooks yummy food.",         zh: "我妈妈做的饭很好吃。" },
      { id: "f4", en: "I love my family.",                   zh: "我爱我的家。" },
      { id: "f5", en: "We watch TV together at night.",      zh: "晚上我们一起看电视。" }
    ]
  },
  {
    id: "food", name: "喜欢的食物", emoji: "🍜",
    sentences: [
      { id: "d1", en: "I like apples very much.",      zh: "我非常喜欢苹果。" },
      { id: "d2", en: "My favorite food is noodles.",  zh: "我最喜欢的食物是面条。" },
      { id: "d3", en: "I eat eggs for breakfast.",     zh: "我早餐吃鸡蛋。" },
      { id: "d4", en: "The cake is sweet and yummy.",  zh: "蛋糕又甜又好吃。" },
      { id: "d5", en: "I drink milk every morning.",   zh: "我每天早上喝牛奶。" }
    ]
  }
];

/* ---------- 情景对话 ---------- */
const DIALOGUES = [
  {
    id: "meet", title: "见面打招呼", en_title: "Meeting a Friend", emoji: "👋",
    lines: [
      { sp: "Lily",     en: "Hi, Xiaoming!",                          zh: "你好，小明！" },
      { sp: "Xiaoming", en: "Hi, Lily!",                              zh: "你好，莉莉！" },
      { sp: "Lily",     en: "How are you today?",                     zh: "你今天好吗？" },
      { sp: "Xiaoming", en: "I'm fine, thank you. And you?",          zh: "我很好，谢谢。你呢？" },
      { sp: "Lily",     en: "I'm great! Let's play together!",        zh: "我很棒！我们一起玩吧！" },
      { sp: "Xiaoming", en: "Good idea!",                             zh: "好主意！" }
    ]
  },
  {
    id: "intro", title: "自我介绍", en_title: "Introducing Myself", emoji: "🙋",
    lines: [
      { sp: "Teacher",  en: "What's your name?",        zh: "你叫什么名字？" },
      { sp: "Xiaohong", en: "My name is Xiaohong.",     zh: "我叫小红。" },
      { sp: "Teacher",  en: "How old are you?",         zh: "你多大了？" },
      { sp: "Xiaohong", en: "I'm nine years old.",      zh: "我九岁了。" },
      { sp: "Teacher",  en: "Where are you from?",      zh: "你来自哪里？" },
      { sp: "Xiaohong", en: "I'm from Beijing.",        zh: "我来自北京。" },
      { sp: "Teacher",  en: "Nice to meet you!",        zh: "很高兴见到你！" },
      { sp: "Xiaohong", en: "Nice to meet you too!",    zh: "我也很高兴见到你！" }
    ]
  },
  {
    id: "restaurant", title: "在餐厅", en_title: "At the Restaurant", emoji: "🍜",
    lines: [
      { sp: "Waiter", en: "Welcome! What would you like to eat?", zh: "欢迎！您想吃点什么？" },
      { sp: "Mom",    en: "I'd like some noodles, please.",      zh: "请给我来一份面条。" },
      { sp: "Waiter", en: "Would you like some soup?",           zh: "您想要点汤吗？" },
      { sp: "Mom",    en: "Yes, please.",                        zh: "好的，谢谢。" },
      { sp: "Waiter", en: "Here you are. Enjoy your meal!",      zh: "给您，请慢用！" },
      { sp: "Mom",    en: "Thank you!",                          zh: "谢谢！" }
    ]
  },
  {
    id: "stationery", title: "买文具", en_title: "Buying Stationery", emoji: "✏️",
    lines: [
      { sp: "Shopkeeper", en: "Can I help you?",            zh: "需要帮忙吗？" },
      { sp: "Xiaogang",   en: "Yes. I want a pencil, please.", zh: "好的，我想要一支铅笔。" },
      { sp: "Shopkeeper", en: "What color do you like?",    zh: "你喜欢什么颜色？" },
      { sp: "Xiaogang",   en: "Blue, please.",              zh: "请给我蓝色的。" },
      { sp: "Shopkeeper", en: "Here you are. Five yuan, please.", zh: "给你。五元，谢谢。" },
      { sp: "Xiaogang",   en: "Thank you! Bye!",            zh: "谢谢！再见！" }
    ]
  },
  {
    id: "directions", title: "问路", en_title: "Asking Directions", emoji: "🗺️",
    lines: [
      { sp: "Visitor", en: "Excuse me, where is the zoo?",        zh: "请问，动物园在哪里？" },
      { sp: "Officer", en: "Go straight and turn left.",          zh: "直走然后左转。" },
      { sp: "Visitor", en: "Is it far from here?",                zh: "离这里远吗？" },
      { sp: "Officer", en: "No, it's near. Only five minutes' walk.", zh: "不远。步行只要五分钟。" },
      { sp: "Visitor", en: "Thank you very much!",                zh: "非常感谢！" },
      { sp: "Officer", en: "You're welcome!",                     zh: "不客气！" }
    ]
  }
];

/* ---------- 趣味挑战：看图说话 ----------
 * 场景图用内联 SVG（不依赖系统 emoji 字体，老手机也能正常显示） */
const SCENES = [
  { id: "c1", emojis: "🐱🍎", keywords: ["cat", "apple"],   example: "A cat eats an apple.",
    art: '<svg viewBox="0 0 120 120"><circle cx="36" cy="74" r="24" fill="#e53935"/><rect x="34" y="44" width="5" height="12" rx="2" fill="#795548"/><ellipse cx="47" cy="50" rx="9" ry="5" fill="#66bb6a" transform="rotate(-25 47 50)"/><ellipse cx="28" cy="66" rx="6" ry="9" fill="#ffffff" opacity="0.25"/><polygon points="64,46 70,28 82,42" fill="#fb8c00"/><polygon points="100,46 94,28 82,42" fill="#fb8c00"/><circle cx="82" cy="64" r="24" fill="#ffa726"/><circle cx="74" cy="60" r="3.5" fill="#4e342e"/><circle cx="90" cy="60" r="3.5" fill="#4e342e"/><polygon points="79,70 85,70 82,74" fill="#f48fb1"/><line x1="60" y1="66" x2="70" y2="68" stroke="#8d6e63" stroke-width="1.5"/><line x1="60" y1="74" x2="70" y2="72" stroke="#8d6e63" stroke-width="1.5"/><line x1="104" y1="66" x2="94" y2="68" stroke="#8d6e63" stroke-width="1.5"/><line x1="104" y1="74" x2="94" y2="72" stroke="#8d6e63" stroke-width="1.5"/></svg>' },
  { id: "c2", emojis: "🐶⚽", keywords: ["dog", "ball"],    example: "A dog plays with a ball.",
    art: '<svg viewBox="0 0 120 120"><circle cx="34" cy="76" r="22" fill="#ffffff" stroke="#90a4ae" stroke-width="2"/><polygon points="34,68 40,72 38,79 30,79 28,72" fill="#37474f"/><circle cx="24" cy="66" r="4" fill="#37474f"/><circle cx="44" cy="66" r="4" fill="#37474f"/><circle cx="24" cy="86" r="4" fill="#37474f"/><circle cx="44" cy="86" r="4" fill="#37474f"/><ellipse cx="60" cy="48" rx="10" ry="17" fill="#8d6e63"/><ellipse cx="104" cy="48" rx="10" ry="17" fill="#8d6e63"/><circle cx="82" cy="62" r="26" fill="#a1887f"/><ellipse cx="82" cy="72" rx="12" ry="9" fill="#d7ccc8"/><circle cx="73" cy="56" r="4" fill="#3e2723"/><circle cx="91" cy="56" r="4" fill="#3e2723"/><ellipse cx="82" cy="68" rx="4.5" ry="3.5" fill="#3e2723"/><path d="M76 78 q6 4 12 0" stroke="#5d4037" stroke-width="2" fill="none"/></svg>' },
  { id: "c3", emojis: "🐦🌳", keywords: ["bird", "tree"],   example: "A bird is in the tree.",
    art: '<svg viewBox="0 0 120 120"><rect x="26" y="72" width="12" height="34" rx="4" fill="#795548"/><polygon points="32,6 6,60 58,60" fill="#43a047"/><polygon points="32,30 16,62 48,62" fill="#388e3c"/><ellipse cx="84" cy="72" rx="20" ry="15" fill="#42a5f5"/><polygon points="76,58 66,46 82,52" fill="#1e88e5"/><circle cx="98" cy="62" r="11" fill="#42a5f5"/><polygon points="108,60 117,64 108,68" fill="#ffb300"/><circle cx="100" cy="59" r="2.5" fill="#263238"/><line x1="80" y1="86" x2="80" y2="96" stroke="#ffb300" stroke-width="3" stroke-linecap="round"/><line x1="88" y1="86" x2="88" y2="96" stroke="#ffb300" stroke-width="3" stroke-linecap="round"/></svg>' },
  { id: "c4", emojis: "🐟💧", keywords: ["fish", "water"],  example: "A fish swims in the water.",
    art: '<svg viewBox="0 0 120 120"><path d="M8 88 q12 -10 24 0 t24 0 t24 0 t24 0" stroke="#29b6f6" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M8 104 q12 -10 24 0 t24 0 t24 0 t24 0" stroke="#4fc3f7" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.7"/><ellipse cx="58" cy="54" rx="26" ry="17" fill="#ff7043"/><polygon points="82,54 102,40 102,68" fill="#f4511e"/><polygon points="58,40 66,30 72,40" fill="#f4511e"/><circle cx="46" cy="50" r="4.5" fill="#ffffff"/><circle cx="46" cy="50" r="2.2" fill="#263238"/><path d="M38 62 q7 5 14 0" stroke="#bf360c" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M52 54 q4 -3 8 0 M60 54 q4 -3 8 0" stroke="#e64a19" stroke-width="2" fill="none" stroke-linecap="round"/></svg>' },
  { id: "c5", emojis: "🐵🍌", keywords: ["monkey", "banana"], example: "A monkey eats a banana.",
    art: '<svg viewBox="0 0 120 120"><path d="M22 44 C24 76 48 94 88 92 C96 92 98 82 90 80 C58 78 38 62 36 40 C36 34 21 34 22 44 Z" fill="#fdd835" stroke="#f9a825" stroke-width="2"/><circle cx="42" cy="36" r="10" fill="#8d6e63"/><circle cx="94" cy="36" r="10" fill="#8d6e63"/><circle cx="68" cy="54" r="27" fill="#a1887f"/><ellipse cx="68" cy="62" rx="17" ry="13" fill="#d7ccc8"/><circle cx="59" cy="48" r="4" fill="#3e2723"/><circle cx="77" cy="48" r="4" fill="#3e2723"/><ellipse cx="68" cy="59" rx="5" ry="4" fill="#8d6e63"/><path d="M60 68 q8 6 16 0" stroke="#5d4037" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>' },
  { id: "c6", emojis: "🐰🥕", keywords: ["rabbit", "carrot"], example: "A rabbit likes carrots.",
    art: '<svg viewBox="0 0 120 120"><polygon points="28,62 52,62 40,106" fill="#fb8c00"/><line x1="34" y1="74" x2="46" y2="72" stroke="#e65100" stroke-width="2"/><line x1="36" y1="86" x2="47" y2="84" stroke="#e65100" stroke-width="2"/><path d="M40 62 q-4 -12 -13 -14 M40 62 q0 -14 7 -18 M40 62 q7 -10 15 -11" stroke="#43a047" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="72" cy="36" rx="9" ry="22" fill="#eceff1"/><ellipse cx="94" cy="36" rx="9" ry="22" fill="#eceff1"/><ellipse cx="72" cy="36" rx="4" ry="13" fill="#f8bbd0"/><ellipse cx="94" cy="36" rx="4" ry="13" fill="#f8bbd0"/><circle cx="83" cy="74" r="25" fill="#fafafa" stroke="#cfd8dc" stroke-width="2"/><circle cx="74" cy="70" r="4" fill="#37474f"/><circle cx="92" cy="70" r="4" fill="#37474f"/><polygon points="80,80 86,80 83,84" fill="#f48fb1"/><path d="M76 88 q7 4 14 0" stroke="#b0bec5" stroke-width="2" fill="none" stroke-linecap="round"/></svg>' },
  { id: "c7", emojis: "🦆🏊", keywords: ["duck", "swim"],    example: "A duck can swim.",
    art: '<svg viewBox="0 0 120 120"><path d="M8 90 q12 -10 24 0 t24 0 t24 0 t24 0" stroke="#29b6f6" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M8 106 q12 -10 24 0 t24 0 t24 0 t24 0" stroke="#4fc3f7" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.7"/><ellipse cx="58" cy="68" rx="28" ry="19" fill="#fdd835"/><polygon points="34,62 20,54 24,70" fill="#f9a825"/><path d="M44 68 q10 8 22 4" stroke="#f9a825" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="80" cy="46" r="16" fill="#fdd835"/><polygon points="94,44 107,49 94,54" fill="#fb8c00"/><circle cx="84" cy="42" r="3" fill="#37474f"/><path d="M72 56 q4 6 10 8" stroke="#f9a825" stroke-width="3" fill="none" stroke-linecap="round"/></svg>' }
];

/* ---------- 徽章 ---------- */
const BADGES = [
  { emoji: "📚", name: "单词小达人", desc: "练习 20 个单词",   key: "words" },
  { emoji: "💬", name: "句子小能手", desc: "练习 15 个句子",   key: "sentences" },
  { emoji: "🎭", name: "对话小明星", desc: "完成 3 组对话",    key: "dialogues" },
  { emoji: "🎮", name: "挑战小勇士", desc: "完成 5 个挑战",    key: "challenges" },
  { emoji: "🔥", name: "坚持之星",   desc: "连续练习 3 天",    key: "streak" },
  { emoji: "🌟", name: "超级学员",   desc: "获得 50 颗星星",    key: "stars" }
];
