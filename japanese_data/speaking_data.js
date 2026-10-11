// ========================================================
// JAPANESE_DATA / SPEAKING_DATA.JS
// Dữ liệu Luyện nói cả câu Tiếng Nhật (Shadowing Lab)
// Nguồn bài học: datasss/jp/luyen_noi_jp/
// ========================================================

const JA_SENTENCE_UNITS_DATA = {
  bai_1: {
    title: "Bài 1: わたしは マイク・ミラーです (Minna no Nihongo)",
    icon: "🌸",
    sentences: [
      // --- PHẦN 1: MẪU CÂU CỐT LÕI (文型) ---
      {
        category: "BÀI 1: MẪU CÂU CỐT LÕI",
        ja: "わたしは マイク・ミラーです。",
        romaji: "Watashi wa Maiku Miraa desu.",
        vi: "Tôi là Mike Miller.",
        tip: "Cấu trúc N1 は N2 です: N1 là N2. Trợ từ は đọc là 'wa'."
      },
      {
        category: "BÀI 1: MẪU CÂU CỐT LÕI",
        ja: "サントスさんは 学生じゃ ありません。",
        romaji: "Santosu-san wa gakusei ja arimasen.",
        vi: "Anh Santos không phải là sinh viên.",
        tip: "Cấu trúc phủ định lịch sự: 'じゃ ありません' (hoặc 'では ありません')."
      },
      {
        category: "BÀI 1: MẪU CÂU CỐT LÕI",
        ja: "ミラーさんは 会社員ですか。",
        romaji: "Miraa-san wa kaishain desu ka?",
        vi: "Anh Miller có phải là nhân viên công ty không?",
        tip: "Thêm 'か' ở cuối câu để tạo câu hỏi nghi vấn, lên giọng nhẹ ở cuối."
      },
      {
        category: "BÀI 1: MẪU CÂU CỐT LÕI",
        ja: "サントスさんも 会社員です。",
        romaji: "Santosu-san mo kaishain desu.",
        vi: "Anh Santos cũng là nhân viên công ty.",
        tip: "Trợ từ 'も' (mo) thay thế cho 'は' mang nghĩa là 'cũng'."
      },

      // --- PHẦN 2: HỘI THOẠI VÍ DỤ (例文) ---
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "「あなたは」マイク・ミラーさんですか。",
        romaji: "Anata wa Maiku Miraa-san desu ka?",
        vi: "Bạn có phải là anh Mike Miller không?",
        tip: "Trong giao tiếp thân thiết hoặc đã biết đối phương, có thể lược bớt 'あなたは'."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "いいえ、「わたしは」マイク・ミラーです。",
        romaji: "Iie, watashi wa Maiku Miraa desu.",
        vi: "Không, tôi là Mike Miller.",
        tip: "Đính chính lại tên hoặc phủ định câu hỏi trước đó."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "ミラーさんは 学生ですか。",
        romaji: "Miraa-san wa gakusei desu ka?",
        vi: "Anh Miller có phải là sinh viên không?",
        tip: "学生 (gakusei): học sinh, sinh viên."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "いいえ、「わたしは」学生じゃありません。",
        romaji: "Iie, watashi wa gakusei ja arimasen.",
        vi: "Không, tôi không phải là sinh viên.",
        tip: "Trả lời phủ định: いいえ + câu phủ định 'じゃありません'."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "ワンさんは 銀行員ですか。",
        romaji: "Wan-san wa ginkouin desu ka?",
        vi: "Anh Wang có phải là nhân viên ngân hàng không?",
        tip: "銀行員 (ginkouin): nhân viên ngân hàng."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "いいえ、「ワンさんは」銀行員じゃありません。医者です。",
        romaji: "Iie, Wan-san wa ginkouin ja arimasen. Isha desu.",
        vi: "Không, anh Wang không phải là nhân viên ngân hàng. Anh ấy là bác sĩ.",
        tip: "医者 (isha): bác sĩ."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "あの方は どなたですか。",
        romaji: "Ano kata wa donata desu ka?",
        vi: "Vị kia là ai thế ạ?",
        tip: "あの方 (ano kata) và どなた (donata) là cách hỏi lịch sự của あの人 (ano hito) và だれ (dare)."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "ワットさんです。さくら大学の先生です。",
        romaji: "Watto-san desu. Sakura daigaku no sensei desu.",
        vi: "Là thầy Watt. Thầy là giáo viên của Đại học Sakura.",
        tip: "Trợ từ 'の' biểu thị sở thuộc: 'さくら大学の先生' = giáo viên của trường Sakura."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "グプタさんは 会社員ですか。……はい、会社員です。",
        romaji: "Guputa-san wa kaishain desu ka? ...Hai, kaishain desu.",
        vi: "Anh Gupta có phải là nhân viên công ty không? - Vâng, là nhân viên công ty.",
        tip: "Trả lời khẳng định: はい + danh từ + です."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "カリナさんも 会社員ですか。……いいえ、「カリナさんは」学生です。",
        romaji: "Karina-san mo kaishain desu ka? ...Iie, Karina-san wa gakusei desu.",
        vi: "Chị Karina cũng là nhân viên công ty phải không? - Không, chị Karina là sinh viên.",
        tip: "Hỏi với 'も' (cũng) và trả lời đính chính với 'いいえ'."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "テレーザちゃんは 何歳ですか。……9歳です。",
        romaji: "Tereeza-chan wa nansai desu ka? ...Kyuu-sai desu.",
        vi: "Bé Teresa mấy tuổi rồi? - Bé 9 tuổi.",
        tip: "'何歳' (nansai) dùng hỏi tuổi trẻ em/người ngang tuổi. Lịch sự hơn dùng 'おいくつ' (oikutsu)."
      },

      // --- PHẦN 3: LUYỆN TẬP THAY THẾ (練習A) ---
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "わたしは 会社員です。",
        romaji: "Watashi wa kaishain desu.",
        vi: "Tôi là nhân viên công ty.",
        tip: "会社員 (kaishain): nhân viên công ty nói chung."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "ワンさんは 中国人です。医者です。",
        romaji: "Wan-san wa Chuugokujin desu. Isha desu.",
        vi: "Anh Wang là người Trung Quốc. Anh ấy là bác sĩ.",
        tip: "中国人 (Chuugokujin): Người Trung Quốc."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "わたしは カール・シュミットじゃ ありません。",
        romaji: "Watashi wa Kaaru Shumitto ja arimasen.",
        vi: "Tôi không phải là Karl Schmidt.",
        tip: "Tên người nước ngoài viết bằng Katakana."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "わたしは 教師じゃ ありません。",
        romaji: "Watashi wa kyoushi ja arimasen.",
        vi: "Tôi không phải là giáo viên.",
        tip: "教師 (kyoushi): nghề giáo viên (khi nói về nghề của mình)."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "イーさんは アメリカ人じゃ ありません。学生です。",
        romaji: "Ii-san wa Amerikajin ja arimasen. Gakusei desu.",
        vi: "Anh Lee không phải là người Mỹ. Anh ấy là sinh viên.",
        tip: "アメリカ人 (Amerikajin): Người Mỹ."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "あの人は 木村さんですか。",
        romaji: "Ano hito wa Kimura-san desu ka?",
        vi: "Người kia có phải là chị Kimura không?",
        tip: "あの人 (ano hito): người kia."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "あの人は マリアさんですか。",
        romaji: "Ano hito wa Maria-san desu ka?",
        vi: "Người kia có phải là chị Maria không?",
        tip: "マリア (Maria): Tên riêng viết bằng Katakana."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "あの人は だれですか。あの方は どなたですか。",
        romaji: "Ano hito wa dare desu ka? Ano kata wa donata desu ka?",
        vi: "Người kia là ai thế? / Vị kia là ai vậy ạ?",
        tip: "So sánh cặp từ thường và kính ngữ: あの人 - だれ vs あの方 - どなた."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "わたしは IMCの 社員です。",
        romaji: "Watashi wa IMC no shain desu.",
        vi: "Tôi là nhân viên công ty IMC.",
        tip: "社員 (shain): nhân viên khi đi kèm tên công ty cụ thể."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "カリナさんは 富士大学の 学生です。",
        romaji: "Karina-san wa Fuji daigaku no gakusei desu.",
        vi: "Chị Karina là sinh viên của trường Đại học Fuji.",
        tip: "富士大学 (Fuji daigaku): Đại học Fuji."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "ワットさんは さくら大学の 先生です。",
        romaji: "Watto-san wa Sakura daigaku no sensei desu.",
        vi: "Thầy Watt là giáo viên của trường Đại học Sakura.",
        tip: "先生 (sensei): thầy cô giáo."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "サントスさんは ブラジル人です。",
        romaji: "Santosu-san wa Burajirujin desu.",
        vi: "Anh Santos là người Brazil.",
        tip: "ブラジル人 (Burajirujin): Người Brazil."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "マリアさんも ブラジル人です。",
        romaji: "Maria-san mo Burajirujin desu.",
        vi: "Chị Maria cũng là người Brazil.",
        tip: "Trợ từ 'も' = cũng."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "あの人も ブラジル人ですか。",
        romaji: "Ano hito mo Burajirujin desu ka?",
        vi: "Người kia cũng là người Brazil phải không?",
        tip: "Kết hợp trợ từ 'も' và nghi vấn từ 'か'."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "テレーザちゃんは 9歳です。",
        romaji: "Tereeza-chan wa kyuu-sai desu.",
        vi: "Bé Teresa 9 tuổi.",
        tip: "Số đếm tuổi: 9歳 (kyuu-sai)."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "たろうちゃんは 8歳です。",
        romaji: "Tarou-chan wa hassai desu.",
        vi: "Bé Taro 8 tuổi.",
        tip: "Biến âm đếm tuổi đặc biệt: 8歳 đọc là 'はっさい' (hassai), không đọc là 'hachisai'."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "テレーザちゃんは 何歳（おいくつ）ですか。",
        romaji: "Tereeza-chan wa nansai (oikutsu) desu ka?",
        vi: "Bé Teresa bao nhiêu tuổi rồi?",
        tip: "Hỏi tuổi lịch sự dùng 'おいくつ' (oikutsu)."
      }
    ]
  }
};
