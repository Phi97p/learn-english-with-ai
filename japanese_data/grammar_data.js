// ========================================================
// JAPANESE_DATA/GRAMMAR_DATA.JS - Dữ liệu câu hỏi ngữ pháp Tiếng Nhật
// Dùng cho Tab "Luyện tập ngữ pháp tổng hợp" (Trắc nghiệm & Điền từ)
// Nguồn gốc: datasss/jp/ngu_phap/
// ========================================================

const JA_GRAMMAR_DATA = {
  "bai_0": {
    "title": "Bài 0: Ngữ pháp tổng hợp",
    "questions": [
      {
        "id": "b0_q1",
        "question": "あめ（      ）ふったら、うち（　　）います。",
        "options": {
          "A": "が ・ で",
          "B": "が ・ に",
          "C": "を ・ に",
          "D": "を ・ で"
        },
        "answer": "B",
        "explanation": "Hiện tượng tự nhiên dùng trợ từ「が」(あめがふります → あめがふったら: nếu trời mưa). Động từ tồn tại「います」(ở lại, có mặt) đi với nơi chốn dùng trợ từ「に」(うちにいます: ở nhà)."
      },
      {
        "id": "b0_q2",
        "question": "いけん（　　）なかったら、じゅぎょう（　　）これ（　　）おわります。",
        "options": {
          "A": "を ・ が ・ で",
          "B": "が ・ X ・ で",
          "C": "が ・ が ・ に",
          "D": "が ・ は ・ で"
        },
        "answer": "D",
        "explanation": "Chỗ trống 1 dùng trợ từ「が」đi với「ありません/なかったら」(いけんが なかったら: nếu không có ý kiến). Chỗ trống 2 dùng trợ từ「は」xác định chủ đề câu (じゅぎょうは: buổi học thì...). Chỗ trống 3 dùng trợ từ「で」chỉ phạm vi, giới hạn:「これで おわります」(kết thúc tại đây)."
      }
    ]
  },
  "bai_1": {
    "title": "Bài 1: Luyện tập Trợ từ, Từ để hỏi & Giao tiếp (Minna no Nihongo)",
    "questions": [
      {
        "id": "b1_q1",
        "type": "fill",
        "question": "A: それはどこ（____）時計ですか。\nB: 日本（____）です。",
        "answer": "の ・ の",
        "acceptable_answers": ["の・の", "の ・ の", "の, の", "の の", "の"],
        "explanation": "Chỗ trống 1 dùng trợ từ「の」nối danh từ xuất xứ với danh từ đồ vật:「どこ の 時計」(đồng hồ của đâu). Chỗ trống 2 dùng trợ từ「の」thay thế cho danh từ「時計」ở trước:「日本 の です」(là của Nhật Bản)."
      },
      {
        "id": "b1_q2",
        "type": "fill",
        "question": "A: マリアさん（____）お国（____）どちらですか。\nB: ブラジルです。",
        "answer": "の ・ は",
        "acceptable_answers": ["の・は", "の ・ は", "の, は", "の は"],
        "explanation": "Chỗ trống 1 dùng trợ từ「の」sở hữu:「マリアさん の お国」(đất nước của Maria). Chỗ trống 2 dùng trợ từ「は」xác định chủ đề câu hỏi:「お国 は どちらですか」(Đất nước của bạn ở đâu vậy?)."
      },
      {
        "id": "b1_q3",
        "type": "fill",
        "question": "A: 松本さん（____）車（____）どこですか。\nB: あそこです。",
        "answer": "の ・ は",
        "acceptable_answers": ["の・は", "の ・ は", "の, は", "の は"],
        "explanation": "Chỗ trống 1 dùng trợ từ「の」sở hữu:「松本さん の 車」(xe của anh Matsumoto). Chỗ trống 2 dùng trợ từ「は」chỉ chủ đề câu hỏi:「車 は どこですか」(xe ô tô thì ở đâu?)."
      },
      {
        "id": "b1_q4",
        "type": "fill",
        "question": "A: すみません。そのワイン（____）見せてください。\nB: どうぞ。\nA: 这是どこ（____）ワインですか。\nB: イタリアのです。\nA: じゃ、これ（____）ください。",
        "answer": "を ・ の ・ を",
        "acceptable_answers": ["を・の・を", "を ・ の ・ を", "を, の, を", "を の を"],
        "explanation": "Vị trí 1 dùng trợ từ「を」chỉ đối tượng ngoại động từ「見せてください」(cho xem chai rượu đó). Vị trí 2 dùng trợ từ「の」chỉ xuất xứ「どこ の ワイン」(rượu của nước nào). Vị trí 3 dùng trợ từ「を」trong mẫu mua hàng「これ を ください」(lấy cho tôi chai này)."
      },
      {
        "id": "b1_q5",
        "type": "fill",
        "question": "カメラ売り場は（____）ですか。— 3階です。",
        "answer": "どこ",
        "acceptable_answers": ["どこ", "どちら", "なんがい", "何階"],
        "explanation": "Câu trả lời là địa điểm/vị trí cụ thể quầy hàng「3階です」(ở tầng 3), câu hỏi vị trí dùng nghi vấn từ「どこ」(hoặc lịch sự là「どちら」/ hỏi số tầng là「何階」)."
      },
      {
        "id": "b1_q6",
        "type": "fill",
        "question": "それは（____）のコーヒーですか。— ブラジルのコーヒーです。",
        "answer": "どこ",
        "acceptable_answers": ["どこ", "どちら"],
        "explanation": "Câu trả lời về nước xuất xứ sản xuất「ブラジルのコーヒーです」(cà phê của Brazil), câu hỏi xuất xứ dùng mẫu「どこ の N」(hoặc lịch sự:「どちら の N」)."
      },
      {
        "id": "b1_q7",
        "type": "fill",
        "question": "会社は（____）ですか。— パワー電気です。",
        "answer": "どこ",
        "acceptable_answers": ["どこ", "どちら"],
        "explanation": "Trong tiếng Nhật, khi hỏi tên công ty, trường học hoặc cơ quan trực thuộc, bắt buộc dùng nghi vấn từ「どこ」(hoặc lịch sự:「どちら」), tuyệt đối không dùng「なん」."
      },
      {
        "id": "b1_q8",
        "type": "fill",
        "question": "お国は（____）ですか。— インドネシアです。",
        "answer": "どちら",
        "acceptable_answers": ["どちら", "どこ"],
        "explanation": "Hỏi về đất nước một cách lịch sự「お国」(có tiền tố lịch sự お) đi kèm với nghi vấn từ lịch sự「どちら」(hoặc「どこ」): お国はどちらですか (Đất nước của bạn ở đâu vậy?)."
      },
      {
        "id": "b1_q9",
        "type": "fill",
        "question": "その時計は（____）ですか。— 18,800円です。",
        "answer": "いくら",
        "acceptable_answers": ["いくら"],
        "explanation": "Câu trả lời là giá tiền「18,800円です」(18.800 Yên), câu hỏi hỏi về giá cả trong tiếng Nhật dùng nghi vấn từ「いくら」(Bao nhiêu tiền)."
      },
      {
        "id": "b1_q10",
        "type": "fill",
        "question": "Sắp xếp các từ thành câu:\nかばん／この／か／は／です／いくら",
        "answer": "このかばんはいくらですか。",
        "acceptable_answers": ["このかばんはいくらですか", "このかばんはいくらですか。", "この かばん は いくら ですか", "この かばん は いくら ですか。"],
        "explanation": "Cụm từ chỉ định「この + Danh từ」đứng đầu:「このかばん」(cái cặp này), đi với trợ từ chủ đề「は」, từ để hỏi giá「いくら」và đuôi câu hỏi「ですか」: このかばんはいくらですか。(Cái cặp này bao nhiêu tiền?)."
      },
      {
        "id": "b1_q11",
        "type": "fill",
        "question": "Sắp xếp các từ thành câu:\n先生／日本語／か／は／の／です／どなた",
        "answer": "日本語の先生はどなたですか。",
        "acceptable_answers": ["日本語の先生はどなたですか", "日本語の先生はどなたですか。", "にほんごのせんせいはどなたですか", "にほんごのせんせいはどなたですか。"],
        "explanation": "Cụm danh từ bổ nghĩa「日本語 の 先生」(giáo viên tiếng Nhật) làm chủ đề đi với「は」. Nghi vấn từ chỉ người lịch sự là「どなた」(vị nào) và đuôi câu hỏi「ですか」: 日本語の先生はどなたですか。(Giáo viên tiếng Nhật là vị nào vậy?)."
      },
      {
        "id": "b1_q12",
        "type": "fill",
        "question": "Sắp xếp các từ thành câu:\n松本さん／か／は／です／どちら",
        "answer": "松本さんはどちらですか。",
        "acceptable_answers": ["松本さんはどちらですか", "松本さんはどちらですか。", "まつもとさんはどちらですか", "まつもとさんはどちらですか。"],
        "explanation": "Chủ đề là tên người「松本さん」đi với trợ từ「は」. Nghi vấn từ lịch sự chỉ nơi chốn/hướng「どちら」(ở phía nào/ở đâu) và đuôi câu hỏi: 松本さんはどちらですか。(Anh Matsumoto ở phía nào/đâu vậy?)."
      },
      {
        "id": "b1_q13",
        "type": "fill",
        "question": "Sắp xếp các từ thành câu:\nコーヒー／これ／の／は／か／です／どこ",
        "answer": "これはどこのコーヒーですか。",
        "acceptable_answers": ["これはどこのコーヒーですか", "これはどこのコーヒーですか。", "これは どこ の コーヒー ですか", "これは どこ の コーヒー ですか。"],
        "explanation": "Đại từ chỉ định「これ」(cái này) làm chủ đề câu「これは」. Mẫu câu hỏi xuất xứ đồ vật「どこ の Danh từ」(đồ của đâu/nước nào):「どこのコーヒー」và đuôi câu hỏi: これはどこのコーヒーですか。(Đây là cà phê của nước nào vậy?)."
      },
      {
        "id": "b1_q14",
        "question": "Hãy chọn câu trả lời phù hợp nhất:\nA: うちは どこですか。\nB: (____)",
        "options": {
          "A": "ベトナムです。",
          "B": "3階です。",
          "C": "1,000円です。",
          "D": "学生です。"
        },
        "answer": "A",
        "explanation": "Câu hỏi「うちは どこですか」(Nhà của bạn ở đâu vậy?) là câu hỏi về địa điểm/nơi chốn của ngôi nhà. Câu trả lời phù hợp là danh từ chỉ địa danh:「ベトナムです」(Ở Việt Nam) hoặc tên thành phố/tỉnh."
      },
      {
        "id": "b1_q15",
        "question": "Hãy chọn câu trả lời phù hợp nhất:\nA: あなたの 部屋は 1階ですか。\nB: (____)",
        "options": {
          "A": "はい、1階です。",
          "B": "いいえ、日本のです。",
          "C": "ミラーさんです。",
          "D": "あそこです。"
        },
        "answer": "A",
        "explanation": "Câu hỏi nghi vấn xác nhận「〜は 1階ですか」(Phòng của bạn ở tầng 1 phải không?). Câu trả lời khẳng định đúng cấu trúc là「はい、1階です」(Vâng, ở tầng 1) hoặc phủ định「いいえ、[2階]です」."
      },
      {
        "id": "b1_q16",
        "question": "Hãy chọn câu trả lời phù hợp nhất:\nA: あなたの 時計は 日本のですか。\nB: (____)",
        "options": {
          "A": "はい、日本のです。",
          "B": "はい、時計です。",
          "C": "いいえ、部屋です。",
          "D": "3階です。"
        },
        "answer": "A",
        "explanation": "Câu hỏi xuất xứ sản phẩm「あなたの 時計は 日本のですか」(Đồng hồ của bạn có phải là của Nhật Bản không?). Câu trả lời khẳng định đúng là「はい、日本のです」(Vâng, là của Nhật Bản)."
      },
      {
        "id": "b1_q17",
        "question": "Hãy chọn câu trả lời phù hợp nhất:\nA: あなたの 日本語の本は いくらですか。\nB: (____)",
        "options": {
          "A": "2,500円です。",
          "B": "日本のです。",
          "C": "どこです。",
          "D": "いいえ、違います。"
        },
        "answer": "A",
        "explanation": "Câu hỏi hỏi giá cả「いくらですか」(Bao nhiêu tiền?). Câu trả lời bắt buộc phải là số tiền kèm đơn vị tiền tệ「2,500円です」(2.500 Yên)."
      }
    ]
  }
};

window.JA_GRAMMAR_DATA = JA_GRAMMAR_DATA;
