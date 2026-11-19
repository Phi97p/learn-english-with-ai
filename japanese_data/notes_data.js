// ========================================================
// JAPANESE_DATA/NOTES_DATA.JS - Sổ Tay Kiến Thức Quan Trọng
// Người dùng tự note nội dung cá nhân:
// 1. hard_words: Cách đọc các từ khó
// 2. phrases: Ngữ pháp trọng tâm
// 3. particles: Trợ từ
// 4. connectors: Từ nối
// 5. counting: Học đếm
// 6. question_words: Từ để hỏi
// 7. adverbs: Phó từ
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
    notice: "Minna no Nihongo: Tổng hợp các cấu trúc ngữ pháp trọng tâm (Bài 5 - Bài 21)",
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
      },
      {
        title: "7. [Bài 9] Ngữ pháp bài 9: N が あります／わかります・N が すきです／きらいです／じょうずです／へたです",
        meaning: "Đối tượng luôn đi với trợ từ「が」(không dùng を):\n• N が あります: Có N (sở hữu)\n• N が わかります: Hiểu / biết N\n• N が すきです / きらいです: Thích / ghét N\n• N が じょうずです / へたです: Giỏi / kém N",
        note: "💡 Ghi nhớ: [あります / わかります / すき / きらい / じょうず / へた] luôn dùng trợ từ が!"
      },
      {
        title: "8. [Bài 10] Ngữ pháp bài 10: Mẫu câu tồn tại (あります／います)",
        meaning: "• Ở đâu có cái gì/ai: N1 (địa điểm) に N2 が あります／います\n• Cái gì/ai ở đâu: N2 は N1 (địa điểm) に あります／います\n  (あります: đồ vật, thực vật | います: người, động vật)",
        note: "⚠️ Chú ý: Trước あります/います chưa chắc 100% là が! Khi chuyển が thành は để đưa vật/người lên làm chủ đề (N2 は), thì đứng ngay trước あります/います sẽ là [địa điểm] に."
      },
      {
        title: "9. [Bài 11] Vị trí của số từ: [Danh từ] + を/が/で + [Số lượng] + [Động từ]",
        meaning: "Số lượng từ thường đứng ngay TRƯỚC động từ mà nó bổ nghĩa. Trợ từ (を, が, で...) đi liền sau danh từ tùy thuộc vào động từ (ngoại trừ số từ chỉ thời gian có ngoại lệ).",
        example: "切手を 5枚 買います。(Tôi mua 5 con tem.)\nりんごを 4つ 食べました。(Tôi đã ăn 4 quả táo.)",
        note: "⚠️ Chú ý: Trợ từ を hay が phụ thuộc vào động từ. Số lượng đặt sát ngay trước động từ, không thêm trợ từ vào sau số lượng."
      },
      {
        title: "10. [Bài 11] Số lượng bổ nghĩa cho danh từ: [Số lượng] + の + [Danh từ]",
        meaning: "Khi số lượng trực tiếp bổ nghĩa cho danh từ, ta dùng cấu trúc: [Số lượng] + の + [Danh từ].\n• Cùng chiều với tiếng Việt: 4 quả táo ➔「4つのりんご」.\n• Cách dùng này cùng nghĩa với cấu trúc: [Danh từ] + を/が + [Số lượng] + [Động từ].",
        example: "• 4つのりんごを 買いました。(Tôi đã mua 4 quả táo - dạng Số lượng + の + N)\n• りんごを 4つ 買いました。(Tôi đã mua 4 quả táo - dạng thông thường)",
        note: "💡 Mẹo nhớ: Trước số lượng KHÔNG có の (không nói りんご の 4つ mà phải là 4つの りんご). Cùng chiều tư duy với tiếng Việt: 4 quả táo ➔ 4つの りんご."
      },
      {
        title: "11. [Bài 11] Tần suất: [Số đếm thời gian] + に + [Số lần]",
        meaning: "Biểu thị tần suất thực hiện hành động trong một khoảng thời gian nhất định.",
        example: "• 1週間に 1回 テニスを します。(1 tuần tôi chơi tennis 1 lần.)\n• 1か月に 2回 えいがを 見ます。(1 tháng tôi xem phim 2 lần.)",
        note: "💡 Dùng trợ từ「に」đứng ngay sau khoảng thời gian để biểu thị tần suất thực hiện."
      },
      {
        title: "12. [Bài 12] Biến đổi tính từ đuôi「い」:「くない」(Phủ định) &「かった」(Quá khứ)",
        meaning: "Quy tắc chia thì và thể của tính từ đuôi「い」:\n•「くない」: là PHỦ ĐỊNH (hiện tại) ➔ bỏ「い」thêm「くない」(không...)\n•「かった」: là QUÁ KHỨ (khẳng định) ➔ bỏ「い」thêm「かった」(đã...)\n•「くなかった」: là PHỦ ĐỊNH QUÁ KHỨ ➔ bỏ「い」thêm「くなかった」(đã không...)",
        example: "• [Hiện tại]: あつい (Nóng) ➔ あつくない (Không nóng)\n• [Quá khứ]: あつかった (Đã từng nóng) ➔ あつくなかった (Đã không nóng)\n• Ngoại lệ với từ「いい」(Tốt): いい ➔ よくない (không tốt) ➔ よかった (đã tốt) ➔ よくなかった (đã không tốt)",
        note: "💡 Mẹo nhớ nhanh: Cứ thấy đuôi「くない」là PHỦ ĐỊNH; thấy đuôi「かった」là QUÁ KHỨ."
      },
      {
        title: "13. [Bài 12] So sánh lựa chọn: A と B と どちらが [Tính từ] ですか",
        meaning: "Dùng để hỏi và trả lời khi so sánh chọn lựa giữa 2 đối tượng A và B:\n• Câu hỏi: A と B と どちらが [Tính từ] ですか。(A và B thì cái nào / ai ... hơn?)\n• Trả lời khi chọn 1 bên: A の ほうが [Tính từ] です。(A ... hơn.)\n• Trả lời khi 2 người / 2 vật như nhau: どちらも [Tính từ] です。(Cả hai đều ...)",
        example: "A：サッカーと 野球と どちらが 面白いですか。(Bóng đá và bóng chày môn nào thú vị hơn?)\n➔ Chọn 1 bên: サッカーの ほうが 面白いです。(Bóng đá thú vị hơn.)\n➔ 2 bên như nhau: どちらも 面白いです。(Cả hai môn đều thú vị / như nhau.)\n\nA：ミラーさんと サントスさんと どちらが テニスが 上手ですか。(Anh Miller và anh Santos ai chơi tennis giỏi hơn?)\n➔ 2 người như nhau: どちらも 上手です。(Cả hai người đều giỏi như nhau.)",
        note: "💡 Nhớ 2 cách trả lời: Chọn 1 bên dùng「～の ほうが」; Nếu 2 người/vật ngang nhau dùng「どちらも [Tính từ] です」."
      },
      {
        title: "14. [Bài 12] So sánh hơn: A は B より [Tính từ] です",
        meaning: "Dùng để so sánh hơn giữa 2 đối tượng: A hơn B về một đặc điểm tính chất nào đó (A thì ... hơn B).\n• Cứ có「より」➔ A hơn B (từ đứng ngay trước より là mốc để so sánh).",
        example: "• この車は あの車より 速いです。(Chiếc xe này chạy nhanh hơn chiếc xe kia.)\n• 日本は ベトナムより 寒いです。(Nhật Bản lạnh hơn Việt Nam.)",
        note: "💡 Mẹo nhớ: Cứ thấy「より」là so sánh A HƠN B (đối tượng trước より là vật bị đem ra làm mốc so sánh)."
      },
      {
        title: "15. [Bài 12] So sánh nhất: S (の中) で [Từ để hỏi] が いちばん [Tính từ] ですか",
        meaning: "Hỏi và trả lời đối tượng nào nổi trội nhất trong một nhóm, phạm vi S:\n• Câu hỏi: S (の中) で [なに／どこ／だれ／いつ] が いちばん [Tính từ] ですか。\n• Trả lời thuận (nhóm trước): [Đối tượng] が いちばん [Tính từ] です。\n• Viết ngược lại (đưa đối tượng lên làm chủ đề ở đầu câu): [Đối tượng] は S (の中) で いちばん [Tính từ] です。",
        example: "Ví dụ: 'Đá bóng trong các môn thể thao là thú vị nhất':\n• Dạng thuận (nhóm S trước): スポーツ(の中)で サッカーが いちばん 面白いです。\n• Dạng viết ngược lại (đưa đá bóng lên đầu): サッカーは スポーツ(の中)で いちばん 面白いです。\n\n(Hỏi ai giỏi nhất: クラスの中で だれが いちばん 上手ですか ➔ ナムさんが いちばん 上手です)",
        note: "⚠️ Chú ý đổi trợ từ khi viết ngược lại: Khi đứng sau phạm vi S thì dùng trợ từ「が」(サッカーが); nhưng khi đảo đối tượng ra đầu câu làm chủ đề thì bắt buộc chuyển thành「は」(サッカーは スポーツの中で いちばん 面白いです)."
      },
      {
        title: "16. [Bài 12] 📌 TỔNG KẾT 3 MẪU CÂU SO SÁNH TRỌNG TÂM",
        meaning: "Tóm gọn 3 mẫu câu so sánh cốt lõi trong tiếng Nhật:\n1. Có「より」➔ A HƠN B: A は B より [Tính từ] です。\n2. Có「どちらが」➔ A VÀ B CÁI NÀO HƠN: A と B と どちらが [Tính từ] ですか (Chọn 1: Aのほうが... | Cả 2 như nhau: どちらも...).\n3. Có「いちばん」➔ SO SÁNH NHẤT: S の中で [Đối tượng] が いちばん [Tính từ] です (hoặc viết ngược lại: [Đối tượng] は S の中で いちばん...).",
        example: "• [Có より]: 新幹線は バスより 速いです。(Tàu Shinkansen nhanh hơn xe buýt.)\n• [Có どちらが]: りんごと みかんと どちらが 好きですか。(Táo và quýt bạn thích quả nào hơn?)\n• [Có いちばん]: 1年で いつが いちばん 寒いですか。(Trong 1 năm khi nào lạnh nhất?)",
        note: "⚡ Khẩu quyết ghi nhớ nhanh:\n• Thấy より ➔ A hơn B.\n• Thấy どちらが ➔ A và B cái nào hơn (chọn 1 bên hay cả hai như nhau).\n• Thấy いちばん ➔ So sánh nhất trong một nhóm/tập hợp."
      },
      {
        title: "17. [Bài 13] Bày tỏ mong muốn: N が ほしいです & V-たいです (Kèm phủ định 'Không muốn')",
        meaning: "• Muốn có cái gì (sở hữu danh từ): N が ほしいです。(Tôi muốn có N.)\n  ➔ Phủ định (Không muốn có): N は/が ほしくないです (欲しくないです)。\n• Muốn làm gì (hành động): [V-bỏ ます] + たいです。(Tôi muốn làm V.)\n  ➔ Phủ định (Không muốn làm): [V-bỏ ます] + たくないです。\n  (Trợ từ を trước động từ có thể chuyển thành が: 水を 飲みたい ➔ 水が 飲みたい).",
        example: "• [Muốn có]: 新しい パソコンが ほしいです。(Tôi muốn có máy tính mới.)\n• [Không muốn có]: 今は 何も ほしくないです (欲しくないです)。(Bây giờ tôi không muốn có thứ gì cả.)\n• [Muốn làm]: ごはんを たべたいです。(Tôi muốn ăn cơm.)\n• [Không muốn làm]: 今は 何も たべたくないです。(Bây giờ tôi không muốn ăn gì cả.)",
        note: "⚠️ CÁC LƯU Ý QUAN TRỌNG:\n1. V-たい được coi như tính từ đuôi「い」: Động từ thêm たい sẽ biến đổi đuôi giống hệt tính từ đuôi い (thêm です ở đằng sau cho lịch sự: たべたいです ➔ phủ định là たべたくないです; quá khứ là たべたかったです).\n2. Không dùng cho ngôi thứ 3: Cả ほしい/たい đều KHÔNG DÙNG CHO NGÔI THỨ 3 (không nói trực tiếp ý muốn của người khác). Chỉ dùng cho bản thân (ngôi 1) hoặc hỏi trực tiếp đối phương (ngôi 2)."
      },
      {
        title: "18. [Bài 13] Mục đích di chuyển: [Địa điểm] へ [N / V-bỏ-ます] に [行きます／来ます／帰ります]",
        meaning: "Đi / đến / về một nơi nào đó ĐỂ thực hiện một mục đích nào đó:\n• Cấu trúc: [Địa điểm] へ + [N (danh từ chỉ hành vi) / V (động từ bỏ ます)] + に + 行きます／来ます／帰ります.",
        example: "• デパートへ 買い物に 行きます。(Tôi đi đến trung tâm thương mại để mua sắm. - 買い物 là N)\n• レストランへ ごはんを 食べに 行きます。(Tôi đến nhà hàng để ăn cơm. - 食べます bỏ ます)",
        note: "💡 Động từ bỏ ます hoặc danh từ hành vi kết hợp với「に」biểu thị mục đích của hành động di chuyển."
      },
      {
        title: "19. [Bài 13] Động từ Vào - Ra, Lên - Xuống: 'Vào に, Ra を'",
        meaning: "Quy tắc trợ từ với các động từ di chuyển ra/vào địa điểm hoặc lên/xuống phương tiện:\n• VÀO / LÊN ➔ dùng に: 入ります (vào), 乗ります (lên xe/tàu).\n• RA / XUỐNG ➔ dùng を: 出ます (ra khỏi), 降ります (xuống xe/tàu).",
        example: "• [Vào]: きょうしつに 入ります。(Đi vào lớp học.)\n• [Ra]: きょうしつを 出ます。(Rời khỏi / đi ra khỏi lớp học.)\n• [Lên]: 電車に 乗ります。(Lên tàu điện.)\n• [Xuống]: 電車を 降ります。(Xuống tàu điện.)",
        note: "💡 Khẩu quyết dễ nhớ: 'VÀO に, RA を' - Nơi/Phương tiện bước vào, leo lên dùng に; Nơi/Phương tiện rời khỏi, bước xuống dùng を."
      },
      {
        title: "20. [Bài 14] Phân loại 3 nhóm động từ & Các động từ bất quy tắc (ngoại lệ nhóm 2)",
        meaning: "Quy tắc nhận diện 3 nhóm động từ ở thể ます:\n• V Nhóm 1: Kết thúc bằng âm cột「い」trước ます (ví dụ: かきます, のみます, かいます, あいます...). Mẹo: Nhóm 1 ➔「い」.\n• V Nhóm 2: Kết thúc bằng âm cột「え」trước ます (ví dụ: たべます, みせます, ねます...). Mẹo: Nhóm 2 ➔「え」 (Nhớ cặp 1-2 là「い - え」).\n• V Nhóm 3: Động từ bất quy tắc chỉ gồm 2 từ:「します」(làm) và「来（き）ます」(đến). Đi kèm các danh động từ: N + します (勉強します, 散歩します...). Tạm thời chú ý: Các từ chỉ có 1 Kanji + します (như 話します - はなします: nói chuyện) thì thuộc Nhóm 1!\n\n⚠️ BẤT QUY TẮC NHÓM 1 & 2 (Đứng trước ます là âm cột い nhưng thuộc NHÓM 2):\n1. Thức dậy: 起きます (おきます)\n2. Nhìn / xem: 見ます (みます)\n3. Tắm (vòi sen): 浴びます (あびます - シャワーを浴びます)\n4. Xuống xe / Rơi: 降ります (おります - xuống xe/tàu) / 落ちます (おちます - rơi, rụng)\n5. Mượn: 借ります (かります)\n(Ngoài ra còn có: います - có/ở, できます - có thể, きます - mặc).",
        example: "• Nhóm 1 (cột い): 買い・ます (mua), 立ち・ます (đứng), 読み・ます (đọc), 話し・ます (nói)\n• Nhóm 2 chuẩn (cột え): 食べ・ます (ăn), 教え・ます (dạy), 寝・ます (ngủ)\n• Nhóm 2 ngoại lệ (cột い): 起きます (thức dậy), 見ます (nhìn), 浴びます (tắm), 降ります (xuống tàu), 借ります (mượn)\n• Nhóm 3: します (勉強します), 来ます (きます)",
        note: "💡 Mẹo nhớ vàng: '1 là い, 2 là え' (cặp 1-2 いえ). Thuộc lòng 5 động từ ngoại lệ hay gặp: Thức dậy (おきます), Nhìn (みます), Tắm (あびます), Xuống xe (おります), Mượn (かります)."
      },
      {
        title: "21. [Bài 14] Quy tắc chia thể「て」(V-て) của 3 nhóm động từ (6 ý nhóm 1)",
        meaning: "Quy tắc biến đổi động từ sang thể「て」:\n\n1. NHÓM 1 (Căn cứ vào âm trước ます chia làm 6 ý):\n• [い, ち, り] ➔ って (Mẹo đọc: 'i, chi rít tê' - liên tưởng số 1 いち): 買います ➔ 買って, 待ちます ➔ 待って, 帰ります ➔ 帰って.\n• [み, び, に] ➔ んで (Mẹo đọc: 'mi, bi, nin đê'): 飲みます ➔ 飲んで, 呼びます ➔ 呼んで, 死にます ➔ 死んで.\n• [き] ➔ いて: 書きます ➔ 書いて, 聞きます ➔ 聞いて.\n• [ぎ] ➔ いで: 急ぎます ➔ 急いで, 泳ぎます ➔ 泳いで.\n• [し (します)] ➔ して: 話します ➔ 話して, 貸します ➔ 貸して.\n• ★ NGOẠI LỆ ĐẶC BIỆT DUY NHẤT: 行きます (いきます) ➔ 行って (いって) [không chia là いいて].\n\n2. NHÓM 2: Thay「ます」thành「て」:\n• 食べます ➔ 食べて, 見ます ➔ 見て, 起きます ➔ 起きて, 降ります ➔ 降りて, 借ります ➔ 借りて.\n\n3. NHÓM 3: Bất quy tắc học thuộc:\n• します ➔ して (勉強します ➔ 勉強して)\n• 来ます (きます) ➔ 来て (きて)",
        example: "• [い・ち・り ➔ って]: 会います ➔ 会って; 取ります ➔ 取って\n• [み・び・に ➔ んで]: 読みます ➔ 読んで; 遊びます ➔ 遊んで\n• [き ➔ いて / ぎ ➔ いで]: 働きます ➔ 働いて; 急ぎます ➔ 急いで\n• [し ➔ して]: 出します ➔ 出して\n• [Đặc biệt]: 行きます ➔ 行って (いって)\n• [Nhóm 2]: 食べます ➔ 食べて\n• [Nhóm 3]: 散歩します ➔ 散歩して; 来ます ➔ 来て",
        note: "⚡ Thần chú thể て Nhóm 1: 'i, chi, ri ➔ tte', 'mi, bi, ni ➔ nde', 'ki ➔ ite', 'gi ➔ ide', 'shi ➔ shite', riêng 'ikimasu ➔ itte'."
      },
      {
        title: "22. [Bài 14] Phân biệt câu rủ rê, đề nghị: V-ませんか & V-ましょうか",
        meaning: "• V-ませんか (Rủ rê, mời mọc lịch sự): Mang ý nghĩa 'Cùng làm V với tôi nhé?' (thường đi kèm với phó từ いっしょに). Rất ít khi mang nghĩa là câu hỏi phủ định, trừ khi có từ ngữ chỉ thời gian hoặc phủ định rõ ràng trong ngữ cảnh (ví dụ: 'Ngày mai bạn không đi học à?').\n• V-ましょうか (Đề nghị giúp đỡ / rủ cùng làm): Mang ý nghĩa 'Tôi làm V giúp bạn nhé?' (người nói chủ động đề nghị giúp đỡ) hoặc 'Chúng ta cùng làm V nhé?'.",
        example: "• [V-ませんか - Rủ rê, mời mọc]:\n  - いっしょに ごはんを 食べませんか。(Cùng đi ăn cơm với tôi nhé?)\n  - (Câu hỏi phủ định rõ ràng): 明日 学校へ 行きませんか。(Ngày mai bạn không đi học à?)\n• [V-ましょうか - Đề nghị giúp đỡ]:\n  - タクシーを 呼びましょうか。(Tôi gọi taxi giúp bạn nhé?)\n  - 傘を 貸しましょうか。(Tôi cho bạn mượn ô nhé?)\n  - 写真を 撮りましょうか。(Tôi chụp ảnh giúp bạn nhé?)",
        note: "💡 Phân biệt ngắn gọn:「～ませんか」dùng để MỜI / RỦ đối phương cùng làm; còn「～ましょうか」dùng để ĐỀ NGHỊ GIÚP ĐỠ đối phương một việc gì đó."
      },
      {
        title: "23. [Bài 14] Cấu trúc hành động đang diễn ra: V-て います (Đang làm gì)",
        meaning: "Dùng để diễn tả một hành động ĐANG DIỄN RA tại thời điểm nói (tương tự như thì hiện tại tiếp diễn 'to be V-ing' trong tiếng Anh).\n• Cấu trúc: [Chủ ngữ は] + [Tân ngữ を] + V-て います。",
        example: "• 今 日本語を 勉強して います。(Bây giờ tôi đang học tiếng Nhật.)\n• ミラーさんは 今 電話を かけて います。(Anh Miller bây giờ đang gọi điện thoại.)\n• A：今 何を して いますか。(Bây giờ bạn đang làm gì đấy?)\n  B：テレビを 見て います。(Tôi đang xem tivi.)",
        note: "💡 Động từ thể て kết hợp với います (V-て います) để diễn tả trạng thái đang làm việc gì đó."
      },
      {
        title: "24. [Bài 14] Cấu trúc diễn tả hiện tượng tự nhiên: N が V (Mưa đang rơi...)",
        meaning: "Khi diễn tả một hiện tượng tự nhiên (thời tiết, thiên nhiên diễn ra khách quan trước mắt người nói) thì chủ thể của hiện tượng luôn đi với trợ từ「が」(tương tự như mẫu [N が Tính từ] để mô tả đặc điểm, thuộc tính khách quan).\n• Cấu trúc: [Hiện tượng tự nhiên] が + V-て います。",
        example: "• 雨が 降って います。(Trời đang mưa / mưa đang rơi.)\n• 雪が 降って います。(Tuyết đang rơi.)\n• 風が 吹いて います。(Gió đang thổi.)\n• 花が 咲いて います。(Hoa đang nở.)",
        note: "💡 Ghi nhớ quy tắc trợ từ: Diễn tả hiện tượng tự nhiên khách quan đang xảy ra trước mắt luôn dùng trợ từ「が」(雨が 降っています), tuyệt đối không dùng は."
      },
      {
        title: "25. [Bài 15] Cho phép làm gì: V-ても いいです (Kèm câu hỏi xin phép)",
        meaning: "• Khẳng định: V-ても いいです。(Được phép làm V / Làm V cũng được).\n• Câu hỏi xin phép: V-ても いいですか。(Tôi làm V có được không?)\n  ➔ Đồng ý: ええ、いいですよ。／ どうぞ。(Vâng, được chứ / Xin mời).\n  ➔ Từ chối lịch sự: すみません、ちょっと... (Xin lỗi, có chút không tiện...).",
        example: "• ここで 写真を 撮っても いいですか。(Tôi chụp ảnh ở đây có được không?)\n  ➔ ええ、いいですよ。(Vâng, được chứ.)\n• タバコを 吸っても いいですか。(Tôi hút thuốc có được không?)\n• このカタログを もらっても いいですか。(Tôi lấy cuốn catalog này có được không?)",
        note: "💡 Động từ chia thể て kết hợp với「も いいです」dùng để cho phép hoặc xin phép đối phương làm gì."
      },
      {
        title: "26. [Bài 15] Cấm đoán: V-ては いけません (Không được làm gì)",
        meaning: "Dùng để biểu thị sự CẤM ĐOÁN hoặc quy định không được phép thực hiện hành động (mang sắc thái nghiêm khắc, hay dùng trong biển báo, nội quy hoặc người trên nhắc nhở người dưới).",
        example: "• ここで 車を 止めては いけません。(Không được đỗ xe ở đây.)\n• 美術館の中で 写真を 撮っては いけません。(Trong bảo tàng mỹ thuật không được chụp ảnh.)\n• テスト中、辞書を 見ては いけません。(Trong giờ kiểm tra không được xem từ điển.)\n• ここに ゴミを 捨てては いけません。(Không được vứt rác ở đây.)",
        note: "⚠️ Khẩu quyết phân biệt:\n• V-ても いいです: ĐƯỢC PHÉP làm.\n• V-ては いけません: CẤM / KHÔNG ĐƯỢC LÀM."
      },
      {
        title: "27. [Bài 15] Trạng thái kết quả & Thói quen lặp lại: V-て います",
        meaning: "Ngoài nghĩa 'đang diễn ra' (Bài 14), mẫu「V-て います」còn có 2 cách dùng rất phổ biến:\n1) Trạng thái kết quả: Hành động đã xảy ra trong quá khứ, hiện tại và tương lai VẪN ĐANG DUY TRÌ kết quả đó:\n   - 結婚して います (Đã kết hôn và đang duy trì cuộc sống hôn nhân)\n   - [Địa điểm] に 住んで います (Đang sinh sống và cư trú ở đâu)\n   - 持って います (Có / sở hữu đồ vật gì)\n   - [Công ty] で 働いて います (Đang làm việc tại công ty nào)\n2) Thói quen, nghề nghiệp, tập quán: Hành động diễn ra lặp đi lặp lại thường xuyên trong thời gian dài (kinh doanh buôn bán, thói quen sinh hoạt...).",
        example: "• わたしは ハノイに 住んで います。(Tôi đang sống ở Hà Nội.)\n• 兄は 結婚して います。(Anh trai tôi đã kết hôn.)\n• 車を 持って いますか。(Bạn có ô tô không?)\n• IMCで 働いて います。(Tôi đang làm việc tại công ty IMC.)\n• スーパーで 野菜を 売って います。(Siêu thị có bán rau củ - trạng thái kinh doanh buôn bán lặp lại).",
        note: "💡 Ghi nhớ: Hành động diễn ra từ quá khứ, hiện tại và tương lai vẫn duy trì trạng thái ➔ luôn dùng「V-て います」."
      },
      {
        title: "28. [Bài 15] Phủ định đặc biệt của 'Biết': 知っています ➔ 知りません",
        meaning: "Động từ「知ります」(biết) có quy tắc khẳng định và phủ định BẤT QUY TẮC cần học thuộc lòng:\n• Khẳng định: 知って います。(Tôi biết).\n• Phủ định: 知りません。(Tôi không biết) ➔ TUYỆT ĐỐI KHÔNG DÙNG「知っていません」!",
        example: "A：ミラーさんの 電話番号を 知って いますか。(Bạn có biết số điện thoại của anh Miller không?)\nB1 (Biết): はい、知って います。(Vâng, tôi biết.)\nB2 (Không biết): いいえ、知りません。(Không, tôi không biết - TUYỆT ĐỐI KHÔNG NÓI: 知っていません).",
        note: "⚠️ LỖI SAI KINH ĐIỂN CẦN TRÁNH: Không bao giờ nói「知っていません」! Phủ định của「知っています」bắt buộc phải là「知りません」."
      },
      {
        title: "29. [Bài 16] Nối chuỗi hành động liên tiếp: V1-て、V2-て、V3",
        meaning: "Dùng thể「て」để liệt kê các hành động xảy ra tuần tự theo trình tự thời gian (hành động nào làm trước thì nói trước). Tất cả hành động đều của CÙNG MỘT CHỦ THỂ.\n• Cấu trúc: [Chủ ngữ は] + V1-て、V2-て、... V-thì của câu.\n• Các trường hợp đặc trưng:\n  1) Chuỗi thói quen sinh hoạt mỗi ngày (毎朝、毎日...): Dùng V1-て, V2-て để kể trình tự các việc làm lặp lại hàng ngày.\n  2) Hướng dẫn người khác thao tác hoặc chỉ đường: Dùng V-て để chỉ dẫn từng bước theo thứ tự.",
        example: "• [Thói quen mỗi ngày - 毎朝]: 毎朝 6時に 起きて、シャワーを 浴びて、朝ごはんを 食べます。(Mỗi sáng tôi dậy lúc 6h, tắm rồi ăn sáng).\n• [Chỉ đường / Hướng dẫn]: 信号を 右へ 曲がって、まっすぐ 行って ください。(Rẽ phải ở đèn tín hiệu rồi hãy đi thẳng).\n• [Rút tiền ATM]: ここを 押して、カードを 入れて ください。(Bấm vào đây rồi hãy đưa thẻ vào).",
        note: "💡 Trình tự thời gian: V1 làm trước ➔ làm tiếp V2 ➔ cuối cùng làm V3. Động từ cuối câu chia thì gì thì cả câu mang thì đó. Khi hướng dẫn người khác hoặc kể thói quen mỗi ngày đều dùng V-て."
      },
      {
        title: "30. [Bài 16] Sau khi làm xong V1 thì làm V2: V1-てから、V2",
        meaning: "Nhấn mạnh: Sau khi KẾT THÚC HOÀN TOÀN hành động V1 thì mới làm tiếp hành động V2 (V2 diễn ra ngay sau khi V1 hoàn tất).\n• Cấu trúc: V1-てから、V2。\n• ⚠️ QUY TẮC BẮT BUỘC: Trong 1 câu chỉ dùng「V-てから」ĐÚNG 1 LẦN (không nói V1てから、V2てから...).",
        example: "• 仕事が 終わってから、泳ぎに 行きます。(Sau khi xong công việc, tôi sẽ đi bơi.)\n• お金を 入れてから、ボタンを 押して ください。(Sau khi bỏ tiền vào, xin hãy bấm nút.)\n• 手を 洗ってから、ごはんを 食べます。(Sau khi rửa tay, tôi ăn cơm.)",
        note: "💡 Mẹo kiểm tra & dịch câu: Có thể thử đảo ngược 2 động từ và dịch nghĩa với 'sau khi...' xem có xuôi tai và hợp lý không. Nếu hành động V1 bắt buộc phải kết thúc hoàn toàn thì V2 mới xảy ra (bỏ tiền rồi mới bấm nút, rửa tay rồi mới ăn) thì chắc chắn dùng「V-てから」."
      },
      {
        title: "31. [Bài 16] Nối Tính từ & Danh từ: くて (đuôi い) & で (đuôi な / Danh từ)",
        meaning: "Dùng để liên kết 2 hay nhiều đặc điểm/tính chất của cùng một sự vật, sự việc hoặc liên kết câu:\n• Tính từ đuôi「い」: Bỏ「い」thêm「くて」(Rẻ mà ngon: 安くて おいしい).\n  (Ngoại lệ: いい ➔「よくて」).\n• Tính từ đuôi「な」: Bỏ「な」thêm「で」(Yên tĩnh và đẹp: 静かで きれい).\n• Danh từ: Thêm「で」(Là người Việt Nam và là kỹ sư: ベトナム人で、エンジニアです).\n• ⚠️ Lưu ý: Khi nối các tính từ cùng loại (cùng khen hoặc cùng chê); nếu 1 vế khen 1 vế chê (đối lập) thì dùng liên từ「が」(おいしいですが、高いです).",
        example: "• [Tính từ đuôi い - くて]:\n  - この部屋は 広くて、明るいです。(Căn phòng này vừa rộng vừa sáng sủa.)\n  - ミラーさんは 若くて、親切です。(Anh Miller vừa trẻ vừa tốt bụng.)\n  - 天気が よくて、気持ちがいいです。(Thời tiết đẹp và dễ chịu - いい ➔ よくて).\n• [Tính từ đuôi な - で]:\n  - サントスさんは 親切で、面白いです。(Anh Santos tốt bụng và thú vị.)\n• [Danh từ - で]:\n  - ナムさんは 28歳で、独身です。(Anh Nam 28 tuổi và còn độc thân).",
        note: "💡 Công thức vàng: Đuôi い ➔ bỏ い + くて; Đuôi な ➔ thêm で; Danh từ ➔ thêm で."
      },
      {
        title: "32. [Bài 16] Miêu tả đặc điểm: A は B が [Tính từ] & Phân biệt với So sánh nhất",
        meaning: "Dùng để miêu tả đối tượng A có đặc điểm/thuộc tính B như thế nào (B thường là một bộ phận cơ thể hoặc một thuộc tính của A):\n• Cấu trúc: A は B が [Tính từ] です。(A thì B [tính từ]).\n\n📌 SO SÁNH & PHÂN BIỆT 2 MẪU CÂU DỄ NHẦM:\n1) Mẫu miêu tả đặc điểm:「A は B が [Tính từ] です」\n   ➔ Chủ thể A đi với「は」; bộ phận/thuộc tính B đi với「が」.\n2) Mẫu so sánh nhất (Bài 12):「S (の中) で [Đối tượng] が いちばん [Tính từ] です」\n   ➔ Tập hợp cha S đi với「で」; đối tượng so sánh đi với「が」.\n\n⚡ ĐIỂM GIỐNG & KHÁC NHAU:\n• Giống nhau: Vế sau đều dùng trợ từ「が」(B が tính từ / Đối tượng が いちばん tính từ).\n• Khác nhau ở vế đầu: Miêu tả đặc điểm của đối tượng thì dùng「は」(A は); còn so sánh trong một nhóm/tập hợp thì dùng「で」(S の中で).",
        example: "• [Miêu tả đặc điểm - A は B が Tính từ]:\n  - 象は 鼻が 長いです。(Con voi thì mũi dài - A = con voi, B = mũi).\n  - マリアさんは 髪が 長くて、きれいです。(Bạn Maria thì tóc dài và đẹp).\n  - 大阪は 食べ物が おいしいです。(Osaka thì đồ ăn rất ngon).\n• [So sánh nhất - S で Đối tượng が いちばん]:\n  - 動物の中で 象が いちばん 大きいです。(Trong các loài động vật thì voi là to nhất - S = động vật, dùng で).",
        note: "💡 Khẩu quyết: Miêu tả đặc điểm ➔「A は B が Tính từ」; So sánh trong nhóm ➔「S で Đối tượng が いちばん」. Vế sau đều là が, vế đầu khác nhau giữa は và で!"
      },
      {
        title: "33. [Bài 17] Quy tắc chia thể phủ định「ない」(V-ない)",
        meaning: "Quy tắc biến đổi động từ sang thể phủ định ngắn「ない」:\n\n1. NHÓM 1: Chuyển âm cột「い」đứng trước ます thành âm cột「あ」+「ない」:\n• かき・ます ➔ かか・ない (書かない)\n• のみ・ます ➔ のま・ない (飲まない)\n• まち・ます ➔ また・ない (待たない)\n• ★ ĐẶC BIỆT NHÓM 1: Động từ có nguyên âm「い」đứng trước ます (đuôi います) ➔ chuyển thành「わ」+「ない」(わない):\n  - かい・ます (買います) ➔ かわ・ない (買わない)\n  - あい・ます (会います) ➔ あわ・ない (会わない)\n  - すい・ます (吸います) ➔ すわ・ない (吸わない)\n  - いい・ます (言います) ➔ いわ・ない (言わない)\n• (Ngoại lệ riêng: あります ➔ ない).\n\n2. NHÓM 2: Bỏ「ます」thêm「ない」:\n• たべます ➔ たべない, みます ➔ みない, おきます ➔ おきない.\n\n3. NHÓM 3: Bất quy tắc học thuộc lòng:\n• します ➔ しない (勉強します ➔ 勉強しない)\n• 来（き）ます ➔ こない (★ ĐẶC BIỆT: đọc là 'ko-nai', chữ 来 đọc thành こ).\n\n⚡ CHỐT 2 TỪ ĐẶC BIỆT CỦA THỂ NÀY:\n1) Đuôi nguyên âm い nhóm 1 (います) ➔ chuyển thành「わない」(買わない, 会わない).\n2) 来ます (きます) ➔ chuyển thành「こない」.",
        example: "• [Cột い ➔ cột あ + ない]: 行きます ➔ 行かない; 読みます ➔ 読まない; 話します ➔ 話さない\n• [Đuôi い ➔ わ + ない]: 買います ➔ 買わない; 会います ➔ 会わない; 吸います ➔ 吸わない\n• [Nhóm 2]: 食べます ➔ 食べない; 見ます ➔ 見ない; 寝ます ➔ 寝ない\n• [Nhóm 3]: 散歩します ➔ 散歩しない; 来ます ➔ こない",
        note: "💡 Thần chú thể ない: Nhóm 1 đổi 'i sang a + nai' (riêng đuôi nguyên âm 'i' đổi thành 'wa + nai'); Nhóm 2 bỏ masu thêm nai; Nhóm 3 'shimasu ➔ shinai', 'kimasu ➔ konai'."
      },
      {
        title: "34. [Bài 17] Yêu cầu / Khuyên ngăn: V-ないで ください (Đừng làm gì)",
        meaning: "Dùng để yêu cầu hoặc khuyên bảo đối phương ĐỪNG LÀM / KHÔNG ĐƯỢC LÀM một việc gì đó (sắc thái lịch sự, ngược nghĩa trực tiếp với「V-て ください」: hãy làm gì).\n• Cấu trúc: [Động từ thể ない] + で ください。(Xin đừng làm V).",
        example: "• ここで 写真を 撮らないで ください。(Xin đừng chụp ảnh ở đây - ngược với 撮ってください).\n• タバコを 吸わないで ください。(Xin đừng hút thuốc).\n• パスワードを 忘れないで ください。(Xin đừng quên mật khẩu).\n• 無理を しないで ください。(Xin đừng làm việc quá sức).",
        note: "💡 Cặp đối lập cơ bản:「V-て ください」(Hãy làm...) ⮂「V-ないで ください」(Đừng làm...)."
      },
      {
        title: "35. [Bài 17] Không cần làm gì: V-なくても いいです",
        meaning: "Dùng để biểu thị một hành động KHÔNG CẦN THIẾT PHẢI LÀM, không làm cũng chẳng sao (ngược nghĩa trực tiếp với「V-ても いいです」: được phép làm gì).\n• Cấu trúc: [Động từ thể ない bỏ「い」] + くても いいです。(Không cần làm V cũng được).",
        example: "• 明日 来なくても いいです。(Ngày mai bạn không cần đến cũng được - ngược với 来てもいいです).\n• 靴を 脱がなくても いいです。(Không cần cởi giày cũng được).\n• 今日 お金を 払わなくても いいです。(Hôm nay không cần trả tiền cũng được).",
        note: "💡 Công thức: Thể ない bỏ い + くても いいです (Không cần làm gì, ngược với V-てもいいです)."
      },
      {
        title: "36. [Bài 17] Bắt buộc phải làm: V-なければ なりません",
        meaning: "Diễn tả một hành động BẮT BUỘC PHẢI LÀM, là nghĩa vụ hoặc bổn phận cần thực hiện (mang nghĩa 'Phải làm gì').\n• Cấu trúc: [Động từ thể ない bỏ「い」] + ければ なりません。(Phải làm V).\n• ⚠️ Chú ý: Phân biệt rõ ràng với「V-ては いけません」(Cấm / Không được làm gì).",
        example: "• 毎日 薬を 飲まなければ なりません。(Mỗi ngày tôi phải uống thuốc).\n• 今晩 勉強しなければ なりません。(Tối nay tôi phải học bài).\n• パスポートを 見せなければ なりません。(Phải xuất trình hộ chiếu).",
        note: "💡 Công thức: Thể ない bỏ い + ければなりません = Phải làm gì (nghĩa vụ bắt buộc)."
      },
      {
        title: "37. [Bài 17] 📌 Tổng kết thể ない, Hạn chót「までに」& Đưa tân ngữ làm chủ đề",
        meaning: "1) BỘ 3 MẪU CÂU CỐT LÕI THỂ「ない」:\n  • V-ないで ください : Đừng làm gì (khuyên ngăn/yêu cầu).\n  • V-なくても いいです : Không cần làm gì (không có nghĩa vụ).\n  • V-なければ なりません : Phải làm gì (nghĩa vụ bắt buộc).\n\n2) HẠN CHÓT「までに」(Trước thời hạn):\n  • Cấu trúc: [Mốc thời gian / Hạn chót] + までに + Động từ.\n  • Biểu thị hành động phải được hoàn tất TRƯỚC mốc thời gian đó (Phân biệt với「まで」nghĩa là làm liên tục cho tới khi).\n\n3) ĐƯA TÂN NGỮ LÊN LÀM CHỦ ĐỀ CỦA CÂU:\n  • Khi muốn nhấn mạnh tân ngữ của câu, ta chuyển trợ từ「を」thành「は」và đưa tân ngữ ra đầu câu làm chủ đề.",
        example: "• [Hạn chót までに]:\n  - 金曜日までに レポートを 出さなければ なりません。(Phải nộp báo cáo trước thứ Sáu).\n  - 5時までに 帰らなければ なりません。(Phải về trước 5 giờ).\n• [Đưa tân ngữ lên làm chủ đề]:\n  - Câu gốc: ここに 荷物を 置かないで ください。\n  ➔ Đưa tân ngữ lên đầu: 荷物は ここに 置かないで ください。(Hành lý thì xin đừng đặt ở đây).\n  - Câu gốc: 薬を 飲まなければ なりません。\n  ➔ Đưa tân ngữ lên đầu: 薬は 毎日 飲まなければ なりません。(Thuốc thì mỗi ngày đều phải uống).",
        note: "⚡ Ghi nhớ nhanh:\n• ないで ください = Đừng làm.\n• なくても いいです = Không cần làm.\n• なければ なりません = Phải làm.\n• までに = Trước thời hạn.\n• Chuyển を ➔ は để đưa vật lên làm chủ đề."
      },
      {
        title: "38. [Bài 18] Quy tắc chia thể từ điển「辞書形」(V-る)",
        meaning: "Thể từ điển (辞書形 - Jishokei) là thể nguyên mẫu của động từ trong từ điển:\n\n1. NHÓM 1: Thay âm cột「い」đứng trước ます bằng âm cột「う」tương ứng:\n• かき・ます ➔ かく (書く)\n• のみ・ます ➔ のむ (飲む)\n• かい・ます ➔ かう (買う)\n• まち・ます ➔ まつ (待つ)\n• はなし・ます ➔ はなす (話す)\n• とり・ます ➔ とる (取る)\n\n2. NHÓM 2: Bỏ「ます」thêm「る」:\n• たべます ➔ たべる, みます ➔ みる, おきます ➔ おきる.\n\n3. NHÓM 3: Bất quy tắc học thuộc lòng (chỉ có 2 từ):\n• 来（き）ます ➔ くる (★ ĐẶC BIỆT: chữ 来 đọc thành くる)\n• します ➔ する (N + します ➔ N する, ví dụ: 勉強する, 散歩する).\n\n⚡ CHỐT THỂ TỪ ĐIỂN: Chỉ có đúng 2 từ đặc biệt nhóm 3:「来ます ➔ くる」và「します ➔ する」, còn lại tất cả đều tuân theo quy tắc cột「う」(nhóm 1) và thêm「る」(nhóm 2).",
        example: "• Nhóm 1: 行く (いき), 読む (よみ), 泳ぐ (およぎ), 遊ぶ (あそび)\n• Nhóm 2: 食べる (たべ), 寝る (ね), 見る (み), 借りる (かり)\n• Nhóm 3: する, くる (来る), 勉強する",
        note: "💡 Thần chú thể từ điển: Nhóm 1 đổi 'i sang u'; Nhóm 2 bỏ masu thêm 'ru'; Nhóm 3 'kuru' & 'suru'."
      },
      {
        title: "39. [Bài 18] Diễn tả khả năng: [N] / [V-る こと] が できます",
        meaning: "Dùng để diễn tả năng lực, khả năng của bản thân hoặc điều kiện cho phép có thể làm được việc gì:\n• Cấu trúc: [Danh từ] / [V-る こと] が できます。(Có thể làm gì / Biết làm gì).\n• 💡 Bản chất danh từ hóa: Động từ không thể trực tiếp đi trước が できます, nên ta thêm「こと」(việc/chuyện) vào sau động từ thể từ điển:「V-る + こと」➔ biến cả cụm động từ thành một cụm danh từ tương đương.",
        example: "• わたしは ピアノを 弾く ことが できます。(Tôi có thể chơi piano).\n• 日本語を 話す ことが できます。(Tôi có thể nói tiếng Nhật).\n• 車の 運転が できます。(Tôi biết lái xe ô tô - 運転 là danh từ).\n• ここで カードで 払う ことが できますか。(Ở đây có thể thanh toán bằng thẻ được không?).",
        note: "💡 Danh từ hóa động từ: V-る + こと = 'việc làm V'. Cấu trúc diễn tả khả năng luôn là: [V-る こと] が できます."
      },
      {
        title: "40. [Bài 18] Diễn tả sở thích: わたしの趣味は [N] / [V-る こと] です",
        meaning: "Dùng để giới thiệu về sở thích chung của bản thân:\n• Cấu trúc: わたしの 趣味は [Danh từ] / [V-る こと] です。(Sở thích của tôi là việc...).\n• Bản chất vẫn là danh từ hóa động từ bằng「V-る + こと」vì sau trợ từ は và trước です phải là một danh từ.",
        example: "• わたしの 趣味は 写真を 撮る ことです。(Sở thích của tôi là chụp ảnh).\n• わたしの 趣味は 音楽を 聞く ことです。(Sở thích của tôi là nghe nhạc).\n• わたしの 趣味は スポーツです。(Sở thích của tôi là thể thao - スポーツ là danh từ).",
        note: "💡 Không nói: 趣味は 写真を 撮ります (sai); Bắt buộc phải danh từ hóa: 趣味は 写真を 撮る ことです."
      },
      {
        title: "41. [Bài 18] Trước khi làm V1 thì làm V2: [V-る / Nの / Thời gian] 前に、V2",
        meaning: "Diễn tả hành động V2 được thực hiện trước một hành động V1, trước sự việc N hoặc trước một mốc thời gian.\n• Cấu trúc: [V1-る / Nの / Khoảng thời gian] + 前に、V2。\n• ⚠️ LÝ DO V1 LUÔN Ở THỂ TỪ ĐIỂN「V-る」: Vì hành động V2 luôn luôn được thực hiện và hoàn thành TRƯỚC hành động V1, cho dù cả câu có chia ở thời quá khứ thì V1 vẫn giữ nguyên thể từ điển V-る!\n• 3 dạng đứng trước「前に」:\n  1) Động từ: V-る + 前に (V-る まえに)\n  2) Danh từ: N + の + 前に (N の まえに)\n  3) Khoảng thời gian: [Thời gian] + 前に (KHÔNG CÓ の, ví dụ: 1年前、1時間前).",
        example: "• [V-る + 前に]:\n  - 日本へ 来る 前に、日本語を 勉強しました。(Trước khi đến Nhật, tôi đã học tiếng Nhật - 来る luôn ở thể V-る).\n  - 寝る 前に、本を 読みます。(Trước khi đi ngủ, tôi đọc sách).\n• [N + の + 前に]:\n  - 食事の 前に、手を 洗います。(Trước bữa ăn, hãy rửa tay).\n• [Thời gian + 前に - Không có の]:\n  - 田中さんは 1時間 前に、出かけました。(Anh Tanaka đã ra ngoài cách đây 1 tiếng).\n  - 3年 前に、大学を 卒業しました。(Tôi đã tốt nghiệp đại học 3 năm trước).",
        note: "💡 Khẩu quyết: Trước「前に」luôn là V-る (dù câu ở quá khứ); Danh từ phải có「の」; Số từ thời gian KHÔNG có「の」."
      },
      {
        title: "42. [Bài 19] Quy tắc chia thể quá khứ「た」(V-た)",
        meaning: "Quy tắc biến đổi động từ sang thể「た」GIỐNG HỆT NHƯ THỂ「て」, chỉ cần:\n• Đổi「て」➔「た」\n• Đổi「で」➔「だ」\n\n1. NHÓM 1:\n• い, ち, り ➔ った : 買った (mua), 待った (chờ), 帰った (về)\n• み, び, に ➔ んだ : 飲んだ (uống), 遊んだ (chơi), 死んだ (chết)\n• き ➔ いた : 書いた (viết), 聞いた (nghe)\n• ぎ ➔ いだ : 急いだ (vội), 泳いだ (bơi)\n• し ➔ した : 話した (nói), 貸した (cho mượn)\n• ★ ĐẶC BIỆT DUY NHẤT: 行きます ➔ 行った (いった).\n\n2. NHÓM 2: Bỏ「ます」thêm「た」:\n• 食べた (ăn), 見た (nhìn), 起きた (dậy).\n\n3. NHÓM 3: Bất quy tắc:\n• します ➔ した (勉強した)\n• 来（き）ます ➔ 来た (きた)",
        example: "• 飲みました ➔ 飲んだ; 食べました ➔ 食べた; 勉強しました ➔ 勉強した; 来ました ➔ 来た",
        note: "💡 Đã thuộc thể て là thuộc luôn thể た! Chỉ cần đổi て ➔ た, で ➔ だ."
      },
      {
        title: "43. [Bài 19] Trải nghiệm, đã từng làm gì: V-た ことが あります",
        meaning: "Dùng để diễn tả một trải nghiệm, kinh nghiệm trong quá khứ: 'Đã từng làm việc gì' hoặc 'Chưa từng làm việc gì bao giờ'.\n• Khẳng định: V-た ことが あります。(Đã từng làm V).\n• Phủ định: V-た ことが ありません。(Chưa từng làm V bao giờ).\n• Nghi vấn: V-た ことが ありますか。(Đã từng làm V bao giờ chưa?).\n• 💡 Bản chất danh từ hóa:「V-た + こと」(việc đã làm trong quá khứ).",
        example: "• わたしは 富士山に 登った ことが あります。(Tôi đã từng leo núi Phú Sĩ).\n• 日本料理を 食べた ことが ありますか。(Bạn đã từng ăn món ăn Nhật bao giờ chưa?)\n  ➔ いいえ、一度も 食べた ことが ありません。(Chưa, tôi chưa từng ăn một lần nào cả).\n• 馬に 乗った ことが あります。(Tôi đã từng cưỡi ngựa).",
        note: "💡 Phân biệt:「V-ました」(hành động đơn thuần xảy ra trong quá khứ) khác với「V-た ことが あります」(nhấn mạnh TRẢI NGHIỆM / KINH NGHIỆM trong đời)."
      },
      {
        title: "44. [Bài 19] Liệt kê hành động tiêu biểu: V1-たり、V2-たり します",
        meaning: "Dùng để liệt kê một vài hành động tiêu biểu, đại diện trong số nhiều hành động (lúc thì làm việc này, lúc thì làm việc kia; không theo trình tự thời gian).\n• Cấu trúc: [V1 thể た + り]、[V2 thể た + り] + します／しました。\n• Thì của cả câu (hiện tại hay quá khứ) do động từ「します／しました」ở cuối câu quyết định.\n• 💡 Phân biệt với thể「V1-て、V2-て」: Thể て kể các hành động liên tiếp theo đúng thứ tự thời gian; còn「たり～たり」chỉ nêu vài việc tiêu biểu không kể hết và không theo thứ tự.",
        example: "• 日曜日は テニスを したり、映画を 見たり します。(Chủ nhật tôi lúc thì chơi tennis, lúc thì xem phim).\n• きのうは 買い物を したり、部屋を 掃除したり しました。(Hôm qua tôi đi mua sắm, dọn dẹp phòng...).\n• 休みの日は 本を 読んだり、音楽を 聞いたり して います。(Ngày nghỉ tôi đọc sách, nghe nhạc...).",
        note: "💡 Công thức: Thể た thêm り (V-たり、V-たり します). Nêu việc đại diện, không cần theo thứ tự."
      },
      {
        title: "45. [Bài 19] Biến đổi trạng thái: くなります & になります (Trở nên, trở thành)",
        meaning: "Dùng để diễn tả sự THAY ĐỔI / BIẾN ĐỔI về tính chất, trạng thái hoặc nghề nghiệp, tuổi tác ('trở nên...', 'trở thành...'):\n1) Tính từ đuôi「い」: Bỏ「い」+「くなります」\n   - さむい ➔ さむく なります (trở nên lạnh)\n   - いい ➔ よく なります (trở nên tốt)\n2) Tính từ đuôi「な」: Bỏ「な」+「になります」\n   - げんき (な) ➔ げんきに なります (trở nên khỏe mạnh)\n   - きれい (な) ➔ きれいに なります (trở nên xinh đẹp)\n3) Danh từ: +「になります」\n   - 20さい ➔ 20さいに なります (tròn 20 tuổi)\n   - せんせい ➔ せんせいに なります (trở thành giáo viên).",
        example: "• [Tính từ đuôi い]:\n  - 寒く なりましたね。(Trời đã trở nên lạnh rồi nhỉ).\n  - 髪を 短く しました。(Tôi đã cắt tóc ngắn lại).\n• [Tính từ đuôi な]:\n  - 日本語が 上手に なりました。(Tiếng Nhật đã trở nên giỏi hơn).\n• [Danh từ]:\n  - 春に なると、桜が 咲きます。(Khi trời sang xuân, hoa anh đào sẽ nở).\n  - 来年 30歳に なります。(Năm sau tôi tròn 30 tuổi).",
        note: "💡 Khẩu quyết biến đổi trạng thái: Đuôi い ➔ くなります; Đuôi な & Danh từ ➔ になります."
      },
      {
        title: "46. [Bài 20] Thể thông thường (普通形) vs Thể lịch sự (丁寧形)",
        meaning: "• Thể lịch sự (丁寧形 - Teineikei): Đuôi câu là「です／ます」, dùng khi nói chuyện với người lớn tuổi, cấp trên, người mới gặp, khách hàng hoặc trong bối cảnh trang trọng.\n• Thể thông thường (普通形 - Futsūkei): Dùng khi nói chuyện với bạn bè thân thiết, người thân trong gia đình, người dưới tuổi/cấp bậc, hoặc dùng trong văn viết (nhật ký, báo chí) và là NỀN TẢNG để ghép vào các cấu trúc ngữ pháp nâng cao từ Bài 21 trở đi.\n• Thể thông thường áp dụng cho cả 4 từ loại: Động từ, Tính từ đuôi い, Tính từ đuôi な, và Danh từ.",
        example: "• [Động từ]: 食べます ➔ 食べる; 行きません ➔ 行かない; 飲みました ➔ 飲んだ\n• [Tính từ-い]: 暑いです ➔ 暑い; 寒くないです ➔ 寒くない\n• [Tính từ-な]: 暇です ➔ 暇だ; 元気じゃありません ➔ 元気じゃない\n• [Danh từ]: 雨です ➔ 雨だ; 日曜日でした ➔ 日曜日だった",
        note: "💡 Thể thông thường là nền tảng cốt lõi của tiếng Nhật sơ cấp (Bài 20 ➔ Bài 25 và toàn bộ trình độ N4/N3)."
      },
      {
        title: "47. [Bài 20] Động từ thể thông thường: Từ điển (+), ない (-), た (+qk), なかった (-qk)",
        meaning: "Động từ ở thể thông thường chỉ cần vận dụng các thể đã học ở Bài 14, 17, 18, 19:\n1) Khẳng định hiện tại (+) [V-ます] ➔ Thể từ điển:「V-る」\n2) Phủ định hiện tại (-) [V-ません] ➔ Thể phủ định:「V-ない」\n3) Khẳng định quá khứ (+ qk) [V-ました] ➔ Thể quá khứ:「V-た」\n4) Phủ định quá khứ (- qk) [V-ませんでした] ➔「V-なかった」(Chia như tính từ đuôi い: bỏ い thêm かった).\n\n⚡ BẢNG CHIA 3 NHÓM ĐỘNG TỪ:\n• [Nhóm 1]:\n  - 書く (viết) ⮂ 書かない ⮂ 書いた ⮂ 書かなかった\n  - 買う (mua) ⮂ 買わない ⮂ 買った ⮂ 買わなかった\n  - 待つ (chờ) ⮂ 待たない ⮂ 待った ⮂ 待たなかった\n• [Nhóm 2]:\n  - 食べる (ăn) ⮂ 食べない ⮂ 食べた ⮂ 食べなかった\n  - 見る (nhìn) ⮂ 見ない ⮂ 見た ⮂ 見なかった\n• [Nhóm 3]:\n  - する (làm) ⮂ しない ⮂ した ⮂ しなかった\n  - くる (đến) ⮂ こない ⮂ きた (来た) ⮂ こなかった",
        example: "• 明日 東京へ 行く。(Ngày mai tôi đi Tokyo - 行きます ➔ 行く)\n• 何も 食べなかった。(Tôi đã không ăn gì cả - 食べませんでした ➔ 食べなかった)\n• もう 宿題を した？ (Đã làm bài tập chưa? - しましたか ➔ した？)\n• きのうは 誰とも 話さなかった。(Hôm qua tôi chẳng nói chuyện với ai cả).",
        note: "💡 Công thức động từ thể thông thường: (+) = V-る; (-) = V-ない; (+qk) = V-た; (-qk) = V-なかった."
      },
      {
        title: "48. [Bài 20] Tính từ đuôi「い」thể thông thường: Chỉ cần bỏ「です」",
        meaning: "Tính từ đuôi「い」ở thể thông thường CỰC KỲ ĐƠN GIẢN: Chỉ cần LƯỢC BỎ「です」, giữ nguyên đuôi chia:\n1) Khẳng định hiện tại (+): [Tính từ-い] + です ➔ Bỏ です (giữ nguyên đuôi「い」)\n2) Phủ định hiện tại (-): [Tính từ-くない] + です ➔ Bỏ です (đuôi「くない」)\n3) Khẳng định quá khứ (+ qk): [Tính từ-かった] + です ➔ Bỏ です (đuôi「かった」)\n4) Phủ định quá khứ (- qk): [Tính từ-くなかった] + です ➔ Bỏ です (đuôi「くなかった」)\n\n★ NGOẠI LỆ TỪ「いい」(Tốt):\n• いい ➔ よく ない ➔ よかった ➔ よく なかった (chỉ cần bỏ です).",
        example: "• 暑い (Nóng - 暑いです ➔ 暑い)\n• 暑くない (Không nóng - 暑くないです ➔ 暑くない)\n• 暑かった (Đã nóng - 暑かったです ➔ 暑かった)\n• 暑くなかった (Đã không nóng - 暑くなかったです ➔ 暑くなかった)\n• その 映画、すごく よかった！(Bộ phim đó đã cực kỳ hay! - よかったです ➔ よかった)",
        note: "💡 Khẩu quyết: Tính từ đuôi い ở thể thông thường chỉ cần BỎ「です」, cách biến đổi đuôi giữ nguyên 100%."
      },
      {
        title: "49. [Bài 20] Danh từ / Tính từ đuôi「な」: だ (+), じゃない (-), だった (+qk), じゃなかった (-qk)",
        meaning: "Danh từ và Tính từ đuôi「な」chia thể thông thường HOÀN TOÀN GIỐNG HỆT NHAU:\n1) Khẳng định hiện tại (+): Thay「です」bằng「だ」\n   ➔ N / [Tính từ-な] + だ\n2) Phủ định hiện tại (-): Thay「じゃありません」bằng「じゃない」(hoặc ではない)\n   ➔ N / [Tính từ-な] + じゃない\n3) Khẳng định quá khứ (+ qk): Thay「でした」bằng「だった」\n   ➔ N / [Tính từ-な] + だった\n4) Phủ định quá khứ (- qk): Thay「じゃありませんでした」bằng「じゃなかった」(hoặc ではなかった)\n   ➔ N / [Tính từ-な] + じゃなかった",
        example: "• [Tính từ đuôi な - 暇 (rảnh)]: 暇だ ⮂ 暇じゃない ⮂ 暇だった ⮂ 暇じゃなかった\n• [Tính từ đuôi な - 親切 (tốt bụng)]: 親切だ ⮂ 親切じゃない ⮂ 親切だった ⮂ 親切じゃなかった\n• [Danh từ - 雨 (mưa)]: 雨だ ⮂ 雨じゃない ⮂ 雨だった ⮂ 雨じゃなかった\n• [Danh từ - 休み (nghỉ)]: 明日は 休みだ。(Ngày mai là ngày nghỉ).\n• きのうは 試験で、すごく 大変だった。(Hôm qua có kỳ thi, đã vất vả ghê).",
        note: "💡 Khẩu quyết: Danh từ và Tính từ đuôi な ➔ Hiện tại: だ / じゃない; Quá khứ: だった / じゃなかった."
      },
      {
        title: "50. [Bài 20] 📌 Đặc trưng hội thoại ở thể thông thường (Văn nói hàng ngày)",
        meaning: "Trong giao tiếp thân mật hàng ngày, thể thông thường có các quy tắc đặc trưng sau:\n1) CÂU HỎI: BỎ「か」và LÊN GIỌNG ở cuối câu (dấu chấm hỏi ❓).\n   • Với Danh từ / Tính từ-な: LƯỢC BỎ LUÔN「だ」(không nói 暇だ？ mà nói: 暇？ - lên giọng).\n   • Câu trả lời: Đồng ý dùng「うん」, không đồng ý dùng「ううん」.\n2) LƯỢC BỎ TRỢ TỪ: Các trợ từ như「は」,「が」,「を」thường được lược bỏ nếu nghĩa câu vẫn rõ ràng:\n   • ごはん(を) 食べる？ ➔ うん、食べる。\n   • これ(は) おいしい？ ➔ うん、おいしい。\n3) RÚT GỌN「V-ている」➔「V-てる」:\n   • 知っている ➔ 知ってる (Biết)\n   • 持っている ➔ 持ってる (Có/mang)\n   • 読んでいる ➔ 読んでる (Đang đọc)\n4) LIÊN TỪ NỐI: Dùng「けど」(nhưng) thay cho「が」:\n   • 時間が ないけど、手伝うよ。(Không có thời gian nhưng tôi sẽ giúp nhé).",
        example: "• A：明日 暇？ (Mai rảnh không? - bỏ だ và か, lên giọng)\n  B：うん、暇。(Ừ, rảnh) ／ ううん、暇じゃない。(Không, không rảnh).\n• A：コーヒー(を) 飲む？ (Uống cà phê không?)\n  B：うん、飲む。(Ừ, uống).\n• ミラーさんの 電話番号、知ってる？ (Có biết số điện thoại của Miller không? - 知っている ➔ 知ってる)\n  ➔ ううん、知らない。(Không, không biết).",
        note: "⚡ Tóm gọn khẩu quyết văn nói thân mật:\n• Câu hỏi bỏ「か」lên giọng; N / đuôi な bỏ luôn「だ」.\n• Có = うん, Không = ううん.\n• Bỏ trợ từ を/は/が khi rõ nghĩa; V-ている ➔ V-てる; thay が ➔ けど."
      },
      {
        title: "51. [Bài 21] Phỏng đoán & Ý kiến: [Thể thông thường] + と 思います",
        meaning: "Dùng để bày tỏ ý kiến, quan điểm hoặc phỏng đoán của bản thân về một sự việc nào đó ('Tôi nghĩ là...').\n• Cấu trúc: [Mệnh đề thể thông thường (普通形)] + と 思います。\n  - Động từ: V-る / V-ない / V-た / V-なかった + と 思います。\n  - Tính từ-い: A-い / A-くない / A-かった / A-くなかった + と 思います。\n  - Tính từ-な: [Tính từ-な] + だ / じゃない / だった / じゃなかった + と 思います。\n  - Danh từ: N + だ / じゃない / だった / じゃなかった + と 思います。\n• 💡 Mẹo dịch câu: Cứ dịch mệnh đề trước「と」như một câu hoàn chỉnh bình thường, rồi ghép thêm 'tôi nghĩ là...' ở cuối.\n• ⚠️ Chú ý câu phủ định: Khi muốn bày tỏ ý nghĩ 'Tôi nghĩ là không...', người Nhật thường phủ định ở mệnh đề trước: [V-ない / じゃない] + と 思います (ví dụ: 明日は 雨が 降らないと 思います - Tôi nghĩ mai sẽ không mưa).",
        example: "• 明日は 雨が 降ると 思います。(Tôi nghĩ ngày mai trời sẽ mưa).\n• 日本は 物価が 高いと 思います。(Tôi nghĩ giá cả ở Nhật Bản đắt đỏ).\n• ミラーさんは もう うちへ 帰ったと 思います。(Tôi nghĩ anh Miller đã về nhà rồi).\n• 明日は 暇じゃないと 思います。(Tôi nghĩ ngày mai anh ấy không rảnh).",
        note: "💡 Trước「と 思います」bắt buộc phải là THỂ THÔNG THƯỜNG (kể cả Danh từ và Tính từ-な phải có「だ」: 暇だと 思います, 雨だと 思います)."
      },
      {
        title: "52. [Bài 21] Hỏi ý kiến: N + について どう 思いますか (Không có「と」)",
        meaning: "Dùng khi muốn hỏi đối phương có suy nghĩ, nhận định hoặc đánh giá như thế nào về một người, sự vật hoặc vấn đề N nào đó ('Bạn nghĩ thế nào về N?').\n• Cấu trúc: [Danh từ N] + について どう 思いますか。\n• ⚠️ LƯU Ý ĐẶC BIỆT CỰC KỲ QUAN TRỌNG: Trước「どう」KHÔNG DÙNG trợ từ「と」(không nói どうと思いますか mà nói thẳng là どう 思いますか).",
        example: "• 日本の生活について どう 思いますか。(Bạn nghĩ thế nào về cuộc sống ở Nhật?)\n  ➔ 便利ですが、物価が 高いと 思います。(Tôi nghĩ tiện lợi nhưng vật giá đắt đỏ).\n• 新しい 首相について どう 思いますか。(Bạn nghĩ thế nào về thủ tướng mới?)\n• この 計画について どう 思いますか。(Bạn nghĩ thế nào về kế hoạch này?)",
        note: "⚠️ Nhớ quy tắc: Khi trả lời「～と 思います」thì có「と」; nhưng khi hỏi「どう 思いますか」thì TUYỆT ĐỐI KHÔNG CÓ「と」."
      },
      {
        title: "53. [Bài 21] Trích dẫn câu nói: [Thể thông thường] + と 言います / 言いました",
        meaning: "Dùng để truyền đạt, trích dẫn lại lời ai đó đã nói ('Nói rằng...', 'Đã nói là...'):\n1) Trích dẫn TRỰC TIẾP (nguyên văn câu nói của người khác đặt trong dấu ngoặc vuông「...」):\n   • Cấu trúc:「Câu nói nguyên văn」+ と 言いました。\n   • Giữ nguyên thể lịch sự hay câu chào hỏi của người nói.\n2) Trích dẫn GIÁN TIẾP (thuật lại ý của người khác theo lời của mình):\n   • Cấu trúc: [Mệnh đề thể thông thường] + と 言いました。\n   • Toàn bộ câu nói trước「と」phải được chuyển về THỂ THÔNG THƯỜNG.",
        example: "• [Trực tiếp]: 寝る前に、「お休みなさい」と 言います。(Trước khi đi ngủ, ta nói 'Chúc ngủ ngon').\n• [Trực tiếp]: ミラーさんは「来週 東京へ 行きます」と 言いました。(Anh Miller đã nói: 'Tuần sau tôi sẽ đi Tokyo').\n• [Gián tiếp]: ミラーさんは 来週 東京へ 行くと 言いました。(Anh Miller đã nói rằng tuần sau anh ấy sẽ đi Tokyo - 行きます ➔ 行く).\n• [Gián tiếp]: 田中さんは 明日は 休みだと 言いました。(Anh Tanaka nói rằng ngày mai anh ấy nghỉ - 休みです ➔ 休みだ).",
        note: "💡 Trích dẫn trực tiếp để trong ngoặc「...」; trích dẫn gián tiếp bắt buộc chuyển câu về THỂ THÔNG THƯỜNG rồi thêm「と 言いました」."
      },
      {
        title: "54. [Bài 21] Sự kiện diễn ra ở đâu: N1 (Địa điểm) で N2 (Sự kiện) が あります",
        meaning: "Diễn tả một sự kiện, hoạt động, biến cố được tổ chức hoặc xảy ra tại một địa điểm nào đó ('Ở N1 diễn ra / tổ chức N2').\n• Cấu trúc: [N1: Địa điểm] で + [N2: Sự kiện] が あります。\n• 💡 Mẹo nhớ danh từ sự kiện (Danh từ động): N2 là các danh từ chỉ sự kiện có tính chất diễn ra trong thời gian nhất định như:\n  - パーティー (tiệc), お祭り (lễ hội), 会議 (cuộc họp), 試合 (trận đấu), コンサート (hòa nhạc), 事故 (tai nạn), 地震 (động đất)...\n• ⚠️ PHÂN BIỆT TRỢ TỪ「で」VÀ「に」VỚI あります:\n  - Bài 10 (Có đồ vật cố định, tĩnh): [Địa điểm] に [Vật] が あります。(机の上に 本があります).\n  - Bài 21 (Diễn ra sự kiện, động): [Địa điểm] で [Sự kiện] が あります。(東京で コンサートがあります).",
        example: "• 明日 神戸で パーティーが あります。(Ngày mai ở Kobe có tổ chức bữa tiệc - パーティー là sự kiện, dùng で).\n• 東京ドームで 野球の 試合が あります。(Ở Tokyo Dome có trận đấu bóng chày).\n• 昨日 駅前で 交通事故が ありました。(Hôm qua trước nhà ga đã xảy ra vụ tai nạn giao thông).",
        note: "💡 Khẩu quyết: Sự vật tĩnh ở đâu dùng「に あります」; Sự kiện diễn ra/tổ chức ở đâu dùng「で あります」."
      },
      {
        title: "55. [Bài 21] Phỏng đoán & Tìm sự đồng tình: ～でしょう (Có lẽ / ... đúng không?)",
        meaning: "Dùng khi phỏng đoán hoặc muốn xác nhận, tìm kiếm sự đồng tình từ phía người nghe:\n• Cấu trúc: [Thể thông thường (bỏ だ với N và Tính từ-な)] + でしょう。\n  - Động từ: V-thông thường + でしょう。\n  - Tính từ-い: A-い + でしょう。\n  - Tính từ-な: [Tính từ-な bỏ だ] + でしょう (Ví dụ: 暇でしょう, 親切でしょう).\n  - Danh từ: [Danh từ bỏ だ] + でしょう (Ví dụ: 雨でしょう, 明日は 休みでしょう).\n• 2 ngữ điệu nói:\n  1) Xuống giọng (↘): Phỏng đoán không chắc chắn ('Có lẽ là...').\n  2) Lên giọng (↗): Hỏi để tìm kiếm sự đồng tình từ người nghe ('... đúng không? / ... phải không?').",
        example: "• 明日は 雨が 降るでしょう。(Ngày mai có lẽ trời sẽ mưa - phỏng đoán, xuống giọng ↘).\n• 北海道は 寒かったでしょう。(Ở Hokkaido đã lạnh lắm đúng không? - lên giọng ↗).\n• 明日の パーティー、ミラーさんも 行くでしょう？(Bữa tiệc ngày mai, anh Miller cũng đi đúng không?).",
        note: "⚠️ Lưu ý cực kỳ quan trọng: Danh từ và Tính từ đuôi な khi đi với「でしょう」thì BỎ「だ」(không nói 雨だでしょう, mà nói: 雨でしょう; 暇でしょう)."
      }
    ]
  },

  // 3. TRỢ TỪ (Tổng hợp các trợ từ quan trọng)
  particles: {
    title: "Trợ từ",
    badge: "🔖 TRỢ TỪ",
    description: "Note về trợ từ: は, が, で, に, へ, の, と",
    notice: "Ghi nhớ quy tắc trợ từ khi nói về Ở đâu, Thời gian, Tần suất, Tập cha, Đặt lên (に), [Vị trí + の + N] và [N を 持っています].",
    items: [
      {
        title: "1. 📌 Tổng kết",
        meaning: "• に + người：từ, cho - nhận từ ai, học từ ai, gửi cho ai, gọi điện cho ai\n• に + giờ：lúc, vào ngày..\n• に + địa điểm: ở - hiện diện có ai ở đâu,…\n• に + mục đích: để - mục đích của di chuyển (N hoặc danh động từ / V-bỏ ます + に + 行きます/来ます/帰ります)\n• に + thời gian: chỉ tần suất làm việc / hành động (1週間に 1回: 1 tuần 1 lần)\n• に + vị trí/bề mặt: lên, vào - chỉ điểm đến & kết quả hiện diện của hành động (đặt gì lên đâu đó: 机の上に 置きます)\n• で : bằng …làm gì bằng gì, bằng tiếng gì\n• で：ở - làm gì ở đâu\n• で：thời gian hoàn thành việc gì\n• で：trong - đứng sau danh từ là tập cha của chủ thể (ví dụ: スポーツの中で, クラスで)\n• の：của, về, thuộc; và [Vị trí: 上/下/中...] + の + Danh từ để bổ nghĩa xác định vị trí cho danh từ phía sau (机の上の本)\n• へ：đến - phương hướng\n• と：với, cùng với (làm gì cùng ai), và (nối các danh từ; và - trong câu lựa chọn A と B と どちらが...)\n• は ：Là - đánh dấu chủ đề của câu\n• が ：Thường không dịch - trong [Danh từ が Tính từ] (tính từ mô tả đặc điểm của N; muốn bổ nghĩa phải đặt tính từ đứng trước N); hoặc trong mẫu câu có, hiểu, thích, ghét, giỏi, kém (N が あります/わかります/すき/きらい...)\n• を + 持っています：Có, sở hữu, mang theo [đồ vật] (車を 持っています, 傘を 持っています)",
        note: "⚡ Nắm chắc các quy tắc trên để làm bài tập ngữ pháp và hội thoại chuẩn xác."
      },
      {
        title: "2. で , に , へ khi nói về ở đâu",
        meaning: "• に: Ở đâu có người/vật? Hoặc đi đến đâu?\n  Ví dụ: Tôi đang ở trường\n\n• で: Làm hành động gì ở đâu?\n  Ví dụ: Tôi đang học ở trường\n\n• の: của đâu, thuộc nơi nào (hãng nào)\n\n• へ : đến đâu, nhấn mạnh phương hướng hơn",
        note: "💡 Nhớ mẹo: Tồn tại/ở có mặt người hay vật dùng に, diễn ra hành động dùng で, nhấn mạnh hướng di chuyển dùng へ."
      },
      {
        title: "3. で、に khi nói về thời gian & tần suất",
        meaning: "• で、に khi nói về thời gian chủ yếu là に\n• に: lúc, vào ngày (mốc thời gian cụ thể)\n• に + tần suất: số đếm thời gian + に + số lần (ví dụ: 1週間に 1回: 1 tuần 1 lần, 1か月に 2回...)\n• で : thời gian/khoảng thời gian hoàn thành việc gì",
        note: "💡 Mốc thời gian cụ thể hoặc tần suất dùng に; Giới hạn/khoảng thời gian hoàn thành dùng で."
      },
      {
        title: "4. で : 'Trong' - Đứng sau danh từ là tập cha của chủ thể",
        meaning: "Trợ từ「で」hoặc「の中で」đứng sau danh từ đóng vai trò là TẬP HỢP CHA của chủ thể (phạm vi bao hàm các đối tượng bên trong trong câu so sánh nhất).\n• Cấu trúc: [Tập hợp cha] (の中) で [Chủ thể] が いちばん [Tính từ] です。",
        example: "• スポーツ(の中)で サッカーが いちばん 面白いです。(Trong thể thao - tập cha, thì bóng đá - chủ thể, là thú vị nhất.)\n• 1年(の中)で 2月が いちばん 寒いです。(Trong 1 năm - tập cha, thì tháng 2 là lạnh nhất.)\n• クラスで ナムさんが いちばん 背が高いです。(Trong lớp học - tập cha, bạn Nam là cao nhất.)",
        note: "💡 Ghi nhớ: Cứ khi nào danh từ là một tập hợp lớn (tập cha) bao chứa các phần tử con bên trong thì dùng trợ từ「で」hoặc「の中で」."
      },
      {
        title: "5. Phân biệt [Danh từ が Tính từ] & [Tính từ + Danh từ]",
        meaning: "• [Danh từ が Tính từ]: Tính từ đứng sau が dùng để MÔ TẢ ĐẶC ĐIỂM, thuộc tính của danh từ đó (thường là một bộ phận, khía cạnh của một chủ thể).\n• [Tính từ + Danh từ]: Khi muốn BỔ NGHĨA trực tiếp cho danh từ thì tính từ BẮT BUỘC phải đứng TRƯỚC danh từ (Tính từ đuôi い giữ nguyên い + N; Tính từ đuôi な + な + N).\n• Chú ý câu nêu chủ đề chung: Ví dụ câu 'Mùa đông không lạnh' ➔ Mùa đông là chủ đề của cả câu nên dùng「は」(冬は 寒くないです), KHÔNG NÊN dùng「冬が 寒くないです」.",
        example: "• Mô tả đặc điểm (N が Tính từ):\n  - ゾウは 鼻が 長いです。(Con voi thì mũi dài - 'mũi dài' mô tả đặc điểm của con voi).\n  - マリアさんは 目が きれいです。(Bạn Maria thì mắt đẹp).\n  - 頭が 痛いです。(Tôi bị đau đầu).\n• Bổ nghĩa trực tiếp (Tính từ + N):\n  - 冷たい水 (Nước lạnh - tính từ 冷たい bổ nghĩa cho danh từ 水).\n  - 静かな町 (Thị trấn yên tĩnh - tính từ đuôi な thêm な bổ nghĩa cho 町).\n• Chủ đề câu dùng「は」:\n  - 冬は 寒くないです。(Mùa đông thì không lạnh - dùng は làm chủ đề, không dùng が).",
        note: "💡 Khẩu quyết: Tính từ đứng sau が ➔ mô tả đặc điểm; Tính từ đứng trước N ➔ bổ nghĩa cho N; Nhắc đến chủ đề/trạng thái chung (như thời tiết, mùa màng) ➔ dùng は (冬は 寒くないです)."
      },
      {
        title: "6. に : 'Lên / Vào' - Điểm đến & Kết quả hiện diện (Đặt gì lên đâu đó)",
        meaning: "Trợ từ「に」dùng để chỉ ĐIỂM ĐẾN hoặc KẾT QUẢ HIỆN DIỆN của hành động (sau khi làm xong hành động thì vật nằm cố định, hiện diện tại vị trí đó: đặt lên, dán lên, viết vào, để vào...).\n• Cấu trúc: [Vị trí / Nơi chốn] に + [Vật] を + [Động từ: 置きます / 書きます / 貼ります / 止めます / 入れます].",
        example: "• 机の 上に 本を 置きます。(Đặt quyển sách lên trên bàn - đặt xong sách hiện diện trên mặt bàn).\n• ここに 名前を 書いて ください。(Xin hãy viết tên vào đây).\n• カレンダーに 予定を 書きます。(Viết dự định vào lịch).\n• ここに 車を 止めます。(Đỗ xe vào chỗ này).",
        note: "💡 Phân biệt「で」và「に」khi có hành động:\n• で: Nơi DIỄN RA hành động (ví dụ: 部屋で 勉強します - học trong phòng).\n• に: Nơi KẾT QUẢ HIỆN DIỆN / ĐẶT LÊN của hành động (ví dụ: 机の上に 置きます - đặt lên bàn)."
      },
      {
        title: "7. [Vị trí] の + Danh từ & Cấu trúc: [Đồ vật] を 持っています (Có, sở hữu)",
        meaning: "1) [Vị trí: 上, 下, 前, 後ろ, 中...] + の + Danh từ:\n   ➔ Dùng từ chỉ vị trí +「の」để BỔ NGHĨA trực tiếp cho danh từ phía sau, nhằm xác định chính xác đối tượng đó đang ở đâu (Ví dụ: 上の + N = N ở phía trên).\n2) [Đồ vật] を 持って います (もっています):\n   ➔ Biểu thị: CÓ, SỞ HỮU hoặc MANG THEO một đồ vật nào đó (chú ý đi với trợ từ「を」, khác với mẫu「N が あります」).",
        example: "• [Vị trí: 上の + Danh từ]:\n  - 机の 上の 本 (Quyển sách ở trên bàn - 上の bổ nghĩa cho 本).\n  - テーブルの 上の りんご (Quả táo ở trên bàn).\n  - かばんの 中の 財布 (Ví tiền ở trong cặp).\n• [[Đồ vật] を 持っています - Có / Sở hữu / Mang theo]:\n  - わたしは 車を 持って います。(Tôi có / sở hữu xe ô tô).\n  - パソコンを 持って いますか。(Bạn có máy tính không?)\n  - 傘を 持って います。(Tôi có mang theo ô).",
        note: "💡 Mẹo nhớ:\n• Cụm「上の + Danh từ」bổ nghĩa vị trí cho danh từ sau.\n•「N を 持っています」mang 3 nghĩa: CÓ, SỞ HỮU, MANG THEO (dùng trợ từ を)."
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
        title: "8. Đặc biệt là, nhất là : 特に (とくに)",
        meaning: "Dùng để nhấn mạnh một đối tượng, sự vật nổi bật nhất trong một tập hợp hoặc phạm vi.",
        example: "スポーツが　すきです。とくに　サッカーが　すきです。(Tôi thích thể thao. Đặc biệt là rất thích bóng đá.)",
        note: "💡 Chữ Hán: 特 (ĐẶC) đọc là とく. Dùng nhấn mạnh cá nhân/sự vật nổi bật."
      },
      {
        title: "9. Sau khi : V-てから、V2",
        meaning: "Dùng để liên kết 2 mệnh đề diễn tả hai hành động liên tiếp nhau: Sau khi KẾT THÚC hoàn toàn hành động V1 thì mới bắt đầu thực hiện hành động V2.\n• Cấu trúc: [V1-てから]、[V2]。\n• ⚠️ Lưu ý: Trong 1 câu chỉ dùng「V-てから」đúng 1 lần.",
        example: "• 仕事が 終わってから、泳ぎに 行きます。(Sau khi kết thúc công việc, tôi đi bơi.)\n• お金を 入れてから、ボタンを 押して ください。(Sau khi bỏ tiền vào, xin hãy bấm nút.)\n• 国へ 帰ってから、父の 会社で 働きます。(Sau khi về nước, tôi sẽ làm việc ở công ty của bố.)",
        note: "💡 Phân biệt:「から」đứng sau mệnh đề giải thích nghĩa là 'Vì, bởi vì'; còn khi đi trực tiếp sau động từ thể て (V-てから) thì mang nghĩa 'Sau khi kết thúc V1 thì làm V2'."
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
        title: "1. Thể hiện mức độ",
        items: [
          ".. Rõ : よく",
          ".. gần hết, khá... : だいたい",
          "Một chút... : すこし",
          "Không lắm : あまり",
          "Hoàn toàn không : ぜんぜん"
        ]
      },
      {
        title: "2. Thể hiện số lượng",
        items: [
          "Nhiều : たくさん",
          "Một chút : すこし",
          "Không có mấy : あまり",
          "Chẳng có gì : ぜんぜん"
        ]
      },
      {
        title: "3. Đếm ngày",
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
        title: "4. Đếm vật chung",
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
        title: "5. Đếm tháng",
        items: [
          "Tháng 4 (4月) : しがつ",
          "Tháng 7 (7月) : しちがつ",
          "Tháng 9 (9月) : くがつ"
        ]
      },
      {
        title: "6. Đếm giờ",
        items: [
          "4 giờ (4時) : よじ",
          "7 giờ (7時) : しちじ",
          "9 giờ (9時) : くじ"
        ]
      },
      {
        title: "7. Đếm phút",
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
        title: "8. Đếm tiền",
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
        title: "9. Đếm tuổi",
        items: [
          "1 tuổi (1歳) : いっさい",
          "8 tuổi (8歳) : はっさい",
          "10 tuổi (10歳) : じゅっさい (hoặc じっさい)",
          "20 tuổi (20歳) : はたち"
        ]
      },
      {
        title: "10. Đếm tầng",
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
  },

  // 6. TỪ ĐỂ HỎI (Tổng hợp các nghi vấn từ thông dụng)
  question_words: {
    title: "Từ để hỏi",
    badge: "❓ TỪ ĐỂ HỎI",
    description: "Tổng hợp các từ để hỏi (nghi vấn từ) thông dụng và quy tắc sử dụng trong tiếng Nhật",
    notice: "Nắm vững các từ để hỏi và phân biệt các cặp từ dễ nhầm lẫn (なに / なん, どう / どんな / どうやって, どこ / どちら / どの...).",
    items: [
      {
        title: "1. いくつ : Bao nhiêu cái / Mấy tuổi",
        meaning: "• Hỏi số lượng đồ vật (đếm theo hệ thuần Nhật: ひとつ, ふたつ...).\n• Hỏi tuổi của trẻ em (hoặc hỏi thân mật thay cho なんさい).",
        example: "• りんごを いくつ 買いましたか。(Bạn đã mua bao nhiêu quả táo?)\n• お子さんは いくつですか。(Bé nhà bạn mấy tuổi rồi?)",
        note: "💡 Phân biệt:「いくつ」hỏi số lượng đồ vật (bao nhiêu cái);「いくら」hỏi giá tiền."
      },
      {
        title: "2. いくら : Bao nhiêu tiền",
        meaning: "Dùng để hỏi giá cả của hàng hóa, đồ vật, dịch vụ.",
        example: "• これは いくらですか。(Cái này bao nhiêu tiền?)\n• このシャツは 3,000円です。(Chiếc áo này 3.000 yên.)",
        note: "💡 Mẹo nhớ: Đi mua sắm luôn hỏi: [Đồ vật] は いくらですか。"
      },
      {
        title: "3. どこ : Ở đâu, Công ty nào, Nước nào, Trường nào",
        meaning: "• Hỏi địa điểm, nơi chốn (Ở đâu?).\n• Hỏi cơ quan, công ty, tổ chức, trường học, đất nước xuất thân của một người.",
        example: "• トイレは どこですか。(Nhà vệ sinh ở đâu?)\n• 会社は どこですか。(Công ty của bạn là công ty nào?)\n• 国は どこですか。(Bạn là người nước nào / Đất nước của bạn ở đâu?)",
        note: "⚠️ Lưu ý: Khi hỏi tên cơ quan, trường học hay quốc tịch/quê quán của ai đó, dùng「どこ」(không dùng なに hay だれ)."
      },
      {
        title: "4. どんな : Như thế nào (Bổ nghĩa cho danh từ)",
        meaning: "Dùng để hỏi về tính chất, đặc điểm hoặc chủng loại của người/sự vật.\n• Đóng vai trò bổ nghĩa giống tính từ: どんな + [Danh từ].",
        example: "• ハノイは どんな町ですか。(Hà Nội là thành phố như thế nào?)\n• どんな音楽が 好きですか。(Bạn thích thể loại âm nhạc như thế nào?)",
        note: "💡 Phân biệt:「どんな」bắt buộc đi liền với Danh từ (どんな + N); còn「どう」làm vị ngữ độc lập (どうですか)."
      },
      {
        title: "5. なに (何) : Cái gì",
        meaning: "Từ để hỏi 'Cái gì'.\n• Phát âm là「なに」khi đứng độc lập hoặc đứng trước các trợ từ: が (なにが), を (なにを), も (なにも), と (なにと)...",
        example: "• 何を 食べますか。(Bạn ăn cái gì? - đọc là なにを)\n• 何が ありますか。(Có cái gì vậy? - đọc là なにが)",
        note: "💡 Ghi nhớ: Đứng trước が, を, も, と thì đọc là「なに」."
      },
      {
        title: "6. なん (何) : Cái gì",
        meaning: "Từ để hỏi 'Cái gì'.\n• Phát âm là「なん」khi:\n  1) Đứng trước từ có phụ âm đầu thuộc hàng d, t, n (như です, で, の...)\n  2) Đứng trước các từ chỉ số đếm hoặc đơn vị đếm (何時, 何曜日, 何歳, 何人, 何枚...).",
        example: "• これは 何ですか。(Cái này là cái gì? - đọc là なんですか vì đứng trước d)\n• 何時ですか。(Mấy giờ? - なんじ)\n• 何枚ですか。(Mấy tờ? - なんまい)",
        note: "💡 Mẹo nhớ: Đứng trước hàng [d, t, n] và trước số đếm/đơn vị đếm ➔ đọc là「なん」."
      },
      {
        title: "7. どう : Như thế nào (Làm vị ngữ)",
        meaning: "Dùng để hỏi về cảm nhận, ý kiến, tình trạng của sự vật/sự việc (làm vị ngữ trong câu: どうですか).",
        example: "• 日本の生活は どうですか。(Cuộc sống ở Nhật thế nào?)\n• お茶は どうですか。(Uống một tách trà nhé? / Mời dùng trà.)",
        note: "💡 Phân biệt:「どうですか」(thế nào - làm vị ngữ);「どんな + N」(N như thế nào - bổ nghĩa cho N)."
      },
      {
        title: "8. いつ : Khi nào, bao giờ",
        meaning: "Dùng để hỏi về thời gian (ngày, tháng, năm, thời điểm).\n• Sau「いつ」KHÔNG DÙNG trợ từ「に」.",
        example: "• いつ 日本へ 来ましたか。(Bạn đã đến Nhật khi nào?)\n• 誕生日は いつですか。(Sinh nhật của bạn là khi nào?)",
        note: "⚠️ Tuyệt đối không nói「いつに」, luôn dùng「いつ」trực tiếp."
      },
      {
        title: "9. どうして : Tại sao (Why)",
        meaning: "Dùng để hỏi nguyên nhân, lý do của một sự việc hoặc hành động.\n• Cuối câu trả lời thường kết thúc bằng「～から」(vì...).",
        example: "A：どうして 昨日 休みましたか。(Tại sao hôm qua bạn nghỉ học?)\nB：熱が ありましたから。(Vì tôi bị sốt.)",
        note: "💡 Mẫu câu hỏi - đáp kinh điển:「どうして ～か」➔「～から。」"
      },
      {
        title: "10. どのぐらい (どのくらい) : Khoảng bao lâu (Thời gian)",
        meaning: "Dùng để hỏi về độ dài thời gian (mất khoảng bao lâu), khoảng cách hoặc mức độ.",
        example: "• ここから 東京駅まで どのぐらい かかりますか。(Từ đây đến ga Tokyo mất khoảng bao lâu?)\n• 日本語を どのぐらい 勉強しましたか。(Bạn đã học tiếng Nhật khoảng bao lâu?)",
        note: "💡 Dùng để hỏi thời lượng/chi phí, có thể nói どのぐらい hoặc どのくらい."
      },
      {
        title: "11. なんかい (何回 / 何階) : Mấy lần / Tầng mấy",
        meaning: "• 何回 (なんかい): Hỏi số lần thực hiện hành động (Mấy lần?).\n• 何階 (なんがい / なんかい): Hỏi vị trí tầng nhà (Tầng mấy?).",
        example: "• 1週間に 何回 テニスを しますか。(1 tuần bạn chơi tennis mấy lần?)\n• 会議室は 何階ですか。(Phòng họp ở tầng mấy vậy?)",
        note: "💡 Chữ Hán: 回 (HỒI - số lần: なんかい); 階 (GIAI - tầng: なんがい / なんかい)."
      },
      {
        title: "12. なんにん (何人) : Mấy người, bao nhiêu người",
        meaning: "Dùng để hỏi về số lượng người.",
        example: "• 家族は 何人ですか。(Gia đình bạn có mấy người?)\n• 教室に 学生が 何人 いますか。(Trong lớp có bao nhiêu học sinh?)",
        note: "💡 Đếm người bất quy tắc: 1 người (ひとり), 2 người (ふたり), từ 3 người: [số] + にん (さんにん, よにん...). Từ để hỏi: なんにん."
      },
      {
        title: "13. なんかがつ (何か月 / 何カ月) : Mấy tháng, bao nhiêu tháng",
        meaning: "Dùng để hỏi về khoảng thời gian kéo dài bao nhiêu tháng (thời lượng, khác với mốc tháng 何月 - なんがつ).",
        example: "• 何か月 日本に いますか。(Bạn ở Nhật trong bao nhiêu tháng?)\n• 3か月 勉強しました。(Tôi đã học trong 3 tháng.)",
        note: "💡 Phân biệt: 何月 (なんがつ - tháng 1, tháng 2... mốc tháng); 何か月 (なんかがつ - 1 tháng, 2 tháng... thời lượng số tháng)."
      },
      {
        title: "14. どちら : Phía nào, hướng nào / Cái nào / Ở đâu (Lịch sự)",
        meaning: "• Hỏi phương hướng: Phía nào, hướng nào (lịch sự của どっち / どこ).\n• Hỏi lựa chọn giữa 2 đối tượng: Cái nào, bên nào (A と B と どちらが...).\n• Hỏi nơi chốn, công ty, quốc gia một cách lịch sự, trang trọng (thay cho どこ).",
        example: "• お国は どちらですか。(Đất nước của bạn ở đâu / Bạn là người nước nào? - cách hỏi lịch sự của どこ)\n• 日本と ベトナムと どちらが 寒いですか。(Nhật Bản và Việt Nam thì nước nào lạnh hơn?)",
        note: "💡 Mẹo nhớ:「どちら」vừa hỏi lựa chọn giữa 2 cái, vừa là thể lịch sự của「どこ」."
      },
      {
        title: "15. どうやって : Làm thế nào, bằng cách nào",
        meaning: "Dùng để hỏi về cách thức, trình tự, phương pháp làm một việc gì đó hoặc cách đi từ điểm A đến điểm B.\n• Cấu trúc: [Địa điểm] まで どうやって 行きますか。(Đi đến [địa điểm] bằng cách nào?)\n• Trả lời: Nêu phương tiện di chuyển hoặc các bước hành động (V1-て、V2-て...).",
        example: "• 大学まで どうやって 行きますか。(Đi đến trường đại học bằng cách nào?)\n  ➔ 京都駅から 16番の バスに 乗って、大学前で 降ります。(Từ ga Kyoto đi xe buýt số 16 rồi xuống ở trước trường đại học.)\n• これは どうやって 食べますか。(Món này ăn như thế nào vậy?)\n• どうやって 現金を 引き出しますか。(Làm thế nào để rút tiền mặt?)",
        note: "💡 Phân biệt:「どう」(thế nào - hỏi cảm nhận/ý kiến: どうですか); còn「どうやって」(làm thế nào/bằng cách nào - hỏi cách thức, phương pháp, cách đi)."
      },
      {
        title: "16. どの : Cái nào, người nào (Bổ nghĩa cho danh từ)",
        meaning: "Từ chỉ định nghi vấn dùng để hỏi khi muốn xác định / lựa chọn 1 đối tượng trong MỘT NHÓM TỪ 3 ĐỐI TƯỢNG TRỞ LÊN.\n• Cấu trúc: どの + [Danh từ] (bắt buộc phải đi liền trước một danh từ, không đứng độc lập).\n• Phân biệt lựa chọn:\n  - 2 đối tượng ➔ dùng「どちら」(どちらが 好きですか).\n  - Từ 3 đối tượng trở lên ➔ dùng「どの + N」(どの傘が あなたのですか / どれ).",
        example: "• サントスさんは どの人ですか。(Anh Santos là người nào?)\n  ➔ あの 背が 高くて、髪が 黒い人です。(Là người cao và tóc đen kia kìa.)\n• あなたの 傘は どの傘ですか。(Cái ô của bạn là cái ô nào?)\n• どの パソコンが いちばん 新しいですか。(Chiếc máy tính nào mới nhất?)",
        note: "💡 Mẹo nhớ:「どの」luôn phải đi liền với Danh từ (どの + N). Chọn giữa 2 cái dùng「どちら」; chọn trong 3 cái trở lên dùng「どの + N」(hoặc đứng độc lập dùng「どれ」)."
      }
    ]
  },

  // 7. PHÓ TỪ (Tổng hợp các phó từ quan trọng bổ nghĩa cho động từ, tính từ)
  adverbs: {
    title: "Phó từ",
    badge: "PHÓ TỪ",
    description: "Tổng hợp các phó từ thường gặp bổ nghĩa cho động từ và tính từ trong tiếng Nhật",
    notice: "Phó từ (副詞) trong tiếng Nhật dùng để bổ nghĩa cho động từ, tính từ hoặc trạng thái câu, thường đứng ngay trước từ mà nó bổ nghĩa.",
    items: [
      {
        title: "1. もう + [Số lượng] : Thêm ... nữa",
        meaning: "Đứng trước từ chỉ số lượng để biểu thị ý nghĩa 'thêm một lượng nữa'.",
        example: "• もう 1杯 いかがですか。(Uống thêm 1 cốc/chén nữa nhé?)\n• もう 1回 言って ください。(Xin hãy nói lại thêm 1 lần nữa.)\n• もう 1人 来ます。(Sẽ có thêm 1 người nữa đến.)",
        note: "💡 Cấu trúc:「もう + Số lượng」nghĩa là thêm chừng đó nữa (thêm 1 cái, thêm 1 lần...)."
      },
      {
        title: "2. もう : Đã ... rồi",
        meaning: "Đứng trước động từ (thường ở thể quá khứ hoặc khẳng định V-ました) diễn tả hành động đã hoàn tất hoặc trạng thái đã xảy ra.",
        example: "• もう 昼ごはんを 食べましたか。(Bạn đã ăn cơm trưa rồi chưa?)\n  ➔ はい、もう 食べました。(Vâng, tôi đã ăn rồi.)\n• もう 12時です。(Đã 12 giờ rồi.)",
        note: "💡 Phân biệt:「もう + Động từ」(đã... rồi) khác hoàn toàn với「もう + Số lượng」(thêm... nữa)."
      },
      {
        title: "3. だいたい : Khoảng (ước chừng) / Hầu hết, phần lớn",
        meaning: "Có 2 nét nghĩa chính tùy theo ngữ cảnh:\n1) Ước chừng khoảng (thời gian, tiền bạc, số lượng): khoảng chừng, xấp xỉ.\n2) Mức độ: đại khái, hầu hết, phần lớn (hiểu hoặc làm được phần lớn).",
        example: "• [Khoảng/xấp xỉ]: 駅から うちまで だいたい 15分 かかります。(Từ ga về nhà mất khoảng 15 phút.)\n• [Hầu hết/đại khái]: 今日の 授業は だいたい 分かりました。(Bài học hôm nay tôi đã hiểu hầu hết / đại khái.)",
        note: "💡 Vừa mang nghĩa ước lượng số lượng/thời gian ('khoảng'), vừa chỉ mức độ hiểu/biết ('đại khái, phần lớn')."
      },
      {
        title: "4. ずっと : Suốt, liên tục / Hơn hẳn (so sánh)",
        meaning: "Có 2 cách dùng quan trọng:\n1) Thời gian/Hành động: suốt, liên tục không ngừng nghỉ.\n2) So sánh hơn: hơn hẳn, hơn rất nhiều (ずっと + Tính từ).",
        example: "• [Suốt, liên tục]: 朝から ずっと 待って いました。(Tôi đã đợi suốt từ sáng đến giờ.)\n• [Hơn hẳn]: 日本は ベトナムより ずっと 寒いです。(Nhật Bản lạnh hơn Việt Nam rất nhiều / hơn hẳn.)",
        note: "💡 Ghi nhớ: Khi đi với tính từ so sánh,「ずっと」nhấn mạnh sự cách biệt vượt trội (hơn hẳn)."
      },
      {
        title: "5. もう少し (もうすこし) : Thêm một chút nữa",
        meaning: "Kết hợp giữa「もう」(thêm) và「少し」(một chút) ➔ Dùng để yêu cầu hoặc diễn tả muốn thêm một ít nữa (về số lượng, tốc độ, kích thước...).",
        example: "• もう少し ゆっくり 話して ください。(Xin hãy nói chậm lại thêm một chút nữa.)\n• もう少し 大きい声で 話して ください。(Xin hãy nói to hơn thêm một chút nữa.)\n• もう少し 食べませんか。(Ăn thêm một chút nữa nhé?)",
        note: "💡 Cụm từ thông dụng:「もう少し + Tính từ/Động từ」(thêm một chút nữa)."
      },
      {
        title: "6. よく : Thường xuyên / Rõ, tốt / Giỏi",
        meaning: "Phó từ đa năng với 3 ý nghĩa thông dụng:\n1) Tần suất: thường xuyên (làm việc gì nhiều lần).\n2) Mức độ hiểu/thấy: rõ, tốt (hiểu rõ, nhìn rõ, nghe rõ).\n3) Khen ngợi/đánh giá: giỏi, tốt.",
        example: "• [Thường xuyên]: 休みの日、よく 映画を 見ます。(Vào ngày nghỉ, tôi thường xuyên xem phim.)\n• [Rõ, tốt]: 日本語が よく 分かります。(Tôi hiểu rất rõ tiếng Nhật.)\n• [Giỏi, tốt]: よく できました！(Bạn đã làm rất giỏi / rất tốt!)",
        note: "💡 Tùy ngữ cảnh: Đi với tần suất = thường xuyên; đi với hiểu/thấy = rõ; đi với đánh giá = giỏi/tốt."
      },
      {
        title: "7. すぐ : Ngay lập tức, ngay bây giờ (いま)",
        meaning: "Diễn tả hành động được thực hiện ngay lập tức, không chậm trễ (tương đương 'ngay bây giờ').",
        example: "• すぐ 行きます。(Tôi đi ngay bây giờ đây.)\n• ごはんを 食べたら、すぐ 薬を 飲んで ください。(Ăn cơm xong thì hãy uống thuốc ngay nhé.)",
        note: "💡 Nhấn mạnh hành động diễn ra tức thì, không chần chừ."
      },
      {
        title: "8. ゆっくり : Từ từ, thong thả, chậm rãi",
        meaning: "Diễn tả hành động diễn ra chậm rãi, thong thả hoặc nghỉ ngơi thư giãn thoải mái.",
        example: "• ゆっくり 休んで ください。(Xin hãy nghỉ ngơi thong thả nhé.)\n• 日本語を ゆっくり 話して ください。(Xin hãy nói tiếng Nhật từ từ / chậm rãi.)\n• 週末は うちで ゆっくり しました。(Cuối tuần tôi đã nghỉ ngơi thong thả ở nhà.)",
        note: "💡 Thường dùng khi nhờ người khác nói chậm lại hoặc chúc người khác nghỉ ngơi thoải mái."
      },
      {
        title: "9. あとで : Lát nữa, sau đó (sau 1 sự việc)",
        meaning: "Diễn tả một hành động sẽ làm sau một khoảng thời gian ngắn hoặc sau khi kết thúc một sự việc nào đó (nhớ chữ「あと」nghĩa là sau).",
        example: "• あとで 電話を かけます。(Lát nữa tôi sẽ gọi lại.)\n• ごはんを 食べた あとで、散歩します。(Sau khi ăn cơm xong, tôi đi dạo.)",
        note: "💡 Mẹo nhớ:「あと」là sau,「あとで」nghĩa là lát nữa / sau đó mới làm."
      },
      {
        title: "10. また : Lại, một lần nữa",
        meaning: "Diễn tả hành động tái diễn, lặp lại thêm một lần nữa hoặc dùng khi chào hẹn gặp lại.",
        example: "• また 明日。(Hẹn gặp lại ngày mai.)\n• また 来て ください。(Lần sau lại đến chơi nhé.)\n• また 間違えました。(Tôi lại làm sai nữa rồi.)",
        note: "💡 Cực kỳ quen thuộc trong giao tiếp: またね (hẹn gặp lại), また来週 (hẹn tuần sau)."
      },
      {
        title: "11. 初めて (はじめて) : Lần đầu tiên",
        meaning: "Diễn tả một trải nghiệm hoặc hành động lần đầu tiên trong đời / lần đầu tiên làm việc gì đó.",
        example: "• 初めて 日本へ 来ました。(Lần đầu tiên tôi đến Nhật Bản.)\n• 刺身を 初めて 食べました。(Lần đầu tiên tôi ăn món sashimi.)\n• 富士山に 初めて 登りました。(Lần đầu tiên tôi leo núi Phú Sĩ.)",
        note: "💡 Chữ Hán: 初 (SƠ - ban đầu/lần đầu), phát âm là はじめて."
      },
      {
        title: "12. まっすぐ : Đi thẳng, thẳng tắp",
        meaning: "Chỉ phương hướng đi thẳng một mạch (không rẽ trái/phải) hoặc đường đi thẳng tắp.",
        example: "• この道を まっすぐ 行って ください。(Xin hãy đi thẳng theo con đường này.)\n• まっすぐ 行くと、右に 郵便局が あります。(Đi thẳng là sẽ thấy bưu điện ở phía bên phải.)",
        note: "💡 Thường dùng nhất trong mẫu câu chỉ đường: まっすぐ行きます (đi thẳng)."
      },
      {
        title: "13. 📌 VAI TRÒ BỔ NGHĨA CỦA PHÓ TỪ",
        meaning: "• Khái niệm: Phó từ (副詞) dùng để BỔ NGHĨA cho ĐỘNG TỪ, TÍNH TỪ hoặc cả câu.\n• Vị trí: Phó từ thường đứng NGAY TRƯỚC từ mà nó bổ nghĩa.\n• Bổ nghĩa cho Động từ:\n  - よく 勉強します (học chăm/nhiều)\n  - すぐ 行きます (đi ngay)\n  - ゆっくり 話します (nói từ từ)\n• Bổ nghĩa cho Tính từ:\n  - とても 暑い (rất nóng)\n  - もう少し 大きい (lớn hơn một chút)\n  - ずっと 速い (nhanh hơn hẳn)\n• Bổ nghĩa cho Số lượng:\n  - だいたい 15分 (khoảng 15 phút)\n  - もう 1杯 (thêm 1 chén/cốc)",
        note: "💡 Phó từ KHÔNG biến đổi đuôi (không chia thì), chỉ cần đặt trực tiếp trước từ cần bổ nghĩa."
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

