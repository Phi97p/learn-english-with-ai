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
      },
      {
        category: "BÀI 1: MẪU CÂU CỐT LÕI",
        ja: "サントスさんは 学生じゃ ありません。",
        romaji: "Santosu-san wa gakusei ja arimasen.",
        vi: "Anh Santos không phải là sinh viên.",
      },
      {
        category: "BÀI 1: MẪU CÂU CỐT LÕI",
        ja: "ミラーさんは 会社員ですか。",
        romaji: "Miraa-san wa kaishain desu ka?",
        vi: "Anh Miller có phải là nhân viên công ty không?",
      },
      {
        category: "BÀI 1: MẪU CÂU CỐT LÕI",
        ja: "サントスさんも 会社員です。",
        romaji: "Santosu-san mo kaishain desu.",
        vi: "Anh Santos cũng là nhân viên công ty.",
      },

      // --- PHẦN 2: HỘI THOẠI VÍ DỤ (例文) ---
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "「あなたは」マイク・ミラーさんですか。",
        romaji: "Anata wa Maiku Miraa-san desu ka?",
        vi: "Bạn có phải là anh Mike Miller không?",
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "いいえ、「わたしは」マイク・ミラーです。",
        romaji: "Iie, watashi wa Maiku Miraa desu.",
        vi: "Không, tôi là Mike Miller.",
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "ミラーさんは 学生ですか。",
        romaji: "Miraa-san wa gakusei desu ka?",
        vi: "Anh Miller có phải là sinh viên không?",
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "いいえ、「わたしは」学生じゃありません。",
        romaji: "Iie, watashi wa gakusei ja arimasen.",
        vi: "Không, tôi không phải là sinh viên.",
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "ワンさんは 銀行員ですか。",
        romaji: "Wan-san wa ginkouin desu ka?",
        vi: "Anh Wang có phải là nhân viên ngân hàng không?",
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "いいえ、「ワンさんは」銀行員じゃありません。医者です。",
        romaji: "Iie, Wan-san wa ginkouin ja arimasen. Isha desu.",
        vi: "Không, anh Wang không phải là nhân viên ngân hàng. Anh ấy là bác sĩ.",
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "あの方は どなたですか。",
        romaji: "Ano kata wa donata desu ka?",
        vi: "Vị kia là ai thế ạ?",
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "ワットさんです。さくら大学の先生です。",
        romaji: "Watto-san desu. Sakura daigaku no sensei desu.",
        vi: "Là thầy Watt. Thầy là giáo viên của Đại học Sakura.",
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "グプタさんは 会社員ですか。……はい、会社員です。",
        romaji: "Guputa-san wa kaishain desu ka? ...Hai, kaishain desu.",
        vi: "Anh Gupta có phải là nhân viên công ty không? - Vâng, là nhân viên công ty.",
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "カリナさんも 会社員ですか。……いいえ、「カリナさんは」学生です。",
        romaji: "Karina-san mo kaishain desu ka? ...Iie, Karina-san wa gakusei desu.",
        vi: "Chị Karina cũng là nhân viên công ty phải không? - Không, chị Karina là sinh viên.",
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "テレーザちゃんは 何歳ですか。……9歳です。",
        romaji: "Tereeza-chan wa nansai desu ka? ...Kyuu-sai desu.",
        vi: "Bé Teresa mấy tuổi rồi? - Bé 9 tuổi.",
      },

      // --- PHẦN 3: LUYỆN TẬP THAY THẾ (練習A) ---
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "わたしは 会社員です。",
        romaji: "Watashi wa kaishain desu.",
        vi: "Tôi là nhân viên công ty.",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "ワンさんは 中国人です。医者です。",
        romaji: "Wan-san wa Chuugokujin desu. Isha desu.",
        vi: "Anh Wang là người Trung Quốc. Anh ấy là bác sĩ.",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "わたしは カール・シュミットじゃ ありません。",
        romaji: "Watashi wa Kaaru Shumitto ja arimasen.",
        vi: "Tôi không phải là Karl Schmidt.",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "わたしは 教師じゃ ありません。",
        romaji: "Watashi wa kyoushi ja arimasen.",
        vi: "Tôi không phải là giáo viên.",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "イーさんは アメリカ人じゃ ありません。学生です。",
        romaji: "Ii-san wa Amerikajin ja arimasen. Gakusei desu.",
        vi: "Anh Lee không phải là người Mỹ. Anh ấy là sinh viên.",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "あの人は 木村さんですか。",
        romaji: "Ano hito wa Kimura-san desu ka?",
        vi: "Người kia có phải là chị Kimura không?",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "あの人は マリアさんですか。",
        romaji: "Ano hito wa Maria-san desu ka?",
        vi: "Người kia có phải là chị Maria không?",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "あの人は だれですか。あの方は どなたですか。",
        romaji: "Ano hito wa dare desu ka? Ano kata wa donata desu ka?",
        vi: "Người kia là ai thế? / Vị kia là ai vậy ạ?",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "わたしは IMCの 社員です。",
        romaji: "Watashi wa IMC no shain desu.",
        vi: "Tôi là nhân viên công ty IMC.",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "カリナさんは 富士大学の 学生です。",
        romaji: "Karina-san wa Fuji daigaku no gakusei desu.",
        vi: "Chị Karina là sinh viên của trường Đại học Fuji.",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "ワットさんは さくら大学の 先生です。",
        romaji: "Watto-san wa Sakura daigaku no sensei desu.",
        vi: "Thầy Watt là giáo viên của trường Đại học Sakura.",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "サントスさんは ブラジル人です。",
        romaji: "Santosu-san wa Burajirujin desu.",
        vi: "Anh Santos là người Brazil.",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "マリアさんも ブラジル人です。",
        romaji: "Maria-san mo Burajirujin desu.",
        vi: "Chị Maria cũng là người Brazil.",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "あの人も ブラジル人ですか。",
        romaji: "Ano hito mo Burajirujin desu ka?",
        vi: "Người kia cũng là người Brazil phải không?",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "テレーザちゃんは 9歳です。",
        romaji: "Tereeza-chan wa kyuu-sai desu.",
        vi: "Bé Teresa 9 tuổi.",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "たろうちゃんは 8歳です。",
        romaji: "Tarou-chan wa hassai desu.",
        vi: "Bé Taro 8 tuổi.",
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "テレーザちゃんは 何歳（おいくつ）ですか。",
        romaji: "Tereeza-chan wa nansai (oikutsu) desu ka?",
        vi: "Bé Teresa bao nhiêu tuổi rồi?",
      }
    ]
  }
};
