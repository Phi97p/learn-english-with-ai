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
  },

  unit_11_quantities: {
    title: "Bài 11: Số lượng, Thời gian & Tần suất (Minna Bài 11)",
    icon: "🔢",
    sentences: [
      {
        category: "MINNA BÀI 11: SỐ LƯỢNG & TẦN SUẤT",
        ja: "りんごを ４つ（よっつ） かいました。",
        romaji: "Ringo o yottsu kaimashita.",
        readVi: "Rin-gô ô yôt-tsư kai-ma-si-ta",
        vi: "Tôi đã mua 4 quả táo.",
        tip: "Đếm vật dùng từ thuần Nhật: ひとつ (1), ふたつ (2), みっつ (3), よっつ (4)..."
      },
      {
        category: "MINNA BÀI 11: SỐ LƯỢNG & TẦN SUẤT",
        ja: "かいぎしつに がいこくじんが ２人（ふたり） います。",
        romaji: "Kaigishitsu ni gaikokujin ga futari imasu.",
        readVi: "Kai-ghi-si-tsư ni gai-kô-kư-din ga phư-ta-ri i-ma-xư",
        vi: "Trong phòng họp có 2 người nước ngoài.",
        tip: "Đếm người: ひとり (1 người), ふたり (2 người), từ 3 người trở lên ghép [số] + にん (nin)."
      },
      {
        category: "MINNA BÀI 11: SỐ LƯỢNG & TẦN SUẤT",
        ja: "１しゅうかんに ２かい テニスを します。",
        romaji: "Isshuukan ni nikai tenisu o shimasu.",
        readVi: "Is-syuu-kan ni ni-kai tê-ni-xư ô si-ma-xư",
        vi: "Một tuần tôi chơi tennis 2 lần.",
        tip: "Khoảng thời gian + に + [số lần] + động từ = biểu thị tần suất đều đặn."
      },
      {
        category: "MINNA BÀI 11: SỐ LƯỢNG & TẦN SUẤT",
        ja: "くにから 日本まで ひこうきで ５じかん かかります。",
        romaji: "Kuni kara Nihon made hikouki de gojikan kakarimasu.",
        readVi: "Kư-ni ka-ra Ni-hôn ma-đê hi-kô-ki đê gô-di-kan ka-ka-ri-ma-xư",
        vi: "Từ nước tôi sang Nhật Bản mất 5 tiếng đi máy bay.",
        tip: "かかります (Kakarimasu) dùng để nói tốn bao nhiêu thời gian hoặc tiền bạc."
      },
      {
        category: "MINNA BÀI 11: SỐ LƯỢNG & TẦN SUẤT",
        ja: "どのくらい 日本語を べんきょうしましたか。",
        romaji: "Donokurai Nihongo o benkyoushimashita ka?",
        readVi: "Đô-nô-kư-rai Ni-hôn-gô ô bên-kyô-si-ma-si-ta ka?",
        vi: "Bạn đã học tiếng Nhật trong bao lâu rồi?",
        tip: "どのくらい (Donokurai): dùng hỏi khoảng thời gian kéo dài bao lâu."
      },
      {
        category: "MINNA BÀI 11: SỐ LƯỢNG & TẦN SUẤT",
        ja: "６か月（ろっかげつ） べんきょうしました。",
        romaji: "Rokkagetsu benkyoushimashita.",
        readVi: "Rôk-ka-ghê-tsư bên-kyô-si-ma-si-ta",
        vi: "Tôi đã học được 6 tháng rồi.",
        tip: "～か月 (kagetsu) là lượng từ đếm số tháng: いっかげつ (1 tháng), ろっかげつ (6 tháng)..."
      }
    ]
  },
  unit_12_comparison: {
    title: "Bài 12: So sánh & Quá khứ tính từ (Minna Bài 12)",
    icon: "⚖️",
    sentences: [
      {
        category: "MINNA BÀI 12: SO SÁNH & QUÁ KHỨ TÍNH TỪ",
        ja: "きのうの パーティーは とても たのしかったです。",
        romaji: "Kinou no paatii wa totemo tanoshikatta desu.",
        readVi: "Ki-nô nô paa-tii oa tô-tê-mô ta-nô-si-kat-ta đê-xư",
        vi: "Bữa tiệc ngày hôm qua đã rất là vui vẻ.",
        tip: "Quá khứ tính từ đuôi -i: bỏ い thêm かったです (tanoshii -> tanoshikatta desu)."
      },
      {
        category: "MINNA BÀI 12: SO SÁNH & QUÁ KHỨ TÍNH TỪ",
        ja: "きのうは あまり さむくなかったです。",
        romaji: "Kinou wa amari samukunakatta desu.",
        readVi: "Ki-nô oa a-ma-ri xa-mư-kư-na-kat-ta đê-xư",
        vi: "Hôm qua trời đã không lạnh lắm.",
        tip: "Phủ định quá khứ tính từ đuôi -i: bỏ い thêm くなかったです (samui -> samukunakatta desu)."
      },
      {
        category: "MINNA BÀI 12: SO SÁNH & QUÁ KHỨ TÍNH TỪ",
        ja: "ほっかいどうは きゅうしゅうより 大きい（おおきい）です。",
        romaji: "Hokkaidou wa Kyuushuu yori ookii desu.",
        readVi: "Hôk-kai-đô oa Kyuu-syuu yô-ri ôô-kii đê-xư",
        vi: "Hokkaido thì to lớn hơn Kyushu.",
        tip: "Mẫu so sánh hơn: A は B より [tính từ] です (A thì hơn B)."
      },
      {
        category: "MINNA BÀI 12: SO SÁNH & QUÁ KHỨ TÍNH TỪ",
        ja: "でんしゃと バスと どちらが はやいですか。",
        romaji: "Densha to basu to dochira ga hayai desu ka?",
        readVi: "Đên-sa tô ba-xư tô đô-chi-ra ga ha-yai đê-xư ka?",
        vi: "Tàu điện và xe buýt, phương tiện nào nhanh hơn?",
        tip: "So sánh 2 vật: A と B と どちらが [tính từ] ですか."
      },
      {
        category: "MINNA BÀI 12: SO SÁNH & QUÁ KHỨ TÍNH TỪ",
        ja: "でんしゃの ほうが はやいです。",
        romaji: "Densha no hou ga hayai desu.",
        readVi: "Đên-sa nô hô-u ga ha-yai đê-xư",
        vi: "Tàu điện thì nhanh hơn xe buýt.",
        tip: "Trả lời so sánh chọn 1 trong 2: [Danh từ] + の ほうが + Tính từ."
      },
      {
        category: "MINNA BÀI 12: SO SÁNH & QUÁ KHỨ TÍNH TỪ",
        ja: "１年の なかで いつが いちばん すきですか。",
        romaji: "Ichinen no naka de itsu ga ichiban suki desu ka?",
        readVi: "I-chi-nên nô na-ka đê i-tsư ga i-chi-ban xư-ki đê-xư ka?",
        vi: "Trong một năm, bạn thích mùa nào nhất?",
        tip: "いちばん (ichiban): nhất. Dùng hỏi so sánh cao nhất trong một phạm vi."
      },
      {
        category: "MINNA BÀI 12: SO SÁNH & QUÁ KHỨ TÍNH TỪ",
        ja: "あきが いちばん すきです。",
        romaji: "Aki ga ichiban suki desu.",
        readVi: "A-ki ga i-chi-ban xư-ki đê-xư",
        vi: "Tôi thích mùa thu nhất.",
        tip: "Mùa thu lá phong đỏ (Kouyou) là nét đẹp đặc trưng nổi tiếng ở Nhật."
      }
    ]
  },
  unit_13_wishes: {
    title: "Bài 13: Mong muốn, Nguyện vọng & Mục đích (Minna Bài 13)",
    icon: "🎯",
    sentences: [
      {
        category: "MINNA BÀI 13: MONG MUỐN & MỤC ĐÍCH",
        ja: "わたしは あたらしい くるまが ほしいです。",
        romaji: "Watashi wa atarashii kuruma ga hoshii desu.",
        readVi: "Oa-ta-si oa a-ta-ra-sii kư-rư-ma ga hô-sii đê-xư",
        vi: "Tôi muốn có một chiếc ô tô mới.",
        tip: "Muốn có đồ vật/sự vật: Danh từ + が ほしいです (hoshii desu)."
      },
      {
        category: "MINNA BÀI 13: MONG MUỐN & MỤC ĐÍCH",
        ja: "わたしは 日本へ 行きたい（いきたい）です。",
        romaji: "Watashi wa Nihon e ikitai desu.",
        readVi: "Oa-ta-si oa Ni-hôn ê i-ki-tai đê-xư",
        vi: "Tôi muốn đi du lịch / học tập ở Nhật Bản.",
        tip: "Muốn làm hành động gì: Động từ thể ます bỏ ます + たいです."
      },
      {
        category: "MINNA BÀI 13: MONG MUỐN & MỤC ĐÍCH",
        ja: "おなかが すきましたから、なにか 食べたい（たべたい）です。",
        romaji: "Onaka ga sukimashita kara, nanika tabetai desu.",
        readVi: "Ô-na-ka ga xư-ki-ma-si-ta ka-ra, na-ni-ka ta-bê-tai đê-xư",
        vi: "Vì bụng đói cồn cào rồi nên tôi muốn ăn thứ gì đó.",
        tip: "なにか (Nanika): cái gì đó (không xác định cụ thể)."
      },
      {
        category: "MINNA BÀI 13: MONG MUỐN & MỤC ĐÍCH",
        ja: "こうべへ えいがを 見に（みに） 行きます。",
        romaji: "Koube e eiga o mi ni ikimasu.",
        readVi: "Kô-bê ê ê-i-ga ô mi ni i-ki-ma-xư",
        vi: "Tôi đi đến thành phố Kobe để xem phim.",
        tip: "Đi đến đâu để làm gì: Địa điểm + へ + V(bỏ ます) + に 行きます."
      },
      {
        category: "MINNA BÀI 13: MONG MUỐN & MỤC ĐÍCH",
        ja: "のどが かわきましたから、おちゃを 飲みましょう（のみましょう）。",
        romaji: "Nodo ga kawakimashita kara, ocha o nomimashou.",
        readVi: "Nô-đô ga ka-oa-ki-ma-si-ta ka-ra, ô-cha ô nô-mi-ma-syô",
        vi: "Khát nước rồi, chúng ta cùng uống trà nhé.",
        tip: "～ましょう: lời rủ rê, đề xuất thân thiện cùng làm gì."
      },
      {
        category: "MINNA BÀI 13: MONG MUỐN & MỤC ĐÍCH",
        ja: "しゅうまつは なにを したいですか。",
        romaji: "Shuumatsu wa nani o shitai desu ka?",
        readVi: "Syuu-mat-sư oa na-ni ô si-tai đê-xư ka?",
        vi: "Cuối tuần này bạn muốn làm gì thế?",
        tip: "Hỏi mong muốn của người đối diện: Nani o shitai desu ka?"
      }
    ]
  },
  unit_14_te_requests: {
    title: "Bài 14: Thể Te, Yêu cầu & Đang làm gì (Minna Bài 14)",
    icon: "✋",
    sentences: [
      {
        category: "MINNA BÀI 14: THỂ TE & YÊU CẦU",
        ja: "ちょっと まって ください。",
        romaji: "Chotto matte kudasai.",
        readVi: "Chôt-tô mat-tê kư-đa-xai",
        vi: "Xin vui lòng đợi tôi một chút.",
        tip: "Thể Te + ください: câu nhờ vả, yêu cầu lịch sự phổ biến nhất tiếng Nhật."
      },
      {
        category: "MINNA BÀI 14: THỂ TE & YÊU CẦU",
        ja: "もう すこし ゆっくり はなして ください。",
        romaji: "Mou sukoshi yukkuri hanashite kudasai.",
        readVi: "Mô-u xư-kô-si yưk-kư-ri ha-na-si-tê kư-đa-xai",
        vi: "Xin vui lòng nói chậm lại một chút nữa ạ.",
        tip: "Câu sinh tồn cực kỳ hữu ích khi nghe người Nhật nói quá nhanh."
      },
      {
        category: "MINNA BÀI 14: THỂ TE & YÊU CẦU",
        ja: "にもつを もちましょうか。",
        romaji: "Nimotsu o mochimashou ka?",
        readVi: "Ni-mô-tsư ô mô-chi-ma-syô ka?",
        vi: "Để tôi xách hành lý giúp bạn nhé?",
        tip: "V-ましょうか: chủ động ngỏ lời đề nghị giúp đỡ đối phương."
      },
      {
        category: "MINNA BÀI 14: THỂ TE & YÊU CẦU",
        ja: "ミラーさんは いま でんわを かけて います。",
        romaji: "Miraa-san wa ima denwa o kakete imasu.",
        readVi: "Mi-laa xan oa i-ma đên-oa ô ka-kê-tê i-ma-xư",
        vi: "Anh Miller bây giờ đang gọi điện thoại.",
        tip: "Thể Te + います: diễn tả hành động đang xảy ra tại thời điểm nói."
      },
      {
        category: "MINNA BÀI 14: THỂ TE & YÊU CẦU",
        ja: "あついですから、エアコンを つけて ください。",
        romaji: "Atsui desu kara, eakon o tsukete kudasai.",
        readVi: "A-tsưi đê-xư ka-ra, ê-a-kôn ô tsư-kê-tê kư-đa-xai",
        vi: "Vì trời nóng nên xin hãy bật máy điều hòa lên nhé.",
        tip: "エアコンをつける (Eakon o tsukeru) = bật máy lạnh/điều hòa."
      },
      {
        category: "MINNA BÀI 14: THỂ TE & YÊU CẦU",
        ja: "タクシーを よびましょうか。",
        romaji: "Takushii o yobimashou ka?",
        readVi: "Ta-kư-sii ô yô-bi-ma-syô ka?",
        vi: "Tôi gọi taxi giúp bạn nhé?",
        tip: "よぶ (yobu): gọi, vẫy (xe, người)."
      }
    ]
  },
  unit_15_permission: {
    title: "Bài 15: Xin phép, Cấm đoán & Trạng thái (Minna Bài 15)",
    icon: "📸",
    sentences: [
      {
        category: "MINNA BÀI 15: XIN PHÉP & CẤM ĐOÁN",
        ja: "ここで しゃしんを とっても いいですか。",
        romaji: "Koko de shashin o totte mo ii desu ka?",
        readVi: "Kô-kô đê sa-sin ô tôt-tê mô ii đê-xư ka?",
        vi: "Tôi chụp ảnh ở chỗ này có được phép không?",
        tip: "V-てもいいですか: mẫu câu chuẩn mực để xin phép làm một điều gì đó."
      },
      {
        category: "MINNA BÀI 15: XIN PHÉP & CẤM ĐOÁN",
        ja: "はい、いいですよ。どうぞ。",
        romaji: "Hai, ii desu yo. Douzo.",
        readVi: "Hai, ii đê-xư yô. Đô-zô",
        vi: "Vâng, được chứ ạ. Xin mời bạn.",
        tip: "Cách đáp lại khi đồng ý cho phép ai đó làm việc họ xin phép."
      },
      {
        category: "MINNA BÀI 15: XIN PHÉP & CẤM ĐOÁN",
        ja: "ここで タバコを すっては いけません。",
        romaji: "Koko de tabako o sutte wa ikemasen.",
        readVi: "Kô-kô đê ta-ba-kô ô xưt-tê oa i-kê-ma-xen",
        vi: "Không được hút thuốc lá ở khu vực này.",
        tip: "V-てはいけません: biểu thị sự cấm đoán, không được phép làm."
      },
      {
        category: "MINNA BÀI 15: XIN PHÉP & CẤM ĐOÁN",
        ja: "わたしは かぞくと ハノイに すんで います。",
        romaji: "Watashi wa kazoku to Hanoi ni sunde imasu.",
        readVi: "Oa-ta-si oa ka-zô-kư tô Ha-nôi ni xưn-đê i-ma-xư",
        vi: "Tôi đang sống cùng gia đình ở Hà Nội.",
        tip: "すんでいます: trạng thái cư trú sinh sống lâu dài (đi với trợ từ に)."
      },
      {
        category: "MINNA BÀI 15: XIN PHÉP & CẤM ĐOÁN",
        ja: "ミラーさんの でんわばんごうを しって いますか。",
        romaji: "Miraa-san no denwa bangou o shitte imasu ka?",
        readVi: "Mi-laa xan nô đên-oa ban-gô ô sit-tê i-ma-xư ka?",
        vi: "Bạn có biết số điện thoại của anh Miller không?",
        tip: "Biết: しっています. Trả lời Không biết: bắt buộc là しりません."
      },
      {
        category: "MINNA BÀI 15: XIN PHÉP & CẤM ĐOÁN",
        ja: "いいえ、しりません。",
        romaji: "Iie, shirimasen.",
        readVi: "I-i-ê, si-ri-ma-xen",
        vi: "Dạ không, tôi không biết ạ.",
        tip: "Quy tắc ngữ pháp: phủ định của 'shitte imasu' là 'shirimasen'."
      }
    ]
  },
  unit_16_sequences: {
    title: "Bài 16: Nối câu, Trình tự hành động & Miêu tả (Minna Bài 16)",
    icon: "🏃",
    sentences: [
      {
        category: "MINNA BÀI 16: NỐI CÂU & TRÌNH TỰ",
        ja: "あさ ジョギングを して、シャワーを あびて、かいしゃへ 行きます。",
        romaji: "Asa jogingu o shite, shawaa o abite, kaisha e ikimasu.",
        readVi: "A-xa dzo-ghin-gư ô si-tê, sa-oa ô a-bi-tê, kai-sa ê i-ki-ma-xư",
        vi: "Buổi sáng tôi chạy bộ, tắm vòi sen rồi đi đến công ty làm việc.",
        tip: "Dùng thể Te nối liên tiếp các hành động theo thứ tự thời gian xảy ra trước sau."
      },
      {
        category: "MINNA BÀI 16: NỐI CÂU & TRÌNH TỰ",
        ja: "コンサートが おわってから、レストランで しょくじしました。",
        romaji: "Konsaato ga owatte kara, resutoran de shokuji shimashita.",
        readVi: "Kôn-saa-tô ga ô-oa-tê ka-ra, rê-xư-tô-ran đê sô-kư-di si-ma-si-ta",
        vi: "Sau khi buổi hòa nhạc kết thúc, tôi đã đi ăn ở nhà hàng.",
        tip: "V-てから (Te kara): sau khi làm xong V1 thì mới bắt đầu làm V2."
      },
      {
        category: "MINNA BÀI 16: NỐI CÂU & TRÌNH TỰ",
        ja: "おおさかは たべものが おいしくて、にぎやかです。",
        romaji: "Oosaka wa tabemono ga oishikute, nigiyaka desu.",
        readVi: "Ôô-xa-ka oa ta-bê-mô-nô ga oi-si-kư-tê, ni-ghi-ya-ka đê-xư",
        vi: "Osaka thì đồ ăn ngon và đường phố rất náo nhiệt.",
        tip: "Nối tính từ đuôi -i: bỏ い thay bằng くて (oishii -> oishikute)."
      },
      {
        category: "MINNA BÀI 16: NỐI CÂU & TRÌNH TỰ",
        ja: "マリアさんは かみが ながくて、きれいです。",
        romaji: "Maria-san wa kami ga nagakute, kirei desu.",
        readVi: "Ma-ri-a xan oa ka-mi ga na-ga-kư-tê, ki-rê-i đê-xư",
        vi: "Chị Maria tóc dài và rất xinh đẹp.",
        tip: "Mẫu miêu tả: Danh từ は Bộ phận が Tính từ."
      },
      {
        category: "MINNA BÀI 16: NỐI CÂU & TRÌNH TỰ",
        ja: "だいがくへ どうやって 行きますか。",
        romaji: "Daigaku e douyatte ikimasu ka?",
        readVi: "Đai-ga-kư ê đô-u-yat-tê i-ki-ma-xư ka?",
        vi: "Làm thế nào để đi đến trường đại học vậy ạ?",
        tip: "どうやって (Douyatte): dùng hỏi cách thức hoặc lộ trình di chuyển."
      },
      {
        category: "MINNA BÀI 16: NỐI CÂU & TRÌNH TỰ",
        ja: "京都駅から １６ばんの バスに のって、市役所前で おります。",
        romaji: "Kyouto-eki kara 16-ban no basu ni notte, shiyakushomae de orimasu.",
        readVi: "Kyô-tô ê-ki ka-ra 16 ban nô ba-xư ni nôt-tê, si-ya-kư-syô-ma-ê đê ô-ri-ma-xư",
        vi: "Từ ga Kyoto lên xe buýt số 16, rồi xuống ở trạm trước tòa thị chính.",
        tip: "Lên xe: に のります. Xuống xe: で おります."
      }
    ]
  },
  unit_17_nai_rules: {
    title: "Bài 17: Thể Nai, Khuyên ngăn & Bắt buộc (Minna Bài 17)",
    icon: "⚠️",
    sentences: [
      {
        category: "MINNA BÀI 17: THỂ NAI & QUY TẮC",
        ja: "ここで しゃしんを とらないで ください。",
        romaji: "Koko de shashin o toranaide kudasai.",
        readVi: "Kô-kô đê sa-sin ô tô-ra-nai-đê kư-đa-xai",
        vi: "Xin vui lòng đừng chụp ảnh ở đây.",
        tip: "V-ないでください: xin đừng làm... (Khuyên ngăn lịch sự)."
      },
      {
        category: "MINNA BÀI 17: THỂ NAI & QUY TẮC",
        ja: "くすりを のまなければ なりません。",
        romaji: "Kusuri o nomanakereba narimasen.",
        readVi: "Kư-xư-ri ô nô-ma-na-kê-rê-ba na-ri-ma-xen",
        vi: "Tôi bắt buộc phải uống thuốc theo đơn.",
        tip: "V-なければなりません: bắt buộc phải làm, không làm không được."
      },
      {
        category: "MINNA BÀI 17: THỂ NAI & QUY TẮC",
        ja: "あしたは やすみですから、はやく おきなくても いいです。",
        romaji: "Ashita wa yasumi desu kara, hayaku okinakutemo ii desu.",
        readVi: "A-si-ta oa ya-xư-mi đê-xư ka-ra, ha-ya-kư ô-ki-na-kư-tê-mô ii đê-xư",
        vi: "Ngày mai là ngày nghỉ nên không cần phải dậy sớm cũng được.",
        tip: "V-なくてもいいです: không cần làm V cũng không sao."
      },
      {
        category: "MINNA BÀI 17: THỂ NAI & QUY TẮC",
        ja: "きんようびまでに レポートを だして ください。",
        romaji: "Kinyoubi made ni repooto o dashite kudasai.",
        readVi: "Kin-yô-bi ma-đê ni rê-pôô-tô ô đa-si-tê kư-đa-xai",
        vi: "Xin hãy nộp bản báo cáo trước thứ Sáu nhé.",
        tip: "までに (Made ni): hạn chót phải hoàn thành hành động trước thời điểm đó."
      },
      {
        category: "MINNA BÀI 17: THỂ NAI & QUY TẮC",
        ja: "しんぱいしないで ください。だいじょうぶです。",
        romaji: "Shinpai shinaide kudasai. Daijoubu desu.",
        readVi: "Xin-pai si-nai-đê kư-đa-xai. Đai-dzô-bu đê-xư",
        vi: "Xin đừng quá lo lắng. Mọi chuyện sẽ ổn thôi ạ.",
        tip: "Câu nói trấn an và động viên người khác rất ấm áp."
      }
    ]
  },
  unit_18_dictionary_form: {
    title: "Bài 18: Thể Từ điển, Khả năng & Sở thích (Minna Bài 18)",
    icon: "📖",
    sentences: [
      {
        category: "MINNA BÀI 18: THỂ TỪ ĐIỂN & KHẢ NĂNG",
        ja: "ミラーさんは かんじを よむ ことが できます。",
        romaji: "Miraa-san wa kanji o yomu koto ga dekimasu.",
        readVi: "Mi-laa xan oa kan-di ô yô-mư kô-tô ga đê-ki-ma-xư",
        vi: "Anh Miller có thể đọc được chữ Hán (Kanji).",
        tip: "V-る ことが できます: cấu trúc diễn tả năng lực có thể làm được."
      },
      {
        category: "MINNA BÀI 18: THỂ TỪ ĐIỂN & KHẢ NĂNG",
        ja: "わたしの しゅみは えいがを 見る（みる） ことです。",
        romaji: "Watashi no shumi wa eiga o miru koto desu.",
        readVi: "Oa-ta-si nô syu-mi oa ê-i-ga ô mi-rư kô-tô đê-xư",
        vi: "Sở thích của tôi là xem phim ảnh.",
        tip: "わたしの趣味は + V-る ことです: giới thiệu sở thích bản thân."
      },
      {
        category: "MINNA BÀI 18: THỂ TỪ ĐIỂN & KHẢ NĂNG",
        ja: "ごはんを たべる まえに、てを あらいます。",
        romaji: "Gohan o taberu mae ni, te o araimasu.",
        readVi: "Gô-han ô ta-bê-rư ma-ê ni, tê ô a-rai-ma-xư",
        vi: "Trước khi ăn cơm, tôi rửa sạch tay.",
        tip: "V-る / Danh từ の + まえに: trước khi làm việc gì đó."
      },
      {
        category: "MINNA BÀI 18: THỂ TỪ ĐIỂN & KHẢ NĂNG",
        ja: "日本へ 来る（くる） まえに、日本語を べんきょうしました。",
        romaji: "Nihon e kuru mae ni, Nihongo o benkyoushimashita.",
        readVi: "Ni-hôn ê kư-rư ma-ê ni, Ni-hôn-gô ô bên-kyô-si-ma-si-ta",
        vi: "Trước khi sang Nhật Bản, tôi đã chăm chỉ học tiếng Nhật.",
        tip: "Động từ trước まえに luôn luôn chia ở Thể từ điển (nguyên mẫu)."
      },
      {
        category: "MINNA BÀI 18: THỂ TỪ ĐIỂN & KHẢ NĂNG",
        ja: "カードで はらう ことが できますか。",
        romaji: "Kaado de harau koto ga dekimasu ka?",
        readVi: "Kaa-đô đê ha-ra-u kô-tô ga đê-ki-ma-xư ka?",
        vi: "Tôi có thể thanh toán bằng thẻ tín dụng được không ạ?",
        tip: "Câu hỏi cực kỳ tiện lợi khi đi mua sắm ở Nhật."
      },
      {
        category: "MINNA BÀI 18: THỂ TỪ ĐIỂN & KHẢ NĂNG",
        ja: "ピアノを ひく ことが できますか。",
        romaji: "Piano o hiku koto ga dekimasu ka?",
        readVi: "Pi-a-nô ô hi-kư kô-tô ga đê-ki-ma-xư ka?",
        vi: "Bạn có biết chơi đàn piano không?",
        tip: "ひく (hiku): chơi các nhạc cụ bấm/gảy dây như piano, ghita."
      }
    ]
  },
  unit_19_ta_experience: {
    title: "Bài 19: Thể Ta, Kinh nghiệm & Biến đổi (Minna Bài 19)",
    icon: "🗻",
    sentences: [
      {
        category: "MINNA BÀI 19: THỂ TA & KINH NGHIỆM",
        ja: "ふじさんに のぼった ことが あります。",
        romaji: "Fujisan ni nobotta koto ga arimasu.",
        readVi: "Phư-di-xan ni nô-bôt-ta kô-tô ga a-ri-ma-xư",
        vi: "Tôi đã từng leo lên núi Phú Sĩ rồi.",
        tip: "V-た ことが あります: nói về trải nghiệm đã từng làm trong đời."
      },
      {
        category: "MINNA BÀI 19: THỂ TA & KINH NGHIỆM",
        ja: "やすみの ひは テニスを したり、えいがを 見たり（みたり） します。",
        romaji: "Yasumi no hi wa tenisu o shitari, eiga o mitari shimasu.",
        readVi: "Ya-xư-mi nô hi oa tê-ni-xư ô si-ta-ri, ê-i-ga ô mi-ta-ri si-ma-xư",
        vi: "Vào ngày nghỉ, tôi lúc thì chơi tennis, lúc thì xem phim.",
        tip: "V1-たり、V2-たり します: liệt kê vài hành động tiêu biểu đại diện."
      },
      {
        category: "MINNA BÀI 19: THỂ TA & KINH NGHIỆM",
        ja: "だんだん さむく なりました。",
        romaji: "Dandan samuku narimashita.",
        readVi: "Đan-đan xa-mư-kư na-ri-ma-si-ta",
        vi: "Trời đã dần dần trở nên lạnh hơn rồi.",
        tip: "Tính từ đuôi -i chuyển thành く + なります (samui -> samuku narimashita)."
      },
      {
        category: "MINNA BÀI 19: THỂ TA & KINH NGHIỆM",
        ja: "日本語が じょうずに なりましたね。",
        romaji: "Nihongo ga jouzu ni narimashita ne.",
        readVi: "Ni-hôn-gô ga dô-u-dzư ni na-ri-ma-si-ta nê",
        vi: "Tiếng Nhật của bạn đã tiến bộ và trở nên giỏi hơn rồi nhỉ!",
        tip: "Tính từ đuôi -na chuyển thành に + なります (jouzu -> jouzu ni narimashita)."
      },
      {
        category: "MINNA BÀI 19: THỂ TA & KINH NGHIỆM",
        ja: "いちども 日本へ 行った（いった） ことが ありません。",
        romaji: "Ichidomo Nihon e itta koto ga arimasen.",
        readVi: "I-chi-đô-mô Ni-hôn ê it-ta kô-tô ga a-ri-ma-xen",
        vi: "Tôi chưa từng sang Nhật Bản một lần nào cả.",
        tip: "いちども + Phủ định: chưa từng làm một lần nào cả."
      }
    ]
  },
  unit_20_casual_plain: {
    title: "Bài 20: Thể Thông thường & Giao tiếp thân mật (Minna Bài 20)",
    icon: "💬",
    sentences: [
      {
        category: "MINNA BÀI 20: THỂ THÔNG THƯỜNG (NGẮN)",
        ja: "あした とうきょうへ 行く？ - うん、行く。",
        romaji: "Ashita Toukyou e iku? - Un, iku.",
        readVi: "A-si-ta Tôô-kyôô ê i-kư? - Un, i-kư",
        vi: "Mai cậu có đi Tokyo không? - Ừ, tớ đi.",
        tip: "Thể thông thường (thể ngắn): dùng thân mật với bạn bè, người thân."
      },
      {
        category: "MINNA BÀI 20: THỂ THÔNG THƯỜNG (NGẮN)",
        ja: "コーヒー、のむ？ - ううん、のまない。",
        romaji: "Koohii, nomu? - Uun, nomanai.",
        readVi: "Kôô-hii, nô-mư? - Uun, nô-ma-nai",
        vi: "Uống cà phê không bạn? - Hông, mình không uống đâu.",
        tip: "Ừ/Vâng = うん (Un), Không = ううん (Uun). Lên giọng cuối câu để hỏi."
      },
      {
        category: "MINNA BÀI 20: THỂ THÔNG THƯỜNG (NGẮN)",
        ja: "きのうの えいが、おもしろかった？ - うん、すごく おもしろかった。",
        romaji: "Kinou no eiga, omoshirokatta? - Un, sugoku omoshirokatta.",
        readVi: "Ki-nôô nô ê-i-ga, ô-mô-si-rô-kat-ta? - Un, xư-gô-kư ô-mô-si-rô-kat-ta",
        vi: "Bộ phim hôm qua xem hay không? - Ừ, cực kỳ thú vị luôn.",
        tip: "Bỏ です ở cuối câu tính từ đuôi -i khi giao tiếp thân mật."
      },
      {
        category: "MINNA BÀI 20: THỂ THÔNG THƯỜNG (NGẮN)",
        ja: "いま なんじ？ - ３じだよ。",
        romaji: "Ima nanji? - San-ji da yo.",
        readVi: "I-ma nan-di? - Xan-di đa yô",
        vi: "Mấy giờ rồi cậu? - 3 giờ rồi đó.",
        tip: "です đổi thành だ (da) trong thể ngắn đối với danh từ / tính từ -na."
      },
      {
        category: "MINNA BÀI 20: THỂ THÔNG THƯỜNG (NGẮN)",
        ja: "富士山に 登った こと ある？ - ううん、ない。",
        romaji: "Fujisan ni nobotta koto aru? - Uun, nai.",
        readVi: "Phư-di-xan ni nô-bôt-ta kô-tô a-rư? - Uun, nai",
        vi: "Cậu đã từng leo núi Phú Sĩ chưa? - Chưa, chưa từng leo.",
        tip: "Lược bỏ trợ từ が trong khẩu ngữ thân mật: koto aru?"
      }
    ]
  },
  unit_21_thoughts_opinions: {
    title: "Bài 21: Bày tỏ ý kiến & Trích dẫn lời nói (Minna Bài 21)",
    icon: "💭",
    sentences: [
      {
        category: "MINNA BÀI 21: BÀY TỎ Ý KIẾN & TRÍCH DẪN",
        ja: "あしたは あめが ふると おもいます。",
        romaji: "Ashita wa ame ga furu to omoimasu.",
        readVi: "A-si-ta oa a-mê ga phư-rư tô ô-môi-ma-xư",
        vi: "Tôi nghĩ rằng ngày mai trời sẽ mưa.",
        tip: "[Thể thông thường] + と 思います (to omoimasu): cấu trúc bày tỏ suy nghĩ, dự đoán."
      },
      {
        category: "MINNA BÀI 21: BÀY TỎ Ý KIẾN & TRÍCH DẪN",
        ja: "日本は ぶっかが たかいと おもいます。",
        romaji: "Nihon wa bukka ga takai to omoimasu.",
        readVi: "Ni-hôn oa bưk-ka ga ta-kai tô ô-môi-ma-xư",
        vi: "Tôi nghĩ rằng vật giá ở Nhật Bản rất đắt đỏ.",
        tip: "ぶっか (Bukka): vật giá, giá cả sinh hoạt."
      },
      {
        category: "MINNA BÀI 21: BÀY TỎ Ý KIẾN & TRÍCH DẪN",
        ja: "ミラーさんは らいしゅう りょこうすると 言いました（いいました）。",
        romaji: "Miraa-san wa raishuu ryokousuru to iimashita.",
        readVi: "Mi-laa xan oa rai-syuu ryô-kô-xư-rư tô ii-ma-si-ta",
        vi: "Anh Miller nói rằng tuần sau anh ấy sẽ đi du lịch.",
        tip: "[Thể thông thường] + と 言いました (to iimashita): trích dẫn gián tiếp lời nói."
      },
      {
        category: "MINNA BÀI 21: BÀY TỎ Ý KIẾN & TRÍCH DẪN",
        ja: "日本の サッカーは つよいでしょう？",
        romaji: "Nihon no sakkaa wa tsuyoi deshou?",
        readVi: "Ni-hôn nô xak-kaa oa tsư-yôi đê-syôô?",
        vi: "Bóng đá Nhật Bản rất mạnh đúng không nào?",
        tip: "～でしょう？ (Lên giọng): tìm kiếm sự đồng tình từ người nghe ('đúng không?')."
      },
      {
        category: "MINNA BÀI 21: BÀY TỎ Ý KIẾN & TRÍCH DẪN",
        ja: "わたしも そう おもいます。",
        romaji: "Watashi mo sou omoimasu.",
        readVi: "Oa-ta-si mô xô-u ô-môi-ma-xư",
        vi: "Tôi cũng nghĩ như vậy đấy.",
        tip: "Câu biểu thị sự đồng tình và tán thành hoàn toàn với ý kiến đối phương."
      }
    ]
  },
  unit_22_noun_modifiers: {
    title: "Bài 22: Mệnh đề bổ ngữ định từ (Minna Bài 22)",
    icon: "👔",
    sentences: [
      {
        category: "MINNA BÀI 22: MỆNH ĐỀ BỔ NGỮ ĐỊNH TỪ",
        ja: "これは ははが つくった ケーキです。",
        romaji: "Kore wa haha ga tsukutta keeki desu.",
        readVi: "Kô-rê oa ha-ha ga tsư-kưt-ta kêê-ki đê-xư",
        vi: "Đây là chiếc bánh kem do chính mẹ tôi tự tay làm.",
        tip: "Mệnh đề bổ nghĩa cho danh từ: [V-thể ngắn] + Danh từ. Chủ ngữ mệnh đề đi với が."
      },
      {
        category: "MINNA BÀI 22: MỆNH ĐỀ BỔ NGỮ ĐỊNH TỪ",
        ja: "あそこで しんぶんを よんで いる ひとは だれですか。",
        romaji: "Asoko de shinbun o yonde iru hito wa dare desu ka?",
        readVi: "A-xô-kô đê sin-bun ô yôn-đê i-rư hi-tô oa đa-rê đê-xư ka?",
        vi: "Người đang ngồi đọc báo ở đằng kia là ai thế ạ?",
        tip: "Mệnh đề 'đang đọc báo' (yonde iru) bổ nghĩa trực tiếp cho danh từ 'người' (hito)."
      },
      {
        category: "MINNA BÀI 22: MỆNH ĐỀ BỔ NGỮ ĐỊNH TỪ",
        ja: "わたしが うまれた ところは しずかな まちです。",
        romaji: "Watashi ga umareta tokoro wa shizukana machi desu.",
        readVi: "Oa-ta-si ga ư-ma-rê-ta tô-kô-rô oa si-dzư-ka-na ma-chi đê-xư",
        vi: "Nơi mà tôi sinh ra là một thị trấn rất yên bình.",
        tip: "うまれた ところ (Umareta tokoro): nơi chốn sinh ra / quê hương."
      },
      {
        category: "MINNA BÀI 22: MỆNH ĐỀ BỔ NGỮ ĐỊNH TỪ",
        ja: "わたしは あさごはんを たべる じかんが ありません。",
        romaji: "Watashi wa asagohan o taberu jikan ga arimasen.",
        readVi: "Oa-ta-si oa a-xa-gô-han ô ta-bê-rư di-kan ga a-ri-ma-xen",
        vi: "Tôi không có thời gian để ăn bữa sáng.",
        tip: "たべる じかん (Taberu jikan): thời gian để làm hành động ăn."
      },
      {
        category: "MINNA BÀI 22: MỆNH ĐỀ BỔ NGỮ ĐỊNH TỪ",
        ja: "あの めがねを かけて いる ひとは ミラーさんです。",
        romaji: "Ano megane o kakete iru hito wa Miraa-san desu.",
        readVi: "A-nô mê-ga-nê ô ka-kê-tê i-rư hi-tô oa Mi-laa xan đê-xư",
        vi: "Người đang đeo cặp kính mắt kia chính là anh Miller.",
        tip: "Đeo kính dùng động từ かけます (kakemasu -> kakete iru hito)."
      }
    ]
  },
  unit_23_conditions_toki: {
    title: "Bài 23: Khi nào (Toki) & Cứ hễ thì (To) (Minna Bài 23)",
    icon: "🚦",
    sentences: [
      {
        category: "MINNA BÀI 23: KHI NÀO & CỨ HỄ THÌ",
        ja: "としょかんで 本を かりる とき、カードが いります。",
        romaji: "Toshokan de hon o kariru toki, kaado ga irimasu.",
        readVi: "Tô-syô-kan đê hôn ô ka-ri-rư tô-ki, kaa-đô ga i-ri-ma-xư",
        vi: "Khi mượn sách ở thư viện thì cần phải có thẻ.",
        tip: "V-る + とき (toki): diễn tả thời điểm khi thực hiện hành động."
      },
      {
        category: "MINNA BÀI 23: KHI NÀO & CỨ HỄ THÌ",
        ja: "みちが わからない とき、こうばんで ききます。",
        romaji: "Michi ga wakaranai toki, kouban de kikimasu.",
        readVi: "Mi-chi ga oa-ka-ra-nai tô-ki, kôô-ban đê ki-ki-ma-xư",
        vi: "Khi không biết đường đi, tôi hỏi các chú cảnh sát ở bốt gác.",
        tip: "こうばん (Kouban): đồn cảnh sát khu phố rất đặc trưng tại Nhật."
      },
      {
        category: "MINNA BÀI 23: KHI NÀO & CỨ HỄ THÌ",
        ja: "この ボタンを おすと、おつりが でます。",
        romaji: "Kono botan o osu to, otsuri ga demasu.",
        readVi: "Kô-nô bô-tan ô ô-xư tô, ô-tsư-ri ga đê-ma-xư",
        vi: "Cứ hễ bấm chiếc nút này thì tiền thừa sẽ tự động chạy ra.",
        tip: "V-る + と: cứ hễ làm thao tác này thì phản ứng máy móc/tự nhiên ắt diễn ra."
      },
      {
        category: "MINNA BÀI 23: KHI NÀO & CỨ HỄ THÌ",
        ja: "あの こうさてんを みぎへ まがると、ぎんこうが あります。",
        romaji: "Ano kousaten o migi e magaru to, ginkou ga arimasu.",
        readVi: "A-nô kôô-xa-tên ô mi-ghi ê ma-ga-rư tô, ghin-kôô ga a-ri-ma-xư",
        vi: "Hễ rẽ phải ở ngã tư đằng kia thì sẽ nhìn thấy ngân hàng ngay.",
        tip: "Mẫu câu chỉ đường kinh điển chuẩn xác trong cuộc sống hàng ngày."
      },
      {
        category: "MINNA BÀI 23: KHI NÀO & CỨ HỄ THÌ",
        ja: "じかんが ある とき、こうえんを さんぽします。",
        romaji: "Jikan ga aru toki, kouen o sanposhimasu.",
        readVi: "Di-kan ga a-rư tô-ki, kôô-en ô xan-pô si-ma-xư",
        vi: "Những khi có thời gian rảnh rỗi, tôi thường đi dạo ở công viên.",
        tip: "あるとき (Aru toki): những khi có..."
      }
    ]
  },
  unit_24_giving_receiving: {
    title: "Bài 24: Cho - Nhận hành động giúp đỡ (Minna Bài 24)",
    icon: "🤝",
    sentences: [
      {
        category: "MINNA BÀI 24: CHO - NHẬN HÀNH ĐỘNG",
        ja: "さとうさんは わたしに はなを くれました。",
        romaji: "Satou-san wa watashi ni hana o kuremashita.",
        readVi: "Xa-tôô xan oa oa-ta-si ni ha-na ô kư-rê-ma-si-ta",
        vi: "Chị Sato đã tặng hoa cho tôi.",
        tip: "くれます (Kuremasu): ai đó tặng quà cho tôi hoặc người nhà tôi."
      },
      {
        category: "MINNA BÀI 24: CHO - NHẬN HÀNH ĐỘNG",
        ja: "わたしは きむらさんに かさを かして あげました。",
        romaji: "Watashi wa Kimura-san ni kasa o kashite agemashita.",
        readVi: "Oa-ta-si oa Ki-mư-ra xan ni ka-xa ô ka-si-tê a-ghê-ma-si-ta",
        vi: "Tôi đã cho chị Kimura mượn chiếc ô che mưa.",
        tip: "V-て あげます: mình chủ động làm giúp việc gì đó cho người khác."
      },
      {
        category: "MINNA BÀI 24: CHO - NHẬN HÀNH ĐỘNG",
        ja: "わたしは せんせいに 日本語を おしえて もらいました。",
        romaji: "Watashi wa sensei ni Nihongo o oshiete moraimashita.",
        readVi: "Oa-ta-si oa xên-xê-i ni Ni-hôn-gô ô ô-si-ê-tê mô-rai-ma-si-ta",
        vi: "Tôi đã được thầy giáo tận tình dạy tiếng Nhật cho.",
        tip: "V-て もらいます: nhận được sự giúp đỡ từ ai đó (người cho đi trợ từ に)."
      },
      {
        category: "MINNA BÀI 24: CHO - NHẬN HÀNH ĐỘNG",
        ja: "やまださんが えきまで くるまで おくって くれました。",
        romaji: "Yamada-san ga eki made kuruma de okutte kuremashita.",
        readVi: "Ya-ma-đa xan ga ê-ki ma-đê kư-rư-ma đê ô-kưt-tê kư-rê-ma-si-ta",
        vi: "Anh Yamada đã có lòng tốt chở tôi bằng xe ô tô ra tận nhà ga.",
        tip: "V-て くれます: ai đó giúp đỡ cho mình, biểu thị sự cảm kích sâu sắc."
      },
      {
        category: "MINNA BÀI 24: CHO - NHẬN HÀNH ĐỘNG",
        ja: "てつだって くれて、どうも ありがとう。",
        romaji: "Tetsudatte kurete, doumo arigatou.",
        readVi: "Tê-tsư-đat-tê kư-rê-tê, đô-u-mô a-ri-ga-tôô",
        vi: "Cảm ơn bạn rất nhiều vì đã nhiệt tình giúp đỡ mình nhé!",
        tip: "V-てくれてありがとう: lời cảm ơn xuất phát từ trái tim vì sự giúp đỡ quý báu."
      }
    ]
  },
  unit_25_hypothetical_tara: {
    title: "Bài 25: Điều kiện Giả định & Nhượng bộ (Minna Bài 25)",
    icon: "🌟",
    sentences: [
      {
        category: "MINNA BÀI 25: ĐIỀU KIỆN GIẢ ĐỊNH & NHƯỢNG BỘ",
        ja: "あめが ふったら、出かけません（でかけません）。",
        romaji: "Ame ga futtara, dekakemasen.",
        readVi: "A-mê ga phưt-ta-ra, đê-ka-kê-ma-xen",
        vi: "Nếu trời mưa thì tôi sẽ không ra ngoài.",
        tip: "V-たら (Tara): nếu... thì... Cấu trúc câu điều kiện phổ biến nhất."
      },
      {
        category: "MINNA BÀI 25: ĐIỀU KIỆN GIẢ ĐỊNH & NHƯỢNG BỘ",
        ja: "やすかったら、パソコンを かいたいです。",
        romaji: "Yasukattara, pasokon o kaitai desu.",
        readVi: "Ya-xư-kat-ta-ra, pa-xô-kôn ô kai-tai đê-xư",
        vi: "Nếu mà giá rẻ thì tôi muốn mua một chiếc máy tính cá nhân.",
        tip: "Điều kiện tính từ đuôi -i: bỏ い thêm かったら (yasui -> yasukattara)."
      },
      {
        category: "MINNA BÀI 25: ĐIỀU KIỆN GIẢ ĐỊNH & NHƯỢNG BỘ",
        ja: "あめが ふっても、サッカーを します。",
        romaji: "Ame ga futtemo, sakkaa o shimasu.",
        readVi: "A-mê ga phưt-tê-mô, xak-kaa ô si-ma-xư",
        vi: "Cho dù trời có đổ mưa thì chúng tôi vẫn sẽ đá bóng.",
        tip: "V-ても (Temo): cho dù... thì vẫn cứ làm (nhượng bộ tương phản)."
      },
      {
        category: "MINNA BÀI 25: ĐIỀU KIỆN GIẢ ĐỊNH & NHƯỢNG BỘ",
        ja: "いくら かんがえても、わかりません。",
        romaji: "Ikura kangaetemo, wakarimasen.",
        readVi: "I-kư-ra kan-ga-ê-tê-mô, oa-ka-ri-ma-xen",
        vi: "Cho dù có suy nghĩ nung nấu bao nhiêu đi nữa thì tôi vẫn không hiểu được.",
        tip: "いくら + V-ても: cho dù đến mấy chăng nữa thì..."
      },
      {
        category: "MINNA BÀI 25: ĐIỀU KIỆN GIẢ ĐỊNH & NHƯỢNG BỘ",
        ja: "もし １おくえん あったら、せかいりょこうを したいです。",
        romaji: "Moshi ichiokuen attara, sekai ryokou o shitai desu.",
        readVi: "Mô-si i-chi-ô-kư-en at-ta-ra, xê-kai ryô-kô-u ô si-tai đê-xư",
        vi: "Nếu giả sử có 100 triệu Yên (khoảng 17 tỷ VNĐ), tôi muốn đi du lịch vòng quanh thế giới.",
        tip: "もし (Moshi): nếu giả sử (nhấn mạnh tình huống giả định tươi đẹp)."
      },
      {
        category: "MINNA BÀI 25: ĐIỀU KIỆN GIẢ ĐỊNH & NHƯỢNG BỘ",
        ja: "日本へ 行ったら、たくさん ともだちを つくりたいです。",
        romaji: "Nihon e ittara, takusan tomodachi o tsukuritai desu.",
        readVi: "Ni-hôn ê it-ta-ra, ta-kư-xan tô-mô-đa-chi ô tsư-kư-ri-tai đê-xư",
        vi: "Khi sang đến Nhật Bản, tôi muốn kết thật nhiều bạn bè mới.",
        tip: "V-たら còn dùng để chỉ thời điểm: một khi việc đó hoàn tất trong tương lai."
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
  },

  vocab_11_quantities: {
    title: "Chủ đề 11: Số đếm, Lượng từ & Thời gian (Minna Bài 11)",
    icon: "🔢",
    words: [
      { word: "ひとつ", romaji: "Hitotsu", readVi: "Hi-tô-tsư", vi: "1 cái (Đếm đồ vật)", tip: "Từ thuần Nhật đếm đồ vật" },
      { word: "ふたつ", romaji: "Futatsu", readVi: "Phư-ta-tsư", vi: "2 cái", tip: "Từ thuần Nhật" },
      { word: "みっつ", romaji: "Mittsu", readVi: "Mit-tsư", vi: "3 cái", tip: "Có âm ngắt っ: khựng hơi lại" },
      { word: "よっつ", romaji: "Yottsu", readVi: "Yôt-tsư", vi: "4 cái", tip: "Đếm 4 đồ vật" },
      { word: "ひとり", romaji: "Hitori", readVi: "Hi-tô-ri", vi: "1 người / Một mình", tip: "Đếm một người đặc biệt" },
      { word: "ふたり", romaji: "Futari", readVi: "Phư-ta-ri", vi: "2 người / Cặp đôi", tip: "Đếm hai người" },
      { word: "～にん", romaji: "~nin", readVi: "~nin", vi: "~người (Hậu tố đếm)", tip: "Đếm từ 3 người trở lên: 3-nin, 4-nin..." },
      { word: "～だい", romaji: "~dai", readVi: "~đai", vi: "~chiếc, cái (Máy móc, xe)", tip: "Đếm xe máy, ô tô, máy vi tính" },
      { word: "～まい", romaji: "~mai", readVi: "~mai", vi: "~tờ, tấm (Vật mỏng)", tip: "Đếm giấy, vé tàu, áo sơ mi" },
      { word: "どのくらい", romaji: "Donokurai", readVi: "Đô-nô-kư-rai", vi: "Bao lâu / Bao nhiêu", tip: "Hỏi khoảng thời gian, tiền bạc" }
    ]
  },
  vocab_12_comparison: {
    title: "Chủ đề 12: So sánh, Thời tiết & Mùa màng (Minna Bài 12)",
    icon: "⚖️",
    words: [
      { word: "かんたん", romaji: "Kantan", readVi: "Kan-tan", vi: "Đơn giản, dễ dàng", tip: "Tính từ đuôi -na" },
      { word: "ちかい", romaji: "Chikai", readVi: "Chi-kai", vi: "Gần (Khoảng cách)", tip: "Gần nhà, gần ga" },
      { word: "とおい", romaji: "Tooi", readVi: "Tôô-i", vi: "Xa xôi", tip: "Trái nghĩa với chikai" },
      { word: "はやい", romaji: "Hayai", readVi: "Ha-yai", vi: "Nhanh / Sớm", tip: "Tốc độ nhanh hoặc dậy sớm" },
      { word: "おそい", romaji: "Osoi", readVi: "Ô-xôi", vi: "Chậm chạp / Muộn", tip: "Trái nghĩa với hayai" },
      { word: "あたたかい", romaji: "Atatakai", readVi: "A-ta-ta-kai", vi: "Ấm áp", tip: "Thời tiết ấm áp mùa xuân" },
      { word: "すずしい", romaji: "Suzushii", readVi: "Xư-dzư-sii", vi: "Mát mẻ", tip: "Thời tiết dễ chịu mùa thu" },
      { word: "はる", romaji: "Haru", readVi: "Ha-rư", vi: "Mùa xuân", tip: "Mùa hoa anh đào nở rộ" },
      { word: "なつ", romaji: "Natsu", readVi: "Na-tsư", vi: "Mùa hè", tip: "Mùa lễ hội pháo hoa" },
      { word: "あき", romaji: "Aki", readVi: "A-ki", vi: "Mùa thu", tip: "Mùa lá đỏ momiji thơ mộng" }
    ]
  },
  vocab_13_wishes: {
    title: "Chủ đề 13: Mong muốn, Nghỉ ngơi & Giải trí (Minna Bài 13)",
    icon: "🎯",
    words: [
      { word: "ほしい", romaji: "Hoshii", readVi: "Hô-sii", vi: "Muốn có (Đồ vật)", tip: "Muốn sở hữu một thứ gì đó" },
      { word: "さびしい", romaji: "Sabishii", readVi: "Xa-bi-sii", vi: "Buồn bã, cô đơn", tip: "Cảm giác khi ở một mình" },
      { word: "ひろい", romaji: "Hiroi", readVi: "Hi-rôi", vi: "Rộng rãi", tip: "Phòng ốc hoặc đường sá rộng" },
      { word: "せまい", romaji: "Semai", readVi: "Xê-mai", vi: "Chật hẹp", tip: "Trái nghĩa với hiroi" },
      { word: "プール", romaji: "Puuru", readVi: "Puu-rư", vi: "Hồ bơi", tip: "Từ Katakana: pool" },
      { word: "かわ", romaji: "Kawa", readVi: "Ka-oa", vi: "Con sông", tip: "Dòng sông tự nhiên" },
      { word: "つり", romaji: "Tsuri", readVi: "Tsư-ri", vi: "Câu cá", tip: "Hoạt động dã ngoại cuối tuần" },
      { word: "スキー", romaji: "Sukii", readVi: "Xư-kii", vi: "Trượt tuyết", tip: "Môn thể thao mùa đông" },
      { word: "しゅうまつ", romaji: "Shuumatsu", readVi: "Syuu-mat-sư", vi: "Cuối tuần", tip: "Thứ bảy và chủ nhật" },
      { word: "ごちゅうもん", romaji: "Gochuumon", readVi: "Gô-chuu-môn", vi: "Gọi món / Đặt hàng", tip: "Kính ngữ nhân viên nhà hàng" }
    ]
  },
  vocab_14_actions: {
    title: "Chủ đề 14: Hành động đời sống & Thể Te (Minna Bài 14)",
    icon: "✋",
    words: [
      { word: "つけます", romaji: "Tsukemasu", readVi: "Tsư-kê-ma-xư", vi: "Bật (Đèn, máy lạnh)", tip: "Bật thiết bị điện" },
      { word: "けします", romaji: "Keshimasu", readVi: "Kê-si-ma-xư", vi: "Tắt (Thiết bị, điện)", tip: "Dập tắt hoặc tắt máy" },
      { word: "あけます", romaji: "Akemasu", readVi: "A-kê-ma-xư", vi: "Mở (Cửa sổ, nắp hộp)", tip: "Mở cửa phòng" },
      { word: "しめます", romaji: "Shimemasu", readVi: "Si-mê-ma-xư", vi: "Đóng (Cửa phòng)", tip: "Đóng cửa lại" },
      { word: "いそぎます", romaji: "Isogimasu", readVi: "I-xô-ghi-ma-xư", vi: "Vội vã, gấp gáp", tip: "Hành động nhanh chóng" },
      { word: "まちます", romaji: "Machimasu", readVi: "Ma-chi-ma-xư", vi: "Chờ đợi", tip: "Đợi người hoặc đợi tàu" },
      { word: "とめます", romaji: "Tomemasu", readVi: "Tô-mê-ma-xư", vi: "Dừng lại, đỗ xe", tip: "Đỗ xe ô tô" },
      { word: "まがります", romaji: "Magarimasu", readVi: "Ma-ga-ri-ma-xư", vi: "Rẽ, quẹo (Phải/trái)", tip: "Rẽ ở góc đường" },
      { word: "もちます", romaji: "Mochimasu", readVi: "Mô-chi-ma-xư", vi: "Cầm, mang, xách", tip: "Xách hành lý, cầm ô" },
      { word: "てつだいます", romaji: "Tetsudaimasu", readVi: "Tê-tsư-đai-ma-xư", vi: "Giúp đỡ", tip: "Phụ giúp việc nhà, việc cty" }
    ]
  },
  vocab_15_status: {
    title: "Chủ đề 15: Nghề nghiệp, Nơi ở & Quy tắc (Minna Bài 15)",
    icon: "📸",
    words: [
      { word: "おきます", romaji: "Okimasu", readVi: "Ô-ki-ma-xư", vi: "Đặt, để", tip: "Đặt đồ vật lên bàn" },
      { word: "つくります", romaji: "Tsukurimasu", readVi: "Tsư-kư-ri-ma-xư", vi: "Làm ra, chế tạo", tip: "Nấu ăn, làm bánh, chế tạo" },
      { word: "うります", romaji: "Urimasu", readVi: "U-ri-ma-xư", vi: "Bán", tip: "Bán sản phẩm, hàng hóa" },
      { word: "しります", romaji: "Shirimasu", readVi: "Si-ri-ma-xư", vi: "Biết", tip: "Biết thông tin hoặc quen biết" },
      { word: "すみます", romaji: "Sumimasu", readVi: "Xư-mi-ma-xư", vi: "Sinh sống, định cư", tip: "Cư trú tại một nơi lâu dài" },
      { word: "けんきゅうします", romaji: "Kenkyuushimasu", readVi: "Kên-kyuu-si-ma-xư", vi: "Nghiên cứu", tip: "Nghiên cứu khoa học" },
      { word: "しりょう", romaji: "Shiryou", readVi: "Si-ryôô", vi: "Tài liệu", tip: "Tài liệu cuộc họp" },
      { word: "カタログ", romaji: "Katarogu", readVi: "Ka-ta-rô-gư", vi: "Cuốn catalogue", tip: "Sách giới thiệu sản phẩm" },
      { word: "ふく", romaji: "Fuku", readVi: "Phư-kư", vi: "Quần áo", tip: "Trang phục nói chung" },
      { word: "はいしゃ", romaji: "Haisha", readVi: "Hai-sa", vi: "Nha sĩ", tip: "Bác sĩ chữa răng" }
    ]
  },
  vocab_16_sequences: {
    title: "Chủ đề 16: Cơ thể người & Chuỗi hoạt động (Minna Bài 16)",
    icon: "🏃",
    words: [
      { word: "のります", romaji: "Norimasu", readVi: "Nô-ri-ma-xư", vi: "Lên xe/tàu (Đi với に)", tip: "Bước lên phương tiện di chuyển" },
      { word: "おります", romaji: "Orimasu", readVi: "Ô-ri-ma-xư", vi: "Xuống xe/tàu (Đi với を)", tip: "Bước xuống phương tiện" },
      { word: "のりかえます", romaji: "Norikaemasu", readVi: "Nô-ri-ka-ê-ma-xư", vi: "Đổi tuyến, đổi tàu", tip: "Chuyển sang tuyến tàu khác" },
      { word: "あびます", romaji: "Abimasu", readVi: "A-bi-ma-xư", vi: "Tắm vòi sen", tip: "シャワーをあびます" },
      { word: "だします", romaji: "Dashimasu", readVi: "Đa-si-ma-xư", vi: "Lấy ra, nộp bài", tip: "Nộp báo cáo, rút đồ" },
      { word: "おろします", romaji: "Oroshimasu", readVi: "Ô-rô-si-ma-xư", vi: "Rút tiền (Ngân hàng/ATM)", tip: "Rút tiền mặt" },
      { word: "わかい", romaji: "Wakai", readVi: "Oa-kai", vi: "Trẻ trung", tip: "Chỉ tuổi đời thanh xuân" },
      { word: "ながい", romaji: "Nagai", readVi: "Na-gai", vi: "Dài", tip: "Độ dài mái tóc, thời gian" },
      { word: "みじかい", romaji: "Mijikai", readVi: "Mi-di-kai", vi: "Ngắn", tip: "Trái nghĩa với nagai" },
      { word: "あたま", romaji: "Atama", readVi: "A-ta-ma", vi: "Cái đầu", tip: "Bộ phận đầu óc thông minh" }
    ]
  },
  vocab_17_health_rules: {
    title: "Chủ đề 17: Sức khỏe, Bệnh tật & Nghĩa vụ (Minna Bài 17)",
    icon: "⚠️",
    words: [
      { word: "おぼえます", romaji: "Oboemasu", readVi: "Ô-bô-ê-ma-xư", vi: "Ghi nhớ, học thuộc", tip: "Học thuộc lòng từ vựng" },
      { word: "わすれます", romaji: "Wasuremasu", readVi: "Oa-xư-rê-ma-xư", vi: "Quên mất", tip: "Trái nghĩa với oboemasu" },
      { word: "なくします", romaji: "Nakushimasu", readVi: "Na-kư-si-ma-xư", vi: "Làm mất, đánh rơi", tip: "Làm mất ví, chìa khóa" },
      { word: "はらいます", romaji: "Haraimasu", readVi: "Ha-rai-ma-xư", vi: "Thanh toán, trả tiền", tip: "Thanh toán hóa đơn" },
      { word: "かえします", romaji: "Kaeshimasu", readVi: "Ka-ê-si-ma-xư", vi: "Trả lại đồ", tip: "Trả sách cho thư viện" },
      { word: "でかけます", romaji: "Dekakemasu", readVi: "Đê-ka-kê-ma-xư", vi: "Ra ngoài", tip: "Đi ra khỏi nhà" },
      { word: "ぬぎます", romaji: "Nugimasu", readVi: "Nư-ghi-ma-xư", vi: "Cởi ra (Giày, quần áo)", tip: "Cởi giày trước khi vào nhà" },
      { word: "もっていきます", romaji: "Motte ikimasu", readVi: "Môt-tê i-ki-ma-xư", vi: "Mang đi theo", tip: "Mang theo đồ đạc" },
      { word: "しんぱいします", romaji: "Shinpaishimasu", readVi: "Xin-pai-si-ma-xư", vi: "Lo lắng, bồn chồn", tip: "Tâm trạng lo âu" },
      { word: "ざんぎょうします", romaji: "Zangyoushimasu", readVi: "Zan-gyôô-si-ma-xư", vi: "Làm thêm giờ (OT)", tip: "Tăng ca tại công ty" }
    ]
  },
  vocab_18_hobbies: {
    title: "Chủ đề 18: Sở thích, Kỹ năng & Sinh hoạt (Minna Bài 18)",
    icon: "📖",
    words: [
      { word: "できます", romaji: "Dekimasu", readVi: "Đê-ki-ma-xư", vi: "Có thể làm được", tip: "Chỉ năng lực bản thân" },
      { word: "あらいます", romaji: "Araimasu", readVi: "A-rai-ma-xư", vi: "Rửa sạch", tip: "Rửa tay, rửa chén bát" },
      { word: "ひきます", romaji: "Hikimasu", readVi: "Hi-ki-ma-xư", vi: "Chơi nhạc cụ đàn", tip: "Đàn piano, ghita" },
      { word: "うたいます", romaji: "Utaimasu", readVi: "U-tai-ma-xư", vi: "Hát bài hát", tip: "Hát bài hát hay" },
      { word: "あつめます", romaji: "Atsumemasu", readVi: "A-tsư-mê-ma-xư", vi: "Sưu tầm, gom lại", tip: "Sưu tầm tem, tiền xu" },
      { word: "すてます", romaji: "Sutemasu", readVi: "Xư-tê-ma-xư", vi: "Vứt bỏ rác", tip: "Vứt rác đúng nơi quy định" },
      { word: "うんてんします", romaji: "Untenshimasu", readVi: "Un-tên-si-ma-xư", vi: "Lái xe ô tô", tip: "Điều khiển xe hơi" },
      { word: "よやくします", romaji: "Yoyakushimasu", readVi: "Yô-ya-kư-si-ma-xư", vi: "Đặt chỗ trước", tip: "Đặt bàn ăn, vé máy bay" },
      { word: "げんきん", romaji: "Genkin", readVi: "Ghên-kin", vi: "Tiền mặt", tip: "Tiền giấy hoặc tiền xu" },
      { word: "にっき", romaji: "Nikki", readVi: "Nik-ki", vi: "Nhật ký", tip: "Sổ ghi nhật ký mỗi ngày" }
    ]
  },
  vocab_19_experiences: {
    title: "Chủ đề 19: Trải nghiệm, Thể thao & Du lịch (Minna Bài 19)",
    icon: "🗻",
    words: [
      { word: "のぼります", romaji: "Noborimasu", readVi: "Nô-bô-ri-ma-xư", vi: "Leo lên (Leo núi)", tip: "Leo núi Phú Sĩ" },
      { word: "とまります", romaji: "Tomarimasu", readVi: "Tô-ma-ri-ma-xư", vi: "Trọ lại khách sạn", tip: "Nghỉ đêm tại ryokan" },
      { word: "そうじします", romaji: "Soujishimasu", readVi: "Xôô-di-si-ma-xư", vi: "Dọn dẹp vệ sinh", tip: "Quét dọn phòng ốc" },
      { word: "せんたくします", romaji: "Sentakushimasu", readVi: "Xên-ta-kư-si-ma-xư", vi: "Giặt giũ quần áo", tip: "Giặt đồ bằng máy giặt" },
      { word: "れんしゅうします", romaji: "Renshuushimasu", readVi: "Rên-syuu-si-ma-xư", vi: "Luyện tập chăm chỉ", tip: "Luyện phát âm tiếng Nhật" },
      { word: "なります", romaji: "Narimasu", readVi: "Na-ri-ma-xư", vi: "Trở nên, trở thành", tip: "Biến đổi trạng thái" },
      { word: "ねむい", romaji: "Nemui", readVi: "Nê-mưi", vi: "Buồn ngủ", tip: "Cảm giác muốn chợp mắt" },
      { word: "つよい", romaji: "Tsuyoi", readVi: "Tsư-yôi", vi: "Mạnh mẽ, hùng mạnh", tip: "Sức mạnh cơ thể hoặc đội bóng" },
      { word: "よわい", romaji: "Yowai", readVi: "Yô-oa-i", vi: "Yếu ớt", tip: "Trái nghĩa với tsuyoi" },
      { word: "ちょうし", romaji: "Choushi", readVi: "Chôô-si", vi: "Phong độ, thể trạng", tip: "Tình hình sức khỏe cơ thể" }
    ]
  },
  vocab_20_daily_chat: {
    title: "Chủ đề 20: Từ vựng thân mật & Giao tiếp bạn bè (Minna Bài 20)",
    icon: "💬",
    words: [
      { word: "いります", romaji: "Irimasu", readVi: "I-ri-ma-xư", vi: "Cần thiết, cần có", tip: "Cần có visa, cần tiền" },
      { word: "しらべます", romaji: "Shirabemasu", readVi: "Si-ra-bê-ma-xư", vi: "Tra cứu, tìm hiểu", tip: "Tra từ điển, tra google" },
      { word: "なおします", romaji: "Naoshimasu", readVi: "Na-ô-si-ma-xư", vi: "Sửa chữa (Đồ đạc)", tip: "Sửa đồ hỏng, chữa bài" },
      { word: "ぼく", romaji: "Boku", readVi: "Bô-kư", vi: "Tớ, mình (Nam xưng)", tip: "Đại từ ngôi 1 thân mật" },
      { word: "きみ", romaji: "Kimi", readVi: "Ki-mi", vi: "Cậu, bạn", tip: "Đại từ ngôi 2 thân mật" },
      { word: "うん", romaji: "Un", readVi: "Un", vi: "Ừ, ừm (Đồng ý)", tip: "Cách nói thân mật của 'Hai'" },
      { word: "ううん", romaji: "Uun", readVi: "Uun", vi: "Không, hổng phải", tip: "Cách nói thân mật của 'Iie'" },
      { word: "サラリーマン", romaji: "Sarariiman", readVi: "Xa-ra-rii-man", vi: "Dân công sở", tip: "Người làm công ăn lương" },
      { word: "ことば", romaji: "Kotoba", readVi: "Kô-tô-ba", vi: "Từ ngữ, tiếng nói", tip: "Ngôn ngữ giao tiếp" },
      { word: "ビザ", romaji: "Biza", readVi: "Bi-za", vi: "Thị thực, visa", tip: "Thị thực nhập cảnh" }
    ]
  },
  vocab_21_society: {
    title: "Chủ đề 21: Xã hội, Trận đấu & Ý kiến cá nhân (Minna Bài 21)",
    icon: "💭",
    words: [
      { word: "おもいます", romaji: "Omoimasu", readVi: "Ô-môi-ma-xư", vi: "Nghĩ rằng, cho là", tip: "Bày tỏ quan điểm cá nhân" },
      { word: "いいます", romaji: "Iimasu", readVi: "Ii-ma-xư", vi: "Nói rằng", tip: "Truyền đạt lại lời nói" },
      { word: "かちます", romaji: "Kachimasu", readVi: "Ka-chi-ma-xư", vi: "Chiến thắng", tip: "Thắng trong trận thi đấu" },
      { word: "まけます", romaji: "Makemasu", readVi: "Ma-kê-ma-xư", vi: "Thua cuộc, thất bại", tip: "Trái nghĩa với kachimasu" },
      { word: "やくにたちます", romaji: "Yaku ni tachimasu", readVi: "Ya-kư ni ta-chi-ma-xư", vi: "Hữu ích, có ích", tip: "Rất có giá trị thực tế" },
      { word: "うごきます", romaji: "Ugokimasu", readVi: "U-gô-ki-ma-xư", vi: "Chuyển động, chạy", tip: "Máy móc đang hoạt động" },
      { word: "やめます", romaji: "Yamemasu", readVi: "Ya-mê-ma-xư", vi: "Bỏ việc, thôi làm", tip: "Nghỉ việc ở công ty" },
      { word: "きをつけます", romaji: "Ki o tsukemasu", readVi: "Ki ô tsư-kê-ma-xư", vi: "Cẩn thận, chú ý", tip: "Đi đường cẩn thận nhé" },
      { word: "ぶっか", romaji: "Bukka", readVi: "Bưk-ka", vi: "Vật giá thị trường", tip: "Chi phí sinh hoạt tiêu dùng" },
      { word: "しあい", romaji: "Shiai", readVi: "Si-ai", vi: "Trận thi đấu", tip: "Trận đấu thể thao" }
    ]
  },
  vocab_22_fashion_life: {
    title: "Chủ đề 22: Trang phục, Đồ mặc & Quan hệ (Minna Bài 22)",
    icon: "👔",
    words: [
      { word: "きます", romaji: "Kimasu", readVi: "Ki-ma-xư", vi: "Mặc (Áo sơ mi, áo khoác)", tip: "Mặc phần thân trên" },
      { word: "はきます", romaji: "Hakimasu", readVi: "Ha-ki-ma-xư", vi: "Đi, xỏ (Giày, quần, tất)", tip: "Mặc phần thân dưới" },
      { word: "かぶります", romaji: "Kaburimasu", readVi: "Ka-bư-ri-ma-xư", vi: "Đội (Mũ, nón)", tip: "Đội lên đầu" },
      { word: "かけます", romaji: "Kakemasu", readVi: "Ka-kê-ma-xư", vi: "Đeo (Kính mắt)", tip: "めがねをかけます" },
      { word: "うまれます", romaji: "Umaremasu", readVi: "U-ma-rê-ma-xư", vi: "Sinh ra, chào đời", tip: "Ngày sinh nhật" },
      { word: "ぼうし", romaji: "Boushi", readVi: "Bôô-si", vi: "Cái mũ, nón", tip: "Mũ đội che nắng mưa" },
      { word: "めがね", romaji: "Megane", readVi: "Mê-ga-nê", vi: "Kính mắt", tip: "Kính cận hoặc kính râm" },
      { word: "コート", romaji: "Kooto", readVi: "Kôô-tô", vi: "Áo khoác ấm mùa đông", tip: "Áo măng tô, áo khoác dày" },
      { word: "スーツ", romaji: "Suutsu", readVi: "Xuu-tsư", vi: "Bộ âu phục, comple vest", tip: "Đồ công sở chuẩn mực" },
      { word: "やくそく", romaji: "Yakusoku", readVi: "Ya-kư-xô-kư", vi: "Cuộc hẹn, lời hứa", tip: "Hẹn gặp gỡ đối tác, bạn bè" }
    ]
  },
  vocab_23_traffic_directions: {
    title: "Chủ đề 23: Chỉ đường, Giao thông & Máy móc (Minna Bài 23)",
    icon: "🚦",
    words: [
      { word: "ききます", romaji: "Kikimasu", readVi: "Ki-ki-ma-xư", vi: "Hỏi (Hỏi thăm đường)", tip: "Hỏi đường người đi đường" },
      { word: "まわします", romaji: "Mawashimasu", readVi: "Ma-oa-si-ma-xư", vi: "Vặn, xoay nút", tip: "Vặn núm điều khiển âm lượng" },
      { word: "ひきます", romaji: "Hikimasu", readVi: "Hi-ki-ma-xư", vi: "Kéo cánh cửa", tip: "Kéo cửa ra" },
      { word: "さわります", romaji: "Sawarimasu", readVi: "Xa-oa-ri-ma-xư", vi: "Sờ, chạm tay vào", tip: "Không chạm vào hiện vật" },
      { word: "あるきます", romaji: "Arukimasu", readVi: "A-rư-ki-ma-xư", vi: "Đi bộ trên phố", tip: "Đi bộ dạo mát" },
      { word: "わたります", romaji: "Watarimasu", readVi: "Oa-ta-ri-ma-xư", vi: "Băng qua (Đường, cầu)", tip: "Băng qua vạch kẻ đường" },
      { word: "こうさてん", romaji: "Kousaten", readVi: "Kôô-xa-tên", vi: "Ngã tư đường phố", tip: "Giao lộ có đèn giao thông" },
      { word: "かど", romaji: "Kado", readVi: "Ka-đô", vi: "Góc đường, góc phố", tip: "Rẽ tại góc phố" },
      { word: "はし", romaji: "Hashi", readVi: "Ha-si", vi: "Cây cầu", tip: "Cầu bắc qua sông" },
      { word: "みち", romaji: "Michi", readVi: "Mi-chi", vi: "Con đường, ngõ phố", tip: "Đường xá đi lại" }
    ]
  },
  vocab_24_favors: {
    title: "Chủ đề 24: Giúp đỡ, Tặng quà & Đời sống (Minna Bài 24)",
    icon: "🤝",
    words: [
      { word: "くれます", romaji: "Kuremasu", readVi: "Kư-rê-ma-xư", vi: "Tặng tôi, cho tôi", tip: "Người khác tặng cho mình" },
      { word: "つれていきます", romaji: "Tsurete ikimasu", readVi: "Tsư-rê-tê i-ki-ma-xư", vi: "Dẫn đi, dắt đi", tip: "Dẫn con đi công viên" },
      { word: "つれてきます", romaji: "Tsurete kimasu", readVi: "Tsư-rê-tê ki-ma-xư", vi: "Dẫn đến, mời đến", tip: "Dẫn bạn về nhà chơi" },
      { word: "おくります", romaji: "Okurimasu", readVi: "Ô-kư-ri-ma-xư", vi: "Chở đi, tiễn đưa", tip: "Chở bạn ra tận nhà ga" },
      { word: "しょうかいします", romaji: "Shoukaishimasu", readVi: "Syôô-kai-si-ma-xư", vi: "Giới thiệu", tip: "Giới thiệu bạn bè, công việc" },
      { word: "あんないします", romaji: "Annaishimasu", readVi: "An-nai-si-ma-xư", vi: "Hướng dẫn, dẫn đường", tip: "Dẫn khách tham quan" },
      { word: "せつめいします", romaji: "Setsumeishimasu", readVi: "Xêt-xư-mê-i-si-ma-xư", vi: "Giải thích rõ ràng", tip: "Giải thích cách sử dụng app" },
      { word: "おじいさん", romaji: "Ojiisan", readVi: "Ô-dii-xan", vi: "Ông cụ / Ông nội, ngoại", tip: "Người đàn ông lớn tuổi" },
      { word: "おばあさん", romaji: "Obaasan", readVi: "Ô-baa-xan", vi: "Bà cụ / Bà nội, ngoại", tip: "Người phụ nữ lớn tuổi" },
      { word: "じゅんび", romaji: "Junbi", readVi: "Dzun-bi", vi: "Sự chuẩn bị", tip: "Chuẩn bị hành lý, đồ đạc" }
    ]
  },
  vocab_25_future_conditions: {
    title: "Chủ đề 25: Tương lai, Cơ hội & Quyết tâm (Minna Bài 25)",
    icon: "🌟",
    words: [
      { word: "かんがえます", romaji: "Kangaemasu", readVi: "Kan-ga-ê-ma-xư", vi: "Suy nghĩ, cân nhắc", tip: "Suy ngẫm kỹ lưỡng" },
      { word: "つきます", romaji: "Tsukimasu", readVi: "Tsư-ki-ma-xư", vi: "Đến nơi, cập bến", tip: "Tới nhà ga, tới Tokyo" },
      { word: "たります", romaji: "Tarimasu", readVi: "Ta-ri-ma-xư", vi: "Đầy đủ", tip: "Đủ tiền bạc, đủ thời gian" },
      { word: "いなか", romaji: "Inaka", readVi: "I-na-ka", vi: "Miền quê, nông thôn", tip: "Vùng quê thanh bình êm ả" },
      { word: "チャンス", romaji: "Chansu", readVi: "Chan-xư", vi: "Cơ hội tốt", tip: "Từ Katakana: chance" },
      { word: "おく", romaji: "Oku", readVi: "Ô-kư", vi: "Trăm triệu (1 ức = 100tr)", tip: "Đơn vị tiền tài chính lớn" },
      { word: "もし", romaji: "Moshi", readVi: "Mô-si", vi: "Nếu giả sử...", tip: "Mở đầu câu điều kiện giả định" },
      { word: "いくら", romaji: "Ikura", readVi: "I-kư-ra", vi: "Cho dù đến mấy...", tip: "Đi kèm いくら～ても" },
      { word: "がんばります", romaji: "Ganbarimasu", readVi: "Gan-ba-ri-ma-xư", vi: "Cố gắng hết mình", tip: "Quyết tâm kiên trì phấn đấu" },
      { word: "おせわになりました", romaji: "Osewa ni narimashita", readVi: "Ô-xê-oa ni na-ri-ma-si-ta", vi: "Cảm ơn vì đã giúp đỡ tôi", tip: "Lời cảm ơn chia tay ý nghĩa" }
    ]
  }

};
