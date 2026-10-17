// ========================================================
// JAPANESE_DATA/NOTES_DATA.JS - Sổ Tay Kiến Thức Quan Trọng
// Người dùng tự note nội dung cá nhân:
// 1. hard_words: Cách đọc các từ khó (Bảng: Chữ | Cách phát âm | Mẹo phân biệt)
// 2. phrases: Các cụm từ hay cần học thuộc
// ========================================================

const JA_NOTES_DATA = {
  // 1. CÁCH ĐỌC CÁC TỪ KHÓ (Bảng tĩnh: Chữ | Cách phát âm | Mẹo phân biệt)
  hard_words: {
    title: "Cách đọc các từ khó",
    badge: "🀄 TỪ KHÓ",
    description: "Bảng ghi chú cách phát âm & mẹo phân biệt các chữ/từ khó",
    notice: "Tiếng nhật có a ê i ô ư không phải là a e i o u. Nên lúc đọc cũng đọc là ê, ô, ư",
    items: [
      {
        char: "じ",
        pronunciation: "Giống âm ji, bắt đầu bằng phụ âm",
        tip: "Đầu lưỡi gần vùng lợi, phát âm giống âm ji."
      },
      {
        char: "ゆ",
        pronunciation: "Giống âm yu, bắt đầu bằng phụ âm y",
        tip: "Bắt đầu bằng âm y, giống âm yu trong từ tiếng Anh you nhưng ngắn hơn, lưỡi thụt vào ngắn hơn"
      },
      {
        char: "つ",
        pronunciation: "tsu (gần giống “trư”)",
        tip: "Gần giống “trư” nhưng bật nhẹ ở đầu lưỡi thôi"
      },
      {
        char: "や",
        pronunciation: "ya (gần giống “ya” trong tiếng Việt)",
        tip: "Lưỡi thụt vào ngắn giống chữ yu"
      }
    ]
  },

  // 2. CÁC CỤM TỪ HAY CẦN HỌC THUỘC (Mẫu câu giao tiếp, chào hỏi, cửa miệng)
  phrases: {
    title: "Cụm từ hay cần học thuộc",
    badge: "💬 CỤM TỪ HAY",
    description: "Các mẫu câu giao tiếp cửa miệng, chào hỏi chuẩn văn phong người bản xứ",
    items: []
  }
};
