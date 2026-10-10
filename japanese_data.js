// ========================================================
// JAPANESE_DATA.JS - Giáo trình Luyện Nói & Phát Âm Tiếng Nhật
// Biên soạn bám sát Giáo trình Sách Giáo Khoa Minna no Nihongo Sơ Cấp 1 (sgk-jp)
// ========================================================

const JA_SENTENCE_UNITS_DATA = {
  unit_1_greeting: {
    title: "Bài 1: Giới thiệu bản thân & Nghề nghiệp (Minna Bài 1)",
    icon: "🌸",
    sentences: [
      {
        category: "MINNA BÀI 1: TỰ GIỚI THIỆU",
        ja: "はじめまして。",
        romaji: "Hajimemashite.",
        readVi: "Ha-di-mê-ma-si-tê",
        vi: "Rất hân hạnh được gặp bạn (Nói ở đầu buổi gặp mặt đầu tiên).",
        tip: "Âm 'ji' rung nhẹ đầu lưỡi, nói kèm cái cúi đầu nhẹ 15-30 độ."
      },
      {
        category: "MINNA BÀI 1: TỰ GIỚI THIỆU",
        ja: "わたしは マイク・ミラーです。",
        romaji: "Watashi wa Maiku Miraa desu.",
        readVi: "Oa-ta-si oa Mai-kư Mi-laa đê-xư",
        vi: "Tôi là Mike Miller.",
        tip: "Trợ từ は viết là 'ha' nhưng phát âm là 'wa'. Đuôi 'desu' đọc nhẹ âm u (đê-xư)."
      },
      {
        category: "MINNA BÀI 1: TỰ GIỚI THIỆU",
        ja: "わたしは アメリカ人です。",
        romaji: "Watashi wa Amerika-jin desu.",
        readVi: "Oa-ta-si oa A-mê-ri-ka din đê-xư",
        vi: "Tôi là người Mỹ. (Thay Amerika bằng Betonamu = người Việt Nam).",
        tip: "Hậu tố 人 (jin) ghép sau tên quốc gia để chỉ quốc tịch."
      },
      {
        category: "MINNA BÀI 1: TỰ GIỚI THIỆU",
        ja: "わたしは かいしゃいんです。",
        romaji: "Watashi wa kaishain desu.",
        readVi: "Oa-ta-si oa kai-sa-in đê-xư",
        vi: "Tôi là nhân viên công ty.",
        tip: "'Kaishain' là từ xưng khi nói về nghề nghiệp của bản thân."
      },
      {
        category: "MINNA BÀI 1: TỰ GIỚI THIỆU",
        ja: "サントスさんは がくせいじゃありません。",
        romaji: "Santosu-san wa gakusei ja arimasen.",
        readVi: "Xan-tô-xư xan oa ga-kư-xê da a-ri-ma-xen",
        vi: "Anh Santos không phải là học sinh / sinh viên.",
        tip: "'じゃありません' (ja arimasen) là dạng phủ định lịch sự của 'です' (desu)."
      },
      {
        category: "MINNA BÀI 1: TỰ GIỚI THIỆU",
        ja: "ミラーさんは IMCの しゃいんですか。",
        romaji: "Miraa-san wa IMC no shain desu ka?",
        readVi: "Mi-laa xan oa Ai-em-xi nô sa-in đê-xư ka?",
        vi: "Anh Miller có phải là nhân viên công ty IMC không?",
        tip: "Thêm 'ka' ở cuối câu để tạo câu hỏi nghi vấn, hơi lên giọng nhẹ."
      },
      {
        category: "MINNA BÀI 1: TỰ GIỚI THIỆU",
        ja: "はい、IMCの しゃいんです。",
        romaji: "Hai, IMC no shain desu.",
        readVi: "Hai, Ai-em-xi nô sa-in đê-xư",
        vi: "Vâng, đúng là nhân viên của IMC.",
        tip: "'Hai' phát âm dứt khoát, thể hiện sự đồng thuận rõ ràng."
      },
      {
        category: "MINNA BÀI 1: TỰ GIỚI THIỆU",
        ja: "あの かたは どなたですか。",
        romaji: "Ano kata wa donata desu ka?",
        readVi: "A-nô ka-ta oa đô-na-ta đê-xư ka?",
        vi: "Vị kia là ai vậy? (Cách hỏi lịch sự trang trọng).",
        tip: "'Ano kata' và 'donata' là cách nói lịch sự của 'ano hito' và 'dare'."
      },
      {
        category: "MINNA BÀI 1: TỰ GIỚI THIỆU",
        ja: "どうぞ よろしく おねがいします。",
        romaji: "Douzo yoroshiku onegaishimasu.",
        readVi: "Đô-zô yô-rô-si-kư ô-nê-gai-si-ma-xư",
        vi: "Rất mong nhận được sự giúp đỡ của bạn.",
        tip: "Câu kết thúc giới thiệu bản thân quan trọng bậc nhất trong văn hóa Nhật."
      }
    ]
  },
  unit_2_objects: {
    title: "Bài 2: Đồ vật xung quanh & Hỏi sở hữu (Minna Bài 2)",
    icon: "📚",
    sentences: [
      {
        category: "MINNA BÀI 2: ĐỒ VẬT & SỞ HỮU",
        ja: "これは じしょですか。",
        romaji: "Kore wa jisho desu ka?",
        readVi: "Kô-rê oa di-sô đê-xư ka?",
        vi: "Đây có phải là cuốn từ điển không?",
        tip: "これ (Kore): cái này (ở gần người nói)."
      },
      {
        category: "MINNA BÀI 2: ĐỒ VẬT & SỞ HỮU",
        ja: "いいえ、じしょじゃありません。ざっしです。",
        romaji: "Iie, jisho ja arimasen. Zasshi desu.",
        readVi: "I-i-ê, di-sô da a-ri-ma-xen. Dzat-si đê-xư",
        vi: "Không, không phải từ điển đâu. Là tạp chí đấy.",
        tip: "ざっし (Zasshi) có âm ngắt っ: khựng hơi lại một nhịp rồi mới bật 'shi'."
      },
      {
        category: "MINNA BÀI 2: ĐỒ VẬT & SỞ HỮU",
        ja: "それは なんの ほんですか。",
        romaji: "Sore wa nan no hon desu ka?",
        readVi: "Xô-rê oa nan nô hôn đê-xư ka?",
        vi: "Đó là cuốn sách về cái gì vậy?",
        tip: "それ (Sore): cái đó (ở gần người nghe). なん (Nan): cái gì."
      },
      {
        category: "MINNA BÀI 2: ĐỒ VẬT & SỞ HỮU",
        ja: "にほんごの ほんです。",
        romaji: "Nihongo no hon desu.",
        readVi: "Ni-hôn-gô nô hôn đê-xư",
        vi: "Là cuốn sách tiếng Nhật.",
        tip: "Trợ từ の (no) nối danh từ bổ nghĩa: tiếng Nhật của/về sách."
      },
      {
        category: "MINNA BÀI 2: ĐỒ VẬT & SỞ HỮU",
        ja: "あれは だれの かさですか。",
        romaji: "Are wa dare no kasa desu ka?",
        readVi: "A-rê oa đa-rê nô ka-xa đê-xư ka?",
        vi: "Cái ô (dù) đằng kia là của ai vậy?",
        tip: "あれ (Are): cái kia (ở xa cả người nói và người nghe). だれ (Dare): ai."
      },
      {
        category: "MINNA BÀI 2: ĐỒ VẬT & SỞ HỮU",
        ja: "わたしの かさです。",
        romaji: "Watashi no kasa desu.",
        readVi: "Oa-ta-si nô ka-xa đê-xư",
        vi: "Là cái ô của tôi.",
        tip: "わたしの (Watashi no) = của tôi."
      },
      {
        category: "MINNA BÀI 2: ĐỒ VẬT & SỞ HỮU",
        ja: "この てちょうは あなたのですか。",
        romaji: "Kono techou wa anata no desu ka?",
        readVi: "Kô-nô tê-chô oa a-na-ta nô đê-xư ka?",
        vi: "Cuốn sổ tay này là của bạn phải không?",
        tip: "この (Kono) luôn đi kèm trực tiếp với danh từ ngay sau nó (Kono techou)."
      },
      {
        category: "MINNA BÀI 2: ĐỒ VẬT & SỞ HỮU",
        ja: "どうぞ。コーヒーの ギフトです。",
        romaji: "Douzo. Koohii no gifuto desu.",
        readVi: "Đô-zô. Kô-hii nô ghi-phư-tô đê-xư",
        vi: "Xin mời bạn nhận. Đây là món quà cà phê.",
        tip: "どうぞ (Douzo) dùng khi lịch sự mời ai đó nhận đồ hoặc vào cửa."
      }
    ]
  },
  unit_3_places: {
    title: "Bài 3: Nơi chốn, Địa điểm & Mua sắm (Minna Bài 3)",
    icon: "🏬",
    sentences: [
      {
        category: "MINNA BÀI 3: NƠI CHỐN & MUA SẮM",
        ja: "ここは きょうしつです。",
        romaji: "Koko wa kyoushitsu desu.",
        readVi: "Kô-kô oa kyô-si-tsư đê-xư",
        vi: "Chỗ này là phòng học.",
        tip: "ここ (Koko): ở đây, chỗ này (nơi người nói đứng)."
      },
      {
        category: "MINNA BÀI 3: NƠI CHỐN & MUA SẮM",
        ja: "おてあらいは あそこです。",
        romaji: "Otearai wa asoko desu.",
        readVi: "Ô-tê-a-rai oa a-xô-kô đê-xư",
        vi: "Nhà vệ sinh ở đằng kia kìa.",
        tip: "おてあらい (Otearai) là từ nói lịch sự, tao nhã thay cho トイレ (toire)."
      },
      {
        category: "MINNA BÀI 3: NƠI CHỐN & MUA SẮM",
        ja: "うけつけは どちらですか。",
        romaji: "Uketsuke wa dochira desu ka?",
        readVi: "U-kê-tsư-kê oa đô-chi-ra đê-xư ka?",
        vi: "Quầy tiếp tân ở phía nào vậy ạ?",
        tip: "どちら (Dochira) là thể lịch sự của どこ (Doko - ở đâu / phía nào)."
      },
      {
        category: "MINNA BÀI 3: NƠI CHỐN & MUA SẮM",
        ja: "エレベーターは こちらです。",
        romaji: "Erebeetaa wa kochira desu.",
        readVi: "Ê-rê-bê-taa oa kô-chi-ra đê-xư",
        vi: "Thang máy ở phía bên này ạ.",
        tip: "こちら (Kochira) dùng khi hướng dẫn khách hàng hoặc đối tác."
      },
      {
        category: "MINNA BÀI 3: NƠI CHỐN & MUA SẮM",
        ja: "おくに（国）は どちらですか。",
        romaji: "Okuni wa dochira desu ka?",
        readVi: "Ô-kư-ni oa đô-chi-ra đê-xư ka?",
        vi: "Đất nước của bạn ở đâu vậy? (Hỏi quê hương / quốc gia xuất xứ).",
        tip: "Thêm tiền tố お (o-) trước 'kuni' để tỏ ý tôn trọng đất nước của đối phương."
      },
      {
        category: "MINNA BÀI 3: NƠI CHỐN & MUA SẮM",
        ja: "これは どこの ワインですか。",
        romaji: "Kore wa doko no wain desu ka?",
        readVi: "Kô-rê oa đô-kô nô oa-in đê-xư ka?",
        vi: "Đây là rượu vang của xuất xứ nước nào vậy?",
        tip: "どこの (Doko no) dùng hỏi xuất xứ sản phẩm hoặc công ty sản xuất."
      },
      {
        category: "MINNA BÀI 3: NƠI CHỐN & MUA SẮM",
        ja: "フランスの ワインです。",
        romaji: "Furansu no wain desu.",
        readVi: "Phư-ran-xư nô oa-in đê-xư",
        vi: "Là rượu vang của nước Pháp.",
        tip: "Tên các quốc gia phương Tây được viết bằng chữ Katakana."
      },
      {
        category: "MINNA BÀI 3: NƠI CHỐN & MUA SẮM",
        ja: "この とけいは いくらですか。",
        romaji: "Kono tokei wa ikura desu ka?",
        readVi: "Kô-nô tô-kê-i oa i-kư-ra đê-xư ka?",
        vi: "Chiếc đồng hồ này giá bao nhiêu tiền vậy?",
        tip: "いくら (Ikura) là câu cửa miệng bắt buộc nhớ khi đi mua sắm ở Nhật."
      },
      {
        category: "MINNA BÀI 3: NƠI CHỐN & MUA SẮM",
        ja: "さんぜん はっぴゃくえんです。",
        romaji: "Sanzen happyaku-en desu.",
        readVi: "Xan-zen hap-pya-kư-en đê-xư",
        vi: "Giá là 3.800 Yên (Khoảng 650.000 VNĐ).",
        tip: "えん (En / Yên) là đơn vị tiền tệ chính thức của Nhật Bản."
      }
    ]
  },
  unit_4_time: {
    title: "Bài 4: Thời gian, Giờ giấc & Hoạt động hằng ngày (Minna Bài 4)",
    icon: "⏰",
    sentences: [
      {
        category: "MINNA BÀI 4: THỜI GIAN & HOẠT ĐỘNG",
        ja: "いま なんじですか。",
        romaji: "Ima nan-ji desu ka?",
        readVi: "I-ma nan-di đê-xư ka?",
        vi: "Bây giờ là mấy giờ rồi?",
        tip: "いま (Ima): bây giờ. なんじ (Nan-ji): mấy giờ."
      },
      {
        category: "MINNA BÀI 4: THỜI GIAN & HOẠT ĐỘNG",
        ja: "ごぜん くじ はん（30分）です。",
        romaji: "Gozen ku-ji han desu.",
        readVi: "Gô-zen kư-di han đê-xư",
        vi: "Bây giờ là 9 giờ rưỡi sáng (9h30 sáng).",
        tip: "ごぜん (Gozen): buổi sáng (AM). はん (Han): một nửa, nửa giờ (30 phút)."
      },
      {
        category: "MINNA BÀI 4: THỜI GIAN & HOẠT ĐỘNG",
        ja: "ぎんこうは なんじから なんじまでですか。",
        romaji: "Ginkou wa nan-ji kara nan-ji made desu ka?",
        readVi: "Ghin-kô oa nan-di ka-ra nan-di ma-đê đê-xư ka?",
        vi: "Ngân hàng mở cửa từ mấy giờ đến mấy giờ vậy?",
        tip: "から (kara): từ. まで (made): đến."
      },
      {
        category: "MINNA BÀI 4: THỜI GIAN & HOẠT ĐỘNG",
        ja: "くじから さんじまでです。",
        romaji: "Ku-ji kara san-ji made desu.",
        readVi: "Kư-di ka-ra xan-di ma-đê đê-xư",
        vi: "Mở cửa từ 9 giờ đến 3 giờ chiều.",
        tip: "Lưu ý 9 giờ đọc là 'ku-ji' (không đọc là kyuu-ji)."
      },
      {
        category: "MINNA BÀI 4: THỜI GIAN & HOẠT ĐỘNG",
        ja: "わたしは まいあさ ろくじに おきます。",
        romaji: "Watashi wa maiasa roku-ji ni okimasu.",
        readVi: "Oa-ta-si oa mai-a-xa rô-kư-di ni ô-ki-ma-xư",
        vi: "Mỗi buổi sáng tôi đều thức dậy lúc 6 giờ.",
        tip: "Trợ từ に (ni) đặt sau mốc thời gian có con số cụ thể."
      },
      {
        category: "MINNA BÀI 4: THỜI GIAN & HOẠT ĐỘNG",
        ja: "まいばん じゅういちじに ねます。",
        romaji: "Maiban juuichi-ji ni nemasu.",
        readVi: "Mai-ban duu-i-chi-di ni nê-ma-xư",
        vi: "Mỗi tối tôi đi ngủ lúc 11 giờ.",
        tip: "まいばん (Maiban): mỗi tối. ねます (Nemasu): đi ngủ."
      },
      {
        category: "MINNA BÀI 4: THỜI GIAN & HOẠT ĐỘNG",
        ja: "きのう べんきょうしましたか。",
        romaji: "Kinou benkyoushimashita ka?",
        readVi: "Ki-nô bên-kyô-si-ma-si-ta ka?",
        vi: "Hôm qua bạn có học bài không?",
        tip: "Đuôi 'ました' (mashita) biểu thị hành động đã diễn ra trong quá khứ."
      },
      {
        category: "MINNA BÀI 4: THỜI GIAN & HOẠT ĐỘNG",
        ja: "はい、べんきょうしました。",
        romaji: "Hai, benkyoushimashita.",
        readVi: "Hai, bên-kyô-si-ma-si-ta",
        vi: "Vâng, hôm qua tôi đã học bài.",
        tip: "Kéo dài trường âm 'kyou' thành 'kyô'."
      }
    ]
  },
  unit_5_movement: {
    title: "Bài 5: Đi lại, Phương tiện & Nơi chốn (Minna Bài 5)",
    icon: "🚅",
    sentences: [
      {
        category: "MINNA BÀI 5: ĐI LẠI & PHƯƠNG TIỆN",
        ja: "あした どこへ いきますか。",
        romaji: "Ashita doko e ikimasu ka?",
        readVi: "A-si-ta đô-kô ê i-ki-ma-xư ka?",
        vi: "Ngày mai bạn đi đâu vậy?",
        tip: "Trợ từ hướng đi へ viết là 'he' nhưng phát âm là 'e'."
      },
      {
        category: "MINNA BÀI 5: ĐI LẠI & PHƯƠNG TIỆN",
        ja: "きょうとへ いきます。",
        romaji: "Kyouto e ikimasu.",
        readVi: "Kyô-tô ê i-ki-ma-xư",
        vi: "Tôi đi đến Kyoto.",
        tip: "いきます (Ikimasu): đi đến đâu đó."
      },
      {
        category: "MINNA BÀI 5: ĐI LẠI & PHƯƠNG TIỆN",
        ja: "なんで いきますか。",
        romaji: "Nan de ikimasu ka?",
        readVi: "Nan đê i-ki-ma-xư ka?",
        vi: "Bạn đi bằng phương tiện gì vậy?",
        tip: "Trợ từ で (de) đứng sau phương tiện di chuyển."
      },
      {
        category: "MINNA BÀI 5: ĐI LẠI & PHƯƠNG TIỆN",
        ja: "しんかんせんで いきます。",
        romaji: "Shinkansen de ikimasu.",
        readVi: "Xin-kan-xen đê i-ki-ma-xư",
        vi: "Tôi đi bằng tàu cao tốc Shinkansen.",
        tip: "Tàu Shinkansen là niềm tự hào về tốc độ và sự đúng giờ của Nhật Bản."
      },
      {
        category: "MINNA BÀI 5: ĐI LẠI & PHƯƠNG TIỆN",
        ja: "だれと いきますか。",
        romaji: "Dare to ikimasu ka?",
        readVi: "Đa-rê tô i-ki-ma-xư ka?",
        vi: "Bạn đi cùng với ai vậy?",
        tip: "Trợ từ と (to) có nghĩa là 'cùng với'."
      },
      {
        category: "MINNA BÀI 5: ĐI LẠI & PHƯƠNG TIỆN",
        ja: "ともだちと いきます。",
        romaji: "Tomodachi to ikimasu.",
        readVi: "Tô-mô-đa-chi tô i-ki-ma-xư",
        vi: "Tôi đi cùng với một người bạn.",
        tip: "ともだち (Tomodachi): bạn bè."
      },
      {
        category: "MINNA BÀI 5: ĐI LẠI & PHƯƠNG TIỆN",
        ja: "ひとりで うちへ かえります。",
        romaji: "Hitori de uchi e kaerimasu.",
        readVi: "Hi-tô-ri đê u-chi ê ka-ê-ri-ma-xư",
        vi: "Tôi về nhà một mình.",
        tip: "ひとりで (Hitori de): một mình (không dùng trợ từ 'to')."
      },
      {
        category: "MINNA BÀI 5: ĐI LẠI & PHƯƠNG TIỆN",
        ja: "いつ にほんへ きましたか。",
        romaji: "Itsu Nihon e kimashita ka?",
        readVi: "I-tsư Ni-hôn ê ki-ma-si-ta ka?",
        vi: "Bạn đã đến Nhật Bản vào khi nào thế?",
        tip: "いつ (Itsu): khi nào, lúc nào. きました (Kimashita): đã đến."
      }
    ]
  },
  unit_6_dining: {
    title: "Bài 6: Ăn uống & Lời mời mọc thường nhật (Minna Bài 6)",
    icon: "🍱",
    sentences: [
      {
        category: "MINNA BÀI 6: ĂN UỐNG & MỜI MỌC",
        ja: "なにを たべますか。",
        romaji: "Nani o tabemasu ka?",
        readVi: "Na-ni ô ta-bê-ma-xư ka?",
        vi: "Bạn sẽ ăn món gì vậy?",
        tip: "Trợ từ を (o) chỉ đối tượng tác động trực tiếp của hành động."
      },
      {
        category: "MINNA BÀI 6: ĂN UỐNG & MỜI MỌC",
        ja: "さかなと やさいを たべます。",
        romaji: "Sakana to yasai o tabemasu.",
        readVi: "Xa-ka-na tô ya-xai ô ta-bê-ma-xư",
        vi: "Tôi ăn cá và rau xanh.",
        tip: "さかな (Sakana): cá. やさい (Yasai): rau củ."
      },
      {
        category: "MINNA BÀI 6: ĂN UỐNG & MỜI MỌC",
        ja: "なにを のみますか。",
        romaji: "Nani o nomimasu ka?",
        readVi: "Na-ni ô nô-mi-ma-xư ka?",
        vi: "Bạn sẽ uống gì?",
        tip: "のみます (Nomimasu): uống."
      },
      {
        category: "MINNA BÀI 6: ĂN UỐNG & MỜI MỌC",
        ja: "つめたい おちゃを ください。",
        romaji: "Tsumetai ocha o kudasai.",
        readVi: "Tsư-mê-tai ô-cha ô kư-đa-xai",
        vi: "Làm ơn cho tôi một cốc trà lạnh (mát).",
        tip: "つめたい (Tsumetai): lạnh, mát (dùng cho đồ uống/đồ vật)."
      },
      {
        category: "MINNA BÀI 6: ĂN UỐNG & MỜI MỌC",
        ja: "どこで ひるごはんを たべますか。",
        romaji: "Doko de hirugohan o tabemasu ka?",
        readVi: "Đô-kô đê hi-rư-gô-han ô ta-bê-ma-xư ka?",
        vi: "Bạn ăn cơm trưa ở đâu thế?",
        tip: "Trợ từ で (de) chỉ địa điểm diễn ra hành động."
      },
      {
        category: "MINNA BÀI 6: ĂN UỐNG & MỜI MỌC",
        ja: "かいしゃの しょくどうで たべます。",
        romaji: "Kaisha no shokudou de tabemasu.",
        readVi: "Kai-sa nô sô-kư-đô đê ta-bê-ma-xư",
        vi: "Tôi ăn tại nhà ăn của công ty.",
        tip: "しょくどう (Shokudou): nhà ăn, căn tin."
      },
      {
        category: "MINNA BÀI 6: ĂN UỐNG & MỜI MỌC",
        ja: "いっしょに コーヒーを のみませんか。",
        romaji: "Isshoni koohii o nomimasen ka?",
        readVi: "It-sô-ni kô-hii ô nô-mi-ma-xen ka?",
        vi: "Bạn có muốn cùng tôi đi uống cà phê không?",
        tip: "〜ませんか (masen ka): lời rủ rê lịch sự, tinh tế người Nhật rất ưa chuộng."
      },
      {
        category: "MINNA BÀI 6: ĂN UỐNG & MỜI MỌC",
        ja: "ええ、のみましょう！",
        romaji: "Ee, nomimashou!",
        readVi: "Ê-ê, nô-mi-ma-sô!",
        vi: "Được đấy, chúng mình cùng đi uống nhé!",
        tip: "〜ましょう (mashou): đồng ý hào hứng với lời rủ rê."
      }
    ]
  },
  unit_7_tools_gifts: {
    title: "Bài 7: Dụng cụ, Phương tiện & Tặng/Nhận quà (Minna Bài 7)",
    icon: "🎁",
    sentences: [
      {
        category: "MINNA BÀI 7: DỤNG CỤ & QUÀ TẶNG",
        ja: "なにで ごはんを たべますか。",
        romaji: "Nani de gohan o tabemasu ka?",
        readVi: "Na-ni đê gô-han ô ta-bê-ma-xư ka?",
        vi: "Bạn ăn cơm bằng cái gì thế?",
        tip: "Trợ từ で (de) ở đây chỉ phương tiện, công cụ sử dụng."
      },
      {
        category: "MINNA BÀI 7: DỤNG CỤ & QUÀ TẶNG",
        ja: "はしで たべます。",
        romaji: "Hashi de tabemasu.",
        readVi: "Ha-si đê ta-bê-ma-xư",
        vi: "Tôi ăn bằng đũa.",
        tip: "はし (Hashi): đôi đũa."
      },
      {
        category: "MINNA BÀI 7: DỤNG CỤ & QUÀ TẶNG",
        ja: "にほんごで レポートを かきます。",
        romaji: "Nihongo de repooto o kakimasu.",
        readVi: "Ni-hôn-gô đê rê-pô-tô ô ka-ki-ma-xư",
        vi: "Tôi viết bài báo cáo bằng tiếng Nhật.",
        tip: "'Nihongo de' = viết/nói bằng ngôn ngữ tiếng Nhật."
      },
      {
        category: "MINNA BÀI 7: DỤNG CỤ & QUÀ TẶNG",
        ja: "これは にほんごで なんと いいますか。",
        romaji: "Kore wa Nihongo de nan to iimasu ka?",
        readVi: "Kô-rê oa Ni-hôn-gô đê nan tô i-i-ma-xư ka?",
        vi: "Cái này tiếng Nhật gọi là gì vậy ạ?",
        tip: "Câu hỏi cực kỳ hữu ích khi bạn không biết tên một đồ vật bằng tiếng Nhật."
      },
      {
        category: "MINNA BÀI 7: DỤNG CỤ & QUÀ TẶNG",
        ja: "ともだちに プレゼントを あげました。",
        romaji: "Tomodachi ni purezento o agemashita.",
        readVi: "Tô-mô-đa-chi ni pư-rê-zen-tô ô a-ghê-ma-si-ta",
        vi: "Tôi đã tặng quà cho người bạn của mình.",
        tip: "あげます (Agemasu): tặng, cho ai đó (đối tượng nhận đi với trợ từ に)."
      },
      {
        category: "MINNA BÀI 7: DỤNG CỤ & QUÀ TẶNG",
        ja: "せんせいに ほんを もらいました。",
        romaji: "Sensei ni hon o moraimashita.",
        readVi: "Xên-xê-i ni hôn ô mô-rai-ma-si-ta",
        vi: "Tôi đã nhận được cuốn sách từ thầy giáo.",
        tip: "もらいます (Moraimasu): nhận từ ai đó."
      },
      {
        category: "MINNA BÀI 7: DỤNG CỤ & QUÀ TẶNG",
        ja: "もう にもつを おくりましたか。",
        romaji: "Mou nimotsu o okurimashita ka?",
        readVi: "Mô ni-mô-tsư ô ô-kư-ri-ma-si-ta ka?",
        vi: "Bạn đã gửi bưu kiện hành lý đi chưa?",
        tip: "もう (Mou): đã... rồi (hỏi việc đã hoàn tất chưa)."
      },
      {
        category: "MINNA BÀI 7: DỤNG CỤ & QUÀ TẶNG",
        ja: "いいえ、まだです。これから おくります。",
        romaji: "Iie, mada desu. Korekara okurimasu.",
        readVi: "I-i-ê, ma-đa đê-xư. Kô-rê-ka-ra ô-kư-ri-ma-xư",
        vi: "Chưa, tôi vẫn chưa gửi. Bây giờ tôi mới chuẩn bị đi gửi đây.",
        tip: "まだです (Mada desu): vẫn chưa hoàn thành."
      }
    ]
  },
  unit_8_adjectives: {
    title: "Bài 8: Miêu tả tính chất, Cảm xúc & Tính từ (Minna Bài 8)",
    icon: "🏔️",
    sentences: [
      {
        category: "MINNA BÀI 8: TÍNH TỪ & MIÊU TẢ",
        ja: "ふじさんは たかい やまです。",
        romaji: "Fujisan wa takai yama desu.",
        readVi: "Phư-di-xan oa ta-kai ya-ma đê-xư",
        vi: "Núi Phú Sĩ là một ngọn núi rất cao.",
        tip: "たかい (Takai): cao (hoặc đắt tiền). Đứng trước danh từやま bổ nghĩa trực tiếp."
      },
      {
        category: "MINNA BÀI 8: TÍNH TỪ & MIÊU TẢ",
        ja: "にほんの りょうりは おいしいです。",
        romaji: "Nihon no ryouri wa oishii desu.",
        readVi: "Ni-hôn nô ryô-ri oa oi-sii đê-xư",
        vi: "Món ăn Nhật Bản rất là ngon.",
        tip: "おいしい (Oishii): ngon miệng."
      },
      {
        category: "MINNA BÀI 8: TÍNH TỪ & MIÊU TẢ",
        ja: "この まちは しずかで きれいです。",
        romaji: "Kono machi wa shizuka de kirei desu.",
        readVi: "Kô-nô ma-chi oa si-dzư-ka đê ki-rê-i đê-xư",
        vi: "Thành phố này vừa yên tĩnh lại vừa sạch đẹp.",
        tip: "しずか (Shizuka) và きれい (Kirei) là tính từ đuôi -na nối nhau bằng 'de'."
      },
      {
        category: "MINNA BÀI 8: TÍNH TỪ & MIÊU TẢ",
        ja: "きょうは あまり さむくないです。",
        romaji: "Kyou wa amari samukunai desu.",
        readVi: "Kyô oa a-ma-ri xa-mư-kư-nai đê-xư",
        vi: "Hôm nay trời không lạnh lắm.",
        tip: "あまり (Amari) đi cùng dạng phủ định: không... lắm. さむい -> さむくない."
      },
      {
        category: "MINNA BÀI 8: TÍNH TỪ & MIÊU TẢ",
        ja: "にほんの せいかつは どうですか。",
        romaji: "Nihon no seikatsu wa dou desu ka?",
        readVi: "Ni-hôn nô xê-i-kat-sư oa đô-u đê-xư ka?",
        vi: "Cuộc sống ở Nhật Bản đối với bạn thế nào?",
        tip: "どうですか (Dou desu ka?): như thế nào? (Hỏi cảm nhận, ấn tượng)."
      },
      {
        category: "MINNA BÀI 8: TÍNH TỪ & MIÊU TẢ",
        ja: "まいにち いそがしいですが、とても おもしろいです。",
        romaji: "Mainichi isogashii desu ga, totemo omoshiroi desu.",
        readVi: "Mai-ni-chi i-xô-ga-sii đê-xư ga, tô-tê-mô ô-mô-si-rôi đê-xư",
        vi: "Mỗi ngày đều bận rộn nhưng mà rất thú vị.",
        tip: "が (ga) ở giữa câu mang ý tương phản: 'nhưng mà'."
      }
    ]
  },
  unit_9_preferences: {
    title: "Bài 9: Sở thích, Năng lực & Nêu lý do (Minna Bài 9)",
    icon: "⚽",
    sentences: [
      {
        category: "MINNA BÀI 9: SỞ THÍCH & NĂNG LỰC",
        ja: "わたしは スポーツが すきです。",
        romaji: "Watashi wa supootsu ga suki desu.",
        readVi: "Oa-ta-si oa xư-pô-tsư ga xư-ki đê-xư",
        vi: "Tôi rất thích thể thao.",
        tip: "Sở thích và năng lực đi kèm với trợ từ が (ga) trước すき / きらい."
      },
      {
        category: "MINNA BÀI 9: SỞ THÍCH & NĂNG LỰC",
        ja: "カラオケが あまり すきじゃありません。",
        romaji: "Karaoke ga amari suki ja arimasen.",
        readVi: "Ka-ra-ô-kê ga a-ma-ri xư-ki da a-ri-ma-xen",
        vi: "Tôi không thích hát karaoke cho lắm.",
        tip: "すきじゃありません: không thích."
      },
      {
        category: "MINNA BÀI 9: SỞ THÍCH & NĂNG LỰC",
        ja: "ミラーさんは りょうりが じょうずです。",
        romaji: "Miraa-san wa ryouri ga jouzu desu.",
        readVi: "Mi-laa xan oa ryô-ri ga dô-u-dzư đê-xư",
        vi: "Anh Miller nấu ăn rất là giỏi.",
        tip: "じょうず (Jouzu): giỏi (thường dùng khen người khác, tránh tự khen bản thân)."
      },
      {
        category: "MINNA BÀI 9: SỞ THÍCH & NĂNG LỰC",
        ja: "わたしは えいごが よく わかります。",
        romaji: "Watashi wa eigo ga yoku wakarimasu.",
        readVi: "Oa-ta-si oa ê-i-gô ga yô-kư oa-ka-ri-ma-xư",
        vi: "Tôi hiểu tiếng Anh rất rõ.",
        tip: "よく (Yoku): rõ ràng, tốt."
      },
      {
        category: "MINNA BÀI 9: SỞ THÍCH & NĂNG LỰC",
        ja: "にほんごが すこし わかります。",
        romaji: "Nihongo ga sukoshi wakarimasu.",
        readVi: "Ni-hôn-gô ga xư-kô-si oa-ka-ri-ma-xư",
        vi: "Tôi hiểu được một chút tiếng Nhật.",
        tip: "すこし (Sukoshi): một chút, một ít. Câu nói khiêm tốn chuẩn người Nhật."
      },
      {
        category: "MINNA BÀI 9: SỞ THÍCH & NĂNG LỰC",
        ja: "じかんが ありませんから、タクシーで いきます。",
        romaji: "Jikan ga arimasen kara, takushii de ikimasu.",
        readVi: "Di-kan ga a-ri-ma-xen ka-ra, ta-kư-sii đê i-ki-ma-xư",
        vi: "Vì không có thời gian nên tôi sẽ đi bằng taxi.",
        tip: "から (kara) ở cuối vế câu biểu thị lý do/nguyên nhân: 'vì/bởi vì...'."
      }
    ]
  },
  unit_10_existence: {
    title: "Bài 10: Vị trí, Đồ vật & Tồn tại xung quanh (Minna Bài 10)",
    icon: "🛋️",
    sentences: [
      {
        category: "MINNA BÀI 10: VỊ TRÍ & TỒN TẠI",
        ja: "つくえの うえに ほんが あります。",
        romaji: "Tsukue no ue ni hon ga arimasu.",
        readVi: "Tsư-kư-ê nô u-ê ni hôn ga a-ri-ma-xư",
        vi: "Ở trên mặt bàn có một cuốn sách.",
        tip: "あります (Arimasu) dùng cho đồ vật vô tri vô giác, cây cối."
      },
      {
        category: "MINNA BÀI 10: VỊ TRÍ & TỒN TẠI",
        ja: "にわに いぬが います。",
        romaji: "Niwa ni inu ga imasu.",
        readVi: "Ni-oa ni i-nư ga i-ma-xư",
        vi: "Ở ngoài vườn có một con chó.",
        tip: "います (Imasu) bắt buộc dùng cho sinh vật sống chuyển động được (người, động vật)."
      },
      {
        category: "MINNA BÀI 10: VỊ TRÍ & TỒN TẠI",
        ja: "へやの なかに だれが いますか。",
        romaji: "Heya no naka ni dare ga imasu ka?",
        readVi: "Hê-ya nô na-ka ni đa-rê ga i-ma-xư ka?",
        vi: "Ở bên trong căn phòng có ai thế?",
        tip: "なか (Naka): bên trong. へや (Heya): phòng."
      },
      {
        category: "MINNA BÀI 10: VỊ TRÍ & TỒN TẠI",
        ja: "だれも いません。",
        romaji: "Dare mo imasen.",
        readVi: "Đa-rê mô i-ma-xen",
        vi: "Không có ai ở trong phòng cả.",
        tip: "Từ để hỏi + も + phủ định = hoàn toàn không có ai/gì."
      },
      {
        category: "MINNA BÀI 10: VỊ TRÍ & TỒN TẠI",
        ja: "れいぞうこの なかに なにが ありますか。",
        romaji: "Reizouko no naka ni nani ga arimasu ka?",
        readVi: "Rê-i-zô-kô nô na-ka ni na-ni ga a-ri-ma-xư ka?",
        vi: "Trong tủ lạnh có những thứ gì vậy?",
        tip: "れいぞうこ (Reizouko): tủ lạnh."
      },
      {
        category: "MINNA BÀI 10: VỊ TRÍ & TỒN TẠI",
        ja: "ビールや くだものなどが あります。",
        romaji: "Biiru ya kudamono nado ga arimasu.",
        readVi: "Bii-rư ya kư-đa-mô-nô na-đô ga a-ri-ma-xư",
        vi: "Có bia và hoa quả, v.v...",
        tip: "や (ya)... など (nado): liệt kê không hết (như là... và... vân vân)."
      },
      {
        category: "MINNA BÀI 10: VỊ TRÍ & TỒN TẠI",
        ja: "ポストの となりに きっさてんが あります。",
        romaji: "Posuto no tonari ni kissaten ga arimasu.",
        readVi: "Pô-xư-tô nô tô-na-ri ni kis-xa-tên ga a-ri-ma-xư",
        vi: "Ngay bên cạnh hòm thư bưu điện có một quán cà phê.",
        tip: "となり (Tonari): bên cạnh (cùng chủng loại hoặc sát vách)."
      }
    ]
  }
};

const JA_VOCAB_SCENARIOS_DATA = {
  vocab_1_greeting: {
    title: "Chủ đề 1: Tự giới thiệu & Nghề nghiệp (Minna Bài 1)",
    icon: "🌸",
    words: [
      { word: "わたし", romaji: "Watashi", readVi: "Oa-ta-si", vi: "Tôi (Đại từ ngôi 1)", tip: "Cách xưng hô chuẩn mực, lịch sự" },
      { word: "あなた", romaji: "Anata", readVi: "A-na-ta", vi: "Bạn / Anh / Chị", tip: "Tránh dùng nhiều khi đã biết tên đối phương" },
      { word: "かいしゃいん", romaji: "Kaishain", readVi: "Kai-sa-in", vi: "Nhân viên công ty", tip: "Dùng để xưng nghề nghiệp bản thân" },
      { word: "しゃいん", romaji: "Shain", readVi: "Sa-in", vi: "Nhân viên (của cty nào đó)", tip: "Đi kèm tên công ty: IMC no shain" },
      { word: "ぎんこういん", romaji: "Ginkouin", readVi: "Ghin-kô-in", vi: "Nhân viên ngân hàng", tip: "Ghép từ ngân hàng (ginkou) + nhân viên (in)" },
      { word: "いしゃ", romaji: "Isha", readVi: "I-sa", vi: "Bác sĩ", tip: "Bác sĩ y khoa" },
      { word: "がくせい", romaji: "Gakusei", readVi: "Ga-kư-xê", vi: "Học sinh / Sinh viên", tip: "Đuôi 'sei' phát âm trường âm thành 'xê'" },
      { word: "せんせい", romaji: "Sensei", readVi: "Xên-xê", vi: "Thầy cô giáo", tip: "Dùng gọi hoặc xưng thầy cô, bác sĩ" },
      { word: "だれ", romaji: "Dare", readVi: "Đa-rê", vi: "Ai (Từ để hỏi)", tip: "Thể lịch sự là どなた (donata)" },
      { word: "なんさい", romaji: "Nansai", readVi: "Nan-xai", vi: "Mấy tuổi", tip: "Thể lịch sự là おいくつ (oikutsu)" }
    ]
  },
  vocab_2_objects: {
    title: "Chủ đề 2: Đồ dùng học tập & Vật dụng (Minna Bài 2)",
    icon: "📚",
    words: [
      { word: "ほん", romaji: "Hon", readVi: "Hôn", vi: "Sách", tip: "Từ đơn chỉ chung các loại sách" },
      { word: "じしょ", romaji: "Jisho", readVi: "Di-sô", vi: "Từ điển", tip: "Cuốn từ điển tra cứu" },
      { word: "ざっし", romaji: "Zasshi", readVi: "Dzat-si", vi: "Tạp chí", tip: "Có âm ngắt っ: khựng hơi lại" },
      { word: "しんぶん", romaji: "Shinbun", readVi: "Xin-bun", vi: "Báo chí", tip: "Tờ báo tin tức hàng ngày" },
      { word: "ノート", romaji: "Nooto", readVi: "Nô-tô", vi: "Vở, sổ ghi chép", tip: "Từ mượn tiếng Anh: notebook" },
      { word: "てちょう", romaji: "Techou", readVi: "Tê-chô", vi: "Sổ tay cá nhân", tip: "Kéo dài âm 'chô'" },
      { word: "かさ", romaji: "Kasa", readVi: "Ka-xa", vi: "Cây dù / Cái ô", tip: "Vật dụng che mưa hoặc nắng" },
      { word: "とけい", romaji: "Tokei", readVi: "Tô-kê", vi: "Đồng hồ", tip: "Cả đồng hồ đeo tay lẫn treo tường" },
      { word: "かばん", romaji: "Kaban", readVi: "Ka-ban", vi: "Cặp sách, túi xách", tip: "Túi đựng đồ mang đi làm, đi học" },
      { word: "くるま", romaji: "Kuruma", readVi: "Kư-rư-ma", vi: "Xe hơi, ô tô", tip: "Phương tiện xe ô tô nói chung" }
    ]
  },
  vocab_3_places: {
    title: "Chủ đề 3: Địa điểm, Tòa nhà & Chỉ đường (Minna Bài 3)",
    icon: "🏬",
    words: [
      { word: "きょうしつ", romaji: "Kyoushitsu", readVi: "Kyô-si-tsư", vi: "Lớp học / Phòng học", tip: "Phòng học tập ở trường" },
      { word: "しょくどう", romaji: "Shokudou", readVi: "Sô-kư-đô", vi: "Nhà ăn / Căn tin", tip: "Nhà ăn trường học hoặc công ty" },
      { word: "じむしょ", romaji: "Jimusho", readVi: "Di-mư-sô", vi: "Văn phòng làm việc", tip: "Nơi làm việc hành chính" },
      { word: "かいぎしつ", romaji: "Kaigishitsu", readVi: "Kai-ghi-si-tsư", vi: "Phòng họp", tip: "Phòng họp tổ chức sự kiện" },
      { word: "うけつけ", romaji: "Uketsuke", readVi: "U-kê-tsư-kê", vi: "Quầy lễ tân / Tiếp khách", tip: "Nơi đầu tiên đón khách vào tòa nhà" },
      { word: "へや", romaji: "Heya", readVi: "Hê-ya", vi: "Căn phòng", tip: "Phòng ngủ hoặc phòng riêng" },
      { word: "おてあらい", romaji: "Otearai", readVi: "Ô-tê-a-rai", vi: "Nhà vệ sinh", tip: "Cách nói tao nhã của người Nhật" },
      { word: "かいだん", romaji: "Kaidan", readVi: "Kai-đan", vi: "Cầu thang bộ", tip: "Cầu thang đi bộ trong nhà" },
      { word: "エレベーター", romaji: "Erebeetaa", readVi: "Ê-rê-bê-taa", vi: "Thang máy", tip: "Từ mượn tiếng Anh Katakana" },
      { word: "いくら", romaji: "Ikura", readVi: "I-kư-ra", vi: "Bao nhiêu tiền", tip: "Hỏi giá tiền sản phẩm" }
    ]
  },
  vocab_4_time: {
    title: "Chủ đề 4: Thời gian, Giờ giấc & Động từ ngày (Minna Bài 4)",
    icon: "⏰",
    words: [
      { word: "いま", romaji: "Ima", readVi: "I-ma", vi: "Bây giờ, hiện tại", tip: "Mốc thời điểm ngay lúc này" },
      { word: "きょう", romaji: "Kyou", readVi: "Kyô", vi: "Hôm nay", tip: "Kéo dài âm 'ô'" },
      { word: "あした", romaji: "Ashita", readVi: "A-si-ta", vi: "Ngày mai", tip: "Ngày tiếp theo" },
      { word: "きのう", romaji: "Kinou", readVi: "Ki-nô", vi: "Hôm qua", tip: "Ngày đã qua" },
      { word: "まいあさ", romaji: "Maiasa", readVi: "Mai-a-xa", vi: "Mỗi buổi sáng", tip: "Thói quen buổi sáng lặp lại" },
      { word: "まいばん", romaji: "Maiban", readVi: "Mai-ban", vi: "Mỗi buổi tối", tip: "Thói quen mỗi buổi tối" },
      { word: "おきます", romaji: "Okimasu", readVi: "Ô-ki-ma-xư", vi: "Thức dậy", tip: "Động từ thức giấc mỗi sáng" },
      { word: "ねます", romaji: "Nemasu", readVi: "Nê-ma-xư", vi: "Đi ngủ", tip: "Hành động lên giường ngủ" },
      { word: "はたらきます", romaji: "Hatarakimasu", readVi: "Ha-ta-ra-ki-ma-xư", vi: "Làm việc", tip: "Làm việc tại công ty, văn phòng" },
      { word: "やすみます", romaji: "Yasumimasu", readVi: "Ya-xư-mi-ma-xư", vi: "Nghỉ ngơi, nghỉ phép", tip: "Nghỉ ngơi hoặc ngày nghỉ" }
    ]
  },
  vocab_5_travel: {
    title: "Chủ đề 5: Phương tiện giao thông & Đi lại (Minna Bài 5)",
    icon: "🚅",
    words: [
      { word: "いきます", romaji: "Ikimasu", readVi: "I-ki-ma-xư", vi: "Đi (rời xa vị trí nói)", tip: "Di chuyển đến nơi khác" },
      { word: "きます", romaji: "Kimasu", readVi: "Ki-ma-xư", vi: "Đến (tiến về vị trí nói)", tip: "Đến nơi người nói đang ở" },
      { word: "かえります", romaji: "Kaerimasu", readVi: "Ka-ê-ri-ma-xư", vi: "Về (nhà, nước)", tip: "Quay về nguồn cội, tổ ấm" },
      { word: "でんしゃ", romaji: "Densha", readVi: "Đên-sa", vi: "Tàu điện", tip: "Phương tiện di chuyển chính ở Nhật" },
      { word: "ちかてつ", romaji: "Chikatetsu", readVi: "Chi-ka-tê-tsư", vi: "Tàu điện ngầm", tip: "Tàu chạy dưới lòng đất" },
      { word: "しんかんせん", romaji: "Shinkansen", readVi: "Xin-kan-xen", vi: "Tàu siêu tốc", tip: "Tàu cao tốc biểu tượng của Nhật" },
      { word: "バス", romaji: "Basu", readVi: "Ba-xư", vi: "Xe buýt", tip: "Katakana mượn từ 'Bus'" },
      { word: "タクシー", romaji: "Takushii", readVi: "Ta-kư-sii", vi: "Xe taxi", tip: "Kéo dài trường âm 'sii'" },
      { word: "じてんしゃ", romaji: "Jitensha", readVi: "Di-tên-sa", vi: "Xe đạp", tip: "Rất phổ biến tại các khu dân cư Nhật" },
      { word: "あるいて", romaji: "Aruite", readVi: "A-rư-i-tê", vi: "Đi bộ", tip: "Không dùng trợ từ で sau 'aruite'" }
    ]
  },
  vocab_6_food: {
    title: "Chủ đề 6: Thức ăn, Đồ uống & Bữa ăn (Minna Bài 6)",
    icon: "🍱",
    words: [
      { word: "ごはん", romaji: "Gohan", readVi: "Gô-han", vi: "Cơm / Bữa ăn", tip: "Cơm trắng hoặc dùng chỉ bữa ăn" },
      { word: "パン", romaji: "Pan", readVi: "Pan", vi: "Bánh mì", tip: "Mượn từ tiếng Bồ Đào Nha" },
      { word: "たまご", romaji: "Tamago", readVi: "Ta-ma-gô", vi: "Quả trứng", tip: "Trứng gà hay dùng trong ẩm thực Nhật" },
      { word: "にく", romaji: "Niku", readVi: "Ni-kư", vi: "Thịt", tip: "Thịt nói chung (thịt bò, heo, gà)" },
      { word: "さかな", romaji: "Sakana", readVi: "Xa-ka-na", vi: "Cá", tip: "Món ăn truyền thống của người Nhật" },
      { word: "やさい", romaji: "Yasai", readVi: "Ya-xai", vi: "Rau củ quả", tip: "Các loại rau xanh" },
      { word: "みず", romaji: "Mizu", readVi: "Mi-dzu", vi: "Nước lọc", tip: "Âm 'zu' đọc rung lưỡi" },
      { word: "おちゃ", romaji: "Ocha", readVi: "Ô-cha", vi: "Trà xanh Nhật Bản", tip: "Trà truyền thống thơm ngon" },
      { word: "ぎゅうにゅう", romaji: "Gyuunyuu", readVi: "Gyuu-nyuu", vi: "Sữa bò tươi", tip: "Cũng có thể gọi là ミルク (miruku)" },
      { word: "くだもの", romaji: "Kudamono", readVi: "Kư-đa-mô-nô", vi: "Trái cây, hoa quả", tip: "Các loại quả tươi" }
    ]
  },
  vocab_7_tools: {
    title: "Chủ đề 7: Đồ dùng, Dụng cụ & Quà tặng (Minna Bài 7)",
    icon: "🎁",
    words: [
      { word: "て", romaji: "Te", readVi: "Tê", vi: "Bàn tay", tip: "Dùng tay không (te de)" },
      { word: "はし", romaji: "Hashi", readVi: "Ha-si", vi: "Đôi đũa", tip: "Dụng cụ ăn uống quen thuộc" },
      { word: "スプーン", romaji: "Supuun", readVi: "Xư-puun", vi: "Cái muỗng / thìa", tip: "Từ mượn tiếng Anh: spoon" },
      { word: "ナイフ", romaji: "Naifu", readVi: "Nai-phư", vi: "Con dao ăn", tip: "Từ mượn: knife" },
      { word: "フォーク", romaji: "Fooku", readVi: "Phô-kư", vi: "Cái dĩa / nĩa", tip: "Từ mượn: fork" },
      { word: "はさみ", romaji: "Hasami", readVi: "Ha-xa-mi", vi: "Cây kéo cắt", tip: "Dụng cụ cắt giấy, vải" },
      { word: "パソコン", romaji: "Pasokon", readVi: "Pa-xô-kôn", vi: "Máy vi tính cá nhân", tip: "Viết tắt của personal computer" },
      { word: "ケータイ", romaji: "Keetai", readVi: "Kê-tai", vi: "Điện thoại di động", tip: "Từ cửa miệng cực kỳ phổ biến" },
      { word: "プレゼント", romaji: "Purezento", readVi: "Pư-rê-zen-tô", vi: "Món quà tặng", tip: "Món quà sinh nhật, kỷ niệm" },
      { word: "にもつ", romaji: "Nimotsu", readVi: "Ni-mô-tsư", vi: "Hành lý, bưu kiện", tip: "Hàng hóa gửi qua bưu điện" }
    ]
  },
  vocab_8_adjectives: {
    title: "Chủ đề 8: Tính từ Miêu tả & Cảm xúc (Minna Bài 8)",
    icon: "🏔️",
    words: [
      { word: "おいしい", romaji: "Oishii", readVi: "Oi-sii", vi: "Ngon miệng", tip: "Dùng khen món ăn ngon" },
      { word: "たかい", romaji: "Takai", readVi: "Ta-kai", vi: "Cao / Đắt tiền", tip: "Vừa có nghĩa là cao vừa là đắt" },
      { word: "やすい", romaji: "Yasui", readVi: "Ya-xưi", vi: "Rẻ (giá cả)", tip: "Trái nghĩa với takai" },
      { word: "あつい", romaji: "Atsui", readVi: "A-tsưi", vi: "Nóng (thời tiết / cảm giác)", tip: "Nóng bức mùa hè" },
      { word: "さむい", romaji: "Samui", readVi: "Xa-mưi", vi: "Lạnh (thời tiết)", tip: "Cái rét lạnh mùa đông" },
      { word: "おもしろい", romaji: "Omoshiroi", readVi: "Ô-mô-si-rôi", vi: "Thú vị, hấp dẫn", tip: "Khen sách, phim, cuộc sống vui vẻ" },
      { word: "いそがしい", romaji: "Isogashii", readVi: "I-xô-ga-sii", vi: "Bận rộn", tip: "Công việc nhiều việc phải làm" },
      { word: "しずか", romaji: "Shizuka", readVi: "Si-dzư-ka", vi: "Yên tĩnh", tip: "Tính từ đuôi -na: nơi thanh bình" },
      { word: "きれい", romaji: "Kirei", readVi: "Ki-rê", vi: "Đẹp / Sạch sẽ", tip: "Tính từ đuôi -na (dù tận cùng bằng i)" },
      { word: "べんり", romaji: "Benri", readVi: "Bên-ri", vi: "Tiện lợi, tiện ích", tip: "Giao thông thuận tiện, app dễ dùng" }
    ]
  },
  vocab_9_skills: {
    title: "Chủ đề 9: Sở thích, Năng khiếu & Thể thao (Minna Bài 9)",
    icon: "⚽",
    words: [
      { word: "すき", romaji: "Suki", readVi: "Xư-ki", vi: "Thích", tip: "Yêu thích cái gì đó (đi với trợ từ ga)" },
      { word: "きらい", romaji: "Kirai", readVi: "Ki-rai", vi: "Ghét, không thích", tip: "Tính từ đuôi -na" },
      { word: "じょうず", romaji: "Jouzu", readVi: "Dô-u-dzư", vi: "Giỏi, khéo léo", tip: "Dùng để khen ngợi người khác" },
      { word: "へた", romaji: "Heta", readVi: "Hê-ta", vi: "Kém, dở, vụng về", tip: "Trái nghĩa với jouzu" },
      { word: "りょうり", romaji: "Ryouri", readVi: "Ryô-ri", vi: "Món ăn / Nấu nướng", tip: "Nghệ thuật nấu ăn" },
      { word: "スポーツ", romaji: "Supootsu", readVi: "Xư-pô-tsư", vi: "Thể thao", tip: "Các môn thể thao vận động" },
      { word: "やきゅう", romaji: "Yakyuu", readVi: "Ya-kyuu", vi: "Bóng chày", tip: "Môn thể thao số 1 tại Nhật Bản" },
      { word: "おんがく", romaji: "Ongaku", readVi: "Ôn-ga-kư", vi: "Âm nhạc", tip: "Âm thanh giai điệu" },
      { word: "うた", romaji: "Uta", readVi: "U-ta", vi: "Bài hát", tip: "Bài ca, bài hát" },
      { word: "じかん", romaji: "Jikan", readVi: "Di-kan", vi: "Thời gian, thì giờ", tip: "Thời gian biểu trong ngày" }
    ]
  },
  vocab_10_positions: {
    title: "Chủ đề 10: Vị trí, Phương hướng & Đồ đạc (Minna Bài 10)",
    icon: "🛋️",
    words: [
      { word: "うえ", romaji: "Ue", readVi: "U-ê", vi: "Phía trên, ở trên", tip: "Trên bàn, trên nóc tủ" },
      { word: "した", romaji: "Shita", readVi: "Si-ta", vi: "Phía dưới, ở dưới", tip: "Dưới gầm bàn, dưới ghế" },
      { word: "まえ", romaji: "Mae", readVi: "Ma-ê", vi: "Phía trước", tip: "Trước mặt, phía trước nhà" },
      { word: "うしろ", romaji: "Ushiro", readVi: "U-si-rô", vi: "Phía sau, đằng sau", tip: "Sau lưng, phía sau tòa nhà" },
      { word: "みぎ", romaji: "Migi", readVi: "Mi-ghi", vi: "Bên phải", tip: "Hướng tay phải" },
      { word: "ひだり", romaji: "Hidari", readVi: "Hi-đa-ri", vi: "Bên trái", tip: "Hướng tay trái" },
      { word: "なか", romaji: "Naka", readVi: "Na-ka", vi: "Bên trong", tip: "Trong phòng, trong hộp" },
      { word: "そと", romaji: "Soto", readVi: "Xô-tô", vi: "Bên ngoài", tip: "Ngoài trời, ngoài sân" },
      { word: "となり", romaji: "Tonari", readVi: "Tô-na-ri", vi: "Bên cạnh (sát vách)", tip: "Ngay sát cạnh nhà hoặc vật" },
      { word: "あいだ", romaji: "Aida", readVi: "Ai-đa", vi: "Ở giữa (khoảng giữa hai vật)", tip: "Ở giữa A và B: A to B no aida" }
    ]
  }
};
