// ========================================================
// JAPANESE_DATA / VOCAB_DATA.JS
// Dữ liệu Từ Vựng Tiếng Nhật theo từng Bài học
// Nguồn từ vựng gốc: datasss/jp/vocab/voca.txt
// ========================================================

const JA_VOCAB_DATA = {
  bai_1: {
    title: "Bài 1: わたしは マイク・ミラーです (Minna no Nihongo)",
    words: [
      {
        word: "ク",
        hiragana: "く",
        romaji: "Ku",
        vi: "Katakana"
      },
      {
        word: "サ",
        hiragana: "さ",
        romaji: "Sa",
        vi: "Katakana"
      },
      {
        word: "会社員",
        hiragana: "かいしゃいん",
        romaji: "Kaishain",
        vi: "Nhân viên công ty"
      },
      {
        word: "銀行員",
        hiragana: "ぎんこういん",
        romaji: "Ginkouin",
        vi: "Nhân viên ngân hàng"
      },
      {
        word: "学生",
        hiragana: "がくせい",
        romaji: "Gakusei",
        vi: "Học sinh, sinh viên"
      },
      {
        word: "医者",
        hiragana: "いしゃ",
        romaji: "Isha",
        vi: "Bác sĩ"
      },
      {
        word: "大学",
        hiragana: "だいがく",
        romaji: "Daigaku",
        vi: "Trường đại học, đại học"
      },
      {
        word: "先生",
        hiragana: "せんせい",
        romaji: "Sensei",
        vi: "Thầy giáo, cô giáo (người khác gọi)"
      }
    ]
  }
};

// Khả năng tương thích ngược
const JA_HARD_VOCAB_DATA = JA_VOCAB_DATA.bai_1.words;
