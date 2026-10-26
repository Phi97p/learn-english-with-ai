// ========================================================
// JAPANESE_DATA/GRAMMAR_DATA.JS - Dữ liệu câu hỏi ngữ pháp Tiếng Nhật
// Dùng cho Tab "Luyện tập ngữ pháp tổng hợp" (Trắc nghiệm & Điền từ)
// Nguồn gốc: datasss/jp/ngu_phap/
// ========================================================

const JA_GRAMMAR_DATA = {
  "bai_1": {
    "title": "Bài 1",
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
        question: "7. 例：グプタさんは <u>42</u> 歳です。（よんじゅうに）\n\n1) イーさんは <u>35</u> 歳です。（____）\n2) 太郎ちゃんは <u>8</u> 歳です。（____）\n3) ワンさんは <u>29</u> 歳です。（____）\n4) カリナさんは <u>24</u> 歳です。（____）",
        answers: [
          "さんじゅうご",
          "はち / はっ / はっさい",
          "にじゅうきゅう / にじゅうく",
          "にじゅうよん / にじゅうし"
        ],
        explanation: "• 例 (Ví dụ): Số 42 đọc là「よんじゅうに」(yonjūni).\n• 1): Số 35 đọc là「さんじゅうご」(sanjūgo).\n• 2): Số 8 đọc là「はち」(hachi), khi nói tuổi kết hợp âm ngắt thành「はっさい」(8 tuổi).\n• 3): Số 29 đọc là「にじゅうきゅう」(nijūkyū) hoặc「にじゅうく」(nijūku).\n• 4): Số 24 đọc là「にじゅうよん」(nijūyon) hoặc「にじゅうし」(nijūshi)."
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
        question: "7. 例：このネクタイは <u>6,400</u> 円です。（ろくせんよんひゃく）\n\n1) このかばんは <u>8,300</u> 円です。（____）\n2) このカメラは <u>23,800</u> 円です。（____）\n3) このコンピューターは <u>124,000</u> 円です。（____）\n4) この車は <u>4,700,000</u> 円です。（____）",
        answers: [
          "はっせんさんびゃく",
          "にまんさんぜんはっぴゃく",
          "じゅうにまんよんせん",
          "よんひゃくななじゅうまん / よんひゃくしちじゅうまん"
        ],
        explanation: "• 例 (Ví dụ): Số 6,400 đọc là「ろくせんよんひゃく」(rokusen yonhyaku).\n• 1): Số 8,300 gồm 8,000 có âm ngắt「はっせん」+ 300 biến âm「さんびゃく」➔「はっせんさんびゃく」(hassen sanbyaku).\n• 2): Số 23,800 gồm 20,000「にまん」+ 3,000 biến âm「さんぜん」+ 800 âm ngắt「はっぴゃく」➔「にまんさんぜんはっぴゃく」(niman sanzen happyaku).\n• 3): Số 124,000 gồm 12 vạn「じゅうにまん」+ 4,000「よんせん」➔「じゅうにまんよんせん」(jūniman yonsen).\n• 4): Số 4,700,000 là 470 vạn gồm 400「よんひゃく」+ 70「ななじゅう」(hoặc「しちじゅう」) +「まん」➔「よんひゃくななじゅうまん」(hoặc「よんひゃくしちじゅうまん」)."
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
    "questions": [
      {
        "id": "b3_q1",
        "type": "fill",
        "tag": "Điền Hiragana cho từ/số",
        "columns": 3,
        "question": "7. 例：1:05（いちじごふん）\n\n1) 7:15（____）\n2) 4:20（____）\n3) 9:30（____）\n4) 8:45（____）\n5) 11:40（____）\n6) 6:55（____）\n7) 12:00（____）\n8) 2:10（____）",
        "answers": [
          "しちじじゅうごふん / ななじじゅうごふん",
          "よじにじゅっぷん / よじにじっぷん",
          "くじさんじゅっぷん / くじさんじっぷん / くじはん",
          "はちじよんじゅうごふん",
          "じゅういちじよんじゅっぷん / じゅういちじよんじっぷん",
          "ろくじごじゅうごふん",
          "じゅうにじ / じゅうにじちょうど",
          "にじじゅっぷん / にじじっぷん"
        ],
        "explanation": "• 例 (Ví dụ): 1:05 gồm 1 giờ「いちじ」(ichiji) + 5 phút「ごふん」(gofun) ➔「いちじごふん」.\n• 1): 7:15 gồm 7 giờ「しちじ」(shichiji - chuẩn SGK Minna, hoặc ななじ) + 15 phút「じゅうごふん」(jūgofun) ➔「しちじじゅうごふん」(hoặc「ななじじゅうごふん」).\n• 2): 4:20 gồm 4 giờ là trường hợp đặc biệt phát âm「よじ」(yoji - chú ý không đọc là よんじ hay しじ) + 20 phút「にじゅっぷん」(nijuppun - hoặc にじっぷん nijippun) ➔「よじにじゅっぷん」(hoặc「よじにじっぷん」).\n• 3): 9:30 gồm 9 giờ là trường hợp đặc biệt phát âm「くじ」(kuji - không đọc là きゅうじ) + 30 phút「さんじゅっぷん」(sanjuppun) hoặc nói cách rưỡi「くじはん」(kujihan) ➔「くじさんじゅっぷん」(hoặc「くじさんじっぷん」,「くじはん」).\n• 4): 8:45 gồm 8 giờ「はちじ」(hachiji) + 45 phút gồm 40「よんじゅう」và 5 phút「ごふん」➔「はちじよんじゅうごふん」(hachiji yonjūgofun).\n• 5): 11:40 gồm 11 giờ「じゅういちじ」(jūichiji) + 40 phút「よんじゅっぷん」(yonjuppun - hoặc よんじっぷん yonjippun) ➔「じゅういちじよんじゅっぷん」(hoặc「じゅういちじよんじっぷん」).\n• 6): 6:55 gồm 6 giờ「ろくじ」(rokuji) + 55 phút gồm 50「ごじゅう」và 5 phút「ごふん」➔「ろくじごじゅうごふん」(rokuji gojūgofun).\n• 7): 12:00 là 12 giờ đúng ➔「じゅうにじ」(jūniji - hoặc nói rõ giờ đúng「じゅうにじちょうど」).\n• 8): 2:10 gồm 2 giờ「にじ」(niji) + 10 phút là âm ngắt biến âm「じゅっぷん」(juppun - hoặc じっぷん jippun) ➔「にじじゅっぷん」(hoặc「にじじっぷん」)."
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
        "question": "5. 例：大学は５時に終わりますか。…はい、<u>終わります。</u>\n\n1) おととい休みましたか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n2) 休みは月曜日ですか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n3) 日曜日働きますか。…いいえ、＿＿＿＿＿＿＿＿＿＿\n4) きのうの晩勉強しましたか。…はい、＿＿＿＿＿＿＿＿＿＿",
        "answers": [
          "休みませんでした。 / 休みませんでした / やすみませんでした。 / やすみませんでした",
          "月曜日じゃありません。 / 月曜日じゃありません / 月曜日ではありません。 / 月曜日ではありません / げつようびじゃありません。 / げつようびじゃありません / げつようびではありません。 / げつようびではありません",
          "働きません。 / 働きません / はたらきません。 / はたらきません",
          "勉強しました。 / 勉強しました / べんきょうしました。 / べんきょうしました"
        ],
        "explanation": "• 例 (Ví dụ): Câu hỏi thời hiện tại khẳng định với động từ「終わりますか」➔ Trả lời khẳng định thời hiện tại:「はい、終わります。」(Vâng, kết thúc lúc 5 giờ).\n• 1):「おととい」(hôm kia) là mốc thời gian trong quá khứ, câu hỏi「休みましたか」hỏi về sự việc đã xảy ra ➔ Trả lời phủ định quá khứ của động từ「V-ませんでした」:「いいえ、休みませんでした。」(Không, tôi đã không nghỉ).\n• 2):「月曜日ですか」kết thúc bằng danh từ「月曜日」+「です」➔ Trả lời phủ định danh từ dùng「じゃありません」(hoặc「ではありません」):「いいえ、月曜日じゃありません。」(Không, không phải là thứ Hai).\n• 3):「日曜日働きますか」hỏi về lịch trình / thói quen thời hiện tại ➔ Trả lời phủ định hiện tại của động từ「V-ません」:「いいえ、働きません。」(Không, tôi không làm việc).\n• 4):「きのうの晩」(tối qua) là mốc thời gian quá khứ, câu hỏi「勉強しましたか」➔ Trả lời khẳng định quá khứ của động từ「V-ました」:「はい、勉強しました。」(Vâng, tôi đã học).\n* Bảng tổng kết thì động từ tiếng Nhật:\n  - Hiện tại khẳng định: ～ます (V-masu)\n  - Hiện tại phủ định: ～ません (V-masen)\n  - Quá khứ khẳng định: ～ました (V-mashita)\n  - Quá khứ phủ định: ～ませんでした (V-masendeshita)"
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
    "questions": [
      {
        "id": "b4_q1",
        "type": "fill",
        "tag": "Điền cách đọc ngày tháng",
        "columns": 3,
        "question": "1. 例：3／24（さんがつにじゅうよっか）\n\n1) 5／10（____）\n2) 3／3（____）\n3) 1／4（____）\n4) 12／1（____）\n5) 9／5（____）\n6) 11／7（____）\n7) 7／8（____）\n8) 10／14（____）\n9) 6／2（____）\n10) 8／20（____）\n11) 2／6（____）\n12) 4／9（____）",
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
          "しがつここのか"
        ],
        "explanation": "• Quy tắc đọc tháng: Tháng 4 đọc là「しがつ」(không đọc よんがつ), tháng 7 đọc là「しちがつ」(hoặc なながつ), tháng 9 đọc là「くがつ」(không đọc きゅうがつ).\n• Quy tắc đọc ngày đặc biệt trong tháng: 1日 (ついたち), 2日 (ふつか), 3日 (みっか), 4日 (よっか), 5日 (いつか), 6日 (むいか), 7日 (なのか), 8日 (ようか), 9日 (ここのか), 10日 (とおか), 14日 (じゅうよっか), 20日 (はつか), 24日 (にじゅうよっか).\n• 1): 5/10 ➔ Tháng 5「ごがつ」+ Ngày 10「とおか」=「ごがつとおか」.\n• 2): 3/3 ➔ Tháng 3「さんがつ」+ Ngày 3「みっか」=「さんがつみっか」.\n• 3): 1/4 ➔ Tháng 1「いちがつ」+ Ngày 4「よっか」=「いちがつよっか」.\n• 4): 12/1 ➔ Tháng 12「じゅうにがつ」+ Ngày 1「ついたち」=「じゅうにがつついたち」.\n• 5): 9/5 ➔ Tháng 9「くがつ」+ Ngày 5「いつか」=「くがついつか」.\n• 6): 11/7 ➔ Tháng 11「じゅういちがつ」+ Ngày 7「なのか」=「じゅういちがつなのか」.\n• 7): 7/8 ➔ Tháng 7「しちがつ」+ Ngày 8「ようか」=「しちがつようか」.\n• 8): 10/14 ➔ Tháng 10「じゅうがつ」+ Ngày 14「じゅうよっか」=「じゅうがつじゅうよっか」.\n• 9): 6/2 ➔ Tháng 6「ろくがつ」+ Ngày 2「ふつか」=「ろくがつふつか」.\n• 10): 8/20 ➔ Tháng 8「はちがつ」+ Ngày 20「はつか」=「はちがつはつか」.\n• 11): 2/6 ➔ Tháng 2「にがつ」+ Ngày 6「むいか」=「にがつむいか」.\n• 12): 4/9 ➔ Tháng 4「しがつ」+ Ngày 9「ここのか」=「しがつここのか」."
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
  }
};

window.JA_GRAMMAR_DATA = JA_GRAMMAR_DATA;
