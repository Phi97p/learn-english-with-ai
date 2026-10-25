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
      }
    ]
  }
};

window.JA_GRAMMAR_DATA = JA_GRAMMAR_DATA;
