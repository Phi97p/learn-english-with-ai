// ========================================================
// JAPANESE_DATA / DIALOGUE_DATA.JS
// Dữ liệu Hội thoại Tiếng Nhật (2 người đối thoại)
// Nguồn bài học: datasss/jp/hoi_thoai/
// ========================================================

const JA_DIALOGUE_DATA = {
  bai_1: {
    title: "Bài 1: 初めまして (Rất hân hạnh được làm quen)",
    topic: "Chào hỏi tại công ty và giới thiệu người mới",
    icon: "💬",
    roleA: {
      name: "Người A (佐藤 - Sato)",
      avatar: "👩",
      desc: "Đồng nghiệp nữ tại công ty",
      gender: "female"
    },
    roleB: {
      name: "Người B (山田 & ミラー)",
      avatar: "👱‍♂️",
      desc: "Đồng nghiệp nam & Bạn mới",
      gender: "male"
    },
    turns: [
      {
        id: 1,
        speaker: "佐藤",
        role: "A",
        avatar: "👩",
        gender: "female",
        ja: "おはようございます。",
        romaji: "Ohayou gozaimasu.",
        vi: "Chào buổi sáng ạ.",
      },
      {
        id: 2,
        speaker: "山田",
        role: "B",
        avatar: "👨",
        gender: "male",
        ja: "おはようございます。",
        romaji: "Ohayou gozaimasu.",
        vi: "Chào buổi sáng.",
      },
      {
        id: 3,
        speaker: "山田",
        role: "B",
        avatar: "👨",
        gender: "male",
        ja: "佐藤さん、こちらはマイク・ミラーさんです。",
        romaji: "Satou-san, kochira wa Maiku Miraa-san desu.",
        vi: "Chị Sato, đây là anh Mike Miller.",
      },
      {
        id: 4,
        speaker: "ミラー",
        role: "B",
        avatar: "👱‍♂️",
        gender: "male",
        ja: "初めまして。",
        romaji: "Hajimemashite.",
        vi: "Rất hân hạnh lần đầu được gặp bạn.",
      },
      {
        id: 5,
        speaker: "マイク・ミラー",
        role: "B",
        avatar: "👱‍♂️",
        gender: "male",
        ja: "マイク・ミラーです。アメリカから来ました。どうぞよろしく。",
        romaji: "Maiku Miraa desu. Amerika kara kimashita. Douzo yoroshiku.",
        vi: "Tôi là Mike Miller. Tôi đến từ nước Mỹ. Rất mong được giúp đỡ.",
      },
      {
        id: 6,
        speaker: "佐藤",
        role: "A",
        avatar: "👩",
        gender: "female",
        ja: "佐藤けい子です。どうぞよろしく。",
        romaji: "Satou Keiko desu. Douzo yoroshiku.",
        vi: "Tôi là Sato Keiko. Rất mong được anh giúp đỡ.",
      }
    ]
  }
};
