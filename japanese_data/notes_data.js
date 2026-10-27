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

  // 2. NGỮ PHÁP HAY (Mẫu câu giao tiếp, ngữ pháp trọng tâm)
  phrases: {
    title: "Ngữ pháp hay",
    badge: "💬 NGỮ PHÁP HAY",
    description: "Các mẫu câu ngữ pháp hay và thông dụng trong tiếng Nhật",
    notice: "Minna no Nihongo - Bài 5: Trợ từ chỉ phương tiện di chuyển (で) và người đồng hành (と)",
    items: [
      {
        title: "1. Phương tiện di chuyển: [Phương tiện] + で",
        meaning: "Đi đâu bằng phương tiện gì dùng trợ từ で",
        example: "バスで　だいがくへ　きます。(Tôi đến trường đại học bằng xe buýt.)",
        note: "⚠️ Tuy nhiên đi bộ thì KHÔNG dùng で mà dùng あるいて: えきから　あるいて　かえりました。(Tôi đã đi bộ từ nhà ga về nhà.)"
      },
      {
        title: "2. Cùng đi với ai: [Người] + と",
        meaning: "Đi đâu cùng với ai thì dùng trợ từ と (với / cùng với)",
        example: "かぞくと　ベトナムへ　きました。(Tôi đã đến Việt Nam cùng với gia đình.)",
        note: "⚠️ Đi một mình thì dùng ひとりで (KHÔNG dùng trợ từ と): ひとりで　とうきょうへ　いきます。(Tôi đi Tokyo một mình.)"
      }
    ]
  }
};
