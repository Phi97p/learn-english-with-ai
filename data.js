// ========================================================
// DATA.JS - Giáo trình Tiếng Anh Theo Kế Hoạch Của Bạn
// Unit 1: My New School (Bạn Mới & Năm Học Mới - Tiếng Anh 6)
// ========================================================

const LESSONS_DATA = [
  {
    id: "unit-1-my-new-school",
    order: "Unit 1",
    title: "Bạn Mới & Năm Học Mới",
    titleEn: "My New School - Friends & Uniforms",
    desc: "Làm quen với bạn học mới (Duy), trò chuyện về môn học mới, cặp sách và đồng phục trường cùng Vy & Phong.",
    duration: "15 phút",
    badge: "SGK Lớp 6",
    phrases: [
      {
        en: "Hi, Phong. Are you ready? - Just a minute.",
        ipa: "/haɪ, Phong. ɑːr juː ˈrɛdi? - dʒʌst ə ˈmɪnɪt/",
        readVi: "Hai, Phong. A diu ré-đi? - Dchất ơ mí-nịt.",
        vi: "Chào Phong. Bạn đã sẵn sàng chưa? - Chờ mình một phút nhé.",
        tip: "'Are you ready?' là câu hỏi kinh điển khi chuẩn bị đi đâu đó."
      },
      {
        en: "Oh, this is Duy, my new friend.",
        ipa: "/oʊ, ðɪs ɪz Duːi, maɪ njuː frɛnd/",
        readVi: "Ôu, đít-x iz Duy, mai niu phrèn-d.",
        vi: "Ồ, đây là Duy, bạn mới của mình.",
        tip: "Cấu trúc giới thiệu người khác: 'This is [Tên], my [mối quan hệ]'."
      },
      {
        en: "Hi, Duy. Nice to meet you.",
        ipa: "/haɪ, Duːi. naɪs tuː miːt juː/",
        readVi: "Hai, Duy. Nai-xừ tu mít diu.",
        vi: "Chào Duy. Rất vui được gặp bạn.",
        tip: "Câu chào lịch sự khi gặp người mới lần đầu tiên."
      },
      {
        en: "I live near here, and we go to the same school!",
        ipa: "/aɪ lɪv nɪr hɪr, ænd wiː ɡoʊ tuː ðə seɪm skuːl/",
        readVi: "Ai li-v ni-ơ hi-ơ, en ui gâu tu đờ xêm x-cul!",
        vi: "Mình sống ở gần đây, và chúng ta học cùng trường đấy!",
        tip: "'Live near here' = sống gần đây. 'The same school' = học chung trường."
      },
      {
        en: "Hmm, your school bag looks heavy.",
        ipa: "/hmm, jʊər skuːl bæɡ lʊks ˈhɛvi/",
        readVi: "Hmm, dơ x-cul béc-g lúc-x hé-vi.",
        vi: "Hmm, cặp sách của bạn trông có vẻ nặng thế.",
        tip: "'Look + tính từ' = trông có vẻ như thế nào."
      },
      {
        en: "Yes! I have new books, and we have new subjects to study.",
        ipa: "/jɛs! aɪ hæv njuː bʊks, ænd wiː hæv njuː ˈsʌbdʒɪkts tuː ˈstʌdi/",
        readVi: "Dét! Ai he-v niu búc-x, en ui he-v niu xắp-dzịt-k-x tu x-tá-đi.",
        vi: "Đúng rồi! Mình có sách mới, và chúng ta có nhiều môn học mới để học.",
        tip: "'Subject' = môn học. 'Study' = học tập."
      },
      {
        en: "And a new uniform, Duy! You look smart!",
        ipa: "/ænd ə njuː ˈjuːnɪfɔːrm, Duːi! juː lʊk smɑːrt/",
        readVi: "En ờ niu diu-ni-phoom, Duy! Diu lúc x-mát!",
        vi: "Và cả bộ đồng phục mới nữa này, Duy! Trông bạn bảnh bao lắm!",
        tip: "'Smart' trong ngữ cảnh trang phục nghĩa là sáng sủa, bảnh bao, tươm tất."
      },
      {
        en: "We always look smart in our uniforms.",
        ipa: "/wiː ˈɔːlweɪz lʊk smɑːrt ɪn ˈaʊər ˈjuːnɪfɔːrmz/",
        readVi: "Ui ô-uây-z lúc x-mát in ao-ơ diu-ni-phom-z.",
        vi: "Chúng ta luôn trông bảnh bao trong bộ đồng phục mà.",
        tip: "Cấu trúc: 'look + adj + in + [trang phục]'."
      },
      {
        en: "Let me put on my uniform. Then we can go.",
        ipa: "/lɛt miː pʊt ɑːn maɪ ˈjuːnɪfɔːrm. ðɛn wiː kæn ɡoʊ/",
        readVi: "Lét mi pút on mai diu-ni-phom. Đen ui ken gâu.",
        vi: "Để mình mặc đồng phục vào đã. Rồi chúng ta có thể đi.",
        tip: "'Put on' = mặc vào, đeo vào (động tác mặc trang phục)."
      }
    ]
  }
];

// ========================================================
// CHAT SCENARIOS - ĐOẠN HỘI THOẠI ĐA LƯỢT (ROLEPLAY)
// ========================================================
const CHAT_SCENARIOS = {
  my_new_school: {
    id: "my_new_school",
    title: "1. Bạn Mới & Năm Học Mới (My New School - Lớp 6)",
    desc: "Đoạn hội thoại làm quen bạn mới Duy và chuẩn bị đến trường cùng Vy & Phong (SGK Tiếng Anh 6 - Unit 1)",
    initialMessages: [
      {
        sender: "bot",
        en: "(Loud knock) Hi, Phong. Are you ready?",
        vi: "(Tiếng gõ cửa lớn) Chào Phong. Bạn đã sẵn sàng chưa?"
      }
    ],
    initialReplies: [
      { en: "Hi, Vy. Just a minute.", vi: "Chào Vy. Chờ mình một phút nhé." },
      { en: "Hi, Vy. I'm almost ready!", vi: "Chào Vy. Mình gần xong rồi nè!" }
    ],
    steps: [
      {
        // Lượt 1: Vy giới thiệu bạn mới Duy
        botReply: {
          en: "Oh, this is Duy, my new friend.",
          vi: "Ồ, đây là Duy, bạn mới của mình."
        },
        replies: [
          { en: "Hi, Duy. Nice to meet you.", vi: "Chào Duy. Rất vui được gặp bạn." },
          { en: "Hello Duy. Great to meet you!", vi: "Chào Duy. Rất vui được biết bạn!" }
        ]
      },
      {
        // Lượt 2: Duy chào và nói về trường học
        botReply: {
          en: "Hi, Phong. I live near here, and we go to the same school!",
          vi: "Chào Phong. Mình sống ở gần đây, và chúng ta học cùng trường đấy!"
        },
        replies: [
          { en: "Good. Hmm, your school bag looks heavy.", vi: "Tuyệt quá. Hmm, cặp sách của bạn trông có vẻ nặng thế." },
          { en: "Awesome! But your backpack looks really heavy.", vi: "Tuyệt vời! Nhưng ba lô của bạn trông nặng thật đấy." }
        ]
      },
      {
        // Lượt 3: Duy giải thích về sách và môn học mới
        botReply: {
          en: "Yes! I have new books, and we have new subjects to study.",
          vi: "Đúng rồi! Mình có sách mới, và chúng ta có nhiều môn học mới để học."
        },
        replies: [
          { en: "And a new uniform, Duy! You look smart!", vi: "Và cả bộ đồng phục mới nữa này, Duy! Trông bạn bảnh bao lắm!" },
          { en: "You have a new uniform too! You look very smart!", vi: "Bạn cũng có đồng phục mới nữa! Trông bạn rất bảnh bao!" }
        ]
      },
      {
        // Lượt 4: Duy cảm ơn về lời khen đồng phục
        botReply: {
          en: "Thanks, Phong. We always look smart in our uniforms.",
          vi: "Cảm ơn Phong. Chúng ta luôn trông bảnh bao trong bộ đồng phục mà."
        },
        replies: [
          { en: "Let me put on my uniform. Then we can go.", vi: "Để mình mặc đồng phục vào đã. Rồi chúng ta có thể đi." },
          { en: "Wait a second, let me wear my uniform, then we can go together.", vi: "Chờ một chút, để mình mặc đồng phục rồi chúng mình cùng đi nhé." }
        ]
      },
      {
        // Lượt 5: Kết thúc đoạn hội thoại
        botReply: {
          en: "🎉 Great! Take your time, we will wait for you outside. Have a wonderful first day at school!",
          vi: "🎉 Tuyệt vời! Cứ từ từ nhé, bọn mình chờ bạn ở bên ngoài. Chúc bạn có một ngày đầu năm học thật tuyệt vời!"
        },
        replies: [
          { en: "Let's practice this scenario one more time!", vi: "Hãy cùng luyện lại tình huống này một lần nữa!" },
          { en: "Thanks! I'm ready now, let's go to school!", vi: "Cảm ơn các bạn! Giờ mình sẵn sàng rồi, cùng đi học thôi!" }
        ]
      }
    ]
  }
};

// ========================================================
// SPEAKING PRACTICE CHALLENGES (SHADOWING LAB)
// ========================================================
const SPEAKING_ITEMS = [
  {
    category: "BẠN MỚI & TRƯỜNG HỌC (SGK 6)",
    en: "Hi, Phong. Are you ready? - Just a minute.",
    ipa: "/haɪ, Phong. ɑːr juː ˈrɛdi? - dʒʌst ə ˈmɪnɪt/",
    readVi: "Hai, Phong. A diu ré-đi? - Dchất ơ mí-nịt.",
    vi: "Chào Phong. Bạn đã sẵn sàng chưa? - Chờ mình một phút nhé."
  },
  {
    category: "BẠN MỚI & TRƯỜNG HỌC (SGK 6)",
    en: "Oh, this is Duy, my new friend.",
    ipa: "/oʊ, ðɪs ɪz Duːi, maɪ njuː frɛnd/",
    readVi: "Ôu, đít-x iz Duy, mai niu phrèn-d.",
    vi: "Ồ, đây là Duy, bạn mới của mình."
  },
  {
    category: "BẠN MỚI & TRƯỜNG HỌC (SGK 6)",
    en: "Hi, Duy. Nice to meet you.",
    ipa: "/haɪ, Duːi. naɪs tuː miːt juː/",
    readVi: "Hai, Duy. Nai-xừ tu mít diu.",
    vi: "Chào Duy. Rất vui được gặp bạn."
  },
  {
    category: "BẠN MỚI & TRƯỜNG HỌC (SGK 6)",
    en: "I live near here, and we go to the same school!",
    ipa: "/haɪ, Phong. aɪ lɪv nɪr hɪr, ænd wiː ɡoʊ tuː ðə seɪm skuːl/",
    readVi: "Hai Phong. Ai li-v ni-ơ hi-ơ, en ui gâu tu đờ xêm x-cul!",
    vi: "Chào Phong. Mình sống ở gần đây, và chúng ta học cùng trường đấy!"
  },
  {
    category: "BẠN MỚI & TRƯỜNG HỌC (SGK 6)",
    en: "Hmm, your school bag looks heavy.",
    ipa: "/hmm, jʊər skuːl bæɡ lʊks ˈhɛvi/",
    readVi: "Hmm, dơ x-cul béc-g lúc-x hé-vi.",
    vi: "Hmm, cặp sách của bạn trông có vẻ nặng thế."
  },
  {
    category: "BẠN MỚI & TRƯỜNG HỌC (SGK 6)",
    en: "Yes! I have new books, and we have new subjects to study.",
    ipa: "/jɛs! aɪ hæv njuː bʊks, ænd wiː hæv njuː ˈsʌbdʒɪkts tuː ˈstʌdi/",
    readVi: "Dét! Ai he-v niu búc-x, en ui he-v niu xắp-dzịt-k-x tu x-tá-đi.",
    vi: "Đúng rồi! Mình có sách mới, và chúng ta có nhiều môn học mới để học."
  },
  {
    category: "BẠN MỚI & TRƯỜNG HỌC (SGK 6)",
    en: "And a new uniform, Duy! You look smart!",
    ipa: "/ænd ə njuː ˈjuːnɪfɔːrm, Duːi! juː lʊk smɑːrt/",
    readVi: "En ờ niu diu-ni-phoom, Duy! Diu lúc x-mát!",
    vi: "Và cả bộ đồng phục mới nữa này, Duy! Trông bạn bảnh bao lắm!"
  },
  {
    category: "BẠN MỚI & TRƯỜNG HỌC (SGK 6)",
    en: "We always look smart in our uniforms.",
    ipa: "/wiː ˈɔːlweɪz lʊk smɑːrt ɪn ˈaʊər ˈjuːnɪfɔːrmz/",
    readVi: "Ui ô-uây-z lúc x-mát in ao-ơ diu-ni-phom-z.",
    vi: "Chúng ta luôn trông bảnh bao trong bộ đồng phục mà."
  },
  {
    category: "BẠN MỚI & TRƯỜNG HỌC (SGK 6)",
    en: "Let me put on my uniform. Then we can go.",
    ipa: "/lɛt miː pʊt ɑːn maɪ ˈjuːnɪfɔːrm. ðɛn wiː kæn ɡoʊ/",
    readVi: "Lét mi pút on mai diu-ni-phom. Đen ui ken gâu.",
    vi: "Để mình mặc đồng phục vào đã. Rồi chúng ta có thể đi."
  }
];

// ========================================================
// FLASHCARDS - SỔ TAY TỪ VỰNG & MẪU CÂU THÔNG DỤNG
// ========================================================
const FLASHCARDS_ITEMS = [
  {
    word: "Ready",
    phonetic: "/ˈrɛd.i/",
    meaning: "Sẵn sàng (Are you ready?)",
    easyRead: "Ré-đi",
    category: "TỪ VỰNG SGK 6",
    example: "Are you ready? - Yes, I am ready!"
  },
  {
    word: "Just a minute",
    phonetic: "/dʒʌst ə ˈmɪn.ɪt/",
    meaning: "Chờ một phút / Một lát nhé",
    easyRead: "Dchất ơ mí-nịt",
    category: "GIAO TIẾP HÀNG NGÀY",
    example: "Just a minute, let me get my bag."
  },
  {
    word: "School bag",
    phonetic: "/ˈskuːl bæɡ/",
    meaning: "Cặp sách / Ba lô đi học",
    easyRead: "S-cul béc-g",
    category: "DỤNG CỤ HỌC TẬP",
    example: "Your school bag looks heavy today."
  },
  {
    word: "Heavy",
    phonetic: "/ˈhɛv.i/",
    meaning: "Nặng (Trọng lượng)",
    easyRead: "Hé-vi",
    category: "TÍNH TỪ",
    example: "This box is very heavy."
  },
  {
    word: "Subject",
    phonetic: "/ˈsʌb.dʒɪkt/",
    meaning: "Môn học tại trường",
    easyRead: "Xắp-dzịt-k-t",
    category: "TRƯỜNG HỌC",
    example: "We have new subjects to study this year."
  },
  {
    word: "Uniform",
    phonetic: "/ˈjuː.nɪ.fɔːrm/",
    meaning: "Bộ đồng phục",
    easyRead: "Diu-ni-phom",
    category: "TRANG PHỤC",
    example: "We always look smart in our uniforms."
  },
  {
    word: "Look smart",
    phonetic: "/lʊk smɑːrt/",
    meaning: "Trông bảnh bao, sáng sủa, tươm tất",
    easyRead: "Lúc x-mát",
    category: "KHEN NGỢI",
    example: "You look very smart in that shirt!"
  },
  {
    word: "Put on",
    phonetic: "/pʊt ɑːn/",
    meaning: "Mặc vào, đeo vào (quần áo, giày, mũ...)",
    easyRead: "Pút on",
    category: "CỤM ĐỘNG TỪ",
    example: "Let me put on my uniform. Then we can go."
  }
];

// ========================================================
// TỪ VỰNG THEO TÌNH HUỐNG (VOCABULARY SPEAKING LAB)
// ========================================================
const VOCAB_SCENARIOS_DATA = {
  my_new_school: {
    title: "Unit 1: Bạn Mới & Năm Học Mới (My New School)",
    icon: "🏫",
    words: [
      { word: "Ready", ipa: "/ˈrɛdi/", readVi: "Ré-đi", vi: "Sẵn sàng", tip: "Nhấn âm đầu 'Re'" },
      { word: "Friend", ipa: "/frɛnd/", readVi: "Phrèn-d", vi: "Bạn bè", tip: "Bật nhẹ âm /d/ ở cuối" },
      { word: "Minute", ipa: "/ˈmɪnɪt/", readVi: "Mí-nịt", vi: "Phút / Chốc lát", tip: "Nhấn âm đầu, bật /t/" },
      { word: "School bag", ipa: "/ˈskuːl bæɡ/", readVi: "S-cu-l béc-g", vi: "Cặp sách / Ba lô", tip: "Âm /uː/ kéo dài" },
      { word: "Heavy", ipa: "/ˈhɛvi/", readVi: "Hé-vi", vi: "Nặng", tip: "Nhấn mạnh âm 'He'" },
      { word: "Subject", ipa: "/ˈsʌbdʒɪkt/", readVi: "Xắp-dzịt-k-t", vi: "Môn học", tip: "Trọng âm âm 1, bật /kt/ cuối" },
      { word: "Study", ipa: "/ˈstʌdi/", readVi: "X-tá-đi", vi: "Học tập", tip: "Bắt đầu bằng cụm /st/" },
      { word: "Uniform", ipa: "/ˈjuːnɪfɔːrm/", readVi: "Diu-ni-phoom", vi: "Bộ đồng phục", tip: "Nhấn âm đầu 'U'" },
      { word: "Smart", ipa: "/smɑːrt/", readVi: "S-mát-t", vi: "Bảnh bao / Sáng sủa", tip: "Bật /t/ gió ở cuối" },
      { word: "Put on", ipa: "/pʊt ɑːn/", readVi: "Pút on", vi: "Mặc vào / Đeo vào", tip: "Nối âm: 'pu-ton'" }
    ]
  }
};
