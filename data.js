// ========================================================
// DATA.JS - Giáo trình Tiếng Anh Giao Tiếp Từ Con Số 0
// Dành cho người mới bắt đầu: Nghe chuẩn - Dễ đọc - Ứng dụng ngay
// ========================================================

const LESSONS_DATA = [
  {
    id: "lesson-1",
    order: "Bài 1",
    title: "Chào hỏi & Giới thiệu bản thân",
    titleEn: "Greetings & Self Introduction",
    desc: "Cách bắt chuyện tự nhiên, nói tên, quê quán và tạo ấn tượng thân thiện đầu tiên.",
    duration: "10 phút",
    badge: "Cơ bản nhất",
    phrases: [
      {
        en: "Hello, nice to meet you!",
        ipa: "/həˈloʊ, naɪs tuː miːt juː/",
        readVi: "Hơ-lâu, nai-xừ tu mít diu!",
        vi: "Xin chào, rất vui được gặp bạn!",
        tip: "Dùng khi lần đầu tiên gặp mặt ai đó."
      },
      {
        en: "My name is Nam. What's your name?",
        ipa: "/maɪ neɪm ɪz Næm. wɑːts jʊər neɪm/",
        readVi: "Mai nêm iz Nam. Oát-xừ dơ nêm?",
        vi: "Tên tôi là Nam. Tên bạn là gì?",
        tip: "Thay 'Nam' bằng tên của bạn. Nói nối âm: 'What's' có đuôi 's'."
      },
      {
        en: "I am from Vietnam.",
        ipa: "/aɪ æm frʌm ˌvjɛtˈnɑːm/",
        readVi: "Ai em phrầm Việt Nam.",
        vi: "Tôi đến từ Việt Nam.",
        tip: "Dùng để giới thiệu quê hương, đất nước của bạn."
      },
      {
        en: "How are you today?",
        ipa: "/haʊ ɑːr juː təˈdeɪ/",
        readVi: "Hao a diu tờ-đây?",
        vi: "Hôm nay bạn khỏe không / thế nào?",
        tip: "Câu hỏi thăm kinh điển sau lời chào."
      },
      {
        en: "I'm doing great, thank you! And you?",
        ipa: "/aɪm ˈduːɪŋ ɡreɪt, θæŋk juː! ænd juː/",
        readVi: "Aim đu-ing grết, thank diu! En diu?",
        vi: "Tôi rất khỏe/tuyệt, cảm ơn bạn! Còn bạn thì sao?",
        tip: "Thay vì chỉ nói 'I'm fine', câu này tự nhiên và vui tươi hơn nhiều!"
      }
    ]
  },
  {
    id: "lesson-2",
    order: "Bài 2",
    title: "Hỏi thăm & Cuộc sống thường ngày",
    titleEn: "Daily Small Talk & Hobbies",
    desc: "Nói về công việc, sở thích và những câu tán gẫu phổ biến với người nước ngoài.",
    duration: "12 phút",
    badge: "Phổ biến",
    phrases: [
      {
        en: "What do you do?",
        ipa: "/wɑːt duː juː duː/",
        readVi: "Oát đu diu đu?",
        vi: "Bạn làm nghề gì?",
        tip: "Lưu ý: Không phải hỏi 'bạn đang làm gì', mà là hỏi nghề nghiệp."
      },
      {
        en: "I work in IT / I am a student.",
        ipa: "/aɪ wɜːrk ɪn aɪ tiː / aɪ æm ə ˈstuːdənt/",
        readVi: "Ai uớc in Ai-Ti / Ai em ờ x-tiu-đần-t.",
        vi: "Tôi làm trong ngành công nghệ / Tôi là sinh viên.",
        tip: "Nói rõ ngành nghề của bạn."
      },
      {
        en: "What do you like to do in your free time?",
        ipa: "/wɑːt duː juː laɪk tuː duː ɪn jʊər friː taɪm/",
        readVi: "Oát đu diu laik tu đu in dơ phri thaim?",
        vi: "Bạn thích làm gì vào thời gian rảnh rỗi?",
        tip: "Mở đầu câu chuyện về sở thích rất dễ gần."
      },
      {
        en: "I like listening to music and watching movies.",
        ipa: "/aɪ laɪk ˈlɪsənɪŋ tuː ˈmjuːzɪk ænd ˈwɑːtʃɪŋ ˈmuːviz/",
        readVi: "Ai laik lít-sần-ning tu miu-zịch en oát-ching mu-vỳ-z.",
        vi: "Tôi thích nghe nhạc và xem phim.",
        tip: "Sau 'like' dùng động từ đuôi -ing."
      },
      {
        en: "That sounds awesome!",
        ipa: "/ðæt saʊndz ˈɔːsəm/",
        readVi: "Đát sao-n-dz o-sầm!",
        vi: "Nghe tuyệt vời quá!",
        tip: "Dùng để khen ngợi và hưởng ứng câu chuyện của đối phương."
      }
    ]
  },
  {
    id: "lesson-3",
    order: "Bài 3",
    title: "Gọi đồ uống tại Quán Cà phê",
    titleEn: "Ordering at a Coffee Shop",
    desc: "Cách tự tin order cà phê, trà, chọn size và yêu cầu mang đi hoặc uống tại chỗ.",
    duration: "15 phút",
    badge: "Thực chiến",
    phrases: [
      {
        en: "Can I get an iced Americano, please?",
        ipa: "/kæn aɪ ɡɛt ən aɪst əˌmɛrɪˈkɑːnoʊ, pliːz/",
        readVi: "Ken ai get ơn ai-xt Ơ-me-ri-ca-nô, pliz?",
        vi: "Cho tôi một ly Americano đá được không ạ?",
        tip: "Cấu trúc vàng khi gọi món: 'Can I get [món], please?'"
      },
      {
        en: "Medium size, please.",
        ipa: "/ˈmiːdiəm saɪz, pliːz/",
        readVi: "Mi-đi-ầm sai-z, pliz.",
        vi: "Cỡ vừa (size M) nhé.",
        tip: "Small (nhỏ), Medium (vừa), Large (lớn)."
      },
      {
        en: "Less sugar and less ice, please.",
        ipa: "/lɛs ˈʃʊɡər ænd lɛs aɪs, pliːz/",
        readVi: "Lét-xừ su-gờ en lét-xừ ai-xừ, pliz.",
        vi: "Ít đường và ít đá giúp tôi nhé.",
        tip: "Rất hay dùng khi đi cà phê hoặc trà sữa."
      },
      {
        en: "For here or to go?",
        ipa: "/fɔːr hɪr ɔːr tuː ɡoʊ/",
        readVi: "Pho hi-ơ o tu gâu?",
        vi: "Uống tại đây hay mang về?",
        tip: "Câu nhân viên phục vụ luôn hỏi bạn."
      },
      {
        en: "To go, please. How much is it?",
        ipa: "/tuː ɡoʊ, pliːz. haʊ mʌtʃ ɪz ɪt/",
        readVi: "Tu gâu, pliz. Hao mát-ch iz it?",
        vi: "Mang về nhé. Hết bao nhiêu tiền vậy ạ?",
        tip: "'To go' = Mang đi. 'For here' = Uống tại quán."
      }
    ]
  },
  {
    id: "lesson-4",
    order: "Bài 4",
    title: "Mua sắm & Hỏi giá tiền",
    titleEn: "Shopping & Asking Prices",
    desc: "Hỏi giá, xin thử đồ, hỏi màu sắc, kích cỡ và thương lượng nhẹ nhàng.",
    duration: "15 phút",
    badge: "Thực chiến",
    phrases: [
      {
        en: "Excuse me, how much is this shirt?",
        ipa: "/ɪkˈskjuːz miː, haʊ mʌtʃ ɪz ðɪs ʃɜːrt/",
        readVi: "Ích-x-kiu-zừ mi, hao mát-ch iz đít-xừ sơ-t?",
        vi: "Xin lỗi, chiếc áo sơ mi này giá bao nhiêu thế?",
        tip: "Bắt đầu bằng 'Excuse me' để thể hiện sự lịch sự."
      },
      {
        en: "Do you have this in a larger size?",
        ipa: "/duː juː hæv ðɪs ɪn ə ˈlɑːrdʒər saɪz/",
        readVi: "Đu diu he-v đít-xừ in ờ la-dơ sai-z?",
        vi: "Bạn có cái này cỡ to hơn không?",
        tip: "'Larger size' = cỡ lớn hơn, 'smaller size' = cỡ nhỏ hơn."
      },
      {
        en: "Can I try this on?",
        ipa: "/kæn aɪ traɪ ðɪs ɑːn/",
        readVi: "Ken ai trai đít-xừ on?",
        vi: "Tôi có thể mặc thử cái này được không?",
        tip: "'Try on' = thử đồ lên người."
      },
      {
        en: "Where is the fitting room?",
        ipa: "/wɛr ɪz ðə ˈfɪtɪŋ ruːm/",
        readVi: "Oe iz đờ phít-tinh rum?",
        vi: "Phòng thay đồ ở đâu thế bạn?",
        tip: "'Fitting room' = phòng thử quần áo."
      },
      {
        en: "Can I pay by credit card or cash?",
        ipa: "/kæn aɪ peɪ baɪ ˈkrɛdɪt kɑːrd ɔːr kæʃ/",
        readVi: "Ken ai pê bai cre-đít ca-đ o cát-sh?",
        vi: "Tôi có thể thanh toán bằng thẻ hay tiền mặt?",
        tip: "Credit card = thẻ tín dụng, Cash = tiền mặt."
      }
    ]
  },
  {
    id: "lesson-5",
    order: "Bài 5",
    title: "Hỏi đường & Di chuyển",
    titleEn: "Asking for Directions",
    desc: "Không lo bị lạc đường khi đi du lịch nước ngoài với các câu chỉ đường cơ bản.",
    duration: "12 phút",
    badge: "Du lịch",
    phrases: [
      {
        en: "Excuse me, could you tell me how to get to the bus station?",
        ipa: "/ɪkˈskjuːz miː, kʊd juː tɛl miː haʊ tuː ɡɛt tuː ðə bʌs ˈsteɪʃən/",
        readVi: "Ích-x-kiu-zừ mi, cút diu ten mi hao tu get tu đờ bớt-xừ xtây-shừn?",
        vi: "Xin lỗi, bạn có thể chỉ giúp tôi đường đến trạm xe buýt không?",
        tip: "Mẫu câu hỏi đường lịch sự và chuẩn mực nhất."
      },
      {
        en: "Go straight and turn left at the corner.",
        ipa: "/ɡoʊ streɪt ænd tɜːrn lɛft æt ðə ˈkɔːrnər/",
        readVi: "Gâu x-trết en thơn lép-t át đờ co-nờ.",
        vi: "Đi thẳng rồi rẽ trái ở góc đường nhé.",
        tip: "Go straight = đi thẳng. Turn left = rẽ trái. Turn right = rẽ phải."
      },
      {
        en: "Is it far from here?",
        ipa: "/ɪz ɪt fɑːr frʌm hɪr/",
        readVi: "Iz it pha phrầm hi-ơ?",
        vi: "Chỗ đó có xa đây không bạn?",
        tip: "'Far' = xa, 'Near' = gần."
      },
      {
        en: "It's about a 5-minute walk.",
        ipa: "/ɪts əˈbaʊt ə faɪv ˈmɪnɪt wɔːk/",
        readVi: "Ít-xừ ờ-bao-t ờ phai-v min-nit uốc.",
        vi: "Khoảng 5 phút đi bộ thôi.",
        tip: "Dùng để ước lượng thời gian đi bộ."
      }
    ]
  }
];

// CHAT SCENARIOS
const CHAT_SCENARIOS = {
  intro: {
    title: "Chào hỏi & Làm quen",
    initialMessages: [
      {
        sender: "bot",
        en: "Hello there! Welcome! My name is Alex. What's your name?",
        vi: "Xin chào bạn! Chào mừng bạn! Tôi tên là Alex. Tên bạn là gì nhỉ?"
      }
    ],
    replies: [
      {
        en: "Hi Alex! My name is Nam. Nice to meet you!",
        vi: "Chào Alex! Tên tôi là Nam. Rất vui được gặp bạn!"
      },
      {
        en: "Hello Alex, I'm Linh. How are you doing today?",
        vi: "Chào Alex, tôi là Linh. Hôm nay bạn thế nào?"
      },
      {
        en: "Hi! I am from Vietnam. I am learning English.",
        vi: "Chào bạn! Tôi đến từ Việt Nam. Tôi đang học tiếng Anh."
      }
    ],
    responses: {
      default: {
        en: "That's wonderful! It's so nice to meet you. Where do you live right now?",
        vi: "Tuyệt quá! Rất vui được làm quen với bạn. Hiện tại bạn đang sống ở đâu thế?",
        nextReplies: [
          { en: "I live in Hanoi, Vietnam.", vi: "Tôi sống ở Hà Nội, Việt Nam." },
          { en: "I live in Ho Chi Minh City.", vi: "Tôi sống ở Thành phố Hồ Chí Minh." },
          { en: "I live in Da Nang city. It is very beautiful!", vi: "Tôi sống ở Đà Nẵng. Thành phố này rất đẹp!" }
        ]
      }
    }
  },
  coffee: {
    title: "Gọi cà phê",
    initialMessages: [
      {
        sender: "bot",
        en: "Good morning! Welcome to Coffee House. What can I get for you today?",
        vi: "Chào buổi sáng! Chào mừng đến với Coffee House. Tôi có thể lấy món gì cho bạn hôm nay ạ?"
      }
    ],
    replies: [
      {
        en: "Can I get an iced Latte, please?",
        vi: "Cho tôi một ly Latte đá được không ạ?"
      },
      {
        en: "I'd like a hot cappuccino with less sugar.",
        vi: "Tôi muốn một ly Cappuccino nóng, ít đường."
      },
      {
        en: "Do you have fresh fruit juice or tea?",
        vi: "Ở đây bạn có nước ép trái cây tươi hoặc trà không?"
      }
    ],
    responses: {
      default: {
        en: "Sure thing! What size would you like: Small, Medium, or Large? And is it for here or to go?",
        vi: "Dạ được chứ! Bạn chọn size nào ạ: Nhỏ, Vừa hay Lớn? Và bạn dùng tại quán hay mang về?",
        nextReplies: [
          { en: "Medium size, to go, please!", vi: "Size vừa, mang về giúp tôi nhé!" },
          { en: "Small size, for here, please. How much is it?", vi: "Size nhỏ, uống tại đây. Hết bao nhiêu tiền ạ?" }
        ]
      }
    }
  },
  shopping: {
    title: "Mua sắm & Hỏi giá",
    initialMessages: [
      {
        sender: "bot",
        en: "Hi! Can I help you find anything today?",
        vi: "Chào bạn! Tôi có thể giúp bạn tìm món đồ nào hôm nay không?"
      }
    ],
    replies: [
      {
        en: "Excuse me, how much is this jacket?",
        vi: "Xin lỗi, chiếc áo khoác này giá bao nhiêu thế?"
      },
      {
        en: "I'm looking for a white T-shirt.",
        vi: "Tôi đang tìm một chiếc áo phông trắng."
      },
      {
        en: "Can I try this pair of shoes on?",
        vi: "Tôi có thể đi thử đôi giày này được không?"
      }
    ],
    responses: {
      default: {
        en: "Of course! It's $35. We also have a 10% discount today. Would you like to try it on in the fitting room?",
        vi: "Dạ được chứ! Món này 35 đô. Hôm nay đang có giảm giá 10% nữa. Bạn có muốn thử trong phòng thay đồ không?",
        nextReplies: [
          { en: "Yes, please! Where is the fitting room?", vi: "Có, phòng thử đồ ở đâu thế bạn?" },
          { en: "Great, I'll take it. Can I pay by card?", vi: "Tuyệt, tôi lấy món này. Tôi quẹt thẻ được không?" }
        ]
      }
    }
  },
  directions: {
    title: "Hỏi đường",
    initialMessages: [
      {
        sender: "bot",
        en: "Hello! You look a bit lost. Can I help you with directions?",
        vi: "Xin chào! Trông bạn có vẻ hơi lạc đường. Tôi có thể chỉ đường giúp bạn không?"
      }
    ],
    replies: [
      {
        en: "Excuse me, how do I get to the nearest metro station?",
        vi: "Xin lỗi, làm sao để tôi đến trạm tàu điện ngầm gần nhất?"
      },
      {
        en: "Could you tell me where the supermarket is?",
        vi: "Bạn có thể chỉ giúp tôi siêu thị ở đâu không?"
      },
      {
        en: "Is the central park far from here?",
        vi: "Công viên trung tâm có xa đây không bạn?"
      }
    ],
    responses: {
      default: {
        en: "Just go straight for two blocks, then turn right. It's right next to the bank. It takes only 5 minutes!",
        vi: "Bạn cứ đi thẳng qua 2 ngã tư, sau đó rẽ phải. Nó nằm ngay cạnh ngân hàng. Chỉ mất 5 phút thôi!",
        nextReplies: [
          { en: "Thank you so much! Have a great day!", vi: "Cảm ơn bạn rất nhiều! Chúc một ngày tốt lành!" },
          { en: "Got it! Thanks for your help!", vi: "Tôi hiểu rồi! Cảm ơn bạn đã giúp đỡ!" }
        ]
      }
    }
  }
};

// SPEAKING PRACTICE CHALLENGES
const SPEAKING_ITEMS = [
  {
    category: "CHỦ ĐỀ: CHÀO HỎI & LÀM QUEN",
    en: "Nice to meet you!",
    ipa: "/naɪs tuː miːt juː/",
    readVi: "Nai-xừ tu mít diu!",
    vi: "Rất vui được gặp bạn!"
  },
  {
    category: "CHỦ ĐỀ: CHÀO HỎI & LÀM QUEN",
    en: "How are you doing today?",
    ipa: "/haʊ ɑːr juː ˈduːɪŋ təˈdeɪ/",
    readVi: "Hao a diu đu-ing tờ-đây?",
    vi: "Hôm nay bạn thế nào rồi?"
  },
  {
    category: "CHỦ ĐỀ: QUÁN CÀ PHÊ",
    en: "Can I get an iced Americano, please?",
    ipa: "/kæn aɪ ɡɛt ən aɪst əˌmɛrɪˈkɑːnoʊ, pliːz/",
    readVi: "Ken ai get ơn ai-xt Ơ-me-ri-ca-nô, pliz?",
    vi: "Cho tôi một ly Americano đá nhé?"
  },
  {
    category: "CHỦ ĐỀ: MUA SẮM",
    en: "Excuse me, how much is this?",
    ipa: "/ɪkˈskjuːz miː, haʊ mʌtʃ ɪz ðɪs/",
    readVi: "Ích-x-kiu-zừ mi, hao mát-ch iz đít-xừ?",
    vi: "Xin lỗi, cái này giá bao nhiêu tiền vậy?"
  },
  {
    category: "CHỦ ĐỀ: KẾT THÚC CUỘC NÓI CHUYỆN",
    en: "Have a wonderful day!",
    ipa: "/hæv ə ˈwʌndərfəl deɪ/",
    readVi: "He-v ờ uân-đơ-phồ đây!",
    vi: "Chúc bạn một ngày tuyệt vời nhé!"
  }
];

// FLASHCARDS
const FLASHCARDS_ITEMS = [
  {
    word: "How's it going?",
    phonetic: "/haʊz ɪt ˈɡoʊ.ɪŋ/",
    meaning: "Dạo này thế nào rồi? (Thân mật)",
    easyRead: "Hao zit gô-ing?",
    category: "CHÀO HỎI HÀNG NGÀY",
    example: "Hey Tom, how's it going? - Pretty good!"
  },
  {
    word: "Nice to meet you",
    phonetic: "/naɪs tuː miːt juː/",
    meaning: "Rất vui được gặp bạn (Gặp lần đầu)",
    easyRead: "Nai-xừ tu mít diu",
    category: "LÀM QUEN",
    example: "I'm Alex. - Nice to meet you, Alex!"
  },
  {
    word: "Could you repeat that?",
    phonetic: "/kʊd juː rɪˈpiːt ðæt/",
    meaning: "Bạn có thể nói lại câu đó được không?",
    easyRead: "Cút diu ri-pít đát?",
    category: "KHI NGHE CHƯA KỊP",
    example: "Sorry, could you repeat that please?"
  },
  {
    word: "What do you recommend?",
    phonetic: "/wɑːt duː juː ˌrɛkəˈmɛnd/",
    meaning: "Bạn gợi ý món nào ngon / đáng thử?",
    easyRead: "Oát đu diu re-cờ-men-đ?",
    category: "ĐI ĂN UỐNG",
    example: "I'm not sure. What do you recommend?"
  },
  {
    word: "Keep the change",
    phonetic: "/kiːp ðə tʃeɪndʒ/",
    meaning: "Cứ giữ lại tiền thừa nhé! (Tip)",
    easyRead: "Kíp đờ chên-dʒ",
    category: "THANH TOÁN",
    example: "Here is 20 dollars. Keep the change!"
  },
  {
    word: "Take care and see you later!",
    phonetic: "/teɪk kɛr ænd siː juː ˈleɪtər/",
    meaning: "Bảo trọng và hẹn gặp lại sau nhé!",
    easyRead: "Tếc khe en si diu lây-tờ!",
    category: "TẠM BIỆT",
    example: "I have to go now. Take care and see you later!"
  }
];
