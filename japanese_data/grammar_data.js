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
  }
};

window.JA_GRAMMAR_DATA = JA_GRAMMAR_DATA;
