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
  }
};

window.JA_GRAMMAR_DATA = JA_GRAMMAR_DATA;
