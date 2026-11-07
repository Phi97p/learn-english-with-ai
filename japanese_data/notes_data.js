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
    notice: "Minna no Nihongo: Tổng hợp các cấu trúc ngữ pháp trọng tâm (Bài 5 - Bài 14)",
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
      }
    ]
  },

  // 3. TRỢ TỪ (Tổng hợp các trợ từ quan trọng)
  particles: {
    title: "Trợ từ",
    badge: "🔖 TRỢ TỪ",
    description: "Note về trợ từ: は, が, で, に, へ, の, と",
    notice: "Ghi nhớ quy tắc phân biệt trợ từ khi nói về Ở đâu, Thời gian, Tần suất, Tập cha và [N が Tính từ].",
    items: [
      {
        title: "1. 📌 Tổng kết",
        meaning: "• に + người：từ, cho - nhận từ ai, học từ ai, gửi cho ai, gọi điện cho ai\n• に + giờ：lúc, vào ngày..\n• に + địa điểm: ở - hiện diện có ai ở đâu,…\n• に + mục đích: để - mục đích của di chuyển (N hoặc danh động từ / V-bỏ ます + に + 行きます/来ます/帰ります)\n• に + thời gian: chỉ tần suất làm việc / hành động (1週間に 1回: 1 tuần 1 lần)\n• で : bằng …làm gì bằng gì, bằng tiếng gì\n• で：ở - làm gì ở đâu\n• で：thời gian hoàn thành việc gì\n• で：trong - đứng sau danh từ là tập cha của chủ thể (ví dụ: スポーツの中で, クラスで)\n• の：của, về, thuộc\n• へ：đến - phương hướng\n• と：với, cùng với (làm gì cùng ai), và (nối các danh từ; và - trong câu lựa chọn A と B と どちらが...)\n• は ：Là - đánh dấu chủ đề của câu\n• が ：Thường không dịch - trong [Danh từ が Tính từ] (tính từ mô tả đặc điểm của N; muốn bổ nghĩa phải đặt tính từ đứng trước N); hoặc trong mẫu câu có, hiểu, thích, ghét, giỏi, kém (N が あります/わかります/すき/きらい...)",
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
    notice: "Nắm vững các từ để hỏi và phân biệt các cặp từ dễ nhầm lẫn (なに / なん, どう / どんな, どこ / どちら...).",
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

