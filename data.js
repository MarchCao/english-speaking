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

/* ---------- 趣味挑战：看图说话 ---------- */
const SCENES = [
  { id: "c1", emojis: "🐱🍎", keywords: ["cat", "apple"],   example: "A cat eats an apple." },
  { id: "c2", emojis: "🐶⚽", keywords: ["dog", "ball"],    example: "A dog plays with a ball." },
  { id: "c3", emojis: "🐦🌳", keywords: ["bird", "tree"],   example: "A bird is in the tree." },
  { id: "c4", emojis: "🐟💧", keywords: ["fish", "water"],  example: "A fish swims in the water." },
  { id: "c5", emojis: "🐵🍌", keywords: ["monkey", "banana"], example: "A monkey eats a banana." },
  { id: "c6", emojis: "🐰🥕", keywords: ["rabbit", "carrot"], example: "A rabbit likes carrots." },
  { id: "c7", emojis: "🦆🏊", keywords: ["duck", "swim"],    example: "A duck can swim." }
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
