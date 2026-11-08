// ========================================================
// JAPANESE_DATA/GRAMMAR_DATA.JS - Dữ liệu câu hỏi ngữ pháp Tiếng Nhật
// Dùng cho Tab "Luyện tập ngữ pháp tổng hợp" (Trắc nghiệm & Điền từ)
// Nguồn gốc: datasss/jp/ngu_phap/
// ========================================================

const JA_GRAMMAR_DATA = {
  "bai_1": {
    "title": "Bài 1",
    "completed": true,
    "questions": [
      {
        "id": "b1_q1",
        "type": "fill",
        "tag": "Điền từ",
        "question": "2. 例：あの方（ は ）どなたですか。\n\n1) A：サントスさんはブラジル人です。マリアさん（____）ブラジル人ですか。\nB：はい、マリアさん（____）ブラジル人です。\nA：ミラーさん（____）ブラジル人ですか。\nB：いいえ、ミラーさん（____）ブラジル人じゃありません。\n\n2) グプタさんはＩＭＣ（____）社員です。",
        "answers": ["も", "も", "も", "は", "の"],
        "explanation": "• 例 (Ví dụ): Trợ từ「は」xác định chủ đề câu:「あの方 は どなたですか」(Vị kia là vị nào vậy?).\n• 1): Vị trí 1, 2, 3 dùng trợ từ「も」(cũng) khi nêu tính chất tương đồng lặp lại. Vị trí 4 dùng「は」để nêu chủ đề và tạo sự tương phản trong câu phủ định:「ミラーさん は ブラジル人じゃありません」.\n• 2): Trợ từ「の」dùng để nối danh từ tổ chức/công ty với danh từ chức vụ:「IMC の 社員」(nhân viên của công ty IMC)."
      },
      {
        "id": "b1_q2",
        "type": "fill",
        "tag": "Hoàn thành câu dựa vào câu có sẵn",
        "question": "4. 例：ミラーさんは会社員ですか。…はい、<u>会社員です。</u>\n\n1) カリナさんは学生ですか。…はい、＿＿＿＿＿＿＿＿＿＿。\n2) ワンさんも学生ですか。…いいえ、＿＿＿＿＿＿＿＿＿＿。\n3) あの方は＿＿＿＿＿＿＿＿＿＿…山田さんです。\n4) この傘は＿＿＿＿＿＿＿＿＿＿…ミラーさんのです。",
        "answers": [
          "学生です / がくせいです",
          "学生じゃありません / 学生ではありません / がくせいじゃありません / がくせいではありません",
          "どなたですか / だれですか",
          "だれのですか / だれの傘ですか / だれのかさですか"
        ],
        "explanation": "• 例 (Ví dụ): Mẫu trả lời khẳng định lịch sự với danh từ「はい、[Danh từ] です」(Vâng, là nhân viên công ty).\n• 1): Trả lời khẳng định:「はい、学生です」(Vâng, là học sinh/sinh viên).\n• 2): Trả lời phủ định lịch sự:「いいえ、学生じゃありません」(hoặc「学生ではありません」: Không, không phải là học sinh/sinh viên).\n• 3): Câu trả lời cung cấp tên người「山田さんです」, câu hỏi lịch sự về người dùng「どなたですか」(hoặc「だれですか」).\n• 4): Câu trả lời sở hữu đồ vật「ミラーさんのです」(Của anh Miller), câu hỏi về quyền sở hữu đồ vật dùng「だれのですか」(hoặc「だれの傘ですか」)."
      },
      {
        "id": "b1_q3",
        "type": "matching",
        "tag": "Chọn câu trả lời phù hợp từ các từ có sẵn",
        "question": "5. 例：これは本ですか。（ d ）\n\n1) あの人はだれですか。（____）\n2) これはノートですか、雑誌ですか。（____）\n3) それは何の雑誌ですか。（____）\n4) 山田さんはおいくつですか。（____）\n5) あの人は山田さんですか。（____）\n6) これはだれの時計ですか。（____）\n7) ワットさんは学生ですか。（____）",
        "choices": [
          { "key": "a", "text": "それはノートです。" },
          { "key": "b", "text": "38歳です。" },
          { "key": "c", "text": "はい、山田さんです。" },
          { "key": "d", "text": "はい、それは本です。", "isExample": true },
          { "key": "e", "text": "山田さんのです。" },
          { "key": "f", "text": "山田さんです。" },
          { "key": "g", "text": "いいえ、先生です。" },
          { "key": "h", "text": "車の雑誌です。" },
          { "key": "i", "text": "はい、わたしのです。" }
        ],
        "answers": [
          "f / 山田さんです",
          "a / それはノートです",
          "h / 車の雑誌です",
          "b / 38歳です / 38さいです",
          "c / はい、山田さんです",
          "e / 山田さんのです",
          "g / いいえ、先生です / いいえ、せんせいです"
        ],
        "explanation": "• 例 (Ví dụ): Câu hỏi xác nhận sự vật「これは本ですか」(Đây là cuốn sách phải không?) ➔ Trả lời xác nhận phù hợp: d:「はい、それは本です」(Vâng, đó là cuốn sách).\n• 1):「あの人はだれですか」(Người kia là ai?) là câu hỏi dùng nghi vấn từ (だれ) nên không trả lời bằng はい/いいえ ➔ Trả lời thẳng danh tính: f:「山田さんです」(Là anh Yamada).\n• 2):「これはノートですか、雑誌ですか」(Đây là quyển vở hay cuốn tạp chí?) là câu hỏi lựa chọn A hay B ➔ Trả lời chọn một trong hai (không dùng はい/いいえ): a:「それはノートです」(Đó là quyển vở).\n• 3):「それは何の雑誌ですか」(Đó là tạp chí về cái gì?) hỏi về thể loại/nội dung của danh từ ➔ Dùng「N1 の N2」: h:「車の雑誌です」(Tạp chí về ô tô).\n• 4):「山田さんはおいくつですか」(Anh Yamada bao nhiêu tuổi?) là câu hỏi tuổi lịch sự (おいくつ) ➔ Trả lời số tuổi: b:「38歳です」(38 tuổi).\n• 5):「あの人は山田さんですか」(Người kia có phải là anh Yamada không?) là câu hỏi xác nhận danh tính có/không ➔ Trả lời: c:「はい、山田さんです」(Vâng, là anh Yamada).\n• 6):「これはだれの時計ですか」(Đây là đồng hồ của ai?) là câu hỏi về quyền sở hữu (だれの) ➔ Trả lời cấu trúc sở hữu: e:「山田さんのです」(Của anh Yamada). (Lưu ý: Không chọn i vì câu hỏi nghi vấn từ không dùng はい).\n• 7):「ワットさんは学生ですか」(Thầy Watt có phải là học sinh/sinh viên không?) ➔ Trả lời phủ định và đính chính nghề nghiệp: g:「いいえ、先生です」(Không, là giáo viên).\n(Lưu ý: Phương án i là đáp án bẫy/dư)."
      },
      {
        "id": "b1_q4",
        "type": "binary_choice",
        "tag": "Chọn 1 trong 2 từ",
        "question": "6. 例：〔この／<u>これ</u>〕は本です。\n\n1) それは〔だれ／何〕のかばんですか。…〔わたし／わたしの〕です。\n2) 〔その／それ〕は何のCDですか。…日本語のCDです。\n3) 〔この／これ〕傘はあなたのですか。…いいえ、〔あなた／わたし〕のじゃありません。\n4) これは〔新聞／何〕ですか。…はい、それは新聞です。\n5) あの人は〔何／だれ〕ですか。…佐藤さんです。\n6) テレーザちゃんは〔だれ／何歳〕ですか。…９歳です。",
        "answers": [
          "だれ",
          "わたしの",
          "それ",
          "この",
          "わたし",
          "新聞 / しんぶん",
          "だれ",
          "何歳 / なんさい"
        ],
        "explanation": "• 例 (Ví dụ): Trước trợ từ「は」phải là đại từ chỉ thị độc lập「これ」(Cái này là sách). Chỉ thị từ「この」bắt buộc phải đi kèm danh từ (この N).\n• 1): Vị trí 1: Câu hỏi về người sở hữu đồ vật「のかばん」dùng「だれ」(cặp của ai). Vị trí 2: Trả lời sở hữu đồ vật rút gọn dùng「わたしの [です]」(là của tôi).\n• 2): Trước trợ từ「は」dùng đại từ chỉ thị độc lập「それ」(Đó là đĩa CD gì vậy?).\n• 3): Vị trí 1: Đứng trước danh từ「傘」phải dùng chỉ thị từ「この」(Cây dù này). Vị trí 2: Trả lời phủ định sở hữu bản thân「いいえ、わたし のじゃありません」(Không phải của tôi).\n• 4): Câu trả lời có「はい、それは新聞です」(Vâng, đó là tờ báo), nên câu hỏi là nghi vấn xác nhận có/không「これは新聞ですか」, không dùng từ để hỏi「何」.\n• 5): Câu trả lời là tên người「佐藤さんです」, câu hỏi người dùng「だれ」.\n• 6): Câu trả lời là số tuổi「９歳です」(9 tuổi), câu hỏi tuổi dùng「何歳」(hoặc おいくつ)."
      },
      {
        id: "b1_q5",
        type: "fill",
        tag: "Điền Hiragana cho từ gạch chân",
        question: "7. 例：グプタさんは <u>42</u> 歳です。（よんじゅうに）\n\n1) イーさんは <u>35</u> 歳です。（____）\n2) 太郎ちゃんは <u>8</u> 歳です。（____）\n3) ワンさんは <u>29</u> 歳です。（____）\n4) カリナさんは <u>24</u> 歳です。（____）\n5) けんちゃんは <u>1</u> 歳です。（____）\n6) サントスさんは <u>10</u> 歳です。（____）\n7) キムさんは <u>20</u> 歳です。（____）\n8) マリアさんは <u>16</u> 歳です。（____）\n9) ワットさんは <u>45</u> 歳です。（____）\n10) シュミットさんは <u>32</u> 歳です。（____）",
        answers: [
          "さんじゅうご / さんじゅうごさい",
          "はち / はっ / はっさい",
          "にじゅうきゅう / にじゅうく / にじゅうきゅうさい / にじゅうくさい",
          "にじゅうよん / にじゅうし / にじゅうよんさい / にじゅうしさい",
          "いっさい / いっ / いち / いちさい",
          "じゅっさい / じっさい / じゅう / じゅっ / じっ / じゅうさい",
          "はたち / にじゅっさい / にじっさい / にじゅう / にじゅうさい",
          "じゅうろく / じゅうろくさい",
          "よんじゅうご / よんじゅうごさい",
          "さんじゅうに / さんじゅうにさい"
        ],
        explanation: "• 例 (Ví dụ): Số 42 đọc là「よんじゅうに」(yonjūni).\n• 1): Số 35 đọc là「さんじゅうご」(sanjūgo).\n• 2): Số 8 đọc là「はち」(hachi), khi nói tuổi kết hợp âm ngắt thành「はっさい」(8 tuổi).\n• 3): Số 29 đọc là「にじゅうきゅう」(nijūkyū) hoặc「にじゅうく」(nijūku).\n• 4): Số 24 đọc là「にじゅうよん」(nijūyon) hoặc「にじゅうし」(nijūshi).\n• 5): Tuổi đặc biệt (1 tuổi): Biến âm ngắt thành「いっさい」(hoặc đọc số là「いち」).\n• 6): Tuổi đặc biệt (10 tuổi): Biến âm ngắt thành「じゅっさい」hoặc「じっさい」(hoặc đọc số là「じゅう」).\n• 7): Tuổi đặc biệt (20 tuổi): Cách đọc đặc biệt riêng biệt là「はたち」(cũng chấp nhận「にじゅっさい」/「にじっさい」).\n• 8): Tuổi không đặc biệt (16 tuổi): Đọc số 16 bình thường là「じゅうろく」(jūroku).\n• 9): Tuổi không đặc biệt (45 tuổi): Đọc số 45 bình thường là「よんじゅうご」(yonjūgo).\n• 10): Tuổi không đặc biệt (32 tuổi): Đọc số 32 bình thường là「さんじゅうに」(sanjūni)."
      },
      {
        id: "b1_q6",
        type: "open_ended",
        tag: "Trả lời câu hỏi mở",
        question: "8. 1) あなたは学生ですか。＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿\n2) お名前は？＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿\n3) おいくつですか。＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿",
        answers: [
          "はい、学生です。",
          "マイです。",
          "25歳です。"
        ],
        explanation: "• Dạng câu hỏi mở hỏi về bản thân bạn để tự luyện tập đối thoại (tự đối chiếu với câu mẫu sau khi nộp bài):\n• 1):「あなたは学生ですか」(Bạn có phải là học sinh/sinh viên không?) ➔ Khẳng định:「はい、学生です」; Phủ định:「いいえ、会社員です / いいえ、学生じゃありません」(tuỳ theo nghề nghiệp thực tế của bạn).\n• 2):「お名前は？」(Bạn tên là gì?) ➔ Trả lời:「[Tên bạn] です」(Ví dụ: マイです、ナムです... Tuyệt đối không thêm「さん」sau tên mình).\n• 3):「おいくつですか」(Bạn bao nhiêu tuổi?) ➔ Trả lời:「[Số tuổi] 歳です」(Ví dụ: 20歳です、25歳です...)."
      }
    ]
  },
  bai_2: {
    title: "Bài 2",
    completed: true,
    questions: [
      {
        id: "b2_q1",
        type: "fill",
        tag: "Điền trợ từ vào ngoặc",
        question: "3. 例：わたし（ は ）山田です。\n\n1) A：それはどこ（____）時計ですか。\nB：日本（____）です。\n\n2) A：マリアさん（____）お国（____）どちらですか。\nB：ブラジルです。\n\n3) A：松本さん（____）車（____）どこですか。\nB：あそこです。\n\n4) A：すみません。そのワイン（____）見せてください。\nB：どうぞ。\nA：これはどこ（____）ワインですか。\nB：イタリアのです。\nA：じゃ、これ（____）ください。",
        answers: [
          "の",
          "の",
          "の",
          "は",
          "の",
          "は",
          "を",
          "の",
          "を"
        ],
        explanation: "• 例 (Ví dụ): Trợ từ「は」xác định chủ đề câu:「わたし は 山田です」(Tôi là Yamada).\n• 1): Vị trí 1: Trợ từ「の」nối nghi vấn từ nơi chốn「どこ」với danh từ「時計」để hỏi nguồn gốc/xuất xứ (đồng hồ sản xuất ở đâu). Vị trí 2: Trả lời rút gọn danh từ「日本 の [時計] です」(Là đồng hồ của Nhật Bản).\n• 2): Vị trí 1: Trợ từ「の」biểu thị mối quan hệ thuộc về「マリアさん の お国」(Đất nước của chị Maria). Vị trí 2: Trợ từ「は」xác định chủ đề câu hỏi lịch sự về xuất xứ/quê hương:「お国 は どちらですか」(Đất nước của bạn ở đâu vậy?).\n• 3): Vị trí 1: Trợ từ「の」biểu thị sở hữu「松本さん の 車」(Xe của anh Matsumoto). Vị trí 2: Trợ từ「は」xác định chủ đề câu hỏi vị trí:「車 は どこですか」(Xe ở đâu vậy?).\n• 4): Vị trí 1: Trợ từ「を」chỉ đối tượng trực tiếp của hành động「見せてください」(Cho tôi xem chai rượu đó). Vị trí 2: Trợ từ「の」hỏi xuất xứ「どこ の ワイン」(Rượu vang của đâu). Vị trí 3: Trợ từ「を」chỉ đối tượng được chọn mua/yêu cầu:「これ を ください」(Hãy lấy cho tôi cái này)."
      },
      {
        id: "b2_q2",
        type: "fill",
        tag: "Điền nghi vấn từ thích hợp",
        question: "4. 例：あの方は（ どなた ）ですか。…ミラーさんです。\n\n1) カメラ売り場は（____）ですか。…3階です。\n2) それは（____）のコーヒーですか。…ブラジルのコーヒーです。\n3) 会社は（____）ですか。…パワー電気です。\n4) お国は（____）ですか。…インドネシアです。\n5) その時計は（____）ですか。…18,800円です。",
        answers: [
          "どこ / どちら / 何階 / なんがい",
          "どこ / どちら",
          "どこ / どちら",
          "どちら / どこ",
          "いくら"
        ],
        explanation: "• 例 (Ví dụ): Câu trả lời là tên người「ミラーさんです」, câu hỏi lịch sự về người dùng nghi vấn từ「どなた」(Vị kia là ai/vị nào vậy?).\n• 1): Câu trả lời là vị trí tầng「3階です」(Ở tầng 3), câu hỏi nơi chốn dùng「どこ」(ở đâu) hoặc cách hỏi lịch sự「どちら」, hoặc hỏi tầng「何階」(tầng mấy).\n• 2): Câu trả lời nêu xuất xứ「ブラジルのコーヒーです」(Cà phê của Brazil), câu hỏi xuất xứ đồ vật dùng「どこ の [Danh từ]」(hoặc「どちら」).\n• 3): Câu trả lời nêu tên công ty「パワー電気です」(Công ty Điện lực Power), câu hỏi công ty/tổ chức trực thuộc dùng「どこ」(hoặc「どちら」).\n• 4): Câu trả lời nêu tên quốc gia「インドネシアです」(Indonesia), câu hỏi lịch sự về quốc gia/quê hương dùng「どちら」(hoặc「どこ」).\n• 5): Câu trả lời nêu giá tiền「18,800円です」(18,800 Yên), câu hỏi giá tiền dùng「いくら」(Bao nhiêu tiền)."
      },
      {
        id: "b2_q3",
        type: "word_order",
        tag: "Ghép các từ thành câu hoàn chỉnh",
        question: "5. 例：受付／か／は／です／どちら…<u>受付はどちらですか。</u>\n\n1) かばん／この／か／は／です／いくら\n＿＿＿＿＿＿＿＿＿＿\n\n2) 先生／日本語／か／は／の／です／どなた\n＿＿＿＿＿＿＿＿＿＿\n\n3) 松本さん／か／は／です／どちら\n＿＿＿＿＿＿＿＿＿＿\n\n4) コーヒー／これ／の／は／か／です／どこ\n＿＿＿＿＿＿＿＿＿＿",
        answers: [
          "このかばんはいくらですか。 / このかばんはいくらですか",
          "日本語の先生はどなたですか。 / 日本語の先生はどなたですか",
          "松本さんはどちらですか。 / 松本さんはどちらですか",
          "これはどこのコーヒーですか。 / これはどこのコーヒーですか"
        ],
        explanation: "• 例 (Ví dụ): Sắp xếp thành câu hỏi lịch sự về vị trí:「受付 は どちら です か」(Quầy tiếp tân ở phía nào vậy?).\n• 1): Chỉ thị từ「この」bổ nghĩa cho danh từ「かばん」làm chủ đề「このかばんは」+ từ để hỏi giá「いくら」+「ですか」➔「このかばんはいくらですか。」(Cái cặp này bao nhiêu tiền vậy?).\n• 2): Cụm danh từ「日本語の先生」làm chủ đề「日本語の先生は」+ từ để hỏi người lịch sự「どなた」+「ですか」➔「日本語の先生はどなたですか。」(Giáo viên tiếng Nhật là vị nào vậy?).\n• 3): Chủ đề chỉ người「松本さんは」+ từ để hỏi nơi chốn/vị trí lịch sự「どちら」+「ですか」➔「松本さんはどちらですか。」(Anh Matsumoto ở phía nào/ở đâu vậy?).\n• 4): Đại từ chỉ thị「これ」làm chủ đề「これは」+ cụm hỏi xuất xứ「どこのコーヒー」+「ですか」➔「これはどこのコーヒーですか。」(Đây là cà phê của đâu vậy?)."
      },
      {
        id: "b2_q4",
        type: "fill",
        tag: "Điền Hiragana cho từ gạch chân",
        question: "7. 例：このネクタイは <u>6,400</u> 円です。（ろくせんよんひゃく）\n\n1) このかばんは <u>8,300</u> 円です。（____）\n2) このカメラは <u>23,800</u> 円です。（____）\n3) このコンピューターは <u>124,000</u> 円です。（____）\n4) この車は <u>4,700,000</u> 円です。（____）\n5) このペンは <u>300</u> 円です。（____）\n6) この傘は <u>600</u> 円です。（____）\n7) この本は <u>800</u> 円です。（____）\n8) このシャツは <u>3,000</u> 円です。（____）\n9) この靴は <u>8,000</u> 円です。（____）\n10) このノートは <u>500</u> 円です。（____）\n11) このワインは <u>1,500</u> 円です。（____）\n12) この時計は <u>7,000</u> 円です。（____）",
        answers: [
          "はっせんさんびゃく / はっせんさんびゃくえん",
          "にまんさんぜんはっぴゃく / にまんさんぜんはっぴゃくえん",
          "じゅうにまんよんせん / じゅうにまんよんせんえん",
          "よんひゃくななじゅうまん / よんひゃくしちじゅうまん / よんひゃくななじゅうまんえん / よんひゃくしちじゅうまんえん",
          "さんびゃく / さんびゃくえん",
          "ろっぴゃく / ろっぴゃくえん",
          "はっぴゃく / はっぴゃくえん",
          "さんぜん / さんぜんえん",
          "はっせん / はっせんえん",
          "ごひゃく / ごひゃくえん",
          "せんごひゃく / いっせんごひゃく / せんごひゃくえん / いっせんごひゃくえん",
          "ななせん / ななせんえん"
        ],
        explanation: "• 例 (Ví dụ): Số 6,400 đọc là「ろくせんよんひゃく」(rokusen yonhyaku).\n• 1): Số 8,300 gồm 8,000 có âm ngắt「はっせん」+ 300 biến âm「さんびゃく」➔「はっせんさんびゃく」(hassen sanbyaku).\n• 2): Số 23,800 gồm 20,000「にまん」+ 3,000 biến âm「さんぜん」+ 800 âm ngắt「はっぴゃく」➔「にまんさんぜんはっぴゃく」(niman sanzen happyaku).\n• 3): Số 124,000 gồm 12 vạn「じゅうにまん」+ 4,000「よんせん」➔「じゅうにまんよんせん」(jūniman yonsen).\n• 4): Số 4,700,000 là 470 vạn gồm 400「よんひゃく」+ 70「ななじゅう」(hoặc「しちじゅう」) +「まん」➔「よんひゃくななじゅうまん」(hoặc「よんひゃくしちじゅうまん」).\n• 5): Số đặc biệt hàng trăm (300): Biến âm đục「さんびゃく」(sanbyaku).\n• 6): Số đặc biệt hàng trăm (600): Biến âm ngắt + bán đục「ろっぴゃく」(roppyaku).\n• 7): Số đặc biệt hàng trăm (800): Biến âm ngắt + bán đục「はっぴゃく」(happyaku).\n• 8): Số đặc biệt hàng nghìn (3,000): Biến âm đục「さんぜん」(sanzen).\n• 9): Số đặc biệt hàng nghìn (8,000): Biến âm ngắt「はっせん」(hassen).\n• 10): Số không đặc biệt (500): Đọc bình thường là「ごひゃく」(gohyaku).\n• 11): Số không đặc biệt (1,500): Đọc là 1,000「せん」(hoặc「いっせん」) + 500「ごひゃく」➔「せんごひゃく」(sengohyaku).\n• 12): Số không đặc biệt (7,000): Đọc số 7 là「なな」+ nghìn「せん」➔「ななせん」(nanasen)."
      },
      {
        id: "b2_q5",
        type: "open_ended",
        tag: "Trả lời câu hỏi mở",
        question: "6. 1) うちはどこですか。\n＿＿＿＿＿＿＿＿＿＿\n\n2) あなたの部屋は 1階ですか。\n＿＿＿＿＿＿＿＿＿＿\n\n3) あなたの時計は 日本のですか。\n＿＿＿＿＿＿＿＿＿＿\n\n4) あなたの日本語の本はいくらですか。\n＿＿＿＿＿＿＿＿＿＿",
        answers: [
          "ハノイです。",
          "はい、1階です。",
          "はい、日本のです。",
          "3,000円です。"
        ],
        explanation: "• Dạng câu hỏi mở hỏi về thông tin bản thân bạn để tự luyện tập đối thoại (tự đối chiếu với câu mẫu sau khi nộp bài):\n• 1):「うちはどこですか」(Nhà bạn ở đâu vậy?) ➔ Trả lời bằng tên địa danh, thành phố hoặc đất nước nơi bạn ở:「[Tên địa danh] です」(Ví dụ: ハノイです、ホーチミンです、東京です...).\n• 2):「あなたの部屋は 1階ですか」(Phòng của bạn ở tầng 1 phải không?) ➔ Trả lời khẳng định:「はい、1階です」; Phủ định:「いいえ、2階です / いいえ、1階じゃありません」(tuỳ theo tầng thực tế của bạn).\n• 3):「あなたの時計は 日本のですか」(Đồng hồ của bạn là của Nhật Bản à?) ➔ Trả lời khẳng định:「はい、日本のです」; Phủ định:「いいえ、ベトナムのです / いいえ、日本の一じゃありません」(tuỳ theo xuất xứ đồng hồ của bạn).\n• 4):「あなたの日本語の本はいくらですか」(Quyển sách tiếng Nhật của bạn bao nhiêu tiền vậy?) ➔ Trả lời bằng giá tiền + đơn vị tiền tệ:「[Số tiền] です」(Ví dụ: 3,000円です、100,000ドンです...)."
      }
    ]
  },
  "bai_3": {
    "title": "Bài 3",
    "completed": true,
    "questions": [
      {
        "id": "b3_q1",
        "type": "fill",
        "tag": "Điền Hiragana cho từ/số",
        "columns": 3,
        "question": "7. 例：1:05（いちじごふん）\n\n1) 7:15（____）\n2) 4:20（____）\n3) 9:30（____）\n4) 8:45（____）\n5) 11:40（____）\n6) 6:55（____）\n7) 12:00（____）\n8) 2:10（____）\n9) 3:01（____）\n10) 10:03（____）\n11) 4:04（____）\n12) 1:06（____）\n13) 9:08（____）\n14) 5:24（____）\n15) 8:02（____）\n16) 5:07（____）\n17) 2:09（____）",
        "answers": [
          "しちじじゅうごふん / ななじじゅうごふん",
          "よじにじゅっぷん / よじにじっぷん",
          "くじさんじゅっぷん / くじさんじっぷん / くじはん",
          "はちじよんじゅうごふん",
          "じゅういちじよんじゅっぷん / じゅういちじよんじっぷん",
          "ろくじごじゅうごふん",
          "じゅうにじ / じゅうにじちょうど",
          "にじじゅっぷん / にじじっぷん",
          "さんじいっぷん",
          "じゅうじさんぷん",
          "よじよんぷん",
          "いちじろっぷん",
          "くじはっぷん / くじはちふん",
          "ごじにじゅうよんぷん",
          "はちじにふん",
          "ごじななふん / ごじしちふん",
          "にじきゅうふん"
        ],
        "explanation": "• 例 (Ví dụ): 1:05 gồm 1 giờ「いちじ」(ichiji) + 5 phút「ごふん」(gofun) ➔「いちじごふん」.\n• 1): 7:15 gồm 7 giờ「しちじ」(shichiji - chuẩn SGK Minna, hoặc ななじ) + 15 phút「じゅうごふん」(jūgofun) ➔「しちじじゅうごふん」(hoặc「ななじじゅうごふん」).\n• 2): 4:20 gồm 4 giờ là trường hợp đặc biệt phát âm「よじ」(yoji - chú ý không đọc là よんじ hay しじ) + 20 phút「にじゅっぷん」(nijuppun - hoặc にじっぷん nijippun) ➔「よじにじゅっぷん」(hoặc「よじにじっぷん」).\n• 3): 9:30 gồm 9 giờ là trường hợp đặc biệt phát âm「くじ」(kuji - không đọc là きゅうじ) + 30 phút「さんじゅっぷん」(sanjuppun) hoặc nói cách rưỡi「くじはん」(kujihan) ➔「くじさんじゅっぷん」(hoặc「くじさんじっぷん」,「くじはん」).\n• 4): 8:45 gồm 8 giờ「はちじ」(hachiji) + 45 phút gồm 40「よんじゅう」và 5 phút「ごふん」➔「はちじよんじゅうごふん」(hachiji yonjūgofun).\n• 5): 11:40 gồm 11 giờ「じゅういちじ」(jūichiji) + 40 phút「よんじゅっぷん」(yonjuppun - hoặc よんじっぷん yonjippun) ➔「じゅういちじよんじゅっぷん」(hoặc「じゅういちじよんじっぷん」).\n• 6): 6:55 gồm 6 giờ「ろくじ」(rokuji) + 55 phút gồm 50「ごじゅう」và 5 phút「ごふん」➔「ろくじごじゅうごふん」(rokuji gojūgofun).\n• 7): 12:00 là 12 giờ đúng ➔「じゅうにじ」(jūniji - hoặc nói rõ giờ đúng「じゅうにじちょうど」).\n• 8): 2:10 gồm 2 giờ「にじ」(niji) + 10 phút là âm ngắt biến âm「じゅっぷん」(juppun - hoặc じっぷん jippun) ➔「にじじゅっぷん」(hoặc「にじじっぷん」).\n• 9): 3:01 gồm 3 giờ「さんじ」+ 1 phút đặc biệt âm ngắt「いっぷん」(ippun) ➔「さんじいっぷん」.\n• 10): 10:03 gồm 10 giờ「じゅうじ」+ 3 phút đặc biệt bán đục「さんぷん」(sanpun) ➔「じゅうじさんぷん」.\n• 11): 4:04 gồm 4 giờ đặc biệt「よじ」(yoji) + 4 phút đặc biệt bán đục「よんぷん」(yonpun) ➔「よじよんぷん」.\n• 12): 1:06 gồm 1 giờ「いちじ」+ 6 phút đặc biệt âm ngắt「ろっぷん」(roppun) ➔「いちじろっぷん」.\n• 13): 9:08 gồm 9 giờ đặc biệt「くじ」(kuji) + 8 phút đặc biệt âm ngắt「はっぷん」(happun - hoặc「はちふん」) ➔「くじはっぷん」(hoặc「くじはちふん」).\n• 14): 5:24 gồm 5 giờ「ごじ」+ 24 phút「にじゅうよんぷん」(nijūyonpun) ➔「ごじにじゅうよんぷん」.\n• 15): 8:02 gồm 8 giờ「はちじ」(hachiji) + 2 phút「にふん」(nifun - đi với ふん, không biến âm) ➔「はちじにふん」.\n• 16): 5:07 gồm 5 giờ「ごじ」(goji) + 7 phút「ななふん」(nanafun - hoặc「しちふん」, đi với ふん) ➔「ごじななふん」(hoặc「ごじしちふん」).\n• 17): 2:09 gồm 2 giờ「にじ」(niji) + 9 phút「きゅうふん」(kyūfun - đi với ふん, không biến âm) ➔「にじきゅうふん」.\n* Bảng tổng kết giờ & phút đặc biệt:\n  - Giờ đặc biệt: 4 giờ (よじ), 7 giờ (しちじ), 9 giờ (くじ).\n  - Phút đi với「ふん」(fun): 2 phút (にふん), 5 phút (ごふん), 7 phút (ななふん/しちふん), 9 phút (きゅうふん).\n  - Phút đặc biệt đi kèm「ぷん」(âm ngắt/bán đục): 1 phút (いっぷん), 3 phút (さんぷん), 4 phút (よんぷん), 6 phút (ろっぷん), 8 phút (はっぷん), 10 phút (じゅっぷん/じっぷん), 20 phút (にじゅっぷん), 30 phút (さんじゅっぷん/はん), 40 phút (よんじゅっぷん)."
      },
      {
        "id": "b3_q2",
        "type": "fill",
        "tag": "Nhìn lịch để nói về thứ, ngày",
        "calendar": {
          "title": "3月",
          "headers": ["日", "月", "火", "水", "木", "金", "土"],
          "days": [
            ["", "", "", "1", "2", "3", "4"],
            ["5", "6", "7", "8", "9", "10", "11"],
            ["12", "13", "14", "15", "16", "17", "18"],
            ["19", "20", "21", "22", "23", "24", "25"],
            ["26", "27", "28", "29", "30", "31", ""]
          ]
        },
        "columns": 2,
        "question": "2. 例：3／1（すい）曜日\n\n1) 3／4（____）曜日\n2) 3／6（____）曜日\n3) 3／17（____）曜日\n4) 3／19（____）曜日\n5) 3／21（____）曜日\n6) 3／30（____）曜日",
        "answers": [
          "ど / どようび",
          "げつ / げつようび",
          "きん / きんようび",
          "にち / にちようび",
          "か / かようび",
          "もく / もくようび"
        ],
        "explanation": "• 例 (Ví dụ): Ngày 1/3 (3／1) đối chiếu trên tờ lịch gióng lên hàng thứ là「水」(Thủy) ➔ Thứ Tư「水曜日」(すいようび). Vì sau dấu ngoặc đã có sẵn chữ「曜日」nên trong ngoặc chỉ điền「すい」.\n• 1): Ngày 4/3 (3／4) gióng lên hàng thứ là「土」(Thổ) ➔ Thứ Bảy「土曜日」(どようび). Điền:「ど」(do).\n• 2): Ngày 6/3 (3／6) gióng lên hàng thứ là「月」(Nguyệt) ➔ Thứ Hai「月曜日」(げつようび). Điền:「げつ」(getsu).\n• 3): Ngày 17/3 (3／17) gióng lên hàng thứ là「金」(Kim) ➔ Thứ Sáu「金曜日」(きんようび). Điền:「きん」(kin).\n• 4): Ngày 19/3 (3／19) gióng lên hàng thứ là「日」(Nhật) ➔ Chủ Nhật「日曜日」(にちようび). Điền:「にち」(nichi).\n• 5): Ngày 21/3 (3／21) gióng lên hàng thứ là「火」(Hỏa) ➔ Thứ Ba「火曜日」(かようび). Điền:「か」(ka).\n• 6): Ngày 30/3 (3／30) gióng lên hàng thứ là「木」(Mộc) ➔ Thứ Năm「木曜日」(もくようび). Điền:「もく」(moku).\n* Mẹo nhớ 7 thứ trong tuần: Nhật (日 - Mặt trời) ➔ Nguyệt (月 - Mặt trăng) ➔ Hỏa (火 - Lửa) ➔ Thủy (水 - Nước) ➔ Mộc (木 - Cây) ➔ Kim (金 - Kim loại/Tiền) ➔ Thổ (土 - Đất)."
      },
      {
        "id": "b3_q3",
        "type": "fill",
        "tag": "Điền trợ từ thích hợp",
        "question": "3. 例1：これは日本（ の ）車です。\n例2：あの人はだれ（ × ）ですか。\n\n1) 美術館（____）休みは月曜日（____）木曜日です。\n2) 銀行は３時（____）終わります。\n3) わたし（____）会社は９時（____）５時（____）です。\n4) あさって（____）日曜日です。\n5) この図書館は土曜日（____）午後休みです。\n6) ニューヨーク（____）今午前４時（____）です。\n7) きのうの晩８時（____）10時（____）勉強しました。\n8) 毎晩（____）11時半（____）寝ます。",
        "answers": [
          "の",
          "と",
          "に",
          "の",
          "から",
          "まで",
          "は",
          "の",
          "は",
          "× / x / ✕",
          "から",
          "まで",
          "× / x / ✕",
          "に"
        ],
        "explanation": "• 例1 (Ví dụ 1): Trợ từ「の」nối 2 danh từ chỉ quan hệ xuất xứ/sở hữu:「日本の車」(xe hơi của Nhật Bản).\n• 例2 (Ví dụ 2): Sau nghi vấn từ「だれ」trước「ですか」không dùng trợ từ nên điền「×」.\n• 1): Vị trí 1: Trợ từ「の」nối 2 danh từ「美術館 の 休み」(ngày nghỉ của viện bảo tàng). Vị trí 2: Trợ từ「と」(và) dùng để liệt kê danh từ cùng loại:「月曜日 と 木曜日」(thứ Hai và thứ Năm).\n• 2): Trợ từ「に」đứng sau mốc thời gian cụ thể có con số chỉ thời điểm hành động diễn ra:「3時 に 終わります」(kết thúc vào lúc 3 giờ).\n• 3): Vị trí 1: Trợ từ「の」biểu thị sở thuộc「わたし の 会社」(công ty của tôi). Vị trí 2 & 3: Cặp trợ từ「から」(từ) và「まで」(đến) biểu thị điểm bắt đầu và kết thúc:「9時 から 5時 まで です」(từ 9 giờ đến 5 giờ).\n• 4): Trợ từ「は」đưa danh từ chỉ thời gian「あさって」(ngày kia) lên làm chủ đề của câu:「あさって は 日曜日です」(Ngày kia là Chủ Nhật).\n• 5): Trợ từ「の」nối 2 danh từ thời gian thu hẹp:「土曜日 の 午後」(chiều thứ Bảy).\n• 6): Vị trí 1: Trợ từ「は」xác định địa danh New York làm chủ đề câu:「ニューヨーク は」(Ở New York thì...). Vị trí 2: Điền「×」(không cần trợ từ) vì trước「です」là danh từ vị ngữ chỉ thời gian「午前4時」.\n• 7): Cặp trợ từ「から」và「まで」biểu thị khoảng thời gian học trong quá khứ:「8時 から 10時 まで 勉強しました」(Học từ 8 giờ đến 10 giờ tối qua).\n• 8): Vị trí 1: Điền「×」vì các từ chỉ thời gian tuần hoàn lặp lại như「毎晩」(mỗi tối),「毎朝」,「毎日」tuyệt đối KHÔNG đi kèm trợ từ「に」. Vị trí 2: Dùng trợ từ「に」vì「11時半」(11 giờ rưỡi) là mốc thời gian cụ thể có con số:「11時半 に 寝ます」(đi ngủ lúc 11 giờ rưỡi)."
      },
      {
        "id": "b3_q4",
        "type": "fill",
        "tag": "Hoàn thành câu dựa vào bảng thông tin",
        "table": {
          "title": "📋 Bảng thời gian mở cửa & ngày nghỉ",
          "headers": ["施設名 (Địa điểm)", "営業時間 (Thời gian)", "休業日 (Ngày nghỉ)"],
          "rows": [
            ["例：あすか", "11:00 ～ 9:30", "木曜日"],
            ["1) やまと美術館", "10:00 ～ 4:00", "水曜日"],
            ["2) みどり図書館", "9:00 ～ 6:00", "月曜日・金曜日"],
            ["3) アップル銀行", "9:00 ～ 3:00", "土曜日・日曜日"],
            ["4) 神戸病院", "9:30 ～ 8:30", "日曜日"]
          ]
        },
        "columns": 2,
        "question": "4. 例：あすかは\n<u>11時から9時半までです。</u>\n<u>休みは木曜日です。</u>\n\n1) やまと美術館は ＿＿＿＿＿＿＿＿＿＿\n＿＿＿＿＿＿＿＿＿＿\n\n2) みどり図書館は ＿＿＿＿＿＿＿＿＿＿\n＿＿＿＿＿＿＿＿＿＿\n\n3) アップル銀行は ＿＿＿＿＿＿＿＿＿＿\n＿＿＿＿＿＿＿＿＿＿\n\n4) 神戸病院は ＿＿＿＿＿＿＿＿＿＿\n＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "10時から4時までです。 / 10時から4時までです / 10じから4じまでです。 / 10じから4じまでです",
          "休みは水曜日です。 / 休みは水曜日です / やすみはすいようびです。 / やすみはすいようびです",
          "9時から6時までです。 / 9時から6時までです / 9じから6じまでです。 / 9じから6じまでです",
          "休みは月曜日と金曜日です。 / 休みは月曜日と金曜日です / やすみはげつようびときんようびです。 / やすみはげつようびときんようびです",
          "9時から3時までです。 / 9時から3時までです / 9じから3じまでです。 / 9じから3じまでです",
          "休みは土曜日と日曜日です。 / 休みは土曜日と日曜日です / やすみはどようびとにちようびです。 / やすみはどようびとにちようびです",
          "9時半から8時半までです。 / 9時半から8時半までです / 9じはんから8じはんまでです。 / 9じはんから8じはんまでです / 9時30分から8時30分までです。 / 9時30分から8時30分までです",
          "休みは日曜日です。 / 休みは日曜日です / やすみはにちようびです。 / やすみはにちようびです"
        ],
        "explanation": "• 例 (Ví dụ): Đối chiếu bảng dòng「あすか」(11:00 ～ 9:30, 木曜日) ➔ Dòng 1: Nói giờ mở cửa「11時から9時半までです」; Dòng 2: Nói ngày nghỉ「休みは木曜日です」.\n• 1): やまと美術館 (10:00 ～ 4:00, 水曜日) ➔ Dòng 1:「10時から4時までです。」; Dòng 2:「休みは水曜日です。」\n• 2): みどり図書館 (9:00 ～ 6:00, 月曜日・金曜日) ➔ Dòng 1:「9時から6時までです。」; Dòng 2: Liệt kê hai ngày nghỉ dùng trợ từ と:「休みは月曜日と金曜日です。」\n• 3): アップル銀行 (9:00 ～ 3:00, 土曜日・日曜日) ➔ Dòng 1:「9時から3時までです。」; Dòng 2:「休みは土曜日と日曜日です。」\n• 4): 神戸病院 (9:30 ～ 8:30, 日曜日) ➔ Dòng 1: 30 phút đọc là「時半」(じはん):「9時半から8時半までです。」; Dòng 2:「休みは日曜日です。」"
      },
      {
        "id": "b3_q5",
        "type": "fill",
        "tag": "Hoàn thành câu chia thì động từ",
        "question": "5. 例：大学は５時に終わりますか。…はい、<u>終わります。</u>\n\n1) おととい休みましたか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n2) 休みは月曜日ですか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n3) 日曜日働きますか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n4) きのうの晩勉強しましたか。…はい、＿＿＿＿＿＿＿＿＿＿\n5) 毎朝６時に起きますか。…はい、＿＿＿＿＿＿＿＿＿＿\n6) 毎晩12時に寝ますか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n7) けさ７時に起きましたか。…はい、＿＿＿＿＿＿＿＿＿＿\n8) きのうの晩11時に寝ましたか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n9) きのう働きましたか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n10) あした勉強しますか。…はい、＿＿＿＿＿＿＿＿＿＿\n11) きのうの試験は３時に終わりましたか。…はい、＿＿＿＿＿＿＿＿＿＿\n12) きょうは土曜日ですか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n13) 昼休みは12時からですか。…はい、＿＿＿＿＿＿＿＿＿＿\n14) おととい勉強しましたか。…いいえ、＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "休みませんでした。 / 休みませんでした / やすみませんでした。 / やすみませんでした",
          "月曜日じゃありません。 / 月曜日じゃありません / 月曜日ではありません。 / 月曜日ではありません / げつようびじゃありません。 / げつようびじゃありません / げつようびではありません。 / げつようびではありません",
          "働きません。 / 働きません / はたらきません。 / はたらきません",
          "勉強しました。 / 勉強しました / べんきょうしました。 / べんきょうしました",
          "起きます。 / 起きます / おきます。 / おきます",
          "寝ません。 / 寝ません / ねません。 / ねません",
          "起きました。 / 起きました / おきました。 / おきました",
          "寝ませんでした。 / 寝ませんでした / ねませんでした。 / ねませんでした",
          "働きませんでした。 / 働きませんでした / はたらきませんでした。 / はたらきませんでした",
          "勉強します。 / 勉強します / べんきょうします。 / べんきょうします",
          "終わりました。 / 終わりました / おわりました。 / おわりました",
          "土曜日じゃありません。 / 土曜日じゃありません / 土曜日ではありません。 / 土曜日ではありません / どようびじゃありません。 / どようびじゃありません / どようびではありません。 / どようびではありません",
          "12時からです。 / 12時からです / 12じからです。 / 12じからです / そうです。 / そうです",
          "勉強しませんでした。 / 勉強しませんでした / べんきょうしませんでした。 / べんきょうしませんでした"
        ],
        "explanation": "• 例 (Ví dụ): Câu hỏi thời hiện tại khẳng định với động từ「終わりますか」➔ Trả lời khẳng định thời hiện tại:「はい、終わります。」(Vâng, kết thúc lúc 5 giờ).\n• 1):「おととい」(hôm kia) là mốc thời gian trong quá khứ, câu hỏi「休みましたか」➔ Trả lời phủ định quá khứ:「いいえ、休みませんでした。」(Không, tôi đã không nghỉ).\n• 2):「月曜日ですか」hỏi danh từ「です」➔ Trả lời phủ định danh từ:「いいえ、月曜日じゃありません。」(Không, không phải thứ Hai).\n• 3):「日曜日働きますか」hỏi thói quen hiện tại ➔ Trả lời phủ định hiện tại「V-ません」:「いいえ、働きません。」(Không, tôi không làm việc).\n• 4):「きのうの晩」(tối qua) là quá khứ ➔ Trả lời khẳng định quá khứ「V-ました」:「はい、勉強しました。」(Vâng, tôi đã học).\n• 5):「毎朝」(mỗi sáng) là thói quen hiện tại, câu trả lời có「はい」➔ Trả lời khẳng định hiện tại:「はい、起きます。」(Vâng, tôi thức dậy).\n• 6):「毎晩」(mỗi tối) là thói quen hiện tại, câu trả lời có「いいえ」➔ Trả lời phủ định hiện tại「V-ません」:「いいえ、寝ません。」(Không, tôi không đi ngủ lúc 12 giờ).\n• 7):「けさ」(sáng nay) là mốc thời gian quá khứ đã qua, câu trả lời có「はい」➔ Trả lời khẳng định quá khứ「V-ました」:「はい、起きました。」(Vâng, tôi đã thức dậy lúc 7 giờ).\n• 8):「きのうの晩」(tối qua) là quá khứ, câu trả lời có「いいえ」➔ Trả lời phủ định quá khứ「V-ませんでした」:「いいえ、寝ませんでした。」(Không, tôi đã không đi ngủ).\n• 9):「きのう」(hôm qua) là quá khứ, câu trả lời có「いいえ」➔ Trả lời phủ định quá khứ:「いいえ、働きませんでした。」(Không, hôm qua tôi đã không làm việc).\n• 10):「あした」(ngày mai) là tương lai, câu trả lời có「はい」➔ Trả lời khẳng định hiện tại/tương lai:「はい、勉強します。」(Vâng, ngày mai tôi sẽ học).\n• 11):「きのうの試験」(kỳ thi hôm qua) là quá khứ, câu trả lời có「はい」➔ Trả lời khẳng định quá khứ:「はい、終わりました。」(Vâng, đã kết thúc lúc 3 giờ).\n• 12):「土曜日ですか」hỏi xác nhận danh từ, câu trả lời có「いいえ」➔ Phủ định danh từ dùng「じゃありません」(hoặc「ではありません」):「いいえ、土曜日じゃありません。」(Không, không phải thứ Bảy).\n• 13):「12時からですか」(từ 12 giờ phải không?), câu trả lời có「はい」➔ Khẳng định nội dung mốc thời gian:「はい、12時からです。」(hoặc「はい、そうです。」: Vâng, bắt đầu từ 12 giờ).\n• 14):「おととい」(hôm kia) là quá khứ, câu trả lời có「いいえ」➔ Phủ định quá khứ:「いいえ、勉強しませんでした。」(Không, tôi đã không học).\n* Bảng tổng kết thì động từ tiếng Nhật:\n  - Hiện tại khẳng định: ～ます (V-masu)\n  - Hiện tại phủ định: ～ません (V-masen)\n  - Quá khứ khẳng định: ～ました (V-mashita)\n  - Quá khứ phủ định: ～ませんでした (V-masendeshita)"
      },
      {
        "id": "b3_q6",
        "type": "fill",
        "tag": "Điền nghi vấn từ thích hợp",
        "question": "6. 例：試験は（ 何時 ）に終わりますか。…12時に終わります。\n\n1) やまと美術館の休みは（____）ですか。…水曜日です。\n2) さくら大学の電話番号は（____）ですか。…5275の2722です。\n3) みどり図書館は（____）までですか。…6時までです。\n4) 会社は（____）から（____）までですか。…月曜日から金曜日までです。\n5) けさ（____）に起きましたか。…6時半に起きました。",
        "answers": [
          "何曜日 / なんようび",
          "何番 / なんばん",
          "何時 / なんじ",
          "何曜日 / なんようび",
          "何曜日 / なんようび",
          "何時 / なんじ"
        ],
        "explanation": "• 例 (Ví dụ): Câu trả lời nêu mốc giờ「12時に終わります」➔ Câu hỏi thời điểm kết thúc dùng nghi vấn từ「何時」(なんじ: mấy giờ).\n• 1): Câu trả lời nêu thứ trong tuần「水曜日です」(là thứ Tư) ➔ Câu hỏi thứ dùng nghi vấn từ「何曜日」(なんようび: thứ mấy).\n• 2): Câu trả lời nêu dãy số điện thoại「5275の2722です」➔ Câu hỏi số hiệu/số điện thoại dùng nghi vấn từ「何番」(なんばん: số mấy).\n• 3): Câu trả lời nêu mốc giờ kết thúc「6時までです」(đến 6 giờ) ➔ Câu hỏi mốc giờ kết thúc dùng「何時」(なんじ: mấy giờ).\n• 4): Câu trả lời nêu khoảng thời gian theo thứ「月曜日から金曜日までです」(từ thứ Hai đến thứ Sáu) ➔ Cả 2 vị trí đều dùng nghi vấn từ「何曜日」(từ thứ mấy đến thứ mấy).\n• 5): Câu trả lời nêu thời điểm thức dậy「6時半に起きました」(dậy lúc 6 giờ rưỡi) ➔ Câu hỏi mốc giờ diễn ra hành động dùng nghi vấn từ「何時」(thức dậy lúc mấy giờ)."
      },
      {
        "id": "b3_q7",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "7. 1) あなたの国は今何時ですか。\n＿＿＿＿＿＿＿＿＿＿\n\n2) きょうは何曜日ですか。\n＿＿＿＿＿＿＿＿＿＿\n\n3) あなたの国の郵便局は朝何時からですか。\n＿＿＿＿＿＿＿＿＿＿\n\n4) きのうの晩何時まで勉強しましたか。\n＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "午後3時です。",
          "月曜日です。",
          "朝8時からです。",
          "11時まで勉強しました。"
        ],
        "explanation": "• Dạng câu hỏi mở hỏi về thông tin bản thân bạn để tự luyện tập đối thoại (tự đối chiếu với câu mẫu sau khi nộp bài):\n• 1):「あなたの国は今何時ですか」(Đất nước của bạn bây giờ là mấy giờ?) ➔ Trả lời bằng mốc giờ hiện tại tại nơi bạn đang sống:「午前／午後 [Số giờ] です」(Ví dụ: 午後3時です、午前10時です...).\n• 2):「きょうは何曜日ですか」(Hôm nay là thứ mấy?) ➔ Trả lời bằng thứ trong tuần của ngày bạn làm bài:「[Thứ]曜日です」(Ví dụ: 月曜日です、水曜日です、日曜日です...).\n• 3):「あなたの国の郵便局は朝何時からですか」(Bưu điện ở nước bạn buổi sáng bắt đầu từ mấy giờ?) ➔ Trả lời bằng giờ mở cửa:「朝 [Số giờ] からです」(Ví dụ: 朝8時からです、朝7時半からです...).\n• 4):「きのうの晩何時まで勉強しましたか」(Tối hôm qua bạn đã học bài đến mấy giờ?) ➔ Trả lời bằng mốc giờ kết thúc việc học:「[Số giờ] まで勉強しました」(Ví dụ: 11時まで勉強しました、10時半まで勉強しました...)."
      }
    ]
  },
  "bai_4": {
    "title": "Bài 4",
    "completed": true,
    "questions": [
      {
        "id": "b4_q1",
        "type": "fill",
        "tag": "Điền cách đọc ngày tháng",
        "columns": 3,
        "question": "1. 例：3／24（さんがつにじゅうよっか）\n\n1) 5／10（____）\n2) 3／3（____）\n3) 1／4（____）\n4) 12／1（____）\n5) 9／5（____）\n6) 11／7（____）\n7) 7／8（____）\n8) 10／14（____）\n9) 6／2（____）\n10) 8／20（____）\n11) 2／6（____）\n12) 4／9（____）\n13) 7／24（____）\n14) 9／24（____）",
        "answers": [
          "ごがつとおか",
          "さんがつみっか",
          "いちがつよっか",
          "じゅうにがつついたち",
          "くがついつか",
          "じゅういちがつなのか",
          "しちがつようか / なながつようか",
          "じゅうがつじゅうよっか",
          "ろくがつふつか",
          "はちがつはつか",
          "にがつむいか",
          "しがつここのか",
          "しちがつにじゅうよっか / なながつにじゅうよっか",
          "くがつにじゅうよっか"
        ],
        "explanation": "• Quy tắc đọc tháng: Tháng 4 đọc là「しがつ」(không đọc よんがつ), tháng 7 đọc là「しちがつ」(hoặc なながつ), tháng 9 đọc là「くがつ」(không đọc きゅうがつ).\n• Quy tắc đọc ngày đặc biệt trong tháng: 1日 (ついたち), 2日 (ふつか), 3日 (みっか), 4日 (よっか), 5日 (いつか), 6日 (むいか), 7日 (なのか), 8日 (ようか), 9日 (ここのか), 10日 (とおか), 14日 (じゅうよっか), 20日 (はつか), 24日 (にじゅうよっか).\n• 1): 5/10 ➔ Tháng 5「ごがつ」+ Ngày 10「とおか」=「ごがつとおか」.\n• 2): 3/3 ➔ Tháng 3「さんがつ」+ Ngày 3「みっか」=「さんがつみっか」.\n• 3): 1/4 ➔ Tháng 1「いちがつ」+ Ngày 4「よっか」=「いちがつよっか」.\n• 4): 12/1 ➔ Tháng 12「じゅうにがつ」+ Ngày 1「ついたち」=「じゅうにがつついたち」.\n• 5): 9/5 ➔ Tháng 9「くがつ」+ Ngày 5「いつか」=「くがついつか」.\n• 6): 11/7 ➔ Tháng 11「じゅういちがつ」+ Ngày 7「なのか」=「じゅういちがつなのか」.\n• 7): 7/8 ➔ Tháng 7「しちがつ」+ Ngày 8「ようか」=「しちがつようか」.\n• 8): 10/14 ➔ Tháng 10「じゅうがつ」+ Ngày 14「じゅうよっか」=「じゅうがつじゅうよっか」.\n• 9): 6/2 ➔ Tháng 6「ろくがつ」+ Ngày 2「ふつか」=「ろくがつふつか」.\n• 10): 8/20 ➔ Tháng 8「はちがつ」+ Ngày 20「はつか」=「はちがつはつか」.\n• 11): 2/6 ➔ Tháng 2「にがつ」+ Ngày 6「むいか」=「にがつむいか」.\n• 12): 4/9 ➔ Tháng 4「しがつ」+ Ngày 9「ここのか」=「しがつここのか」.\n• 13): 7/24 ➔ Tháng 7 đọc là「しちがつ」(hoặc なながつ) + Ngày 24 có biến âm đặc biệt là「にじゅうよっか」=「しちがつにじゅうよっか」(hoặc「なながつにじゅうよっか」).\n• 14): 9/24 ➔ Tháng 9 đọc là「くがつ」(không đọc きゅうがつ) + Ngày 24 đọc là「にじゅうよっか」=「くがつにじゅうよっか」."
      },
      {
        "id": "b4_q2",
        "type": "fill",
        "tag": "Điền từ vào bảng",
        "table": {
          "title": "",
          "headers": [],
          "rows": [
            ["1) （____）", "きょう", "5) （____）"],
            ["2) （____）", "今週", "来週"],
            ["先月", "今月", "6) （____）"],
            ["3) （____）", "4) （____）", "来年"]
          ]
        },
        "question": "2.",
        "answers": [
          "きのう",
          "先週 / せんしゅう",
          "去年 / きょねん",
          "今年 / ことし",
          "あした",
          "来月 / らいげつ"
        ],
        "explanation": "• 1): Thời điểm trước「きょう」(hôm nay) là hôm qua ➔「きのう」(kinou).\n• 2): Thời điểm trước「今週」(tuần này) là tuần trước ➔「先週」(せんしゅう - senshuu).\n• 3): Thời điểm trước「今年」(năm nay) là năm ngoái ➔「去年」(きょねん - kyonen).\n• 4): Thời điểm ở giữa「去年」(năm ngoái) và「来年」(năm sau) là năm nay ➔「今年」(ことし - kotoshi).\n• 5): Thời điểm sau「きょう」(hôm nay) là ngày mai ➔「あした」(ashita).\n• 6): Thời điểm sau「今月」(tháng này) là tháng sau ➔「来月」(らいげつ - raigetsu)."
      },
      {
        "id": "b4_q3",
        "type": "fill",
        "tag": "Hoàn thành câu với động từ di chuyển",
        "columns": 2,
        "question": "3. 例：去年 京都へ <u>行きました。</u>\n\n1) 先月 日本へ ＿＿＿＿＿＿＿＿＿＿\n2) きのう 10時にうちへ ＿＿＿＿＿＿＿＿＿＿\n3) 来年の８月に国へ ＿＿＿＿＿＿＿＿＿＿\n4) 先週の土曜日 どこも ＿＿＿＿＿＿＿＿＿＿\n5) あした スーパーへ ＿＿＿＿＿＿＿＿＿＿\n6) おととい 美術館へ ＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "来ました。 / 来ました / きました。 / きました / 行きました。 / 行きました / いきました。 / いきました",
          "帰りました。 / 帰りました / かえりました。 / かえりました",
          "帰ります。 / 帰ります / かえります。 / かえります / 行きます。 / 行きます / いきます。 / いきます",
          "行きませんでした。 / 行きませんでした / いきませんでした。 / いきませんでした",
          "行きます。 / 行きます / いきます。 / いきます",
          "行きました。 / 行きました / いきました。 / いきました"
        ],
        "explanation": "• 例 (Ví dụ):「去年」(năm ngoái) là mốc thời gian quá khứ ➔ Động từ chia thể quá khứ khẳng định:「行きました」(đã đi).\n• 1):「先月」(tháng trước) là quá khứ. Hành động đến Nhật Bản dùng động từ:「来ました」(きました - đã đến) hoặc「行きました」(đã đi).\n• 2):「きのう」(hôm qua) là quá khứ. Hành động trở về nhà dùng động từ:「帰りました」(かえりました - đã về nhà lúc 10 giờ).\n• 3):「来年の８月」(tháng 8 năm sau) là tương lai. Hành động trở về nước dùng thì hiện tại/tương lai:「帰ります」(かえります - sẽ về nước).\n• 4):「先週の土曜日」(thứ Bảy tuần trước) là quá khứ. Cụm từ phủ định hoàn toàn「どこも」(đâu cũng không...) đi kèm động từ quá khứ phủ định:「行きませんでした」(いきませんでした - đã không đi đâu cả).\n• 5):「あした」(ngày mai) là tương lai ➔ Động từ chia thể hiện tại/tương lai khẳng định:「行きます」(いきます - sẽ đi siêu thị).\n• 6):「おととい」(hôm kia) là quá khứ ➔ Động từ chia thể quá khứ khẳng định:「行きました」(いきました - đã đi viện bảo tàng)."
      },
      {
        "id": "b4_q4",
        "type": "fill",
        "tag": "Điền trợ từ thích hợp",
        "question": "4. 例：毎晩（×）何時（に）寝ますか。\n\n1) A：いつ（____）日本（____）来ましたか。\n   B：3月25日（____）来ました。\n\n2) A：日曜日どこ（____）行きましたか。\n   B：どこ（____）行きませんでした。\n\n3) A：先月の25日（____）電車（____）カリナさん（____）うち（____）行きました。\n   B：一人で（____）行きましたか。\n   A：友達（____）行きました。",
        "answers": [
          "× / x / X",
          "へ / に / e / he",
          "に / ni",
          "へ / に / e / he",
          "へも / も / えも / hemo / mo",
          "に / ni",
          "で / de",
          "の / no",
          "へ / に / e / he",
          "× / x / X",
          "と / to"
        ],
        "explanation": "• 例 (Ví dụ):「毎晩」(mỗi tối) là từ chỉ thời gian có tính chu kỳ, lặp lại nên KHÔNG dùng trợ từ「に」(điền「×」).「何時」(mấy giờ) là mốc giờ cụ thể ➔ đi kèm trợ từ「に」.\n• 1):\n  -「いつ」(khi nào) là nghi vấn từ chỉ thời gian không đi kèm con số cụ thể, nên KHÔNG dùng trợ từ「に」(điền「×」).\n  -「日本」(Nhật Bản) là đích đến của hành động di chuyển「来ました」(đã đến) ➔ dùng trợ từ chỉ phương hướng「へ」(hoặc「に」).\n  -「3月25日」(ngày 25 tháng 3) là mốc thời gian có con số cụ thể ngày tháng ➔ bắt buộc dùng trợ từ「に」.\n• 2):\n  -「どこ」(đâu) trong câu hỏi「どこ（へ）行きましたか」chỉ phương hướng di chuyển ➔ dùng trợ từ「へ」(hoặc「に」).\n  -「どこ」kết hợp với động từ thể phủ định hoàn toàn「行きませんでした」(đã không đi đâu cả) ➔ dùng cụm trợ từ「へも」(hoặc「も」).\n• 3):\n  -「先月の25日」(ngày 25 tháng trước) có con số ngày cụ thể「25日」➔ dùng trợ từ thời gian「に」.\n  -「電車」(tàu điện) là phương tiện giao thông di chuyển ➔ dùng trợ từ phương tiện「で」.\n  -「カリナさんのうち」(nhà của Karina) là quan hệ sở hữu/liên kết giữa hai danh từ ➔ dùng trợ từ「の」.\n  -「うち」(nhà) là đích đến của hành động di chuyển「行きました」➔ dùng trợ từ phương hướng「へ」(hoặc「に」).\n  -「一人で」(một mình) bản thân đã là trạng từ chỉ phương thức thực hiện hành động, sau「一人で」KHÔNG dùng thêm bất kỳ trợ từ nào khác ➔ điền「×」.\n  -「友達」(bạn bè) là người cùng thực hiện hành động di chuyển「行きました」➔ dùng trợ từ cùng với「と」."
      },
      {
        "id": "b4_q5",
        "type": "fill",
        "tag": "Điền nghi vấn từ thích hợp",
        "question": "5. 例：これは（ だれ ）のノートですか。…カリナさんのです。\n\n1) きょうは（____）ですか。…火曜日です。\n2) （____）アメリカへ行きますか。…来月行きます。\n3) （____）と行きますか。…友達と行きます。\n4) 神戸まで（____）ですか。…570円です。\n5) （____）で行きますか。…電車で行きます。\n6) 誕生日は（____）（____）ですか。…9月15日です。\n7) あした（____）へ行きますか。…どこも行きません。",
        "answers": [
          "何曜日 / なんようび",
          "いつ / 何月 / なんがつ",
          "だれ / どなた / 誰",
          "いくら",
          "何 / なん / なに",
          "何月 / なんがつ",
          "何日 / なんにち",
          "どこ / どちら"
        ],
        "explanation": "• 例 (Ví dụ): Câu trả lời nêu người sở hữu「カリナさんのです」(Của chị Karina) ➔ Câu hỏi về người dùng nghi vấn từ「だれ」(hoặc「どなた」).\n• 1): Câu trả lời nêu thứ trong tuần「火曜日です」(là thứ Ba) ➔ Câu hỏi thứ dùng nghi vấn từ「何曜日」(なんようび: thứ mấy).\n• 2): Câu trả lời nêu mốc thời gian「来月行きます」(tháng sau sẽ đi) ➔ Câu hỏi về thời điểm (khi nào) dùng nghi vấn từ「いつ」(khi nào).\n• 3): Câu trả lời nêu người cùng đi「友達と行きます」(đi cùng với bạn) ➔ Câu hỏi về người cùng thực hiện hành động dùng nghi vấn từ「だれ」(hoặc「どなた」: đi với ai).\n• 4): Câu trả lời nêu số tiền cước phí「570円です」(570 Yên) ➔ Câu hỏi về giá tiền/chi phí dùng nghi vấn từ「いくら」(bao nhiêu tiền).\n• 5): Câu trả lời nêu phương tiện giao thông「電車で行きます」(đi bằng tàu điện) ➔ Câu hỏi về phương tiện đi lại dùng nghi vấn từ「何」(đọc là「なん」: đi bằng gì).\n• 6): Câu trả lời nêu đầy đủ tháng và ngày「9月15日です」(ngày 15 tháng 9) ➔ Hai ô trống lần lượt hỏi tháng「何月」(なんがつ: tháng mấy) và hỏi ngày「何日」(なんにち: ngày mấy).\n• 7): Câu trả lời nêu phủ định hoàn toàn địa điểm đến「どこも行きません」(đâu cũng không đi) ➔ Câu hỏi về nơi chốn/địa điểm di chuyển dùng nghi vấn từ「どこ」(hoặc「どちら」: đi đâu)."
      },
      {
        "id": "b4_q6",
        "type": "fill",
        "tag": "Hoàn thành câu dựa vào câu có sẵn",
        "question": "6. 例：おととい／新幹線／京都／行きます…おととい 新幹線で 京都へ 行きました。\n\n1) わたし／あした／佐藤さん／大阪／行きます\n＿＿＿＿＿＿＿＿＿＿\n\n2) きのうの晩／駅／歩いて／うち／帰ります\n＿＿＿＿＿＿＿＿＿＿\n\n3) 先週／土曜日／自転車／彼女のうち／行きます\n＿＿＿＿＿＿＿＿＿＿\n\n4) わたし／去年／家族／日本／来ます\n＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "わたしは あした 佐藤さんと 大阪へ 行きます。 / わたしは あした 佐藤さんと 大阪に行きます。 / わたしはあした佐藤さんと大阪へ行きます。 / あした 佐藤さんと 大阪へ 行きます。 / あした佐藤さんと大阪へ行きます。 / わたしは あした さとうさんと おおさかへ いきます。 / あした さとうさんと おおさかへ いきます。",
          "きのうの晩 駅から 歩いて うちへ 帰りました。 / きのうの晩 駅から 歩いて うちに 帰りました。 / きのうのばん えきから あるいて うちへ かえりました。 / きのうの晩 駅から 歩いて 帰りました。",
          "先週の土曜日 自転車で 彼女のうちへ 行きました。 / 先週の土曜日に 自転車で 彼女のうちへ 行きました。 / 先週 土曜日 自転車で 彼女のうちへ 行きました。 / せんしゅうのどようび じてんしゃで かのじょのうちへ いきました。 / 先週の土曜日 自転車で 彼女のうちに行きました。",
          "わたしは 去年 家族と 日本へ 来ました。 / わたしは 去年 家族と 日本に来ました。 / 去年 家族と 日本へ 来ました。 / 去年 家族と 日本に来ました。 / わたしは きょねん かぞくと にほんへ きました。 / きょねん かぞくと にほんへ きました。"
        ],
        "explanation": "• 例 (Ví dụ):「おととい」(hôm kia) là quá khứ ➔ Động từ chia quá khứ「行きました」. Phương tiện「新幹線」đi với trợ từ「で」, điểm đến「京都」đi với trợ từ「へ」:「おととい 新幹線で 京都へ 行きました。」.\n• 1):「あした」(ngày mai) là tương lai ➔ Động từ giữ thì hiện tại/tương lai「行きます」. Người cùng đi「佐藤さん」+ trợ từ「と」, điểm đến「大阪」+ trợ từ「へ」(hoặc「に」):「わたしは あした 佐藤さんと 大阪へ 行きます。」.\n• 2):「きのうの晩」(tối qua) là quá khứ ➔ Động từ chia quá khứ「帰りました」. Xuất phát từ nhà ga「駅から」,「歩いて」(đi bộ) không thêm trợ từ「で」, điểm đến「うちへ」(hoặc「うちに」):「きのうの晩 駅から 歩いて うちへ 帰りました。」.\n• 3):「先週の土曜日」(thứ Bảy tuần trước) là quá khứ ➔ Động từ chia quá khứ「行きました」. Phương tiện「自転車で」, điểm đến「彼女のうちへ」(hoặc「に」):「先週の土曜日 自転車で 彼女のうちへ 行きました。」.\n• 4):「去年」(năm ngoái) là quá khứ ➔ Động từ chia quá khứ「来ました」. Người cùng đi「家族と」, điểm đến「日本へ」(hoặc「に」):「わたしは 去年 家族と 日本へ 来ました。」."
      },
      {
        "id": "b4_q7",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "7. 1) 誕生日はいつですか。\n＿＿＿＿＿＿＿＿＿＿\n\n2) いつ日本へ来ましたか。\n＿＿＿＿＿＿＿＿＿＿\n\n3) きょうは何月何日ですか。\n＿＿＿＿＿＿＿＿＿＿\n\n4) 次の日曜日どこへ行きますか。\n＿＿＿＿＿＿＿＿＿＿\n\n5) いつ国へ帰りますか。\n＿＿＿＿＿＿＿＿＿＿\n\n6) きのう郵便局へ行きましたか。\n＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "6月15日です。",
          "去年の9月に来ました。",
          "10月26日です。",
          "どこも行きません。",
          "来年の8月に帰ります。",
          "いいえ、行きませんでした。"
        ],
        "explanation": "• Dạng câu hỏi mở hỏi về bản thân bạn để tự luyện tập đối thoại (tự đối chiếu với câu trả lời mẫu sau khi nộp bài):\n• 1):「誕生日はいつですか」(Sinh nhật của bạn là khi nào?) ➔ Trả lời bằng tháng và ngày sinh:「[Số tháng]月 [Số ngày]日です」(Ví dụ: 6月15日です、10月20日です...).\n• 2):「いつ日本へ来ましたか」(Bạn đã đến Nhật Bản khi nào?) ➔ Trả lời mốc thời gian đã đến Nhật:「[Mốc thời gian] に来ました」(Ví dụ: 去年の9月に来ました、先月来ました...).\n• 3):「きょうは何月何日ですか」(Hôm nay là ngày mấy tháng mấy?) ➔ Trả lời ngày tháng hiện tại:「[Số tháng]月 [Số ngày]日です」(Ví dụ: 10月26日です...).\n• 4):「次の日曜日どこへ行きますか」(Chủ Nhật tới bạn sẽ đi đâu?) ➔ Trả lời địa điểm sẽ đi hoặc phủ định:「[Địa điểm] へ行きます」hoặc「どこも行きません」(Ví dụ: 京都へ行きます、どこも行きません...).\n• 5):「いつ国へ帰りますか」(Khi nào bạn sẽ về nước?) ➔ Trả lời thời điểm dự định về nước:「[Mốc thời gian] に帰ります」(Ví dụ: 来年の8月に帰ります、再来年帰ります...).\n• 6):「きのう郵便局へ行きましたか」(Hôm qua bạn có đi bưu điện không?) ➔ Trả lời xác nhận quá khứ:「はい、行きました。」hoặc「いいえ、行きませんでした。」."
      }
    ]
  },
  "bai_5": {
    "title": "Bài 5",
    "completed": true,
    "questions": [
      {
        "id": "b5_q1",
        "type": "fill",
        "tag": "Điền trợ từ và động từ thích hợp",
        "columns": 2,
        "question": "1. ［ 買います　見ます　聞きます　飲みます　撮ります ］\n［ 会います　勉強します　吸います　します ］\n\n例：ワイン（ を ）<u>買います。</u>\n\n1) たばこ（____）＿＿＿＿＿＿＿＿＿＿\n2) ビール（____）＿＿＿＿＿＿＿＿＿＿\n3) 映画（____）＿＿＿＿＿＿＿＿＿＿\n4) 日本語（____）＿＿＿＿＿＿＿＿＿＿\n5) ＣＤ（____）＿＿＿＿＿＿＿＿＿＿\n6) テニス（____）＿＿＿＿＿＿＿＿＿＿\n7) 写真（____）＿＿＿＿＿＿＿＿＿＿\n8) 友達（____）＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "を / o / wo",
          "吸います。 / 吸います / すいます。 / すいます",
          "を / o / wo",
          "飲みます。 / 飲みます / のみます。 / のみます",
          "を / o / wo",
          "見ます。 / 見ます / みます。 / みます",
          "を / o / wo",
          "勉強します。 / 勉強します / べんきょうします。 / べんきょうします",
          "を / o / wo",
          "聞きます。 / 聞きます / ききます。 / ききます",
          "を / o / wo",
          "します。 / します",
          "を / o / wo",
          "撮ります。 / 撮ります / とります。 / とります",
          "に / ni",
          "会います。 / 会います / あいます。 / あいます"
        ],
        "explanation": "• 例 (Ví dụ): Rượu vang「ワイン」➔ đi với động từ mua「買います」và trợ từ tân ngữ「を」:「ワインを買います」(mua rượu vang).\n• 1): Thuốc lá「たばこ」➔ đi với động từ hút「吸います」(すいます) và trợ từ tân ngữ「を」:「たばこを吸います」(hút thuốc lá).\n• 2): Bia「ビール」➔ đi với động từ uống「飲みます」(のみます) và trợ từ tân ngữ「を」:「ビールを飲みます」(uống bia).\n• 3): Phim ảnh「映画」➔ đi với động từ xem「見ます」(みます) và trợ từ tân ngữ「を」:「映画を見ます」(xem phim).\n• 4): Tiếng Nhật「日本語」➔ đi với động từ học「勉強します」(べんきょうします) và trợ từ tân ngữ「を」:「日本語を勉強します」(học tiếng Nhật).\n• 5): Đĩa CD「ＣＤ」➔ đi với động từ nghe「聞きます」(ききます) và trợ từ tân ngữ「を」:「ＣＤを聞きます」(nghe đĩa CD).\n• 6): Quần vợt/Tennis「テニス」➔ đi với động từ chơi thể thao「します」và trợ từ tân ngữ「を」:「テニスをします」(chơi tennis).\n• 7): Bức ảnh「写真」➔ đi với động từ chụp ảnh「撮ります」(とります) và trợ từ tân ngữ「を」:「写真を撮ります」(chụp ảnh).\n• 8): Bạn bè「友達」➔ đi với động từ gặp gỡ「会います」(あいます). ĐẶC BIỆT LƯU Ý: Hành động gặp ai đó luôn đi kèm trợ từ「に」, KHÔNG dùng trợ từ「を」:「友達に会います」(gặp bạn bè)."
      },
      {
        "id": "b5_q2",
        "type": "fill",
        "tag": "Điền trợ từ thích hợp",
        "question": "2. 例：毎朝７時（ に ）起きます。\n\n1) わたしは毎朝パン（____）卵（____）食べます。\n\n2) どこ（____）お花見（____）しますか。…大学（____）庭です。\n\n3) けさ何（____）食べませんでした。\n\n4) きのう（____）午後うち（____）手紙（____）書きました。\n\n5) きょう３時（____）教室（____）日本語（____）先生（____）会います。\n\n6) きのう自転車（____）スーパー（____）行きました。スーパー（____）牛乳（____）果物（____）買いました。",
        "answers": [
          "と / to",
          "を / o / wo",
          "で / de",
          "を / o / wo",
          "の / no",
          "も / mo",
          "の / no / × / x / X",
          "で / de",
          "を / o / wo",
          "に / ni",
          "で / de",
          "の / no",
          "に / ni",
          "で / de",
          "へ / に / e / he",
          "で / de",
          "と / to",
          "を / o / wo"
        ],
        "explanation": "• 例 (Ví dụ): Mốc giờ cụ thể「７時」đi với trợ từ「に」:「７時に起きます」(thức dậy lúc 7 giờ).\n• 1): Trợ từ「と」liên kết/liệt kê danh từ đồ ăn「パン と 卵」(bánh mì và trứng). Trợ từ「を」chỉ tân ngữ bị tác động:「パンと卵 を 食べます」(ăn bánh mì và trứng).\n• 2): Trợ từ「で」chỉ địa điểm diễn ra hành động「どこ で」(ở đâu).「お花見 を します」(ngắm hoa). Trợ từ「の」nối 2 danh từ sở thuộc:「大学 の 庭」(vườn của trường đại học).\n• 3): Từ để hỏi「何」(cái gì) đi với trợ từ「も」kết hợp động từ thể phủ định hoàn toàn:「何 も 食べませんでした」(sáng nay đã không ăn bất cứ thứ gì).\n• 4):「きのう の 午後」(chiều hôm qua) dùng「の」(hoặc có thể không cần trợ từ「×」). Trợ từ「で」chỉ nơi chốn diễn ra hành động:「うち で」(tại nhà). Trợ từ「を」chỉ tân ngữ:「手紙 を 書きました」(viết thư).\n• 5): Mốc giờ「３時 に」(vào lúc 3 giờ). Địa điểm cuộc gặp「教室 で」(tại phòng học). Trợ từ「の」nối chuyên môn và chức danh:「日本語 の 先生」(giáo viên tiếng Nhật). Động từ「会います」(gặp gỡ) bắt buộc đi kèm trợ từ「に」đối với người được gặp:「先生 に 会います」(gặp thầy giáo).\n• 6): Phương tiện di chuyển xe đạp đi với trợ từ「で」:「自転車 で」. Đích đến của「行きました」dùng trợ từ chỉ phương hướng「へ」(hoặc「に」):「スーパー へ」. Nơi diễn ra hành động mua sắm dùng trợ từ「で」:「スーパー で」(tại siêu thị). Liệt kê sữa VÀ hoa quả dùng trợ từ「と」:「牛乳 と 果物」, tân ngữ của mua đi với trợ từ「を」:「果物 を 買いました」."
      },
      {
        "id": "b5_q3",
        "type": "fill",
        "tag": "Hoàn thành câu dựa vào câu có sẵn",
        "question": "3. 例：きのう手紙を書きましたか。…いいえ、<u>書きませんでした。</u>\n\n1) たばこを吸いますか。\n…いいえ、＿＿＿＿＿＿＿＿＿＿\n\n2) きのうの晩勉強しましたか。\n…いいえ、＿＿＿＿＿＿＿＿＿＿\n\n3) 土曜日の午後＿＿＿＿＿＿＿＿＿＿\n…宿題をしました。それからサッカーをしました。\n\n4) いっしょにテニスをしませんか。\n…ええ、＿＿＿＿＿＿＿＿＿＿\n\n5) ちょっと＿＿＿＿＿＿＿＿＿＿\n…ええ、休みましょう。",
        "answers": [
          "吸いません。 / 吸いません / すいません。 / すいません",
          "勉強しませんでした。 / 勉強しませんでした / べんきょうしませんでした。 / べんきょうしませんでした",
          "何をしましたか。 / 何をしましたか / 何を しましたか。 / 何を しましたか / なにをしましたか。 / なにをしましたか",
          "しましょう。 / しましょう / テニスをしましょう。 / テニスをしましょう",
          "休みませんか。 / 休みませんか / やすみませんか。 / やすみませんか / 休みましょう。 / 休みましょう / やすみましょう。 / やすみましょう"
        ],
        "explanation": "• 例 (Ví dụ): Câu hỏi thời quá khứ「書きましたか」➔ Trả lời phủ định quá khứ:「いいえ、書きませんでした。」(Không, tôi đã không viết).\n• 1): Câu hỏi thời hiện tại/thói quen「吸いますか」(Bạn có hút thuốc không?) ➔ Trả lời phủ định thời hiện tại:「いいえ、吸いません。」(Không, tôi không hút).\n• 2): Câu hỏi về hành động trong quá khứ「きのうの晩勉強しましたか」(Tối qua bạn đã học bài không?) ➔ Trả lời phủ định thời quá khứ:「いいえ、勉強しませんでした。」(Không, tôi đã không học bài).\n• 3): Câu trả lời nêu các hành động đã làm trong quá khứ「宿題をしました。それからサッカーをしました。」(Tôi đã làm bài tập. Sau đó đã đá bóng) ➔ Câu hỏi hành động đã làm dùng:「何をしましたか。」(Bạn đã làm gì?).\n• 4): Lời mời/rủ rê「～ませんか」(Cùng chơi tennis với tôi không?) ➔ Trả lời đồng ý tán thành bằng mẫu「～ましょう」:「ええ、しましょう。」(Vâng, chúng ta cùng chơi nhé / Vâng, được đấy).\n• 5): Câu trả lời đồng ý「ええ、休みましょう。」(Vâng, cùng nghỉ thôi) ➔ Người nói trước đưa ra lời rủ rê, đề xuất:「ちょっと 休みませんか。」(Chúng ta cùng nghỉ một chút không?)."
      },
      {
        "id": "b5_q4",
        "type": "fill",
        "tag": "Điền trợ từ và động từ thích hợp",
        "question": "4. ［ Gợi ý động từ: 飲みます　食べます　買います　読みます　見ます ］\n例：きのう電車（ で ）会社（ へ ）<u>行きました。</u>\n\n1) きのうの午後友達（____）レストラン（____）コーヒー（____）＿＿＿＿＿＿＿＿＿＿\n2) 毎日12時（____）食堂（____）昼ごはん（____）＿＿＿＿＿＿＿＿＿＿\n3) きのうデパート（____）ネクタイ（____）＿＿＿＿＿＿＿＿＿＿\n4) 毎朝ロビー（____）新聞（____）＿＿＿＿＿＿＿＿＿＿\n5) 毎晩部屋（____）８時（____）９時（____）テレビ（____）＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "と / to",
          "で / de",
          "を / o / wo",
          "飲みました。 / 飲みました / のみました。 / のみました",
          "に / ni",
          "で / de",
          "を / o / wo",
          "食べます。 / 食べます / たべます。 / たべます",
          "で / de",
          "を / o / wo",
          "買いました。 / 買いました / かいました。 / かいました",
          "で / de",
          "を / o / wo",
          "読みます。 / 読みます / よみます。 / よみます",
          "で / de",
          "から / kara",
          "まで / made",
          "を / o / wo",
          "見ます。 / 見ます / みます。 / みます"
        ],
        "explanation": "• 例 (Ví dụ): Mốc thời gian「きのう」(hôm qua) là quá khứ ➔ Động từ chia quá khứ「行きました」. Phương tiện「電車 で」, hướng đi「会社 へ」:「きのう電車で会社へ行きました。」.\n• 1):「きのうの午後」(chiều hôm qua) là quá khứ ➔ Động từ chia thì quá khứ:「飲みました」(đã uống). Người cùng đi「友達 と」, nơi chốn diễn ra hành động「レストラン で」, tân ngữ「コーヒー を」.\n• 2):「毎日12時」(mỗi ngày lúc 12 giờ) là thói quen hiện tại ➔ Động từ chia thì hiện tại:「食べます」(ăn). Mốc giờ「12時 に」, địa điểm ăn「食堂 で」, tân ngữ đồ ăn「昼ごはん を」.\n• 3):「きのう」(hôm qua) là quá khứ ➔ Động từ chia thì quá khứ:「買いました」(đã mua). Nơi chốn mua sắm「デパート で」, tân ngữ món hàng「ネクタイ を」.\n• 4):「毎朝」(mỗi sáng) là thói quen hiện tại ➔ Động từ chia thì hiện tại:「読みます」(đọc). Nơi chốn đọc báo「ロビー で」, tân ngữ「新聞 を」.\n• 5):「毎晩」(mỗi tối) là thói quen hiện tại ➔ Động từ chia thì hiện tại:「見ます」(xem). Nơi chốn xem tivi「部屋 で」, khoảng thời gian từ mấy giờ đến mấy giờ「８時 から ９時 まで」, tân ngữ「テレビ を」."
      },
      {
        "id": "b5_q5",
        "type": "fill",
        "tag": "Điền nghi vấn từ thích hợp",
        "question": "5. ［ だれ　いつ　なん　なに　どこ ］\n例：A：あれは（ なん ）ですか。…B：美術館です。\n\n1) A：（____）で新聞を読みますか。\n   B：会社で読みます。\n\n2) A：昼休みに（____）をしますか。\n   B：テニスをします。\n\n3) A：きのう（____）時にうちへ帰りましたか。\n   B：８時に帰りました。\n\n4) A：（____）で京都へ行きましたか。\n   B：タクシーで行きました。\n\n5) A：（____）テレビを見ますか。\n   B：夜見ます。\n   A：（____）と見ますか。\n   B：家族と見ます。",
        "answers": [
          "どこ",
          "なに / 何",
          "なん / 何",
          "なん / なに / 何",
          "いつ",
          "だれ / 誰"
        ],
        "explanation": "• 例 (Ví dụ): B trả lời về tên công trình/sự vật「美術館です」(Bảo tàng mỹ thuật) ➔ Câu hỏi về sự vật kết hợp với「ですか」dùng nghi vấn từ「なん」(đọc là nan).\n• 1): B trả lời địa điểm nơi diễn ra hành động「会社で読みます」(Đọc ở công ty) ➔ Câu hỏi nơi chốn dùng nghi vấn từ「どこ」(ở đâu):「どこ で新聞を読みますか」.\n• 2): B trả lời hoạt động「テニスをします」(Chơi tennis). Đứng trước trợ từ「を」, chữ 何 đọc là「なに」:「なに をしますか」(Làm cái gì?).\n• 3): B trả lời mốc giờ「８時に帰りました」(Về lúc 8 giờ). Đứng trước đơn vị đo thời gian「時」(giờ), chữ 何 đọc là「なん」:「なん 時に」(mấy giờ).\n• 4): B trả lời phương tiện giao thông「タクシーで行きました」(Đi bằng taxi) ➔ Câu hỏi phương tiện đi lại dùng nghi vấn từ「なん」(hoặc「なに」):「なん で行きましたか」(Đi bằng gì?).\n• 5):\n  - Lượt 1: B trả lời mốc thời gian「夜見ます」(Xem vào buổi tối) ➔ Câu hỏi thời điểm dùng nghi vấn từ「いつ」(khi nào).\n  - Lượt 2: B trả lời người cùng xem「家族と見ます」(Xem cùng với gia đình) ➔ Câu hỏi người cùng làm việc gì đi với trợ từ「と」dùng nghi vấn từ「だれ」(hoặc「誰」: xem với ai)."
      },
      {
        "id": "b5_q6",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "6. 1) けさ新聞を読みましたか。\n＿＿＿＿＿＿＿＿＿＿\n\n2) いつも何時に朝ごはんを食べますか。\n＿＿＿＿＿＿＿＿＿＿\n\n3) お酒を飲みますか。\n＿＿＿＿＿＿＿＿＿＿\n\n4) 国で日本語を勉強しましたか。\n＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "はい、読みました。",
          "7時に食べます。",
          "はい、飲みます。",
          "はい、勉強しました。"
        ],
        "explanation": "• Dạng câu hỏi mở hỏi về thông tin bản thân bạn để tự luyện tập đối thoại (tự đối chiếu với câu trả lời mẫu sau khi nộp bài):\n• 1):「けさ新聞を読みましたか」(Sáng nay bạn có đọc báo không?) ➔ Trả lời xác nhận hành động trong quá khứ:「はい、読みました。」(Vâng, tôi đã đọc) hoặc「いいえ、読みませんでした。」(Không, tôi đã không đọc).\n• 2):「いつも何時に朝ごはんを食べますか」(Bạn thường ăn sáng lúc mấy giờ?) ➔ Trả lời mốc giờ ăn sáng:「[Số giờ] 時に食べます。」(Ví dụ: 7時に食べます、7時半に食べます...).\n• 3):「お酒を飲みますか」(Bạn có uống rượu không?) ➔ Trả lời thói quen hiện tại:「はい、飲みます。」(Vâng, tôi có uống) hoặc「いいえ、飲みません。」(Không, tôi không uống).\n• 4):「国で日本語を勉強しましたか」(Bạn đã học tiếng Nhật ở trong nước phải không?) ➔ Trả lời xác nhận quá khứ:「はい、勉強しました。」(Vâng, tôi đã học) hoặc「いいえ、勉強しませんでした。」(Không, tôi đã không học)."
      }
    ]
  },
  "bai_6": {
    "title": "Bài 6",
    "completed": true,
    "questions": [
      {
        "id": "b6_q1",
        "type": "fill",
        "tag": "Điền trợ từ thích hợp",
        "question": "1. 例：ミラーさんは毎朝コーヒー（ を ）飲みます。\n\n1) 日本語（____）レポート（____）書きますか、英語（____）書きますか。\n2) わたしは誕生日（____）友達（____）プレゼント（____）もらいました。\n3) 何（____）この魚（____）切りますか。\n4) わたしは家族（____）日本（____）写真（____）送りました。\n5) 「ありがとう」（____）英語（____）何ですか。\n6) わたしは田中先生（____）日本語（____）習いました。",
        "answers": [
          "で / de",
          "を / o / wo",
          "で / de",
          "に / ni",
          "に / から / ni / kara",
          "を / o / wo",
          "で / de",
          "を / o / wo",
          "に / ni",
          "の / no",
          "を / o / wo",
          "は / wa / ha",
          "で / de",
          "に / から / ni / kara",
          "を / o / wo"
        ],
        "explanation": "• 例 (Ví dụ): Trợ từ「を」xác định tân ngữ chịu tác động của hành động:「コーヒー を 飲みます」(uống cà phê).\n• 1): Phương tiện ngôn ngữ đi với trợ từ「で」:「日本語 で」(bằng tiếng Nhật),「英語 で」(bằng tiếng Anh). Tân ngữ báo cáo đi với「を」:「レポート を 書きます」.\n• 2): Mốc thời gian cụ thể「誕生日 に」(vào ngày sinh nhật). Người tặng quà đi với trợ từ「に」(hoặc「から」: nhận từ ai):「友達 に / から」(từ bạn bè). Tân ngữ món quà:「プレゼント を もらいました」.\n• 3): Công cụ/phương tiện cắt dùng nghi vấn từ「何 で」(bằng cái gì). Tân ngữ con cá đi với trợ từ「を」:「この魚 を 切ります」.\n• 4): Đối tượng tiếp nhận hành động gửi đi với trợ từ「に」:「家族 に」(cho gia đình). Nối hai danh từ sở thuộc dùng「の」:「日本 の 写真」(ảnh về Nhật Bản). Tân ngữ bức ảnh đi với trợ từ「を」:「写真 を 送りました」.\n• 5): Từ ngữ được đưa ra làm chủ đề câu đi với trợ từ「は」:「ありがとう は」. Phương tiện ngôn ngữ đi với trợ từ「で」:「英語 で」(bằng tiếng Anh).\n• 6): Người truyền thụ kiến thức / người mà mình học hỏi đi với trợ từ「に」(hoặc「から」):「田中先生 に / から」(từ thầy Tanaka). Tân ngữ môn học:「日本語 を 習いました」(học tiếng Nhật)."
      },
      {
        "id": "b6_q2",
        "type": "fill",
        "tag": "Hoàn thành câu dựa vào câu có sẵn",
        "question": "2. 例１：スプーンで<u>ごはんを食べます。</u>\n例２：<u>はしで</u>ごはんを食べます。\n\n1) はさみで ＿＿＿＿＿＿＿＿＿＿\n2) 日本語で ＿＿＿＿＿＿＿＿＿＿\n3) ＿＿＿＿＿＿＿＿＿＿ で肉を切ります。\n4) ＿＿＿＿＿＿＿＿＿＿ でメールを送ります。",
        "answers": [
          "紙を切ります。 / 紙を切ります / かみをきります。 / かみをきります / 切ります。 / 切ります",
          "レポートを書きます。 / レポートを書きます / 手紙を書きます。 / 手紙を書きます / てがみをかきます。 / てがみをかきます / レポートをかきます。 / レポートをかきます / 話します。 / はなします。",
          "ナイフ / ないふ / ナイフで / 包丁 / ほうちょう",
          "パソコン / ぱそこん / パソコンで / コンピューター / ケータイ / スマホ"
        ],
        "explanation": "• 例1 (Ví dụ 1): Cho trước công cụ「スプーンで」(bằng thìa) ➔ Điền hành động tương ứng:「ごはんを食べます。」(ăn cơm).\n• 例2 (Ví dụ 2): Cho trước hành động「ごはんを食べます。」➔ Điền công cụ tương ứng:「はしで」(bằng đũa).\n• 1): Cho trước công cụ kéo「はさみで」(bằng kéo) ➔ Hành động tương ứng là cắt giấy:「紙を切ります。」(cắt giấy) hoặc「切ります。」.\n• 2): Cho trước phương tiện ngôn ngữ「日本語で」(bằng tiếng Nhật) ➔ Hành động tương ứng là viết báo cáo/thư từ:「レポートを書きます。」(viết báo cáo) hoặc「手紙を書きます。」(viết thư).\n• 3): Cho trước hành động cắt thịt「で肉を切ります」➔ Công cụ cắt thịt là con dao:「ナイフ」(hoặc「ナイフで」).\n• 4): Cho trước hành động gửi thư điện tử「でメールを送ります」➔ Công cụ gửi email là máy tính/điện thoại:「パソコン」(hoặc「パソコンで」/「コンピューター」/「スマホ」)."
      },
      {
        "id": "b6_q3",
        "type": "fill",
        "tag": "Hoàn thành câu dựa vào câu có sẵn",
        "question": "3. 例：サントスさんはマリアさんに花をあげました。\n   マリアさんは<u>サントスさんに花をもらいました。</u>\n\n1) 山田さんはタワポンさんに日本語を教えました。\n   タワポンさんは ＿＿＿＿＿＿＿＿＿＿\n2) ミラーさんはワンさんにお金を借りました。\n   ワンさんは ＿＿＿＿＿＿＿＿＿＿\n3) 松本さんはマイクさんにネクタイをもらいました。\n   マイクさんは ＿＿＿＿＿＿＿＿＿＿\n4) カリナさんはイーさんにCDを貸しました。\n   イーさんは ＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "山田さんに日本語を習いました。 / 山田さんに日本語を習いました / 山田さんから日本語を習いました。 / 山田さんから日本語を習いました / 山田さんに日本語をならいました。 / 山田さんに日本語をならいました / やまださんににほんごをならいました。 / やまださんににほんごをならいました",
          "ミラーさんにお金を貸しました。 / ミラーさんにお金を貸しました / ミラーさんにおかねをかしました。 / ミラーさんにおかねをかしました / みらーさんにおかねをかしました。 / みらーさんにおかねをかしました",
          "松本さんにネクタイをあげました。 / 松本さんにネクタイをあげました / まつもとさんにネクタイをあげました。 / まつもとさんにネクタイをあげました / まつもとさんにねくたいをあげました。 / まつもとさんにねくたいをあげました",
          "カリナさんにCDを借りました。 / カリナさんにCDを借りました / カリナさんからCDを借りました。 / カリナさんからCDを借りました / カリナさんにCDをかりました。 / カリナさんにCDをかりました / かりなさんにCDをかりました。 / かりなさんにCDをかりました"
        ],
        "explanation": "• Cặp động từ đối ứng cho và nhận / dạy và học / cho mượn và mượn:\n  - あげました (cho/tặng) ⟷ もらいました (nhận)\n  - 教えました (dạy) ⟷ 習いました (học từ ai)\n  - 貸しました (cho mượn) ⟷ 借りました (mượn từ ai)\n• 例 (Ví dụ): Anh Santos tặng hoa cho chị Maria「サントスさんはマリアさんに花をあげました」➔ Chị Maria nhận hoa từ anh Santos「マリアさんはサントスさんに花をもらいました。」.\n• 1): Anh Yamada dạy tiếng Nhật cho anh Thawaphon「山田さんはタワポンさんに日本語を教えました」➔ Anh Thawaphon học tiếng Nhật từ anh Yamada:「山田さんに日本語を習いました。」(Có thể dùng trợ từ「に」hoặc「から」).\n• 2): Anh Miller mượn tiền của anh Wang「ミラーさんはワンさんにお金を借りました」➔ Anh Wang cho anh Miller mượn tiền:「ミラーさんにお金を貸しました。」.\n• 3): Anh Matsumoto nhận cà vạt từ anh Mike「松本さんはマイクさんにネクタイをもらいました」➔ Anh Mike tặng cà vạt cho anh Matsumoto:「松本さんにネクタイをあげました。」.\n• 4): Chị Karina cho anh Lee mượn đĩa CD「カリナさんはイーさんにCDを貸しました」➔ Anh Lee mượn đĩa CD từ chị Karina:「カリナさんにCDを借りました。」(Có thể dùng trợ từ「に」hoặc「から」)."
      },
      {
        "id": "b6_q4",
        "type": "fill",
        "tag": "Điền nghi vấn từ thích hợp",
        "question": "4. 例：〔だれ〕にその時計をもらいましたか。…父にもらいました。\n\n1) イーさんは（____）でごはんを食べますか。…はしとスプーンで食べます。\n2) （____）で日本語を習いましたか。…中国の大学で習いました。\n3) （____）に年賀状を書きましたか。…先生と友達に書きました。\n4) ミラーさんは（____）にお金を借りましたか。…松本さんに借りました。\n5) （____）レポートを送りましたか。…きのうの夜送りました。\n6) これは日本語で（____）ですか。…「ホッチキス」です。",
        "answers": [
          "何 / なん",
          "どこ",
          "だれ",
          "だれ",
          "いつ",
          "何 / なん"
        ],
        "explanation": "• 例 (Ví dụ): Câu trả lời「父にもらいました」(nhận từ bố) là đối tượng người cho/tặng ➔ Câu hỏi về người dùng nghi vấn từ「だれ」.\n• 1): Câu trả lời「はしとスプーンで食べます」(ăn bằng đũa và thìa) là công cụ/phương tiện ➔ Từ để hỏi phương tiện/công cụ dùng「何」(なん: bằng cái gì).\n• 2): Câu trả lời「中国の大学で習いました」(học ở trường đại học Trung Quốc) là nơi chốn diễn ra hành động ➔ Câu hỏi nơi chốn dùng nghi vấn từ「どこ」.\n• 3): Câu trả lời「先生と友達に書きました」(viết cho thầy cô và bạn bè) là đối tượng tiếp nhận ➔ Câu hỏi về người dùng nghi vấn từ「だれ」.\n• 4): Câu trả lời「松本さんに借りました」(mượn của anh Matsumoto) là người cho mượn ➔ Câu hỏi về người dùng nghi vấn từ「だれ」.\n• 5): Câu trả lời「きのうの夜送りました」(gửi vào tối qua) là thời điểm không có con số cụ thể ➔ Câu hỏi về thời gian dùng nghi vấn từ「いつ」(khi nào / bao giờ).\n• 6): Câu trả lời「「ホッチキス」です」(là cái dập ghim) là tên gọi/đồ vật ➔ Câu hỏi cách gọi/tên vật dùng nghi vấn từ「何」(なん: cái gì)."
      },
      {
        "id": "b6_q5",
        "type": "fill",
        "tag": "Hoàn thành câu dựa vào câu có sẵn",
        "question": "5. 例：もう昼ごはんを食べましたか。…はい、<u>もう食べました。</u>\n                                …いいえ、<u>まだです。これから食べます。</u>\n\n1) もう荷物を送りましたか。\n   …はい、＿＿＿＿＿＿＿＿＿＿\n2) もう新幹線の切符を買いましたか。\n   …いいえ、＿＿＿＿＿＿＿＿＿＿\n3) もう年賀状を書きましたか。\n   …はい、＿＿＿＿＿＿＿＿＿＿\n4) もう宿題をしましたか。\n   …いいえ、＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "もう送りました。 / もう送りました / もうおくりました。 / もうおくりました / 送りました。 / 送りました",
          "まだです。これから買います。 / まだです。これから買います / まだです。これからかいます。 / まだです。これからかいます / まだです。 / まだです",
          "もう書きました。 / もう書きました / もうかきました。 / もうかきました / 書きました。 / 書きました",
          "まだです。これからします。 / まだです。これからします / まだです。 / まだです"
        ],
        "explanation": "• Cấu trúc câu hỏi hoàn thành hành động:「もう V-ましたか」(Đã làm V chưa?):\n  - Trả lời khẳng định:「はい、もう V-ました。」(Vâng, tôi đã làm rồi.)\n  - Trả lời phủ định:「いいえ、まだです。これから V-ます。」(Chưa, tôi chưa làm. Từ bây giờ tôi sẽ làm.)\n• 1): Khẳng định đã gửi hành lý:「はい、もう送りました。」(Vâng, tôi đã gửi rồi).\n• 2): Phủ định chưa mua vé tàu Shinkansen:「いいえ、まだです。これから買います。」(Chưa, tôi chưa mua. Từ bây giờ tôi sẽ đi mua).\n• 3): Khẳng định đã viết thiệp chúc Tết:「はい、もう書きました。」(Vâng, tôi đã viết rồi).\n• 4): Phủ định chưa làm bài tập:「いいえ、まだです。これからします。」(Chưa, tôi chưa làm. Từ bây giờ tôi sẽ làm)."
      },
      {
        "id": "b6_q6",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "6. 1) もう第6課の勉強は終わりましたか。\n＿＿＿＿＿＿＿＿＿＿\n\n2) きのう友達に電話をかけましたか。\n＿＿＿＿＿＿＿＿＿＿\n\n3) \"Good morning.\" は日本語で何ですか。\n＿＿＿＿＿＿＿＿＿＿\n\n4) 日本語で手紙を書きますか。\n＿＿＿＿＿＿＿＿＿＿\n\n5) どこで本を借りますか。\n＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "はい、終わりました。",
          "はい、かけました。",
          "「おはようございます」です。",
          "はい、書きます。",
          "図書館で借ります。"
        ],
        "explanation": "• Dạng câu hỏi mở hỏi về thông tin bản thân bạn để tự luyện tập đối thoại (tự đối chiếu với câu trả lời mẫu sau khi nộp bài):\n• 1):「もう第6課の勉強は終わりましたか」(Việc học Bài 6 đã kết thúc chưa?) ➔ Khẳng định:「はい、終わりました。」; Phủ định:「いいえ、まだです。」.\n• 2):「きのう友達に電話をかけましたか」(Hôm qua bạn có gọi điện cho bạn bè không?) ➔ Khẳng định quá khứ:「はい、かけました。」; Phủ định quá khứ:「いいえ、かけませんでした。」.\n• 3):「\"Good morning.\" は日本語で何ですか」(Good morning trong tiếng Nhật là gì?) ➔ Trả lời:「「おはようございます」です。」.\n• 4):「日本語で手紙を書きますか」(Bạn có viết thư bằng tiếng Nhật không?) ➔ Khẳng định hiện tại:「はい、書きます。」; Phủ định hiện tại:「いいえ、書きません。」.\n• 5):「どこで本を借りますか」(Bạn mượn sách ở đâu?) ➔ Trả lời địa điểm mượn sách dùng trợ từ「で」:「図書館で借ります。」(hoặc「学校の図書館で借ります」)."
      }
    ]
  },
  "bai_7": {
    "title": "Bài 7",
    "completed": true,
    "questions": [
      {
        "id": "b7_q1",
        "type": "fill",
        "tag": "Tìm từ trái nghĩa",
        "columns": 2,
        "question": "1. 例：大きい机 ⇔ <u>小さい机</u>\n\n1) 新しいうち ⇔ ＿＿＿＿＿＿＿＿＿＿\n2) いい人 ⇔ ＿＿＿＿＿＿＿＿＿＿\n3) 難しい仕事 ⇔ ＿＿＿＿＿＿＿＿＿＿\n4) 安い車 ⇔ ＿＿＿＿＿＿＿＿＿＿\n5) 高い山 ⇔ ＿＿＿＿＿＿＿＿＿＿\n6) 忙しい日曜日 ⇔ ＿＿＿＿＿＿＿＿＿＿\n7) 静かな町 ⇔ ＿＿＿＿＿＿＿＿＿＿\n8) 冷たいお茶 ⇔ ＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "古いうち / 古い家 / ふるいうち / ふるいいえ / 古い / ふるい",
          "悪い人 / わるいひと / 悪い / わるい",
          "易しい仕事 / やさしい仕事 / やさしいしごと / 簡単な仕事 / かんたんな仕事 / かんたんなしごと / 易しい / やさしい / 簡単な / かんたんな",
          "高い車 / たかい車 / たかいくるま / 高い / たかい",
          "低い山 / ひくい山 / ひくいやま / 低い / ひくい",
          "暇な日曜日 / ひまな日曜日 / ひまなにちようび / 暇な / ひまな / 暇 / ひま",
          "にぎやかな町 / 賑やかな町 / にぎやかなまち / にぎやか / にぎやかな / 賑やか / 賑やかな",
          "熱いお茶 / あついお茶 / あついおちゃ / 温かいお茶 / あたたかいお茶 / あたたかいおちゃ / 熱い / あつい / 温かい / あたたかい"
        ],
        "explanation": "• 例 (Ví dụ): Cặp tính từ trái nghĩa:「大きい」(to, lớn) ⇔「小さい」(nhỏ, bé) ➔「大きい机」(bàn lớn) ⇔「小さい机」(bàn nhỏ).\n• 1): Trái nghĩa với「新しい」(mới) là「古い」(cũ) ➔「新しいうち」(nhà mới) ⇔「古いうち」(nhà cũ - hoặc「古い家」).\n• 2): Trái nghĩa với「いい」(tốt) là「悪い」(xấu, tồi) ➔「いい人」(người tốt) ⇔「悪い人」(người xấu).\n• 3): Trái nghĩa với「難しい」(khó) là「易しい」(dễ) hoặc「簡単な」(đơn giản) ➔「難しい仕事」(công việc khó) ⇔「易しい仕事」(công việc dễ - hoặc「簡単な仕事」).\n• 4): Trái nghĩa với「安い」(rẻ) là「高い」(đắt) ➔「安い車」(xe hơi rẻ tiền) ⇔「高い車」(xe hơi đắt tiền).\n• 5): Trái nghĩa với「高い」(cao - chỉ độ cao của vật thể như núi, toà nhà) là「低い」(thấp) ➔「高い山」(núi cao) ⇔「低い山」(núi thấp).\n• 6): Trái nghĩa với「忙しい」(bận rộn) là tính từ đuôi な「暇な」(rảnh rỗi). Khi bổ nghĩa cho danh từ cần giữ「な」➔「忙しい日曜日」(Chủ nhật bận rộn) ⇔「暇な日曜日」(Chủ nhật rảnh rỗi).\n• 7): Trái nghĩa với「静かな」(yên tĩnh) là tính từ đuôi な「にぎやかな」(náo nhiệt, nhộn nhịp, sôi động) ➔「静かな町」(thị trấn yên tĩnh) ⇔「にぎやかな町」(thị trấn nhộn nhịp/náo nhiệt).\n• 8): Trái nghĩa với「冷たい」(lạnh - cảm nhận nhiệt độ đồ uống/tiếp xúc) là「熱い」(nóng) ➔「冷たいお茶」(trà lạnh) ⇔「熱いお茶」(trà nóng - hoặc「温かいお茶」: trà ấm)."
      },
      {
        "id": "b7_q2",
        "type": "fill",
        "tag": "Hoàn thành câu với tính từ bổ nghĩa cho danh từ",
        "question": "2. 例1：＜映画・おもしろい＞\n   <u>おもしろい映画</u>を見ました。\n   例2：＜大学・有名＞\n   さくら大学は<u>有名な大学</u>です。\n\n1) ＜ケータイ・新しい＞\n   ＿＿＿＿＿＿＿＿＿＿を買いました。\n\n2) ＜レストラン・静か＞\n   ＿＿＿＿＿＿＿＿＿＿で昼ごはんを食べました。\n\n3) ＜先生・親切＞\n   ワットさんは＿＿＿＿＿＿＿＿＿＿です。\n\n4) ＜チョコレート・おいしい＞\n   ミラーさんに＿＿＿＿＿＿＿＿＿＿をもらいました。\n\n5) ＜花・きれい＞\n   彼女の誕生日に＿＿＿＿＿＿＿＿＿＿をあげました。",
        "answers": [
          "新しいケータイ / あたらしいケータイ / 新しい携帯 / あたらしいけいたい / 新しい携帯電話 / あたらしいけいたいでんわ",
          "静かなレストラン / しずかなレストラン",
          "親切な先生 / しんせつな先生 / しんせつなせんせい",
          "おいしいチョコレート / 美味しいチョコレート / おいしいチョコ / 美味しいチョコ",
          "きれいな花 / 綺麗な花 / きれいなはな / きれいなお花 / きれいなおはな"
        ],
        "explanation": "• Cấu trúc tính từ bổ nghĩa cho danh từ:\n  • Tính từ đuôi い: Giữ nguyên「い」rồi ghép trực tiếp với danh từ:「A-い + N」(Ví dụ: おもしろい映画, 新しいケータイ, おいしいチョコレート).\n  • Tính từ đuôi な: Giữ nguyên trợ từ「な」rồi ghép với danh từ:「A-な + N」(Ví dụ: 有名な大学, 静かなレストラン, 親切な先生, きれいな花).\n• 例1: Ghép tính từ đuôi い「おもしろい」(hay) với danh từ「映画」(phim) ➔「おもしろい映画を見ました」(Tôi đã xem một bộ phim hay).\n• 例2: Ghép tính từ đuôi な「有名」(nổi tiếng) với danh từ「大学」(trường đại học) ➔ Thêm「な」:「さくら大学は有名な大学です」(Đại học Sakura là một trường đại học nổi tiếng).\n• 1): Ghép tính từ đuôi い「新しい」(mới) với danh từ「ケータイ」(điện thoại di động) ➔ Giữ nguyên「い」:「新しいケータイ を買いました」(Tôi đã mua điện thoại mới).\n• 2): Ghép tính từ đuôi な「静か」(yên tĩnh) với danh từ「レストラン」(nhà hàng) ➔ Thêm「な」:「静かなレストラン で昼ごはんを食べました」(Tôi đã ăn trưa ở một nhà hàng yên tĩnh).\n• 3): Ghép tính từ đuôi な「親切」(thân thiện, tốt bụng) với danh từ「先生」(thầy giáo) ➔ Thêm「な」:「ワットさんは 親切な先生 です」(Thầy Watt là một người thầy rất tốt bụng).\n• 4): Ghép tính từ đuôi い「おいしい」(ngon) với danh từ「チョコレート」(sô-cô-la) ➔ Giữ nguyên「い」:「ミラーさんに おいしいチョコレート をもらいました」(Tôi đã nhận được sô-cô-la ngon từ anh Miller).\n• 5): Ghép tính từ đuôi な「きれい」(đẹp) với danh từ「花」(hoa) ➔ Lưu ý「きれい」là tính từ đuôi な (mặc dù tận cùng phát âm là i) nên bắt buộc thêm「な」:「彼女の誕生日に きれいな花 をあげました」(Tôi đã tặng hoa đẹp vào sinh nhật của cô ấy)."
      },
      {
        "id": "b7_q3",
        "type": "fill",
        "tag": "Trả lời câu hỏi với とても và あまり",
        "question": "3. 例：日本語は難しいですか。\n   …はい、とても<u>難しいです。</u>\n   …いいえ、あまり<u>難しくないです。</u>\n\n1) 日本の地下鉄は便利ですか。…はい、とても ＿＿＿＿＿＿＿＿＿＿\n2) シャンハイは寒いですか。…いいえ、あまり ＿＿＿＿＿＿＿＿＿＿\n3) その辞書はいいですか。…いいえ、あまり ＿＿＿＿＿＿＿＿＿＿\n4) 日本の生活は楽しいですか。…はい、とても ＿＿＿＿＿＿＿＿＿＿\n5) あなたの町はにぎやかですか。…いいえ、あまり ＿＿＿＿＿＿＿＿＿＿\n6) この店のコーヒーはおいしいですか。…はい、とても ＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "便利です / べんりです / 便利です。 / べんりです。",
          "寒くないです / さむくないです / 寒くありません / さむくありません / 寒くないです。 / さむくないです。 / 寒くありません。 / さむくありません。",
          "よくないです / よくありません / よくないです。 / よくありません。",
          "楽しいです / たのしいです / 楽しいです。 / たのしいです。",
          "にぎやかじゃありません / にぎやかではありません / 賑やかじゃありません / 賑やかではありません / にぎやかじゃないです / 賑やかじゃないです / にぎやかじゃありません。 / にぎやかではありません。 / 賑やかじゃありません。 / 賑やかではありません。",
          "おいしいです / 美味しいです / おいしいです。 / 美味しいです。"
        ],
        "explanation": "• Cấu trúc ngữ pháp trả lời câu hỏi mức độ với tính từ:\n  • Khẳng định「はい、とても + [Tính từ] です」(Vâng, rất...):\n    - Tính từ đuôi い:「A-い です」(Ví dụ: 楽しいです, おいしいです).\n    - Tính từ đuôi な:「A です」(Ví dụ: 便利です).\n  • Phủ định「いいえ、あまり + [Tính từ phủ định]」(Không, không... lắm):\n    - Tính từ đuôi い: Đổi đuôi「い」thành「くないです」(hoặc「くありません」). Riêng trường hợp đặc biệt「いい」(tốt) đổi thành「よくないです」(hoặc「よくありません」).\n    - Tính từ đuôi な: Đổi đuôi「な」thành「じゃありません」(hoặc「ではありません」).\n• 例 (Ví dụ):「日本語は難しいですか」(Tiếng Nhật có khó không?):\n  - Khẳng định:「はい、とても難しいです」(Vâng, rất khó).\n  - Phủ định:「いいえ、あまり難しくないです」(Không, không khó lắm).\n• 1):「便利」(tiện lợi) là tính từ đuôi な. Trả lời khẳng định với とても:「はい、とても便利です」(Vâng, rất tiện lợi).\n• 2):「寒い」(lạnh) là tính từ đuôi い. Trả lời phủ định với あまり: đổi đuôi い thành くない:「いいえ、あまり寒くないです」(Không, không lạnh lắm).\n• 3):「いい」(tốt) là tính từ đuôi い ĐẶC BIỆT. Dạng phủ định của いい là よくない:「いいえ、あまりよくないです」(Không, không tốt lắm - hoặc「よくありません」).\n• 4):「楽しい」(vui vẻ) là tính từ đuôi い. Trả lời khẳng định với とても:「はい、とても楽しいです」(Vâng, rất vui).\n• 5):「にぎやか」(náo nhiệt) là tính từ đuôi な. Trả lời phủ định với あまり: thêm じゃありません:「いいえ、あまりにぎやかじゃありません」(Không, không náo nhiệt lắm - hoặc「にぎやかではありません」).\n• 6):「おいしい」(ngon) là tính từ đuôi い. Trả lời khẳng định với とても:「はい、とてもおいしいです」(Vâng, rất ngon)."
      },
      {
        "id": "b7_q4",
        "type": "fill",
        "tag": "Nối tính từ với liên từ が và そして",
        "question": "4. 例1：会社の寮は（古い・きれい…<u>古いですが、きれいです。</u>）\n   例2：カリナさんは（きれい・親切…<u>きれいです。そして、親切です。</u>）\n\n1) このレストランは（小さい・有名…＿＿＿＿＿＿＿＿＿＿）\n2) 日本の生活は（忙しい・楽しい…＿＿＿＿＿＿＿＿＿＿）\n3) サントスさんは（ハンサム・おもしろい…＿＿＿＿＿＿＿＿＿＿）\n4) 日本語の勉強は（難しい・おもしろい…＿＿＿＿＿＿＿＿＿＿）\n5) 松本さんのうちは（新しい・とても大きい…＿＿＿＿＿＿＿＿＿＿）",
        "answers": [
          "小さいですが、有名です。 / 小さいですが、有名です / 小さいですが有名です。 / 小さいですが有名です / ちいさいですが、ゆうめいです。 / ちいさいですが、ゆうめいです",
          "忙しいですが、楽しいです。 / 忙しいですが、楽しいです / 忙しいですが楽しいです。 / 忙しいですが楽しいです / いそがしいですが、たのしいです。 / いそがしいですが、たのしいです",
          "ハンサムです。そして、おもしろいです。 / ハンサムです。そして、おもしろいです / ハンサムです。そしておもしろいです。 / ハンサムです。そしておもしろいです / ハンサムです。そして、面白いです。 / ハンサムです。そして、面白いです",
          "難しいですが、おもしろいです。 / 難しいですが、おもしろいです / 難しいですがおもしろいです。 / 難しいですがおもしろいです / むずかしいですが、おもしろいです。 / むずかしいですが、おもしろいです / 難しいですが、面白いです。 / 難しいですが、面白いです",
          "新しいです。そして、とても大きいです。 / 新しいです。そして、とても大きいです / 新しいです。そしてとても大きいです。 / 新しいです。そしてとても大きいです / あたらしいです。そして、とてもおおきいです。 / あたらしいです。そして、とてもおおきいです"
        ],
        "explanation": "• Cấu trúc nối 2 tính từ trong tiếng Nhật:\n  • Nối 2 ý trái ngược/tương phản nhau: dùng liên từ「が」(nhưng) ➔「[Mệnh đề 1] ですが、[Mệnh đề 2] です。」.\n  • Nối 2 ý cùng chiều/bổ sung tích cực cho nhau: dùng liên từ「そして」(và, thêm vào đó) ➔「[Mệnh đề 1] です。そして、[Mệnh đề 2] です。」.\n• 例1:「古い」(cũ) là điểm hạn chế,「きれい」(sạch đẹp) là điểm cộng ➔ Ý tương phản:「古いですが、きれいです。」(Ký túc xá công ty cũ nhưng mà sạch đẹp).\n• 例2:「きれい」(xinh đẹp) và「親切」(tốt bụng) đều là 2 điểm tốt cùng chiều ➔ Ý bổ sung:「きれいです。そして、親切です。」(Chị Karina xinh đẹp. Và chị ấy cũng rất tốt bụng).\n• 1):「小さい」(nhỏ) và「有名」(nổi tiếng) mang ý tương phản (quán tuy nhỏ nhưng nổi tiếng) ➔ Dùng「が」:「小さいですが、有名です。」(Nhà hàng này nhỏ nhưng mà nổi tiếng).\n• 2):「忙しい」(bận rộn, vất vả) và「楽しい」(vui vẻ) mang ý tương phản ➔ Dùng「が」:「忙しいですが、楽しいです。」(Cuộc sống ở Nhật bận rộn nhưng mà vui).\n• 3):「ハンサム」(đẹp trai) và「おもしろい」(thú vị/hài hước) là 2 đặc điểm tốt cùng chiều của anh Santos ➔ Dùng「そして」:「ハンサムです。そして、おもしろいです。」(Anh Santos đẹp trai. Và anh ấy còn rất thú vị).\n• 4):「難しい」(khó) và「おもしろい」(thú vị) mang ý tương phản ➔ Dùng「が」:「難しいですが、おもしろいです。」(Việc học tiếng Nhật khó nhưng mà thú vị).\n• 5):「新しい」(mới) và「とても大きい」(rất to lớn) là 2 đặc điểm tích cực cùng chiều của ngôi nhà ➔ Dùng「そして」:「新しいです。そして、とても大きいです。」(Nhà anh Matsumoto mới. Và lại còn rất to lớn nữa)."
      },
      {
        "id": "b7_q5",
        "type": "matching",
        "tag": "Điền nghi vấn từ thích hợp",
        "question": "5. ［ どう　どんな　なん　なに　どこ ］\n例：奈良は（ どんな ）所ですか。…いい所ですよ。\n\n1) 会社の仕事は（____）ですか。…おもしろいです。\n2) シュミットさんは（____）人ですか。…すてきな人です。\n3) その手帳は（____）ですか。…とても便利です。\n4) 寮の部屋は（____）ですか。…小さいですが、きれいです。\n5) あれは（____）ですか。…病院です。\n6) （____）を飲みますか。…コーヒーを飲みます。\n7) （____）でコーヒーを飲みますか。…あそこで飲みましょう。\n8) （____）靴を買いましたか。…黒い靴を買いました。",
        "choices": [
          { "key": "どう", "text": "どう" },
          { "key": "どんな", "text": "どんな" },
          { "key": "なん", "text": "なん" },
          { "key": "なに", "text": "なに" },
          { "key": "どこ", "text": "どこ" }
        ],
        "answers": [
          "どう",
          "どんな",
          "どう",
          "どう",
          "なん / 何",
          "なに / 何",
          "どこ",
          "どんな"
        ],
        "explanation": "• Phân biệt các nghi vấn từ:\n  •「どう」: Hỏi về cảm nhận, ấn tượng, tính chất của sự vật/hiện tượng:「N は どうですか」.\n  •「どんな + N」: Hỏi về đặc điểm, tính chất, chủng loại cụ thể của danh từ đi sau:「どんな N ですか」.\n  •「なん / なに」(何): Hỏi về sự vật, cái gì. Đứng trước「ですか」hoặc âm hàng t, d, n đọc là「なん」; đứng trước trợ từ「を」đọc là「なに」.\n  •「どこ」: Hỏi về nơi chốn, địa điểm.\n• 例: Hỏi tính chất của địa danh kèm danh từ「所」(nơi chốn) ➔ Dùng「どんな + N」:「奈良はどんな所ですか」(Nara là nơi như thế nào?).\n• 1): Hỏi cảm nhận về công việc công ty「会社の仕事」➔ Dùng「どう」:「会社の仕事はどうですか」(Công việc ở công ty thế nào?).\n• 2): Hỏi đặc điểm người kèm danh từ「人」➔ Dùng「どんな + N」:「シュミットさんはどんな人ですか」(Anh Schmidt là người như thế nào?).\n• 3): Hỏi cảm nhận/đánh giá về cuốn sổ tay「その手帳」➔ Dùng「どう」:「その手帳はどうですか」(Cuốn sổ tay đó thế nào?).\n• 4): Hỏi cảm nhận về căn phòng ký túc xá「寮の部屋」➔ Dùng「どう」:「寮の部屋はどうですか」(Phòng ở ký túc xá thế nào?).\n• 5): Hỏi vật/tòa nhà đằng kia là cái gì「あれは [何] ですか」➔ Đứng trước「ですか」chữ 何 đọc là「なん」:「あれはなんですか」(Cái đằng kia là cái gì thế?).\n• 6): Hỏi tân ngữ đồ uống đi với trợ từ「を」➔ Đứng trước「を」chữ 何 đọc là「なに」:「なにを飲みますか」(Bạn uống gì?).\n• 7): Câu trả lời nêu nơi chốn「あそこで」(ở đằng kia) ➔ Câu hỏi nơi chốn hành động dùng「どこで」:「どこでコーヒーを飲みますか」(Chúng ta uống cà phê ở đâu?).\n• 8): Câu trả lời nêu màu sắc bổ nghĩa cho danh từ đôi giày「黒い靴」➔ Câu hỏi chủng loại/đặc điểm danh từ dùng「どんな + N」:「どんな靴を買いましたか」(Bạn đã mua đôi giày như thế nào?)."
      },
      {
        "id": "b7_q6",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "6. 1) あなたの部屋はどんな部屋ですか。\n＿＿＿＿＿＿＿＿＿＿\n\n2) 日本の食べ物はどうですか。\n＿＿＿＿＿＿＿＿＿＿\n\n3) お母さんはお元気ですか。\n＿＿＿＿＿＿＿＿＿＿\n\n4) 今寒いですか。\n＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "狭いですが、きれいです。",
          "おいしいですが、高いです。",
          "はい、元気です。",
          "はい、とても寒いです。"
        ],
        "explanation": "• Dạng câu hỏi mở hỏi về bản thân bạn để tự luyện tập đối thoại (tự đối chiếu với câu trả lời mẫu sau khi nộp bài):\n• 1):「あなたの部屋はどんな部屋ですか」(Căn phòng của bạn là căn phòng như thế nào?) ➔ Trả lời bằng tính từ mô tả phòng:「[Tính từ] 部屋です」(hoặc「[Tính từ 1] ですが、[Tính từ 2] です」. Ví dụ:「狭いですが、きれいです。」,「小さい部屋です。」,「静かな部屋です。」...). \n• 2):「日本の食べ物はどうですか」(Đồ ăn Nhật Bản thế nào?) ➔ Trả lời nêu cảm nhận:「おいしいですが、高いです。」(Ngon nhưng mà đắt) hoặc「とてもおいしいです。」(Rất ngon)... \n• 3):「お母さんはお元気ですか」(Mẹ của bạn có khỏe không?) ➔ Khẳng định:「はい、元気です。」(Vâng, mẹ tôi khỏe); Phủ định:「いいえ、あまり元気じゃありません。」(Không, mẹ tôi không được khỏe lắm). (Lưu ý: Không dùng chữ「お」khi nói về mẹ mình). \n• 4):「今寒いですか」(Bây giờ trời có lạnh không?) ➔ Khẳng định:「はい、寒いです。」/「はい、とても寒いです。」; Phủ định:「いいえ、あまり寒くないです。」."
      }
    ]
  },
  "bai_8": {
    "title": "Bài 8",
    "completed": true,
    "questions": [
      {
        "id": "b8_q1",
        "type": "fill",
        "tag": "Điền Hiragana cho từ/số gạch chân",
        "question": "1. 例：イーさんは <u>35歳</u> です。（さんじゅうごさい）\n\n1) <u>318</u>の木村です。（____）\n2) このケータイは <u>23,800円</u> です。（____）\n3) ニューヨークは今午前 <u>0時10分</u> です。（____）\n4) 去年の <u>4月20日</u> に日本へ来ました。（____）\n5) わたしの誕生日は <u>9月1日</u> です。（____）\n6) 会社は <u>9時15分</u> から <u>5時50分</u> までです。（____）\n   （____）\n7) <u>4月8日</u> に京都へ行きます。（____）\n8) 大阪駅まで <u>630円</u> です。（____）\n9) <u>35,000円</u> のカメラを買いました。（____）",
        "answers": [
          "さんびゃくじゅうはち / さんいちはち",
          "にまんさんぜんはっぴゃくえん / にまんさんぜんはっぴゃく",
          "れいじじゅっぷん / れいじじっぷん",
          "しがつはつか / しがつにじゅうにち",
          "くがつついたち",
          "くじじゅうごふん",
          "ごじごじゅっぷん / ごじごじっぷん",
          "しがつようか",
          "ろっぴゃくさんじゅうえん / ろっぴゃくさんじゅう",
          "さんまんごせんえん / さんまんごせん"
        ],
        "explanation": "• Quy tắc đọc số đếm, tuổi, giờ phút, ngày tháng và tiền tệ (Ôn tập Bài 1 - 7):\n• 例 (Ví dụ): Số tuổi「35歳」đọc là「さんじゅうごさい」(sanjūgosai).\n• 1): Số「318」đọc là「さんびゃくじゅうはち」(sanbyaku-jūhachi) - lưu ý 300 biến âm「さんびゃく」. Cũng chấp nhận cách đọc từng chữ số phòng「さんいちはち」.\n• 2):「23,800円」đọc là「にまんさんぜんはっぴゃくえん」- lưu ý 3,000 biến âm「さんぜん」và 800 biến âm âm ngắt「はっぴゃく」.\n• 3):「0時10分」đọc là「れいじじゅっぷん」(hoặc「れいじじっぷん」) - 0 giờ đọc là「れいじ」, 10 phút là âm ngắt「じゅっぷん / じっぷん」.\n• 4):「4月20日」đọc là「しがつはつか」- lưu ý Tháng 4 đọc đặc biệt là「しがつ」(không đọc là よんがつ), ngày 20 là ngày đặc biệt đọc là「はつか」.\n• 5):「9月1日」đọc là「くがつついたち」- lưu ý Tháng 9 đọc đặc biệt là「くがつ」(không đọc là きゅうがつ), ngày mồng 1 là ngày đặc biệt đọc là「ついたち」.\n• 6):\n  - 9時15分: 9 giờ đọc đặc biệt là「くじ」(không đọc là きゅうじ), 15 phút đọc là「じゅうごふん」➔「くじじゅうごふん」.\n  - 5時50分: 5 giờ đọc là「ごじ」, 50 phút đọc là「ごじゅっぷん」(hoặc「ごじっぷん」) ➔「ごじごじゅっぷん」.\n• 7):「4月8日」đọc là「しがつようか」- lưu ý Tháng 4 là「しがつ」, ngày mồng 8 là ngày đặc biệt có trường âm「ようか」(tránh nhầm với mồng 4 là よっか).\n• 8):「630円」đọc là「ろっぴゃくさんじゅうえん」- lưu ý 600 biến âm âm ngắt「ろっぴゃく」.\n• 9):「35,000円」đọc là「さんまんごせんえん」- gồm 3 vạn (30,000)「さんまん」+ 5 nghìn (5,000)「ごせん」+「えん」."
      },
      {
        "id": "b8_q2",
        "type": "fill",
        "tag": "Điền trợ từ tổng hợp vào ngoặc",
        "question": "2. 例：わたし（ は ）マイク・ミラーです。\n\n1) これはだれ（____）手帳ですか。…カリナさん（____）です。\n2) シュミットさん（____）お国（____）ドイツです。\n3) イーさんは韓国（____）来ました。\n4) 毎朝６時半（____）起きます。\n5) 図書館は10時（____）６時（____）です。\n6) 去年（____）４月（____）日本（____）来ました。\n7) わたしはあした会社の人（____）新幹線（____）広島（____）行きます。\n8) デパート（____）パン（____）イタリア（____）ワイン（____）買いました。\n9) 日曜日はどこ（____）行きません。\n10) ケータイ（____）メール（____）送ります。\n11) これは日本語（____）何ですか。…「セロテープ」です。\n12) わたしは誕生日（____）父（____）時計（____）もらいました。\n13) わたしは今晩家族（____）電話（____）かけます。\n14) 会社の寮は古いです（____）、きれいです。\n15) テレビ（____）中国語（____）勉強しました。",
        "answers": [
          "の",
          "の",
          "の",
          "は",
          "から",
          "に",
          "から",
          "まで",
          "の",
          "に",
          "へ / に",
          "と",
          "で",
          "へ / に",
          "で",
          "と",
          "の",
          "を",
          "も",
          "で",
          "を",
          "で",
          "に",
          "に / から",
          "を",
          "に",
          "を",
          "が",
          "で",
          "を"
        ],
        "explanation": "• Ôn tập tổng hợp cách dùng trợ từ trong Minna no Nihongo (Bài 1 - 7):\n• 例 (Ví dụ): Trợ từ「は」xác định chủ đề câu:「わたしはマイク・ミラーです」.\n• 1): Vị trí 1:「だれの 手帳」(trợ từ「の」chỉ sở hữu). Vị trí 2:「カリナさんの です」(trợ từ「の」thay thế danh từ sổ tay đã nhắc trước đó).\n• 2): Vị trí 1:「シュミットさんの お国」(trợ từ「の」chỉ quan hệ thuộc về). Vị trí 2:「お国は ドイツです」(trợ từ「は」xác định chủ đề câu).\n• 3): Trợ từ「から」chỉ nơi xuất phát / quê hương:「韓国から 来ました」(đến từ Hàn Quốc).\n• 4): Trợ từ「に」chỉ mốc thời gian cụ thể:「６時半に 起きます」(thức dậy lúc 6 rưỡi).\n• 5): Cặp trợ từ「から〜まで」chỉ khoảng thời gian từ mấy giờ đến mấy giờ:「10時から ６時まで」(từ 10 giờ đến 6 giờ).\n• 6): Vị trí 1:「去年の ４月」(nối 2 danh từ thời gian). Vị trí 2:「４月に」(mốc thời gian cụ thể). Vị trí 3:「日本へ / に 来ました」(đích đến di chuyển).\n• 7): Vị trí 1:「会社の人と」(người cùng hành động). Vị trí 2:「新幹線で」(phương tiện di chuyển). Vị trí 3:「広島へ / に 行きます」(đích đến).\n• 8): Vị trí 1:「デパートで」(nơi mua sắm). Vị trí 2:「パンと」(liệt kê bánh mì VÀ rượu vang). Vị trí 3:「イタリアの ワイン」(xuất xứ rượu vang Ý). Vị trí 4:「ワインを 買いました」(tân ngữ mua).\n• 9):「どこも 行きません」(từ để hỏi +「も」+ phủ định: hoàn toàn không đi đâu cả).\n• 10): Vị trí 1:「ケータイで」(công cụ gửi). Vị trí 2:「メールを 送ります」(tân ngữ gửi).\n• 11):「日本語で」(phương tiện ngôn ngữ: Trong tiếng Nhật cái này gọi là gì?).\n• 12): Vị trí 1:「誕生日に」(dịp nhận quà). Vị trí 2:「父に / から」(người trao tặng). Vị trí 3:「時計を もらいました」(tân ngữ món quà).\n• 13): Vị trí 1:「家族に」(đối tượng nhận cuộc gọi). Vị trí 2:「電話を かけます」(tân ngữ cuộc gọi).\n• 14):「古いです が 、きれいです」(liên từ「が」nối 2 vế tính từ tương phản: cũ nhưng sạch).\n• 15): Vị trí 1:「テレビで」(công cụ học qua tivi). Vị trí 2:「中国語を 勉強しました」(tân ngữ nội dung học)."
      },
      {
        "id": "b8_q3",
        "type": "fill",
        "tag": "Chia dạng thích hợp của tính từ",
        "question": "3. 例：東京は（便利…<u>便利な</u>）町です。\n\n1) （冷たい…＿＿＿＿＿＿＿＿＿＿）お茶を飲みましょう。\n2) （静か…＿＿＿＿＿＿＿＿＿＿）部屋で勉強します。\n3) この辞書はあまり（いい…＿＿＿＿＿＿＿＿＿＿）。\n4) あの病院はとても（有名…＿＿＿＿＿＿＿＿＿＿）。\n5) わたしの部屋はあまり（きれい…＿＿＿＿＿＿＿＿＿＿）。",
        "answers": [
          "冷たい / つめたい",
          "静かな / しずかな",
          "よくないです / よくありません / よくない",
          "有名です / ゆうめいです",
          "きれいじゃありません / きれいではありません / 綺麗じゃありません / 綺麗ではありません / きれいじゃないです"
        ],
        "explanation": "• Quy tắc biến đổi dạng thức của tính từ (bổ nghĩa danh từ và kết hợp とても / あまり):\n• 例 (Ví dụ):「便利」(tiện lợi) là tính từ đuôi な, khi đứng trước bổ nghĩa cho danh từ「町」(thị trấn, thành phố) phải thêm「な」➔「便利な町」.\n• 1):「冷たい」(lạnh) là tính từ đuôi い, khi bổ nghĩa cho danh từ「お茶」(trà) giữ nguyên đuôi「い」➔「冷たいお茶を飲みましょう」(Chúng ta cùng uống trà lạnh nhé).\n• 2):「静か」(yên tĩnh) là tính từ đuôi な, khi bổ nghĩa cho danh từ「部屋」(căn phòng) phải thêm「な」➔「静かな部屋で勉強します」(Tôi học bài ở phòng yên tĩnh).\n• 3): Đi sau phó từ phủ định「あまり」(không... lắm), tính từ bất quy tắc「いい」(tốt) chia phủ định thành「よくないです」(hoặc「よくありません」) ➔「この辞書はあまりよくないです」(Cuốn từ điển này không được tốt lắm).\n• 4): Đi sau phó từ mức độ「とても」(rất), tính từ đuôi な「有名」(nổi tiếng) ở vị trí vị ngữ cuối câu khẳng định lịch sự kết hợp với「です」➔「あの病院はとても有名です」(Bệnh viện đằng kia rất nổi tiếng).\n• 5): Đi sau phó từ phủ định「あまり」(không... lắm), tính từ đuôi な「きれい」(sạch đẹp) chia phủ định thành「きれいじゃありません」(hoặc「きれいではありません」) ➔「わたしの部屋はあまりきれいじゃありません」(Phòng của tôi không được sạch sẽ/đẹp lắm)."
      },
      {
        "id": "b8_q4",
        "type": "fill",
        "tag": "Điền nghi vấn từ thích hợp",
        "question": "4. 例：あの方は（ どなた ）ですか。…佐藤さんです。\n\n1) あなたのお母さんは（____）ですか。…54歳です。\n2) あれは（____）ですか。…いすです。\n3) それは（____）の雑誌ですか。…コンピューターの雑誌です。\n4) これは（____）のノートですか。…カリナさんのです。\n5) これは（____）の車ですか。…アメリカのです。\n6) このネクタイは（____）ですか。…8,400円です。\n7) 今（____）ですか。…8時20分です。\n8) きょうは（____）ですか。…水曜日です。\n9) 会社の電話番号は（____）ですか。…5275の2725です。\n10) （____）国へ帰りますか。…来年帰ります。\n11) 先週の日曜日（____）へ行きましたか。…美術館へ行きました。\n12) （____）で学校へ行きますか。…歩いて行きます。\n13) （____）と京都へ行きましたか。…一人で行きました。\n14) 仕事は（____）ですか。…おもしろいです。\n15) タイは（____）国ですか。…暑い国です。",
        "answers": [
          "おいくつ / 何歳 / なんさい",
          "なん / 何",
          "なん / 何",
          "だれ / 誰 / どなた",
          "どこ / どちら",
          "いくら",
          "何時 / なんじ",
          "何曜日 / なんようび",
          "何番 / なんばん",
          "いつ",
          "どこ / どちら",
          "なん / 何 / なに",
          "だれ / 誰 / どなた",
          "どう",
          "どんな"
        ],
        "explanation": "• Ôn tập tổng hợp toàn bộ các nghi vấn từ (từ để hỏi) trong Minna no Nihongo (Bài 1 - 7):\n• 例 (Ví dụ): Hỏi danh tính người lịch sự với「あの方」(vị kia) dùng「どなた」(hoặc「だれ」):「あの方はどなたですか」(Vị kia là vị nào vậy?).\n• 1): Câu trả lời nêu số tuổi「54歳です」(54 tuổi) ➔ Hỏi tuổi lịch sự với「お母さん」dùng「おいくつ」(hoặc「何歳」).\n• 2): Câu trả lời nêu đồ vật「いすです」(là cái ghế) ➔ Hỏi sự vật đứng trước「ですか」dùng「なん」(hoặc「何」).\n• 3): Câu trả lời nêu thể loại tạp chí「コンピューターの雑誌」➔ Hỏi thể loại, nội dung danh từ đứng trước trợ từ「の」dùng「なん」(hoặc「何」).\n• 4): Câu trả lời chỉ quyền sở hữu「カリナさんのです」(Của chị Karina) ➔ Hỏi sở hữu người dùng「だれの」(hoặc「どなたの」: cuốn vở của ai).\n• 5): Câu trả lời chỉ nơi xuất xứ sản xuất「アメリカのです」(Của Mỹ) ➔ Hỏi nguồn gốc, xuất xứ dùng「どこの」(hoặc「どちらの」: xe của nước nào).\n• 6): Câu trả lời nêu giá tiền「8,400円です」➔ Hỏi giá tiền dùng「いくら」.\n• 7): Câu trả lời nêu mốc giờ phút「8時20分です」➔ Hỏi thời điểm giờ dùng「何時」(なんじ).\n• 8): Câu trả lời nêu thứ trong tuần「水曜日です」➔ Hỏi thứ trong tuần dùng「何曜日」(なんようび).\n• 9): Câu trả lời nêu dãy số điện thoại「5275の2725です」➔ Hỏi số hiệu/số điện thoại dùng「何番」(なんばん).\n• 10): Câu trả lời nêu mốc thời gian tương lai「来年帰ります」(năm sau tôi về) ➔ Hỏi thời điểm khi nào dùng「いつ」.\n• 11): Câu trả lời nêu địa điểm di chuyển「美術館へ行きました」➔ Hỏi đi đâu đi kèm trợ từ hướng đi「へ」dùng「どこ」(hoặc「どちら」).\n• 12): Câu trả lời nêu cách thức đi lại「歩いて行きます」(đi bộ) ➔ Hỏi phương tiện đi lại đi với trợ từ「で」dùng「なんで」(bằng phương tiện gì).\n• 13): Câu trả lời nêu đối tượng cùng đi「一人で行きました」(đi một mình) ➔ Hỏi đi với ai kết hợp trợ từ「と」dùng「だれと」(hoặc「どなたと」).\n• 14): Câu trả lời nêu cảm nhận, ấn tượng「おもしろいです」(thú vị) ➔ Hỏi cảm nhận dùng「どう」:「仕事はどうですか」(Công việc thế nào?).\n• 15): Câu trả lời nêu tính từ bổ nghĩa cho danh từ「暑い国です」(nước nóng) ➔ Hỏi tính chất, đặc điểm của danh từ đi sau dùng「どんな + N」:「タイはどんな国ですか」(Thái Lan là đất nước như thế nào?)."
      },
      {
        "id": "b8_q5",
        "type": "fill",
        "tag": "Hoàn thành câu hỏi và câu trả lời",
        "question": "5. 例1：ミラーさんは銀行員ですか。…いいえ、<u>銀行員じゃありません</u>。\n   例2：これは<u>何ですか</u>。…コーヒーです。\n\n1) あの方は＿＿＿＿＿＿＿＿＿＿ …佐藤さんです。\n2) 日本語の新聞を読みますか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n3) あの方はミラーさんですか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n4) ミラーさんはきのう来ましたか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n5) もう昼ごはんを食べましたか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n6) いっしょに昼ごはんを食べませんか。…ええ、＿＿＿＿＿＿＿＿＿＿\n7) 日本の生活は＿＿＿＿＿＿＿＿＿＿ …楽しいです。\n8) この水はきれいですか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n9) 佐藤さんは＿＿＿＿＿＿＿＿＿＿ …とても親切な人です。\n10) 日本語の勉強は難しいですか。…いいえ、あまり＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "どなたですか / だれですか",
          "読みません / よみません",
          "ミラーさんじゃありません / ミラーさんではありません / ミラーさんじゃないです / ちがいます",
          "来ませんでした / きませんでした",
          "まだです / まだ食べていません / まだたべていません",
          "食べましょう / たべましょう",
          "どうですか",
          "きれいじゃありません / きれいではありません / 綺麗じゃありません / 綺麗ではありません / きれいじゃないです",
          "どんな人ですか / どんなひとですか",
          "難しくないです / むずかしくないです / 難しくありません / むずかしくありません"
        ],
        "explanation": "• Ôn tập tổng hợp cách đặt câu hỏi và câu trả lời hoàn chỉnh trong Minna no Nihongo (Bài 1 - 8):\n• 例1: Câu hỏi danh từ「〜ですか」, trả lời phủ định lịch sự danh từ「〜じゃありません」(hoặc「〜ではありません」).\n• 例2: Đặt câu hỏi với nghi vấn từ「何ですか」dựa vào câu trả lời đồ vật「コーヒーです」.\n• 1): Câu trả lời là tên người「佐藤さんです」(Là chị Sato) ➔ Đặt câu hỏi lịch sự về danh tính「あの方はどなたですか」(hoặc「だれですか」: Vị kia là vị nào vậy?).\n• 2): Câu hỏi động từ khẳng định hiện tại「読みますか」(Bạn có đọc không?), trả lời phủ định với「いいえ」➔「読みません」(hoặc「よみません」: Không, tôi không đọc).\n• 3): Câu hỏi xác nhận danh tính「あの方はミラーさんですか」(Vị kia là anh Miller phải không?), trả lời phủ định tương tự 例1 ➔「ミラーさんじゃありません」(hoặc「ミラーさんではありません」: Không, không phải anh Miller).\n• 4): Câu hỏi quá khứ「きのう来ましたか」(Hôm qua anh ấy có đến không?), trả lời phủ định thì quá khứ của động từ「来ます」(きます) ➔「来ませんでした」(hoặc「きませんでした」: Không, hôm qua anh ấy đã không đến).\n• 5): Câu hỏi xác nhận đã làm gì chưa「もう〜ましたか」(Đã ăn cơm trưa chưa?), trả lời chưa làm trong Bài 7 theo mẫu cố định ➔「いいえ、まだです」(hoặc「まだ食べていません」: Chưa, tôi chưa ăn). Tuyệt đối không dùng「食べませんでした」vì sẽ mang ý nghĩa cả buổi trưa hôm đó đã không ăn.\n• 6): Lời mời / rủ rê cùng làm gì「いっしょに〜ませんか」(Cùng ăn trưa nhé?), trả lời đồng ý nhiệt tình với「ええ」theo cấu trúc Bài 6 ➔「ええ、食べましょう」(hoặc「たべましょう」: Vâng, cùng ăn nhé).\n• 7): Câu trả lời nêu cảm nhận, ấn tượng「楽しいです」(Vui vẻ) ➔ Đặt câu hỏi cảm nhận về cuộc sống ở Nhật「日本の生活はどうですか」(Cuộc sống ở Nhật thế nào?).\n• 8):「きれい」là tính từ đuôi な. Trả lời phủ định hiện tại của tính từ đuôi な kết hợp với「じゃありません」➔「きれいじゃありません」(hoặc「きれいではありません」: Nước này có sạch không? - Không, không sạch).\n• 9): Câu trả lời nêu tính từ bổ nghĩa cho danh từ chỉ người「とても親切な人です」(Là người rất tốt bụng) ➔ Đặt câu hỏi về tính cách, đặc điểm của người「佐藤さんはどんな人ですか」(Chị Sato là người như thế nào?).\n• 10): Đi sau phó từ phủ định「あまり」(không... lắm), tính từ đuôi い「難しい」(khó) chia phủ định「難しくないです」(hoặc「難しくありません」) ➔「いいえ、あまり難しくないです」(Không, không khó lắm)."
      },
      {
        "id": "b8_q6",
        "type": "matching",
        "tag": "Chọn câu trả lời phù hợp từ các từ có sẵn",
        "question": "6. 例：あのう、これ、お土産です。どうぞ。…（ a ）。\n\n1) 日本の生活はとても楽しいです。…（____）。\n2) いらっしゃい。どうぞお上がりください。…（____）。\n3) いっしょにお花見をしませんか。…（____）。\n4) 日本語の勉強はどうですか。…（____）。\n5) コーヒーです。どうぞ。…（____）。\n6) （____）。…いいえ、けっこうです。\n7) （____）。…じゃ、またいらっしゃってください。\n8) （____）。…ええ。わかりました。\n9) （____）。…はい、どうぞ。\n10) （____）。…大変ですね。",
        "choices": [
          { "key": "a", "text": "ありがとうございます", "isExample": true },
          { "key": "b", "text": "ええ、いいですね" },
          { "key": "c", "text": "いただきます" },
          { "key": "d", "text": "そうですか" },
          { "key": "e", "text": "失礼します" },
          { "key": "f", "text": "難しいですが、おもしろいです" },
          { "key": "g", "text": "どういたしまして" },
          { "key": "h", "text": "毎晩9時まで働きます" },
          { "key": "i", "text": "電話はどこですか" },
          { "key": "j", "text": "お茶、もう一杯いかがですか" },
          { "key": "k", "text": "そろそろ失礼します" },
          { "key": "l", "text": "あした10時に会いましょう" },
          { "key": "m", "text": "それを見せてください" }
        ],
        "answers": [
          "d / そうですか",
          "e / 失礼します / しつれいします",
          "b / ええ、いいですね / ええいいですね",
          "f / 難しいですが、おもしろいです / むずかしいですがおもしろいです / 難しいですがおもしろいです",
          "c / いただきます",
          "j / お茶、もう一杯いかがですか / おちゃもういっぱいかがですか / お茶もう一杯いかがですか",
          "k / そろそろ失礼します / そろそろしつれいします",
          "l / あした10時に会いましょう / あした10じにあいましょう / 明日10時に会いましょう",
          "m / それを見せてください / それをみせてください",
          "h / 毎晩9時まで働きます / まいばん9じまではたらきます / 毎晩９時まで働きます"
        ],
        "explanation": "• Ôn tập tổng hợp các mẫu câu giao tiếp và hội thoại thực tế trong Minna no Nihongo (Bài 1 - 8):\n• 例 (Ví dụ): Khi người khác tặng quà cho mình「あのう、これ、お土産です。どうぞ」(À, đây là chút quà lưu niệm/đặc sản, xin mời nhận), người nhận cảm ơn lịch sự ➔ a:「ありがとうございます」(Xin cảm ơn rất nhiều).\n• 1): Khi đối phương chia sẻ thông tin về cuộc sống「日本の生活はとても楽しいです」(Cuộc sống ở Nhật rất vui), người nghe tiếp nhận và bày tỏ sự quan tâm ➔ d:「そうですか」(Thế à / Vậy à).\n• 2): Khi chủ nhà niềm nở mời khách vào nhà「いらっしゃい。どうぞお上がりください」(Chào mừng bạn đến chơi! Xin mời vào nhà), khách đáp lại khi bước vào ➔ e:「失礼します」(Tôi xin phép làm phiền ạ).\n• 3): Lời rủ rê đi ngắm hoa anh đào「いっしょにお花見をしませんか」(Cùng đi ngắm hoa với tôi nhé?), người nghe vui vẻ đồng ý nhiệt tình ➔ b:「ええ、いいですね」(Vâng, hay quá / Được đấy nhỉ!).\n• 4): Câu hỏi thăm dò cảm nhận「日本語の勉強はどうですか」(Việc học tiếng Nhật thế nào?), người học nối 2 tính từ tương phản bằng「が」➔ f:「難しいですが、おもしろいです」(Khó nhưng mà thú vị).\n• 5): Khi người khác mời đồ uống「コーヒーです。どうぞ」(Cà phê đây ạ, xin mời), người nhận nói lời cảm ơn trước khi dùng bữa/uống ➔ c:「いただきます」(Tôi xin phép dùng ạ).\n• 6): Câu trả lời từ chối lịch sự「いいえ、けっこうです」(Dạ thôi, tôi đủ rồi ạ) phù hợp nhất với lời mời dùng thêm đồ uống ➔ j:「お茶、もう一杯いかがですか」(Anh/chị dùng thêm một tách trà nữa nhé?).\n• 7): Lời tiễn khách ra về của chủ nhà「じゃ、またいらっしゃってください」(Vậy lần sau lại đến chơi nữa nhé) đáp lại khi khách xin phép về ➔ k:「そろそろ失礼します」(Cũng sắp đến lúc tôi phải xin phép về rồi ạ).\n• 8): Lời đáp đồng thuận, hiểu rõ「ええ。わかりました」(Vâng, tôi hiểu rồi) ứng với câu hẹn gặp cụ thể ➔ l:「あした10時に会いましょう」(Ngày mai 10 giờ chúng ta gặp nhau nhé!).\n• 9): Người nói đưa đồ ra với「はい、どうぞ」(Vâng, xin mời) ứng với câu nhờ cho xem đồ vật ➔ m:「それを見せてください」(Xin hãy cho tôi xem cái đó). (Lưu ý: Không chọn i vì câu hỏi vị trí điện thoại sẽ trả lời nơi chốn, không đưa đồ với はい、どうぞ).\n• 10): Lời đồng cảm, chia sẻ sự vất vả「大変ですね」(Vất vả quá nhỉ!) ứng với câu kể về việc làm việc muộn ➔ h:「毎晩9時まで働きます」(Hàng tối tôi làm việc đến tận 9 giờ).\n(Lưu ý: Phương án g:「どういたしまして」và i:「電話はどこですか」là các đáp án dư/bẫy)."
      },
      {
        "id": "b8_q7",
        "type": "binary_choice",
        "tag": "Chọn từ đúng trong ngoặc",
        "question": "7. 例：〔<u>牛乳</u>／果物／野菜〕を飲みます。\n\n1) 〔先週／来月／去年〕メキシコへ行きます。\n2) 〔スーパー／セロテープ／エレベーター〕で卵を買います。\n3) 富士山は〔親切な／暇な／きれいな〕山です。\n4) 山田さんはワンさんに中国語を〔もらいました／習いました／借りました〕。\n5) きのう駅で友達に〔見ました／かけました／会いました〕。\n6) 日本のカメラは〔低い／安い／にぎやか〕ですか。\n7) お母さんの誕生日に何を〔もらいます／あげます／貸します〕か。\n8) 父の誕生日に〔ロビー／スーパー／プレゼント〕を送りました。\n9) ワットさんは大学で英語を教えます。ワットさんは〔先生／学生／会社員〕です。\n10) 暑いですね。あそこで〔ちょっと／とても／まだ〕休みましょう。",
        "answers": [
          "来月 / らいげつ",
          "スーパー",
          "きれいな / 綺麗な",
          "習いました / ならいました",
          "会いました / あいました",
          "安い / やすい",
          "あげます",
          "プレゼント",
          "先生 / せんせい",
          "ちょっと"
        ],
        "explanation": "• Ôn tập tổng hợp cách dùng từ vựng, tính từ và động từ tương thích ngữ cảnh trong Minna no Nihongo (Bài 1 - 8):\n• 例 (Ví dụ): Động từ「飲みます」(uống) chỉ đi với đồ uống dạng lỏng ➔ Chọn「牛乳」(sữa bò).「果物」(hoa quả) và「野菜」(rau củ) là đồ ăn.\n• 1): Động từ ở thì hiện tại/tương lai「行きます」(sẽ đi) ➔ Chỉ chọn danh từ thời gian tương lai「来月」(tháng sau).「先週」(tuần trước) và「去年」(năm ngoái) là quá khứ (phải dùng 行きました).\n• 2): Hành động mua trứng「卵を買います」diễn ra tại siêu thị ➔ Chọn nơi chốn mua hàng「スーパー」.「セロテープ」(băng dính),「エレベーター」(thang máy).\n• 3): Bổ nghĩa cho danh từ chỉ ngọn núi「山」➔ Chọn tính từ「きれいな」(núi đẹp).「親切な」(tốt bụng) dùng cho người;「暇な」(rảnh rỗi) dùng cho thời gian/người.\n• 4): Tiếp nhận ngôn ngữ/kiến thức từ người khác (ワンさんに) ➔ Dùng động từ「習いました」(được dạy / đã học từ ai).「もらいました」(nhận đồ vật),「借りました」(vay/mượn đồ vật).\n• 5): Đi với trợ từ「に」chỉ đối tượng gặp gỡ「友達に」➔ Dùng động từ「会いました」(đã gặp bạn). (Động từ 見ました đi với trợ từ を; động từ かけました dùng trong cụm 電話をかけました).\n• 6): Hỏi về giá cả máy ảnh Nhật Bản ➔ Dùng tính từ「安い」(rẻ) để hỏi「日本のカメラは安いですか」(Máy ảnh của Nhật có rẻ không?).「低い」(thấp - độ cao/nhiệt độ),「にぎやか」(náo nhiệt - phố xá).\n• 7): Vào ngày sinh nhật của mẹ, mình làm gì tặng mẹ ➔ Dùng động từ hướng tặng cho người khác「あげます」(tặng quà cho mẹ). (Nếu dùng もらいます thì phải là お母さんにもらいました - nhận quà từ mẹ, nhưng đây là sinh nhật mẹ; 貸します là cho mượn).\n• 8): Tân ngữ của hành động gửi quà「〜を送りました」(đã gửi) ➔ Chọn danh từ món quà「プレゼント」.「ロビー」(tiền sảnh),「スーパー」(siêu thị).\n• 9): Mệnh đề trước nêu rõ「大学で英語を教えます」(dạy tiếng Anh ở trường đại học) ➔ Nghề nghiệp tương ứng là「先生」(giáo viên).「学生」(học sinh),「会社員」(nhân viên công ty).\n• 10): Lời rủ rê nghỉ ngơi giải lao một lát vì trời nóng ➔ Dùng phó từ「ちょっと」(một chút / một lát):「あそこでちょっと休みましょう」(Chúng ta hãy nghỉ ở đằng kia một lát nhé).「とても」(rất - bổ nghĩa tính từ),「まだ」(vẫn còn / chưa)."
      },
      {
        "id": "b8_q8",
        "type": "fill",
        "tag": "Chia dạng thích hợp của động từ",
        "question": "8. 例：いっしょに昼ごはんを<u>食べませんか</u>。\n\n[Từ trong khung: 働きます，会います，撮ります，行きます，書きます，食べます，来ます]\n\n1) 先週の土曜日、どこも＿＿＿＿＿＿＿＿＿＿。\n2) じゃ、6時に駅で＿＿＿＿＿＿＿＿＿＿。…わかりました。\n3) いっしょに庭で写真を＿＿＿＿＿＿＿＿＿＿か。…いいですね。\n4) 毎晩彼女に手紙を＿＿＿＿＿＿＿＿＿＿。\n5) 毎日9時から5時まで会社で＿＿＿＿＿＿＿＿＿＿。",
        "answers": [
          "行きませんでした / いきませんでした",
          "会いましょう / あいましょう",
          "撮りませんか / とりませんか / 撮りましょうか / とりましょうか",
          "書きます / かきます",
          "働きます / はたらきます"
        ],
        "explanation": "• Ôn tập tổng hợp cách chia thì và thể của động từ theo ngữ cảnh trong Minna no Nihongo (Bài 1 - 8):\n• 例 (Ví dụ): Lời rủ rê cùng ăn trưa「いっしょに〜」dùng thể mời mọc「食べませんか」(Cùng ăn trưa nhé?).\n• 1): Mốc thời gian quá khứ「先週の土曜日」(Thứ Bảy tuần trước) đi với mẫu câu phủ định hoàn toàn「どこも + Động từ phủ định quá khứ」➔ Động từ「行きます」chia thành「行きませんでした」(Thứ Bảy tuần trước tôi chẳng đi đâu cả).\n• 2): Lời đề nghị, hẹn gặp mặt nhau「じゃ、6時に駅で〜」(Vậy 6 giờ ở nhà ga...) ➔ Động từ「会います」(gặp gỡ) chia sang thể đề nghị「会いましょう」(Chúng ta cùng gặp nhau lúc 6 giờ ở ga nhé).\n• 3): Lời mời rủ đi kèm「いっしょに〜か」(Cùng... nhé?) và câu nhận lời「いいですね」(Được đấy nhỉ) ➔ Động từ「撮ります」(chụp ảnh) chia thể rủ rê「撮りませんか」(Cùng chụp ảnh ở sân vườn nhé?).\n• 4): Trạng từ tần suất thói quen hằng ngày「毎晩」(mỗi tối) ➔ Động từ「書きます」(viết) giữ ở thì hiện tại biểu thị thói quen:「書きます」(Mỗi tối tôi đều viết thư cho bạn gái).\n• 5): Khoảng thời gian biểu thị giờ làm việc「毎日9時から5時まで」(từ 9 giờ đến 5 giờ mỗi ngày) tại công ty「会社で」➔ Động từ「働きます」(làm việc) ở thì hiện tại biểu thị công việc đều đặn:「働きます」(Mỗi ngày tôi làm việc ở công ty từ 9 giờ đến 5 giờ).\n(Lưu ý: Động từ「来ます」là đáp án bẫy/dư)."
      },
      {
        "id": "b8_q9",
        "type": "fill",
        "tag": "Đặt câu hoàn chỉnh dựa vào từ gợi ý",
        "question": "9. 例：帰ります／きのう／8時／うち\n   … <u>きのう 8時に うちへ 帰りました。</u>\n\n1) かけます／電話／ミラーさんの会社／これから\n   … ＿＿＿＿＿＿＿＿＿＿\n2) おいしいです／レストラン／コーヒー／この／とても\n   … ＿＿＿＿＿＿＿＿＿＿\n3) 食べます／スプーン／フォーク／インドネシア人／ごはん\n   … ＿＿＿＿＿＿＿＿＿＿\n4) 買います／デパート／チョコレート／おいしい／おととい\n   … ＿＿＿＿＿＿＿＿＿＿\n5) 行きます／バス／会社／毎朝\n   … ＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "これからミラーさんの会社に電話をかけます。 / これからミラーさんの会社へ電話をかけます。 / これからミラーさんの会社に電話をかけます / これからミラーさんの会社へ電話をかけます / これから ミラーさんの会社に 電話を かけます。 / ミラーさんの会社にこれから電話をかけます。",
          "このレストランのコーヒーはとてもおいしいです。 / このレストランのコーヒーはとてもおいしいです / この レストランの コーヒーは とても おいしいです。 / このレストランのコーヒーはとても美味しいです。",
          "インドネシア人はスプーンとフォークでごはんを食べます。 / インドネシア人はスプーンとフォークでご飯を食べます。 / インドネシア人はフォークとスプーンでごはんを食べます。 / インドネシア人はフォークとスプーンでご飯を食べます。 / インドネシア人はスプーンとフォークでごはんを食べます / インドネシア人は スプーンと フォークで ごはんを 食べます。",
          "おとといデパートでおいしいチョコレートを買いました。 / おとといデパートでおいしいチョコレートを買いました / おとといデパートで美味しいチョコレートを買いました。 / おととい デパートで おいしい チョコレートを 買いました。",
          "毎朝バスで会社へ行きます。 / 毎朝バスで会社に行きます。 / 毎朝バスで会社へ行きます / 毎朝バスで会社に行きます / 毎朝 バスで 会社へ 行きます。 / 毎朝会社へバスで行きます。"
        ],
        "explanation": "• Ôn tập tổng hợp cách đặt câu hoàn chỉnh kết hợp chia động từ và thêm trợ từ thích hợp trong Minna no Nihongo (Bài 1 - 8):\n• 例 (Ví dụ): Dựa vào mốc thời gian quá khứ「きのう」(hôm qua), động từ「帰ります」chia thành「帰りました」; mốc giờ cụ thể「8時」đi với trợ từ「に」; điểm đến「うち」đi với trợ từ hướng đến「へ」(hoặc「に」) ➔「きのう 8時に うちへ 帰りました。」(Hôm qua lúc 8 giờ tôi đã về nhà).\n• 1): Mốc thời gian「これから」(ngay từ bây giờ / từ bây giờ) dùng thì hiện tại/tương lai; gọi điện thoại đến công ty của anh Miller đi với trợ từ hướng đối tượng「に」(hoặc「へ」); cụm gọi điện thoại là「電話をかけます」➔「これからミラーさんの会社に電話をかけます。」(Ngay bây giờ tôi sẽ gọi điện thoại đến công ty của anh Miller).\n• 2): Chỉ thị từ「この」bổ nghĩa danh từ「レストラン」; quan hệ sở hữu/thuộc về nối bởi trợ từ「の」➔「このレストランのコーヒーは」(Cà phê của nhà hàng này); phó từ mức độ「とても」(rất) bổ nghĩa cho tính từ「おいしいです」➔「このレストランのコーヒーはとてもおいしいです。」(Cà phê của nhà hàng này rất ngon).\n• 3): Chủ đề người「インドネシア人は」(Người Indonesia); công cụ dụng cụ ăn uống đi với trợ từ「で」kết hợp liên từ nối danh từ「と」➔「スプーンとフォークで」(bằng thìa và nĩa); tân ngữ ăn cơm「ごはんを食べます」➔「インドネシア人はスプーンとフォークでごはんを食べます。」(Người Indonesia ăn cơm bằng thìa và nĩa).\n• 4): Mốc thời gian quá khứ「おととい」(hôm kia) ➔ động từ「買います」chia quá khứ「買いました」; nơi diễn ra hành động mua hàng đi với trợ từ「で」➔「デパートで」; tính từ đuôi い「おいしい」bổ nghĩa trực tiếp cho danh từ「チョコレート」làm tân ngữ「おいしいチョコレートを」➔「おとといデパートでおいしいチョコレートを買いました。」(Hôm kia tôi đã mua sô-cô-la ngon ở cửa hàng bách hóa).\n• 5): Trạng từ chỉ thói quen đều đặn「毎朝」(mỗi sáng) giữ động từ ở thì hiện tại「行きます」; phương tiện di chuyển đi với trợ từ「で」➔「バスで」; đích đến di chuyển đi với trợ từ「へ」(hoặc「に」) ➔「会社へ」➔「毎朝バスで会社へ行きます。」(Mỗi sáng tôi đi đến công ty bằng xe buýt)."
      }
    ]
  },
  "bai_9": {
    "title": "Bài 9",
    "completed": true,
    "questions": [
      {
        "id": "b9_q1",
        "type": "fill",
        "tag": "Điền trợ từ vào ngoặc",
        "question": "1. 例：きのう おもしろい（ × ）映画（ を ）見ました。\n\n1) 松本さんの奥さん（____）料理（____）上手です。\n\n2) どんな（____）スポーツ（____）好きですか。\n…野球（____）好きです。\n\n3) タイ語（____）わかりますか。\n…いいえ、全然（____）わかりません。\n\n4) あした いっしょに 花見（____）しませんか。\n…すみません。友達（____）約束（____）ありますから。\n\n5) 細かいお金（____）ありませんでした（____）、佐藤さん（____）借りました。",
        "answers": [
          "は",
          "が",
          "× / x",
          "が",
          "が",
          "が",
          "× / x",
          "を",
          "と",
          "が",
          "が",
          "から",
          "に / から"
        ],
        "explanation": "• Ôn tập trợ từ ngữ pháp Minna no Nihongo Bài 9:\n• 例 (Ví dụ): Tính từ đuôi い「おもしろい」bổ nghĩa trực tiếp cho danh từ「映画」(bộ phim thú vị) nên không dùng trợ từ, điền「×」. Tân ngữ của hành động xem「映画を見ました」dùng trợ từ「を」.\n• 1): Vị trí 1: Trợ từ「は」xác định chủ đề câu:「松本さんの奥さんは」(Vợ của anh Matsumoto thì...). Vị trí 2: Cấu trúc biểu thị năng lực/sở trường「N が 上手です」(giỏi nấu ăn) dùng trợ từ「が」.\n• 2): Vị trí 1: Nghi vấn từ「どんな」(như thế nào / nào) bổ nghĩa trực tiếp cho danh từ「スポーツ」, không dùng trợ từ, điền「×」. Vị trí 2: Cấu trúc hỏi sở thích「どんなスポーツが 好きですか」(thích môn thể thao nào?) dùng trợ từ「が」. Vị trí 3: Cấu trúc nêu sở thích「野球が 好きです」(tôi thích môn bóng chày) dùng trợ từ「が」.\n• 3): Vị trí 1: Cấu trúc biểu thị sự hiểu biết / khả năng「N が わかります」dùng trợ từ「が」:「タイ語が わかりますか」(Bạn có hiểu tiếng Thái không?). Vị trí 2: Phó từ mức độ「全然」(hoàn toàn / hẳn) bổ nghĩa trực tiếp cho thể phủ định phía sau「全然わかりません」(hoàn toàn không hiểu), không dùng trợ từ, điền「×」.\n• 4): Vị trí 1: Cụm từ rủ rê ngắm hoa「花見を しませんか」(Cùng đi ngắm hoa không?) dùng trợ từ「を」. Vị trí 2: Trợ từ「と」chỉ đối tượng cùng thực hiện / giao ước:「友達と」(với bạn bè). Vị trí 3: Cấu trúc biểu thị có cuộc hẹn「約束が あります」(có hẹn) dùng trợ từ「が」, kết hợp liên từ giải thích nguyên nhân「〜から」(vì có cuộc hẹn với bạn).\n• 5): Vị trí 1: Cấu trúc biểu thị có/không có tiền bạc「細かいお金が ありませんでした」(đã không có tiền lẻ) dùng trợ từ「が」. Vị trí 2: Liên từ nối mệnh đề chỉ nguyên nhân - kết quả:「〜ありませんでしたから」(vì đã không có...). Vị trí 3: Động từ vay mượn từ ai「佐藤さんに / から 借りました」(đã mượn từ anh Sato) dùng trợ từ「に」(hoặc「から」) chỉ nguồn tiếp nhận."
      },
      {
        "id": "b9_q2",
        "type": "binary_choice",
        "tag": "Chọn từ đúng trong ngoặc",
        "question": "2. 例：マリアさんは ダンスが〔たくさん／よく／<u>とても</u>〕上手です。\n\n1) きのうの晩〔あまり／よく／全然〕寝ました。\n\n2) 毎晩ワインを〔少し／あまり／とても〕飲みます。\n\n3) かたかなが〔全然／だいたい／たくさん〕わかります。\n\n4) きのうの晩〔とても／全然／だいたい〕勉強しませんでした。\n\n5) 京都で写真を〔だいたい／とても／たくさん〕撮りました。\n\n6) サントスさんはきのう〔少し／全然／早く〕帰りました。",
        "answers": [
          "よく",
          "少し / すこし",
          "だいたい",
          "全然 / ぜんぜん",
          "たくさん",
          "早く / はやく"
        ],
        "explanation": "• Cách dùng phó từ chỉ mức độ và số lượng trong Minna no Nihongo Bài 9:\n• 例 (Ví dụ): Bổ nghĩa cho tính từ chỉ năng lực「上手です」(giỏi) chỉ dùng phó từ mức độ「とても」(rất giỏi).「たくさん」(nhiều) và「よく」(rõ, tốt) không bổ nghĩa cho tính từ 上手.\n• 1): Động từ ở dạng khẳng định「寝ました」(đã ngủ). Phó từ「あまり」(không... lắm) và「全然」(hoàn toàn không...) chỉ đi kèm với thể phủ định (〜ない / 〜ません). Do đó chọn「よく」➔「よく 寝ました」(đã ngủ rất ngon / say giấc).\n• 2): Động từ「飲みます」(uống) đi với lượng từ chỉ số lượng ít là「少し」(uống một chút).「あまり」chỉ đi với phủ định;「とても」là phó từ chỉ mức độ bổ nghĩa cho tính từ/phó từ khác, không bổ nghĩa trực tiếp cho động từ uống rượu.\n• 3): Biểu thị mức độ hiểu biết với「わかります」(hiểu).「全然」chỉ đi với phủ định; tiếng Nhật không dùng「たくさん わかります」(sai ngữ pháp). Để biểu thị mức độ hiểu thì dùng「よく」(rõ),「だいたい」(đại khái),「少し」(một chút). Do đó chọn「だいたい」➔「かたかなが だいたい わかります」(tôi hiểu đại khái chữ Katakana).\n• 4): Động từ chia ở thể phủ định quá khứ「勉強しませんでした」(đã không học).「とても」(rất) và「だいたい」(đại khái) chỉ đi với câu khẳng định. Đi với phủ định hoàn toàn là phó từ「全然」➔「全然 勉強しませんでした」(tối qua tôi hoàn toàn không học bài).\n• 5): Hành động chụp nhiều ảnh「写真を〜撮りました」. Để biểu thị số lượng nhiều của sự vật/sản phẩm tạo ra, ta dùng phó từ chỉ số lượng「たくさん」➔「写真を たくさん 撮りました」(đã chụp rất nhiều ảnh). Không dùng「とても」với 撮りました;「だいたい」dùng cho hiểu biết/thời gian.\n• 6): Diễn tả hành động về sớm「帰りました」. Chọn phó từ chỉ thời gian「早く」(sớm - chuyển từ tính từ 早い) ➔「早く 帰りました」(hôm qua anh Santos đã về sớm).「全然」chỉ đi với phủ định;「少し 帰りました」sai về ngữ nghĩa."
      },
      {
        "id": "b9_q3",
        "type": "matching",
        "tag": "Chọn câu trả lời phù hợp từ các từ có sẵn",
        "question": "3. 木村：はい。\n山田：（ a ）。山田です。\n木村：ああ、山田さん、こんにちは。\n山田：（____）木村さん、カラオケ、いっしょにいかがですか。\n木村：（____）。いつですか。\n山田：土曜日の晩です。\n木村：土曜日の晩は（____）……。\n用事がありますから。\n山田：そうですか。\n木村：（____）。",
        "choices": [
          {
            "key": "a",
            "text": "木村さんですか",
            "isExample": true
          },
          {
            "key": "b",
            "text": "あのう"
          },
          {
            "key": "c",
            "text": "また今度お願いします"
          },
          {
            "key": "d",
            "text": "ちょっと"
          },
          {
            "key": "e",
            "text": "いいですね"
          }
        ],
        "answers": [
          "b / あのう",
          "e / いいですね",
          "d / ちょっと",
          "c / また今度お願いします"
        ],
        "explanation": "• Hội thoại rủ rê và từ chối khéo trong tiếng Nhật (Minna no Nihongo Bài 9):\n• 例 (Ví dụ): Sau khi người nghe nhấc máy「はい」(Alo / Vâng), người gọi xác nhận người nghe: a:「木村さんですか」(Có phải anh Kimura không?) rồi tự xưng tên mình:「山田です」(Tôi là Yamada).\n• 1): Thán từ đệm lịch sự, tế nhị mở đầu câu rủ rê/đề nghị: b:「あのう」(À / Này...) ➔「あのう、木村さん、カラオケ、いっしょにいかがですか」(À anh Kimura này, cùng đi hát Karaoke với tôi nhé?).\n• 2): Lời hưởng ứng nhiệt tình khi nhận lời mời: e:「いいですね」(Hay quá / Được đấy nhỉ!) ➔「いいですね。いつですか」(Hay quá nhỉ. Khi nào vậy?).\n• 3): Cách từ chối khéo, tế nhị trong tiếng Nhật: d:「ちょっと」(Hơi kẹt / Hơi khó...) ➔「土曜日の晩はちょっと……。用事がありますから」(Tối thứ Bảy thì hơi khó ạ... Vì tôi có việc bận mất rồi).\n• 4): Lời hẹn lịch sự sau khi từ chối để giữ mối quan hệ: c:「また今度お願いします」(Hẹn anh lần sau nhé / Để dịp khác nhờ anh rủ nhé!)."
      },
      {
        "id": "b9_q4",
        "type": "matching",
        "tag": "Chọn câu trả lời phù hợp từ các từ có sẵn",
        "question": "4. 例：子どもの誕生日ですから、（ d ）。\n\n1) 大きい荷物がありますから、（____）。\n2) 音楽が好きですから、（____）。\n3) 暑いですから、（____）。\n4) （____）から、わたしは今お金がありません。\n5) 野菜が好きじゃありませんから、（____）。\n6) （____）から、ひらがなで書きます。",
        "choices": [
          {
            "key": "a",
            "text": "あまり食べません"
          },
          {
            "key": "b",
            "text": "友達にお金を貸しました"
          },
          {
            "key": "c",
            "text": "漢字がわかりません"
          },
          {
            "key": "d",
            "text": "早く帰ります",
            "isExample": true
          },
          {
            "key": "e",
            "text": "冷たい飲み物を飲みます"
          },
          {
            "key": "f",
            "text": "CDがたくさんあります"
          },
          {
            "key": "g",
            "text": "タクシーで行きます"
          },
          {
            "key": "h",
            "text": "スポーツが嫌いです"
          }
        ],
        "answers": [
          "g / タクシーで行きます",
          "f / CDがたくさんあります",
          "e / 冷たい飲み物を飲みます",
          "b / 友達にお金を貸しました",
          "a / あまり食べません",
          "c / 漢字がわかりません"
        ],
        "explanation": "• Cấu trúc mệnh đề nguyên nhân「〜から」(vì... nên...) trong Minna no Nihongo Bài 9:\n• 例 (Ví dụ):「子どもの誕生日ですから」(Vì là sinh nhật của con) ➔ Kết quả phù hợp: d:「早く帰ります」(Tôi sẽ về sớm).\n• 1):「大きい荷物がありますから」(Vì có hành lý cồng kềnh) ➔ Phương thức di chuyển phù hợp: g:「タクシーで行きます」(Tôi đi bằng taxi).\n• 2):「音楽が好きですから」(Vì thích âm nhạc) ➔ Kết quả tương ứng: f:「CDがたくさんあります」(Tôi có nhiều đĩa CD).\n• 3):「暑いですから」(Vì trời nóng) ➔ Hành động giải nhiệt: e:「冷たい飲み物を飲みます」(Tôi uống đồ uống lạnh).\n• 4): Kết quả「わたしは今お金がありません」(Bây giờ tôi không có tiền) ➔ Nguyên nhân phù hợp: b:「友達にお金を貸しました」(Vì tôi đã cho bạn vay tiền).\n• 5):「野菜が好きじゃありませんから」(Vì tôi không thích rau) ➔ Thói quen ăn uống: a:「あまり食べません」(Tôi ít khi ăn).\n• 6): Kết quả「ひらがなで書きます」(Tôi viết bằng chữ Hiragana) ➔ Nguyên nhân: c:「漢字がわかりません」(Vì tôi không biết/không hiểu chữ Hán).\n(Lưu ý: Phương án h:「スポーツが嫌いです」là đáp án bẫy/dư)."
      },
      {
        "id": "b9_q5",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "5. 例：どうして日本語を勉強しますか。…<u>日本の会社で働きますから。</u>\n\n1) どうして朝ごはんを食べませんでしたか。\n…＿＿＿＿＿＿＿＿＿＿\n\n2) どうしていつもこのスーパーへ来ますか。\n…＿＿＿＿＿＿＿＿＿＿\n\n3) どうしてダンスをしませんか。\n…＿＿＿＿＿＿＿＿＿＿\n\n4) ＿＿＿＿＿＿＿＿＿＿\n…日本語がわかりませんから。\n\n5) ＿＿＿＿＿＿＿＿＿＿\n…お金がありませんから。",
        "answers": [
          "時間がありませんでしたから。",
          "安いですから。",
          "あまり好きじゃありませんから。",
          "どうして日本の新聞を読みませんか。",
          "どうして旅行へ行きませんか。"
        ],
        "explanation": "• Dạng câu hỏi mở luyện tập cấu trúc hỏi nguyên nhân「どうして〜か」(Tại sao...?) và trả lời giải thích lý do「〜から」(Vì...):\n• 例 (Ví dụ):「どうして日本語を勉強しますか」(Tại sao bạn học tiếng Nhật?) ➔ Trả lời lý do:「日本の会社で働きますから。」(Vì tôi sẽ làm việc tại công ty Nhật).\n• 1):「どうして朝ごはんを食べませんでしたか」(Tại sao sáng nay bạn không ăn sáng?) ➔ Trả lời lý do quá khứ:「時間がありませんでしたから。」(Vì tôi không có thời gian) hoặc「忙しかったですから。」(Vì tôi bận).\n• 2):「どうしていつもこのスーパーへ来ますか」(Tại sao bạn luôn đến siêu thị này?) ➔ Trả lời lý do tính chất:「安いですから。」(Vì rẻ) hoặc「近いですから。」(Vì gần).\n• 3):「どうしてダンスをしませんか」(Tại sao bạn không khiêu vũ/nhảy?) ➔ Trả lời lý do sở thích/năng lực:「あまり好きじゃありませんから。」(Vì tôi không thích lắm) hoặc「下手ですから。」(Vì tôi dở/kém).\n• 4): Cho trước câu trả lời nguyên nhân:「…日本語がわかりませんから。」(Vì tôi không hiểu tiếng Nhật) ➔ Đặt câu hỏi lý do tương ứng:「どうして日本の新聞を読みませんか。」(Tại sao bạn không đọc báo Nhật?) hoặc「どうして日本語を勉強しますか。」(Tại sao bạn lại học tiếng Nhật?).\n• 5): Cho trước câu trả lời nguyên nhân:「…お金がありませんから。」(Vì tôi không có tiền) ➔ Đặt câu hỏi lý do tương ứng:「どうして旅行へ行きませんか。」(Tại sao bạn không đi du lịch?) hoặc「どうして車を買いませんか。」(Tại sao bạn không mua ô tô?)."
      },
      {
        "id": "b9_q6",
        "type": "fill",
        "tag": "Điền nghi vấn từ thích hợp",
        "question": "6. 例：［ どんな ］音楽が好きですか。…クラシックが好きです。\n\n1) ［____］魚を食べませんか。…嫌いですから。\n\n2) ［____］映画が好きですか。…楽しい映画が好きです。\n\n3) 日本語の勉強は［____］ですか。…難しいですが、おもしろいです。\n\n4) あの黒いかばんは［____］のですか。…松本さんのです。\n\n5) \"Thank you.\" は日本語で［____］ですか。…「ありがとう」です。",
        "answers": [
          "どうして",
          "どんな",
          "どう",
          "だれ / どなた",
          "何 / なん"
        ],
        "explanation": "• Ôn tập cách dùng các từ nghi vấn trong Minna no Nihongo (Bài 1 - 9):\n• 例 (Ví dụ): Hỏi về thể loại/tính chất của âm nhạc mà người nghe yêu thích, dùng nghi vấn từ「どんな」➔「どんな音楽が好きですか」(Bạn thích thể loại âm nhạc nào?).\n• 1): Vế trả lời nêu lý do có「〜から」(嫌いですから: vì tôi ghét cá), nên câu hỏi phải hỏi về lý do「どうして」(Tại sao) ➔「どうして魚を食べませんか」(Tại sao bạn lại không ăn cá?).\n• 2): Vế trả lời là danh từ kèm tính từ bổ nghĩa「楽しい映画」(bộ phim vui nhộn), nên câu hỏi dùng「どんな」(như thế nào / thể loại nào) ➔「どんな映画が好きですか」(Bạn thích thể loại phim như thế nào?).\n• 3): Vế trả lời nêu lên nhận xét/cảm nghĩ「難しいですが、おもしろいです」(khó nhưng thú vị), câu hỏi về cảm nhận/tính chất của sự vật/việc học dùng nghi vấn từ「どう」(thế nào / ra sao) ➔「日本語の勉強はどうですか」(Việc học tiếng Nhật thế nào?).\n• 4): Vế trả lời chỉ người sở hữu「松本さんのです」(là của anh Matsumoto), nên câu hỏi về chủ sở hữu dùng từ để hỏi người「だれ」(hoặc lịch sự là「どなた」) ➔「あの黒いかばんはだれのですか」(Chiếc cặp màu đen kia là của ai vậy?).\n• 5): Hỏi cách diễn đạt một từ ngữ/câu bằng tiếng Nhật, dùng từ để hỏi「何」(hoặc「なん」) ➔「\"Thank you.\" は日本語で何ですか」(Từ \"Thank you\" trong tiếng Nhật là gì vậy?)."
      },
      {
        "id": "b9_q7",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "7. 1) 魚が好きですか。\n＿＿＿＿＿＿＿＿＿＿\n\n2) あしたの晩用事がありますか。\n＿＿＿＿＿＿＿＿＿＿\n\n3) どうして日本へ来ましたか。\n＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "はい、好きです。 / いいえ、好きじゃありません。",
          "はい、あります。 / いいえ、ありません。",
          "日本語を勉強しますから。 / 日本の会社で働きますから。"
        ],
        "explanation": "• Dạng câu hỏi mở hỏi về bản thân người học để tự luyện tập đối thoại (tự đối chiếu câu trả lời mẫu sau khi nộp bài):\n• 1):「魚が好きですか」(Bạn có thích cá không?) ➔ Trả lời khẳng định:「はい、好きです」; phủ định:「いいえ、好きじゃありません」.\n• 2):「あしたの晩用事がありますか」(Tối mai bạn có việc bận không?) ➔ Trả lời khẳng định:「はい、あります」(Có việc bận); phủ định:「いいえ、ありません」(Không có việc bận).\n• 3):「どうして日本へ来ましたか」(Tại sao bạn lại đến Nhật Bản?) ➔ Trả lời nêu nguyên nhân có kết thúc bằng「〜から」:「日本語を勉強しますから」(Vì tôi học tiếng Nhật) hoặc「日本の会社で働きますから」(Vì tôi làm việc ở công ty Nhật)."
      }
    ]
  }
,
  "bai_10": {
    "title": "Bài 10",
    "completed": true,
    "questions": [
      {
        "id": "b10_q1",
        "type": "binary_choice",
        "tag": "Chọn từ đúng trong ngoặc",
        "question": "1. 例：学校の前にポストが〔<u>あります</u>／います〕。\n\n1) 紅茶売り場は地下に〔あります／います〕。\n\n2) 今公園にだれも〔います／いません〕。\n\n3) バス乗り場はどこに〔あります／います〕か。\n\n4) 本屋は郵便局と喫茶店の間に〔あります／います〕。\n\n5) 箱の中に何も〔あります／ありません〕。\n\n6) 木の下に犬が〔あります／います〕。",
        "answers": [
          "あります",
          "いません",
          "あります",
          "あります",
          "ありません",
          "います"
        ],
        "explanation": "• Phân biệt động từ tồn tại「あります」và「います」(Minna no Nihongo Bài 10):\n  •「あります」: Dùng cho đồ vật vô tri vô giác, thực vật, sự kiện, địa điểm... (không có tri giác, không tự chuyển động).\n  •「います」: Dùng cho người, động vật (sinh vật sống có tri giác, tự di chuyển).\n  • Dạng phủ định hoàn toàn:「だれも + V phủ định」(hoàn toàn không có ai),「なにも + V phủ định」(hoàn toàn không có gì).\n• 例 (Ví dụ): Hòm thư「ポスト」là đồ vật vô tri nên dùng「あります」➔「学校の前にポストがあります」(Trước trường học có hòm thư).\n• 1): Quầy bán trà「紅茶売り場」là nơi bán / sự vật vô tri, dùng「あります」➔「紅茶売り場は地下にあります」(Quầy bán hồng trà ở dưới tầng hầm).\n• 2): Đi kèm với từ phủ định hoàn toàn「だれも」(không có ai cả) là thể phủ định của động từ chỉ người/động vật「いません」➔「今公園にだれもいません」(Bây giờ trong công viên không có ai cả).\n• 3): Điểm đón xe buýt「バス乗り場」là địa điểm/công trình vô tri, dùng「あります」➔「バス乗り場はどこにありますか」(Điểm đón xe buýt ở đâu vậy?).\n• 4): Hiệu sách「本屋」là cửa tiệm/địa điểm, dùng「あります」➔「本屋は郵便局と喫茶店の間にあります」(Hiệu sách ở giữa bưu điện và quán cà phê).\n• 5): Đi kèm với từ phủ định hoàn toàn「何も」(không có gì cả) là thể phủ định của động từ chỉ đồ vật「ありません」➔「箱の中に何もありません」(Trong hộp không có gì cả).\n• 6): Con chó「犬」là động vật có tri giác, dùng「います」➔「木の下に犬がいます」(Dưới gốc cây có con chó)."
      },
      {
        "id": "b10_q2",
        "type": "fill",
        "tag": "Điền trợ từ vào ngoặc",
        "question": "2. 例：わたし（ は ）コーヒーが好きです。\n\n1) このビル（____）喫茶店（____）ありますか。\n…はい、地下１階（____）あります。\n\n2) 牛乳（____）どこ（____）ありますか。\n…冷蔵庫（____）あります。\n\n3) あそこ（____）高いビル（____）ありますね。あれ（____）何ですか。\n\n4) 佐藤さんの隣（____）人（____）だれですか。\n\n5) 車の中（____）だれ（____）いますか。\n…だれ（____）いません。\n\n6) 駅の前（____）イーさん（____）会いました。",
        "answers": [
          "に",
          "が",
          "に",
          "は",
          "に",
          "に",
          "に",
          "が",
          "は",
          "の",
          "は",
          "に",
          "が",
          "も",
          "で",
          "に"
        ],
        "explanation": "• Ôn tập và vận dụng các trợ từ trong Minna no Nihongo Bài 10 (Chỉ vị trí tồn tại, chủ thể, hành động):\n  • Trợ từ「に」: Chỉ nơi chốn tồn tại của sự vật/người (khi đi với あります/います).\n  • Trợ từ「が」: Chỉ chủ thể của sự tồn tại「N が あります／います」, hoặc tân ngữ của tính từ biểu thị sở thích「好きです」.\n  • Trợ từ「は」: Xác định chủ đề của câu văn.\n  • Trợ từ「の」: Nối hai danh từ chỉ mối quan hệ vị trí/sở hữu.\n  • Trợ từ「も」: Kết hợp với nghi vấn từ tạo thành câu phủ định hoàn toàn「だれも〜ません」(không có ai cả).\n  • Trợ từ「で」: Chỉ nơi chốn diễn ra hành động (động từ hành động như 会います).\n• 例 (Ví dụ): Trợ từ「は」xác định chủ đề「わたしは」(Tôi thì...). Cấu trúc nêu sở thích「N が 好きです」(thích cà phê) dùng trợ từ「が」.\n• 1): Vị trí 1:「このビルに」: Trợ từ「に」chỉ địa điểm tồn tại (ở tòa nhà này). Vị trí 2:「喫茶店が ありますか」: Trợ từ「が」chỉ chủ thể tồn tại đi với động từ「あります」. Vị trí 3:「地下１階に あります」: Trợ từ「に」chỉ địa điểm tồn tại (ở tầng hầm 1).\n• 2): Vị trí 1:「牛乳は」: Đưa danh từ「牛乳」(sữa) lên làm chủ đề của câu, dùng trợ từ「は」. Vị trí 2:「どこに ありますか」: Từ để hỏi địa điểm đi với trợ từ「に」để hỏi nơi tồn tại (ở đâu). Vị trí 3:「冷蔵庫に あります」: Trợ từ「に」chỉ nơi tồn tại (trong tủ lạnh).\n• 3): Vị trí 1:「あそこに」: Trợ từ「に」chỉ nơi chốn tồn tại (ở đằng kia). Vị trí 2:「高いビルが ありますね」: Trợ từ「が」chỉ sự vật tồn tại「高いビル」(tòa nhà cao). Vị trí 3:「あれは 何ですか」: Đại từ chỉ thị「あれ」làm chủ đề câu, dùng trợ từ「は」(Cái kia là cái gì vậy?).\n• 4): Vị trí 1:「佐藤さんの隣の人」: Trợ từ「の」nối vị trí và danh từ chỉ người (người ở bên cạnh anh Sato). Vị trí 2:「人は だれですか」: Cụm「佐藤さんの隣の人は」làm chủ đề câu, dùng trợ từ「は」(Người bên cạnh anh Sato là ai vậy?).\n• 5): Vị trí 1:「車の中に」: Trợ từ「に」chỉ nơi chốn tồn tại (trong xe ô tô). Vị trí 2:「だれが いますか」: Từ để hỏi「だれ」làm chủ ngữ trong câu tồn tại đi với trợ từ「が」(có ai ở trong đó vậy?). Vị trí 3:「だれも いません」: Cấu trúc phủ định hoàn toàn「だれも〜ません」(không có ai cả) dùng trợ từ「も」.\n• 6): Vị trí 1:「駅の前で」: Trợ từ「で」chỉ nơi chốn diễn ra hành động gặp gỡ「会いました」(đã gặp ở trước nhà ga). Vị trí 2:「イーさんに 会いました」: Trợ từ「に」chỉ đối tượng hướng đến của hành động gặp gỡ (đã gặp anh Lee)."
      },
      {
        "id": "b10_q4",
        "type": "fill",
        "tag": "Hoàn thành câu hỏi dựa vào câu trả lời",
        "question": "4. 例：教室にだれがいますか。\n…カリナさんがいます。\n\n1) ミラーさんは＿＿＿＿＿＿＿＿＿＿\n…エレベーターの前にいます。\n\n2) スイッチは＿＿＿＿＿＿＿＿＿＿\n…ドアの右にあります。\n\n3) 事務所に＿＿＿＿＿＿＿＿＿＿\n…ミラーさんと佐藤さんがいます。\n\n4) 卵は＿＿＿＿＿＿＿＿＿＿\n…あの棚の上にあります。\n\n5) 庭に＿＿＿＿＿＿＿＿＿＿\n…だれもいません。",
        "answers": [
          "どこにいますか。 / どこにいますか / どこですか。 / どこですか",
          "どこにありますか。 / どこにありますか / どこですか。 / どこですか",
          "だれがいますか。 / だれがいますか / 誰がいますか。 / 誰がいますか",
          "どこにありますか。 / どこにありますか / どこですか。 / どこですか",
          "だれがいますか。 / だれがいますか / だれかいますか。 / だれかいますか / 誰がいますか。 / 誰がいますか"
        ],
        "explanation": "• Cấu trúc hỏi vị trí tồn tại và hỏi người/vật tồn tại (Minna no Nihongo Bài 10):\n• 例 (Ví dụ): Hỏi có ai ở trong phòng học:「教室にだれがいますか」(Ở phòng học có ai vậy?) ➔「カリナさんがいます」(Có bạn Karina).\n• 1): Vế trả lời là vị trí của người (thang máy):「エレベーターの前にいます」(ở trước thang máy), nên câu hỏi vị trí người dùng「どこにいますか」(đang ở đâu vậy?) ➔「ミラーさんはどこにいますか」(Anh Miller ở đâu vậy?).\n• 2): Vế trả lời là vị trí của đồ vật (công tắc):「ドアの右にあります」(ở bên phải cửa ra vào), nên câu hỏi vị trí đồ vật dùng「どこにありますか」(ở đâu vậy?) ➔「スイッチはどこにありますか」(Công tắc ở đâu vậy?).\n• 3): Vế trả lời nêu người có mặt ở văn phòng:「ミラーさんと佐藤さんがいます」(có anh Miller và anh Sato), nên câu hỏi có ai ở văn phòng dùng từ để hỏi người「だれがいますか」➔「事務所にだれがいますか」(Ở văn phòng có ai vậy?).\n• 4): Vế trả lời là vị trí của đồ vật (trứng):「あの棚の上にあります」(ở trên cái kệ kia), câu hỏi vị trí đồ vật dùng「どこにありますか」➔「卵はどこにありますか」(Trứng ở đâu vậy?).\n• 5): Vế trả lời phủ định hoàn toàn:「だれもいません」(không có ai cả), câu hỏi ai có mặt ở trong sân dùng「だれがいますか」(hoặc「だれかいますか」) ➔「庭にだれがいますか」(Trong sân có ai vậy?)."
      },
      {
        "id": "b10_q5",
        "type": "fill",
        "tag": "Đặt câu hoàn chỉnh dựa vào từ gợi ý",
        "question": "5. 例１：はさみ／箱／中…はさみは箱の中にあります。\n   例２：冷蔵庫／中／いろいろな物…冷蔵庫の中にいろいろな物があります。\n\n1) 犬／男の人／女の人／間…犬＿＿＿＿＿＿＿＿＿＿\n\n2) ATM／飲み物の棚／前…ATM＿＿＿＿＿＿＿＿＿＿\n\n3) 庭／男の子／女の子…庭＿＿＿＿＿＿＿＿＿＿\n\n4) いす／下／猫…いす＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "は男の人と女の人の間にいます。 / は男の人と女の人の間にいます / はおとこのひととおんなのひとのあいだにいます。 / はおとこのひととおんなのひとのあいだにいます / 犬は男の人と女の人の間にいます。 / 犬は男の人と女の人の間にいます / いぬはおとこのひととおんなのひとのあいだにいます。 / いぬはおとこのひととおんなのひとのあいだにいます",
          "は飲み物の棚の前にあります。 / は飲み物の棚の前にあります / はのみもののたなのまえにあります。 / はのみもののたなのまえにあります / ATMは飲み物の棚の前にあります。 / ATMは飲み物の棚の前にあります / ATMはのみもののたなのまえにあります。 / ATMはのみもののたなのまえにあります",
          "に男の子と女の子がいます。 / に男の子と女の子がいます / におとこのことおんなのこがいます。 / におとこのことおんなのこがいます / 庭に男の子と女の子がいます。 / 庭に男の子と女の子がいます / にわにおとこのことおんなのこがいます。 / にわにおとこのことおんなのこがいます",
          "の下に猫がいます。 / の下に猫がいます / のしたにねこがいます。 / のしたにねこがいます / いすの下に猫がいます。 / いすの下に猫がいます / いすのしたにねこがいます。 / いすのしたにねこがいます / 椅子の下に猫がいます。 / 椅子の下に猫がいます"
        ],
        "explanation": "• Luyện tập 2 mẫu câu tồn tại trong Minna no Nihongo Bài 10:\n  • Mẫu 1:「N1 は N2 の [Vị trí] に あります／います」(N1 thì ở vị trí của N2).\n  • Mẫu 2:「[Địa điểm] の [Vị trí] に N が あります／います」(Ở địa điểm có N).\n• 例 1: Đưa đồ vật lên làm chủ đề:「はさみは箱の中にあります」(Kéo thì ở trong hộp).\n• 例 2: Đưa địa điểm lên đầu:「冷蔵庫の中にいろいろな物があります」(Trong tủ lạnh có nhiều thứ đồ).\n• 1): Theo mẫu 1: Con chó là động vật (dùng います), nằm ở giữa người đàn ông và người phụ nữ (dùng trợ từ と nối 2 danh từ và từ chỉ vị trí 間):「犬は男の人と女の人の間にいます」(Con chó ở giữa người đàn ông và người phụ nữ).\n• 2): Theo mẫu 1: Cây ATM là vật (dùng あります), nằm ở phía trước kệ nước uống:「ATMは飲み物の棚の前にあります」(Cây ATM ở phía trước kệ nước uống).\n• 3): Theo mẫu 2: Ở ngoài sân có bé trai và bé gái (người dùng います):「庭に男の子と女の子がいます」(Ở ngoài sân có bé trai và bé gái).\n• 4): Theo mẫu 2: Dưới ghế có con mèo (động vật dùng います):「いすの下に猫がいます」(Ở dưới ghế có con mèo)."
      },
      {
        "id": "b10_q6",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "6. 1) 近くにおいしいパン屋がありますか。\n＿＿＿＿＿＿＿＿＿＿\n\n2) あなたの家族は今どこにいますか。\n＿＿＿＿＿＿＿＿＿＿\n\n3) あなたのかばんはどこにありますか。\n＿＿＿＿＿＿＿＿＿＿\n\n4) かばんの中に何がありますか。\n＿＿＿＿＿＿＿＿＿＿\n\n5) 机の下に何がありますか。\n＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "はい、あります。 / いいえ、ありません。",
          "ベトナムにいます。 / ハノイにいます。",
          "机の上にあります。 / 机の下にあります。",
          "本やノートがあります。 / 何もありません。",
          "ごみ箱があります。 / 何もありません。"
        ],
        "explanation": "• Dạng câu hỏi mở hỏi về thông tin bản thân và môi trường xung quanh (tự đối chiếu câu trả lời mẫu sau khi nộp bài):\n• 1):「近くにおいしいパン屋がありますか」(Ở gần đây có tiệm bánh mì ngon không?) ➔ Khẳng định:「はい、あります」; Phủ định:「いいえ、ありません」.\n• 2):「あなたの家族は今どこにいますか」(Gia đình bạn bây giờ đang ở đâu?) ➔ Người trong gia đình dùng「います」kèm địa điểm「〜にいます」(Ví dụ:「ベトナムにいます」,「ハノイにいます」...).\n• 3):「あなたのかばんはどこにありますか」(Cặp sách của bạn ở đâu?) ➔ Đồ vật dùng「あります」(Ví dụ:「机の上にあります」: ở trên bàn,「いすの上にあります」: ở trên ghế...).\n• 4):「かばんの中に何がありますか」(Trong cặp có cái gì?) ➔ Nêu các đồ vật trong cặp「N や N が あります」(Ví dụ:「本やノートがあります」: có sách và vở; Nếu không có gì:「何もありません」).\n• 5):「机の下に何がありますか」(Dưới gầm bàn có cái gì?) ➔ Nêu đồ vật dưới bàn (Ví dụ:「ごみ箱があります」: có thùng rác;「かばんがあります」: có chiếc cặp; Nếu trống:「何もありません」)."
      }
    ]
  },
  "bai_11": {
    "title": "Bài 11",
    "completed": false,
    "questions": [
      {
        "id": "b11_q1",
        "type": "fill",
        "tag": "Điền từ vào bảng",
        "table": {
          "title": "Bảng số đếm đồ vật & người (助数詞)",
          "headers": ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "?"],
          "rows": [
            ["1) 人", "（____）", "（____）", "（____）", "（____）", "ごにん", "（____）", "（____）", "はちにん", "（____）", "（____）", "（____）"],
            ["2) 切手", "（____）", "にまい", "（____）", "（____）", "（____）", "（____）", "ななまい", "（____）", "（____）", "（____）", "なんまい"],
            ["3) 車", "いちだい", "（____）", "（____）", "（____）", "（____）", "ろくだい", "（____）", "（____）", "（____）", "（____）", "（____）"],
            ["4) 卵", "（____）", "ふたつ", "（____）", "（____）", "いつつ", "（____）", "（____）", "（____）", "（____）", "（____）", "（____）"]
          ]
        },
        "question": "1.",
        "answers": [
          "ひとり / 1人 / 一人",
          "ふたり / 2人 / 二人",
          "さんにん / 3人 / 三人",
          "よにん / 4人 / 四人",
          "ろくにん / 6人 / 六人",
          "ななにん / しちにん / 7人 / 七人",
          "きゅうにん / くにん / 9人 / 九人",
          "じゅうにん / 10人 / 十人",
          "なんにん / 何人",
          "いちまい / 1枚 / 一枚",
          "さんまい / 3枚 / 三枚",
          "よんまい / 4枚 / 四枚",
          "ごまい / 5枚 / 五枚",
          "ろくまい / 6枚 / 六枚",
          "はちまい / 8枚 / 八枚",
          "きゅうまい / 9枚 / 九枚",
          "じゅうまい / 10枚 / 十枚",
          "にだい / 2台 / 二台",
          "さんだい / 3台 / 三台",
          "よんだい / 4台 / 四台",
          "ごだい / 5台 / 五台",
          "ななだい / しちだい / 7台 / 七台",
          "はちだい / 8台 / 八台",
          "きゅうだい / くだい / 9台 / 九台",
          "じゅうだい / 10台 / 十台",
          "なんだい / 何台",
          "ひとつ / 1つ / 一つ",
          "みっつ / 3つ / 三つ",
          "よっつ / 4つ / 四つ",
          "むっつ / 6つ / 六つ",
          "ななつ / 7つ / 七つ",
          "やっつ / 8つ / 八つ",
          "ここのつ / 9つ / 九つ",
          "とお / 10 / 十",
          "いくつ / 何個 / 何つ"
        ],
        "explanation": "• Ôn tập các lượng từ / trợ số từ đếm đồ vật, người, máy móc trong Minna no Nihongo Bài 11:\n• 1) Đếm người (人 - にん):\n  - 1 người:「ひとり」(一人)\n  - 2 người:「ふたり」(二人)\n  - 4 người:「よにん」(四人 - chú ý: không đọc là よんにん hay しにん)\n  - 7 người:「ななにん」(七人 - hoặc しちにん)\n  - 9 người:「きゅうにん」(九人 - hoặc くにん)\n  - Nghi vấn từ (mấy người):「なんにん」(何人)\n  - Các số còn lại đếm đều: Số + にん: 3人 (さんにん), 5人 (ごにん), 6人 (ろくにん), 8人 (はちにん), 10人 (じゅうにん).\n• 2) Đếm vật mỏng, phẳng (枚 - まい):\n  - Áp dụng đếm tem (切手), vé (切符), áo sơ mi, giấy, đĩa CD...\n  - Quy tắc đều đặn: Số + まい: 1枚 (いちまい), 2枚 (にまい), 3枚 (さんまい), 4枚 (よんまい), 5枚 (ごまい), 6枚 (ろくまい), 7枚 (ななまい), 8枚 (はちまい), 9枚 (きゅうまい), 10枚 (じゅうまい).\n  - Nghi vấn từ:「なんまい」(何枚 - mấy tờ/mấy tấm).\n• 3) Đếm máy móc, xe cộ (台 - だい):\n  - Áp dụng đếm xe ô tô (車), xe đạp (自転車), máy tính, TV...\n  - Quy tắc đều đặn: Số + だい: 1台 (いちだい), 2台 (にだい), 3台 (さんだい), 4台 (よんだい), 5台 (ごだい), 6台 (ろくだい), 7台 (ななだい / しちだい), 8台 (はちだい), 9台 (きゅうだい / くだい), 10台 (じゅうだい).\n  - Nghi vấn từ:「なんだい」(何台 - mấy chiếc).\n• 4) Đếm đồ vật nói chung (số đếm thuần Nhật 〜つ):\n  - Đếm đồ vật nói chung từ 1 đến 10 cái (trứng, quả táo, ghế, bánh, ý tưởng...):\n    + 1:「ひとつ」(一つ)\n    + 2:「ふたつ」(二つ)\n    + 3:「みっつ」(三つ - âm ngắt っ)\n    + 4:「よっつ」(四つ - âm ngắt っ)\n    + 5:「いつつ」(五つ)\n    + 6:「むっつ」(六つ - âm ngắt っ)\n    + 7:「ななつ」(七つ)\n    + 8:「やっつ」(八つ - âm ngắt っ)\n    + 9:「ここのつ」(九つ)\n    + 10:「とお」(十 - đặc biệt KHÔNG có đuôi つ)\n    + Nghi vấn từ:「いくつ」(mấy cái / bao nhiêu cái). Từ 11 trở lên dùng số đếm thông thường không có 〜つ."
      },
      {
        "id": "b11_q2",
        "type": "fill",
        "tag": "Điền từ",
        "question": "2. 例：郵便局はどこ（ に ）ありますか。…駅の近く（ × ）です。\n\n1) りんご（____）4つ（____）買いました。\n2) 80円の切手を5枚（____）はがき（____）3枚（____）ください。\n3) 店（____）前（____）自転車（____）20台ぐらい（____）あります。\n4) 1週間（____）1回（____）両親（____）電話（____）かけます。\n5) 大阪（____）東京（____）新幹線（____）2時間半ぐらい（____）かかります。\n6) わたしの家族は5人です。両親（____）弟（____）2人（____）います。\n7) 先月1週間（____）会社（____）休みました。\n8) この荷物、航空便（____）お願いします。",
        "answers": [
          "を / o / wo",
          "x / × / X",
          "と / to",
          "を / o / wo",
          "x / × / X",
          "の / no",
          "に / ni",
          "が / ga",
          "x / × / X",
          "に / ni",
          "x / × / X",
          "に / ni",
          "を / o / wo",
          "から / kara",
          "まで / made",
          "で / de",
          "x / × / X",
          "と / to",
          "が / ga",
          "x / × / X",
          "x / × / X",
          "を / o / wo",
          "で / de"
        ],
        "explanation": "• Ôn tập trợ từ và số từ trong Minna no Nihongo Bài 11:\n• 例 (Ví dụ): Vị trí tồn tại của địa điểm/vật「郵便局」đi với động từ「あります」dùng trợ từ「に」:「どこ に ありますか」. Sau danh từ vị ngữ「駅の近く」đứng trước「です」không dùng trợ từ, điền「×」.\n• 1): Vị trí 1: Trợ từ「を」đánh dấu tân ngữ của động từ「買いました」(mua táo:「りんご を」). Vị trí 2: Số từ「4つ」(4 quả) đứng ngay trước động từ và bổ nghĩa trực tiếp cho「買いました」, KHÔNG dùng trợ từ đi kèm, nên điền「×」.\n• 2): Vị trí 1: Dùng trợ từ「と」(và) để liên kết 2 món đồ cần mua:「80円の切手を5枚 と はがきを3枚」(5 con tem 80 yên VÀ 3 tấm bưu thiếp). Vị trí 2: Trợ từ「を」đánh dấu tân ngữ thứ hai「はがき を」. Vị trí 3: Sau số từ「3枚」trước「ください」không dùng trợ từ, điền「×」.\n• 3): Vị trí 1: Trợ từ「の」nối 2 danh từ chỉ nơi chốn:「店 の 前」(trước cửa tiệm). Vị trí 2: Trợ từ「に」chỉ vị trí tồn tại:「前 に」. Vị trí 3: Trợ từ「が」đánh dấu chủ ngữ tồn tại của vật:「自転車 が あります」. Vị trí 4: Cụm số lượng ước lượng「20台ぐらい」(khoảng 20 chiếc) bổ nghĩa cho「あります」, không cần trợ từ, điền「×」.\n• 4): Vị trí 1: Cấu trúc biểu thị tần suất「[Khoảng thời gian] に [Số lần]」(1週間に1回: 1 tuần 1 lần) bắt buộc dùng trợ từ「に」sau khoảng thời gian. Vị trí 2: Sau số lần「1回」không dùng trợ từ, điền「×」. Vị trí 3: Đối tượng tiếp nhận cuộc gọi (bố mẹ) dùng trợ từ「に」:「両親 に」. Vị trí 4: Tân ngữ của động từ gọi điện thoại「かけます」dùng trợ từ「を」:「電話 を かけます」.\n• 5): Vị trí 1 & 2: Cặp trợ từ「から」và「まで」biểu thị điểm xuất phát và đích đến trong không gian:「大阪 から 東京 まで」(từ Osaka đến Tokyo). Vị trí 3: Trợ từ「で」chỉ phương tiện di chuyển:「新幹線 で」(bằng tàu Shinkansen). Vị trí 4: Cụm thời gian「2時間半ぐらい」(khoảng 2 tiếng rưỡi) bổ nghĩa trực tiếp cho động từ tiêu tốn thời gian「かかります」, không dùng trợ từ, điền「×」.\n• 6): Vị trí 1: Trợ từ liên kết「と」(và) nối các thành viên gia đình:「両親 と 弟」(bố mẹ VÀ em trai). Vị trí 2: Trợ từ「が」đánh dấu chủ ngữ người tồn tại đi với「います」:「弟 が 2人 います」. Vị trí 3: Sau số lượng người「2人」đứng trước「います」không dùng trợ từ, điền「×」. (Tổng số: tôi (1) + bố mẹ (2) + 2 em trai (2) = 5 người).\n• 7): Vị trí 1: Cụm「先月1週間」(1 tuần tháng trước) là khoảng thời gian kéo dài, bổ nghĩa trực tiếp cho động từ nên không dùng trợ từ「に」, điền「×」. Vị trí 2: Động từ「休みます」(nghỉ làm / nghỉ học) mang tính chất rời khỏi địa điểm nên đi kèm trợ từ「を」với nơi chốn:「会社 を 休みました」(đã nghỉ làm ở công ty).\n• 8): Trợ từ「で」chỉ phương thức/phương tiện vận chuyển:「航空便 で お願いします」(làm ơn gửi bằng đường hàng không)."
      },
      {
        "id": "b11_q3",
        "type": "fill",
        "tag": "Hoàn thành câu dựa vào câu có sẵn",
        "question": "3. 例：<u>お父さん</u>は何歳ですか。…<u>父</u>は50歳です。\n\n1) お母さんはどこにいますか。…＿＿＿＿＿＿＿＿＿＿はアメリカにいます。\n2) ＿＿＿＿＿＿＿＿＿＿はどんなスポーツが好きですか。…兄はサッカーが好きです。\n3) お姉さんはどのくらい日本にいますか。…＿＿＿＿＿＿＿＿＿＿は3か月日本にいます。\n4) 妹さんはどこへ行きましたか。…＿＿＿＿＿＿＿＿＿＿は郵便局へ行きました。\n5) ＿＿＿＿＿＿＿＿＿＿はお元気ですか。…ええ、弟はとても元気です。\n6) 奥さんはどのくらい日本語を勉強しましたか。…＿＿＿＿＿＿＿＿＿＿は3か月勉強しました。\n7) ＿＿＿＿＿＿＿＿＿＿は会社員ですか。…いいえ、夫は教師です。",
        "answers": [
          "母 / はは / 母は / ははは",
          "お兄さん / おにいさん / お兄さんは / おにいさんは",
          "姉 / あね / 姉は / あねは",
          "妹 / いもうと / 妹は / いもうとは",
          "弟さん / おとうとさん / 弟さんは / おとうとさんは",
          "妻 / つま / 家内 / かない / 妻は / つまは / 家内は / かないは",
          "ご主人 / ごしゅじん / ご主人は / ごしゅじんは"
        ],
        "explanation": "• Quy tắc xưng hô các thành viên gia đình (Gia đình mình vs Gia đình người khác) trong Minna no Nihongo Bài 11:\n  • Khi nói về gia đình mình (Khiêm nhường ngữ):「父」(bố),「母」(mẹ),「兄」(anh),「姉」(chị),「弟」(em trai),「妹」(em gái),「妻」/「家内」(vợ),「夫」/「主人」(chồng).\n  • Khi nói/hỏi về gia đình người khác (Kính ngữ/Lịch sự):「お父さん」,「お母さん」,「お兄さん」,「お姉さん」,「弟さん」,「妹さん」,「奥さん」,「ご主人」.\n• 例 (Ví dụ): Hỏi về bố người khác dùng「お父さん」➔ Trả lời về bố mình dùng「父」:「お父さんは何歳ですか。…父は50歳です」.\n• 1): Hỏi về mẹ bạn「お母さん」➔ Trả lời về mẹ mình dùng「母」(はは):「母はアメリカにいます」(Mẹ tôi ở Mỹ).\n• 2): Trả lời về anh trai mình「兄」➔ Câu hỏi hỏi về anh trai của người đối diện dùng「お兄さん」(おにいさん):「お兄さんはどんなスポーツが好きですか」(Anh trai bạn thích môn thể thao nào?).\n• 3): Hỏi về chị bạn「お姉さん」➔ Trả lời về chị mình dùng「姉」(あね):「姉は3か月日本にいます」(Chị tôi ở Nhật 3 tháng rồi).\n• 4): Hỏi về em gái bạn「妹さん」➔ Trả lời về em gái mình dùng「妹」(いもうと):「妹は郵便局へ行きました」(Em gái tôi đã đi bưu điện).\n• 5): Trả lời về em trai mình「弟」➔ Câu hỏi hỏi về em trai bạn dùng「弟さん」(おとうとさん):「弟さんはお元気ですか」(Em trai bạn có khỏe không?).\n• 6): Hỏi về vợ bạn「奥さん」➔ Trả lời về vợ mình dùng「妻」(つま) hoặc「家内」(かない):「妻は3か月勉強しました」(Vợ tôi đã học 3 tháng).\n• 7): Trả lời về chồng mình「夫」➔ Câu hỏi hỏi về chồng bạn dùng「ご主人」(ごしゅじん):「ご主人は会社員ですか」(Chồng bạn là nhân viên công ty phải không?)."
      },
      {
        "id": "b11_q4",
        "type": "fill",
        "tag": "Điền từ để hỏi số lượng",
        "question": "4. 例：テーブルが [ いくつ ] ありますか。…2つあります。\n\n1) 教室に男の人が [ ＿＿＿＿＿＿＿＿＿＿ ] いますか。…4人います。\n2) 1年に [ ＿＿＿＿＿＿＿＿＿＿ ] 映画を見ますか。…5回ぐらい見ます。\n3) 国で [ ＿＿＿＿＿＿＿＿＿＿ ] 日本語を勉強しましたか。…6か月ぐらい勉強しました。\n4) はがきを [ ＿＿＿＿＿＿＿＿＿＿ ] 買いますか。…10枚買います。\n5) この荷物、船便で [ ＿＿＿＿＿＿＿＿＿＿ ] ですか。…2,900円です。",
        "answers": [
          "何人 / なんにん",
          "何回 / なんかい",
          "どのくらい / どのぐらい / どれくらい / 何か月 / なんかげつ",
          "何枚 / なんまい",
          "いくら"
        ],
        "explanation": "• Ôn tập các từ nghi vấn hỏi về số lượng, thời gian, tần suất, tiền bạc trong Minna no Nihongo Bài 11:\n• 例 (Ví dụ): Vế trả lời là số lượng đồ vật「2つあります」(có 2 cái), nên câu hỏi dùng từ để hỏi số lượng đồ vật「いくつ」(mấy cái):「テーブルがいくつありますか」(Có mấy cái bàn?).\n• 1): Vế trả lời là số lượng người「4人います」(có 4 người), nên câu hỏi dùng từ để hỏi số lượng người「何人」(なんにん - mấy người):「教室に男の人が何人いますか」(Trong lớp học có mấy người nam vậy?).\n• 2): Vế trả lời là số lần / tần suất thực hiện hành động「5回ぐらい見ます」(xem khoảng 5 lần), nên câu hỏi dùng từ để hỏi số lần「何回」(なんかい - mấy lần):「1年に何回映画を見ますか」(Một năm bạn xem phim mấy lần?).\n• 3): Vế trả lời là khoảng thời gian kéo dài「6か月ぐらい勉強しました」(đã học khoảng 6 tháng), nên câu hỏi dùng từ để hỏi khoảng thời gian「どのくらい」(bao lâu - hoặc どれくらい / どのぐらい / 何か月):「国でどのくらい日本語を勉強しましたか」(Bạn đã học tiếng Nhật ở trong nước bao lâu rồi?).\n• 4): Vế trả lời là số lượng vật mỏng, phẳng (tờ, tấm)「10枚買います」(mua 10 tờ), nên câu hỏi dùng từ để hỏi lượng từ mỏng phẳng「何枚」(なんまい - mấy tờ/tấm):「はがきを何枚買いますか」(Bạn mua mấy tấm bưu thiếp?).\n• 5): Vế trả lời là giá tiền / cước phí bưu điện「2,900円です」(2,900 yên), nên câu hỏi về giá tiền dùng từ để hỏi「いくら」(bao nhiêu tiền):「この荷物、船便でいくらですか」(Gói hàng này gửi bằng đường biển thì bao nhiêu tiền?)."
      },
      {
        "id": "b11_q5",
        "type": "fill",
        "tag": "Đặt câu hoàn chỉnh dựa vào từ gợi ý",
        "question": "5. 例：テーブルの上／みかん／3／卵／5／あります\n…<u>テーブルの上にみかんが3つと卵が5つあります。</u>\n\n1) 庭／男の子／3／女の子／2／います…＿＿＿＿＿＿＿＿＿＿\n2) 90円の切手／1／はがき／2／ください…＿＿＿＿＿＿＿＿＿＿\n3) 事務所／コンピューター／5／あります…＿＿＿＿＿＿＿＿＿＿\n4) 3か月／日本語／勉強しました…＿＿＿＿＿＿＿＿＿＿\n5) 1週間／2／テニス／します…＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "庭に男の子が3人と女の子が2人います。 / 庭に男の子が3人と女の子が2人います / 庭に男の子が三人と女の子が二人います。 / 庭に男の子が三人と女の子が二人います / にわにおとこのこが3にんとおんなのこが2にんいます。 / にわにおとこのこが3にんとおんなのこが2にんいます / にわにおとこのこがさんにんとおんなのこがふたりいます。 / にわにおとこのこがさんにんとおんなのこがふたりいます",
          "90円の切手を1枚とはがきを2枚ください。 / 90円の切手を1枚とはがきを2枚ください / 90円の切手を1枚とはがき2枚ください。 / 90円の切手を1枚とはがき2枚ください / 90円の切手1枚とはがき2枚ください。 / 90円の切手1枚とはがき2枚ください / 90えんのきってを1まいとはがきを2まいください。 / 90えんのきってを1まいとはがきを2まいください / 90円の切手を一枚とはがきを二枚ください。 / 90円の切手を一枚とはがきを二枚ください",
          "事務所にコンピューターが5台あります。 / 事務所にコンピューターが5台あります / じむしょにコンピューターが5だいあります。 / じむしょにコンピューターが5だいあります / 事務所にコンピューターが五台あります。 / 事務所にコンピューターが五台あります / じむしょにコンピューターがごだいあります。 / じむしょにコンピューターがごだいあります",
          "3か月日本語を勉強しました。 / 3か月日本語を勉強しました / 3か月間日本語を勉強しました。 / 3か月間日本語を勉強しました / 日本語を3か月勉強しました。 / 日本語を3か月勉強しました / 日本語を3か月間勉強しました。 / 日本語を3か月間勉強しました / 3かげつにほんごをべんきょうしました。 / 3かげつにほんごをべんきょうしました / 三か月日本語を勉強しました。 / 三か月日本語を勉強しました",
          "1週間に2回テニスをします。 / 1週間に2回テニスをします / 1週間に2回テニスをします。 / 1週間に二回テニスをします / 1しゅうかんに2かいてにすをします。 / 1しゅうかんに2かいてにすをします / 1しゅうかんににかいてにすをします。 / 1しゅうかんににかいてにすをします / テニスを1週間に2回します。 / テニスを1週間に2回します"
        ],
        "explanation": "• Luyện tập đặt câu hoàn chỉnh kết hợp số từ, lượng từ và trợ từ (Minna no Nihongo Bài 11):\n• 例 (Ví dụ):「テーブルの上／みかん／3／卵／5／あります」➔ Liệt kê hai đồ vật trên bàn bằng「と」và lượng từ số đếm thuần Nhật「〜つ」:「テーブルの上にみかんが3つと卵が5つあります」(Ở trên bàn có 3 quả quýt và 5 quả trứng).\n• 1):「庭／男の子／3／女の子／2／います」➔ Ở trong sân (庭に) có người (dùng います), đếm người dùng lượng từ「人」(にん): 3 bé trai (男の子が3人) và 2 bé gái (女の子が2人) nối bằng「と」➔「庭に男の子が3人と女の子が2人います」(Ở ngoài sân có 3 bé trai và 2 bé gái).\n• 2):「90円の切手／1／はがき／2／ください」➔ Xin/mua 2 món đồ nối bằng「と」, tem và bưu thiếp đếm bằng lượng từ vật mỏng phẳng「枚」(まい): tem 90 yên 1 con (90円の切手を1枚) và bưu thiếp 2 tấm (はがきを2枚) ➔「90円の切手を1枚とはがきを2枚ください」(Cho tôi 1 con tem 90 yên và 2 tấm bưu thiếp).\n• 3):「事務所／コンピューター／5／あります」➔ Ở văn phòng (事務所に) có đồ vật (dùng あります), máy vi tính là thiết bị máy móc nên đếm bằng lượng từ「台」(だい): 5 chiếc (5台) ➔「事務所にコンピューターが5台あります」(Ở văn phòng có 5 chiếc máy vi tính).\n• 4):「3か月／日本語／勉強しました」➔ Khoảng thời gian kéo dài「3か月」(3 tháng) bổ nghĩa trực tiếp cho động từ, tân ngữ tiếng Nhật đi với「日本語を」➔「3か月日本語を勉強しました」(Tôi đã học tiếng Nhật trong 3 tháng).\n• 5):「1週間／2／テニス／します」➔ Mẫu câu biểu thị tần suất「[Khoảng thời gian] に [Số lần]」: 1 tuần 2 lần (1週間に2回), chơi tennis (テニスをします) ➔「1週間に2回テニスをします」(Một tuần tôi chơi tennis 2 lần)."
      },
      {
        "id": "b11_q6",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "6. 1) 毎日何時間ぐらい寝ますか。\n＿＿＿＿＿＿＿＿＿＿\n\n2) 国でどのくらい日本語を勉強しましたか。\n＿＿＿＿＿＿＿＿＿＿\n\n3) うちから駅までどのくらいかかりますか。\n＿＿＿＿＿＿＿＿＿＿\n\n4) 手紙はあなたの国までエアメールでいくらですか。\n＿＿＿＿＿＿＿＿＿＿\n\n5) 1か月に何回ぐらい国に電話をかけますか。\n＿＿＿＿＿＿＿＿＿＿\n\n6) 毎日どのくらいテレビを見ますか。\n＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "7時間ぐらい寝ます。 / 8時間寝ます。",
          "6か月ぐらい勉強しました。 / 1年勉強しました。",
          "歩いて15分ぐらいかかります。 / バスで20分ぐらいかかります。",
          "120円です。 / 140円です。",
          "2回ぐらいかけます。 / 4回ぐらいかけます。",
          "1時間ぐらい見ます。 / 2時間見ます。 / ぜんぜん見ません。"
        ],
        "explanation": "• Dạng câu hỏi mở hỏi về thông tin bản thân người học để tự luyện tập đối thoại (tự đối chiếu câu trả lời mẫu sau khi nộp bài):\n• 1):「毎日何時間ぐらい寝ますか」(Mỗi ngày bạn ngủ khoảng mấy tiếng?) ➔ Nêu số tiếng ngủ:「[Số tiếng] 時間ぐらい寝ます」(Ví dụ:「7時間ぐらい寝ます」: ngủ khoảng 7 tiếng;「8時間寝ます」: ngủ 8 tiếng...).\n• 2):「国でどのくらい日本語を勉強しましたか」(Ở trong nước bạn đã học tiếng Nhật bao lâu?) ➔ Nêu khoảng thời gian:「[Khoảng thời gian] 勉強しました」(Ví dụ:「6か月ぐらい勉強しました」: học khoảng 6 tháng;「1年勉強しました」: học 1 năm...).\n• 3):「うちから駅までどのくらいかかりますか」(Từ nhà đến ga mất bao lâu?) ➔ Nêu thời gian và cách di chuyển:「[Phương tiện] で [Thời gian] かかります」hoặc「歩いて [Thời gian] かかります」(Ví dụ:「歩いて15分ぐらいかかります」: đi bộ mất khoảng 15 phút;「自転車で10分かかります」: đi xe đạp mất 10 phút...).\n• 4):「手紙はあなたの国までエアメールでいくらですか」(Gửi thư bằng đường bay về nước bạn hết bao nhiêu tiền?) ➔ Nêu giá tiền:「[Giá tiền] 円です」(Ví dụ:「120円です」: 120 yên;「140円です」: 140 yên...).\n• 5):「1か月に何回ぐらい国に電話をかけますか」(Một tháng bạn gọi điện về nước khoảng mấy lần?) ➔ Nêu số lần gọi:「[Số lần] 回ぐらいかけます」(Ví dụ:「2回ぐらいかけます」: gọi khoảng 2 lần;「4回かけます」: gọi 4 lần...).\n• 6):「毎日どのくらいテレビを見ますか」(Mỗi ngày bạn xem tivi khoảng bao lâu?) ➔ Nêu thời lượng xem:「[Thời gian] ぐらい見ます」(Ví dụ:「1時間ぐらい見ます」: xem khoảng 1 tiếng; Nếu không xem:「ぜんぜん見ません」: hoàn toàn không xem...)."
      }
    ]
  },
  "bai_12": {
    "title": "Bài 12",
    "completed": false,
    "questions": [
      {
        "id": "b12_q1",
        "type": "fill",
        "tag": "Điền từ vào bảng",
        "table": {
          "title": "Bảng chia thì Tính từ & Danh từ (Hiện tại / Quá khứ / Khẳng định / Phủ định)",
          "headers": ["", "早いです (Hiện tại +)", "早くないです (Hiện tại -)", "早かったです (Quá khứ +)", "早くなかったです (Quá khứ -)"],
          "rows": [
            ["例", "早いです", "早くないです", "早かったです", "早くなかったです"],
            ["1) 重い", "（____）", "重くないです", "（____）", "（____）"],
            ["2) いい", "（____）", "（____）", "よかったです", "（____）"],
            ["3) きれい", "きれいです", "（____）", "（____）", "（____）"],
            ["4) 簡単", "（____）", "（____）", "（____）", "簡単じゃありませんでした"],
            ["5) 雨", "（____）", "（____）", "雨でした", "（____）"]
          ]
        },
        "question": "1.",
        "answers": [
          "重いです / おもいです",
          "重かったです / おもかったです",
          "重くなかったです / おもくなかったです",
          "いいです / よいです",
          "よくないです",
          "よくなかったです",
          "きれいじゃありません / きれいではありません / きれいじゃないです",
          "きれいでした",
          "きれいじゃありませんでした / きれいではありませんでした / きれいじゃなかったです",
          "簡単です / かんたんです",
          "簡単じゃありません / 簡単ではありません / かんたんじゃありません / かんたんではありません / 簡単じゃないです / かんたんじゃないです",
          "簡単でした / かんたんでした",
          "雨です / あめです",
          "雨じゃありません / 雨ではありません / あめじゃありません / あめではありません / 雨じゃないです / あめじゃないです",
          "雨じゃありませんでした / 雨ではありませんでした / あめじゃありませんでした / あめではありませんでした / 雨じゃなかったです / あめじゃなかったです"
        ],
        "explanation": "• Ôn tập bảng chia thì và thể của Tính từ đuôi い, Tính từ đuôi な và Danh từ trong Minna no Nihongo Bài 12:\n• 1) Tính từ đuôi い (重い - nặng):\n  + Hiện tại (+): Tính từ đuôi い + です ➔「重いです」(おもいです).\n  + Hiện tại (-): Bỏ い đổi thành くない + です ➔「重くないです」(おもくないです).\n  + Quá khứ (+): Bỏ い đổi thành かった + です ➔「重かったです」(おもかったです).\n  + Quá khứ (-): Bỏ い đổi thành くなかった + です ➔「重くなかったです」(おもくなかったです).\n• 2) Tính từ đuôi い bất quy tắc (いい / よい - tốt):\n  + Hiện tại (+):「いいです」(hoặc よいです).\n  + Hiện tại (-): Dùng gốc よい, đổi thành「よくないです」(chú ý: KHÔNG dùng い科学 / いくないです).\n  + Quá khứ (+): Dùng gốc よい, đổi thành「よかったです」(đã cho trong đề).\n  + Quá khứ (-): Dùng gốc よい, đổi thành「よくなかったです」.\n• 3) Tính từ đuôi な (きれい - đẹp, sạch):\n  + Hiện tại (+):「きれいです」(đã cho trong đề).\n  + Hiện tại (-):「きれいじゃありません」(hoặc きれいではありません / きれいじゃないです).\n  + Quá khứ (+):「きれいでした」(chia như danh từ: です ➔ でした).\n  + Quá khứ (-):「きれいじゃありませんでした」(hoặc きれいではありませんでした).\n• 4) Tính từ đuôi な (簡単 - đơn giản):\n  + Hiện tại (+):「簡単です」(かんたんです).\n  + Hiện tại (-):「簡単じゃありません」(hoặc 簡単ではありません / かんたんじゃありません).\n  + Quá khứ (+):「簡単でした」(かんたんでした).\n  + Quá khứ (-):「簡単じゃありませんでした」(đã cho trong đề).\n• 5) Danh từ (雨 - mưa):\n  + Hiện tại (+):「雨です」(あめです).\n  + Hiện tại (-):「雨じゃありません」(hoặc 雨ではありません / あめじゃありません).\n  + Quá khứ (+):「雨でした」(あめでした - đã cho trong đề).\n  + Quá khứ (-):「雨じゃありませんでした」(hoặc 雨ではありませんでした / あめじゃありませんでした)."
      },
      {
        "id": "b12_q2",
        "type": "fill",
        "tag": "Hoàn thành câu phủ định",
        "question": "2. 例：この試験は難しいですか。…いいえ、<u>難しくないです。</u>\n\n1) このコーヒーは熱いですか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n2) きょうは暇ですか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n3) 先週の土曜日は休みでしたか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n4) きのうの映画はおもしろかったですか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n5) パーティーは楽しかったですか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n6) きのうはいい天気でしたか。…いいえ、＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "熱くないです。 / 熱くないです / あつくないです。 / あつくないです",
          "暇じゃありません。 / 暇じゃありません / 暇ではありません。 / 暇ではありません / ひまじゃありません。 / ひまじゃありません / ひまではありません。 / ひまではありません / 暇じゃないです。 / 暇じゃないです / ひまじゃないです。 / ひまじゃないです",
          "休みじゃありませんでした。 / 休みじゃありませんでした / 休みではありませんでした。 / 休みではありませんでした / やすみじゃありませんでした。 / やすみじゃありませんでした / やすみではありませんでした。 / やすみではありませんでした / 休みじゃなかったです。 / 休みじゃなかったです / やすみじゃなかったです。 / やすみじゃなかったです",
          "おもしろくなかったです。 / おもしろくなかったです / 面白くなかったです。 / 面白くなかったです",
          "楽しくなかったです。 / 楽しくなかったです / たのしくなかったです。 / たのしくなかったです",
          "いい天気じゃありませんでした。 / いい天気じゃありませんでした / いい天気ではありませんでした。 / いい天気ではありませんでした / いい天気じゃなかったです。 / いい天気じゃなかったです / よくない天気でした。 / よくない天気でした / よくなかったです。 / よくなかったです / いいてんきじゃありませんでした。 / いいてんきじゃありませんでした / いいてんきではありませんでした。 / いいてんきではありませんでした"
        ],
        "explanation": "• Luyện tập trả lời phủ định「いいえ、〜」theo đúng thì (hiện tại / quá khứ) và đúng từ loại (tính từ đuôi い / tính từ đuôi な / danh từ) trong Minna no Nihongo Bài 12:\n• 例 (Ví dụ):「難しいですか」là tính từ đuôi い ở hiện tại ➔ Phủ định hiện tại bỏ い thêm くないです:「難しくないです」(Không khó).\n• 1):「熱いですか」(Cà phê có nóng không?) ➔「熱い」(あつい) là tính từ đuôi い ở hiện tại, phủ định hiện tại là「熱くないです」(Không, không nóng).\n• 2):「暇ですか」(Hôm nay bạn có rảnh không?) ➔「暇」(ひま) là tính từ đuôi な ở hiện tại, phủ định hiện tại là「暇じゃありません」(hoặc 暇ではありません: Không, tôi không rảnh).\n• 3):「休みでしたか」(Thứ Bảy tuần trước có được nghỉ không?) ➔「休み」là danh từ ở quá khứ (でしたか), phủ định quá khứ là「休みじゃありませんでした」(hoặc 休みではありませんでした: Không, tôi đã không được nghỉ).\n• 4):「おもしろかったですか」(Bộ phim hôm qua có hay không?) ➔「おもしろい」là tính từ đuôi い ở quá khứ (かったですか), phủ định quá khứ bỏ い thêm くなかったです:「おもしろくなかったです」(Không, đã không hay).\n• 5):「楽しかったですか」(Bữa tiệc có vui không?) ➔「楽しい」(たのしい) là tính từ đuôi い ở quá khứ (かったですか), phủ định quá khứ là「楽しくなかったです」(Không, đã không vui).\n• 6):「いい天気でしたか」(Hôm qua thời tiết có đẹp không?) ➔「いい天気」là danh từ ở quá khứ (でしたか), phủ định quá khứ là「いい天気じゃありませんでした」(hoặc いい天気ではありませんでした / よくなかったです: Không, thời tiết đã không đẹp)."
      },
      {
        "id": "b12_q3",
        "type": "fill",
        "tag": "Điền trợ từ so sánh",
        "question": "3. 例：1週間（ に ）3回彼女に電話をかけます。\n\n1) とり肉（____）牛肉（____）安いです。\n\n2) 暑い季節（____）寒い季節（____）どちら（____）いいですか。\n…暑い季節（____）ほう（____）いいです。\n\n3) 1年（____）何月（____）いちばん雨（____）多いですか。\n\n4) 桜（____）日本の花（____）いちばん有名です。\n\n5) 松本さん（____）山田さん（____）どちら（____）ダンス（____）上手ですか。\n…どちら（____）上手です。",
        "answers": [
          "は / wa",
          "より / yori",
          "と / to",
          "と / to",
          "が / ga",
          "の / no",
          "が / ga",
          "で / de",
          "が / ga",
          "が / ga",
          "は / wa",
          "で / de / の中で / のなかで",
          "と / to",
          "と / to",
          "が / ga",
          "が / ga",
          "も / mo"
        ],
        "explanation": "• Ôn tập các mẫu câu so sánh trong Minna no Nihongo Bài 12:\n• 1): Mẫu câu so sánh hơn giữa 2 đối tượng「N1 は N2 より [Tính từ] です」(N1 thì tính từ hơn N2) ➔「とり肉 は 牛肉 より 安いです」(Thịt gà rẻ hơn thịt bò).\n• 2): Mẫu câu hỏi so sánh lựa chọn「N1 と N2 と どちら が [Tính từ] ですか」và câu trả lời lựa chọn「[Vế chọn] の ほう が [Tính từ] です」➔「暑い季節 と 寒い季節 と どちら が いいですか。…暑い季節 の ほう が いいです」(Mùa nóng và mùa lạnh thì mùa nào bạn thích hơn? ...Mùa nóng thì thích hơn).\n• 3): Mẫu câu hỏi so sánh nhất trong một phạm vi「[Phạm vi] で [Từ để hỏi] が いちばん [Tính từ] ですか」➔「1年 で 何月 が いちばん雨 が 多いですか」(Trong 1 năm thì tháng mấy mưa nhiều nhất? Chú ý: Hiện tượng tự nhiên đi với tính từ 多い dùng trợ từ「が」).\n• 4): Mẫu câu so sánh nhất khẳng định「N1 は [Phạm vi] で (hoặc の中で) いちばん [Tính từ] です」➔「桜 は 日本の花 で いちばん有名です」(Hoa anh đào nổi tiếng nhất trong các loài hoa của Nhật Bản).\n• 5): Vế hỏi so sánh 2 người「松本さん と 山田さん と どちら が」(ai giỏi hơn), năng lực khiêu vũ dùng「ダンス が 上手ですか」. Vế trả lời cả hai người đều giỏi dùng「どちら も 上手です」(Cả hai đều giỏi)."
      },
      {
        "id": "b12_q4",
        "type": "fill",
        "tag": "Chia thì trong đoạn văn",
        "question": "4. きのう京都へ行きました。そして、祇園祭を（例：見ます…<u>見ました</u>）。\n\nきのうは（休みじゃありません…1) ＿＿＿＿＿＿＿＿＿＿）が、人が（多いです…2) ＿＿＿＿＿＿＿＿＿＿）。\nいつも町は静かですが、きのうは（にぎやかです…3) ＿＿＿＿＿＿＿＿＿＿）。\nお祭りはとても（きれいです…4) ＿＿＿＿＿＿＿＿＿＿）。\nわたしは写真をたくさん（撮ります…5) ＿＿＿＿＿＿＿＿＿＿）。\n（いい天気です…6) ＿＿＿＿＿＿＿＿＿＿）が、あまり（暑くないです…7) ＿＿＿＿＿＿＿＿＿＿）。",
        "answers": [
          "休みじゃありませんでした / 休みではありませんでした / やすみじゃありませんでした / やすみではありませんでした / 休みじゃなかったです / やすみじゃなかったです",
          "多かったです / おおかったです / おおかかったです",
          "にぎやかでした",
          "きれいでした",
          "撮りました / とりました",
          "いい天気でした / いいてんきでした / よい天気でした",
          "暑くなかったです / あつくなかったです"
        ],
        "explanation": "• Chia các động từ, tính từ và danh từ về quá khứ tương thích với ngữ cảnh đoạn văn kể lại chuyến đi chơi Kyoto hôm qua「きのう京都へ行きました」:\n• 1):「休みじゃありません」(không phải ngày nghỉ) nói về ngày hôm qua (きのうは) ➔ Danh từ ở quá khứ phủ định:「休みじゃありませんでした」(hoặc 休みではありませんでした: Hôm qua không phải ngày nghỉ, nhưng...).\n• 2):「多いです」(đông, nhiều) nói về người ngày hôm qua ➔ Tính từ đuôi い ở quá khứ:「多かったです」(người đã rất đông).\n• 3):「にぎやかです」(náo nhiệt, nhộn nhịp) nói về ngày hôm qua ➔ Tính từ đuôi な ở quá khứ:「にぎやかでした」(thị trấn đã rất náo nhiệt).\n• 4):「きれいです」(đẹp) nói về lễ hội ngày hôm qua ➔ Tính từ đuôi な ở quá khứ:「きれいでした」(lễ hội đã rất đẹp).\n• 5):「撮ります」(chụp ảnh) hành động đã diễn ra hôm qua ➔ Động từ ở quá khứ:「撮りました」(tôi đã chụp rất nhiều ảnh).\n• 6):「いい天気です」(thời tiết đẹp) nói về thời tiết hôm qua ➔ Danh từ ở quá khứ:「いい天気でした」(thời tiết đã đẹp, nhưng...).\n• 7):「暑くないです」(không nóng) nói về thời tiết hôm qua ➔ Tính từ đuôi い ở quá khứ phủ định:「暑くなかったです」(không nóng lắm)."
      },
      {
        "id": "b12_q5",
        "type": "fill",
        "tag": "Điền từ để hỏi trong câu so sánh",
        "question": "5. 例：家族で [ だれ ] がいちばん歌が上手ですか。\n\n1) ここから東京駅までバスと地下鉄と [ ＿＿＿＿＿＿＿＿＿＿ ] が安いですか。\n2) スポーツで [ ＿＿＿＿＿＿＿＿＿＿ ] がいちばんおもしろいですか。\n3) 京都旅行は [ ＿＿＿＿＿＿＿＿＿＿ ] でしたか。\n4) 来年タイへ行きます。[ ＿＿＿＿＿＿＿＿＿＿ ] がいちばんいい季節ですか。\n5) 東京の本屋で [ ＿＿＿＿＿＿＿＿＿＿ ] がいちばん本が多いですか。",
        "answers": [
          "どちら / どっち",
          "何 / なに",
          "どう / いかが",
          "いつ / 何月 / なんがつ",
          "どこ"
        ],
        "explanation": "• Luyện tập sử dụng từ nghi vấn trong các mẫu câu so sánh và hỏi cảm tưởng (Minna no Nihongo Bài 12):\n• 例 (Ví dụ): Phạm vi là người trong gia đình「家族で」➔ Từ để hỏi người:「だれ」(ai hát hay nhất?).\n• 1): So sánh lựa chọn giữa 2 đối tượng「バスと地下鉄と」(xe buýt và tàu điện ngầm) ➔ Từ để hỏi lựa chọn 2 bên:「どちら」(hoặc どっち: cái nào rẻ hơn?).\n• 2): Phạm vi là các môn thể thao / sự vật「スポーツで」➔ Từ để hỏi sự vật:「何」(なに: môn thể thao nào thú vị nhất?).\n• 3): Hỏi về cảm tưởng, tính chất của chuyến đi Kyoto trong quá khứ「京都旅行は」➔ Mẫu câu hỏi cảm tưởng:「どう」(chuyến đi Kyoto thế nào?).\n• 4): Hỏi về thời điểm, thời gian trong năm「いちばんいい季節ですか」➔ Từ để hỏi thời gian:「いつ」(khi nào là mùa đẹp nhất?).\n• 5): Phạm vi là nơi chốn / hiệu sách「東京の本屋で」➔ Từ để hỏi địa điểm:「どこ」(ở đâu có nhiều sách nhất?)."
      },
      {
        "id": "b12_q6",
        "type": "fill",
        "tag": "Đặt câu so sánh theo từ gợi ý",
        "question": "6. 例１：東京／大阪／人が多い…<u>東京は大阪より人が多いです。</u>\n例２：日本／東京／いちばん／人が多い…<u>日本で東京がいちばん人が多いです。</u>\n\n1) 地下鉄／バス／速い…＿＿＿＿＿＿＿＿＿＿\n2) 日本料理／すし／いちばん／好き…＿＿＿＿＿＿＿＿＿＿\n3) 1年／8月／いちばん／暑い…＿＿＿＿＿＿＿＿＿＿\n4) さくら大学／富士大学／古い…＿＿＿＿＿＿＿＿＿＿\n5) 駅の前のパン屋／デパート／安い…＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "地下鉄はバスより速いです。 / 地下鉄はバスより速いです / ちかてつはバスよりはやいです。 / ちかてつはバスよりはやいです",
          "日本料理ですしがいちばん好きです。 / 日本料理ですしがいちばん好きです / 日本料理ですしがいちばんすきです。 / 日本料理ですしがいちばんすきです / 日本料理ですしが一番好きです。 / 日本料理ですしが一番好きです / 日本料理ですしが一番すきです。 / 日本料理ですしが一番すきです / 日本料理の中ですしがいちばん好きです。 / 日本料理の中ですしがいちばん好きです",
          "1年で8月がいちばん暑いです。 / 1年で8月がいちばん暑いです / 1ねんで8がつがいちばんあついです。 / 1ねんで8がつがいちばんあついです / 1年で8月が一番暑いです。 / 1年で8月が一番暑いです / 1年で八月がいちばん暑いです。 / 1年で八月がいちばん暑いです",
          "さくら大学は富士大学より古いです。 / さくら大学は富士大学より古いです / さくらだいがくはふじだいがくよりふるいです。 / さくらだいがくはふじだいがくよりふるいです",
          "駅の前のパン屋はデパートより安いです。 / 駅の前のパン屋はデパートより安いです / えきのまえのパンやはデパートよりやすいです。 / えきのまえのパンやはデパートよりやすいです / えきのまえのパン屋はデパートより安いです。 / えきのまえのパン屋はデパートより安いです"
        ],
        "explanation": "• Luyện tập 2 mẫu câu so sánh cơ bản trong Minna no Nihongo Bài 12:\n  • Mẫu 1 (So sánh hơn giữa 2 đối tượng):「N1 は N2 より [Tính từ] です」(N1 thì tính từ hơn N2).\n  • Mẫu 2 (So sánh nhất trong phạm vi):「[Phạm vi] で N が いちばん [Tính từ] です」(N là tính từ nhất trong phạm vi).\n• 1): So sánh giữa 2 phương tiện (Mẫu 1) ➔「地下鉄はバスより速いです」(Tàu điện ngầm nhanh hơn xe buýt).\n• 2): So sánh nhất trong các món ăn Nhật (Mẫu 2) ➔「日本料理ですしがいちばん好きです」(Trong các món ăn Nhật thì tôi thích sushi nhất).\n• 3): So sánh nhất trong 1 năm (Mẫu 2) ➔「1年で8月がいちばん暑いです」(Trong 1 năm thì tháng 8 là nóng nhất).\n• 4): So sánh giữa 2 trường đại học (Mẫu 1) ➔「さくら大学は富士大学より古いです」(Đại học Sakura thì lâu đời hơn Đại học Fuji).\n• 5): So sánh giữa 2 địa điểm mua sắm (Mẫu 1) ➔「駅の前のパン屋はデパートより安いです」(Tiệm bánh mì trước ga thì rẻ hơn trung tâm thương mại)."
      },
      {
        "id": "b12_q7",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "7. 1) あなたのうちから郵便局と銀行とどちらが近いですか。\n＿＿＿＿＿＿＿＿＿＿\n\n2) 季節でいつがいちばん好きですか。\n＿＿＿＿＿＿＿＿＿＿\n\n3) きのうの天気はどうでしたか。\n＿＿＿＿＿＿＿＿＿＿\n\n4) きのうは休みでしたか。\n＿＿＿＿＿＿＿＿＿＿\n\n5) 日本とあなたの国とどちらが大きいですか。\n＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "郵便局のほうが近いです。 / 銀行のほうが近いです。 / どちらも近いです。",
          "春がいちばん好きです。 / 秋がいちばん好きです。 / 冬がいちばん好きです。 / 夏がいちばん好きです。",
          "いい天気でした。 / 雨でした。 / 曇りでした。",
          "はい、休みでした。 / いいえ、休みじゃありませんでした。",
          "日本のほうが大きいです。 / ベトナムのほうが大きいです。 / わたしの国のほうが大きいです。"
        ],
        "explanation": "• Dạng câu hỏi mở hỏi về bản thân bạn để tự luyện tập đối thoại (tự đối chiếu câu trả lời mẫu sau khi nộp bài):\n• 1):「あなたのうちから郵便局と銀行とどちらが近いですか」(Từ nhà bạn thì bưu điện và ngân hàng bên nào gần hơn?) ➔ Mẫu trả lời lựa chọn:「[N] のほうが近いです」(Ví dụ:「郵便局のほうが近いです」: bưu điện gần hơn; nếu cả hai gần:「どちらも近いです」).\n• 2):「季節でいつがいちばん好きですか」(Trong các mùa thì bạn thích mùa nào nhất?) ➔ Mẫu trả lời so sánh nhất:「[Tên mùa] がいちばん好きです」(Ví dụ:「春がいちばん好きです」: tôi thích mùa xuân nhất).\n• 3):「きのうの天気はどうでしたか」(Hôm qua thời tiết thế nào?) ➔ Nêu thời tiết ở quá khứ:「[Thời tiết] でした」(Ví dụ:「いい天気でした」: thời tiết đã đẹp;「雨でした」: đã có mưa).\n• 4):「きのうは休みでしたか」(Hôm qua bạn có được nghỉ không?) ➔ Khẳng định:「はい、休みでした」; Phủ định:「いいえ、休みじゃありませんでした」(hoặc いいえ、休みではありませんでした).\n• 5):「日本とあなたの国とどちらが大きいですか」(Nhật Bản và nước bạn bên nào lớn hơn?) ➔ Mẫu so sánh lựa chọn:「[N] のほうが大きいです」(Ví dụ: Nhật Bản (~378,000 km²) lớn hơn Việt Nam (~331,000 km²):「日本のほうが大きいです」)."
      }
    ]
  },
  "bai_13": {
    "title": "Bài 13",
    "completed": false,
    "questions": [
      {
        "id": "b13_q1",
        "type": "fill",
        "tag": "Điền trợ từ vào ngoặc",
        "question": "1. 例：わたしは1年（ で ）夏（ が ）いちばん好きです。\n\n1) わたしのケータイは古いです（____）、新しいケータイ（____）欲しいです。\n2) わたしは今何（____）欲しくないです。\n3) のど（____）かわきましたから、何（____）飲みたいです。\n4) 夏休みに北海道（____）旅行（____）行きます。\n5) 1週間（____）2回ホテル（____）プール（____）泳ぎ（____）行きます。\n6) 車（____）空港（____）母（____）迎え（____）行きました。\n7) 日本（____）何（____）勉強（____）来ましたか。",
        "answers": [
          "から / が / kara / ga",
          "が / ga",
          "も / mo",
          "が / ga",
          "か / ka",
          "へ / に / e / he / ni",
          "に / ni",
          "に / ni",
          "の / no",
          "へ / に / e / he / ni",
          "に / ni",
          "で / de",
          "へ / に / e / he / ni",
          "を / o / wo",
          "に / ni",
          "へ / に / e / he / ni",
          "の / を / no / o / wo",
          "に / ni"
        ],
        "explanation": "• Ôn tập cách dùng trợ từ trong các mẫu câu biểu thị mong muốn (〜が欲しい / 〜たい), hành động với 何か / 何も, và mục đích của hành động di chuyển (〜へ〜に行きます／来ます) trong Minna no Nihongo Bài 13:\n• 1): Vị trí 1: Trợ từ liên kết mệnh đề giải thích nguyên nhân「から」(vì điện thoại của tôi cũ, nên...) hoặc trợ từ nối tương phản「が」. Vị trí 2: Mẫu câu mong muốn sở hữu đồ vật「N が 欲しいです」(muốn có N) ➔「新しいケータイ が 欲しいです」(muốn có điện thoại mới).\n• 2): Phủ định hoàn toàn với từ nghi vấn「何 も + Phủ định」(không ... cái gì cả) ➔「今何 も 欲しくないです」(Bây giờ tôi không muốn có thứ gì cả).\n• 3): Vị trí 1: Cụm từ cố định chỉ trạng thái cơ thể「のど が かわきました」(tôi bị khát nước). Vị trí 2: Đại từ bất định chỉ cái gì đó「何 か」kết hợp mong muốn làm gì「〜たいです」➔「何 か 飲みたいです」(tôi muốn uống cái gì đó).\n• 4): Vị trí 1: Đích đến của hành động di chuyển「北海道 へ」(hoặc「に」: đến Hokkaido). Vị trí 2: Mục đích di chuyển kết hợp danh từ hành động「N に 行きます」➔「旅行 に 行きます」(đi du lịch).\n• 5): Vị trí 1: Tần suất「[Khoảng thời gian] に [Số lần]」➔「1週間 に 2回」(1 tuần 2 lần). Vị trí 2: Trợ từ「の」nối 2 danh từ sở thuộc「ホテル の プール」(hồ bơi của khách sạn). Vị trí 3: Hướng di chuyển đến hồ bơi「プール へ」(hoặc「に」). Vị trí 4: Mục đích di chuyển kết hợp động từ bỏ ます「V-masu に 行きます」➔「泳ぎ に 行きます」(đi bơi).\n• 6): Vị trí 1: Phương tiện di chuyển「車 で」(bằng ô tô). Vị trí 2: Đích đến「空港 へ」(hoặc「に」: đến sân bay). Vị trí 3: Tân ngữ của hành động đón「母 を」(đón mẹ). Vị trí 4: Mục đích di chuyển「迎え に 行きました」(đã đi đón).\n• 7): Vị trí 1: Đích đến「日本 へ」(hoặc「に」: đến Nhật Bản). Vị trí 2: Nối 2 danh từ「何 の 勉強」(học ngành gì / học về cái gì - hoặc trợ từ「を」). Vị trí 3: Mục đích di chuyển「勉強 に 来ましたか」(đã đến để học)."
      },
      {
        "id": "b13_q4",
        "type": "fill",
        "tag": "Hoàn thành câu dựa vào câu có sẵn",
        "question": "4. 例1：疲れましたから、何もし<u>たくないです</u>。\n例2：来週国へ帰ります。早く家族に会<u>いたいです</u>。\n\n1) 昼ごはんをたくさん食べましたから、今何も＿＿＿＿＿＿＿＿＿＿。\n\n2) のどがかわきましたから、何か＿＿＿＿＿＿＿＿＿＿。\n\n3) 彼女の誕生日にすてきなプレゼントを＿＿＿＿＿＿＿＿＿＿。\n\n4) 疲れましたから、どこも＿＿＿＿＿＿＿＿＿＿。",
        "answers": [
          "食べたくないです / たべたくないです / 食べたくありません / たべたくありません / tabetakunai desu",
          "飲みたいです / のみたいです / nomitai desu",
          "あげたいです / 買いたいです / 送りたいです / 渡したいです / かいたいです / おくりたいです / わたしたいです / agetai desu / kaitai desu",
          "行きたくないです / いきたくないです / 出かけたくないです / でかけたくないです / 行きたくありません / いきたくありません / ikitakunai desu"
        ],
        "explanation": "• Ôn tập cấu trúc thể hiện mong muốn của bản thân với động từ:「V-masu + たいです」(muốn làm V) và dạng phủ định「V-masu + たくないです」(không muốn làm V).\n• 例1:「疲れましたから、何もし<u>たくないです</u>」(Vì mệt nên chẳng muốn làm gì cả).\n• 例2:「来週国へ帰ります。早く家族に会<u>いたいです</u>」(Tuần sau về nước. Muốn sớm gặp gia đình).\n• 1): Vế trước「昼ごはんをたくさん食べましたから」(vì đã ăn nhiều cơm trưa) ➔ vế sau phủ định với từ nghi vấn「今何も 食べたくないです」(bây giờ chẳng muốn ăn gì cả).\n• 2): Vế trước「のどがかわきましたから」(vì khát nước) ➔ vế sau biểu thị mong muốn「何か 飲みたいです」(tôi muốn uống cái gì đó).\n• 3): Nhân dịp sinh nhật bạn gái「彼女の誕生日に」➔ mong muốn tặng hoặc mua quà「すてきなプレゼントを あげたいです」(hoặc「買いたいです / 送りたいです / 渡したいです」).\n• 4): Vế trước「疲れましたから」(vì mệt) ➔ vế sau phủ định hướng di chuyển「どこも 行きたくないです」(chẳng muốn đi đâu cả)."
      },
      {
        "id": "b13_q5",
        "type": "fill",
        "tag": "Hoàn thành câu dựa vào câu có sẵn",
        "question": "5. 例1：美術館へ行きました・絵を見ます…<u>美術館へ絵を見に行きました。</u>\n例2：デパートへ行きます・買い物します…<u>デパートへ買い物に行きます。</u>\n\n1) スーパーへ行きます・パンと牛乳を買います…＿＿＿＿＿＿＿＿＿＿\n\n2) 横浜へ行きました・船の写真を撮ります…＿＿＿＿＿＿＿＿＿＿\n\n3) 友達のうちへ行きました・CDを借ります…＿＿＿＿＿＿＿＿＿＿\n\n4) 毎朝近くの公園へ行きます・散歩します…＿＿＿＿＿＿＿＿＿＿\n\n5) タイ料理の店へ行きました・食事します…＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "スーパーへパンと牛乳を買いに行きます / スーパーにパンと牛乳を買いに行きます / スーパーへパンとぎゅうにゅうをかいにいきます / スーパーにパンとぎゅうにゅうをかいにいきます / パンと牛乳を買いに行きます / パンとぎゅうにゅうをかいにいきます / su-pa- e pan to gyuunyuu o kai ni ikimasu",
          "横浜へ船の写真を撮りに行きました / 横浜に船の写真を撮りに行きました / よこはまへふねのしゃしんをとりにいきました / よこはまにふねのしゃしんをとりにいきました / 船の写真を撮りに行きました / ふねのしゃしんをとりにいきました",
          "友達のうちへCDを借りに行きました / 友達のうちにCDを借りに行きました / 友達の家へCDを借りに行きました / 友達の家にCDを借りに行きました / ともだちのうちへcdをかりにいきました / ともだちのうちにcdをかりにいきました / CDを借りに行きました / cdをかりにいきました",
          "毎朝近くの公園へ散歩に行きます / 毎朝近くの公園に散歩に行きます / 毎朝近くの公園へ散歩しに行きます / 毎朝近くの公園に散歩しに行きます / まいあさちかくのこうえんへさんぽにいきます / まいあさちかくのこうえんにさんぽにいきます / まいあさちかくのこうえんへさんぽしにいきます / まいあさちかくのこうえんにさんぽしにいきます / 散歩に行きます / 散歩しに行きます / さんぽにいきます / さんぽしにいきます",
          "タイ料理の店へ食事に行きました / タイ料理の店に食事に行きました / タイ料理の店へ食事しに行きました / タイ料理の店に食事しに行きました / タイりょうりのみせへしょくじにいきました / タイりょうりのみせにしょくじにいきました / タイりょうりのみせへしょくじしにいきました / タイりょうりのみせにしょくじしにいきました / 食事に行きました / 食事しに行きました / しょくじにいきました / しょくじしにいきました"
        ],
        "explanation": "• Mẫu câu biểu thị mục đích của hành động di chuyển:「[Địa điểm] へ [V(bỏ ます) / Danh từ] に 行きます／来ます／帰ります」(Đi / Đến / Về đâu để làm gì).\n• Lưu ý quan trọng: Thì của câu (hiện tại / quá khứ) phải tương ứng với động từ di chuyển ở vế đầu.\n• 例1:「美術館へ行きました・絵を見ます」➔「美術館へ絵を見に行きました。」(Đã đến bảo tàng mỹ thuật để xem tranh).\n• 例2:「デパートへ行きます・買い物します」➔「デパートへ買い物に行きます。」(Đi trung tâm thương mại để mua sắm).\n• 1): Đích đến「スーパーへ」, mục đích「パンと牛乳を買います ➔ パンと牛乳を買いに」, thì hiện tại「行きます」➔「スーパーへパンと牛乳を買いに行きます。」(Đi siêu thị để mua bánh mì và sữa).\n• 2): Đích đến「横浜へ」, mục đích「船の写真を撮ります ➔ 船の写真を撮りに」, thì quá khứ「行きました」➔「横浜へ船の写真を撮りに行きました。」(Đã đến Yokohama để chụp ảnh tàu thuyền).\n• 3): Đích đến「友達のうちへ」, mục đích「CDを借ります ➔ CDを借りに」, thì quá khứ「行きました」➔「友達のうちへCDを借りに行きました。」(Đã đến nhà bạn để mượn đĩa CD).\n• 4): Đích đến「毎朝近くの公園へ」, mục đích đi dạo: động từ nhóm 3「散歩します」bỏ します thành danh từ「散歩に」(hoặc「散歩しに」), thì hiện tại「行きます」➔「毎朝近くの公園へ散歩に行きます。」(Mỗi sáng đến công viên gần nhà để đi dạo).\n• 5): Đích đến「タイ料理の店へ」, mục đích dùng bữa: động từ nhóm 3「食事します」bỏ します thành danh từ「食事に」(hoặc「食事しに」), thì quá khứ「行きました」➔「タイ料理の店へ食事に行きました。」(Đã đến quán món Thái để dùng bữa)."
      },
      {
        "id": "b13_q6",
        "type": "fill",
        "tag": "Hoàn thành câu theo ngữ cảnh",
        "question": "6. 例：図書館へ本を借りに 行きます。\n\n1) 郵便局へ ＿＿＿＿＿＿＿＿＿＿ 行きます。\n\n2) 喫茶店へ ＿＿＿＿＿＿＿＿＿＿ 行きます。\n\n3) コンビニへ ＿＿＿＿＿＿＿＿＿＿ 行きました。\n\n4) 海へ ＿＿＿＿＿＿＿＿＿＿ 行きました。\n\n5) 日本へ ＿＿＿＿＿＿＿＿＿＿ 来ました。",
        "answers": [
          "切手を買いに / 手紙を出しに / はがきを買いに / 荷物を送りに / 荷物を出しに / 切手をかいに / てがみをだしに / はがきをかいに / にもつをおくりに / にもつをだしに / 切手を買いに行きます / 手紙を出しに行きます / kitte o kai ni / tegami o dashi ni",
          "コーヒーを飲みに / お茶を飲みに / 友達に会いに / ジュースを飲みに / コーヒーをのみに / おちゃをのみに / ともだちにあいに / コーヒーを飲みに行きます / お茶を飲みに行きます / ko-hi- o nomi ni / tomodachi ni ai ni",
          "お弁当を買いに / 飲み物を買いに / パンを買いに / ジュースを買いに / 買い物に / おべんとうをかいに / のみものをかいに / パンをかいに / かいものに / お弁当を買いに行きました / 飲み物を買いに行きました / obentou o kai ni / kaimono ni",
          "泳ぎに / 遊びに / 魚を釣りに / およぎに / あそびに / さかなをつりに / 泳ぎに行きました / 遊びに行きました / oyogi ni / asobi ni",
          "日本語を勉強しに / 日本語の勉強に / 勉強しに / 勉強に / 働きに / 仕事に / にほんごをべんきょうしに / べんきょうしに / べんきょうに / はたらきに / 日本語を勉強しに来ました / 勉強しに来ました / nihongo o benkyou shi ni / benkyou ni"
        ],
        "explanation": "• Luyện tập điền mục đích của hành động di chuyển phù hợp với từng địa điểm:「[Địa điểm] へ [Mục đích: V(bỏ ます) に / N に] 行きます／来ます」:\n• 例: Đến thư viện (図書館へ) để mượn sách ➔「本を借りに 行きます」。\n• 1): Đến bưu điện (郵便局へ) thường để mua tem「切手を買いに」hoặc gửi thư「手紙を出しに」、gửi bưu phẩm「荷物を送りに」。\n• 2): Đến quán cà phê/giải khát (喫茶店へ) để uống cà phê「コーヒーを飲みに」、uống trà「お茶を飲みに」hoặc gặp bạn bè「友達に会いに」。\n• 3): Đến cửa hàng tiện lợi (コンビニへ) để mua cơm hộp「お弁当を買いに」、mua đồ uống「飲み物を買いに」hoặc đi mua sắm「買い物に」。\n• 4): Đến biển (海へ) để bơi「泳ぎに」、đi chơi「遊びに」hoặc câu cá「魚を釣りに」。\n• 5): Đến Nhật Bản (日本へ) để học tiếng Nhật「日本語を勉強しに / 勉強しに」hoặc làm việc「働きに / 仕事に」。"
      },
      {
        "id": "b13_q7",
        "type": "fill",
        "tag": "Điền từ để hỏi thích hợp",
        "question": "7. 例：今 [ 何 ] が欲しいですか…自転車が欲しいです。\n\n1) [ __________ ] 靴が欲しいですか。…軽い靴が欲しいです。\n\n2) [ __________ ] 釣りに行きましたか。…週末に行きました。\n\n3) フランスへ [ __________ ] をしに行きますか。…美術の勉強に行きます。\n\n4) 日曜日は [ __________ ] をしたいですか。…何もしたくないです。\n\n5) [ __________ ] と泳ぎに行きましたか。…一人で行きました。",
        "answers": [
          "どんな / donna",
          "いつ / itsu",
          "何 / なん / なに / nan / nani",
          "何 / なに / なん / nani / nan",
          "だれ / どなた / 誰 / dare / donata"
        ],
        "explanation": "• Luyện tập sử dụng từ nghi vấn trong các mẫu câu mong muốn「〜たい」「〜欲しい」và mục đích di chuyển (Minna no Nihongo Bài 13):\n• 例: Câu trả lời là danh từ đồ vật「自転車」(xe đạp) ➔ Từ để hỏi vật:「何 が欲しいですか」(Bạn muốn cái gì?).\n• 1): Câu trả lời nêu tính chất của đôi giày「軽い靴」(giày nhẹ) ➔ Từ để hỏi về tính chất/chủng loại:「どんな 靴が欲しいですか」(Bạn muốn đôi giày như thế nào?).\n• 2): Câu trả lời nêu thời điểm「週末に行きました」(đã đi vào cuối tuần) ➔ Từ để hỏi thời gian:「いつ 釣りに行きましたか」(Bạn đã đi câu cá khi nào?).\n• 3): Câu trả lời nêu mục đích học tập「美術の勉強に行きます」(đi để học mỹ thuật) ➔ Từ để hỏi hành động làm gì:「何 をしに行きますか」(Bạn đi Pháp để làm gì?).\n• 4): Câu trả lời phủ định hoàn toàn「何もしたくないです」(chẳng muốn làm gì cả) ➔ Từ để hỏi hành động muốn làm:「何 をしたいですか」(Chủ nhật bạn muốn làm gì?).\n• 5): Câu trả lời là người đi cùng「一人で行きました」(đã đi một mình) ➔ Từ để hỏi người đi cùng:「だれ と泳ぎに行きましたか」(Bạn đã đi bơi với ai?)."
      },
      {
        "id": "b13_q8",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "8. 1) 時間とお金とどちらが欲しいですか。＿＿＿＿＿＿＿＿＿＿\n\n2) 次の日曜日は何をしたいですか。＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "時間が欲しいです。 / お金が欲しいです。 / どちらも欲しいです。",
          "映画を見たいです。 / どこも行きたくないです。 / 友達と遊びたいです。"
        ],
        "explanation": "• Dạng câu hỏi mở luyện đối thoại về bản thân (không tính điểm, hiển thị câu trả lời mẫu để tự đối chiếu sau khi nộp bài):\n• 1):「時間とお金とどちらが欲しいですか」(Giữa thời gian và tiền bạc, bạn muốn cái nào hơn?) ➔ Chọn thời gian:「時間が欲しいです」(hoặc「時間のほうが欲しいです」); chọn tiền bạc:「お金が欲しいです」(hoặc「お金のほうが欲しいです」); muốn cả hai:「どちらも欲しいです」.\n• 2):「次の日曜日は何をしたいですか」(Chủ nhật tới bạn muốn làm gì?) ➔ Muốn làm gì thì chia động từ dạng「V-masu + たいです」(Ví dụ:「映画を見たいです」(muốn xem phim),「買い物に行きたいです」(muốn đi mua sắm),「家でゆっくり休みたいです」(muốn nghỉ ngơi ở nhà)); nếu không muốn làm gì cả:「何もしたくないです / どこも行きたくないです」."
      }
    ]
  },
  "bai_14": {
    "title": "Bài 14",
    "completed": false,
    "questions": [
      {
        "id": "b14_q1",
        "type": "fill",
        "tag": "Điền từ vào bảng chia thể て",
        "table": {
          "title": "Bảng chuyển đổi Động từ (Thể ます ⇔ Thể て)",
          "headers": ["〜ます (Thể lịch sự)", "〜て (Thể て)"],
          "rows": [
            ["例：読みます", "読んで"],
            ["1) （____）", "座って"],
            ["持ちます", "2) （____）"],
            ["3) （____）", "急いで"],
            ["開けます", "4) （____）"],
            ["5) （____）", "遊んで"],
            ["行きます", "6) （____）"],
            ["7) （____）", "借りて"],
            ["降ります", "8) （____）"],
            ["9) （____）", "コピーして"],
            ["手伝います", "10) （____）"],
            ["11) （____）", "立って"],
            ["買います", "12) （____）"],
            ["13) （____）", "待って"],
            ["帰ります", "14) （____）"],
            ["15) （____）", "飲んで"],
            ["書きます", "16) （____）"],
            ["17) （____）", "聞いて"],
            ["泳ぎます", "18) （____）"],
            ["19) （____）", "話して"],
            ["食べます", "20) （____）"],
            ["21) （____）", "見て"],
            ["起きます", "22) （____）"],
            ["23) （____）", "教えて"],
            ["来ます", "24) （____）"],
            ["25) （____）", "勉強して"],
            ["消します", "26) （____）"],
            ["27) （____）", "つけて"],
            ["閉めます", "28) （____）"],
            ["29) （____）", "して"],
            ["散歩します", "30) （____）"]
          ]
        },
        "question": "1. Hãy chuyển đổi qua lại giữa thể ます và thể て của các động từ sau:",
        "answers": [
          "座ります / すわります / suwarimasu",
          "持って / もって / motte",
          "急ぎます / いそぎます / isogimasu",
          "開けて / あけて / akete",
          "遊びます / あそびます / asobimasu",
          "行って / いって / itte",
          "借ります / かります / karimasu",
          "降りて / おりて / orite",
          "コピーします / こぴーします / kopi-shimasu",
          "手伝って / てつだって / tetsudatte",
          "立ちます / たちます / tachimasu",
          "買って / かって / katte",
          "待ちます / まちます / machimasu",
          "帰って / かえって / kaette",
          "飲みます / のみます / nomimasu",
          "書いて / かいて / kaite",
          "聞きます / ききます / kikimasu",
          "泳いで / およいで / oyoide",
          "話します / はなします / hanashimasu",
          "食べて / たべて / tabete",
          "見ます / みます / mimasu",
          "起きて / おきて / okite",
          "教えます / おしえます / oshiemasu",
          "来て / きて / kite",
          "勉強します / べんきょうします / benkyou shimasu / benkyoushimasu",
          "消して / けして / keshite",
          "つけます / tsukemasu",
          "閉めて / しめて / shimete",
          "します / shimasu",
          "散歩して / さんぽして / sanpo shite / sanposhite"
        ],
        "explanation": "• Quy tắc chia động từ sang thể て (Te-form) trong Minna no Nihongo Bài 14:\n• Nhóm 1:\n  - Đuôi「〜います / 〜ちます / 〜ります」➔「〜って」(Ví dụ: 持ちます ➔ 持って; 座ります ➔ 座って; 立ちます ➔ 立って; 手伝います ➔ 手伝って; 買います ➔ 買って; 待ちます ➔ 待って; 帰ります ➔ 帰って).\n  - Đuôi「〜みます / 〜びます / 〜にます」➔「〜んで」(Ví dụ: 読みます ➔ 読んで; 遊びます ➔ 遊んで; 飲みます ➔ 飲んで).\n  - Đuôi「〜ぎます」➔「〜いで」(Ví dụ: 急ぎます ➔ 急いで; 泳ぎます ➔ 泳いで).\n  - Đuôi「〜きます」➔「〜いて」(Ví dụ: 書きます ➔ 書いて; 聞きます ➔ 聞いて). Riêng động từ đặc biệt「行きます」➔「行って」(không đổi thành いいて).\n  - Đuôi「〜します」➔「〜して」(Ví dụ: 話します ➔ 話して; 消します ➔ 消して).\n• Nhóm 2: Bỏ「ます」thêm「て」(Ví dụ: 開けます ➔ 開けて; 借ります ➔ 借りて; 降ります ➔ 降りて; 食べます ➔ 食べて; 見ます ➔ 見て; 起きます ➔ 起きて; 教えます ➔ 教えて; つけます ➔ つけて; 閉めます ➔ 閉めて).\n• Nhóm 3: Động từ danh động từ「〜します」➔「〜して」(Ví dụ: コピーします ➔ コピーして; 勉強します ➔ 勉強して; 散歩します ➔ 散歩して; します ➔ して). Riêng「来ます」➔「来て」.\n• Chi tiết từng câu:\n  - 例:「読みます」(nhóm 1) ➔「読んで」.\n  - 1): Đã cho「座って」➔ động từ thể lịch sự là「座ります」(ngồi).\n  - 2): Cho「持ちます」(cầm, mang) ➔ thể て là「持って」.\n  - 3): Đã cho「急いで」➔ động từ thể lịch sự là「急ぎます」(vội vã).\n  - 4): Cho「開けます」(mở) ➔ thể て là「開けて」.\n  - 5): Đã cho「遊んで」➔ động từ thể lịch sự là「遊びます」(chơi).\n  - 6): Cho「行きます」(đi - nhóm 1 đặc biệt) ➔ thể て là「行って」.\n  - 7): Đã cho「借りて」➔ động từ thể lịch sự là「借ります」(mượn - nhóm 2 đặc biệt).\n  - 8): Cho「降ります」(xuống xe/tàu - nhóm 2 đặc biệt) ➔ thể て là「降りて」.\n  - 9): Đã cho「コピーして」➔ động từ thể lịch sự là「コピーします」(photocopy).\n  - 10): Cho「手伝います」(giúp đỡ) ➔ thể て là「手伝って」.\n  - 11): Đã cho「立って」➔ động từ thể lịch sự là「立ちます」(đứng).\n  - 12): Cho「買います」(mua) ➔ thể て là「買って」.\n  - 13): Đã cho「待って」➔ động từ thể lịch sự là「待ちます」(chờ, đợi).\n  - 14): Cho「帰ります」(về) ➔ thể て là「帰って」.\n  - 15): Đã cho「飲んで」➔ động từ thể lịch sự là「飲みます」(uống).\n  - 16): Cho「書きます」(viết) ➔ thể て là「書いて」.\n  - 17): Đã cho「聞いて」➔ động từ thể lịch sự là「聞きます」(nghe).\n  - 18): Cho「泳ぎます」(bơi) ➔ thể て là「泳いで」.\n  - 19): Đã cho「話して」➔ động từ thể lịch sự là「話します」(nói chuyện).\n  - 20): Cho「食べます」(ăn) ➔ thể て là「食べて」.\n  - 21): Đã cho「見て」➔ động từ thể lịch sự là「見ます」(xem, nhìn).\n  - 22): Cho「起きます」(thức dậy - nhóm 2 đặc biệt) ➔ thể て là「起きて」.\n  - 23): Đã cho「教えて」➔ động từ thể lịch sự là「教えます」(dạy, chỉ bảo).\n  - 24): Cho「来ます」(đến) ➔ thể て là「来て」.\n  - 25): Đã cho「勉強して」➔ động từ thể lịch sự là「勉強します」(học).\n  - 26): Cho「消します」(tắt) ➔ thể て là「消して」.\n  - 27): Đã cho「つけて」➔ động từ thể lịch sự là「つけます」(bật).\n  - 28): Cho「閉めます」(đóng) ➔ thể て là「閉めて」.\n  - 29): Đã cho「して」➔ động từ thể lịch sự là「します」(làm).\n  - 30): Cho「散歩します」(đi dạo) ➔ thể て là「散歩して」."
      },
      {
        "id": "b14_q2",
        "type": "fill",
        "tag": "Chia thể て và điền từ thích hợp",
        "question": "2. ［ つけます　使います　見せます　消します　教えます ］\n［ 休みます　書きます　取ります　話します　閉めます ］\n\n例：すみませんが、もう少しゆっくり<u>話してください。</u>\n\n1) すみませんが、松本さんの電話番号を＿＿＿＿＿＿＿＿＿＿。\n\n2) パスポートをもう一度＿＿＿＿＿＿＿＿＿＿。\n\n3) ボールペンで住所と名前を＿＿＿＿＿＿＿＿＿＿。\n\n4) 暑いですから、エアコンを＿＿＿＿＿＿＿＿＿＿。\n\n5) ちょっとそのはさみを＿＿＿＿＿＿＿＿＿＿。\n\n6) エアコンをつけましたから、窓を＿＿＿＿＿＿＿＿＿＿。\n\n7) どうぞこの傘を＿＿＿＿＿＿＿＿＿＿。\n\n8) 疲れました。…じゃ、どうぞこちらで＿＿＿＿＿＿＿＿＿＿。",
        "answers": [
          "教えてください / おしえてください / 教えて / おしえて / oshiete kudasai / oshiete",
          "見せてください / みせてください / 見せて / みせて / misete kudasai / misete",
          "書いてください / かいてください / 書いて / かいて / kaite kudasai / kaite",
          "つけてください / つけて / tsukete kudasai / tsukete",
          "取ってください / とってください / 使ってください / つかってください / 取って / とって / totte kudasai / totte",
          "閉めてください / しめてください / 閉めて / しめて / shimete kudasai / shimete",
          "使ってください / つかってください / 取ってください / とってください / 使って / つかって / tsukatte kudasai / tsukatte",
          "休んでください / やすんでください / 休んで / やすんで / yasunde kudasai / yasunde"
        ],
        "explanation": "• Cấu trúc yêu cầu, nhờ vả ai đó làm gì một cách lịch sự:「V-て + ください」(Xin vui lòng hãy làm V):\n• 1): Hỏi số điện thoại「松本さんの電話番号を」(số điện thoại của anh Matsumoto) ➔ dùng động từ「教えます」(cho biết, chỉ cho) chia thành「教えてください」(xin hãy cho tôi biết).\n• 2): Xuất trình hộ chiếu「パスポートをもう一度」(hộ chiếu thêm một lần nữa) ➔ dùng động từ「見せます」(cho xem, xuất trình) chia thành「見せてください」(xin hãy cho tôi xem lại).\n• 3): Điền thông tin「ボールペンで住所と名前を」➔ dùng động từ「書きます」(viết) chia thành「書いてください」(xin hãy viết họ tên và địa chỉ bằng bút bi).\n• 4): Trời nóng「暑いですから」➔ bật máy lạnh「エアコンを」➔ dùng động từ「つけます」(bật) chia thành「つけてください」(xin hãy bật máy lạnh).\n• 5): Lấy giúp cái kéo「ちょっとそのはさみを」➔ dùng động từ「取ります」(lấy giúp) chia thành「取ってください」(xin hãy lấy giúp tôi cái kéo đó) hoặc「使ってください」(xin hãy dùng).\n• 6): Vì đã bật máy lạnh「エアコンをつけましたから」➔ đóng cửa sổ「窓を」➔ dùng động từ「閉めます」(đóng) chia thành「閉めてください」(xin hãy đóng cửa sổ lại).\n• 7): Mời dùng ô「どうぞこの傘を」➔ dùng động từ「使います」(dùng, sử dụng) chia thành「使ってください」(xin mời dùng chiếc ô này).\n• 8): Khi nghe đối phương than mệt「疲れました」➔ mời nghỉ ngơi「どうぞこちらで」➔ dùng động từ「休みます」(nghỉ ngơi) chia thành「休んでください」(xin mời nghỉ ngơi ở đây)."
      },
      {
        "id": "b14_q3",
        "type": "fill",
        "tag": "Đề nghị giúp đỡ và nhờ vả",
        "question": "3. 例：今晩電話を（かけます…かけ）ましょうか。（8時ごろ）\n…ええ、<u>8時ごろかけてください。</u>\n\n1) あした手伝いに（来ます…____）ましょうか。（1時ごろ）\n…ええ、＿＿＿＿＿＿＿＿＿＿。\n\n2) 細かいお金を（貸します…____）ましょうか。（200円）\n…ええ、＿＿＿＿＿＿＿＿＿＿。\n\n3) 荷物を（持ちます…____）ましょうか。（1つ）\n…ええ、＿＿＿＿＿＿＿＿＿＿。\n\n4) 飲み物を（買います…____）ましょうか。（ジュースとビールを）\n…ええ、＿＿＿＿＿＿＿＿＿＿。\n\n5) 地図を（送ります…____）ましょうか。（メールで）\n…ええ、＿＿＿＿＿＿＿＿＿＿。",
        "answers": [
          "来 / き / ki / 来て / きて",
          "1時ごろ来てください / 1時ごろ来てください。 / 1じごろきてください / 1じごろきてください。 / 1時ごろに来てください / 1時ごろに来てください。 / 一時ごろ来てください / 一時ごろ来てください。 / 来てください / きてください / 1ji goro kite kudasai",
          "貸し / かし / 貸 / kashi / 貸して / かして",
          "200円貸してください / 200円貸してください。 / 200えんかしてください / 200えんかしてください。 / 200円を貸してください / 200円を貸してください。 / 貸してください / かしてください / 200 en kashite kudasai",
          "持ち / もち / 持 / mochi / 持って / もって",
          "1つ持ってください / 1つ持ってください。 / ひとつもってください / ひとつもってください。 / 1つをもってください / 1つをもってください。 / 持ってください / もってください / hitotsu motte kudasai",
          "買い / かい / 買 / kai / 買って / かって",
          "ジュースとビールを買ってください / ジュースとビールを買ってください。 / ジュースとビールをかってください / ジュースとビールをかってください。 / 買ってください / かってください / ju-su to bi-ru o katte kudasai",
          "送り / おくり / 送 / okuri / 送って / おくって",
          "メールで送ってください / メールで送ってください。 / メールでおくってください / メールでおくってください。 / 送ってください / おくってください / me-ru de okutte kudasai"
        ],
        "explanation": "• Cấu trúc đề nghị giúp đỡ:「V-masu(bỏ ます) + ましょうか」(Tôi làm V giúp bạn nhé?).\n• Cách trả lời đồng ý và nhờ đối phương làm theo thông tin gợi ý:「…ええ、[Thông tin gợi ý] + [V-て + ください]」(Vâng, xin vui lòng làm V...):\n• 例:「かけます」bỏ ます thành「かけ」➔「かけましょうか」(Tôi gọi điện nhé?). Gợi ý (8時ごろ) ➔「8時ごろかけてください」(Hãy gọi vào khoảng 8 giờ).\n• 1): Động từ「来ます」(đến) bỏ ます thành「来」(き) ➔「来ましょうか」(Ngày mai tôi đến giúp nhé?). Gợi ý (1時ごろ) kết hợp「来てください」➔「1時ごろ来てください」(Vâng, hãy đến vào khoảng 1 giờ).\n• 2): Động từ「貸します」(cho mượn) bỏ ます thành「貸し」(かし) ➔「貸しましょうか」(Tôi cho mượn tiền lẻ nhé?). Gợi ý (200円) kết hợp「貸してください」➔「200円貸してください」(Vâng, hãy cho tôi mượn 200 yên).\n• 3): Động từ「持ちます」(mang, xách) bỏ ます thành「持ち」(もち) ➔「持ちましょうか」(Tôi xách hành lý giúp nhé?). Gợi ý (1つ) kết hợp「持ってください」➔「1つ持ってください」(Vâng, xin hãy xách giúp tôi 1 cái).\n• 4): Động từ「買います」(mua) bỏ ます thành「買い」(かい) ➔「買いましょうか」(Tôi mua đồ uống giúp nhé?). Gợi ý (ジュースとビールを) kết hợp「買ってください」➔「ジュースとビールを買ってください」(Vâng, xin hãy mua nước trái cây và bia).\n• 5): Động từ「送ります」(gửi) bỏ ます thành「送り」(おくり) ➔「送りましょうか」(Tôi gửi bản đồ nhé?). Gợi ý (メールで) kết hợp「送ってください」➔「メールで送ってください」(Vâng, xin hãy gửi bằng email)."
      },
      {
        "id": "b14_q5",
        "type": "binary_choice",
        "tag": "Chọn từ đúng trong ngoặc",
        "question": "5. 例：用事がありますから、きょうは〔ゆっくり／<u>早く</u>／よく〕帰ります。\n\n1) この地図を〔もう／だいたい／ずっと〕1枚コピーしてください。\n\n2) 〔よく／もう／もう少し〕大きいかばんが欲しいです。\n\n3) 今忙しいですから、〔すぐ／ゆっくり／あとで〕お茶を飲みます。\n\n4) どうぞ〔初めて／また／まっすぐ〕遊びに来てください。\n\n5) 時間がありますから、〔すぐ／ゆっくり／早く〕食事しましょう。\n\n6) 今電話をかけましたから、タクシーは〔すぐ／また／よく〕来ます。",
        "answers": [
          "もう / mou",
          "もう少し / もうすこし / mousukoshi",
          "あとで / 後で / atode",
          "また / mata",
          "ゆっくり / yukkuri",
          "すぐ / sugu"
        ],
        "explanation": "• Ôn tập cách sử dụng các phó từ trong Minna no Nihongo Bài 14:\n• 例: Có việc bận「用事がありますから」➔ về sớm「早く帰ります」.\n• 1): Thêm một tờ nữa: phó từ「もう」kết hợp lượng từ「1枚」➔「もう1枚」(thêm một tờ nữa).「だいたい」(đại khái),「ずっと」(suốt/hơn hẳn) không đi với 1枚 ở ngữ cảnh này.\n• 2): Bổ nghĩa so sánh mức độ cho tính từ「大きい」(to) ➔ chọn「もう少し」(to hơn một chút nữa).「よく」và「もう」đứng một mình không bổ nghĩa cho tính từ 大きい ở đây.\n• 3): Vì bây giờ bận「今忙しいですから」➔ uống trà sau/lát nữa「あとで お茶を飲みます」.「すぐ」(ngay) mâu thuẫn với việc đang bận.\n• 4): Lời mời khách lần sau ghé chơi lại:「また 遊びに来てください」(Lần sau lại ghé chơi nhé).「初めて」(lần đầu),「まっすぐ」(đi thẳng) không phù hợp.\n• 5): Vì có nhiều thời gian「時間がありますから」➔ thong thả dùng bữa「ゆっくり 食事しましょう」.「早く」(nhanh/sớm),「すぐ」(ngay lập tức) mâu thuẫn với có nhiều thời gian.\n• 6): Vừa mới gọi điện thoại xong「今電話をかけましたから」➔ taxi sẽ đến ngay thôi「すぐ 来ます」."
      },
      {
        "id": "b14_q6",
        "type": "fill",
        "tag": "Chia dạng thích hợp của động từ",
        "question": "6. 例：あの喫茶店でちょっと（休みます…休み）ませんか。\n\nA：カリナさんは何を（します…____）いますか。\nB：あそこで花を（見ます…____）います。\n　 （呼びます…____）ましょうか。\nA：ええ、（呼びます…____）ください。\n　 いっしょにお茶を（飲みます…____）に行きましょう。\nB：いいですね。冷たい物を（飲みます…____）たいです。",
        "answers": [
          "して / shite",
          "見て / みて / mite",
          "呼び / よび / yobi",
          "呼んで / よんで / yonde",
          "飲み / のみ / nomi",
          "飲み / のみ / nomi"
        ],
        "explanation": "• Ôn tập tổng hợp các cấu trúc biến đổi động từ trong Bài 14 và các bài trước:\n• 1): Cấu trúc đang làm gì「V-て + います」➔ Động từ「します」(làm) đổi sang thể て là「して」➔「何を していますか」(Karina đang làm gì thế?).\n• 2): Đang ngắm hoa「V-て + います」➔ Động từ「見ます」(nhìn, ngắm) đổi sang thể て là「見て」➔「花を 見ています」(Đang ngắm hoa đằng kia).\n• 3): Cấu trúc đề nghị giúp đỡ「V(bỏ ます) + ましょうか」➔ Động từ「呼びます」(gọi) bỏ ます là「呼び」➔「呼びましょうか」(Tôi gọi bạn ấy nhé?).\n• 4): Cấu trúc nhờ vả「V-て + ください」➔ Động từ「呼びます」đổi sang thể て là「呼んで」➔「呼んでください」(Vâng, xin hãy gọi giúp).\n• 5): Cấu trúc mục đích di chuyển「V(bỏ ます) + に行きます」➔ Động từ「飲みます」(uống) bỏ ます là「飲み」➔「お茶を 飲みに行きましょう」(Cùng đi uống trà nhé).\n• 6): Cấu trúc mong muốn「V(bỏ ます) + たいです」➔ Động từ「飲みます」bỏ ます là「飲み」➔「冷たい物を 飲みたいです」(Tôi muốn uống đồ lạnh)."
      },
      {
        "id": "b14_q7",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "7. 1) 今音楽を聞いていますか。＿＿＿＿＿＿＿＿＿＿\n\n2) 「定食」の読み方を書いてください。＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "はい、聞いています。 / いいえ、聞いていません。",
          "ていしょく / 「ていしょく」です / teishoku"
        ],
        "explanation": "• Dạng câu hỏi mở luyện đối thoại về bản thân (không tính điểm, tự đối chiếu với đáp án mẫu sau khi nộp bài):\n• 1):「今音楽を聞いていますか」(Bây giờ bạn có đang nghe nhạc không?) ➔ Nếu có:「はい、聞いています。」; nếu không:「いいえ、聞いていません。」.\n• 2):「「定食」の読み方を書いてください」(Hãy viết cách đọc của từ 「定食」) ➔ Chữ Hán 定食 đọc theo Hiragana là「ていしょく」(cơm suất / phần ăn định sẵn)."
      },
      {
        "id": "b14_q3",
        "type": "fill",
        "tag": "Đề nghị giúp đỡ và nhờ vả",
        "question": "3. 例：今晩電話を（かけます…かけ）ましょうか。（8時ごろ）\n…ええ、<u>8時ごろかけてください。</u>\n\n1) あした手伝いに（来ます…____）ましょうか。（1時ごろ）\n…ええ、＿＿＿＿＿＿＿＿＿＿。\n\n2) 細かいお金を（貸します…____）ましょうか。（200円）\n…ええ、＿＿＿＿＿＿＿＿＿＿。\n\n3) 荷物を（持ちます…____）ましょうか。（1つ）\n…ええ、＿＿＿＿＿＿＿＿＿＿。\n\n4) 飲み物を（買います…____）ましょうか。（ジュースとビールを）\n…ええ、＿＿＿＿＿＿＿＿＿＿。\n\n5) 地図を（送ります…____）ましょうか。（メールで）\n…ええ、＿＿＿＿＿＿＿＿＿＿。",
        "answers": [
          "来 / き / ki / 来て / きて",
          "1時ごろ来てください / 1時ごろ来てください。 / 1じごろきてください / 1じごろきてください。 / 1時ごろに来てください / 1時ごろに来てください。 / 一時ごろ来てください / 一時ごろ来てください。 / 来てください / きてください / 1ji goro kite kudasai",
          "貸し / かし / 貸 / kashi / 貸して / かして",
          "200円貸してください / 200円貸してください。 / 200えんかしてください / 200えんかしてください。 / 200円を貸してください / 200円を貸してください。 / 貸してください / かしてください / 200 en kashite kudasai",
          "持ち / もち / 持 / mochi / 持って / もって",
          "1つ持ってください / 1つ持ってください。 / ひとつもってください / ひとつもってください。 / 1つをもってください / 1つをもってください。 / 持ってください / もってください / hitotsu motte kudasai",
          "買い / かい / 買 / kai / 買って / かって",
          "ジュースとビールを買ってください / ジュースとビールを買ってください。 / ジュースとビールをかってください / ジュースとビールをかってください。 / 買ってください / かってください / ju-su to bi-ru o katte kudasai",
          "送り / おくり / 送 / okuri / 送って / おくって",
          "メールで送ってください / メールで送ってください。 / メールでおくってください / メールでおくってください。 / 送ってください / おくってください / me-ru de okutte kudasai"
        ],
        "explanation": "• Cấu trúc đề nghị giúp đỡ:「V-masu(bỏ ます) + ましょうか」(Tôi làm V giúp bạn nhé?).\n• Cách trả lời đồng ý và nhờ đối phương làm theo thông tin gợi ý:「…ええ、[Thông tin gợi ý] + [V-て + ください]」(Vâng, xin vui lòng làm V...):\n• 例:「かけます」bỏ ます thành「かけ」➔「かけましょうか」(Tôi gọi điện nhé?). Gợi ý (8時ごろ) ➔「8時ごろかけてください」(Hãy gọi vào khoảng 8 giờ).\n• 1): Động từ「来ます」(đến) bỏ ます thành「来」(き) ➔「来ましょうか」(Ngày mai tôi đến giúp nhé?). Gợi ý (1時ごろ) kết hợp「来てください」➔「1時ごろ来てください」(Vâng, hãy đến vào khoảng 1 giờ).\n• 2): Động từ「貸します」(cho mượn) bỏ ます thành「貸し」(かし) ➔「貸しましょうか」(Tôi cho mượn tiền lẻ nhé?). Gợi ý (200円) kết hợp「貸してください」➔「200円貸してください」(Vâng, hãy cho tôi mượn 200 yên).\n• 3): Động từ「持ちます」(mang, xách) bỏ ます thành「持ち」(もち) ➔「持ちましょうか」(Tôi xách hành lý giúp nhé?). Gợi ý (1つ) kết hợp「持ってください」➔「1つ持ってください」(Vâng, xin hãy xách giúp tôi 1 cái).\n• 4): Động từ「買います」(mua) bỏ ます thành「買い」(かい) ➔「買いましょうか」(Tôi mua đồ uống giúp nhé?). Gợi ý (ジュースとビールを) kết hợp「買ってください」➔「ジュースとビールを買ってください」(Vâng, xin hãy mua nước trái cây và bia).\n• 5): Động từ「送ります」(gửi) bỏ ます thành「送り」(おくり) ➔「送りましょうか」(Tôi gửi bản đồ nhé?). Gợi ý (メールで) kết hợp「送ってください」➔「メールで送ってください」(Vâng, xin hãy gửi bằng email)."
      },
      {
        "id": "b14_q5",
        "type": "binary_choice",
        "tag": "Chọn từ đúng trong ngoặc",
        "question": "5. 例：用事がありますから、きょうは〔ゆっくり／<u>早く</u>／よく〕帰ります。\n\n1) この地図を〔もう／だいたい／ずっと〕1枚コピーしてください。\n\n2) 〔よく／もう／もう少し〕大きいかばんが欲しいです。\n\n3) 今忙しいですから、〔すぐ／ゆっくり／あとで〕お茶を飲みます。\n\n4) どうぞ〔初めて／また／まっすぐ〕遊びに来てください。\n\n5) 時間がありますから、〔すぐ／ゆっくり／早く〕食事しましょう。\n\n6) 今電話をかけましたから、タクシーは〔すぐ／また／よく〕来ます。",
        "answers": [
          "もう / mou",
          "もう少し / もうすこし / mousukoshi",
          "あとで / 後で / atode",
          "また / mata",
          "ゆっくり / yukkuri",
          "すぐ / sugu"
        ],
        "explanation": "• Ôn tập cách sử dụng các phó từ trong Minna no Nihongo Bài 14:\n• 例: Có việc bận「用事がありますから」➔ về sớm「早く帰ります」.\n• 1): Thêm một tờ nữa: phó từ「もう」kết hợp lượng từ「1枚」➔「もう1枚」(thêm một tờ nữa).「だいたい」(đại khái),「ずっと」(suốt/hơn hẳn) không đi với 1枚 ở ngữ cảnh này.\n• 2): Bổ nghĩa so sánh mức độ cho tính từ「大きい」(to) ➔ chọn「もう少し」(to hơn một chút nữa).「よく」và「もう」đứng một mình không bổ nghĩa cho tính từ 大きい ở đây.\n• 3): Vì bây giờ bận「今忙しいですから」➔ uống trà sau/lát nữa「あとで お茶を飲みます」.「すぐ」(ngay) mâu thuẫn với việc đang bận.\n• 4): Lời mời khách lần sau ghé chơi lại:「また 遊びに来てください」(Lần sau lại ghé chơi nhé).「初めて」(lần đầu),「まっすぐ」(đi thẳng) không phù hợp.\n• 5): Vì có nhiều thời gian「時間がありますから」➔ thong thả dùng bữa「ゆっくり 食事しましょう」.「早く」(nhanh/sớm),「すぐ」(ngay lập tức) mâu thuẫn với có nhiều thời gian.\n• 6): Vừa mới gọi điện thoại xong「今電話をかけましたから」➔ taxi sẽ đến ngay thôi「すぐ 来ます」."
      },
      {
        "id": "b14_q6",
        "type": "fill",
        "tag": "Chia dạng thích hợp của động từ",
        "question": "6. 例：あの喫茶店でちょっと（休みます…休み）ませんか。\n\nA：カリナさんは何を（します…____）いますか。\nB：あそこで花を（見ます…____）います。\n　 （呼びます…____）ましょうか。\nA：ええ、（呼びます…____）ください。\n　 いっしょにお茶を（飲みます…____）に行きましょう。\nB：いいですね。冷たい物を（飲みます…____）たいです。",
        "answers": [
          "して / shite",
          "見て / みて / mite",
          "呼び / よび / yobi",
          "呼んで / よんで / yonde",
          "飲み / のみ / nomi",
          "飲み / のみ / nomi"
        ],
        "explanation": "• Ôn tập tổng hợp các cấu trúc biến đổi động từ trong Bài 14 và các bài trước:\n• 1): Cấu trúc đang làm gì「V-て + います」➔ Động từ「します」(làm) đổi sang thể て là「して」➔「何を していますか」(Karina đang làm gì thế?).\n• 2): Đang ngắm hoa「V-て + います」➔ Động từ「見ます」(nhìn, ngắm) đổi sang thể て là「見て」➔「花を 見ています」(Đang ngắm hoa đằng kia).\n• 3): Cấu trúc đề nghị giúp đỡ「V(bỏ ます) + ましょうか」➔ Động từ「呼びます」(gọi) bỏ ます là「呼び」➔「呼びましょうか」(Tôi gọi bạn ấy nhé?).\n• 4): Cấu trúc nhờ vả「V-て + ください」➔ Động từ「呼びます」đổi sang thể て là「呼んで」➔「呼んでください」(Vâng, xin hãy gọi giúp).\n• 5): Cấu trúc mục đích di chuyển「V(bỏ ます) + に行きます」➔ Động từ「飲みます」(uống) bỏ ます là「飲み」➔「お茶を 飲みに行きましょう」(Cùng đi uống trà nhé).\n• 6): Cấu trúc mong muốn「V(bỏ ます) + たいです」➔ Động từ「飲みます」bỏ ます là「飲み」➔「冷たい物を 飲みたいです」(Tôi muốn uống đồ lạnh)."
      },
      {
        "id": "b14_q7",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "7. 1) 今音楽を聞いていますか。＿＿＿＿＿＿＿＿＿＿\n\n2) 「定食」の読み方を書いてください。＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "はい、聞いています。 / いいえ、聞いていません。",
          "ていしょく / 「ていしょく」です / teishoku"
        ],
        "explanation": "• Dạng câu hỏi mở luyện đối thoại về bản thân (không tính điểm, tự đối chiếu với đáp án mẫu sau khi nộp bài):\n• 1):「今音楽を聞いていますか」(Bây giờ bạn có đang nghe nhạc không?) ➔ Nếu có:「はい、聞いています。」; nếu không:「いいえ、聞いていません。」.\n• 2):「「定食」の読み方を書いてください」(Hãy viết cách đọc của từ 「定食」) ➔ Chữ Hán 定食 đọc theo Hiragana là「ていしょく」(cơm suất / phần ăn định sẵn)."
      }
    ]
  },
  "bai_15": {
    "title": "Bài 15",
    "completed": false,
    "questions": [
      {
        "id": "b15_q1",
        "type": "fill",
        "tag": "Điền trợ từ vào ngoặc",
        "question": "1. 例：ケータイ（ で ）桜（ の ）写真（ を ）撮りました。\n\n1) 時々高校の友達（____）思い出します。\n2) 静かな所（____）住みたいです。\n3) あの棚（____）上（____）カタログ（____）もらってもいいですか。\n4) 机（____）上（____）資料（____）置きました。\n5) ご家族（____）どちら（____）いらっしゃいますか。",
        "answers": [
          "を / o / wo",
          "に / ni",
          "の / no",
          "の / から / no / kara",
          "を / o / wo",
          "の / no",
          "に / ni",
          "を / o / wo",
          "は / が / wa / ga",
          "に / ni"
        ],
        "explanation": "• Ôn tập cách dùng trợ từ trong các mẫu câu của Minna no Nihongo Bài 15:\n• 例: Dùng điện thoại chụp ảnh hoa anh đào:「ケータイ で」(phương tiện/công cụ),「桜 の 写真」(ảnh hoa anh đào - nối danh từ),「写真 を 撮りました」(tân ngữ của hành động chụp ảnh).\n• 1): Cấu trúc biểu thị nhớ về ai đó「[Đối tượng] を 思い出します」➔「高校の友達 を 思い出します」(thỉnh thoảng nhớ về bạn bè cấp ba).\n• 2): Cấu trúc chỉ nơi sinh sống lâu dài định cư「[Địa điểm] に 住みます／住みたいです」dùng trợ từ「に」chỉ sự tồn tại ➔「静かな所 に 住みたいです」(muốn sống ở nơi yên tĩnh).\n• 3): Vị trí 1:「あの棚 の 上」(trên giá kia - nối vị trí). Vị trí 2:「上 の カタログ」(cuốn catalogue ở trên) hoặc「上 から」(từ trên giá). Vị trí 3: Tân ngữ của hành động nhận「カタログ を もらってもいいですか」(tôi có thể nhận cuốn catalogue được không?).\n• 4): Vị trí 1:「机 の 上」(trên bàn - nối vị trí). Vị trí 2: Đích đến/vị trí đặt để của hành động đặt「机の上に 資料 を 置きました」(đặt tài liệu lên trên bàn dùng trợ từ「に」). Vị trí 3: Tân ngữ「資料 を」(đặt tài liệu).\n• 5): Vị trí 1: Trợ từ「は」(hoặc「が」) xác định chủ ngữ「ご家族 は」(Gia đình bạn thì...). Vị trí 2: Đi kèm kính ngữ tồn tại「いらっしゃいます」(ở đâu) dùng trợ từ「に」➔「どちら に いらっしゃいますか」(Gia đình bạn đang ở đâu thế ạ?)."
      },
      {
        "id": "b15_q2",
        "type": "fill",
        "tag": "Chia thể て và điền từ thích hợp",
        "question": "2. ［ 泳ぎます　書きます　飲みます　使います　もらいます ］\n［ 吸います　作ります　開けます　つけます ］\n\n例：このはさみを（ 使って ）もいいですか。\n\n1) エアコンを（____）もいいですか。\n2) 鉛筆で（____）もいいですか。\n3) 窓を（____）もいいですか。\n4) このカタログを（____）もいいですか。\n5) この川で（____）はいけません。\n6) 子どもはたばこを（____）はいけません。\n7) 教室でお酒を（____）はいけません。",
        "answers": [
          "つけて / tsukete",
          "書いて / かいて / kaite",
          "開けて / あけて / akete",
          "もらって / moratte",
          "泳いで / およいで / oyoide",
          "吸って / すって / sutte",
          "飲んで / のんで / nonde"
        ],
        "explanation": "• Ôn tập hai mẫu câu trọng tâm của Bài 15:\n  - Xin phép:「V-て + もいいですか」(Tôi làm V có được không?)\n  - Cấm đoán:「V-て + はいけません」(Không được làm V / Cấm làm V)\n• 1): Bật máy lạnh「エアコンを」➔ Động từ「つけます」(nhóm 2) chuyển sang thể て là「つけて」➔「エアコンをつけてもいいですか」(Tôi bật máy lạnh có được không?).\n• 2): Viết bằng bút chì「鉛筆で」➔ Động từ「書きます」(nhóm 1) chuyển sang thể て là「書いて」➔「鉛筆で書いてもいいですか」(Tôi viết bằng bút chì có được không?).\n• 3): Mở cửa sổ「窓を」➔ Động từ「開けます」(nhóm 2) chuyển sang thể て là「開けて」➔「窓を開けてもいいですか」(Tôi mở cửa sổ có được không?).\n• 4): Nhận cuốn catalogue「このカタログを」➔ Động từ「もらいます」(nhóm 1) chuyển sang thể て là「もらって」➔「このカタログをもらってもいいですか」(Tôi lấy cuốn catalogue này có được không?).\n• 5): Bơi ở dòng sông này「この川で」➔ Động từ「泳ぎます」(nhóm 1) chuyển sang thể て là「泳いで」➔「この川で泳いではいけません」(Không được bơi ở dòng sông này).\n• 6): Trẻ em hút thuốc「子どもはたばこを」➔ Động từ「吸います」(nhóm 1) chuyển sang thể て là「吸って」➔「子どもはたばこを吸ってはいけません」(Trẻ em không được hút thuốc).\n• 7): Uống rượu trong lớp học「教室でお酒を」➔ Động từ「飲みます」(nhóm 1) chuyển sang thể て là「飲んで」➔「教室でお酒を飲んではいけません」(Không được uống rượu trong lớp học).\n(Lưu ý: Động từ「作ります」là từ đánh lừa)."
      },
      {
        "id": "b15_q3",
        "type": "fill",
        "tag": "Chia thể て và điền từ thích hợp",
        "question": "3. ［ 住みます　作ります　立ちます　持ちます　売ります ］\n［ 知ります　働きます　結婚します　研究します ］\n\n例：兄の会社は電気製品を（ 作って ）います。\n\n1) タワポンさんは学校の近くに（____）います。\n2) 弟は（____）いません。独身です。\n3) カリナさんは日本の古い美術を（____）います。\n4) タワポンさんは（____）いません。学生です。\n5) どこで電子辞書を（____）いますか。\n6) サントスさんの住所を（____）いますか。\n7) テレーザちゃんは自転車を（____）います。",
        "answers": [
          "住んで / すんで / sunde",
          "結婚して / けっこんして / kekkon shite / kekkonshite",
          "研究して / けんきゅうして / kenkyuu shite / kenkyuushite",
          "働いて / はたらいて / hataraite",
          "売って / うって / utte",
          "知って / しって / shitte",
          "持って / もって / motte"
        ],
        "explanation": "• Ôn tập mẫu câu biểu thị trạng thái kéo dài, nghề nghiệp, kết quả hoặc thói quen của hành động:「V-て + います / いません」(Đang / Có...):\n• 例: Sản xuất đồ điện tử:「電気製品を 作っています」(công ty anh trai tôi sản xuất đồ điện tử).\n• 1): Cư trú, sinh sống lâu dài tại đâu「[Địa điểm] に 住んでいます」➔「学校の近くに 住んでいます」(Tawapon sống ở gần trường học).\n• 2): Trạng thái hôn nhân: chưa kết hôn, còn độc thân「独身です」➔ dùng phủ định「結婚していません」(em trai tôi chưa kết hôn).\n• 3): Nghiên cứu lĩnh vực nghệ thuật「日本の古い美術を 研究しています」(Karina đang nghiên cứu mỹ thuật cổ Nhật Bản).\n• 4): Nghề nghiệp: chưa đi làm, đang là học sinh/sinh viên「学生です」➔ dùng phủ định「働いていません」(Tawapon không đi làm).\n• 5): Nơi buôn bán, kinh doanh một mặt hàng「どこで電子辞書を 売っていますか」(Ở đâu có bán từ điển điện tử thế?).\n• 6): Trạng thái biết một thông tin (địa chỉ, số điện thoại)「[Thông tin] を 知っていますか」➔「サントスさんの住所を 知っていますか」(Bạn có biết địa chỉ của anh Santos không?).\n• 7): Sở hữu đồ vật (xe cộ, nhà cửa)「[Đồ vật] を 持っています」➔「自転車を 持っています」(Bé Teresa có một chiếc xe đạp).\n(Lưu ý: Động từ「立ちます」là từ đánh lừa)."
      },
      {
        "id": "b15_q4",
        "type": "fill",
        "tag": "Chia dạng thích hợp của động từ",
        "question": "4. 例：A：旅行の写真を（見ます…見て）もいいですか。\n　　B：ええ。いっしょに（見ます…見）ましょう。\n\n1) A：ここに荷物を（置きます…____）もいいですか。\n　 B：ここはちょっと……。\n　 すみませんが、あちらに（置きます…____）ください。\n\n2) A：疲れました。ちょっと（休みます…____）もいいですか。\n　 B：ええ。わたしも疲れましたから、（休みます…____）ましょう。\n\n3) A：失礼ですが、お仕事は？\n　 B：教師です。高校で美術を（教えます…____）います。\n　 A：あなたは？\n　 C：学生です。日本語学校で日本語を（勉強します…____）います。\n　 来年から日本の会社で（働きます…____）たいです。\n\n4) A：日曜日に美術館へ絵を（見ます…____）に行きます。\n　 B：わたしも（行きます…____）たいです。\n　 いっしょに（行きます…____）もいいですか。\n　 A：ええ。いっしょに（行きます…____）ましょう。\n　 B：美術館で写真を（撮ります…____）もいいですか。\n　 A：いいえ、いけません。",
        "answers": [
          "置いて / おいて / oite",
          "置いて / おいて / oite",
          "休んで / やすんで / yasunde",
          "休み / やすみ / yasumi",
          "教えて / おしえて / oshiete",
          "勉強して / べんきょうして / benkyou shite / benkyoushite",
          "働き / はたらき / hataraki",
          "見 / み / mi",
          "行き / いき / iki",
          "行って / いって / itte",
          "行き / いき / iki",
          "撮って / とって / totte"
        ],
        "explanation": "• Ôn tập tổng hợp biến đổi thể của động từ kết hợp với các mẫu câu ngữ pháp đã học (Bài 13, Bài 14, Bài 15):\n  - V-て + もいいですか (Xin phép làm gì: Được làm... không?)\n  - V-て + ください (Yêu cầu, nhờ vả: Xin hãy...)\n  - V-て + います (Diễn tả nghề nghiệp, trạng thái tiếp diễn: Đang...)\n  - V(bỏ ます) + ましょう (Rủ rê, đề nghị cùng làm: Cùng làm... nhé)\n  - V(bỏ ます) + たいです (Diễn tả ý muốn: Muốn làm...)\n  - V(bỏ ます) + に行きます (Mục đích di chuyển: Đi để làm...)\n• 1):\n  - Blank 1: Xin phép để hành lý「ここに荷物を 置いてもいいですか」(Tôi để hành lý ở đây có được không?) ➔ Động từ「置きます」(nhóm 1) đổi sang thể て là「置いて」.\n  - Blank 2: Hướng dẫn/nhờ vả để đằng kia「あちらに 置いてください」(Xin vui lòng để đằng kia) ➔ Động từ「置きます」đổi sang thể て là「置いて」.\n• 2):\n  - Blank 3: Xin phép nghỉ ngơi「ちょっと 休んでもいいですか」(Tôi nghỉ ngơi một chút có được không?) ➔ Động từ「休みます」(nhóm 1) đổi sang thể て là「休んで」.\n  - Blank 4: Rủ cùng nghỉ ngơi「いっしょに 休みましょう」(Chúng ta cùng nghỉ ngơi nhé) ➔ Động từ「休みます」bỏ ます là「休み」.\n• 3):\n  - Blank 5: Nghề nghiệp/giảng dạy「高校で美術を 教えています」(Tôi đang dạy môn mỹ thuật ở trường cấp ba) ➔ Động từ「教えます」(nhóm 2) đổi sang thể て là「教えて」.\n  - Blank 6: Hành động đang theo học「日本語学校で日本語を 勉強しています」(Tôi đang học tiếng Nhật ở trường tiếng Nhật) ➔ Động từ「勉強します」(nhóm 3) đổi sang thể て là「勉強して」.\n  - Blank 7: Diễn tả mong muốn làm việc「来年から日本の会社で 働きたいです」(Từ năm sau tôi muốn làm việc tại một công ty Nhật Bản) ➔ Động từ「働きます」(nhóm 1) bỏ ます là「働き」.\n• 4):\n  - Blank 8: Mục đích di chuyển「美術館へ絵を 見に行きます」(Chủ nhật tôi đi đến bảo tàng mỹ thuật để xem tranh) ➔ Động từ「見ます」(nhóm 2) bỏ ます là「見」.\n  - Blank 9: Diễn tả mong muốn「わたしも 行きたいです」(Tôi cũng muốn đi) ➔ Động từ「行きます」(nhóm 1) bỏ ます là「行き」.\n  - Blank 10: Xin phép đi cùng「いっしょに 行ってもいいですか」(Tôi đi cùng có được không?) ➔ Động từ「行きます」(nhóm 1 đặc biệt) đổi sang thể て là「行って」.\n  - Blank 11: Rủ cùng đi「ええ。いっしょに 行きましょう」(Được chứ. Chúng ta cùng đi nào) ➔ Động từ「行きます」bỏ ます là「行き」.\n  - Blank 12: Xin phép chụp ảnh「美術館で写真を 撮ってもいいですか」(Chụp ảnh ở bảo tàng mỹ thuật có được không?) ➔ Động từ「撮ります」(nhóm 1) đổi sang thể て là「撮って」(Trả lời:「いいえ、いけません」- cấm chụp)."
      },
      {
        "id": "b15_q5",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "5. 1) 電子辞書を持っていますか。＿＿＿＿＿＿＿＿＿＿\n\n2) 今だれと住んでいますか。＿＿＿＿＿＿＿＿＿＿\n\n3) 働いていますか。＿＿＿＿＿＿＿＿＿＿\n\n4) てんぷらの作り方を知っていますか。＿＿＿＿＿＿＿＿＿＿\n\n5) 教室でたばこを吸ってもいいですか。＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "はい、持っています。 / いいえ、持っていません。 / はい、もっています。 / いいえ、もっていません。 / hai, motte imasu / iie, motte imasen",
          "家族と住んでいます。 / 一人で住んでいます。 / 友達と住んでいます。 / かぞくとすんでいます。 / ひとりですんでいます。 / ともだちとすんでいます。",
          "はい、働いています。 / いいえ、働いていません。学生です。 / いいえ、働いていません。 / はい、はたらいています。 / いいえ、はたらいていません。",
          "はい、知っています。 / いいえ、知りません。 / はい、しっています。 / いいえ、しりません。 / hai, shitte imasu / iie, shirimasen",
          "いいえ、吸ってはいけません。 / いいえ、いけません。 / いいえ、すってはいけません。 / いいえ、たばこを吸ってはいけません。 / iie, sutte wa ikemasen"
        ],
        "explanation": "• Dạng câu hỏi mở luyện đối thoại về bản thân (không tính điểm, tự đối chiếu với đáp án mẫu sau khi nộp bài):\n• 1):「電子辞書を持っていますか」(Bạn có từ điển điện tử không?) ➔ Nếu có:「はい、持っています。」; nếu không:「いいえ、持っていません。」.\n• 2):「今だれと住んでいますか」(Bây giờ bạn đang sống cùng với ai?) ➔ Sống cùng gia đình:「家族と住んでいます。」; sống một mình:「一人で住んでいます。」; sống cùng bạn bè:「友達と住んでいます。」.\n• 3):「働いていますか」(Bạn có đang đi làm không?) ➔ Đang đi làm:「はい、働いています。」; không đi làm (là học sinh/sinh viên):「いいえ、働いていません。学生です。」.\n• 4):「てんぷらの作り方を知っていますか」(Bạn có biết cách làm món Tempura không?) ➔ Chú ý ngữ pháp trọng tâm Bài 15: Phủ định của「知っています」bắt buộc phải là「知りません」(không dùng「知っていません」). Nếu biết:「はい、知っています。」; nếu không biết:「いいえ、知りません。」.\n• 5):「教室でたばこを吸ってもいいですか」(Hút thuốc trong lớp học có được không?) ➔ Đây là hành vi bị cấm trong lớp học, trả lời cấm đoán:「いいえ、吸ってはいけません。」(hoặc ngắn gọn:「いいえ、いけません。」)."
      }
    ]
  },
  "bai_16": {
    "title": "Bài 16",
    "completed": false,
    "questions": [
      {
        "id": "b16_q1",
        "type": "fill",
        "tag": "Tìm từ trái nghĩa",
        "columns": 2,
        "question": "1. 例1：安い ⇔ 高い\n例2：喫茶店に入ります ⇔ 喫茶店を出ます\n\n1) 多い ⇔（____）\n2) 近い ⇔（____）\n3) 軽い ⇔（____）\n4) 速い ⇔（____）\n5) 広い ⇔（____）\n6) 暗い ⇔（____）\n7) 古い ⇔（____）\n8) 低い ⇔（____）\n9) 長い ⇔（____）\n10) 暇 ⇔（____）\n11) 消します ⇔（____）\n12) 閉めます ⇔（____）\n13) 入れます ⇔（____）\n14) 座ります ⇔（____）\n15) 電車に乗ります ⇔（____）\n16) 大学を出ます ⇔（____）",
        "answers": [
          "少ない / すくない / sukunai",
          "遠い / とおい / tooi",
          "重い / おもい / omoi",
          "遅い / おそい / osoi",
          "狭い / せまい / semai",
          "明るい / あかるい / akarui",
          "新しい / あたらしい / atarashii",
          "高い / たかい / takai",
          "短い / みじかい / mijikai",
          "忙しい / いそがしい / isogashii",
          "つけます / 点けます / tsukemasu",
          "開けます / あけます / akemasu",
          "出します / だします / dashimasu",
          "立ちます / たちます / tachimasu",
          "電車を降ります / 電車をおります / 降ります / おります / densha o orimasu / densha wo orimasu / orimasu",
          "大学に入ります / 大学にはいります / 入ります / はいります / daigaku ni hairimasu / hairimasu"
        ],
        "explanation": "• Ôn tập các cặp từ (tính từ, động từ) và cụm động từ trái nghĩa trong tiếng Nhật (Bài 16 và các bài trước):\n• 例1:「安い」(rẻ) ⇔「高い」(đắt/cao).\n• 例2:「喫茶店に入ります」(vào quán giải khát - trợ từ に) ⇔「喫茶店を出ます」(ra khỏi quán giải khát - trợ từ を).\n• 1):「多い」(nhiều) ⇔「少ない」(ít, すくない).\n• 2):「近い」(gần) ⇔「遠い」(xa, とおい).\n• 3):「軽い」(nhẹ) ⇔「重い」(nặng, おもい).\n• 4):「速い」(nhanh) ⇔「遅い」(chậm, おそい).\n• 5):「広い」(rộng) ⇔「狭い」(hẹp, せまい).\n• 6):「暗い」(tối) ⇔「明るい」(sáng, あかるい).\n• 7):「古い」(cũ) ⇔「新しい」(mới, あたらしい).\n• 8):「低い」(thấp) ⇔「高い」(cao, たかい).\n• 9):「長い」(dài) ⇔「短い」(ngắn, みじかい).\n• 10):「暇」(rảnh rỗi) ⇔「忙しい」(bận rộn, いそがしい).\n• 11):「消します」(tắt đèn/thiết bị) ⇔「つけます / 点けます」(bật).\n• 12):「閉めます」(đóng cửa) ⇔「開けます」(mở, あけます).\n• 13):「入れます」(cho vào) ⇔「出します」(lấy ra, だします).\n• 14):「座ります」(ngồi xuống) ⇔「立ちます」(đứng lên, たちます).\n• 15):「電車に乗ります」(lên tàu điện - trợ từ に) ⇔「電車を降ります」(xuống tàu điện - trợ từ を, おります).\n• 16):「大学を出ます」(ra trường/tốt nghiệp đại học - trợ từ を) ⇔「大学に入ります」(nhập học/vào đại học - trợ từ に, はいります)."
      },
      {
        "id": "b16_q2",
        "type": "fill",
        "tag": "Nối câu bằng thể て và V-てから",
        "question": "2. 例：窓を（閉めました…閉めて）、電気を（消しました…消して）から、事務所を出ました。\n\n1) 地下鉄で大阪まで（行きます…____）、JRに乗り換えてください。\n2) 毎朝駅で新聞を（買います…____）、電車で読みます。\n3) バスを（降りました…____）から、田中さんのうちまで歩いて行きました。\n4) 昼ごはんを（食べます…____）、少し（休みます…____）から、テニスをしに行きます。\n5) 大学を（出ました…____）から、コンピューターの会社に（入りました…____）、3年働きました。\n6) 仕事が（終わります…____）から、1時間ぐらいプールで（泳ぎます…____）、帰ります。\n7) きのう友達と野球を（見ました…____）、食事を（しました…____）、それから11時ごろまで喫茶店で話しました。\n8) ここにキャッシュカードを（入れます…____）、暗証番号を押してください。それから金額を（押します…____）、（確認します…____）から、確認ボタンを押してください。",
        "answers": [
          "行って / いって / itte",
          "買って / かって / katte",
          "降りて / おりて / orite",
          "食べて / たべて / tabete",
          "休んで / やすんで / yasunde",
          "出て / でて / dete",
          "入って / はいって / haitte",
          "終わって / おわって / owatte",
          "泳いで / およいで / oyoide",
          "見て / みて / mite",
          "して / shite",
          "入れて / いれて / irete",
          "押して / おして / oshite",
          "確認して / かくにんして / kakunin shite / kakuninshite"
        ],
        "explanation": "• Ôn tập hai mẫu ngữ pháp trọng tâm của Bài 16 Minna no Nihongo:\n  - Nối chuỗi hành động theo thứ tự thời gian:「V1-て、V2-て、... V-n」(Làm V1, rồi làm V2, rồi...)\n  - Diễn tả hành động sau khi hoàn tất hành động trước:「V1-て + から、V2」(Sau khi làm V1 thì làm V2)\n• 1):「行きます」(nhóm 1 đặc biệt) đổi sang thể て là「行って」➔「地下鉄で大阪まで 行って、JRに乗り換えてください」(Hãy đi tàu điện ngầm đến Osaka rồi chuyển sang tuyến JR).\n• 2):「買います」(nhóm 1) đổi sang thể て là「買って」➔「毎朝駅で新聞を 買って、電車で読みます」(Mỗi sáng mua báo ở nhà ga rồi đọc trên tàu điện).\n• 3):「降ります」(nhóm 2) đổi sang thể て là「降りて」➔「バスを 降りてから、田中さんのうちまで歩いて行きました」(Sau khi xuống xe buýt, tôi đã đi bộ đến nhà anh Tanaka).\n• 4):「食べます」(nhóm 2) ➔「食べて」;「休みます」(nhóm 1) ➔「休んで」➔「昼ごはんを 食べて、少し 休んでから、テニスをしに行きます」(Ăn trưa rồi nghỉ ngơi một chút, sau đó đi chơi tennis).\n• 5):「出ます」(nhóm 2) ➔「出て」;「入ります」(nhóm 1) ➔「入って」➔「大学を 出てから、コンピューターの会社に 入って、3年働きました」(Sau khi ra trường, tôi vào công ty máy tính và đã làm việc ở đó 3 năm).\n• 6):「終わります」(nhóm 1) ➔「終わって」;「泳ぎます」(nhóm 1) ➔「泳いで」➔「仕事が 終わってから、1時間ぐらいプールで 泳いで、帰ります」(Sau khi xong việc, tôi bơi khoảng 1 tiếng ở hồ bơi rồi về nhà).\n• 7):「見ます」(nhóm 2) ➔「見て」;「します」(nhóm 3) ➔「して」➔「きのう友達と野球を 見て、食事を して、それから11時ごろまで喫茶店で話しました」(Hôm qua tôi xem bóng chày với bạn, ăn cơm, sau đó nói chuyện ở quán cà phê đến khoảng 11 giờ).\n• 8):「入れます」(nhóm 2) ➔「入れて」;「押します」(nhóm 1) ➔「押して」;「確認します」(nhóm 3) ➔「確認して」➔ Các bước rút tiền tại cây ATM:「ここにキャッシュカードを 入れて、暗証番号を押してください。それから金額を 押して、確認してから、確認ボタンを押してください」(Cho thẻ ATM vào đây rồi bấm mã pin. Tiếp theo bấm số tiền, sau khi xác nhận thì bấm nút xác nhận)."
      },
      {
        "id": "b16_q3",
        "type": "fill",
        "tag": "Mẫu câu N1 は N2 が Tính từ です",
        "question": "3. 例：漢字／読み方／難しい…<u>漢字は読み方が難しいです。</u>\n\n1) マリアさん／髪／長い…＿＿＿＿＿＿＿＿＿＿\n2) この料理／作り方／簡単…＿＿＿＿＿＿＿＿＿＿\n3) 日本／山／多い…＿＿＿＿＿＿＿＿＿＿\n4) 北海道／雪の季節／きれい…＿＿＿＿＿＿＿＿＿＿\n5) この喫茶店／紅茶／おいしい…＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "マリアさんは髪が長いです。 / マリアさんは髪が長いです / マリアさんはかみがながいです。 / マリアさんはかみがながいです / maria-san wa kami ga nagai desu",
          "この料理は作り方が簡単です。 / この料理は作り方が簡単です / このりょうりはつくりかたがかんたんです。 / このりょうりはつくりかたがかんたんです / kono ryouri wa tsukurikata ga kantan desu",
          "日本は山が多いです。 / 日本は山が多いです / にほんはやまがおおいです。 / にほんはやまがおおいです / nihon wa yama ga ooi desu",
          "北海道は雪の季節がきれいです。 / 北海道は雪の季節がきれいです / ほっかいどうはゆきのきせつがきれいです。 / ほっかいどうはゆきのきせつがきれいです / hokkaidou wa yuki no kisetsu ga kirei desu",
          "この喫茶店は紅茶がおいしいです。 / この喫茶店は紅茶がおいしいです / このきっさてんはこうちゃがおいしいです。 / このきっさてんはこうちゃがおいしいです / kono kissaten wa koucha ga oishii desu"
        ],
        "explanation": "• Cấu trúc biểu thị thuộc tính, đặc điểm của chủ thể:「N1 は N2 が A です」(Chủ thể N1 thì có bộ phận/thuộc tính N2 mang tính chất A):\n• 例: Chữ Hán thì cách đọc khó:「漢字は 読み方が 難しいです」.\n• 1): Maria thì tóc dài:「マリアさんは 髪が 長いです」.\n• 2): Món ăn này thì cách làm đơn giản (tính từ đuôi な「簡単」kết thúc bằng です):「この料理は 作り方が 簡単です」.\n• 3): Nhật Bản thì nhiều núi:「日本は 山が 多いです」.\n• 4): Hokkaido thì mùa tuyết đẹp (tính từ đuôi な「きれい」kết thúc bằng です):「北海道は 雪の季節が きれいです」.\n• 5): Quán giải khát này thì hồng trà ngon:「この喫茶店は 紅茶が おいしいです」."
      },
      {
        "id": "b16_q4",
        "type": "fill",
        "tag": "Nối tính từ và danh từ",
        "question": "4. 例：佐藤さんのかばんはどれですか。（黒い／大きい）\n　 …<u>あの黒くて、大きいかばんです。</u>\n\n1) ミラーさんはどの人ですか。（目が青い／背が高い）\n　 …あの ＿＿＿＿＿＿＿＿＿＿\n2) イーさんはどんな人ですか。（若い／頭がいい／すてき）\n　 … ＿＿＿＿＿＿＿＿＿＿\n3) 天気はどうでしたか。（曇り／寒い）\n　 … ＿＿＿＿＿＿＿＿＿＿\n4) どんなパソコンが欲しいですか。（小さい／使い方が簡単）\n　 … ＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "目が青くて、背が高い人です。 / 目が青くて、背が高い人です / 目があおくて、せがたかいひとです。 / 目があおくて、せがたかいひとです / あの目が青くて、背が高い人です。 / あの目が青くて、背が高い人です / 目が青くて、背が高い人 / me ga aokute se ga takai hito desu",
          "若くて、頭がよくて、すてきな人です。 / 若くて、頭がよくて、すてきな人です / 若くて、頭がよくて、すてきです。 / 若くて、頭がよくて、すてきです / わかくて、あたまがよくて、すてきなひとです。 / わかくて、あたまがよくて、すてきなひとです / wakakute atama ga yokute suteki na hito desu",
          "曇りで、寒かったです。 / 曇りで、寒かったです / くもりで、さむかったです。 / くもりで、さむかったです / kumori de samukatta desu",
          "小さくて、使い方が簡単なパソコンです。 / 小さくて、使い方が簡単なパソコンです / 小さくて、使い方が簡単なパソコンが欲しいです。 / 小さくて、使い方が簡単なパソコンが欲しいです / 小さくて、使い方が簡単です。 / 小さくて、使い方が簡単です / 小さくて、使い方が簡単なパソコン / ちいさくて、つかいかたがかんたんなパソコンです / chiisakute tsukaikata ga kantan na pasokon desu"
        ],
        "explanation": "• Ôn tập cách nối các tính từ và danh từ trong câu:\n  - Tính từ đuôi い: bỏ「い」thay bằng「〜くて」(Ví dụ: 黒い ➔ 黒くて; 若い ➔ 若くて; いい ➔ よくて; 寒い ➔ 寒くて)\n  - Tính từ đuôi な: bỏ「な」thay bằng「〜で」(Ví dụ: すてきな ➔ すてきで; 簡単な ➔ 簡単で). Khi bổ nghĩa trực tiếp cho danh từ thì giữ nguyên「〜な N」(すてきな人, 簡単なパソコン).\n  - Danh từ: thêm「〜で」(Ví dụ: 曇り ➔ 曇りで)\n• 例: Túi xách của anh Sato: màu đen và to ➔「あの黒くて、大きいかばんです」.\n• 1): Anh Miller là người nào? Mắt xanh và dáng người cao ➔ Sau chữ「…あの」điền:「目が青くて、背が高い人です」(người mắt xanh và cao ráo).\n• 2): Chị Lee là người như thế nào? Trẻ, thông minh và tuyệt vời ➔ Nối 3 tính từ:「若くて、頭がよくて、すてきな人です」(Người vừa trẻ trung, thông minh lại rất tuyệt vời). Chú ý: tính từ「いい」đổi thành「よくて」.\n• 3): Thời tiết đã như thế nào? (câu hỏi quá khứ「どうでしたか」) Trời nhiều mây và lạnh ➔ Danh từ「曇り」nối bằng「で」, tính từ「寒い」chuyển sang quá khứ là「寒かったです」➔「曇りで、寒かったです」(Trời nhiều mây và lạnh).\n• 4): Bạn muốn máy tính như thế nào? Nhỏ gọn và cách dùng đơn giản ➔「小さくて、使い方が簡単なパソコンです」(hoặc「使い方が簡単なパソコンが欲しいです」)."
      },
      {
        "id": "b16_q5",
        "type": "fill",
        "tag": "Nối câu cùng chiều (〜て／〜で) và tương phản (〜が)",
        "question": "5. 例1：仕事は（大変・おもしろい…大変ですが、おもしろいです）。\n   例2：地下鉄は（速い・安い…速くて、安いです）。\n\n1) この手帳は（便利・ちょっと重い…____）。\n2) ここは（有名なお寺・庭がきれい…____）。\n3) このホテルは（安い・サービスがよくない…____）。\n4) ここは（緑が多い・静か…____）。\n5) ワットさんは（イギリス人・英語の先生…____）。",
        "answers": [
          "便利ですが、ちょっと重いです / 便利ですがちょっと重いです / べんりですが、ちょっとおもいです / べんりですがちょっとおもいです / benri desu ga, chotto omoi desu",
          "有名なお寺で、庭がきれいです / 有名なお寺で庭がきれいです / ゆうめいなおてらで、にわがきれいです / ゆうめいなおてらでにわがきれいです / yuumei na otera de, niwa ga kirei desu",
          "安いですが、サービスがよくないです / 安いですがサービスがよくないです / やすいですが、さーびすがよくないです / やすいですがさーびすがよくないです / yasui desu ga, sa-bisu ga yokunai desu",
          "緑が多くて、静かです / 緑が多くて静かです / みどりがおおくて、しずかです / みどりがおおくてしずかです / midori ga ookute, shizuka desu / midori ga ooi kute",
          "イギリス人で、英語の先生です / イギリス人で英語の先生です / いぎりすじんで、えいごのせんせいです / いぎりすじんでえいごのせんせいです / igirisujin de, eigo no sensei desu"
        ],
        "explanation": "• Phân biệt nối câu cùng chiều (thuận ý / bổ sung) và nối câu tương phản (ngược nghĩa / đối lập):\n  - Tương phản (1 tích cực, 1 tiêu cực): dùng trợ từ「〜が」(nhưng) để nối hai vế độc lập có です.\n  - Cùng chiều (cùng khen hoặc cùng chê): dùng thể nối「〜て／〜で」(vừa... vừa... / và):\n    + Tính từ đuôi い: bỏ「い」➔「〜くて」\n    + Tính từ đuôi な và Danh từ: ➔「〜で」\n• 例1: Công việc vất vả (tiêu cực) nhưng thú vị (tích cực) ➔ Tương phản:「大変ですが、おもしろいです」.\n• 例2: Tàu điện ngầm nhanh (tích cực) và rẻ (tích cực) ➔ Cùng chiều:「速くて、安いです」.\n• 1): Sổ tay này tiện lợi (tích cực) nhưng hơi nặng (tiêu cực) ➔ Tương phản:「便利ですが、ちょっと重いです」.\n• 2): Nơi này là ngôi chùa nổi tiếng (danh từ) và có vườn đẹp (tích cực) ➔ Cùng chiều, danh từ nối bằng「で」:「有名なお寺で、庭がきれいです」.\n• 3): Khách sạn này rẻ (tích cực) nhưng dịch vụ không tốt (tiêu cực) ➔ Tương phản:「安いですが、サービスがよくないです」.\n• 4): Nơi này nhiều cây xanh (tích cực) và yên tĩnh (tích cực) ➔ Cùng chiều,「多い」đổi thành「多くて」:「緑が多くて、静かです」.\n• 5): Thầy Watt là người Anh (danh từ) và là giáo viên tiếng Anh (danh từ) ➔ Cùng chiều, danh từ nối bằng「で」:「イギリス人で、英語の先生です」."
      },
      {
        "id": "b16_q6",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "6. 1) 日本へ来てから、どのくらい日本語を勉強しましたか。＿＿＿＿＿＿＿＿＿＿\n\n2) あなたの部屋はどんな部屋ですか。＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "6か月勉強しました。 / 1年勉強しました。 / 3か月勉強しました。 / 6か月です。 / 1年です。 / 6kagetsu benkyou shimashita",
          "広くて、明るい部屋です。 / 狭いですが、きれいです。 / きれいで、静かな部屋です。 / hirokute akarui heya desu"
        ],
        "explanation": "• Dạng câu hỏi mở luyện đối thoại về bản thân (không tính điểm, tự đối chiếu với đáp án mẫu sau khi nộp bài):\n• 1):「日本へ来てから、どのくらい日本語を勉強しましたか」(Kể từ sau khi đến Nhật, bạn đã học tiếng Nhật được bao lâu rồi?) ➔ Trả lời thời lượng học kèm mẫu câu「[Khoảng thời gian] 勉強しました」(Ví dụ:「6か月勉強しました。」- Đã học 6 tháng,「1年勉強しました。」- Đã học 1 năm).\n• 2):「あなたの部屋はどんな部屋ですか」(Phòng của bạn là căn phòng như thế nào?) ➔ Dùng cấu trúc nối tính từ/danh từ đã học trong bài để miêu tả phòng của mình (Ví dụ:「広くて、明るい部屋です。」- Phòng rộng và sáng sủa;「狭いですが、きれいです。」- Phòng hẹp nhưng sạch sẽ/đẹp)."
      }
    ]
  },
  "bai_17": {
    "title": "Bài 17",
    "completed": false,
    "questions": [
      {
        "id": "b17_q1",
        "type": "fill",
        "tag": "Điền từ vào bảng chia thể ない",
        "table": {
          "title": "Bảng chuyển đổi Động từ (〜ます ⇔ 〜て ⇔ 〜ない)",
          "headers": ["〜ます (Thể lịch sự)", "〜て (Thể て)", "〜ない (Thể phủ định ngắn)"],
          "rows": [
            ["例：飲みます", "飲んで", "飲まない"],
            ["1) （____）", "行って", "2) （____）"],
            ["払います", "3) （____）", "4) （____）"],
            ["5) （____）", "覚えて", "6) （____）"],
            ["7) （____）", "8) （____）", "立たない"],
            ["9) （____）", "借りて", "10) （____）"],
            ["入ります", "11) （____）", "12) （____）"],
            ["13) （____）", "14) （____）", "出張しない"],
            ["15) （____）", "なくして", "16) （____）"],
            ["来ます", "17) （____）", "18) （____）"]
          ]
        },
        "question": "1. Hoàn thành bảng chuyển đổi 3 thể của động từ:",
        "answers": [
          "行きます / いきます / ikimasu",
          "行かない / いかない / ikanai",
          "払って / はらって / haratte",
          "払わない / はらわない / harawanai",
          "覚えます / おぼえます / oboemasu",
          "覚えない / おぼえない / oboenai",
          "立ちます / たちます / tachimasu",
          "立って / たって / tatte",
          "借ります / かります / karimasu",
          "借りない / かりない / karinai",
          "入って / はいって / haitte",
          "入らない / はいらない / hairanai",
          "出張します / しゅっちょうします / shucchou shimasu / shucchoushimasu",
          "出張して / しゅっちょうして / shucchou shite / shucchoushite",
          "なくします / nakushimasu",
          "なくさない / nakusanai",
          "来て / きて / kite",
          "来ない / こない / konai"
        ],
        "explanation": "• Ôn tập quy tắc chia động từ sang thể ない (thể phủ định ngắn) trọng tâm Bài 17:\n  - Nhóm 1: Chuyển hàng「い」trước ます sang hàng「あ」rồi thêm「ない」(chú ý: âm い chuyển thành わ: 払います ➔ 払わない).\n  - Nhóm 2: Bỏ「ます」thêm「ない」(覚えます ➔ 覚えない; 借ります ➔ 借りない).\n  - Nhóm 3: Bất quy tắc (します ➔ しない; 出張します ➔ 出張しない; 来ます ➔ こない).\n• 1):「行きます」(nhóm 1) ➔「行かない」.\n• 2):「払います」(nhóm 1) ➔「払って」(thể て) /「払わない」(thể ない).\n• 3):「覚えます」(nhóm 2) ➔「覚えない」.\n• 4):「立ちます」(nhóm 1) ➔「立って」(thể て) /「立たない」(thể ない).\n• 5):「借ります」(nhóm 2 đặc biệt) ➔「借りて」(thể て) /「借りない」(thể ない).\n• 6):「入ります」(nhóm 1) ➔「入って」(thể て) /「入らない」(thể ない).\n• 7):「出張します」(nhóm 3) ➔「出張して」(thể て) /「出張しない」(thể ない).\n• 8):「なくします」(nhóm 1) ➔「なくさない」.\n• 9):「来ます」(nhóm 3) ➔「来て」(thể て: きて) /「来ない」(thể ない: đọc là こない)."
      },
      {
        "id": "b17_q2",
        "type": "fill",
        "tag": "Điền trợ từ vào ngoặc",
        "question": "2. 例：駅の前でタクシー（ を ）降りました。\n\n1) 毎晩おふろ（____）入ります。\n2) 来週中国（____）出張します。\n3) 1日（____）3回薬（____）飲みます。\n4) ちょっとのど（____）痛いです。\n5) 松本さんのうち（____）お土産（____）持って行きましょう。",
        "answers": [
          "に / ni",
          "へ / に / e / he / ni",
          "に / ni",
          "を / o / wo",
          "が / は / ga / wa",
          "へ / に / e / he / ni",
          "を / o / wo"
        ],
        "explanation": "• Ôn tập cách sử dụng trợ từ trong các ngữ cảnh của Bài 17:\n• 例: Rời khỏi/xuống xe taxi dùng trợ từ「を」:「タクシーを 降りました」.\n• 1): Bước vào bồn tắm dùng trợ từ「に」chỉ điểm đến của hành động vào:「おふろに 入ります」(tắm bồn).\n• 2): Đi công tác tới Trung Quốc (chỉ phương hướng/đích đến):「中国へ (hoặc に) 出張します」.\n• 3): Vị trí 1: Biểu thị tần suất「[Khoảng thời gian] に [Số lần]」➔「1日に 3回」(1 ngày 3 lần). Vị trí 2: Tân ngữ của hành động uống thuốc「薬を 飲みます」.\n• 4): Biểu thị đau ở bộ phận cơ thể「[Bộ phận] が 痛いです」➔「のどが 痛いです」(đau họng).\n• 5): Vị trí 1: Đích đến của việc mang quà tới nhà anh Matsumoto「松本さんのうちへ (hoặc に)」. Vị trí 2: Tân ngữ của việc mang quà「お土産を 持って行きましょう」."
      },
      {
        "id": "b17_q3",
        "type": "binary_choice",
        "tag": "Chọn 1 trong 2 từ",
        "question": "3. 例：あさって〔まで／<u>までに</u>〕レポートを出さなければなりません。\n\n1) きのうの晩9時〔まで／までに〕残業しました。\n2) 次の会議〔まで／までに〕この資料を読まなければなりません。\n3) この本、来週の火曜日〔まで／までに〕借りてもいいですか。\n4) 今月の30日〔まで／までに〕お金を払ってください。",
        "answers": [
          "まで / made",
          "までに / madeni",
          "まで / made",
          "までに / madeni"
        ],
        "explanation": "• Phân biệt cách dùng giữa trợ từ「まで」và「までに」:\n  -「〜まで」(cho đến / đến tận): Biểu thị hành động hoặc trạng thái diễn ra liên tục, kéo dài cho đến một thời điểm (động từ thường là 残業します, 働きます, 待ちます, 借ります...).\n  -「〜までに」(trước / muộn nhất là): Biểu thị một hành động có tính thời điểm phải được hoàn thành trước hoặc chậm nhất tại một thời điểm hạn chót (động từ thường là 出します, 払います, 終わります, 読みます...).\n• 例: Nộp báo cáo trước ngày kia ➔ Hạn chót hoàn thành hành động: chọn「までに」.\n• 1): Tối qua làm thêm giờ liên tục kéo dài đến tận 9 giờ: chọn「まで」.\n• 2): Phải đọc xong tài liệu này trước cuộc họp tiếp theo ➔ Hạn chót hoàn thành: chọn「までに」.\n• 3): Mượn sách liên tục giữ sách đến tận thứ Ba tuần sau: chọn「まで」.\n• 4): Hãy thanh toán tiền muộn nhất vào ngày 30 tháng này ➔ Hạn chót nộp tiền: chọn「までに」."
      },
      {
        "id": "b17_q4",
        "type": "fill",
        "tag": "Chia thể てください và ないでください",
        "question": "4. 例1：あしたまた（来ます…来てください）。\n   例2：ここは禁煙ですから、たばこを（吸います…吸わないでください）。\n\n1) すみませんが、ちょっと（手伝います…____）。\n2) 暗証番号は大切ですから、（忘れます…____）。\n3) 危ないですから、うしろから（押します…____）。\n4) 時間がありませんから、（急ぎます…____）。\n5) エアコンをつけましたから、窓を（開けます…____）。\n6) 漢字がわかりませんから、ひらがなで（書きます…____）。",
        "answers": [
          "手伝ってください / てつだってください / tetsudatte kudasai",
          "忘れないでください / わすれないでください / wasurenai de kudasai / wasurenaide kudasai",
          "押さないでください / おさないでください / osanai de kudasai / osanaide kudasai",
          "急いでください / いそいでください / isoide kudasai",
          "開けないでください / あけないでください / akenai de kudasai / akenaide kudasai",
          "書いてください / かいてください / kaite kudasai"
        ],
        "explanation": "• Phân biệt hai mẫu câu yêu cầu / nhờ vả và khuyên can:\n  - Yêu cầu làm V:「V-て + ください」(Xin hãy làm V).\n  - Yêu cầu KHÔNG làm V (khuyên can / cấm lịch sự):「V-ない + でください」(Xin đừng làm V).\n• 例1: Ngày mai hãy lại đến nhé:「来てください」.\n• 例2: Vì ở đây cấm hút thuốc, xin đừng hút thuốc:「吸わないでください」.\n• 1): Nhờ giúp một tay:「すみませんが、ちょっと 手伝ってください」(Xin lỗi, hãy giúp tôi một chút).\n• 2): Vì mã số pin quan trọng:「暗証番号は大切ですから、忘れないでください」(Xin đừng quên mã số pin).\n• 3): Vì nguy hiểm:「危ないですから、うしろから 押さないでください」(Vì nguy hiểm, xin đừng xô đẩy từ phía sau).\n• 4): Vì không có thời gian:「時間がありませんから、急いでください」(Vì không có thời gian, xin hãy khẩn trương/nhanh lên).\n• 5): Vì đã bật máy lạnh:「エアコンをつけましたから、窓を 開けないでください」(Vì đã bật máy lạnh, xin đừng mở cửa sổ).\n• 6): Vì không hiểu chữ Hán:「漢字がわかりませんから、ひらがなで 書いてください」(Vì không hiểu chữ Hán, xin hãy viết bằng chữ Hiragana)."
      },
      {
        "id": "b17_q5",
        "type": "fill",
        "tag": "Chia thể なければなりません và なくてもいいです",
        "question": "5. 例1：試験がありますから、（勉強します…勉強しなければなりません）。\n   例2：時間がありますから、（急ぎます…急がなくてもいいです）。\n\n1) 試験は簡単ですから、（心配します…____）。\n2) 子どもが病気ですから、早く（帰ります…____）。\n3) 今晩はレストランで食べますから、食事を（作ります…____）。\n4) 両親が来ますから、空港へ迎えに（行きます…____）。\n5) 1か月旅行に行きますから、大きいかばんを（買います…____）。\n6) 忙しい仕事が終わりましたから、きょうは（残業します…____）。",
        "answers": [
          "心配しなくてもいいです / しんぱいしなくてもいいです / shinpai shinakute mo ii desu",
          "帰らなければなりません / かえらなければなりません / kaeranakereba narimasen",
          "作らなくてもいいです / つくらなくてもいいです / tsukuranakute mo ii desu",
          "行かなければなりません / いかなければなりません / ikanakereba narimasen",
          "買わなければなりません / かわなければなりません / kawanakereba narimasen",
          "残業しなくてもいいです / ざんぎょうしなくてもいいです / zangyou shinakute mo ii desu"
        ],
        "explanation": "• Phân biệt hai mẫu câu biểu thị nghĩa vụ và không bắt buộc:\n  -「V-なければなりません」(Phải làm V): Biểu thị một hành động có tính bắt buộc, nghĩa vụ hoặc cần thiết phải làm (đổi sang thể ない ➔ bỏ「い」➔ thêm「〜なければなりません」).\n  -「V-なくてもいいです」(Không phải / Không cần làm V): Biểu thị hành động không có tính bắt buộc, không làm cũng không sao (đổi sang thể ない ➔ bỏ「い」➔ thêm「〜なくてもいいです」).\n• 例1: Vì có kỳ thi ➔ Phải học bài:「勉強しなければなりません」.\n• 例2: Vì có nhiều thời gian ➔ Không cần phải vội:「急がなくてもいいです」.\n• 1): Vì kỳ thi đơn giản/dễ ➔ Không cần phải lo lắng:「心配しなくてもいいです」.\n• 2): Vì con bị ốm ➔ Phải về nhà sớm:「早く 帰らなければなりません」.\n• 3): Vì tối nay đi ăn nhà hàng ➔ Không cần nấu cơm:「食事を 作らなくてもいいです」.\n• 4): Vì bố mẹ đến chơi ➔ Phải đi đón ở sân bay:「空港へ迎えに 行かなければなりません」.\n• 5): Vì đi du lịch tận 1 tháng ➔ Phải mua một chiếc vali to:「大きいかばんを 買わなければなりません」.\n• 6): Vì công việc bận rộn đã xong ➔ Hôm nay không cần phải làm thêm giờ:「きょうは 残業しなくてもいいです」."
      },
      {
        "id": "b17_q6",
        "type": "fill",
        "tag": "Đưa tân ngữ lên làm chủ đề câu (〜は)",
        "question": "6. 例：あした<u>この仕事</u>をします。 ➔ （この仕事はあしたします。）\n\n1) ここで<u>靴</u>を脱いでください。 ➔ （____）\n2) <u>ビールとジュース</u>を冷蔵庫に入れてください。 ➔ （____）\n3) 2、3日<u>スポーツ</u>をしないでください。 ➔ （____）\n4) あさってまでに<u>資料</u>を送らなければなりません。 ➔ （____）\n5) どうやって<u>漢字</u>を覚えますか。 ➔ （____）",
        "answers": [
          "靴はここで脱いでください。 / 靴はここで脱いでください / くつはここでぬいでください。 / くつはここでぬいでください / 靴は、ここで脱いでください。 / 靴は、ここで脱いでください / kutsu wa koko de nuide kudasai",
          "ビールとジュースは冷蔵庫に入れてください。 / ビールとジュースは冷蔵庫に入れてください / ビールとジュースは、冷蔵庫に入れてください。 / ビールとジュースは、冷蔵庫に入れてください / bi-ru to ju-su wa reizouko ni irete kudasai",
          "スポーツは2、3日しないでください。 / スポーツは2、3日しないでください / スポーツは2, 3日しないでください。 / スポーツは2, 3日しないでください / スポーツは２、３日しないでください。 / スポーツは２、３日しないでください / スポーツは、2、3日しないでください。 / スポーツは、2、3日しないでください / supo-tsu wa 2 3 nichi shinai de kudasai",
          "資料はあさってまでに送らなければなりません。 / 資料はあさってまでに送らなければなりません / しりょうはあさってまでにおくらなければなりません。 / しりょうはあさってまでにおくらなければなりません / 資料は、あさってまでに送らなければなりません。 / 資料は、あさってまでに送らなければなりません / shiryou wa asatte made ni okuranakereba narimasen",
          "漢字はどうやって覚えますか。 / 漢字はどうやって覚えますか / かんじはどうやっておぼえますか。 / かんじはどうやっておぼえますか / 漢字はどうやって覚えますか？ / 漢字はどうやって覚えますか / 漢字は、どうやって覚えますか。 / 漢字は、どうやって覚えますか / kanji wa dou yatte oboemasu ka"
        ],
        "explanation": "• Mẫu câu nhấn mạnh chủ đề (Topic Marker): Đưa tân ngữ trực tiếp (đang đi với trợ từ を) lên đầu câu để biến thành chủ đề của câu, thay trợ từ「を」bằng trợ từ「は」:\n• 例:「あした この仕事 をします」➔ Đưa tân ngữ「この仕事」lên đầu câu:「この仕事は あした します」(Công việc này thì ngày mai tôi sẽ làm).\n• 1): Đưa tân ngữ「靴」lên đầu câu ➔「靴は ここで 脱いでください」(Giày thì xin hãy cởi ở đây).\n• 2): Đưa cụm tân ngữ「ビールとジュース」lên đầu câu ➔「ビールとジュースは 冷蔵庫に入れてください」(Bia và nước ngọt thì xin hãy cho vào tủ lạnh).\n• 3): Đưa tân ngữ「スポーツ」lên đầu câu ➔「スポーツは 2、3日 しないでください」(Thể thao thì xin đừng chơi trong vòng 2-3 ngày).\n• 4): Đưa tân ngữ「資料」lên đầu câu ➔「資料は あさってまでに 送らなければなりません」(Tài liệu thì phải gửi muộn nhất vào ngày kia).\n• 5): Đưa tân ngữ「漢字」lên đầu câu ➔「漢字は どうやって 覚えますか」(Chữ Hán thì bạn nhớ bằng cách nào?)."
      },
      {
        "id": "b17_q7",
        "type": "fill",
        "tag": "Chia động từ theo mẫu hội thoại",
        "question": "7. 例：（送ります）\n　 A：この荷物はいつまでに（送ら）なければなりませんか。\n　 B：金曜日までに（送って）ください。\n\n1) （返します）\n　 A：この本はいつまでに（____）なければなりませんか。\n　 B：来週の木曜日までに（____）ください。\n\n2) （書きます）\n　 A：名前と住所を（____）ください。\n　 B：電話番号も（____）なければなりませんか。\n　 A：いいえ、電話番号は（____）なくてもいいです。\n\n3) （持って来ます）\n　 A：あしたも保険証を（____）なければなりませんか。\n　 B：いいえ、保険証は（____）なくてもいいです。\n　 このカードだけ（____）ください。",
        "answers": [
          "返さ / かえさ / kaesa / 返さない / かえさない",
          "返して / かえして / kaeshite",
          "書いて / かいて / kaite",
          "書か / かか / kaka / 書かない / かかない",
          "書か / かか / kaka / 書かない / かかない",
          "持って来 / もってこ / motte ko / motteko / 持って来ない / もってこない",
          "持って来 / もってこ / motte ko / motteko / 持って来ない / もってこない",
          "持って来て / もってきて / motte kite / mottekite"
        ],
        "explanation": "• Ôn tập kết hợp biến đổi động từ vào các mẫu câu giao tiếp trọng tâm Bài 17:\n  -「V(thể ない bỏ ない) + なければなりませんか」(Có phải làm V không?)\n  -「V(thể ない bỏ ない) + なくてもいいです」(Không phải / Không cần làm V)\n  -「V-て + ください」(Xin hãy làm V)\n• 例: Động từ「送ります」(gửi) ➔ A:「送ら なければなりませんか」(phải gửi trước khi nào?); B:「送って ください」(hãy gửi trước thứ Sáu).\n• 1): Động từ「返します」(trả lại, nhóm 1):\n  - Blank 1: Trước「なければなりませんか」điền「返さ」(かえさ) ➔「いつまでに 返さなければなりませんか」(phải trả trước khi nào?).\n  - Blank 2: Trước「ください」điền「返して」(かえして) ➔「来週の木曜日までに 返してください」(xin hãy trả trước thứ Năm tuần sau).\n• 2): Động từ「書きます」(viết, nhóm 1):\n  - Blank 3: Trước「ください」điền「書いて」(かいて) ➔「名前と住所を 書いてください」(xin hãy viết tên và địa chỉ).\n  - Blank 4: Trước「なければなりませんか」điền「書か」(かか) ➔「電話番号も 書かなければなりませんか」(cả số điện thoại cũng phải viết à?).\n  - Blank 5: Trước「なくてもいいです」điền「書か」(かか) ➔「電話番号は 書かなくてもいいです」(số điện thoại thì không cần viết cũng được).\n• 3): Động từ「持って来ます」(mang đến, nhóm 3 bất quy tắc):\n  - Blank 6: Trước「なければなりませんか」điền「持って来」(đọc là もってこ) ➔「あしたも保険証を 持って来なければなりませんか」(ngày mai cũng phải mang thẻ bảo hiểm đến à?).\n  - Blank 7: Trước「なくてもいいです」điền「持って来」(đọc là もってこ) ➔「保険証は 持って来なくてもいいです」(thẻ bảo hiểm thì không cần mang theo cũng được).\n  - Blank 8: Trước「ください」điền「持って来て」(もってきて) ➔「このカードだけ 持って来てください」(chỉ cần mang theo thẻ này thôi)."
      },
      {
        "id": "b17_q8",
        "type": "open_ended",
        "tag": "Trả lời câu hỏi mở",
        "question": "8. 1) 日曜日も早く起きなければなりませんか。＿＿＿＿＿＿＿＿＿＿\n\n2) 毎日宿題をしなければなりませんか。＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "いいえ、早く起きなくてもいいです。 / いいえ、起きなくてもいいです。 / はい、早く起きなければなりません。 / はい、起きなければなりません。 / iie, hayaku okinakute mo ii desu",
          "はい、しなければなりません。 / いいえ、しなくてもいいです。 / はい、毎日しなければなりません。 / いいえ、毎日しなくてもいいです。 / hai, shinakereba narimasen / iie, shinakute mo ii desu"
        ],
        "explanation": "• Dạng câu hỏi mở luyện đối thoại về bản thân (không tính điểm, tự đối chiếu với đáp án mẫu sau khi nộp bài):\n• 1):「日曜日も早く起きなければなりませんか」(Chủ nhật bạn cũng phải thức dậy sớm à?) ➔ Nếu không phải dậy sớm, dùng mẫu「〜なくてもいいです」:「いいえ、早く起きなくてもいいです。」(Không, không cần phải dậy sớm); nếu phải dậy sớm, dùng mẫu「〜なければなりません」:「はい、早く起きなければなりません。」.\n• 2):「毎日宿題をしなければなりませんか」(Ngày nào bạn cũng phải làm bài tập về nhà à?) ➔ Nếu có:「はい、しなければなりません。」(hoặc「はい、毎日しなければなりません。」); nếu không:「いいえ、しなくてもいいです。」."
      }
    ]
  },
  "bai_18": {
    "title": "Bài Luyện Tập 2",
    "completed": false,
    "questions": [
      {
        "id": "b18_q1",
        "type": "fill",
        "tag": "Lượng từ và đơn vị đếm (〜枚、〜人、〜台、〜つ、〜回)",
        "question": "1. 例：会議室／テーブル／7／あります … 会議室にテーブルが 7つ あります。\n\n1) はがき／10／80円の切手／2／ください … ＿＿＿＿＿＿＿＿＿＿\n2) 教室／男の人／3／います … ＿＿＿＿＿＿＿＿＿＿\n3) 学校の前／自転車／6／あります … ＿＿＿＿＿＿＿＿＿＿\n4) みかん／5／食べました … ＿＿＿＿＿＿＿＿＿＿\n5) 1週間／2／病院／行かなければなりません … ＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "はがきを10枚と80円の切手を2枚ください。 / はがきを 10枚と 80円の切手を 2枚 ください。 / はがきを 10枚と 80円の切手を 2枚 ください / はがきを10枚と80円の切手を2枚ください / はがきを10枚、80円の切手を2枚ください。 / はがきを 10枚、80円の切手を 2枚 ください。 / はがきを10枚、80円の切手を2枚ください / はがきを 10枚、80円の切手を 2枚 ください / はがきを 10まいと 80えんのきってを 2まい ください。 / hagaki o 10mai to 80en no kitte o 2mai kudasai",
          "教室に男の人が3人います。 / 教室に 男の人が 3人 います。 / 教室に 男の人が 3人 います / 教室に男の人が3人います / きょうしつにおとこのひとが3にんいます。 / きょうしつにおとこのひとが 3にん います。 / きょうしつにおとこのひとが 3にん います / kyoushitsu ni otoko no hito ga 3nin imasu",
          "学校の前に自転車が6台あります。 / 学校の前に 自転車が 6台 あります。 / 学校の前に 自転車が 6台 あります / 学校の前に自転車が6台あります / がっこうのまえにじてんしゃが6だいあります。 / がっこうのまえにじてんしゃが 6だい あります。 / がっこうのまえにじてんしゃが 6だい あります / gakkou no mae ni jitensha ga 6dai arimasu",
          "みかんを5つ食べました。 / みかんを 5つ 食べました。 / みかんを 5つ 食べました / みかんを5つ食べました / みかんを5つたべました。 / みかんを 5つ たべました。 / みかんを 5つ たべました / みかんをいつつたべました。 / みかんを いつつ 食べました。 / みかんを5個食べました。 / みかんを 5個 食べました。 / mikan o itsutsu tabemashita",
          "1週間に2回病院へ行かなければなりません。 / 1週間に 2回 病院へ行かなければなりません。 / 1週間に2回病院に行かなければなりません。 / 1週間に 2回 病院に行かなければなりません。 / 1週間に 2回 病院へ行かなければなりません / 1週間に 2回 病院に行かなければなりません / 1しゅうかんに2かいびょういんへいかなければなりません。 / 1しゅうかんに 2かい びょういんへいかなければなりません。 / 1しゅうかんに2かいびょういんにいかなければなりません。 / 1しゅうかんに 2かい びょういんにいかなければなりません。 / １週間に２回病院へ行かなければなりません。 / １週間に２回病院に行かなければなりません。 / 1shuukan ni 2kai byouin e ikanakereba narimasen"
        ],
        "explanation": "• Cấu trúc sử dụng lượng từ và số từ trong tiếng Nhật:\n  - Vị trí lượng từ thường đứng ngay trước động từ hoặc sau trợ từ「が」,「を」.\n  - Đơn vị đếm tương ứng:\n    + Vật mỏng phẳng (bưu thiếp, tem...):「〜枚」(まい).\n    + Người:「〜人」(にん) - (chú ý: 1人 ひとり, 2人 ふたり, 3人 さんにん...).\n    + Máy móc, xe cộ:「〜台」(だい).\n    + Đồ vật đếm chung:「〜つ」(1つ ひとつ, 2つ ふたつ, 3つ みっつ, 4つ よっつ, 5つ いつつ, 6つ むっつ, 7つ ななつ...).\n    + Tần suất thời gian:「[Khoảng thời gian] に [Số lần] 回」(かい).\n• 例: 会議室 / テーブル / 7 / あります ➔「会議室に テーブルが 7つ あります」(Trong phòng họp có 7 cái bàn).\n• 1): はがき (10枚) + 80円の切手 (2枚) + ください ➔「はがきを 10枚と 80円の切手を 2枚 ください」(Cho tôi 10 bưu thiếp và 2 con tem 80 yên).\n• 2): 教室 (ở đâu に) + 男の人 (3人) + います ➔「教室に 男の人が 3人 います」(Trong phòng học có 3 người đàn ông).\n• 3): 学校の前 (ở đâu に) + 自転車 (6台) + あります ➔「学校の前に 自転車が 6台 あります」(Ở trước trường học có 6 chiếc xe đạp).\n• 4): みかん (5つ) + 食べました ➔「みかんを 5つ 食べました」(Tôi đã ăn 5 quả quýt).\n• 5): 1週間 (1週間に) + 2 (2回) + 病院 (病院へ / に) + 行かなければなりません ➔「1週間に 2回 病院へ行かなければなりません」(Một tuần tôi phải đi bệnh viện 2 lần)."
      },
      {
        "id": "b18_q2",
        "type": "fill",
        "tag": "Khoảng thời gian (〜分、〜時間、〜週間、〜か月、〜年)",
        "question": "2. 例：8:00〜12:00（4時間）\n\n1) 9:10〜9:50（____）\n2) 10:00〜11:30（____）\n3) 月曜日〜日曜日（____）\n4) 1月1日〜1月31日（____）\n5) 1月〜12月（____）",
        "answers": [
          "40分 / 40ふん / ４０分 / よんじゅっぷん / よんじっぷん / 40 pun / 40fun",
          "1時間半 / 1時間30分 / 1じかんはん / 1じかん30ぷん / １時間半 / １時間３０分 / ichijikanhan / 1 jikan han",
          "1週間 / 1しゅうかん / １週間 / 7日間 / 7日 / 7にちかん / なのかかん / isshuukan / 1 shuukan",
          "1か月 / 1か月間 / 1ヶ月 / 1ヵ月 / 1カ月 / 1箇月 / いっかげつ / １か月 / １ヶ月 / 31日間 / 31日 / 31にちかん / ikkagetsu / 1 kagetsu",
          "1年 / 1年間 / 1ねん / 1ねんかん / １年 / １年間 / 12か月 / 12ヶ月 / ichinen / 1 nen"
        ],
        "explanation": "• Ôn tập cách biểu thị khoảng thời gian:\n  - Phút:「〜分」(ふん / ぷん). Chú ý: 40分 (よんじゅっぷん / よんじっぷん).\n  - Giờ:「〜時間」(じかん). 1 tiếng rưỡi:「1時間半」(いちじかんはん) hoặc「1時間30分」(いちじかんさんじゅっぷん).\n  - Tuần:「〜週間」(しゅうかん). 1 tuần:「1週間」(いっしゅうかん) (từ Thứ Hai đến Chủ Nhật).\n  - Tháng:「〜か月 / 〜か月間」(いっかげつ). 1 tháng:「1か月」(いっかげつ) (từ ngày 1 đến ngày 31).\n  - Năm:「〜年 / 〜年間」(ねん / ねんかん). 1 năm:「1年」(いちねん) (từ tháng 1 đến tháng 12).\n• 例: 8:00〜12:00 ➔ 4 tiếng:「4時間」(4じかん).\n• 1): 9:10〜9:50 ➔ Cách nhau 40 phút:「40分」(40ふん / よんじゅっぷん).\n• 2): 10:00〜11:30 ➔ Cách nhau 1 tiếng 30 phút (1 tiếng rưỡi):「1時間半」(1じかんはん) hoặc「1時間30分」(1じかん30ぷん).\n• 3): 月曜日〜日曜日 ➔ Từ thứ Hai đến Chủ Nhật là 1 tuần:「1週間」(1しゅうかん / いっしゅうかん).\n• 4): 1月1日〜1月31日 ➔ Từ 1/1 đến 31/1 là 1 tháng:「1か月」(1かげつ / いっかげつ) hoặc「1ヶ月」.\n• 5): 1月〜12月 ➔ Từ tháng 1 đến tháng 12 là 1 năm:「1年」(1ねん / いちねん) hoặc「1年間」."
      },
      {
        "id": "b18_q3",
        "type": "fill",
        "tag": "Điền trợ từ tổng hợp (の、が、と、に、は、より、で、へ、から、も、を)",
        "question": "3. 例：わたしはきのう11時（に）寝ました。\n\n1) この漢字（____）読み方（____）わかりますか。\n2) 金曜日の晩は友達（____）約束（____）あります。\n3) エレベーターの前（____）女の人（____）いますね。\n   あの人（____）だれですか。\n4) イーさんはわたし（____）ずっと料理（____）上手です。\n5) 午前（____）午後（____）どちら（____）暇ですか。\n   …午前（____）ほう（____）暇です。\n6) 果物（____）みかん（____）いちばん好きです。\n7) 友達のうち（____）遊び（____）行きました。\n8) おなか（____）痛いです（____）、何（____）食べたくないです。\n9) 8時にうち（____）出て、バス（____）大阪駅まで行って、大阪駅（____）JR（____）乗り換えます。\n10) この紙（____）あなたの住所（____）書いてください。\n11) あの神社（____）緑（____）多くて、静かです。\n12) 新しい世界地図（____）欲しいです。",
        "answers": [
          "の / no",
          "が / ga",
          "と / to",
          "が / ga",
          "に / ni",
          "が / ga",
          "は / wa / ha",
          "より / yori",
          "が / ga",
          "と / to",
          "と / to",
          "が / ga",
          "の / no",
          "が / ga",
          "で / の中で / のなかで / de",
          "が / ga",
          "へ / に / he / ni",
          "に / ni",
          "が / ga",
          "から / kara",
          "も / mo",
          "を / o / wo",
          "で / de",
          "で / de",
          "に / ni",
          "に / ni",
          "を / o / wo",
          "は / wa / ha",
          "が / ga",
          "が / ga"
        ],
        "explanation": "• Ôn tập tổng hợp toàn bộ các trợ từ trọng tâm đã học:\n• 例:「11時 に 寝ました」➔ Điểm mốc thời gian xác định có số cụ thể đi với trợ từ「に」.\n• 1):\n  - Blank 1:「この漢字 の 読み方」➔ Bổ nghĩa sở thuộc, cách đọc của chữ Hán này dùng「の」.\n  - Blank 2:「読み方 が わかりますか」➔ Đối tượng của động từ năng lực / nhận thức「わかります」đi với trợ từ「が」.\n• 2):\n  - Blank 3:「友達 と 約束があります」➔ Đối tác cùng thực hiện cuộc hẹn, có hẹn với bạn bè dùng「と」.\n  - Blank 4:「約束 が あります」➔ Biểu thị sự tồn tại / có cái gì đó đi với「あります」dùng trợ từ「が」.\n• 3):\n  - Blank 5:「エレベーターの前 に」➔ Nơi chốn có sự tồn tại của người / động vật (います) đi với trợ từ「に」.\n  - Blank 6:「女の人 が いますね」➔ Chủ thể tồn tại đi với「います」dùng trợ từ「が」.\n  - Blank 7:「あの人 は だれですか」➔ Đưa đối tượng lên làm chủ đề để hỏi danh tính dùng trợ từ「は」.\n• 4):\n  - Blank 8:「わたし より ずっと」➔ Cấu trúc so sánh hơn「A は B より...」(A hơn B...), đi sau đối tượng so sánh dùng「より」.\n  - Blank 9:「料理 が 上手です」➔ Tính từ chỉ sở trường / năng khiếu「上手です」đi với trợ từ「が」.\n• 5):\n  - Blank 10 & 11:「午前 と 午後 と」➔ Liệt kê hai đối tượng trong câu hỏi so sánh lựa chọn「A と B と どちらが...」dùng trợ từ「と」.\n  - Blank 12:「どちら が 暇ですか」➔ Từ để hỏi đứng làm chủ ngữ trong câu so sánh lựa chọn đi với trợ từ「が」.\n  - Blank 13:「午前 の ほう」➔ Cụm「Danh từ + の + ほう」(phía...), bổ nghĩa cho danh từ「ほう」dùng「の」.\n  - Blank 14:「午前のほう が 暇です」➔ Chủ ngữ của câu trả lời so sánh hơn đi với trợ từ「が」.\n• 6):\n  - Blank 15:「果物 で」(hoặc「果物の中で」)➔ Phạm vi của câu so sánh cao nhất「[Phạm vi] で / の中で ... が いちばん」dùng「で」.\n  - Blank 16:「みかん が いちばん好きです」➔ Đối tượng được yêu thích nhất đi với「いちばん好きです」dùng trợ từ「が」.\n• 7):\n  - Blank 17:「友達のうち へ」(hoặc「に」)➔ Phương hướng / đích đến của chuyển động đi với「行きました」dùng trợ từ「へ」hoặc「に」.\n  - Blank 18:「遊び に 行きました」➔ Mục đích của chuyển động「V(thể ます bỏ ます) + に + 行きます」(đi để làm gì) dùng trợ từ「に」.\n• 8):\n  - Blank 19:「おなか が 痛いです」➔ Triệu chứng cơ thể bị đau dùng trợ từ「が」.\n  - Blank 20:「痛いです から」➔ Liên từ chỉ lý do / nguyên nhân (vì đau bụng nên...) dùng trợ từ「から」.\n  - Blank 21:「何 も 食べたくないです」➔ Phủ định hoàn toàn「Từ để hỏi + も + Thể phủ định」(không muốn ăn cái gì cả) dùng trợ từ「も」.\n• 9):\n  - Blank 22:「うち を 出て」➔ Rời khỏi một địa điểm xuất phát đi với「出ます」dùng trợ từ「を」.\n  - Blank 23:「バス で」➔ Phương tiện giao thông dùng trợ từ「で」.\n  - Blank 24:「大阪駅 で」➔ Địa điểm diễn ra hành động đổi tàu dùng trợ từ「で」.\n  - Blank 25:「JR に 乗り換えます」➔ Phương tiện / tuyến xe mới chuyển sang dùng trợ từ「に」.\n• 10):\n  - Blank 26:「この紙 に」➔ Nơi tiếp nhận thông tin (viết lên đâu, ghi vào đâu) đi với「書きます」dùng trợ từ「に」.\n  - Blank 27:「住所 を 書いてください」➔ Tân ngữ trực tiếp bị tác động đi với「書きます」dùng trợ từ「を」.\n• 11):\n  - Blank 28:「あの神社 は」➔ Đưa ngôi đền lên làm chủ đề chính của câu dùng trợ từ「は」.\n  - Blank 29:「緑 が 多くて」➔ Biểu thị thuộc tính, đặc điểm của chủ thể「[Chủ đề] は [Bộ phận/Đặc điểm] が A です」dùng trợ từ「が」.\n• 12):「世界地図 が 欲しいです」➔ Cấu trúc biểu thị mong muốn sở hữu một vật「N が 欲しいです」dùng trợ từ「が」."
      },
      {
        "id": "b18_q4",
        "type": "fill",
        "tag": "Điền từ vào bảng chia 4 thể (Khẳng định/Phủ định × Hiện tại/Quá khứ)",
        "table": {
          "title": "Bảng chuyển đổi 4 thể (Khẳng định / Phủ định × Hiện tại / Quá khứ)",
          "headers": [
            "Khẳng định (Hiện tại/Tương lai)",
            "Phủ định (Hiện tại/Tương lai)",
            "Khẳng định (Quá khứ)",
            "Phủ định (Quá khứ)"
          ],
          "rows": [
            [
              "例：呼びます",
              "呼びません",
              "呼びました",
              "呼びませんでした"
            ],
            [
              "1) （____）",
              "返しません",
              "2) （____）",
              "3) （____）"
            ],
            [
              "病気です",
              "4) （____）",
              "5) （____）",
              "6) （____）"
            ],
            [
              "7) （____）",
              "8) （____）",
              "9) （____）",
              "簡単じゃありませんでした"
            ],
            [
              "10) （____）",
              "11) （____）",
              "出かけました",
              "12) （____）"
            ],
            [
              "いいです",
              "13) （____）",
              "14) （____）",
              "15) （____）"
            ],
            [
              "欲しいです",
              "16) （____）",
              "欲しかったです",
              "17) （____）"
            ]
          ]
        },
        "question": "4. Hoàn thành bảng chuyển đổi 4 thể của động từ, danh từ và tính từ:",
        "answers": [
          "返します / かえします / kaeshimasu",
          "返しました / かえしました / kaeshimashita",
          "返しませんでした / かえしませんでした / kaeshimasen deshita / kaeshimasendeshita",
          "病気じゃありません / びょうきじゃありません / 病気ではありません / びょうきではありません / byouki ja arimasen / byouki dewa arimasen",
          "病気でした / びょうきでした / byouki deshita",
          "病気じゃありませんでした / びょうきじゃありませんでした / 病気ではありませんでした / びょうきではありませんでした / byouki ja arimasen deshita / byouki ja arimasendeshita",
          "簡単です / かんたんです / kantan desu",
          "簡単じゃありません / かんたんじゃありません / 簡単ではありません / かんたんではありません / kantan ja arimasen / kantan dewa arimasen",
          "簡単でした / かんたんでした / kantan deshita",
          "出かけます / でかけます / dekakemasu",
          "出かけません / でかけません / dekakemasen",
          "出かけませんでした / でかけませんでした / dekakemasen deshita / dekakemasendeshita",
          "よくないです / よくありません / よくない / yokunai desu / yoku arimasen",
          "よかったです / よかった / yokatta desu / yokatta",
          "よくなかったです / よくありませんでした / よくなかった / yokunakatta desu / yoku arimasen deshita",
          "欲しくないです / ほしくないです / 欲しくありません / ほしくありません / hoshikunai desu / hoshiku arimasen",
          "欲しくなかったです / ほしくなかったです / 欲しくありませんでした / ほしくありませんでした / hoshikunakatta desu / hoshiku arimasen deshita"
        ],
        "explanation": "• Ôn tập bảng biến đổi 4 thể (Khẳng định/Phủ định × Hiện tại/Quá khứ) của Động từ, Danh từ, Tính từ đuôi な và Tính từ đuôi い:\n• Động từ:\n  - Khẳng định hiện tại: 〜ます\n  - Phủ định hiện tại: 〜ません\n  - Khẳng định quá khứ: 〜ました\n  - Phủ định quá khứ: 〜ませんでした\n• Danh từ / Tính từ đuôi な:\n  - Khẳng định hiện tại: 〜です\n  - Phủ định hiện tại: 〜じゃありません (hoặc 〜ではありません)\n  - Khẳng định quá khứ: 〜でした\n  - Phủ định quá khứ: 〜じゃありませんでした (hoặc 〜ではありませんでした)\n• Tính từ đuôi い:\n  - Khẳng định hiện tại: 〜いです\n  - Phủ định hiện tại: bỏ い + 〜くないです (hoặc 〜くありません)\n  - Khẳng định quá khứ: bỏ い + 〜かったです\n  - Phủ định quá khứ: bỏ い + 〜くなかったです (hoặc 〜くありませんでした)\n  - Chú ý đặc biệt với「いいです」(tốt): biến đổi theo gốc「よい」➔「よくないです」➔「よかったです」➔「よくなかったです」.\n• 1), 2), 3): Động từ「返します」(trả lại, nhóm 1):\n  - Blank 1: Khẳng định hiện tại ➔「返します」(かえします).\n  - Blank 2: Khẳng định quá khứ ➔「返しました」(かえしました).\n  - Blank 3: Phủ định quá khứ ➔「返しませんでした」(かえしませんでした).\n• 4), 5), 6): Danh từ「病気です」(ốm, bị bệnh):\n  - Blank 4: Phủ định hiện tại ➔「病気じゃありません」(びょうきじゃありません / 病気ではありません).\n  - Blank 5: Khẳng định quá khứ ➔「病気でした」(びょうきでした).\n  - Blank 6: Phủ định quá khứ ➔「病気じゃありませんでした」(びょうきじゃありませんでした / 病気ではありませんでした).\n• 7), 8), 9): Tính từ đuôi な「簡単」(đơn giản):\n  - Blank 7: Khẳng định hiện tại ➔「簡単です」(かんたんです).\n  - Blank 8: Phủ định hiện tại ➔「簡単じゃありません」(かんたんじゃありません / 簡単ではありません).\n  - Blank 9: Khẳng định quá khứ ➔「簡単でした」(かんたんでした).\n• 10), 11), 12): Động từ「出かけます」(đi ra ngoài, nhóm 2):\n  - Blank 10: Khẳng định hiện tại ➔「出かけます」(でかけます).\n  - Blank 11: Phủ định hiện tại ➔「出かけません」(でかけません).\n  - Blank 12: Phủ định quá khứ ➔「出かけませんでした」(でかけませんでした).\n• 13), 14), 15): Tính từ đuôi い đặc biệt「いいです」(tốt, biến đổi theo gốc「よい」):\n  - Blank 13: Phủ định hiện tại ➔「よくないです」(hoặc「よくありません」).\n  - Blank 14: Khẳng định quá khứ ➔「よかったです」.\n  - Blank 15: Phủ định quá khứ ➔「よくなかったです」(hoặc「よくありませんでした」).\n• 16), 17): Tính từ đuôi い「欲しいです」(muốn có):\n  - Blank 16: Phủ định hiện tại ➔「欲しくないです」(ほしくないです / 欲しくありません).\n  - Blank 17: Phủ định quá khứ ➔「欲しくなかったです」(ほしくなかったです / 欲しくありませんでした)."
      },
      {
        "id": "b18_q5",
        "type": "fill",
        "tag": "Chia động từ theo mẫu câu ngữ pháp (〜て、〜ない、〜たい、〜ます bỏ ます)",
        "question": "5. 例：ここでたばこを（吸います…吸って）もいいですか。\n\n1) 仕事がたくさんありますから、（残業します…____）なければなりません。\n2) ここで靴を（脱ぎます…____）ください。\n3) 今お金を（払います…____）なくてもいいです。\n4) パスポートを（なくします…____）ないでください。\n5) ここに自転車を（置きます…____）はいけません。\n6) 電話を（かけます…____）から、友達のうちへ行きます。\n7) きのうは雨が（降ります…____）いました。\n8) 来年大学に（入ります…____）たいです。\n9) 図書館へ本を（返します…____）に行きます。\n10) 寒いですから、どこも（行きます…____）たくないです。\n11) うちへ（帰ります…____）もいいですか。\n12) シャワーを（浴びます…____）、11時ごろ寝ました。\n13) わたしはパソコンを（持ちます…____）いません。\n14) 松本さんの電話番号を（知ります…____）いますか。",
        "answers": [
          "残業し / ざんぎょうし / 残業しない / ざんぎょうしない / zangyoushi / zangyou shi",
          "脱いで / ぬいで / nuide",
          "払わ / はらわ / 払わない / はらわない / harawa",
          "なくさ / なくさない / nakusa",
          "置いて / おいて / oite",
          "かけて / kakete",
          "降って / ふって / futte",
          "入り / はいり / hairi",
          "返し / かえし / kaeshi",
          "行き / いき / iki",
          "帰って / かえって / kaette",
          "浴びて / あびて / abite",
          "持って / もって / motte",
          "知って / しって / shitte"
        ],
        "explanation": "• Ôn tập toàn diện các dạng chia động từ theo mẫu câu ngữ pháp:\n• 例:「V-て + もいいですか」(xin phép làm gì) ➔「吸います」biến đổi thể て thành「吸って」.\n• 1):「V(bỏ ない) + なければなりません」(phải làm gì) ➔「残業します」(nhóm 3) thể ない là「残業しない」, bỏ ない còn「残業し」(ざんぎょうし).\n• 2):「V-て + ください」(xin hãy làm gì) ➔「脱ぎます」(nhóm 1, đuôi ぎ) biến đổi thể て thành「脱いで」(ぬいで).\n• 3):「V(bỏ ない) + なくてもいいです」(không cần phải làm gì) ➔「払います」(nhóm 1) thể ない là「払わない」, bỏ ない còn「払わ」(はらわ).\n• 4):「V(bỏ ない) + ないでください」(xin đừng làm gì) ➔「なくします」(nhóm 1) thể ない là「なくさない」, bỏ ない còn「なくさ」.\n• 5):「V-て + はいけません」(cấm làm gì) ➔「置きます」(nhóm 1, đuôi き) biến đổi thể て thành「置いて」(おいて).\n• 6):「V1-て + から、V2」(sau khi làm V1 thì làm V2) ➔「かけます」(nhóm 2) biến đổi thể て thành「かけて」.\n• 7):「V-て + いました」(đang diễn ra trong quá khứ) ➔「降ります」(nhóm 1, đuôi り) biến đổi thể て thành「降って」(ふって).\n• 8):「V(thể ます bỏ ます) + たいです」(muốn làm gì) ➔「入ります」bỏ ます còn「入り」(はいり).\n• 9):「V(thể ます bỏ ます) + に行きます」(đi để làm gì - mục đích) ➔「返します」bỏ ます còn「返し」(かえし).\n• 10):「V(thể ます bỏ ます) + たくないです」(không muốn làm gì) ➔「行きます」bỏ ます còn「行き」(いき).\n• 11):「V-て + もいいですか」(xin phép làm gì) ➔「帰ります」(nhóm 1, đuôi り) biến đổi thể て thành「帰って」(かえって).\n• 12):「V1-て、V2」(nối tiếp hành động) ➔「浴びます」(nhóm 2 đặc biệt) biến đổi thể て thành「浴びて」(あびて).\n• 13):「V-て + いません」(không sở hữu / chưa làm) ➔「持ちます」(nhóm 1, đuôi ち) biến đổi thể て thành「持って」(もって).\n• 14):「V-て + いますか」(biết thông tin - trạng thái) ➔「知ります」(nhóm 1, đuôi り) biến đổi thể て thành「知って」(しって)."
      },
      {
        "id": "b18_q6",
        "type": "fill",
        "tag": "Điền từ để hỏi / nghi vấn từ thích hợp (どうして、いくつ、どうやって、どの、どちら)",
        "question": "6. 例：あなたの国から日本まで [ どのくらい ] かかりますか。\n   …飛行機で4時間半かかります。\n\n1) [ ＿＿＿＿＿＿＿＿＿＿ ] きのう学校を休みましたか。\n   …頭が痛かったですから。\n2) 教室に机が [ ＿＿＿＿＿＿＿＿＿＿ ] ありますか。\n   …20あります。\n3) [ ＿＿＿＿＿＿＿＿＿＿ ] 美術館まで行きましたか。\n   …地下鉄で東京駅まで行って、東京駅からバスで行きました。\n4) マリアさんは [ ＿＿＿＿＿＿＿＿＿＿ ] 人ですか。\n   …あの人です。\n5) 肉と魚と [ ＿＿＿＿＿＿＿＿＿＿ ] がいいですか。\n   …魚のほうがいいです。",
        "answers": [
          "どうして / なぜ / doushite / naze",
          "いくつ / 何台 / なんだい / 何個 / なんこ / ikutsu",
          "どうやって / どう / dou yatte / douyatte",
          "どの / dono",
          "どちら / どっち / dochira / docchi"
        ],
        "explanation": "• Ôn tập cách sử dụng các từ để hỏi (nghi vấn từ) theo ngữ cảnh đối thoại:\n• 例: Câu trả lời là khoảng thời gian「飛行機で4時間半かかります」(Đi máy bay mất 4 tiếng rưỡi) ➔ Từ để hỏi về thời gian/chi phí là「どのくらい」(hoặc「どのぐらい」).\n• 1): Câu trả lời nêu lý do có「〜ですから」(Vì bị đau đầu) ➔ Từ để hỏi lý do \"Tại sao\" là「どうして」(hoặc「なぜ」).\n• 2): Câu trả lời là số lượng「20あります」(Có 20 cái) ➔ Từ để hỏi số lượng đồ vật đếm chung bằng 〜つ là「いくつ」(hoặc hỏi theo đơn vị bàn ghế「何台」).\n• 3): Câu trả lời chỉ dẫn lộ trình và phương tiện di chuyển「地下鉄で東京駅まで行って、東京駅からバスで行きました」(Đi tàu điện ngầm đến ga Tokyo, rồi từ ga Tokyo đi bằng xe buýt) ➔ Từ để hỏi cách thức, phương tiện đi lại \"Bằng cách nào / Như thế nào\" là「どうやって」(hoặc「どう」).\n• 4): Câu trả lời là「あの人です」(Là người đằng kia) để chỉ định rõ một người cụ thể trong nhóm người ➔ Từ bổ nghĩa cho danh từ「人」để hỏi \"người nào\" là「どの」(どの人ですか). (Lưu ý:「どんな人」dùng để hỏi về tính cách, đặc điểm ngoại hình).\n• 5): Câu trả lời so sánh lựa chọn giữa 2 đối tượng「魚のほうがいいです」(Cá thì được/tốt hơn) ➔ Từ để hỏi trong câu so sánh lựa chọn giữa 2 đối tượng「A と B と」là「どちら」(hoặc cách nói thân mật「どっち」)."
      },
      {
        "id": "b18_q7",
        "type": "fill",
        "tag": "Nối tính từ và danh từ (〜くて、〜で)",
        "question": "7. 例：ミラーさんは（若い…若くて）、（元気…元気な）人です。\n\n1) サントスさんは髪が（黒い…____）、（すてき…____）人です。\n2) このパソコンは使い方が（簡単…____）、とても（便利…____）です。\n3) 弟は（24歳…____）、（銀行員…____）です。\n4) きのうは天気が（いい…____）、（暖かい…____）です。\n5) このレストランは料理が（おいしい…____）、サービスが（いい…____）です。",
        "answers": [
          "黒くて / くろくて / kurokute",
          "すてきな / sutekina / suteki na",
          "簡単で / かんたんで / kantande / kantan de",
          "便利 / べんり / benri",
          "24歳で / 24さいで / にじゅうよんさいで / ２４歳で / 24sai de",
          "銀行員 / ぎんこういん / ginkouin",
          "よくて / yokute",
          "暖かかった / あたたかかった / 暖かかったです / あたたかかったです / atatakakatta",
          "おいしくて / oishikute",
          "いい / ii"
        ],
        "explanation": "• Ôn tập quy tắc nối tính từ và danh từ trong câu:\n• Tính từ đuôi い: Bỏ「い」thêm「〜くて」để nối câu.\n• Tính từ đuôi な / Danh từ: Thêm「〜で」để nối câu.\n• Đứng trước danh từ: Tính từ đuôi な giữ nguyên「な」, tính từ đuôi い giữ nguyên「い」.\n• Đứng ở cuối câu: Tính từ đuôi な / Danh từ đi với「〜です」; tính từ đuôi い giữ nguyên「〜いです」(quá khứ là「〜かったです」).\n• 例:「若い」nối câu thành「若くて」;「元気」đứng trước danh từ「人」thành「元気な」(Anh Miller trẻ và là người khỏe mạnh).\n• 1):「黒い」(đuôi い) nối câu thành「黒くて」;「すてき」(đuôi な) đứng trước danh từ「人」thành「すてきな」(Anh Santos tóc đen và là người tuyệt vời).\n• 2):「簡単」(đuôi な) nối câu thành「簡単で」;「便利」(đuôi な) đứng trước です ở cuối câu giữ nguyên「便利」(Máy tính này cách dùng đơn giản và rất tiện lợi).\n• 3):「24歳」(danh từ) nối câu thành「24歳で」;「銀行員」(danh từ) đứng trước です ở cuối câu giữ nguyên「銀行員」(Em trai tôi 24 tuổi và là nhân viên ngân hàng).\n• 4): Câu diễn tả thời tiết quá khứ「きのう」(hôm qua):「いい」đứng trước nối câu thành「よくて」;「暖かい」ở cuối câu chia quá khứ ghép với です thành「暖かかった」(Hôm qua thời tiết đẹp và ấm áp).\n• 5):「おいしい」(đuôi い) nối câu thành「おいしくて」;「いい」(đuôi い) đứng trước です ở cuối câu giữ nguyên「いい」(Nhà hàng này món ăn ngon và dịch vụ tốt)."
      },
      {
        "id": "b18_q8",
        "type": "binary_choice",
        "tag": "Chọn từ đúng trong câu",
        "question": "8. 例：郵便局は銀行の〔間／中／<u>前</u>〕にあります。\n\n1) 電気の〔チケット／スイッチ／エアコン〕はどこですか。\n2) ちょっと〔病気／熱／痛い〕があります。\n3) 全部で1,800円ですから、200円の〔金額／お釣り／お土産〕です。ありがとうございました。\n4) キャッシュカードをここに入れて、〔電話番号／保険証番号／暗証番号〕を押してください。",
        "answers": [
          "スイッチ / suicchi",
          "熱 / ねつ / netsu",
          "お釣り / おつり / otsuri",
          "暗証番号 / あんしょうばんごう / anshoubangou"
        ],
        "explanation": "• Ôn tập lựa chọn từ vựng chính xác theo ngữ cảnh câu:\n• 例: Bưu điện ở trước ngân hàng「銀行の 前 にあります」➔ Chọn「前」.\n• 1): Công tắc đèn「電気の スイッチ」➔ Chọn「スイッチ」(công tắc).「チケット」(vé),「エアコン」(máy điều hòa).\n• 2): Cụm từ chỉ triệu chứng bị sốt「熱があります」➔ Chọn danh từ「熱」(sốt).「病気」dùng với「病気です」(bị ốm);「痛い」là tính từ (ví dụ:「頭が痛いです」).\n• 3): Trong giao dịch thanh toán mua hàng, số tiền gửi lại cho khách là tiền thừa / tiền thối lại ➔ Chọn「お釣り」(tiền thừa).「金額」(số tiền),「お土産」(quà lưu niệm).\n• 4): Khi sử dụng thẻ ATM (キャッシュカード), thao tác bấm mã PIN / mã số bí mật dùng cụm「暗証番号を押してください」➔ Chọn「暗証番号」(mã PIN/mã bảo mật).「電話番号」(số điện thoại),「保険証番号」(số thẻ bảo hiểm)."
      },
      {
        "id": "b18_q9",
        "type": "fill",
        "tag": "Điền liên từ nối câu thích hợp (それから、ですから、じゃ、そして、まず)",
        "question": "9. ［ それから　ですから　じゃ　そして　まず　これから ］\n\n例：もうレポートを書きましたか。…いいえ、まだです。（ これから ）書きます。\n\n1) 父は今いません。…（____）また電話します。\n2) 1年日本語を勉強します。（____）大学に入ります。\n3) わたしの部屋は明るいです。（____）きれいです。\n4) （____）これを押して、次にここにカードを入れてください。\n5) 日本の会社で働きたいです。（____）今日本語を勉強しています。",
        "choices": [
          {
            "key": "それから",
            "text": "それから"
          },
          {
            "key": "ですから",
            "text": "ですから"
          },
          {
            "key": "じゃ",
            "text": "じゃ"
          },
          {
            "key": "そして",
            "text": "そして"
          },
          {
            "key": "まず",
            "text": "まず"
          },
          {
            "key": "これから",
            "text": "これから",
            "isExample": true
          }
        ],
        "answers": [
          "じゃ / ja / じゃ、",
          "それから / sorekara",
          "そして / soshite",
          "まず / mazu",
          "ですから / desukara"
        ],
        "explanation": "• Ôn tập cách sử dụng các liên từ nối câu trong tiếng Nhật:\n• 例: Chưa viết báo cáo, sắp sửa viết「これから書きます」(Từ bây giờ tôi sẽ viết).\n• 1): Khi nghe tin bố không có nhà, chuyển hướng hội thoại「じゃ、また電話します」(Vậy thì lát nữa tôi sẽ gọi lại).\n• 2): Nối tiếp hai hành động theo trình tự thời gian「1年日本語を勉強します。それから大学に入ります」(Học tiếng Nhật 1 năm, sau đó sẽ vào đại học) ➔ Dùng「それから」(sau đó).\n• 3): Bổ sung tính chất cùng chiều tích cực「明るいです。そしてきれいです」(Phòng sáng sủa và đẹp nữa) ➔ Dùng「そして」(và/thêm vào đó).\n• 4): Hướng dẫn trình tự các bước thao tác, đi kèm với「次に」(tiếp theo) là「まず」(trước tiên/đầu tiên) ➔「まずこれを押して、次にここにカードを入れてください」(Trước tiên hãy nhấn nút này, tiếp theo cho thẻ vào đây).\n• 5): Mệnh đề trước là lý do, mệnh đề sau là kết quả hành động ➔ Dùng「ですから」(vì vậy/do đó):「日本の会社で働きたいです。ですから今日本語を勉強しています」(Tôi muốn làm việc cho công ty Nhật Bản, vì vậy bây giờ tôi đang học tiếng Nhật)."
      },
      {
        "id": "b18_q10",
        "type": "matching",
        "tag": "Chọn câu đối thoại giao tiếp phù hợp",
        "question": "10. 例：寒いですね。エアコンをつけましょうか。…（ h ）。\n\n1) すみません。ちょっと手伝ってください。…（____）。\n2) 日本の生活はどうですか。…（____）。大変ですが、楽しいです。\n3) 土曜日の夜ジャズのコンサート、いっしょにいかがですか。\n   …土曜日の夜は（____）……。すみません。また今度お願いします。\n4) 電池はあの棚のいちばん下にありますよ。…（____）。どうも。\n5) 日本語が上手ですね。…いいえ、（____）。",
        "choices": [
          {
            "key": "a",
            "text": "まだまだです"
          },
          {
            "key": "b",
            "text": "そうですね"
          },
          {
            "key": "c",
            "text": "そうですか"
          },
          {
            "key": "d",
            "text": "そうしましょう"
          },
          {
            "key": "e",
            "text": "はい、どうぞ"
          },
          {
            "key": "f",
            "text": "いいですよ"
          },
          {
            "key": "g",
            "text": "ちょっと"
          },
          {
            "key": "h",
            "text": "お願いします",
            "isExample": true
          }
        ],
        "answers": [
          "f / いいですよ",
          "b / そうですね",
          "g / ちょっと",
          "c / そうですか",
          "a / まだまだです"
        ],
        "explanation": "• Ôn tập các mẫu câu giao tiếp và văn hóa ứng xử hàng ngày:\n• 例: Khi đối phương đề nghị giúp đỡ bật điều hòa「エアコンをつけましょうか」➔ Đồng ý nhờ vả: h「お願いします」(Nhờ bạn nhé).\n• 1): Khi được nhờ giúp đỡ「手伝ってください」(Hãy giúp tôi một chút) ➔ Vui vẻ nhận lời: f「いいですよ」(Được chứ / Sẵn lòng thôi).\n• 2): Khi được hỏi cảm nhận về cuộc sống「日本の生活はどうですか」➔ Dùng từ đệm suy nghĩ trước khi trả lời: b「そうですね」(À/Để xem nào... Vất vả nhưng vui).\n• 3): Khi từ chối khéo một lời mời rủ rê đi xem hòa nhạc mà không làm mất lòng đối phương ➔ Dùng cụm từ bỏ lửng kinh điển: g「ちょっと」(Tối thứ Bảy thì hơi kẹt... Xin lỗi bạn, hẹn lần sau).\n• 4): Khi tiếp nhận một thông tin mới do người khác chỉ dẫn (vị trí để pin) ➔ Dùng: c「そうですか」(Thế à / Vậy à. Cảm ơn nhé).\n• 5): Khi được khen ngợi「日本語が上手ですね」(Tiếng Nhật của bạn giỏi quá) ➔ Nét văn hóa khiêm tốn của người Nhật: a「まだまだです」(Dạ không, tôi vẫn còn kém lắm)."
      }
    ]
  }
};

window.JA_GRAMMAR_DATA = JA_GRAMMAR_DATA;
