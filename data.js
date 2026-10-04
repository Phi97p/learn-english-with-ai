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

// CHAT SCENARIOS - ĐOẠN HỘI THOẠI ĐA LƯỢT HOÀN CHỈNH TỪ A ĐẾN Z
const CHAT_SCENARIOS = {
  intro: {
    title: "1. Chào hỏi & Làm quen (A-Z)",
    initialMessages: [
      {
        sender: "bot",
        en: "Hello there! Welcome! My name is Alex. What's your name?",
        vi: "Xin chào bạn! Chào mừng bạn! Tôi tên là Alex. Tên bạn là gì nhỉ?"
      }
    ],
    initialReplies: [
      { en: "Hi Alex! My name is Phi. Nice to meet you!", vi: "Chào Alex! Tên tôi là Phi. Rất vui được gặp bạn!" },
      { en: "Hello Alex! I am Nam. Great to meet you!", vi: "Chào Alex! Tôi là Nam. Rất vui được gặp bạn!" },
      { en: "Good morning Alex! I'm happy to practice English with you.", vi: "Chào buổi sáng Alex! Tôi rất vui được luyện tiếng Anh với bạn." }
    ],
    steps: [
      {
        // Lượt 1: Hỏi quê quán & nơi sống
        botReply: {
          en: "It's so wonderful to meet you! Where are you from, and where do you live right now?",
          vi: "Rất tuyệt khi được làm quen với bạn! Bạn đến từ đâu, và hiện tại bạn đang sống ở đâu thế?"
        },
        replies: [
          { en: "I am from Vietnam. I live in Hanoi, the capital city.", vi: "Tôi đến từ Việt Nam. Tôi sống ở Hà Nội, thủ đô." },
          { en: "I live in Ho Chi Minh City, Vietnam. It is a very lively and busy city.", vi: "Tôi sống ở TP. Hồ Chí Minh. Đó là một thành phố rất sôi động và náo nhiệt." },
          { en: "I come from Da Nang, Vietnam. It is famous for beautiful beaches.", vi: "Tôi đến từ Đà Nẵng, Việt Nam. Nơi đây rất nổi tiếng với các bãi biển đẹp." }
        ]
      },
      {
        // Lượt 2: Hỏi công việc / học tập
        botReply: {
          en: "Vietnam is such a wonderful country with delicious food and friendly people! What do you do for work or study?",
          vi: "Việt Nam là một đất nước thật tuyệt vời với ẩm thực ngon và con người thân thiện! Bạn đang làm công việc gì hay đang đi học thế?"
        },
        replies: [
          { en: "I work in IT as a software developer.", vi: "Tôi làm việc trong ngành CNTT với vai trò lập trình viên." },
          { en: "I work as an office worker at a company.", vi: "Tôi là nhân viên văn phòng tại một công ty." },
          { en: "I run my own business.", vi: "Tôi đang tự kinh doanh riêng." },
          { en: "I am a student at university.", vi: "Tôi đang là sinh viên đại học." }
        ]
      },
      {
        // Lượt 3: Hỏi sở thích lúc rảnh rỗi
        botReply: {
          en: "That sounds like a very interesting and rewarding job! What do you usually like to do in your free time?",
          vi: "Nghe có vẻ là một công việc rất thú vị và ý nghĩa đấy! Bạn thường thích làm gì vào thời gian rảnh rỗi?"
        },
        replies: [
          { en: "In my free time, I love listening to music, watching movies and reading books.", vi: "Vào thời gian rảnh, tôi thích nghe nhạc, xem phim và đọc sách." },
          { en: "I enjoy drinking coffee with good friends and going for a walk.", vi: "Tôi thích đi cà phê với bạn thân và đi dạo." },
          { en: "I like working out at the gym, playing sports and traveling.", vi: "Tôi thích tập gym, chơi thể thao và đi du lịch." },
          { en: "I spend my free time practicing English speaking with AI.", vi: "Tôi dành thời gian rảnh để luyện nói tiếng Anh cùng AI." }
        ]
      },
      {
        // Lượt 4: Hỏi mục tiêu học tiếng Anh
        botReply: {
          en: "Those are wonderful hobbies! By the way, your English is quite good. Why do you want to learn English?",
          vi: "Đó đều là những sở thích tuyệt vời! Nhân tiện, tiếng Anh của bạn khá tốt đấy. Tại sao bạn lại muốn học tiếng Anh?"
        },
        replies: [
          { en: "I want to speak English fluently to get better career opportunities.", vi: "Tôi muốn nói tiếng Anh lưu loát để có cơ hội việc làm tốt hơn." },
          { en: "I want to travel abroad and chat with people worldwide without fear.", vi: "Tôi muốn đi du lịch nước ngoài và tự tin nói chuyện với bạn bè quốc tế." },
          { en: "I want to understand English movies and tech documents easily.", vi: "Tôi muốn hiểu phim ảnh và đọc tài liệu kỹ thuật tiếng Anh dễ dàng." }
        ]
      },
      {
        // Lượt 5: Động viên & Lời kết
        botReply: {
          en: "You have an inspiring goal! If you keep practicing a little bit every day, you will definitely achieve it. Thank you for this delightful chat today!",
          vi: "Bạn có một mục tiêu rất truyền cảm hứng! Nếu tiếp tục luyện tập một chút mỗi ngày, chắc chắn bạn sẽ đạt được. Cảm ơn bạn rất nhiều vì buổi trò chuyện hôm nay!"
        },
        replies: [
          { en: "Thank you so much, Alex! I really enjoyed practicing with you.", vi: "Cảm ơn Alex rất nhiều! Tôi thực sự rất thích luyện tập cùng bạn." },
          { en: "Thanks for your great encouragement! See you tomorrow for our next lesson!", vi: "Cảm ơn lời động viên của bạn! Hẹn gặp lại bạn vào ngày mai nhé!" },
          { en: "Have a wonderful day ahead, Alex! Goodbye!", vi: "Chúc bạn một ngày tuyệt vời nhé, Alex! Tạm biệt!" }
        ]
      },
      {
        // Lượt 6: Chúc mừng hoàn thành toàn bộ hội thoại
        botReply: {
          en: "🎉 Outstanding! You have successfully completed a full 6-turn English conversation from A to Z! Would you like to practice again or explore another scenario?",
          vi: "🎉 Xuất sắc! Bạn vừa hoàn thành trọn vẹn một đoạn hội thoại 6 lượt đàm thoại từ A đến Z! Bạn muốn luyện lại để phản xạ tự nhiên hơn hay thử chủ đề khác?"
        },
        replies: [
          { en: "Let's practice this scenario one more time!", vi: "Hãy cùng luyện lại tình huống này một lần nữa!" },
          { en: "I want to try ordering coffee at Coffee House!", vi: "Tôi muốn thử tình huống gọi cà phê tại quán!" }
        ]
      }
    ]
  },
  coffee: {
    title: "2. Gọi đồ uống ở quán Coffee (A-Z)",
    initialMessages: [
      {
        sender: "bot",
        en: "Good morning! Welcome to Central Coffee House. What can I get started for you today?",
        vi: "Chào buổi sáng! Chào mừng đến với quán Central Coffee House. Tôi có thể lấy món gì cho bạn hôm nay ạ?"
      }
    ],
    initialReplies: [
      { en: "Can I get an iced Latte, please?", vi: "Cho tôi một ly Latte đá được không ạ?" },
      { en: "I'd like a hot Cappuccino, please.", vi: "Tôi muốn một ly Cappuccino nóng nhé." },
      { en: "Do you have fresh fruit juice or iced peach tea?", vi: "Ở đây bạn có nước ép trái cây tươi hoặc trà đào đá không?" }
    ],
    steps: [
      {
        // Lượt 1: Hỏi kích cỡ
        botReply: {
          en: "Great choice! What size would you like today: Small, Medium, or Large?",
          vi: "Lựa chọn tuyệt vời! Bạn muốn chọn kích cỡ nào ạ: Nhỏ (Small), Vừa (Medium) hay Lớn (Large)?"
        },
        replies: [
          { en: "Medium size would be perfect, thank you!", vi: "Cỡ vừa (Medium) là chuẩn nhất, cảm ơn bạn!" },
          { en: "A Large size, please. I need a lot of energy today!", vi: "Cho tôi cỡ lớn (Large) nhé. Hôm nay tôi cần thật nhiều năng lượng!" },
          { en: "Just a Small size for me, please.", vi: "Cho tôi cỡ nhỏ (Small) thôi nhé." }
        ]
      },
      {
        // Lượt 2: Hỏi lượng đường và loại sữa
        botReply: {
          en: "Got it! How would you like your sugar and milk? We have regular whole milk, oat milk, and soy milk.",
          vi: "Tôi hiểu rồi! Bạn muốn độ ngọt và loại sữa thế nào ạ? Chúng tôi có sữa tươi thông thường, sữa yến mạch và sữa đậu nành."
        },
        replies: [
          { en: "With oat milk and less sugar, please.", vi: "Dùng sữa yến mạch và ít đường giúp tôi nhé." },
          { en: "Regular milk with normal sugar is fine.", vi: "Sữa tươi bình thường và lượng đường vừa phải là được rồi." },
          { en: "No sugar and no milk, just black coffee, please.", vi: "Không đường và không sữa, chỉ cà phê đen nguyên chất thôi nhé." }
        ]
      },
      {
        // Lượt 3: Hỏi dùng tại quán hay mang về & gợi ý bánh ngọt
        botReply: {
          en: "Understood! Is that for here or to go? Also, would you like a warm butter croissant or chocolate cookie to go with it?",
          vi: "Đã rõ ạ! Bạn dùng tại quán hay mang về? Tiện thể bạn có muốn dùng thêm một chiếc bánh sừng bò bơ nóng hay bánh quy sô-cô-la không?"
        },
        replies: [
          { en: "For here, please. And I'll take a warm croissant too.", vi: "Tôi dùng tại quán. Và cho tôi thêm một bánh sừng bò bơ nóng nhé." },
          { en: "To go, please! Just the drink is enough for now.", vi: "Mang về giúp tôi nhé! Chỉ đồ uống thôi là đủ rồi ạ." },
          { en: "For here, please! Is there free Wi-Fi inside?", vi: "Uống tại quán nhé! Trong quán có Wi-Fi miễn phí không bạn?" }
        ]
      },
      {
        // Lượt 4: Báo giá & hỏi thanh toán
        botReply: {
          en: "Yes, we have high-speed Wi-Fi! Your total comes to $5.50. How would you like to pay: cash or credit card?",
          vi: "Vâng, quán có Wi-Fi tốc độ cao ạ! Tổng cộng của bạn là 5.50 đô. Bạn muốn thanh toán bằng tiền mặt hay thẻ tín dụng?"
        },
        replies: [
          { en: "Can I pay by credit card / Apple Pay?", vi: "Tôi quẹt thẻ tín dụng / Apple Pay được không?" },
          { en: "Here is $10 cash. Keep the change!", vi: "Gửi bạn 10 đô tiền mặt nhé. Khỏi cần thối lại!" },
          { en: "I'll pay with cash. Here is the exact amount.", vi: "Tôi trả bằng tiền mặt nhé. Đầy đủ số tiền đây ạ." }
        ]
      },
      {
        // Lượt 5: Đưa hóa đơn, số bàn và chúc khách
        botReply: {
          en: "Payment received! Here is your receipt and order number 42. Please have a seat, we will bring your drink in 3 minutes. Enjoy your stay!",
          vi: "Đã nhận thanh toán! Đây là hóa đơn và số thứ tự 42 của bạn. Xin mời bạn ngồi, chúng tôi sẽ mang đồ uống ra trong 3 phút. Chúc bạn có thời gian thư giãn vui vẻ!"
        },
        replies: [
          { en: "Thank you so much for your great service!", vi: "Cảm ơn bạn rất nhiều vì sự phục vụ chu đáo!" },
          { en: "Awesome! Thanks and have a wonderful day!", vi: "Tuyệt quá! Cảm ơn bạn và chúc một ngày tốt lành!" }
        ]
      },
      {
        // Lượt 6: Tổng kết
        botReply: {
          en: "🎉 Great job! You have fully mastered ordering coffee in English like a native speaker! What would you like to do next?",
          vi: "🎉 Tuyệt vời! Bạn đã thành thạo kỹ năng gọi cà phê bằng tiếng Anh tự nhiên như người bản xứ! Bạn muốn làm gì tiếp theo?"
        },
        replies: [
          { en: "Let's practice this scenario one more time!", vi: "Hãy cùng luyện lại tình huống này một lần nữa!" },
          { en: "Let's try shopping & asking for prices next!", vi: "Hãy thử tình huống mua sắm & hỏi giá tiền tiếp theo!" }
        ]
      }
    ]
  },
  shopping: {
    title: "3. Mua sắm & Hỏi giá tiền (A-Z)",
    initialMessages: [
      {
        sender: "bot",
        en: "Hello! Welcome to Fashion Store. Can I help you find anything special today?",
        vi: "Xin chào! Chào mừng đến với cửa hàng Fashion Store. Tôi có thể giúp bạn tìm món đồ nào đặc biệt hôm nay không?"
      }
    ],
    initialReplies: [
      { en: "Hi! I'm looking for a warm winter jacket.", vi: "Chào bạn! Tôi đang tìm một chiếc áo khoác ấm cho mùa đông." },
      { en: "Excuse me, where can I find casual T-shirts and jeans?", vi: "Xin lỗi, tôi có thể tìm áo phông và quần jeans ở khu nào thế?" },
      { en: "I'm just browsing for now, thank you!", vi: "Tôi chỉ đang đi ngắm xem thử thôi, cảm ơn bạn nhé!" }
    ],
    steps: [
      {
        // Lượt 1: Hỏi màu sắc và kích cỡ
        botReply: {
          en: "Our new jacket collection is right over here! What color and size are you looking for: Small, Medium, or Large?",
          vi: "Bộ sưu tập áo khoác mới của chúng tôi ở ngay phía này! Bạn đang tìm màu sắc và kích cỡ nào: Nhỏ (S), Vừa (M) hay Lớn (L)?"
        },
        replies: [
          { en: "I'm looking for size Medium in black or navy blue.", vi: "Tôi tìm cỡ Vừa (M) màu đen hoặc xanh tím than." },
          { en: "Do you have this in size Large, white color?", vi: "Mẫu này bạn có cỡ Lớn (L) màu trắng không?" },
          { en: "What colors do you have in size Small?", vi: "Cỡ Nhỏ (S) bên bạn đang có những màu nào thế?" }
        ]
      },
      {
        // Lượt 2: Mang đồ và mời vào phòng thử
        botReply: {
          en: "Here is a Medium in navy blue! The fabric is high quality and water-resistant. Would you like to try it on in the fitting room?",
          vi: "Đây là chiếc cỡ M màu xanh tím than! Chất vải cao cấp và chống nước tốt. Bạn có muốn vào phòng thử đồ mặc thử không?"
        },
        replies: [
          { en: "Yes, please! Where is the fitting room?", vi: "Có chứ! Phòng thử đồ ở đâu thế bạn?" },
          { en: "Sure, let me try it on to see how it fits.", vi: "Được rồi, để tôi mặc thử xem có vừa vặn không." }
        ]
      },
      {
        // Lượt 3: Nhận xét đồ và hỏi giá
        botReply: {
          en: "The fitting rooms are right around the corner on your left... Wow, that jacket looks fantastic on you! How does it feel?",
          vi: "Phòng thử đồ ở ngay góc rẽ bên tay trái của bạn... Oa, chiếc áo này mặc lên người bạn trông rất hợp đấy! Bạn cảm thấy thế nào?"
        },
        replies: [
          { en: "It fits me perfectly and feels very comfortable! How much is it?", vi: "Nó vừa vặn hoàn hảo và rất thoải mái! Chiếc này giá bao nhiêu vậy bạn?" },
          { en: "It looks great! Do you have any discount on this item today?", vi: "Trông đẹp đấy! Mẫu này hôm nay có được giảm giá gì không bạn?" }
        ]
      },
      {
        // Lượt 4: Báo giá & ưu đãi khuyến mãi
        botReply: {
          en: "The original price is $60, but today we have a weekend promotion of 20% off, so it's only $48! Would you like to take it?",
          vi: "Giá gốc là 60 đô, nhưng hôm nay chúng tôi có ưu đãi cuối tuần giảm 20%, nên chỉ còn 48 đô thôi! Bạn có muốn lấy chiếc này không?"
        },
        replies: [
          { en: "That's a great deal! I will take it. Can I pay by card?", vi: "Giá ưu đãi quá tốt! Tôi lấy chiếc này. Tôi quẹt thẻ được không?" },
          { en: "Awesome, I'll take it! Do you offer gift wrapping?", vi: "Tuyệt vời, tôi lấy nhé! Bên bạn có dịch vụ gói quà không?" }
        ]
      },
      {
        // Lượt 5: Thanh toán & trao túi đồ
        botReply: {
          en: "Certainly! Card payment is accepted. Here is your receipt and your shopping bag. You have a 30-day return policy. Thank you for shopping with us!",
          vi: "Chắc chắn rồi ạ! Chúng tôi nhận thanh toán thẻ. Đây là hóa đơn và túi đồ của bạn. Bạn có chính sách đổi trả trong vòng 30 ngày nhé. Cảm ơn bạn đã mua sắm cùng chúng tôi!"
        },
        replies: [
          { en: "Thank you so much for your kind help! Have a great day!", vi: "Cảm ơn bạn rất nhiều vì đã giúp đỡ tận tình! Chúc một ngày tốt lành!" },
          { en: "Thanks! Goodbye and see you again!", vi: "Cảm ơn! Tạm biệt và hẹn gặp lại bạn nhé!" }
        ]
      },
      {
        // Lượt 6: Tổng kết
        botReply: {
          en: "🎉 Bravo! You have completed the full shopping and bargaining dialogue with ease! Ready to try another one?",
          vi: "🎉 Hoan hô! Bạn đã hoàn thành toàn bộ đoạn hội thoại mua sắm và hỏi giá một cách dễ dàng! Bạn sẵn sàng thử tiếp chưa?"
        },
        replies: [
          { en: "Let's practice this scenario one more time!", vi: "Hãy cùng luyện lại tình huống này một lần nữa!" },
          { en: "Let's try asking for directions next!", vi: "Hãy thử tình huống hỏi đường tiếp theo nhé!" }
        ]
      }
    ]
  },
  directions: {
    title: "4. Hỏi đường trên phố (A-Z)",
    initialMessages: [
      {
        sender: "bot",
        en: "Excuse me! You look a bit lost with that map. Can I help you find somewhere?",
        vi: "Xin lỗi bạn! Trông bạn có vẻ hơi phân vân với tấm bản đồ. Tôi có thể chỉ đường giúp bạn không?"
      }
    ],
    initialReplies: [
      { en: "Yes, please! How do I get to the Central Metro Station?", vi: "Vâng, làm ơn! Làm sao để tôi đi đến ga tàu điện ngầm trung tâm thế?" },
      { en: "Could you tell me the way to the City Museum from here?", vi: "Bạn có thể chỉ giúp tôi đường đến bảo tàng thành phố từ đây không?" },
      { en: "Is there a convenience store or ATM nearby?", vi: "Ở gần đây có cửa hàng tiện lợi hoặc cây ATM nào không bạn?" }
    ],
    steps: [
      {
        // Lượt 1: Chỉ đường cơ bản
        botReply: {
          en: "Oh, it's quite close! Just walk straight along this main street for two blocks, then turn right at the traffic lights. You can't miss it.",
          vi: "Ồ, nó khá gần đây thôi! Bạn cứ đi thẳng dọc theo con phố chính này qua 2 ngã tư, sau đó rẽ phải ở cột đèn giao thông. Rất dễ nhận ra thôi."
        },
        replies: [
          { en: "Is it within walking distance, or should I take a bus or taxi?", vi: "Chỗ đó đi bộ được không, hay tôi nên bắt xe buýt hoặc taxi?" },
          { en: "How long does it take to walk there from here?", vi: "Đi bộ từ đây tới đó mất khoảng bao lâu thế bạn?" }
        ]
      },
      {
        // Lượt 2: Giải thích khoảng cách & thời gian
        botReply: {
          en: "It's definitely within walking distance! It only takes about 7 to 10 minutes on foot. The weather is nice, so walking is very pleasant.",
          vi: "Chắc chắn là đi bộ được bạn nhé! Đi bộ chỉ mất khoảng 7 đến 10 phút thôi. Thời tiết hôm nay rất đẹp nên đi bộ sẽ rất dễ chịu."
        },
        replies: [
          { en: "Are there any big landmarks I should look out for along the way?", vi: "Có tòa nhà hoặc dấu hiệu nổi bật nào trên đường để tôi nhận biết không?" },
          { en: "Which side of the street is it on, the left or the right?", vi: "Nó nằm ở bên tay trái hay tay phải của con đường thế?" }
        ]
      },
      {
        // Lượt 3: Nêu điểm mốc nhận diện
        botReply: {
          en: "Look for a tall glass building and a big Starbucks coffee shop on the corner. The entrance is right behind the Starbucks, on the left side.",
          vi: "Bạn hãy để ý một tòa nhà kính cao tầng và quán cà phê Starbucks lớn ở góc phố. Lối vào nằm ngay phía sau Starbucks, ở bên tay trái."
        },
        replies: [
          { en: "Got it! Go straight two blocks, turn right at Starbucks, entrance on the left. Right?", vi: "Tôi hiểu rồi! Đi thẳng 2 ngã tư, rẽ phải ở Starbucks, lối vào bên trái. Đúng không bạn?" },
          { en: "That is very clear and easy to follow. Thank you!", vi: "Chỉ dẫn rất rõ ràng và dễ đi theo. Cảm ơn bạn!" }
        ]
      },
      {
        // Lượt 4: Xác nhận và dặn dò
        botReply: {
          en: "Exactly right! You've got it. Also, be careful at the pedestrian crossing because the traffic can be quite busy around noon.",
          vi: "Chính xác luôn rồi đấy! Bạn nhớ chuẩn rồi. Ngoài ra hãy chú ý khi qua vạch kẻ đường cho người đi bộ vì xe cộ lúc trưa khá đông nhé."
        },
        replies: [
          { en: "Thank you so much for your kind help and advice!", vi: "Cảm ơn bạn rất nhiều vì sự giúp đỡ nhiệt tình và lời khuyên bổ ích!" },
          { en: "I really appreciate your help. Have a wonderful day!", vi: "Tôi thực sự rất biết ơn sự giúp đỡ của bạn. Chúc bạn một ngày tuyệt vời!" }
        ]
      },
      {
        // Lượt 5: Chúc lên đường bình an
        botReply: {
          en: "You're very welcome! Have a safe trip and enjoy your time exploring our city. Take care!",
          vi: "Không có chi đâu bạn! Chúc bạn đi lại an toàn và có khoảng thời gian khám phá thành phố thật vui. Giữ gìn sức khỏe nhé!"
        },
        replies: [
          { en: "Thank you! Goodbye and take care!", vi: "Cảm ơn bạn! Tạm biệt và bảo trọng nhé!" }
        ]
      },
      {
        // Lượt 6: Tổng kết
        botReply: {
          en: "🎉 Excellent! You have successfully completed a practical asking-directions dialogue in English! Where to next?",
          vi: "🎉 Xuất sắc! Bạn đã hoàn thành trọn vẹn một đoạn hội thoại hỏi đường thực tế bằng tiếng Anh! Bạn muốn thử tiếp ở đâu?"
        },
        replies: [
          { en: "Let's practice this scenario one more time!", vi: "Hãy cùng luyện lại tình huống này một lần nữa!" },
          { en: "Let's go back to Lesson 1 practice!", vi: "Hãy quay lại luyện các câu của Bài 1!" }
        ]
      }
    ]
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

// ==========================================
// TỪ VỰNG THEO TÌNH HUỐNG PHẢN XẠ (DÀNH CHO LUYỆN PHÁT ÂM TỪ ĐƠN)
// ==========================================
const VOCAB_SCENARIOS_DATA = {
  intro: {
    title: "1. Chào hỏi & Làm quen",
    icon: "🤝",
    words: [
      { word: "Hello", ipa: "/həˈloʊ/", readVi: "Hơ-lâu", vi: "Xin chào", tip: "Chào thân thiện bất cứ lúc nào" },
      { word: "Welcome", ipa: "/ˈwɛlkəm/", readVi: "Oeo-cầm", vi: "Chào mừng", tip: "Trọng âm rơi vào âm tiết đầu 'Wel'" },
      { word: "Name", ipa: "/neɪm/", readVi: "Nêm", vi: "Tên", tip: "Kéo dài âm /eɪ/ và khép môi âm /m/" },
      { word: "Meet", ipa: "/miːt/", readVi: "Mít-t", vi: "Gặp gỡ", tip: "Âm /iː/ dài, bật nhẹ âm /t/ cuối" },
      { word: "Vietnam", ipa: "/ˌvjɛtˈnɑːm/", readVi: "Việt Nam", vi: "Việt Nam", tip: "Người bản xứ nhấn mạnh vào 'Nam'" },
      { word: "Hanoi", ipa: "/hæˈnɔɪ/", readVi: "Hà Nội", vi: "Hà Nội", tip: "Trọng âm rơi vào 'Noi'" },
      { word: "Capital", ipa: "/ˈkæpɪtl/", readVi: "Cá-pi-tồ", vi: "Thủ đô", tip: "Bật hơi âm /k/ đầu tiên" },
      { word: "Developer", ipa: "/dɪˈvɛləpər/", readVi: "Đi-vé-lơ-pơ", vi: "Lập trình viên", tip: "Trọng âm rơi vào âm tiết 2 've'" },
      { word: "Student", ipa: "/ˈstuːdnt/", readVi: "S-tiu-đần-t", vi: "Sinh viên / Học sinh", tip: "Bật nhẹ s ở đầu và t ở cuối" },
      { word: "Business", ipa: "/ˈbɪznəs/", readVi: "Bít-x-nợt-s", vi: "Kinh doanh", tip: "Chỉ phát âm 2 âm tiết 'biz-nis'" },
      { word: "Hobby", ipa: "/ˈhɑːbi/", readVi: "Hóp-bi", vi: "Sở thích", tip: "Âm /ɑː/ mở rộng miệng" },
      { word: "Music", ipa: "/ˈmjuːzɪk/", readVi: "Miu-zịch", vi: "Âm nhạc", tip: "Âm giữa là /z/ chứ không phải /s/" },
      { word: "Movies", ipa: "/ˈmuːviz/", readVi: "Mu-vi-z", vi: "Phim ảnh", tip: "Âm cuối là /z/" },
      { word: "Travel", ipa: "/ˈtrævl/", readVi: "Tré-vồ", vi: "Đi du lịch", tip: "Âm /v/ rung nhẹ môi dưới và răng trên" },
      { word: "Fluently", ipa: "/ˈfluːəntli/", readVi: "Phlú-ơn-tli", vi: "Lưu loát / Trôi chảy", tip: "Nhấn âm 'Flu'" },
      { word: "Opportunity", ipa: "/ˌɑːpərˈtuːnəti/", readVi: "O-pơ-tú-nơ-ti", vi: "Cơ hội", tip: "Nhấn mạnh vào âm 'tu'" }
    ]
  },
  coffee: {
    title: "2. Gọi đồ uống tại quán Coffee",
    icon: "☕",
    words: [
      { word: "Coffee", ipa: "/ˈkɔːfi/", readVi: "Có-phi", vi: "Cà phê", tip: "Nhấn âm 'Cof'" },
      { word: "Latte", ipa: "/ˈlɑːteɪ/", readVi: "La-tây", vi: "Cà phê sữa Latte", tip: "Âm /ɑː/ trầm và sâu" },
      { word: "Cappuccino", ipa: "/ˌkæpʊˈtʃiːnoʊ/", readVi: "Ca-pu-chí-nô", vi: "Cà phê Cappuccino", tip: "Nhấn mạnh vào 'chi'" },
      { word: "Americano", ipa: "/əˌmɛrɪˈkɑːnoʊ/", readVi: "Ơ-me-ri-cá-nô", vi: "Cà phê Americano", tip: "Nhấn mạnh vào 'ca'" },
      { word: "Small", ipa: "/smɔːl/", readVi: "S-mó-l", vi: "Kích cỡ nhỏ", tip: "Uốn cong lưỡi ở âm /l/ cuối" },
      { word: "Medium", ipa: "/ˈmiːdiəm/", readVi: "Mí-đi-ừm", vi: "Kích cỡ vừa", tip: "Nhấn vào 'Me'" },
      { word: "Large", ipa: "/lɑːrdʒ/", readVi: "La-d-ch", vi: "Kích cỡ lớn", tip: "Bật âm /dʒ/ tròn môi ở cuối" },
      { word: "Sugar", ipa: "/ˈʃʊɡər/", readVi: "Sú-gơ", vi: "Đường", tip: "Âm /ʃ/ chu môi như ra hiệu im lặng" },
      { word: "Milk", ipa: "/mɪlk/", readVi: "Miu-k", vi: "Sữa", tip: "Uốn lưỡi âm /l/ rồi bật nhẹ /k/" },
      { word: "Croissant", ipa: "/kwɑːˈsɑːnt/", readVi: "Oa-xông", vi: "Bánh sừng bò", tip: "Từ gốc Pháp, nhấn âm cuối 'sant'" },
      { word: "Cookie", ipa: "/ˈkʊki/", readVi: "Cúc-ki", vi: "Bánh quy", tip: "Âm /ʊ/ ngắn và dứt khoát" },
      { word: "Receipt", ipa: "/rɪˈsiːt/", readVi: "Ri-xít", vi: "Hóa đơn", tip: "Âm 'p' câm, không đọc 're-sipt'!" },
      { word: "Cash", ipa: "/kæʃ/", readVi: "Ké-s", vi: "Tiền mặt", tip: "Chu môi bật âm /ʃ/ thật dày" },
      { word: "Card", ipa: "/kɑːrd/", readVi: "Cát-d", vi: "Thẻ ngân hàng", tip: "Chặn âm /d/ ở đầu lưỡi" }
    ]
  },
  shopping: {
    title: "3. Mua sắm & Hỏi giá tiền",
    icon: "🛍️",
    words: [
      { word: "Jacket", ipa: "/ˈdʒækɪt/", readVi: "Dzá-kịt", vi: "Áo khoác", tip: "Âm /dʒ/ bật mạnh từ vòm họng" },
      { word: "T-shirt", ipa: "/ˈtiː ʃɜːrt/", readVi: "Ti-sớt", vi: "Áo phông", tip: "Kéo dài âm /ɜːr/ và bật /t/" },
      { word: "Jeans", ipa: "/dʒiːnz/", readVi: "Dzin-z", vi: "Quần bò jeans", tip: "Luôn có đuôi số nhiều /z/" },
      { word: "Shoes", ipa: "/ʃuːz/", readVi: "Su-z", vi: "Đôi giày", tip: "Chu môi âm /ʃ/ và ngân /uː/" },
      { word: "Color", ipa: "/ˈkʌlər/", readVi: "Cớ-lơ", vi: "Màu sắc", tip: "Nhấn âm đầu 'Col'" },
      { word: "Size", ipa: "/saɪz/", readVi: "Sai-z", vi: "Kích cỡ", tip: "Bật âm rung /z/ ở cuối từ" },
      { word: "Fitting room", ipa: "/ˈfɪtɪŋ rʊm/", readVi: "Phít-ting rum", vi: "Phòng thử đồ", tip: "Bật nhẹ âm /t/ ở fitting" },
      { word: "Comfortable", ipa: "/ˈkʌmftəbl/", readVi: "Cắm-ph-tơ-bồ", vi: "Thoải mái / Dễ chịu", tip: "Đọc 3 âm tiết 'cumf-ter-ble', không đọc 'com-for-ta-ble'!" },
      { word: "Discount", ipa: "/ˈdɪskaʊnt/", readVi: "Đít-x-cao-nt", vi: "Giảm giá", tip: "Nhấn âm 'Dis', bật /nt/ ở cuối" },
      { word: "Promotion", ipa: "/prəˈmoʊʃn/", readVi: "Prờ-môu-sần", vi: "Khuyến mãi", tip: "Nhấn âm 2 'mo'" },
      { word: "Price", ipa: "/praɪs/", readVi: "P-rai-s", vi: "Giá tiền", tip: "Bật âm gió /s/ rõ ràng ở cuối" },
      { word: "Customer", ipa: "/ˈkʌstəmər/", readVi: "Cắt-x-tơ-mơ", vi: "Khách hàng", tip: "Nhấn âm 'Cus'" }
    ]
  },
  directions: {
    title: "4. Hỏi đường trên phố",
    icon: "🗺️",
    words: [
      { word: "Excuse", ipa: "/ɪkˈskjuːz/", readVi: "Ích-x-kiu-z", vi: "Xin phép / Xin lỗi", tip: "Âm cuối là /z/ rung nhẹ" },
      { word: "Station", ipa: "/ˈsteɪʃn/", readVi: "S-tây-sần", vi: "Nhà ga", tip: "Nhấn âm đầu 'stay', đuôi 'tion' chu môi" },
      { word: "Museum", ipa: "/mjuˈziːəm/", readVi: "Miu-zí-ừm", vi: "Bảo tàng", tip: "Trọng âm rơi vào 'ze'" },
      { word: "Supermarket", ipa: "/ˈsuːpərmɑːrkɪt/", readVi: "Sú-pơ-mát-kịt", vi: "Siêu thị", tip: "Nhấn mạnh âm 'Su'" },
      { word: "Straight", ipa: "/streɪt/", readVi: "S-trây-t", vi: "Đi thẳng", tip: "Bắt đầu bằng cụm phụ âm /str/" },
      { word: "Blocks", ipa: "/blɑːks/", readVi: "B-lóc-x", vi: "Dãy nhà / Ngã tư", tip: "Âm cuối là /ks/ bật gió" },
      { word: "Traffic", ipa: "/ˈtræfɪk/", readVi: "Tré-phích", vi: "Giao thông", tip: "Nhấn âm đầu 'Tra'" },
      { word: "Distance", ipa: "/ˈdɪstəns/", readVi: "Đít-x-từn-s", vi: "Khoảng cách", tip: "Nhấn âm đầu, kết thúc bằng /s/" },
      { word: "Walking", ipa: "/ˈwɔːkɪŋ/", readVi: "Oắt-king", vi: "Đi bộ", tip: "Âm 'l' câm, không đọc 'wal-king'" },
      { word: "Landmark", ipa: "/ˈlændmɑːrk/", readVi: "Lén-d-mác", vi: "Điểm mốc nhận diện", tip: "Nhấn âm 'Land'" },
      { word: "Entrance", ipa: "/ˈɛntrəns/", readVi: "Én-trừn-s", vi: "Lối vào / Cổng vào", tip: "Nhấn âm đầu 'En'" },
      { word: "Starbucks", ipa: "/ˈstɑːrbʌks/", readVi: "S-ta-bắc-x", vi: "Quán cà phê Starbucks", tip: "Bắt đầu s- và kết thúc -ks" }
    ]
  }
};
