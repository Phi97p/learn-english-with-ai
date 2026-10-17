// ========================================================
// JAPANESE_DATA/GRAMMAR_DATA.JS - Dữ liệu câu hỏi ngữ pháp Tiếng Nhật
// Dùng cho Tab "Luyện tập ngữ pháp tổng hợp" (Trắc nghiệm A, B, C, D)
// Nguồn gốc: datasss/jp/ngu_phap/
// ========================================================

const JA_GRAMMAR_DATA = {
  "bai_1": {
    "title": "Bài 1: Trợ từ は, です, も, の (Ngữ pháp cơ bản)",
    "questions": [
      {
        "id": "b1_q1",
        "question": "わたし (____) マイク・ミラーです。",
        "options": {
          "A": "は",
          "B": "が",
          "C": "を",
          "D": "に"
        },
        "answer": "A",
        "explanation": "Trợ từ「は」(đọc là wa) dùng sau danh từ để biểu thị chủ đề câu: N1 は N2 です (N1 là N2)."
      },
      {
        "id": "b1_q2",
        "question": "サントスさんは ブラジル人です。マリアさん (____) ブラジル人です。",
        "options": {
          "A": "は",
          "B": "も",
          "C": "の",
          "D": "で"
        },
        "answer": "B",
        "explanation": "Trợ từ「も」mang nghĩa là 'cũng': N1 も N2 です (N1 cũng là N2)."
      },
      {
        "id": "b1_q3",
        "question": "あの方(____) どなたですか。",
        "options": {
          "A": "は",
          "B": "も",
          "C": "の",
          "D": "に"
        },
        "answer": "A",
        "explanation": "あの方はどなたですか là mẫu câu hỏi lịch sự: 'Vị kia là vị nào vậy?'."
      },
      {
        "id": "b1_q4",
        "question": "わたしは IMC (____) 社員です。",
        "options": {
          "A": "は",
          "B": "も",
          "C": "の",
          "D": "と"
        },
        "answer": "C",
        "explanation": "Trợ từ「の」nối hai danh từ N1 の N2 (N2 của N1 / N2 thuộc N1). Ở đây: IMC の 社員 (nhân viên công ty IMC)."
      },
      {
        "id": "b1_q5",
        "question": "ワンさんは 医者ですか。— いいえ、医者 (____)。",
        "options": {
          "A": "です",
          "B": "じゃ ありません",
          "C": "でした",
          "D": "あります"
        },
        "answer": "B",
        "explanation": "Phủ định của「です」là「じゃ ありません」(không phải là)."
      },
      {
        "id": "b1_q6",
        "question": "あの人は だれですか。— (____) は 木村さんです。",
        "options": {
          "A": "あの人",
          "B": "この人",
          "C": "その人",
          "D": "わたし"
        },
        "answer": "A",
        "explanation": "Hỏi 'あの人はだれですか' thì câu trả lời xác nhận danh xưng là 'あの人は...'."
      },
      {
        "id": "b1_q7",
        "question": "カリナさんは 学生ですか。— はい、(____)。",
        "options": {
          "A": "学生じゃ ありません",
          "B": "学生です",
          "C": "医者です",
          "D": "先生です"
        },
        "answer": "B",
        "explanation": "Câu trả lời khẳng định 'はい' đi kèm với '学生です'."
      },
      {
        "id": "b1_q8",
        "question": "テレサちゃんは (____) ですか。— 9さいです。",
        "options": {
          "A": "だれ",
          "B": "なんさい",
          "C": "どなた",
          "D": "どこ"
        },
        "answer": "B",
        "explanation": "Hỏi tuổi dùng「なんさいですか」(hoặc lịch sự: おいくつですか). Trả lời: 9さいです (9 tuổi)."
      },
      {
        "id": "b1_q9",
        "question": "ミラーさんは アメリカ人です。(____) IMCの 社員です。",
        "options": {
          "A": "そして",
          "B": "でも",
          "C": "だから",
          "D": "それから"
        },
        "answer": "A",
        "explanation": "Liên từ「そして」nghĩa là 'và / hơn nữa', dùng nối hai câu khẳng định cùng chiều bổ sung thông tin."
      },
      {
        "id": "b1_q10",
        "question": "初めまして。どうぞ (____)。",
        "options": {
          "A": "よろしく お願いします",
          "B": "ありがとう ございます",
          "C": "すみません",
          "D": "ごめんなさい"
        },
        "answer": "A",
        "explanation": "Mẫu chào hỏi lần đầu gặp mặt: 初めまして。どうぞ よろしく お願いします (Rất hân hạnh được làm quen)."
      }
    ]
  }
};

window.JA_GRAMMAR_DATA = JA_GRAMMAR_DATA;

