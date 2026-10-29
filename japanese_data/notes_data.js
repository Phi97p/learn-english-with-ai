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

  // 2. NGỮ PHÁP (Mẫu câu giao tiếp, ngữ pháp trọng tâm)
  phrases: {
    title: "Ngữ pháp",
    badge: "💬 NGỮ PHÁP",
    description: "Các mẫu câu ngữ pháp hay và thông dụng trong tiếng Nhật",
    notice: "Minna no Nihongo: Tổng hợp các cấu trúc ngữ pháp trọng tâm (Bài 5, Bài 6, Bài 7...)",
    items: [
      {
        title: "1. [Bài 5] Phương tiện di chuyển: [Phương tiện] + で",
        meaning: "Đi đâu bằng phương tiện gì dùng trợ từ で",
        example: "バスで　だいがくへ　きます。(Tôi đến trường đại học bằng xe buýt.)",
        note: "⚠️ Tuy nhiên đi bộ thì KHÔNG dùng で mà dùng あるいて: えきから　あるいて　かえりました。(Tôi đã đi bộ từ nhà ga về nhà.)"
      },
      {
        title: "2. [Bài 5] Cùng đi với ai: [Người] + と",
        meaning: "Đi đâu cùng với ai thì dùng trợ từ と (với / cùng với)",
        example: "かぞくと　ベトナムへ　きました。(Tôi đã đến Việt Nam cùng với gia đình.)",
        note: "⚠️ Đi một mình thì dùng ひとりで (KHÔNG dùng trợ từ と): ひとりで　とうきょうへ　いきます。(Tôi đi Tokyo một mình.)"
      },
      {
        title: "3. [Bài 5] Xuất phát / Đến từ đâu: [Địa điểm] + から + きました",
        meaning: "Chú ý: Động từ「きました」(kimashita) còn được dùng để nói xuất phát từ đâu, đến từ nước nào / nơi nào với cấu trúc: [Địa điểm] + から + きました.",
        example: "ベトナムから　きました。(Betonamu kara kimashita - Tôi đến từ Việt Nam / Tôi xuất phát từ Việt Nam.)",
        note: "💡 Khi tự giới thiệu bản thân, quê hương xuất thân dùng mẫu câu quen thuộc: [Tên quốc gia/quê quán] + から きました."
      },
      {
        title: "4. [Bài 6] Hỏi bạn làm gì: 何をしましたか。",
        meaning: "Dùng để hỏi ai đó đã làm gì (thường kết hợp với các mốc thời gian quá khứ như: きのう - hôm qua, おととい - hôm kia, 先週 - tuần trước...)",
        example: "A：きのう 何をしましたか。(Hôm qua bạn đã làm gì?)\nB：日本語を勉強しました。(Tôi đã học tiếng Nhật.)",
        note: "💡 Lưu ý: Chữ「何」đứng trước trợ từ「を」được phát âm là「なに」(nani): 何を (nani o)."
      },
      {
        title: "5. [Bài 6] Mời, đề nghị ai làm gì một cách lịch sự: ～ませんか。",
        meaning: "Mẫu câu rủ rê, mời mọc hoặc đề nghị đối phương cùng thực hiện một hành động nào đó một cách lịch sự, nhã nhặn (thường đi kèm phó từ いっしょに - cùng nhau).",
        example: "• いっしょに テニスを しませんか。(Cùng chơi tennis với tôi nhé?)\n• ちょっと やすみませんか。(Nghỉ một lát nhé?)",
        note: "💡 Mẹo nhớ: Trong tiếng Nhật, ～ませんか không chỉ là câu phủ định nghi vấn mà còn là mẫu câu mời ai đó làm gì nhé!"
      },
      {
        title: "6. [Bài 7] Tính từ bổ nghĩa cho danh từ: [Tính từ い / な] + Danh từ",
        meaning: "• Tính từ đuôi「い」: Giữ nguyên「い」rồi ghép trực tiếp với danh từ ➔ [Tính từ-い] + Danh từ.\n• Tính từ đuôi「な」: Bắt buộc phải thêm「な」trước danh từ ➔ [Tính từ-な] + な + Danh từ.",
        example: "• 大きい机 (おおきいつくえ): Cái bàn lớn (tính từ đuôi い: 大きい + 机)\n• 静かな町 (しずかなまち): Thị trấn yên tĩnh (tính từ đuôi な: 静か + な + 町)",
        note: "💡 Ghi nhớ quy tắc vàng: Đuôi い giữ nguyên い + N (大きい机); Đuôi な bắt buộc phải có「な」+ N (静かな町, きれいな部屋, 親切な人)."
      }
    ]
  },

  // 3. TRỢ TỪ (Tổng hợp các trợ từ quan trọng)
  particles: {
    title: "Trợ từ",
    badge: "🔖 TRỢ TỪ",
    description: "Note về trợ từ: で, に, へ, の, と",
    notice: "Ghi nhớ quy tắc phân biệt trợ từ khi nói về Ở đâu, Thời gian và bảng Tổng kết.",
    items: [
      {
        title: "1. 📌 Tổng kết",
        meaning: "• に + người：từ, cho - nhận từ ai, học từ ai, gửi cho ai, gọi điện cho ai\n• に + giờ：lúc, vào ngày..\n• に + địa điểm: ở - hiện diện có ai ở đâu,…\n• で : bằng …làm gì bằng gì, bằng tiếng gì\n• で：ở - làm gì ở đâu\n• で：thời gian hoàn thành việc gì\n• の：của, về, thuộc\n• へ：đến - phương hướng\n• と：với, cùng với (làm gì cùng ai), và (nối các danh từ)",
        note: "⚡ Nắm chắc các quy tắc trên để làm bài tập ngữ pháp và hội thoại chuẩn xác."
      },
      {
        title: "2. で , に , へ khi nói về ở đâu",
        meaning: "• に: Ở đâu có người/vật? Hoặc đi đến đâu?\n  Ví dụ: Tôi đang ở trường\n\n• で: Làm hành động gì ở đâu?\n  Ví dụ: Tôi đang học ở trường\n\n• の: của đâu, thuộc nơi nào (hãng nào)\n\n• へ : đến đâu, nhấn mạnh phương hướng hơn",
        note: "💡 Nhớ mẹo: Tồn tại/ở có mặt người hay vật dùng に, diễn ra hành động dùng で, nhấn mạnh hướng di chuyển dùng へ."
      },
      {
        title: "3. で、に khi nói về thời gian",
        meaning: "• で、に khi nói về thời gian chủ yếu là に\n• に: lúc, vào ngày\n• で : thời gian hoàn thành việc gì",
        note: "💡 Mốc thời gian cụ thể dùng に; Giới hạn/khoảng thời gian hoàn thành dùng で."
      }
    ]
  },

  // 4. TỪ NỐI (Tổng hợp các từ nối và liên từ câu thông dụng)
  connectors: {
    title: "Từ nối",
    badge: "🔗 TỪ NỐI",
    description: "Tổng hợp các từ nối, liên từ quan trọng trong tiếng Nhật",
    notice: "Ghi nhớ cách dùng các từ nối câu để câu văn và hội thoại mạch lạc, tự nhiên hơn.",
    items: [
      {
        title: "1. たら : Khi / sau khi (hoặc nếu)",
        meaning: "Dùng để diễn tả một hành động xảy ra sau khi hành động trước hoàn thành (Khi/sau khi...), hoặc giả định điều kiện (Nếu...).",
        example: "うちへ　かえったら、すぐ　おふろに　はいります。(Khi về đến nhà, tôi sẽ đi tắm ngay.)",
        note: "💡 Ghi nhớ: Động từ chia thể quá khứ + ら (V-たら) biểu thị 'sau khi / khi làm xong việc gì'."
      },
      {
        title: "2. から : Vì, bởi vì",
        meaning: "Đứng sau mệnh đề chỉ nguyên nhân, lý do để giải thích cho kết quả hoặc hành động tiếp theo.",
        example: "じかんが　ありませんから、タクシーで　いきます。(Vì không có thời gian nên tôi sẽ đi bằng taxi.)",
        note: "💡 Mẫu câu: [Mệnh đề nguyên nhân] + から、[Mệnh đề kết quả]."
      },
      {
        title: "3. そして : Và, và rồi",
        meaning: "Từ nối đứng ở đầu câu, dùng để nối 2 câu cùng tính chất hoặc kể tiếp hành động diễn ra tiếp theo.",
        example: "きのう　ほんを　かいました。そして、ともだちの　いえへ　いきました。(Hôm qua tôi đã mua sách. Và rồi, tôi đã đến nhà bạn.)",
        note: "💡 Dùng để liên kết bổ sung thông tin hoặc trình tự hành động."
      },
      {
        title: "4. それから : Sau đó, tiếp theo đó",
        meaning: "Từ nối đứng đầu câu chỉ trình tự thời gian hành động nối tiếp nhau theo thứ tự trước sau.",
        example: "あさ　ジョギングを　しました。それから、シャワーを　あびました。(Buổi sáng tôi chạy bộ. Sau đó, tôi đã tắm vòi sen.)",
        note: "💡 Nhấn mạnh tính tuần tự: Làm hành động A, 'sau đó' (それから) làm tiếp hành động B."
      },
      {
        title: "5. これから : Từ bây giờ, ngay bây giờ",
        meaning: "Chỉ thời điểm bắt đầu từ lúc này trở đi, ngay bây giờ chuẩn bị làm gì.",
        example: "これから　ミラーさんの　かいしゃへ　でんわを　かけます。(Từ bây giờ tôi sẽ gọi điện thoại đến công ty anh Miller.)",
        note: "💡 Phân biệt: これから (từ bây giờ sắp làm), それから (sau đó), あれから (kể từ dạo đó)."
      },
      {
        title: "6. が : Nhưng",
        meaning: "Liên từ nối 2 vế câu có quan hệ đối lập hoặc tương phản (mang sắc thái lịch sự, nhẹ nhàng).",
        example: "にほんの　たべものは　おいしいですが、たかいです。(Đồ ăn Nhật Bản ngon nhưng mà đắt.)",
        note: "💡 Nối trực tiếp 2 vế trong cùng 1 câu: [Vế 1] が, [Vế 2]."
      },
      {
        title: "7. でも : Tuy nhiên, nhưng mà",
        meaning: "Từ nối đứng ở đầu câu biểu thị sự đối lập, tương phản với câu nói trước đó.",
        example: "日本の生活は面白いです。でも、忙しいです。(Cuộc sống ở Nhật rất thú vị. Tuy nhiên, bận rộn.)",
        note: "💡 Thường đứng tách biệt ở đầu câu mới (sau dấu chấm câu)."
      },
      {
        title: "8. 特に (とくに) : Đặc biệt là, nhất là",
        meaning: "Dùng để nhấn mạnh một đối tượng, sự vật nổi bật nhất trong một tập hợp hoặc phạm vi.",
        example: "スポーツが　すきです。とくに　サッカーが　すきです。(Tôi thích thể thao. Đặc biệt là rất thích bóng đá.)",
        note: "💡 Chữ Hán: 特 (ĐẶC) đọc là とく. Dùng nhấn mạnh cá nhân/sự vật nổi bật."
      }
    ]
  },

  // 5. HỌC ĐẾM (Quy tắc đếm số lượng, thời gian, đồ vật...)
  counting: {
    title: "Học đếm",
    badge: "🔢 HỌC ĐẾM",
    description: "Tổng hợp các quy tắc đếm đặc biệt trong tiếng Nhật",
    sections: [
      {
        title: "1. Đếm ngày",
        items: [
          "Ngày 1 (1日) : ついたち",
          "Ngày 2 (2日) : ふつか",
          "Ngày 3 (3日) : みっか",
          "Ngày 4 (4日) : よっか",
          "Ngày 5 (5日) : いつか",
          "Ngày 6 (6日) : むいか",
          "Ngày 7 (7日) : なのか",
          "Ngày 8 (8日) : ようか",
          "Ngày 9 (9日) : ここのか",
          "Ngày 10 (10日) : とおか",
          "Ngày 14 (14日) : じゅうよっか",
          "Ngày 20 (20日) : はつか",
          "Ngày 24 (24日) : にじゅうよっか"
        ]
      },
      {
        title: "2. Đếm vật chung",
        items: [
          "1 cái (1つ) : ひとつ",
          "2 cái (2つ) : ふたつ",
          "3 cái (3つ) : みっつ",
          "4 cái (4つ) : よっつ",
          "5 cái (5つ) : いつつ",
          "6 cái (6つ) : むっつ",
          "7 cái (7つ) : ななつ",
          "8 cái (8つ) : やっつ",
          "9 cái (9つ) : ここのつ",
          "10 cái (10) : とお"
        ]
      },
      {
        title: "3. Đếm tháng",
        items: [
          "Tháng 4 (4月) : しがつ",
          "Tháng 7 (7月) : しちがつ",
          "Tháng 9 (9月) : くがつ"
        ]
      },
      {
        title: "4. Đếm giờ",
        items: [
          "4 giờ (4時) : よじ",
          "7 giờ (7時) : しちじ",
          "9 giờ (9時) : くじ"
        ]
      },
      {
        title: "5. Đếm phút",
        items: [
          "1 phút (1分) : いっぷん",
          "3 phút (3分) : さんぷん",
          "4 phút (4分) : よんぷん",
          "6 phút (6分) : ろっぷん",
          "8 phút (8分) : はっぷん",
          "10 phút (10分) : じゅっぷん (hoặc じっぷん)"
        ]
      },
      {
        title: "6. Đếm tiền",
        items: [
          "300 yên (300円) : さんびゃくえん",
          "600 yên (600円) : ろっぴゃくえん",
          "800 yên (800円) : はっぴゃくえん",
          "3,000 yên (3,000円) : さんぜんえん",
          "8,000 yên (8,000円) : はっせんえん",
          "10,000 yên (10,000円) : いちまんえん"
        ]
      },
      {
        title: "7. Đếm tuổi",
        items: [
          "1 tuổi (1歳) : いっさい",
          "8 tuổi (8歳) : はっさい",
          "10 tuổi (10歳) : じゅっさい (hoặc じっさい)",
          "20 tuổi (20歳) : はたち"
        ]
      },
      {
        title: "8. Đếm tầng",
        items: [
          "Tầng 1 (1階) : いっかい",
          "Tầng 3 (3階) : さんがい",
          "Tầng 6 (6階) : ろっかい",
          "Tầng 8 (8階) : はっかい",
          "Tầng 10 (10階) : じゅっかい (hoặc じっかい)",
          "Tầng hầm (地下) : ちか",
          "Tầng hầm 1 (B1 / 地下1階) : ちかいっかい",
          "Tầng mấy (何階) : なんがい (hoặc なんかい)"
        ]
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.JA_NOTES_DATA = JA_NOTES_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = JA_NOTES_DATA;
}

