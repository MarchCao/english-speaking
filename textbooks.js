/* ============================================================
 * textbooks.js — 教材数据：外研版《新标准英语》（三年级起点）四年级上册
 * 纯原生 JS，无任何外部依赖，ES5 风格（var / function）。
 *
 * 内容依据：各 Module 的课文原文 / 课文录音文本 / 教案 /
 * 课件 / 同步练习题整理，只收录短词短句，不复制长篇课文。
 * 10 个 Module 标题（Unit 1）：
 *  M1 Go straight on. / M2 She's reading a book. /
 *  M3 What are they doing? / M4 Do you want some rice? /
 *  M5 Can you run fast? / M6 Can I have some sweets? /
 *  M7 There is a horse in this photo. /
 *  M8 We're going to visit Hainan. /
 *  M9 Are you going to run on sports day? /
 *  M10 We have a big family dinner.
 * ============================================================ */

var TEXTBOOKS = [
  {
    id: "wy-3qi-4a",
    name: "外研版（三起）四年级上册",
    short: "外研四上",
    emoji: "📕",
    modules: [
      {
        id: "m1", no: 1, name: "问路", title: "Go straight on.", emoji: "🗺️",
        words: [
          { en: "supermarket", phon: "[ˈsuːpəˌmɑːrkɪt]", zh: "超市",   emoji: "🏪" },
          { en: "station",     phon: "[ˈsteɪʃən]",       zh: "车站",   emoji: "🚉" },
          { en: "train",       phon: "[treɪn]",          zh: "火车",   emoji: "🚂" },
          { en: "road",        phon: "[roʊd]",           zh: "马路",   emoji: "🛣️" },
          { en: "live",        phon: "[lɪv]",            zh: "居住",   emoji: "🏡" },
          { en: "house",       phon: "[haʊs]",           zh: "房子",   emoji: "🏠" },
          { en: "near",        phon: "[nɪr]",            zh: "在附近", emoji: "📍" },
          { en: "up",          phon: "[ʌp]",             zh: "向上",   emoji: "⬆️" },
          { en: "down",        phon: "[daʊn]",          zh: "向下",   emoji: "⬇️" },
          { en: "excuse me",   phon: "[ɪkˈskjuːz miː]",   zh: "请问",   emoji: "🗣️" }
        ],
        sentences: [
          { id: "wy4a:m1:s1", en: "Excuse me. Where's the supermarket, please?", zh: "请问，超市在哪里？" },
          { id: "wy4a:m1:s2", en: "Go straight on.",   zh: "一直往前走。" },
          { id: "wy4a:m1:s3", en: "Turn left.",        zh: "向左转。" },
          { id: "wy4a:m1:s4", en: "Turn right.",       zh: "向右转。" },
          { id: "wy4a:m1:s5", en: "It's at the station.",   zh: "它在车站。" },
          { id: "wy4a:m1:s6", en: "It's near the houses.",  zh: "它在房子附近。" }
        ]
      },
      {
        id: "m2", no: 2, name: "在做什么", title: "She's reading a book.", emoji: "📚",
        words: [
          { en: "picture", phon: "[ˈpɪktʃər]", zh: "图画", emoji: "🖼️" },
          { en: "talk",    phon: "[tɔːk]",    zh: "交谈", emoji: "💬" },
          { en: "letter",  phon: "[ˈletər]",  zh: "信",   emoji: "✉️" },
          { en: "write",   phon: "[raɪt]",    zh: "写",   emoji: "✍️" },
          { en: "music",   phon: "[ˈmjuːzɪk]", zh: "音乐", emoji: "🎵" },
          { en: "book",    phon: "[bʊk]",     zh: "书",   emoji: "📖" },
          { en: "read",    phon: "[riːd]",    zh: "朗读", emoji: "🗣️" },
          { en: "watch",   phon: "[wɑːtʃ]",   zh: "观看", emoji: "👀" },
          { en: "TV",      phon: "[ˌtiːˈviː]", zh: "电视", emoji: "📺" },
          { en: "play",    phon: "[pleɪ]",    zh: "玩耍", emoji: "⚽" }
        ],
        sentences: [
          { id: "wy4a:m2:s1", en: "What are you doing?",      zh: "你在做什么？" },
          { id: "wy4a:m2:s2", en: "I'm listening to music.",  zh: "我正在听音乐。" },
          { id: "wy4a:m2:s3", en: "What is he doing?",        zh: "他在做什么？" },
          { id: "wy4a:m2:s4", en: "He is reading a book.",    zh: "他正在读书。" },
          { id: "wy4a:m2:s5", en: "She is writing a letter.", zh: "她正在写信。" }
        ]
      },
      {
        id: "m3", no: 3, name: "他们在做什么", title: "What are they doing?", emoji: "👥",
        words: [
          { en: "boat",         phon: "[boʊt]",         zh: "船",     emoji: "⛵" },
          { en: "chess",        phon: "[tʃes]",         zh: "象棋",   emoji: "♟️" },
          { en: "row",          phon: "[roʊ]",          zh: "划船",   emoji: "🚣" },
          { en: "drink",        phon: "[drɪŋk]",        zh: "喝",     emoji: "🥤" },
          { en: "hungry",       phon: "[ˈhʌŋɡri]",       zh: "饥饿的", emoji: "🍚" },
          { en: "park",         phon: "[pɑːrk]",        zh: "公园",   emoji: "🏞️" },
          { en: "lake",         phon: "[leɪk]",         zh: "湖泊",   emoji: "🌅" },
          { en: "interesting",  phon: "[ˈɪntrəstɪŋ]",    zh: "有趣的", emoji: "😄" },
          { en: "people",       phon: "[ˈpiːpəl]",       zh: "人们",   emoji: "🧑‍🤝‍🧑" },
          { en: "men",          phon: "[men]",          zh: "男士们", emoji: "👨" },
          { en: "soybean milk", phon: "[ˈsɔɪbiːn mɪlk]", zh: "豆浆",   emoji: "🥛" }
        ],
        sentences: [
          { id: "wy4a:m3:s1", en: "What are they doing?",            zh: "他们在做什么？" },
          { id: "wy4a:m3:s2", en: "They're doing taijiquan.",        zh: "他们在打太极拳。" },
          { id: "wy4a:m3:s3", en: "They're rowing a dragon boat.",   zh: "他们在划龙舟。" },
          { id: "wy4a:m3:s4", en: "They're playing chess.",          zh: "他们在下象棋。" },
          { id: "wy4a:m3:s5", en: "What's the elephant doing?",      zh: "大象在做什么？" }
        ]
      },
      {
        id: "m4", no: 4, name: "食物和购物", title: "Do you want some rice?", emoji: "🥟",
        words: [
          { en: "dumpling",   phon: "[ˈdʌmplɪŋ]",   zh: "饺子",   emoji: "🥟" },
          { en: "chopsticks", phon: "[ˈtʃɑːpstɪks]", zh: "筷子",   emoji: "🥢" },
          { en: "cook",       phon: "[kʊk]",        zh: "烹饪",   emoji: "👩‍🍳" },
          { en: "vegetable",  phon: "[ˈvedʒtəbəl]", zh: "蔬菜",   emoji: "🥬" },
          { en: "fast food",  phon: "[ˈfæst fuːd]", zh: "快餐",   emoji: "🍔" },
          { en: "Chinese",    phon: "[ˌtʃaɪˈniːz]", zh: "中国的", emoji: "🇨🇳" },
          { en: "difficult",  phon: "[ˈdɪfɪkəlt]",  zh: "困难的", emoji: "😟" },
          { en: "how much",   phon: "[ˈhaʊ ˈmʌtʃ]", zh: "多少钱", emoji: "💰" },
          { en: "yuan",       phon: "[juˈɑːn]",     zh: "元",     emoji: "💴" },
          { en: "flower",     phon: "[ˈflaʊər]",    zh: "花",     emoji: "🌸" },
          { en: "egg",        phon: "[eɡ]",         zh: "鸡蛋",   emoji: "🥚" },
          { en: "buy",        phon: "[baɪ]",        zh: "买",     emoji: "🛒" }
        ],
        sentences: [
          { id: "wy4a:m4:s1", en: "Do you want some rice?",   zh: "你想要些米饭吗？" },
          { id: "wy4a:m4:s2", en: "Yes, please.",             zh: "好的，谢谢。" },
          { id: "wy4a:m4:s3", en: "No, thank you.",           zh: "不，谢谢。" },
          { id: "wy4a:m4:s4", en: "I'm making dumplings.",    zh: "我正在包饺子。" },
          { id: "wy4a:m4:s5", en: "I'm cooking vegetables.",  zh: "我正在炒菜。" },
          { id: "wy4a:m4:s6", en: "How much is it?",          zh: "它多少钱？" },
          { id: "wy4a:m4:s7", en: "Ten yuan.",                zh: "十元。" },
          { id: "wy4a:m4:s8", en: "Six yuan for ten.",        zh: "十个六元。" }
        ]
      },
      {
        id: "m5", no: 5, name: "我能行", title: "Can you run fast?", emoji: "🏃",
        words: [
          { en: "can",    phon: "[kæn]",    zh: "能，会", emoji: "💪" },
          { en: "run",    phon: "[rʌn]",    zh: "跑步",   emoji: "🏃" },
          { en: "fast",   phon: "[fæst]",   zh: "快的",   emoji: "💨" },
          { en: "jump",   phon: "[dʒʌmp]",  zh: "跳跃",   emoji: "🐇" },
          { en: "high",   phon: "[haɪ]",    zh: "高的",   emoji: "🪁" },
          { en: "far",    phon: "[fɑːr]",    zh: "远的",   emoji: "🔭" },
          { en: "ride",   phon: "[raɪd]",   zh: "骑",     emoji: "🚴" },
          { en: "winner", phon: "[ˈwɪnər]", zh: "获胜者", emoji: "🏆" },
          { en: "strong", phon: "[strɔːŋ]", zh: "强壮的", emoji: "🦾" },
          { en: "star",   phon: "[stɑːr]",  zh: "明星",   emoji: "⭐" },
          { en: "swim",   phon: "[swɪm]",   zh: "游泳",   emoji: "🏊" },
          { en: "tall",   phon: "[tɔːl]",   zh: "高的",   emoji: "🦒" }
        ],
        sentences: [
          { id: "wy4a:m5:s1", en: "Can you run fast?",  zh: "你跑得快吗？" },
          { id: "wy4a:m5:s2", en: "Can you jump high?", zh: "你跳得高吗？" },
          { id: "wy4a:m5:s3", en: "Can you jump far?",  zh: "你跳得远吗？" },
          { id: "wy4a:m5:s4", en: "Yes, I can.",        zh: "是的，我能。" },
          { id: "wy4a:m5:s5", en: "No, I can't.",       zh: "不，我不能。" },
          { id: "wy4a:m5:s6", en: "Can Sam play football?",          zh: "萨姆会踢足球吗？" },
          { id: "wy4a:m5:s7", en: "Yes, he can. He's strong.",       zh: "是的，他会。他很强壮。" },
          { id: "wy4a:m5:s8", en: "Can Lingling play basketball?",   zh: "玲玲会打篮球吗？" },
          { id: "wy4a:m5:s9", en: "Yes, she can. She's tall.",       zh: "是的，她会。她很高。" }
        ]
      },
      {
        id: "m6", no: 6, name: "万圣节", title: "Can I have some sweets?", emoji: "🎃",
        words: [
          { en: "sweets",    phon: "[swiːts]",      zh: "糖果",   emoji: "🍬" },
          { en: "soup",      phon: "[suːp]",        zh: "汤",     emoji: "🍲" },
          { en: "biscuit",   phon: "[ˈbɪskɪt]",     zh: "饼干",   emoji: "🍪" },
          { en: "bread",     phon: "[bred]",        zh: "面包",   emoji: "🍞" },
          { en: "fruit",     phon: "[fruːt]",       zh: "水果",   emoji: "🍎" },
          { en: "light",     phon: "[laɪt]",        zh: "灯",     emoji: "💡" },
          { en: "dark",      phon: "[dɑːrk]",       zh: "黑暗的", emoji: "🌑" },
          { en: "turn on",   phon: "[ˈtɜːrn ɑːn]",  zh: "打开",   emoji: "🔛" },
          { en: "Halloween", phon: "[ˌhæləˈwiːn]",  zh: "万圣节", emoji: "🎃" },
          { en: "happy",     phon: "[ˈhæpi]",       zh: "快乐的", emoji: "😊" }
        ],
        sentences: [
          { id: "wy4a:m6:s1", en: "Can I have some sweets?",  zh: "我可以吃些糖果吗？" },
          { id: "wy4a:m6:s2", en: "Yes, you can.",            zh: "是的，可以。" },
          { id: "wy4a:m6:s3", en: "Sorry, you can't.",        zh: "对不起，不可以。" },
          { id: "wy4a:m6:s4", en: "Turn on the light, please.", zh: "请打开灯。" },
          { id: "wy4a:m6:s5", en: "Happy Halloween!",         zh: "万圣节快乐！" }
        ]
      },
      {
        id: "m7", no: 7, name: "看照片", title: "There is a horse in this photo.", emoji: "📸",
        words: [
          { en: "photo",       phon: "[ˈfoʊtoʊ]",     zh: "照片",   emoji: "📷" },
          { en: "horse",       phon: "[hɔːrs]",       zh: "马",     emoji: "🐴" },
          { en: "sheep",       phon: "[ʃiːp]",        zh: "绵羊",   emoji: "🐑" },
          { en: "face",        phon: "[feɪs]",        zh: "脸",     emoji: "👧" },
          { en: "climb",       phon: "[klaɪm]",       zh: "爬",     emoji: "🧗" },
          { en: "tree",        phon: "[triː]",        zh: "树",     emoji: "🌳" },
          { en: "ride",        phon: "[raɪd]",        zh: "骑",     emoji: "🐎" },
          { en: "bike",        phon: "[baɪk]",        zh: "自行车", emoji: "🚲" },
          { en: "vegetables",  phon: "[ˈvedʒtəbəlz]", zh: "蔬菜",   emoji: "🥬" },
          { en: "cat",         phon: "[kæt]",         zh: "猫",     emoji: "🐱" },
          { en: "have a look", phon: "[ˈhæv ə lʊk]",  zh: "看一看", emoji: "👀" }
        ],
        sentences: [
          { id: "wy4a:m7:s1", en: "There is a horse in this photo.",  zh: "这张照片里有一匹马。" },
          { id: "wy4a:m7:s2", en: "There is a sheep in this photo.",  zh: "这张照片里有一只羊。" },
          { id: "wy4a:m7:s3", en: "She is riding a horse.",           zh: "她正在骑马。" },
          { id: "wy4a:m7:s4", en: "I can't see her face.",            zh: "我看不见她的脸。" },
          { id: "wy4a:m7:s5", en: "There are twelve boys on the bike.", zh: "自行车上有十二个男孩。" }
        ]
      },
      {
        id: "m8", no: 8, name: "海南之旅", title: "We're going to visit Hainan.", emoji: "🏝️",
        words: [
          { en: "visit",    phon: "[ˈvɪzɪt]",     zh: "参观", emoji: "🧳" },
          { en: "tomorrow", phon: "[təˈmɔːroʊ]",  zh: "明天", emoji: "📅" },
          { en: "plane",    phon: "[pleɪn]",      zh: "飞机", emoji: "✈️" },
          { en: "get up",   phon: "[ˈɡet ʌp]",    zh: "起床", emoji: "⏰" },
          { en: "sea",      phon: "[siː]",        zh: "大海", emoji: "🌊" },
          { en: "swimsuit", phon: "[ˈswɪmsuːt]",  zh: "泳衣", emoji: "🩱" },
          { en: "sock",     phon: "[sɑːk]",       zh: "短袜", emoji: "🧦" },
          { en: "fish",     phon: "[fɪʃ]",        zh: "鱼",   emoji: "🐟" },
          { en: "hooray",   phon: "[hʊˈreɪ]",     zh: "万岁", emoji: "🎉" },
          { en: "kite",     phon: "[kaɪt]",       zh: "风筝", emoji: "🪁" }
        ],
        sentences: [
          { id: "wy4a:m8:s1", en: "We're going to visit Hainan tomorrow.", zh: "我们明天要去海南参观。" },
          { id: "wy4a:m8:s2", en: "We're going by plane.",                 zh: "我们要坐飞机去。" },
          { id: "wy4a:m8:s3", en: "I'm going to swim in the sea.",         zh: "我要在海里游泳。" },
          { id: "wy4a:m8:s4", en: "Amy is going to fly a kite.",           zh: "艾米要去放风筝。" },
          { id: "wy4a:m8:s5", en: "Sam is going to ride a horse.",         zh: "山姆要去骑马。" },
          { id: "wy4a:m8:s6", en: "Lingling is going to row a boat.",      zh: "玲玲要去划船。" }
        ]
      },
      {
        id: "m9", no: 9, name: "运动会", title: "Are you going to run on sports day?", emoji: "🏟️",
        words: [
          { en: "sports",       phon: "[spɔːrts]",       zh: "运动",   emoji: "🏅" },
          { en: "sports day",   phon: "[ˈspɔːrts deɪ]",  zh: "运动会", emoji: "🏟️" },
          { en: "metre",        phon: "[ˈmiːtər]",       zh: "米",     emoji: "📏" },
          { en: "good luck",    phon: "[ˈɡʊd lʌk]",      zh: "祝好运", emoji: "🍀" },
          { en: "come on",      phon: "[ˈkʌm ɑːn]",      zh: "加油",   emoji: "📣" },
          { en: "high jump",    phon: "[ˈhaɪ dʒʌmp]",    zh: "跳高",   emoji: "🦘" },
          { en: "long jump",    phon: "[ˈlɔːŋ dʒʌmp]",    zh: "跳远",   emoji: "🐸" },
          { en: "football",     phon: "[ˈfʊtbɔːl]",      zh: "足球",   emoji: "⚽" },
          { en: "basketball",   phon: "[ˈbæskətbɔːl]",   zh: "篮球",   emoji: "🏀" },
          { en: "table tennis", phon: "[ˈteɪbəl ˈtenɪs]", zh: "乒乓球", emoji: "🏓" }
        ],
        sentences: [
          { id: "wy4a:m9:s1", en: "Are you going to run on sports day?",   zh: "运动会上你要跑步吗？" },
          { id: "wy4a:m9:s2", en: "What are you going to do on sports day?", zh: "运动会上你打算做什么？" },
          { id: "wy4a:m9:s3", en: "I'm going to do the high jump.",        zh: "我打算参加跳高。" },
          { id: "wy4a:m9:s4", en: "I'm going to run the 200 metres.",      zh: "我打算跑200米。" },
          { id: "wy4a:m9:s5", en: "Good luck!",                            zh: "祝好运！" }
        ]
      },
      {
        id: "m10", no: 10, name: "过节啦", title: "We have a big family dinner.", emoji: "🧧",
        words: [
          { en: "Spring Festival",  phon: "[ˈsprɪŋ ˈfestəvəl]",   zh: "春节",   emoji: "🧧" },
          { en: "Chinese New Year", phon: "[ˌtʃaɪˈniːz ˈnuː ˈjɪr]", zh: "中国新年", emoji: "🎆" },
          { en: "family dinner",    phon: "[ˈfæməli ˈdɪnər]",      zh: "团圆饭", emoji: "🍲" },
          { en: "peanut",           phon: "[ˈpiːnʌt]",            zh: "花生",   emoji: "🥜" },
          { en: "sweet",            phon: "[swiːt]",              zh: "糖果",   emoji: "🍬" },
          { en: "have",             phon: "[hæv]",                zh: "吃，有", emoji: "🍽️" },
          { en: "eat",              phon: "[iːt]",                zh: "吃",     emoji: "😋" },
          { en: "say",              phon: "[seɪ]",                zh: "说",     emoji: "🗣️" },
          { en: "Christmas",        phon: "[ˈkrɪsməs]",           zh: "圣诞节", emoji: "🎄" },
          { en: "Christmas tree",   phon: "[ˈkrɪsməs triː]",      zh: "圣诞树", emoji: "🌲" },
          { en: "present",          phon: "[ˈprezənt]",           zh: "礼物",   emoji: "🎁" },
          { en: "merry",            phon: "[ˈmeri]",              zh: "快乐的", emoji: "😄" }
        ],
        sentences: [
          { id: "wy4a:m10:s1", en: "It's the Chinese New Year.",                          zh: "现在是中国新年。" },
          { id: "wy4a:m10:s2", en: "At the Spring Festival, we have a big family dinner.", zh: "春节我们吃团圆饭。" },
          { id: "wy4a:m10:s3", en: "We have peanuts and sweets.",                         zh: "我们有花生和糖果。" },
          { id: "wy4a:m10:s4", en: "We say, \"Happy New Year!\"",                         zh: "我们说：\"新年快乐！\"" },
          { id: "wy4a:m10:s5", en: "Merry Christmas!",                                    zh: "圣诞快乐！" },
          { id: "wy4a:m10:s6", en: "Christmas is coming.",                                zh: "圣诞节要来了。" },
          { id: "wy4a:m10:s7", en: "We have a Christmas tree.",                           zh: "我们有一棵圣诞树。" },
          { id: "wy4a:m10:s8", en: "Here's your present.",                                zh: "这是给你的礼物。" },
          { id: "wy4a:m10:s9", en: "Thank you!",                                          zh: "谢谢！" }
        ]
      }
    ]
  }
];
