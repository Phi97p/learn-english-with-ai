// ========================================================
// JAPANESE_DATA.JS - Dữ liệu Học Tiếng Nhật
// Nguồn bài học: datasss/jp/luyen_noi_jp/bai_1.txt
// ========================================================

// 1. Dữ liệu luyện nói cả câu Tiếng Nhật (Shadowing Lab)
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
        readVi: "Oa-ta-si oa Mai-kư Mi-laa đê-xư.",
        vi: "Tôi là Mike Miller.",
        tip: "Cấu trúc N1 は N2 です: N1 là N2. Trợ từ は đọc là 'wa'."
      },
      {
        category: "BÀI 1: MẪU CÂU CỐT LÕI",
        ja: "サントスさんは 学生じゃ ありません。",
        romaji: "Santosu-san wa gakusei ja arimasen.",
        readVi: "Xan-tô-xư xan oa ga-kư-xê da a-ri-ma-xen.",
        vi: "Anh Santos không phải là sinh viên.",
        tip: "Cấu trúc phủ định lịch sự: 'じゃ ありません' (hoặc 'では ありません')."
      },
      {
        category: "BÀI 1: MẪU CÂU CỐT LÕI",
        ja: "ミラーさんは 会社員ですか。",
        romaji: "Miraa-san wa kaishain desu ka?",
        readVi: "Mi-laa xan oa kai-sa-in đê-xư ka?",
        vi: "Anh Miller có phải là nhân viên công ty không?",
        tip: "Thêm 'か' ở cuối câu để tạo câu hỏi nghi vấn, lên giọng nhẹ ở cuối."
      },
      {
        category: "BÀI 1: MẪU CÂU CỐT LÕI",
        ja: "サントスさんも 会社員です。",
        romaji: "Santosu-san mo kaishain desu.",
        readVi: "Xan-tô-xư xan mô kai-sa-in đê-xư.",
        vi: "Anh Santos cũng là nhân viên công ty.",
        tip: "Trợ từ 'も' (mo) thay thế cho 'は' mang nghĩa là 'cũng'."
      },

      // --- PHẦN 2: HỘI THOẠI VÍ DỤ (例文) ---
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "「あなたは」マイク・ミラーさんですか。",
        romaji: "Anata wa Maiku Miraa-san desu ka?",
        readVi: "A-na-ta oa Mai-kư Mi-laa xan đê-xư ka?",
        vi: "Bạn có phải là anh Mike Miller không?",
        tip: "Trong giao tiếp thân thiết hoặc đã biết đối phương, có thể lược bớt 'あなたは'."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "いいえ、「わたしは」マイク・ミラーです。",
        romaji: "Iie, watashi wa Maiku Miraa desu.",
        readVi: "I-i-ê, oa-ta-si oa Mai-kư Mi-laa đê-xư.",
        vi: "Không, tôi là Mike Miller.",
        tip: "Đính chính lại tên hoặc phủ định câu hỏi trước đó."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "ミラーさんは 学生ですか。",
        romaji: "Miraa-san wa gakusei desu ka?",
        readVi: "Mi-laa xan oa ga-kư-xê đê-xư ka?",
        vi: "Anh Miller có phải là sinh viên không?",
        tip: "学生 (gakusei): học sinh, sinh viên."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "いいえ、「わたしは」学生じゃありません。",
        romaji: "Iie, watashi wa gakusei ja arimasen.",
        readVi: "I-i-ê, oa-ta-si oa ga-kư-xê da a-ri-ma-xen.",
        vi: "Không, tôi không phải là sinh viên.",
        tip: "Trả lời phủ định: いいえ + câu phủ định 'じゃありません'."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "ワンさんは 銀行員ですか。",
        romaji: "Wan-san wa ginkouin desu ka?",
        readVi: "Oan xan oa gin-cô-in đê-xư ka?",
        vi: "Anh Wang có phải là nhân viên ngân hàng không?",
        tip: "銀行員 (ginkouin): nhân viên ngân hàng."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "いいえ、「ワンさんは」銀行員じゃありません。医者です。",
        romaji: "Iie, Wan-san wa ginkouin ja arimasen. Isha desu.",
        readVi: "I-i-ê, Oan xan oa gin-cô-in da a-ri-ma-xen. I-sa đê-xư.",
        vi: "Không, anh Wang không phải là nhân viên ngân hàng. Anh ấy là bác sĩ.",
        tip: "医者 (isha): bác sĩ."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "あの方は どなたですか。",
        romaji: "Ano kata wa donata desu ka?",
        readVi: "A-nô ka-ta oa đô-na-ta đê-xư ka?",
        vi: "Vị kia là ai thế ạ?",
        tip: "あの方 (ano kata) và どなた (donata) là cách hỏi lịch sự của あの人 (ano hito) và だれ (dare)."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "ワットさんです。さくら大学の先生です。",
        romaji: "Watto-san desu. Sakura daigaku no sensei desu.",
        readVi: "Oát-tô xan đê-xư. Xa-kư-ra đai-ga-kư nô xen-xê đê-xư.",
        vi: "Là thầy Watt. Thầy là giáo viên của Đại học Sakura.",
        tip: "Trợ từ 'の' biểu thị sở thuộc: 'さくら大学の先生' = giáo viên của trường Sakura."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "グプタさんは 会社員ですか。……はい、会社員です。",
        romaji: "Guputa-san wa kaishain desu ka? ...Hai, kaishain desu.",
        readVi: "Gup-ta xan oa kai-sa-in đê-xư ka? ...Hai, kai-sa-in đê-xư.",
        vi: "Anh Gupta có phải là nhân viên công ty không? - Vâng, là nhân viên công ty.",
        tip: "Trả lời khẳng định: はい + danh từ + です."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "カリナさんも 会社員ですか。……いいえ、「カリナさんは」学生です。",
        romaji: "Karina-san mo kaishain desu ka? ...Iie, Karina-san wa gakusei desu.",
        readVi: "Ka-ri-na xan mô kai-sa-in đê-xư ka? ...I-i-ê, Ka-ri-na xan oa ga-kư-xê đê-xư.",
        vi: "Chị Karina cũng là nhân viên công ty phải không? - Không, chị Karina là sinh viên.",
        tip: "Hỏi với 'も' (cũng) và trả lời đính chính với 'いいえ'."
      },
      {
        category: "BÀI 1: VÍ DỤ HỘI THOẠI",
        ja: "テレーザちゃんは 何歳ですか。……9歳です。",
        romaji: "Tereeza-chan wa nansai desu ka? ...Kyuu-sai desu.",
        readVi: "Tê-rê-za chan oa nan-xai đê-xư ka? ...Ki-u xai đê-xư.",
        vi: "Bé Teresa mấy tuổi rồi? - Bé 9 tuổi.",
        tip: "'何歳' (nansai) dùng hỏi tuổi trẻ em/người ngang tuổi. Lịch sự hơn dùng 'おいくつ' (oikutsu)."
      },

      // --- PHẦN 3: LUYỆN TẬP THAY THẾ (練習A) ---
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "わたしは 会社員です。",
        romaji: "Watashi wa kaishain desu.",
        readVi: "Oa-ta-si oa kai-sa-in đê-xư.",
        vi: "Tôi là nhân viên công ty.",
        tip: "会社員 (kaishain): nhân viên công ty nói chung."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "ワンさんは 中国人です。医者です。",
        romaji: "Wan-san wa Chuugokujin desu. Isha desu.",
        readVi: "Oan xan oa Chuu-gô-kư-din đê-xư. I-sa đê-xư.",
        vi: "Anh Wang là người Trung Quốc. Anh ấy là bác sĩ.",
        tip: "中国人 (Chuugokujin): Người Trung Quốc."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "わたしは カール・シュミットじゃ ありません。",
        romaji: "Watashi wa Kaaru Shumitto ja arimasen.",
        readVi: "Oa-ta-si oa Kaa-rư Su-mít-tô da a-ri-ma-xen.",
        vi: "Tôi không phải là Karl Schmidt.",
        tip: "Tên người nước ngoài viết bằng Katakana."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "わたしは 教師じゃ ありません。",
        romaji: "Watashi wa kyoushi ja arimasen.",
        readVi: "Oa-ta-si oa kyô-si da a-ri-ma-xen.",
        vi: "Tôi không phải là giáo viên.",
        tip: "教師 (kyoushi): nghề giáo viên (khi nói về nghề của mình)."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "イーさんは アメリカ人じゃ ありません。学生です。",
        romaji: "Ii-san wa Amerikajin ja arimasen. Gakusei desu.",
        readVi: "I-i xan oa A-mê-ri-ka-din da a-ri-ma-xen. Ga-kư-xê đê-xư.",
        vi: "Anh Lee không phải là người Mỹ. Anh ấy là sinh viên.",
        tip: "アメリカ人 (Amerikajin): Người Mỹ."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "あの人は 木村さんですか。",
        romaji: "Ano hito wa Kimura-san desu ka?",
        readVi: "A-nô hi-tô oa Ki-mu-ra xan đê-xư ka?",
        vi: "Người kia có phải là chị Kimura không?",
        tip: "あの人 (ano hito): người kia."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "あの人は マリアさんですか。",
        romaji: "Ano hito wa Maria-san desu ka?",
        readVi: "A-nô hi-tô oa Ma-ri-a xan đê-xư ka?",
        vi: "Người kia có phải là chị Maria không?",
        tip: "マリア (Maria): Tên riêng viết bằng Katakana."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "あの人は だれですか。あの方は どなたですか。",
        romaji: "Ano hito wa dare desu ka? Ano kata wa donata desu ka?",
        readVi: "A-nô hi-tô oa đa-rê đê-xư ka? A-nô ka-ta oa đô-na-ta đê-xư ka?",
        vi: "Người kia là ai thế? / Vị kia là ai vậy ạ?",
        tip: "So sánh cặp từ thường và kính ngữ: あの人 - だれ vs あの方 - どなた."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "わたしは IMCの 社員です。",
        romaji: "Watashi wa IMC no shain desu.",
        readVi: "Oa-ta-si oa Ai-Em-Xi nô sa-in đê-xư.",
        vi: "Tôi là nhân viên công ty IMC.",
        tip: "社員 (shain): nhân viên khi đi kèm tên công ty cụ thể."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "カリナさんは 富士大学の 学生です。",
        romaji: "Karina-san wa Fuji daigaku no gakusei desu.",
        readVi: "Ka-ri-na xan oa Phu-di đai-ga-kư nô ga-kư-xê đê-xư.",
        vi: "Chị Karina là sinh viên của trường Đại học Fuji.",
        tip: "富士大学 (Fuji daigaku): Đại học Fuji."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "ワットさんは さくら大学の 先生です。",
        romaji: "Watto-san wa Sakura daigaku no sensei desu.",
        readVi: "Oát-tô xan đê-xư. Xa-kư-ra đai-ga-kư nô xen-xê đê-xư.",
        vi: "Thầy Watt là giáo viên của trường Đại học Sakura.",
        tip: "先生 (sensei): thầy cô giáo."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "サントスさんは ブラジル人です。",
        romaji: "Santosu-san wa Burajirujin desu.",
        readVi: "Xan-tô-xư xan oa Bu-ra-di-ru-din đê-xư.",
        vi: "Anh Santos là người Brazil.",
        tip: "ブラジル人 (Burajirujin): Người Brazil."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "マリアさんも ブラジル人です。",
        romaji: "Maria-san mo Burajirujin desu.",
        readVi: "Ma-ri-a xan mô Bu-ra-di-ru-din đê-xư.",
        vi: "Chị Maria cũng là người Brazil.",
        tip: "Trợ từ 'も' = cũng."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "あの人も ブラジル人ですか。",
        romaji: "Ano hito mo Burajirujin desu ka?",
        readVi: "A-nô hi-tô mô Bu-ra-di-ru-din đê-xư ka?",
        vi: "Người kia cũng là người Brazil phải không?",
        tip: "Kết hợp trợ từ 'も' và nghi vấn từ 'か'."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "テレーザちゃんは 9歳です。",
        romaji: "Tereeza-chan wa kyuu-sai desu.",
        readVi: "Tê-rê-za chan oa ki-u xai đê-xư.",
        vi: "Bé Teresa 9 tuổi.",
        tip: "Số đếm tuổi: 9歳 (kyuu-sai)."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "たろうちゃんは 8歳です。",
        romaji: "Tarou-chan wa hassai desu.",
        readVi: "Ta-rô chan oa hát-xai đê-xư.",
        vi: "Bé Taro 8 tuổi.",
        tip: "Biến âm đếm tuổi đặc biệt: 8歳 đọc là 'はっさい' (hassai), không đọc là 'hachisai'."
      },
      {
        category: "BÀI 1: LUYỆN TẬP THAY THẾ",
        ja: "テレーザちゃんは 何歳（おいくつ）ですか。",
        romaji: "Tereeza-chan wa nansai (oikutsu) desu ka?",
        readVi: "Tê-rê-za chan oa nan-xai (ô-i-kư-tsư) đê-xư ka?",
        vi: "Bé Teresa bao nhiêu tuổi rồi?",
        tip: "Hỏi tuổi lịch sự dùng 'おいくつ' (oikutsu)."
      }
    ]
  }
};

// 2. Dữ liệu luyện nói từ vựng Tiếng Nhật
const JA_VOCAB_SCENARIOS_DATA = {
  vocab_bai_1: {
    id: "vocab_bai_1",
    title: "Từ vựng Bài 1: Đại từ & Nghề nghiệp",
    icon: "🌸",
    words: [
      {
        word: "わたし",
        romaji: "Watashi",
        readVi: "Oa-ta-si",
        vi: "Tôi, bản thân tôi",
        tip: "Đại từ nhân xưng ngôi thứ nhất phổ biến nhất"
      },
      {
        word: "あなた",
        romaji: "Anata",
        readVi: "A-na-ta",
        vi: "Bạn, anh, chị (ngôi thứ hai)",
        tip: "Hạn chế dùng khi đã biết tên đối phương"
      },
      {
        word: "あの人",
        romaji: "Ano hito",
        readVi: "A-nô hi-tô",
        vi: "Người kia",
        tip: "Chỉ người thứ 3 ở đằng xa"
      },
      {
        word: "あの方",
        romaji: "Ano kata",
        readVi: "A-nô ka-ta",
        vi: "Vị kia (Lịch sự)",
        tip: "Cách nói lịch sự, tôn kính của 'あの人'"
      },
      {
        word: "学生",
        romaji: "Gakusei",
        readVi: "Ga-kư-xê",
        vi: "Học sinh, sinh viên",
        tip: "Chỉ người đang theo học tại trường lớp"
      },
      {
        word: "会社員",
        romaji: "Kaishain",
        readVi: "Kai-sa-in",
        vi: "Nhân viên công ty",
        tip: "Chỉ nghề nghiệp nói chung"
      },
      {
        word: "社員",
        romaji: "Shain",
        readVi: "Xa-in",
        vi: "Nhân viên của (công ty cụ thể)",
        tip: "Dùng khi đi kèm tên công ty: [Công ty] の 社員"
      },
      {
        word: "銀行員",
        romaji: "Ginkouin",
        readVi: "Gin-cô-in",
        vi: "Nhân viên ngân hàng",
        tip: "Nghề nghiệp làm việc tại ngân hàng"
      },
      {
        word: "医者",
        romaji: "Isha",
        readVi: "I-sa",
        vi: "Bác sĩ",
        tip: "Nghề nghiệp khám chữa bệnh"
      },
      {
        word: "研究者",
        romaji: "Kenkyuusha",
        readVi: "Ken-kyuu-sa",
        vi: "Nhà nghiên cứu",
        tip: "Người làm công tác nghiên cứu học thuật"
      },
      {
        word: "エンジニア",
        romaji: "Enjinia",
        readVi: "En-di-ni-a",
        vi: "Kỹ sư",
        tip: "Từ mượn tiếng Anh viết bằng Katakana"
      },
      {
        word: "大学",
        romaji: "Daigaku",
        readVi: "Đai-ga-kư",
        vi: "Trường đại học",
        tip: "Cơ sở giáo dục bậc đại học"
      },
      {
        word: "病院",
        romaji: "Byouin",
        readVi: "Byô-in",
        vi: "Bệnh viện",
        tip: "Nơi khám chữa bệnh, chú ý âm ghép 'byo'"
      },
      {
        word: "だれ",
        romaji: "Dare",
        readVi: "Đa-rê",
        vi: "Ai? (Nghi vấn từ)",
        tip: "Từ để hỏi về người"
      },
      {
        word: "どなた",
        romaji: "Donata",
        readVi: "Đô-na-ta",
        vi: "Vị nào? (Lịch sự của だれ)",
        tip: "Từ để hỏi người một cách lịch sự, trang trọng"
      },
      {
        word: "何歳",
        romaji: "Nansai",
        readVi: "Nan-xai",
        vi: "Mấy tuổi?",
        tip: "Dùng để hỏi tuổi thông thường"
      },
      {
        word: "おいくつ",
        romaji: "Oikutsu",
        readVi: "Ô-i-kư-tsư",
        vi: "Bao nhiêu tuổi? (Lịch sự)",
        tip: "Cách hỏi tuổi trang trọng, lịch sự"
      },
      {
        word: "はい",
        romaji: "Hai",
        readVi: "Hai",
        vi: "Vâng, đúng rồi",
        tip: "Trả lời đồng ý hoặc khẳng định"
      },
      {
        word: "いいえ",
        romaji: "Iie",
        readVi: "I-i-ê",
        vi: "Không, không phải",
        tip: "Trả lời từ chối hoặc phủ định"
      }
    ]
  }
};

// 3. Dữ liệu đọc hiểu & Shadowing đoạn văn Tiếng Nhật
// Nguồn bài học: datasss/jp/doc_hieu/bai_1.txt
const JA_READING_PASSAGES_DATA = {
  bai_1: {
    title: "Bài 1: もらいました・あげました (Minna Dokkai)",
    topic: "Hành động cho - nhận quà và đồ đạc",
    icon: "📖",
    sentences: [
      {
        ja: "わたしは 去年 ペルーから 日本へ 来ました。",
        romaji: "Watashi wa kyonen Peruu kara Nihon e kimashita.",
        readVi: "Oa-ta-si oa kyo-nen Pê-ruu ka-ra Ni-hon ê ki-ma-si-ta.",
        vi: "Tôi đã từ Peru đến Nhật Bản vào năm ngoái.",
        tip: "去年 (năm ngoái) • から (từ) ... へ (đến) 来ました (đã đến)."
      },
      {
        ja: "ワットさんに テレビを もらいました。",
        romaji: "Watto-san ni terebi o moraimashita.",
        readVi: "Oát-tô xan ni tê-rê-bi ô mô-rai-ma-si-ta.",
        vi: "Tôi đã nhận chiếc tivi từ thầy Watt.",
        tip: "[Người] に N を もらいました: Nhận N từ ai đó."
      },
      {
        ja: "松本さんに 机を もらいました。",
        romaji: "Matsumoto-san ni tsukue o moraimashita.",
        readVi: "Ma-tsu-mô-tô xan ni tsu-ku-ê ô mô-rai-ma-si-ta.",
        vi: "Tôi đã nhận cái bàn từ anh Matsumoto.",
        tip: "机 (tsukue: cái bàn làm việc/học)."
      },
      {
        ja: "山田さんに コートを もらいました。",
        romaji: "Yamada-san ni kooto o moraimashita.",
        readVi: "Ya-ma-đa xan ni kô-tô ô mô-rai-ma-si-ta.",
        vi: "Tôi đã nhận chiếc áo khoác từ anh Yamada.",
        tip: "コート (kooto: áo khoác ngoài)."
      },
      {
        ja: "会社の 人に 自転車を 借りました。",
        romaji: "Kaisha no hito ni jitensha o karimashita.",
        readVi: "Kai-sa nô hi-tô ni di-tên-sa ô ka-ri-ma-si-ta.",
        vi: "Tôi đã mượn chiếc xe đạp từ người cùng công ty.",
        tip: "会社の人 (người ở công ty) • 借りました (karimashita: đã mượn)."
      },
      {
        ja: "わたしは 皆さんに ペルーの お土産を あげました。",
        romaji: "Watashi wa minasan ni Peruu no omiyage o agemashita.",
        readVi: "Oa-ta-si oa mi-na-xan ni Pê-ruu nô ô-mi-ya-gê ô a-gê-ma-si-ta.",
        vi: "Tôi đã tặng quà lưu niệm Peru cho mọi người.",
        tip: "皆さん (mọi người) • お土産 (quà lưu niệm) • あげました (đã tặng)."
      },
      {
        ja: "わたしは 来週 国へ 帰ります。",
        romaji: "Watashi wa raishuu kuni e kaerimasu.",
        readVi: "Oa-ta-si oa rai-suu ku-ni ê ka-ê-ri-ma-xư.",
        vi: "Tuần sau tôi sẽ về nước.",
        tip: "来週 (tuần sau) • 国 (quê nhà / đất nước) • 帰ります (trở về)."
      },
      {
        ja: "きょう 会社の 人に 自転車を 返しました。",
        romaji: "Kyou kaisha no hito ni jitensha o kaeshimashita.",
        readVi: "Kyô kai-sa nô hi-tô ni di-tên-sa ô ka-ê-si-ma-si-ta.",
        vi: "Hôm nay tôi đã trả xe đạp lại cho người cùng công ty.",
        tip: "きょう (hôm nay) • 返しました (kaeshimashita: đã trả lại)."
      },
      {
        ja: "友達に テレビと 机を あげました。",
        romaji: "Tomodachi ni terebi to tsukue o agemashita.",
        readVi: "Tô-mô-đa-tsi ni tê-rê-bi tô tsu-ku-ê ô a-gê-ma-si-ta.",
        vi: "Tôi đã tặng tivi và bàn cho người bạn.",
        tip: "友達 (bạn bè) • N1 と N2 (N1 và N2)."
      },
      {
        ja: "でも、 コートを あげませんでした。",
        romaji: "Demo, kooto o agemasen deshita.",
        readVi: "Đê-mô, kô-tô ô a-gê-ma-xen đê-si-ta.",
        vi: "Nhưng mà, tôi đã không tặng chiếc áo khoác.",
        tip: "でも (nhưng) • あげませんでした (đã không cho / không tặng)."
      },
      {
        ja: "わたしの 身長は 165センチです。",
        romaji: "Watashi no shinchou wa hyakurokujuugosenti desu.",
        readVi: "Oa-ta-si nô sin-tsô oa hya-kư-rô-kư-duu-gô xen-ti đê-xư.",
        vi: "Chiều cao của tôi là 165 cm.",
        tip: "身長 (chiều cao) • 165センチ (165 cm)."
      },
      {
        ja: "友達の 身長は 2メートルです。",
        romaji: "Tomodachi no shinchou wa ni meetoru desu.",
        readVi: "Tô-mô-đa-tsi nô sin-tsô oa ni mê-tô-rư đê-xư.",
        vi: "Chiều cao của người bạn là 2 mét.",
        tip: "2メートル (2 mét - bạn quá cao nên không vừa áo khoác!)."
      }
    ]
  }
};

// 4. Dữ liệu Hội thoại Tiếng Nhật (2 người đối thoại)
// Nguồn bài học: datasss/jp/hoi_thoai/bai_1.txt
const JA_DIALOGUE_DATA = {
  bai_1: {
    title: "Bài 1: 初めまして (Rất hân hạnh được làm quen)",
    topic: "Chào hỏi tại công ty và giới thiệu người mới",
    icon: "💬",
    roleA: {
      name: "Người A (佐藤 - Sato)",
      avatar: "👩",
      desc: "Đồng nghiệp nữ tại công ty",
      gender: "female"
    },
    roleB: {
      name: "Người B (山田 & ミラー)",
      avatar: "👱‍♂️",
      desc: "Đồng nghiệp nam & Bạn mới",
      gender: "male"
    },
    turns: [
      {
        id: 1,
        speaker: "佐藤",
        role: "A",
        avatar: "👩",
        gender: "female",
        ja: "おはようございます。",
        romaji: "Ohayou gozaimasu.",
        readVi: "Ô-ha-yô gô-zai-ma-xư.",
        vi: "Chào buổi sáng ạ.",
        tip: "Lời chào buổi sáng lịch sự giữa đồng nghiệp trong công ty."
      },
      {
        id: 2,
        speaker: "山田",
        role: "B",
        avatar: "👨",
        gender: "male",
        ja: "おはようございます。",
        romaji: "Ohayou gozaimasu.",
        readVi: "Ô-ha-yô gô-zai-ma-xư.",
        vi: "Chào buổi sáng.",
        tip: "Chào đáp lại đồng nghiệp cùng cấp hoặc thân quen."
      },
      {
        id: 3,
        speaker: "山田",
        role: "B",
        avatar: "👨",
        gender: "male",
        ja: "佐藤さん、こちらはマイク・ミラーさんです。",
        romaji: "Satou-san, kochira wa Maiku Miraa-san desu.",
        readVi: "Xa-tô xan, cô-tsi-ra oa Mai-kư Mi-laa xan đê-xư.",
        vi: "Chị Sato, đây là anh Mike Miller.",
        tip: "こちらは N です: Mẫu câu trang trọng dùng khi giới thiệu người khác."
      },
      {
        id: 4,
        speaker: "ミラー",
        role: "B",
        avatar: "👱‍♂️",
        gender: "male",
        ja: "初めまして。",
        romaji: "Hajimemashite.",
        readVi: "Ha-di-mê-ma-si-tê.",
        vi: "Rất hân hạnh lần đầu được gặp bạn.",
        tip: "初めまして (Hajimemashite): Mở đầu câu chào khi gặp mặt lần đầu tiên."
      },
      {
        id: 5,
        speaker: "マイク・ミラー",
        role: "B",
        avatar: "👱‍♂️",
        gender: "male",
        ja: "マイク・ミラーです。アメリカから来ました。どうぞよろしく。",
        romaji: "Maiku Miraa desu. Amerika kara kimashita. Douzo yoroshiku.",
        readVi: "Mai-kư Mi-laa đê-xư. A-mê-ri-ca ka-ra ki-ma-si-ta. Đô-zô yô-rô-si-kư.",
        vi: "Tôi là Mike Miller. Tôi đến từ nước Mỹ. Rất mong được giúp đỡ.",
        tip: "Bộ 3 câu tự giới thiệu: Tên là... + Đến từ... + Rất mong được giúp đỡ (どうぞよろしく)."
      },
      {
        id: 6,
        speaker: "佐藤",
        role: "A",
        avatar: "👩",
        gender: "female",
        ja: "佐藤けい子です。どうぞよろしく。",
        romaji: "Satou Keiko desu. Douzo yoroshiku.",
        readVi: "Xa-tô Kê-i-cô đê-xư. Đô-zô yô-rô-si-kư.",
        vi: "Tôi là Sato Keiko. Rất mong được anh giúp đỡ.",
        tip: "Đáp lại lời chào tự giới thiệu của đối phương bằng cách nói tên mình và Douzo yoroshiku."
      }
    ]
  }
};

