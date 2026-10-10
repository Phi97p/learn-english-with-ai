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
  },
  {
    id: "unit-2-my-house",
    order: "Unit 2",
    title: "Ngôi Nhà Của Tôi",
    titleEn: "My House - Rooms & Furniture",
    desc: "Miêu tả các phòng trong nhà, đồ đạc nội thất và không gian sống ấm cúng.",
    duration: "15 phút",
    badge: "SGK Lớp 6",
    phrases: [
      {
        en: "Where do you live, Mi? - I live in a town house.",
        ipa: "/wɛr duː juː lɪv, Miː? - aɪ lɪv ɪn ə taʊn haʊs/",
        readVi: "Ue-r đu diu li-v, Mi? - Ai li-v in ờ tao-n hao-x.",
        vi: "Bạn sống ở đâu vậy Mi? - Mình sống trong một ngôi nhà phố.",
        tip: "'Town house' = nhà phố / nhà trong thị trấn."
      },
      {
        en: "There are six rooms in my house.",
        ipa: "/ðɛr ɑːr sɪks ruːmz ɪn maɪ haʊs/",
        readVi: "Đe-r a xíc-x rum-z in mai hao-x.",
        vi: "Có sáu phòng trong ngôi nhà của mình.",
        tip: "'There are + danh từ số nhiều' = có nhiều thứ gì đó."
      },
      {
        en: "My favourite room is my bedroom.",
        ipa: "/maɪ ˈfeɪvərɪt ruːm ɪz maɪ ˈbɛdruːm/",
        readVi: "Mai phây-vơ-rịt rum iz mai bét-rum.",
        vi: "Phòng yêu thích nhất của mình là phòng ngủ.",
        tip: "'Favourite' = yêu thích nhất."
      },
      {
        en: "There is a big sofa and a television in the living room.",
        ipa: "/ðɛr ɪz ə bɪɡ ˈsoʊfə ænd ə ˈtɛləvɪʒən ɪn ðə ˈlɪvɪŋ ruːm/",
        readVi: "Đe-r iz ờ bíc-g xô-phơ en ờ te-le-vi-zần in đờ li-ving rum.",
        vi: "Có một chiếc ghế sofa lớn và một chiếc tivi trong phòng khách.",
        tip: "'Living room' = phòng khách."
      },
      {
        en: "My cat is sleeping under the table in the kitchen.",
        ipa: "/maɪ kæt ɪz ˈsliːpɪŋ ˈʌndər ðə ˈteɪbəl ɪn ðə ˈkɪtʃɪn/",
        readVi: "Mai két iz x-li-ping ăn-đơ đờ tây-bồ in đờ kít-chần.",
        vi: "Con mèo của mình đang ngủ dưới gầm bàn trong bếp.",
        tip: "Giới từ chỉ vị trí: 'under the table' = dưới gầm bàn."
      },
      {
        en: "I love my house because it is very cosy.",
        ipa: "/aɪ lʌv maɪ haʊs bɪˈkɔːz ɪt ɪz ˈvɛri ˈkoʊzi/",
        readVi: "Ai lóp-v mai hao-x bi-co-z ít iz ve-ri kô-zi.",
        vi: "Mình yêu ngôi nhà của mình vì nó rất ấm cúng.",
        tip: "'Cosy' = ấm cúng, dễ chịu."
      }
    ]
  },
  {
    id: "unit-3-my-friends",
    order: "Unit 3",
    title: "Những Người Bạn Của Tôi",
    titleEn: "My Friends - Appearance & Personality",
    desc: "Miêu tả ngoại hình, tính cách và các hoạt động vui chơi cùng bạn bè.",
    duration: "15 phút",
    badge: "SGK Lớp 6",
    phrases: [
      {
        en: "What does your best friend look like?",
        ipa: "/wʌt dʌz jʊər bɛst frɛnd lʊk laɪk/",
        readVi: "Uắt đa-z dơ bét-st phrèn-d lúc lai-k?",
        vi: "Bạn thân của bạn trông như thế nào?",
        tip: "'What does someone look like?' = hỏi về ngoại hình của ai đó."
      },
      {
        en: "She has long black hair and big brown eyes.",
        ipa: "/ʃiː hæz lɔːŋ blæk hɛr ænd bɪɡ braʊn aɪz/",
        readVi: "Si he-z loong blec-k he-r en bíc-g brao-n ai-z.",
        vi: "Cô ấy có mái tóc đen dài và đôi mắt nâu to tròn.",
        tip: "Cấu trúc miêu tả: 'has + tính từ + danh từ'."
      },
      {
        en: "He is very kind, helpful and clever.",
        ipa: "/hiː ɪz ˈvɛri kaɪnd, ˈhɛlpfʊl ænd ˈklɛvər/",
        readVi: "Hi iz ve-ri kain-d, héo-phun en cle-vơ.",
        vi: "Cậu ấy rất tốt bụng, hay giúp đỡ mọi người và thông minh.",
        tip: "Tính từ miêu tả tính cách: 'kind', 'helpful', 'clever'."
      },
      {
        en: "What is she doing now? - She is reading a book in the library.",
        ipa: "/wʌt ɪz ʃiː ˈduːɪŋ naʊ? - ʃiː ɪz ˈriːdɪŋ ə bʊk ɪn ðə ˈlaɪbrɛri/",
        readVi: "Uắt iz si đu-ing nao? - Si iz ri-đing ờ búc in đờ lai-brơ-ri.",
        vi: "Cô ấy đang làm gì bây giờ? - Cô ấy đang đọc sách trong thư viện.",
        tip: "Thì hiện tại tiếp diễn: 'is reading a book'."
      },
      {
        en: "We often play football and cycle together after school.",
        ipa: "/wiː ˈɔːfn pleɪ ˈfʊtbɔːl ænd ˈsaɪkəl təˈɡɛðər ˈæftər skuːl/",
        readVi: "Ui op-phừn plây phút-bol en xai-cồ tu-ge-đơ áp-ph-tơ x-cul.",
        vi: "Chúng mình thường đá bóng và đạp xe cùng nhau sau giờ học.",
        tip: "'Cycle together' = cùng nhau đạp xe."
      }
    ]
  },
  {
    id: "unit-4-my-neighbourhood",
    order: "Unit 4",
    title: "Khu Phố Của Tôi",
    titleEn: "My Neighbourhood - Directions & Places",
    desc: "Hỏi và chỉ đường, miêu tả các địa điểm trong khu phố và con người nơi đây.",
    duration: "15 phút",
    badge: "SGK Lớp 6",
    phrases: [
      {
        en: "Excuse me, can you tell me the way to the post office?",
        ipa: "/ɪkˈskjuːz miː, kæn juː tɛl miː ðə weɪ tuː ðə poʊst ˈɔːfɪs/",
        readVi: "Ích-x-kiu-z mi, ken diu teo mi đờ uây tu đờ pốt-st o-phịt-x?",
        vi: "Xin lỗi, bạn có thể chỉ đường cho mình đến bưu điện được không?",
        tip: "Cấu trúc hỏi đường chuẩn xác và lịch sự."
      },
      {
        en: "Go straight ahead, and then turn left at the traffic lights.",
        ipa: "/ɡoʊ streɪt əˈhɛd, ænd ðɛn tɜːrn lɛft æt ðə ˈtræfɪk laɪts/",
        readVi: "Gâu x-trây-t ơ-hét, en đen tơn lép-ph-t ét đờ tre-phịch lai-t-x.",
        vi: "Hãy đi thẳng phía trước, rồi sau đó rẽ trái ở cột đèn giao thông.",
        tip: "'Go straight ahead' = đi thẳng. 'Turn left' = rẽ trái."
      },
      {
        en: "It is on your right, next to the supermarket.",
        ipa: "/ɪt ɪz ɑːn jʊər raɪt, nɛkst tuː ðə ˈsuːpərmɑːrkɪt/",
        readVi: "Ít iz on dơ rai-t, néc-x-t tu đờ su-pơ-ma-kịt.",
        vi: "Nó nằm ở bên tay phải của bạn, ngay cạnh siêu thị.",
        tip: "'On your right' = ở bên phải bạn. 'Next to' = ngay bên cạnh."
      },
      {
        en: "My neighbourhood is very quiet and peaceful.",
        ipa: "/maɪ ˈneɪbərhʊd ɪz ˈvɛri ˈkwaɪət ænd ˈpiːsfʊl/",
        readVi: "Mai nây-bơ-hút iz ve-ri quai-ợt en pít-x-phun.",
        vi: "Khu phố của mình rất yên tĩnh và thanh bình.",
        tip: "'Neighbourhood' = khu dân cư, khu phố lân cận."
      },
      {
        en: "The people here are very friendly and helpful.",
        ipa: "/ðə ˈpiːpəl hɪr ɑːr ˈvɛri ˈfrɛndli ænd ˈhɛlpfʊl/",
        readVi: "Đờ pi-pồ hi-ơ a ve-ri phren-đ-li en héo-phun.",
        vi: "Người dân ở đây rất thân thiện và nhiệt tình giúp đỡ.",
        tip: "'Friendly and helpful' = thân thiện và nhiệt tình."
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
// SPEAKING PRACTICE CHALLENGES - CHIA THEO TỪNG UNIT (SHADOWING LAB)
// ========================================================
const SENTENCE_UNITS_DATA = {
  unit_1_my_new_school: {
    id: "unit_1_my_new_school",
    title: "Unit 1: Bạn Mới & Năm Học Mới (My New School)",
    icon: "🏫",
    badge: "SGK Lớp 6",
    sentences: [
      {
        category: "UNIT 1: BẠN MỚI & NĂM HỌC MỚI",
        en: "Hi, Phong. Are you ready? - Just a minute.",
        ipa: "/haɪ, Phong. ɑːr juː ˈrɛdi? - dʒʌst ə ˈmɪnɪt/",
        readVi: "Hai, Phong. A diu ré-đi? - Dchất ơ mí-nịt.",
        vi: "Chào Phong. Bạn đã sẵn sàng chưa? - Chờ mình một phút nhé.",
        tip: "'Are you ready?' là câu hỏi kinh điển khi chuẩn bị đi đâu đó."
      },
      {
        category: "UNIT 1: BẠN MỚI & NĂM HỌC MỚI",
        en: "Oh, this is Duy, my new friend.",
        ipa: "/oʊ, ðɪs ɪz Duːi, maɪ njuː frɛnd/",
        readVi: "Ôu, đít-x iz Duy, mai niu phrèn-d.",
        vi: "Ồ, đây là Duy, bạn mới của mình.",
        tip: "Cấu trúc giới thiệu: 'This is [Tên], my new friend'."
      },
      {
        category: "UNIT 1: BẠN MỚI & NĂM HỌC MỚI",
        en: "Hi, Duy. Nice to meet you.",
        ipa: "/haɪ, Duːi. naɪs tuː miːt juː/",
        readVi: "Hai, Duy. Nai-xừ tu mít diu.",
        vi: "Chào Duy. Rất vui được gặp bạn.",
        tip: "Lời chào lịch sự và nồng hậu khi lần đầu gặp gỡ."
      },
      {
        category: "UNIT 1: BẠN MỚI & NĂM HỌC MỚI",
        en: "I live near here, and we go to the same school!",
        ipa: "/aɪ lɪv nɪr hɪr, ænd wiː ɡoʊ tuː ðə seɪm skuːl/",
        readVi: "Ai li-v ni-ơ hi-ơ, en ui gâu tu đờ xêm x-cul!",
        vi: "Mình sống ở gần đây, và chúng ta học cùng trường đấy!",
        tip: "'Live near here' = sống gần đây. 'The same school' = cùng trường."
      },
      {
        category: "UNIT 1: BẠN MỚI & NĂM HỌC MỚI",
        en: "Hmm, your school bag looks heavy.",
        ipa: "/hmm, jʊər skuːl bæɡ lʊks ˈhɛvi/",
        readVi: "Hmm, dơ x-cul béc-g lúc-x hé-vi.",
        vi: "Hmm, cặp sách của bạn trông có vẻ nặng thế.",
        tip: "'Look + tính từ' = trông có vẻ như thế nào."
      },
      {
        category: "UNIT 1: BẠN MỚI & NĂM HỌC MỚI",
        en: "Yes! I have new books, and we have new subjects to study.",
        ipa: "/jɛs! aɪ hæv njuː bʊks, ænd wiː hæv njuː ˈsʌbdʒɪkts tuː ˈstʌdi/",
        readVi: "Dét! Ai he-v niu búc-x, en ui he-v niu xắp-dzịt-k-x tu x-tá-đi.",
        vi: "Đúng rồi! Mình có sách mới, và chúng ta có nhiều môn học mới để học.",
        tip: "'Subject' = môn học. 'Study' = học tập."
      },
      {
        category: "UNIT 1: BẠN MỚI & NĂM HỌC MỚI",
        en: "And a new uniform, Duy! You look smart!",
        ipa: "/ænd ə njuː ˈjuːnɪfɔːrm, Duːi! juː lʊk smɑːrt/",
        readVi: "En ờ niu diu-ni-phoom, Duy! Diu lúc x-mát!",
        vi: "Và cả bộ đồng phục mới nữa này, Duy! Trông bạn bảnh bao lắm!",
        tip: "'You look smart' = trông bạn rất sáng sủa, bảnh bao."
      },
      {
        category: "UNIT 1: BẠN MỚI & NĂM HỌC MỚI",
        en: "We always look smart in our uniforms.",
        ipa: "/wiː ˈɔːlweɪz lʊk smɑːrt ɪn ˈaʊər ˈjuːnɪfɔːrmz/",
        readVi: "Ui ô-uây-z lúc x-mát in ao-ơ diu-ni-phom-z.",
        vi: "Chúng ta luôn trông bảnh bao trong bộ đồng phục mà.",
        tip: "Cấu trúc: 'look + adj + in + [trang phục]'."
      },
      {
        category: "UNIT 1: BẠN MỚI & NĂM HỌC MỚI",
        en: "Let me put on my uniform. Then we can go.",
        ipa: "/lɛt miː pʊt ɑːn maɪ ˈjuːnɪfɔːrm. ðɛn wiː kæn ɡoʊ/",
        readVi: "Lét mi pút on mai diu-ni-phom. Đen ui ken gâu.",
        vi: "Để mình mặc đồng phục vào đã. Rồi chúng ta có thể đi.",
        tip: "'Put on' = mặc vào, đeo vào (trang phục)."
      }
    ]
  },
  unit_2_my_house: {
    id: "unit_2_my_house",
    title: "Unit 2: Ngôi Nhà Của Tôi (My House)",
    icon: "🏡",
    badge: "SGK Lớp 6",
    sentences: [
      {
        category: "UNIT 2: NGÔI NHÀ CỦA TÔI",
        en: "Where do you live, Mi? - I live in a town house.",
        ipa: "/wɛr duː juː lɪv, Miː? - aɪ lɪv ɪn ə taʊn haʊs/",
        readVi: "Ue-r đu diu li-v, Mi? - Ai li-v in ờ tao-n hao-x.",
        vi: "Bạn sống ở đâu vậy Mi? - Mình sống trong một ngôi nhà phố.",
        tip: "'Town house' = nhà phố / nhà trong thị trấn."
      },
      {
        category: "UNIT 2: NGÔI NHÀ CỦA TÔI",
        en: "There are six rooms in my house.",
        ipa: "/ðɛr ɑːr sɪks ruːmz ɪn maɪ haʊs/",
        readVi: "Đe-r a xíc-x rum-z in mai hao-x.",
        vi: "Có sáu phòng trong ngôi nhà của mình.",
        tip: "'There are + danh từ số nhiều' = có nhiều thứ gì đó."
      },
      {
        category: "UNIT 2: NGÔI NHÀ CỦA TÔI",
        en: "My favourite room is my bedroom.",
        ipa: "/maɪ ˈfeɪvərɪt ruːm ɪz maɪ ˈbɛdruːm/",
        readVi: "Mai phây-vơ-rịt rum iz mai bét-rum.",
        vi: "Phòng yêu thích nhất của mình là phòng ngủ.",
        tip: "'Favourite' = yêu thích nhất."
      },
      {
        category: "UNIT 2: NGÔI NHÀ CỦA TÔI",
        en: "There is a big sofa and a television in the living room.",
        ipa: "/ðɛr ɪz ə bɪɡ ˈsoʊfə ænd ə ˈtɛləvɪʒən ɪn ðə ˈlɪvɪŋ ruːm/",
        readVi: "Đe-r iz ờ bíc-g xô-phơ en ờ te-le-vi-zần in đờ li-ving rum.",
        vi: "Có một chiếc ghế sofa lớn và một chiếc tivi trong phòng khách.",
        tip: "'Living room' = phòng khách."
      },
      {
        category: "UNIT 2: NGÔI NHÀ CỦA TÔI",
        en: "My cat is sleeping under the table in the kitchen.",
        ipa: "/maɪ kæt ɪz ˈsliːpɪŋ ˈʌndər ðə ˈteɪbəl ɪn ðə ˈkɪtʃɪn/",
        readVi: "Mai két iz x-li-ping ăn-đơ đờ tây-bồ in đờ kít-chần.",
        vi: "Con mèo của mình đang ngủ dưới gầm bàn trong bếp.",
        tip: "Giới từ chỉ vị trí: 'under the table' = dưới gầm bàn."
      },
      {
        category: "UNIT 2: NGÔI NHÀ CỦA TÔI",
        en: "I love my house because it is very cosy.",
        ipa: "/aɪ lʌv maɪ haʊs bɪˈkɔːz ɪt ɪz ˈvɛri ˈkoʊzi/",
        readVi: "Ai lóp-v mai hao-x bi-co-z ít iz ve-ri kô-zi.",
        vi: "Mình yêu ngôi nhà của mình vì nó rất ấm cúng.",
        tip: "'Cosy' = ấm cúng, dễ chịu."
      }
    ]
  },
  unit_3_my_friends: {
    id: "unit_3_my_friends",
    title: "Unit 3: Những Người Bạn Của Tôi (My Friends)",
    icon: "👫",
    badge: "SGK Lớp 6",
    sentences: [
      {
        category: "UNIT 3: NHỮNG NGƯỜI BẠN CỦA TÔI",
        en: "What does your best friend look like?",
        ipa: "/wʌt dʌz jʊər bɛst frɛnd lʊk laɪk/",
        readVi: "Uắt đa-z dơ bét-st phrèn-d lúc lai-k?",
        vi: "Bạn thân của bạn trông như thế nào?",
        tip: "'What does someone look like?' = hỏi về ngoại hình của ai đó."
      },
      {
        category: "UNIT 3: NHỮNG NGƯỜI BẠN CỦA TÔI",
        en: "She has long black hair and big brown eyes.",
        ipa: "/ʃiː hæz lɔːŋ blæk hɛr ænd bɪɡ braʊn aɪz/",
        readVi: "Si he-z loong blec-k he-r en bíc-g brao-n ai-z.",
        vi: "Cô ấy có mái tóc đen dài và đôi mắt nâu to tròn.",
        tip: "Cấu trúc miêu tả: 'has + tính từ + danh từ'."
      },
      {
        category: "UNIT 3: NHỮNG NGƯỜI BẠN CỦA TÔI",
        en: "He is very kind, helpful and clever.",
        ipa: "/hiː ɪz ˈvɛri kaɪnd, ˈhɛlpfʊl ænd ˈklɛvər/",
        readVi: "Hi iz ve-ri kain-d, héo-phun en cle-vơ.",
        vi: "Cậu ấy rất tốt bụng, hay giúp đỡ mọi người và thông minh.",
        tip: "Tính từ miêu tả tính cách: 'kind', 'helpful', 'clever'."
      },
      {
        category: "UNIT 3: NHỮNG NGƯỜI BẠN CỦA TÔI",
        en: "What is she doing now? - She is reading a book in the library.",
        ipa: "/wʌt ɪz ʃiː ˈduːɪŋ naʊ? - ʃiː ɪz ˈriːdɪŋ ə bʊk ɪn ðə ˈlaɪbrɛri/",
        readVi: "Uắt iz si đu-ing nao? - Si iz ri-đing ờ búc in đờ lai-brơ-ri.",
        vi: "Cô ấy đang làm gì bây giờ? - Cô ấy đang đọc sách trong thư viện.",
        tip: "Thì hiện tại tiếp diễn: 'is reading a book'."
      },
      {
        category: "UNIT 3: NHỮNG NGƯỜI BẠN CỦA TÔI",
        en: "We often play football and cycle together after school.",
        ipa: "/wiː ˈɔːfn pleɪ ˈfʊtbɔːl ænd ˈsaɪkəl təˈɡɛðər ˈæftər skuːl/",
        readVi: "Ui op-phừn plây phút-bol en xai-cồ tu-ge-đơ áp-ph-tơ x-cul.",
        vi: "Chúng mình thường đá bóng và đạp xe cùng nhau sau giờ học.",
        tip: "'Cycle together' = cùng nhau đạp xe."
      }
    ]
  },
  unit_4_my_neighbourhood: {
    id: "unit_4_my_neighbourhood",
    title: "Unit 4: Khu Phố Của Tôi (My Neighbourhood)",
    icon: "🏘️",
    badge: "SGK Lớp 6",
    sentences: [
      {
        category: "UNIT 4: KHU PHỐ CỦA TÔI",
        en: "Excuse me, can you tell me the way to the post office?",
        ipa: "/ɪkˈskjuːz miː, kæn juː tɛl miː ðə weɪ tuː ðə poʊst ˈɔːfɪs/",
        readVi: "Ích-x-kiu-z mi, ken diu teo mi đờ uây tu đờ pốt-st o-phịt-x?",
        vi: "Xin lỗi, bạn có thể chỉ đường cho mình đến bưu điện được không?",
        tip: "Cấu trúc hỏi đường chuẩn xác và lịch sự."
      },
      {
        category: "UNIT 4: KHU PHỐ CỦA TÔI",
        en: "Go straight ahead, and then turn left at the traffic lights.",
        ipa: "/ɡoʊ streɪt əˈhɛd, ænd ðɛn tɜːrn lɛft æt ðə ˈtræfɪk laɪts/",
        readVi: "Gâu x-trây-t ơ-hét, en đen tơn lép-ph-t ét đờ tre-phịch lai-t-x.",
        vi: "Hãy đi thẳng phía trước, rồi sau đó rẽ trái ở cột đèn giao thông.",
        tip: "'Go straight ahead' = đi thẳng. 'Turn left' = rẽ trái."
      },
      {
        category: "UNIT 4: KHU PHỐ CỦA TÔI",
        en: "It is on your right, next to the supermarket.",
        ipa: "/ɪt ɪz ɑːn jʊər raɪt, nɛkst tuː ðə ˈsuːpərmɑːrkɪt/",
        readVi: "Ít iz on dơ rai-t, néc-x-t tu đờ su-pơ-ma-kịt.",
        vi: "Nó nằm ở bên tay phải của bạn, ngay cạnh siêu thị.",
        tip: "'On your right' = ở bên phải bạn. 'Next to' = ngay bên cạnh."
      },
      {
        category: "UNIT 4: KHU PHỐ CỦA TÔI",
        en: "My neighbourhood is very quiet and peaceful.",
        ipa: "/maɪ ˈneɪbərhʊd ɪz ˈvɛri ˈkwaɪət ænd ˈpiːsfʊl/",
        readVi: "Mai nây-bơ-hút iz ve-ri quai-ợt en pít-x-phun.",
        vi: "Khu phố của mình rất yên tĩnh và thanh bình.",
        tip: "'Neighbourhood' = khu dân cư, khu phố lân cận."
      },
      {
        category: "UNIT 4: KHU PHỐ CỦA TÔI",
        en: "The people here are very friendly and helpful.",
        ipa: "/ðə ˈpiːpəl hɪr ɑːr ˈvɛri ˈfrɛndli ænd ˈhɛlpfʊl/",
        readVi: "Đờ pi-pồ hi-ơ a ve-ri phren-đ-li en héo-phun.",
        vi: "Người dân ở đây rất thân thiện và nhiệt tình giúp đỡ.",
        tip: "'Friendly and helpful' = thân thiện và nhiệt tình."
      }
    ]
  }
};

const SPEAKING_ITEMS = SENTENCE_UNITS_DATA.unit_1_my_new_school.sentences;

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
