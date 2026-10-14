// ========================================================
// JAPANESE_DATA / SPEAKING_DATA.JS
// Dữ liệu Luyện nói cả câu Tiếng Nhật (Shadowing Lab)
// Nguồn bài học: datasss/jp/luyen_noi_jp/
// ========================================================

const JA_SENTENCE_UNITS_DATA = {
  bai_1: {
    title: "Bài 1: わたしは マイです (Minna no Nihongo)",
    icon: "🌸",
    sentences: [
      // --- PHẦN 1: KHẲNG ĐỊNH ～は～です ---
      {
        category: "BÀI 1: KHẲNG ĐỊNH ～は～です",
        ja: "わたしは マイです。",
        romaji: "Watashi wa Mai desu.",
        vi: "Tôi là Mai."
      },
      {
        category: "BÀI 1: KHẲNG ĐỊNH ～は～です",
        ja: "ホアさんは ぎんこういんです。",
        romaji: "Hoa-san wa ginkouin desu.",
        vi: "Bạn Hoa là nhân viên ngân hàng."
      },
      {
        category: "BÀI 1: KHẲNG ĐỊNH ～は～です",
        ja: "パクさんは かんこくじんです。",
        romaji: "Paku-san wa kankokujin desu.",
        vi: "Anh Park là người Hàn Quốc."
      },
      {
        category: "BÀI 1: KHẲNG ĐỊNH ～は～です",
        ja: "あのひとは すずきさんです。",
        romaji: "Ano hito wa Suzuki-san desu.",
        vi: "Người kia là anh Suzuki."
      },
      {
        category: "BÀI 1: KHẲNG ĐỊNH ～は～です",
        ja: "やまださんは エンジニアです。",
        romaji: "Yamada-san wa enjinia desu.",
        vi: "Anh Yamada là kỹ sư."
      },

      // --- PHẦN 2: KHẲNG ĐỊNH & PHỦ ĐỊNH ---
      {
        category: "BÀI 1: KHẲNG ĐỊNH & PHỦ ĐỊNH",
        ja: "ミラーさんは フランスじんです。",
        romaji: "Miraa-san wa Furansujin desu.",
        vi: "Anh Miller là người Pháp."
      },
      {
        category: "BÀI 1: KHẲNG ĐỊNH & PHỦ ĐỊNH",
        ja: "ミラーさんは フランスじんじゃありません。",
        romaji: "Miraa-san wa Furansujin ja arimasen.",
        vi: "Anh Miller không phải là người Pháp."
      },

      // --- PHẦN 3: PHỦ ĐỊNH ～じゃありません ---
      {
        category: "BÀI 1: PHỦ ĐỊNH ～じゃありません",
        ja: "わたしは かいしゃいんじゃありません。",
        romaji: "Watashi wa kaishain ja arimasen.",
        vi: "Tôi không phải là nhân viên công ty."
      },
      {
        category: "BÀI 1: PHỦ ĐỊNH ～じゃありません",
        ja: "ゆきさんは けんきゅうしゃじゃありません。",
        romaji: "Yuki-san wa kenkyuusha ja arimasen.",
        vi: "Chị Yuki không phải là nhà nghiên cứu."
      },
      {
        category: "BÀI 1: PHỦ ĐỊNH ～じゃありません",
        ja: "あのかたは ブラジルじんじゃありません。",
        romaji: "Ano kata wa Burajirujin ja arimasen.",
        vi: "Vị kia không phải là người Brazil."
      },
      {
        category: "BÀI 1: PHỦ ĐỊNH ～じゃありません",
        ja: "リーさんは ちゅうごくじんじゃありません。",
        romaji: "Rii-san wa Chuugokujin ja arimasen.",
        vi: "Anh Lee không phải là người Trung Quốc."
      },
      {
        category: "BÀI 1: PHỦ ĐỊNH ～じゃありません",
        ja: "わたしは マイじゃありません。",
        romaji: "Watashi wa Mai ja arimasen.",
        vi: "Tôi không phải là Mai."
      },

      // --- PHẦN 4: CÂU HỎI CÓ / KHÔNG ---
      {
        category: "BÀI 1: CÂU HỎI CÓ / KHÔNG",
        ja: "ミラーさんは フランスじんです。",
        romaji: "Miraa-san wa Furansujin desu.",
        vi: "Anh Miller là người Pháp."
      },
      {
        category: "BÀI 1: CÂU HỎI CÓ / KHÔNG",
        ja: "ミラーさんは フランスじんですか。",
        romaji: "Miraa-san wa Furansujin desu ka?",
        vi: "Anh Miller có phải là người Pháp không?"
      },
      {
        category: "BÀI 1: CÂU HỎI CÓ / KHÔNG",
        ja: "はい、フランスじんです。",
        romaji: "Hai, Furansujin desu.",
        vi: "Vâng, là người Pháp."
      },
      {
        category: "BÀI 1: CÂU HỎI CÓ / KHÔNG",
        ja: "いいえ、フランスじんじゃありません。",
        romaji: "Iie, Furansujin ja arimasen.",
        vi: "Không, không phải là người Pháp."
      },

      // --- PHẦN 5: LUYỆN TẬP HỎI ĐÁP ---
      {
        category: "BÀI 1: LUYỆN TẬP HỎI ĐÁP",
        ja: "あなたは ベトナムじんですか。",
        romaji: "Anata wa Betonamujin desu ka?",
        vi: "Bạn có phải là người Việt Nam không?"
      },
      {
        category: "BÀI 1: LUYỆN TẬP HỎI ĐÁP",
        ja: "はい、ベトナムじんです。",
        romaji: "Hai, Betonamujin desu.",
        vi: "Vâng, tôi là người Việt Nam."
      },
      {
        category: "BÀI 1: LUYỆN TẬP HỎI ĐÁP",
        ja: "リーさんは エンジニアですか。",
        romaji: "Rii-san wa enjinia desu ka?",
        vi: "Anh Lee có phải là kỹ sư không?"
      },
      {
        category: "BÀI 1: LUYỆN TẬP HỎI ĐÁP",
        ja: "いいえ、エンジニアじゃありません。いしゃです。",
        romaji: "Iie, enjinia ja arimasen. Isha desu.",
        vi: "Không, không phải là kỹ sư. Là bác sĩ."
      },
      {
        category: "BÀI 1: LUYỆN TẬP HỎI ĐÁP",
        ja: "あなたは マリアさんですか。",
        romaji: "Anata wa Maria-san desu ka?",
        vi: "Bạn có phải là chị Maria không?"
      },
      {
        category: "BÀI 1: LUYỆN TẬP HỎI ĐÁP",
        ja: "いいえ、カリナです。",
        romaji: "Iie, Karina desu.",
        vi: "Không, tôi là Karina."
      },

      // --- PHẦN 6: TRỢ TỪ SỞ HỮU / THUỘC TỔ CHỨC の ---
      {
        category: "BÀI 1: TRỢ TỪ の",
        ja: "わたしは さくらだいがくの きょうしです。",
        romaji: "Watashi wa Sakura daigaku no kyoushi desu.",
        vi: "Tôi là giảng viên trường Đại học Sakura."
      },
      {
        category: "BÀI 1: TRỢ TỪ の",
        ja: "たなかさんは げんきびょういんの いしゃです。",
        romaji: "Tanaka-san wa Genki byouin no isha desu.",
        vi: "Anh Tanaka là bác sĩ của bệnh viện Genki."
      },
      {
        category: "BÀI 1: TRỢ TỪ の",
        ja: "わたしは ABCの しゃいんじゃありません。",
        romaji: "Watashi wa ABC no shain ja arimasen.",
        vi: "Tôi không phải là nhân viên công ty ABC."
      },
      {
        category: "BÀI 1: TRỢ TỪ の",
        ja: "あなたは タンロンだいがくの がくせいですか。",
        romaji: "Anata wa Tanron daigaku no gakusei desu ka?",
        vi: "Bạn có phải là sinh viên trường Đại học Thăng Long không?"
      },
      {
        category: "BÀI 1: TRỢ TỪ の",
        ja: "あのかたは IMCの エンジニアですか。",
        romaji: "Ano kata wa IMC no enjinia desu ka?",
        vi: "Vị kia có phải là kỹ sư của công ty IMC không?"
      },

      // --- PHẦN 7: GIỚI THIỆU BẢN THÂN & HỘI THOẠI ---
      {
        category: "BÀI 1: GIỚI THIỆU & HỘI THOẠI",
        ja: "カリナさんは YONOだいがくの がくせいじゃありません。",
        romaji: "Karina-san wa YONO daigaku no gakusei ja arimasen.",
        vi: "Chị Karina không phải là sinh viên trường Đại học YONO."
      },
      {
        category: "BÀI 1: GIỚI THIỆU & HỘI THOẠI",
        ja: "あのかたは SUMIの しゃいんですか。",
        romaji: "Ano kata wa SUMI no shain desu ka?",
        vi: "Vị kia có phải là nhân viên công ty SUMI không?"
      },
      {
        category: "BÀI 1: GIỚI THIỆU & HỘI THOẠI",
        ja: "わたしは ミミです。28さいです。ABCびょういんの いしゃです。",
        romaji: "Watashi wa Mimi desu. Nijuuhassai desu. ABC byouin no isha desu.",
        vi: "Tôi là Mimi. Tôi 28 tuổi. Tôi là bác sĩ của bệnh viện ABC."
      },
      {
        category: "BÀI 1: GIỚI THIỆU & HỘI THOẠI",
        ja: "はじめまして。ゆきだいがくの きょうしです。",
        romaji: "Hajimemashite. Yuki daigaku no kyoushi desu.",
        vi: "Rất vui được gặp bạn. Tôi là giảng viên trường Đại học Yuki."
      },
      {
        category: "BÀI 1: GIỚI THIỆU & HỘI THOẠI",
        ja: "わたしも ゆきだいがくの きょうしです。どうぞ よろしく おねがいします。",
        romaji: "Watashi mo Yuki daigaku no kyoushi desu. Douzo yoroshiku onegaishimasu.",
        vi: "Tôi cũng là giảng viên trường Đại học Yuki. Rất mong được giúp đỡ."
      },

      // --- PHẦN 8: LUYỆN TẬP TỔNG HỢP ---
      {
        category: "BÀI 1: LUYỆN TẬP TỔNG HỢP",
        ja: "わたしは IPUだいがくの がくせいです。",
        romaji: "Watashi wa IPU daigaku no gakusei desu.",
        vi: "Tôi là sinh viên trường Đại học IPU."
      },
      {
        category: "BÀI 1: LUYỆN TẬP TỔNG HỢP",
        ja: "あのかたは どなたですか。……ABCの しゃいんです。……わたしも ABCの しゃいんです。",
        romaji: "Ano kata wa donata desu ka? ...ABC no shain desu. ...Watashi mo ABC no shain desu.",
        vi: "Vị kia là ai thế ạ? - Là nhân viên ABC. - Tôi cũng là nhân viên ABC."
      },
      {
        category: "BÀI 1: LUYỆN TẬP TỔNG HỢP",
        ja: "あのひとは リーさんですか。……はい、リーさんです。",
        romaji: "Ano hito wa Rii-san desu ka? ...Hai, Rii-san desu.",
        vi: "Người kia có phải là anh Lee không? - Vâng, là anh Lee."
      },
      {
        category: "BÀI 1: LUYỆN TẬP TỔNG HỢP",
        ja: "あのひとは だれですか。……マイさんです。",
        romaji: "Ano hito wa dare desu ka? ...Mai-san desu.",
        vi: "Người kia là ai thế? - Là bạn Mai."
      },
      {
        category: "BÀI 1: LUYỆN TẬP TỔNG HỢP",
        ja: "テレサちゃんは なんさいですか。……6さいです。",
        romaji: "Teresa-chan wa nansai desu ka? ...Rokusai desu.",
        vi: "Bé Teresa mấy tuổi rồi? - Bé 6 tuổi."
      }
    ]
  }
};
