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
    title: "Bài 2: Đồ vật, Sở hữu & Số đếm giá tiền",
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
        "question": "7. 例：1:05（いちじごふん）\n\n1) 7:15（____）\n2) 4:20（____）\n3) 9:30（____）\n4) 8:45（____）\n5) 11:40（____）\n6) 6:55（____）\n7) 12:00（____）\n8) 2:10（____）\n9) 3:01（____）\n10) 10:03（____）\n11) 4:04（____）\n12) 1:06（____）\n13) 9:08（____）\n14) 5:24（____）",
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
          "ごじにじゅうよんぷん"
        ],
        "explanation": "• 例 (Ví dụ): 1:05 gồm 1 giờ「いちじ」(ichiji) + 5 phút「ごふん」(gofun) ➔「いちじごふん」.\n• 1): 7:15 gồm 7 giờ「しちじ」(shichiji - chuẩn SGK Minna, hoặc ななじ) + 15 phút「じゅうごふん」(jūgofun) ➔「しちじじゅうごふん」(hoặc「ななじじゅうごふん」).\n• 2): 4:20 gồm 4 giờ là trường hợp đặc biệt phát âm「よじ」(yoji - chú ý không đọc là よんじ hay しじ) + 20 phút「にじゅっぷん」(nijuppun - hoặc にじっぷん nijippun) ➔「よじにじゅっぷん」(hoặc「よじにじっぷん」).\n• 3): 9:30 gồm 9 giờ là trường hợp đặc biệt phát âm「くじ」(kuji - không đọc là きゅうじ) + 30 phút「さんじゅっぷん」(sanjuppun) hoặc nói cách rưỡi「くじはん」(kujihan) ➔「くじさんじゅっぷん」(hoặc「くじさんじっぷん」,「くじはん」).\n• 4): 8:45 gồm 8 giờ「はちじ」(hachiji) + 45 phút gồm 40「よんじゅう」và 5 phút「ごふん」➔「はちじよんじゅうごふん」(hachiji yonjūgofun).\n• 5): 11:40 gồm 11 giờ「じゅういちじ」(jūichiji) + 40 phút「よんじゅっぷん」(yonjuppun - hoặc よんじっぷん yonjippun) ➔「じゅういちじよんじゅっぷん」(hoặc「じゅういちじよんじっぷん」).\n• 6): 6:55 gồm 6 giờ「ろくじ」(rokuji) + 55 phút gồm 50「ごじゅう」và 5 phút「ごふん」➔「ろくじごじゅうごふん」(rokuji gojūgofun).\n• 7): 12:00 là 12 giờ đúng ➔「じゅうにじ」(jūniji - hoặc nói rõ giờ đúng「じゅうにじちょうど」).\n• 8): 2:10 gồm 2 giờ「にじ」(niji) + 10 phút là âm ngắt biến âm「じゅっぷん」(juppun - hoặc じっぷん jippun) ➔「にじじゅっぷん」(hoặc「にじじっぷん」).\n• 9): 3:01 gồm 3 giờ「さんじ」+ 1 phút đặc biệt âm ngắt「いっぷん」(ippun) ➔「さんじいっぷん」.\n• 10): 10:03 gồm 10 giờ「じゅうじ」+ 3 phút đặc biệt bán đục「さんぷん」(sanpun) ➔「じゅうじさんぷん」.\n• 11): 4:04 gồm 4 giờ đặc biệt「よじ」(yoji) + 4 phút đặc biệt bán đục「よんぷん」(yonpun) ➔「よじよんぷん」.\n• 12): 1:06 gồm 1 giờ「いちじ」+ 6 phút đặc biệt âm ngắt「ろっぷん」(roppun) ➔「いちじろっぷん」.\n• 13): 9:08 gồm 9 giờ đặc biệt「くじ」(kuji) + 8 phút đặc biệt âm ngắt「はっぷん」(happun - hoặc「はちふん」) ➔「くじはっぷん」(hoặc「くじはちふん」).\n• 14): 5:24 gồm 5 giờ「ごじ」+ 24 phút「にじゅうよんぷん」(nijūyonpun) ➔「ごじにじゅうよんぷん」.\n* Bảng tổng kết giờ & phút đặc biệt:\n  - Giờ đặc biệt: 4 giờ (よじ), 7 giờ (しちじ), 9 giờ (くじ).\n  - Phút đặc biệt đi kèm「ぷん」(âm ngắt/bán đục): 1 phút (いっぷん), 3 phút (さんぷん), 4 phút (よんぷん), 6 phút (ろっぷん), 8 phút (はっぷん), 10 phút (じゅっぷん/じっぷん), 20 phút (にじゅっぷん), 30 phút (さんじゅっぷん/はん), 40 phút (よんじゅっぷん)."
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
    "title": "Bài 8 (Ôn tập 1-7)",
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
  }
};

window.JA_GRAMMAR_DATA = JA_GRAMMAR_DATA;

