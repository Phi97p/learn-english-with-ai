// ========================================================
// JAPANESE_DATA.JS - Giáo trình Luyện Nói & Phát Âm Tiếng Nhật
// Dễ dàng thay thế hoặc mở rộng khi bạn thêm tài liệu học tiếng Nhật mới!
// ========================================================

const JA_SENTENCE_UNITS_DATA = {
  unit_1_greeting: {
    title: "Bài 1: Chào hỏi & Tự giới thiệu (あいさつと自己紹介)",
    icon: "🌸",
    sentences: [
      {
        category: "BÀI 1: CHÀO HỎI & TỰ GIỚI THIỆU",
        ja: "おはようございます。",
        romaji: "Ohayou gozaimasu.",
        readVi: "Ô-ha-yô gô-dzai-ma-xư",
        vi: "Chào buổi sáng (Lịch sự, dùng với cấp trên, đồng nghiệp, người lớn tuổi).",
        tip: "Kéo dài âm 'you' (ô-), hạ giọng nhẹ ở đuôi 'masu' (đọc nhẹ là ma-xư)."
      },
      {
        category: "BÀI 1: CHÀO HỎI & TỰ GIỚI THIỆU",
        ja: "こんにちは。",
        romaji: "Konnichiwa.",
        readVi: "Kôn-ni-chi-oa",
        vi: "Xin chào (Dùng ban ngày, từ khoảng 10h sáng đến khi trời tối).",
        tip: "Chữ は ở cuối đọc là 'wa' (oa), nhấn nhẹ vào âm 'ni'."
      },
      {
        category: "BÀI 1: CHÀO HỎI & TỰ GIỚI THIỆU",
        ja: "こんばんは。",
        romaji: "Konbanwa.",
        readVi: "Kôm-ban-oa",
        vi: "Chào buổi tối (Dùng khi gặp nhau sau khi trời tối).",
        tip: "Âm ん trước ば đọc tựa như chữ 'm' (Kôm-ban-oa)."
      },
      {
        category: "BÀI 1: CHÀO HỎI & TỰ GIỚI THIỆU",
        ja: "はじめまして。",
        romaji: "Hajimemashite.",
        readVi: "Ha-di-mê-ma-si-tê",
        vi: "Rất hân hạnh được gặp bạn (Nói ở đầu buổi gặp mặt đầu tiên).",
        tip: "Âm 'ji' phát âm rung nhẹ đầu lưỡi (di-mê)."
      },
      {
        category: "BÀI 1: CHÀO HỎI & TỰ GIỚI THIỆU",
        ja: "どうぞ よろしく おねがいします。",
        romaji: "Douzo yoroshiku onegaishimasu.",
        readVi: "Đô-zô yô-rô-si-kư ô-nê-gai-si-ma-xư",
        vi: "Rất mong nhận được sự giúp đỡ của bạn (Câu chào kết thúc giới thiệu bản thân).",
        tip: "Câu nói kinh điển và quan trọng nhất trong văn hóa giao tiếp Nhật Bản."
      },
      {
        category: "BÀI 1: CHÀO HỎI & TỰ GIỚI THIỆU",
        ja: "わたしは ベトナム人です。",
        romaji: "Watashi wa Betonamu-jin desu.",
        readVi: "Oa-ta-si oa Bê-tô-na-mư din đê-xư",
        vi: "Tôi là người Việt Nam.",
        tip: "Đuôi 'desu' đọc nhẹ âm u ở cuối (đê-xư)."
      },
      {
        category: "BÀI 1: CHÀO HỎI & TỰ GIỚI THIỆU",
        ja: "ありがとうございます。",
        romaji: "Arigatou gozaimasu.",
        readVi: "A-ri-ga-tô gô-dzai-ma-xư",
        vi: "Xin chân thành cảm ơn bạn.",
        tip: "Kéo dài trường âm 'tou' thành 'tô'."
      },
      {
        category: "BÀI 1: CHÀO HỎI & TỰ GIỚI THIỆU",
        ja: "すみません、もういちど おねがいします。",
        romaji: "Sumimasen, mou ichido onegaishimasu.",
        readVi: "Xư-mi-ma-xen, mô i-chi-đô ô-nê-gai-si-ma-xư",
        vi: "Xin lỗi, bạn có thể nói lại một lần nữa giúp tôi được không?",
        tip: "'Sumimasen' dùng rất phổ biến khi gọi người khác hoặc xin lỗi lịch sự."
      },
      {
        category: "BÀI 1: CHÀO HỎI & TỰ GIỚI THIỆU",
        ja: "じゃ、また あした！",
        romaji: "Ja, mata ashita!",
        readVi: "Da, ma-ta a-si-ta!",
        vi: "Hẹn gặp lại bạn vào ngày mai nhé! (Thân mật).",
        tip: "'Ashita' là ngày mai. Dùng chào bạn bè hoặc đồng nghiệp thân thiết khi ra về."
      }
    ]
  },
  unit_2_daily: {
    title: "Bài 2: Giao tiếp Đời sống & Mua sắm (日常と買い物)",
    icon: "🍵",
    sentences: [
      {
        category: "BÀI 2: ĐỜI SỐNG & MUA SẮM",
        ja: "これ、いくらですか。",
        romaji: "Kore, ikura desu ka?",
        readVi: "Kô-rê, i-ku-ra đê-xư ka?",
        vi: "Cái này giá bao nhiêu tiền vậy?",
        tip: "'Ikura' = bao nhiêu tiền. Lên giọng nhẹ ở cuối câu 'ka?'."
      },
      {
        category: "BÀI 2: ĐỜI SỐNG & MUA SẮM",
        ja: "これを ください。",
        romaji: "Kore o kudasai.",
        readVi: "Kô-rê ô kư-đa-sai",
        vi: "Làm ơn cho tôi lấy cái này.",
        tip: "Dùng khi chọn món ăn trong quán hoặc mua hàng ở tiệm."
      },
      {
        category: "BÀI 2: ĐỜI SỐNG & MUA SẮM",
        ja: "おかいけい、おねがいします。",
        romaji: "Okaikei, onegaishimasu.",
        readVi: "Ô-kai-kê, ô-nê-gai-si-ma-xư",
        vi: "Làm ơn tính tiền giúp tôi.",
        tip: "Dùng để gọi thanh toán tại nhà hàng, quán ăn Nhật Bản."
      },
      {
        category: "BÀI 2: ĐỜI SỐNG & MUA SẮM",
        ja: "えきは どこですか。",
        romaji: "Eki wa doko desu ka?",
        readVi: "Ê-ki oa đô-kô đê-xư ka?",
        vi: "Nhà ga ở đâu vậy?",
        tip: "'Eki' = nhà ga. 'Doko' = ở đâu."
      },
      {
        category: "BÀI 2: ĐỜI SỐNG & MUA SẮM",
        ja: "ごちそうさまでした。",
        romaji: "Gochisousama deshita.",
        readVi: "Gô-chi-sô-xa-ma đê-si-ta",
        vi: "Cảm ơn vì bữa ăn ngon (Nói sau khi ăn xong).",
        tip: "Câu nói phép lịch sự đặc trưng khi kết thúc bữa ăn."
      }
    ]
  }
};

const JA_VOCAB_SCENARIOS_DATA = {
  greeting_vocab: {
    title: "Chủ đề 1: Từ vựng Chào hỏi & Xưng hô",
    icon: "🌸",
    words: [
      { word: "こんにちは", romaji: "Konnichiwa", readVi: "Kôn-ni-chi-oa", vi: "Xin chào (Ban ngày)", tip: "Âm は đọc là 'wa'" },
      { word: "おはよう", romaji: "Ohayou", readVi: "Ô-ha-yô", vi: "Chào buổi sáng (Thân mật)", tip: "Thêm 'gozaimasu' để thành lịch sự" },
      { word: "こんばんは", romaji: "Konbanwa", readVi: "Kôm-ban-oa", vi: "Chào buổi tối", tip: "Dùng khi trời tối" },
      { word: "ありがとう", romaji: "Arigatou", readVi: "A-ri-ga-tô", vi: "Cảm ơn (Thân mật)", tip: "Kéo dài âm 'tô'" },
      { word: "すみません", romaji: "Sumimasen", readVi: "Xư-mi-ma-xen", vi: "Xin lỗi / Làm phiền một chút", tip: "Từ vựng thông dụng nhất khi mở lời" },
      { word: "はじめまして", romaji: "Hajimemashite", readVi: "Ha-di-mê-ma-si-tê", vi: "Hân hạnh gặp bạn", tip: "Chào khi gặp mặt lần đầu" },
      { word: "わたし", romaji: "Watashi", readVi: "Oa-ta-si", vi: "Tôi / Bản thân tôi", tip: "Đại từ nhân xưng ngôi thứ nhất" },
      { word: "あなた", romaji: "Anata", readVi: "A-na-ta", vi: "Bạn / Anh / Chị", tip: "Đại từ nhân xưng ngôi thứ hai" },
      { word: "はい", romaji: "Hai", readVi: "Hai", vi: "Vâng / Đúng vậy", tip: "Xác nhận hoặc đồng ý" },
      { word: "いいえ", romaji: "Iie", readVi: "I-i-ê", vi: "Không phải / Không có chi", tip: "Kéo dài âm 'i'" }
    ]
  },
  daily_vocab: {
    title: "Chủ đề 2: Đồ vật & Địa điểm thường gặp",
    icon: "🍵",
    words: [
      { word: "これ", romaji: "Kore", readVi: "Kô-rê", vi: "Cái này (Gần người nói)", tip: "Dùng để chỉ vật ở gần mình" },
      { word: "それ", romaji: "Sore", readVi: "Xô-rê", vi: "Cái đó (Gần người nghe)", tip: "Chỉ vật ở gần đối phương" },
      { word: "あれ", romaji: "Are", readVi: "A-rê", vi: "Cái kia (Xa cả hai người)", tip: "Chỉ vật ở xa cả hai người" },
      { word: "えき", romaji: "Eki", readVi: "Ê-ki", vi: "Nhà ga xe lửa", tip: "Từ vựng rất quan trọng khi đi lại tại Nhật" },
      { word: "みず", romaji: "Mizu", readVi: "Mi-dzu", vi: "Nước uống", tip: "Âm 'zu' đọc rung lưỡi" },
      { word: "おちゃ", romaji: "Ocha", readVi: "Ô-cha", vi: "Trà Nhật", tip: "Đọc bật nhẹ 'cha'" },
      { word: "ごはん", romaji: "Gohan", readVi: "Gô-han", vi: "Cơm / Bữa ăn", tip: "Từ chỉ bữa cơm hàng ngày" },
      { word: "いくら", romaji: "Ikura", readVi: "I-ku-ra", vi: "Bao nhiêu tiền", tip: "Dùng khi hỏi giá cả" }
    ]
  }
};
