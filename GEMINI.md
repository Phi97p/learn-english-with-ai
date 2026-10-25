# Hướng Dẫn & Quy Định Dự Án (Học Tiếng Nhật Toàn Diện với AI)

## 1. Lưu trữ tiến độ & Quy tắc cốt lõi về localStorage
- **Cơ chế SPA & Giữ nhẹ bộ nhớ**: Ứng dụng hoạt động theo cơ chế Single Page Application (SPA), ưu tiên xử lý in-memory (bộ nhớ tạm của phiên làm việc). Không sử dụng file log ghi trên ổ cứng (`study_log.md`, `study_log.json` hay thư mục `logs/` đã được loại bỏ theo yêu cầu để giữ dự án gọn nhẹ, sạch sẽ).
- **Ưu tiên Clear khi tắt / tải lại trang**: Ưu tiên việc dọn sạch / reset hoặc không duy trì dữ liệu dư thừa trong `localStorage` khi người dùng tắt ứng dụng hoặc tải lại (reload) trang. Tránh để `localStorage` bị phình to hoặc lưu trữ rác theo thời gian.
- **Không lưu quá nhiều dữ liệu**: Tuyệt đối không lưu các tệp dữ liệu lớn, danh sách câu hỏi hàng loạt, cache bài đọc hay lịch sử làm bài dài dòng vào `localStorage`.
- **Bắt buộc thông báo khi cần lưu vào localStorage**: Trong bất kỳ trường hợp nào cần thiết lập hoặc bổ sung việc lưu trạng thái vào `localStorage`, AI **bắt buộc phải thông báo rõ ràng trước cho người dùng** (mục đích lưu, key lưu trữ, ước lượng dung lượng) và nhận được sự đồng thuận trước khi triển khai.

## 2. Hỗ trợ học tập
- Khi người dùng sao chép tóm tắt tiến độ (nút "📋 Sao chép cho AI") hoặc đưa ra câu hỏi về phát âm, từ vựng, ngữ pháp Tiếng Nhật:
  - Giải thích tận tình, ngắn gọn, dễ hiểu.
  - Phân tích phát âm, âm ngắt, trường âm, mẹo nhớ chữ Hán Kanji, đưa ví dụ thực tế trong đời sống.
  - Khuyến khích người dùng luyện nói shadowing to rõ ràng.

## 3. Tra cứu tài liệu học tập & SGK
- Khi cần tìm bài, tài liệu tham khảo hoặc sách giáo khoa Tiếng Nhật:
  - Tìm kiếm trong thư mục `sgk-jp/` (Minna no Nihongo, v.v.).

## 4. Quy định Git (Commit & Push)
- **Tuyệt đối KHÔNG BAO GIỜ thực hiện lệnh `git push`** lên remote repository trong mọi trường hợp.
- **KHÔNG TỰ ĐỘNG COMMIT**: Tuyệt đối không tự ý chạy lệnh `git commit` sau mỗi lần chỉnh sửa. Chỉ thực hiện lệnh `git commit` khi người dùng có yêu cầu cụ thể (ví dụ: "commit giúp tôi", "hãy commit",...).

## 5. Nguồn dữ liệu bài học (Data Source)
- **Tab Luyện nói tiếng Nhật**: Lấy dữ liệu bài học từ thư mục `datasss/jp/luyen_noi_jp/` để xử lý và nạp vào hệ thống (`japanese_data/speaking_data.js`).
- **Tab Đọc hiểu & Shadowing Nhật**: Lấy dữ liệu bài học từ thư mục `datasss/jp/doc_hieu/` để xử lý và nạp vào hệ thống (`japanese_data/reading_data.js`).
- **Tab Từ vựng tiếng Nhật**: Lấy dữ liệu từ vựng từ thư mục `datasss/jp/vocab/` (file `voca.txt`) để xử lý và nạp vào hệ thống (`japanese_data/vocab_data.js`).
- **Tab Kiến thức quan trọng**: Dữ liệu do người dùng tự ghi chú tại `japanese_data/notes_data.js` (`JA_NOTES_DATA`), gồm 2 phần chuyển đổi: Cách đọc các từ khó (`hard_words`) và Các cụm từ hay cần học thuộc (`phrases`).
- **Tab Luyện tập Ngữ pháp tổng hợp**: Lấy dữ liệu bài học từ thư mục `datasss/jp/ngu_phap/` (file `bai_1.txt`, `bai_2.txt`...) để xử lý và nạp vào hệ thống (`japanese_data/grammar_data.js`).

## 6. Quy định về Tab Từ Vựng (Vocabulary)
- **Từ vựng tiếng Nhật**: Dữ liệu từ vựng được quản lý tại file `datasss/jp/vocab/voca.txt`. Người dùng sẽ tự thêm từ mới vào file này theo từng bài học (ví dụ: `Bài 1: ク, サ, 会社員, ...`). Khi người dùng yêu cầu cập nhật hoặc có từ mới trong file, AI sẽ tự động đọc danh sách từ mới trong file này, tra cứu phát âm (hiragana, romaji, nghĩa tiếng Việt chuẩn theo Minna no Nihongo) và đồng bộ nạp vào code (`japanese_data/vocab_data.js`).
- AI chỉ lấy từ mới tiếng Nhật từ nguồn `datasss/jp/vocab/voca.txt` này, không tự ý thêm các từ nằm ngoài danh sách người dùng đã ghi trong file.

## 7. Quy định về Tab Đọc hiểu & Shadowing Nhật (Reading Comprehension)
- Nguồn dữ liệu: Quản lý tại `datasss/jp/doc_hieu/` (file nguồn `bai_1.txt`).
- Khi file nguồn được cập nhật: AI tự động kích hoạt kỹ năng `sync-japanese-reading`, phân tích tách câu, phiên âm Romaji, dịch nghĩa tiếng Việt và cập nhật vào `japanese_data/reading_data.js`.
- **Bảo toàn bố cục & kích thước màn hình**: Luôn giữ nguyên kích thước màn hình giao diện hiện tại (`height: 100vh`), không để bài đọc làm tràn hoặc kéo giãn chiều dài trang. Kéo dài `.reading-passage-panel` bằng đúng tab `.speaking-challenge-card` bên cạnh (`align-items: stretch; height: 100%; min-height: 0;`), chỉ cuộn riêng nội dung đoạn văn `.reading-passage-content`, tuyệt đối không scroll thẻ `🎙️ Máy nghe được:` và `🎯 Bấm để nói & Chấm điểm`.

## 8. Quy định về Tab Luyện tập Ngữ pháp tổng hợp (Grammar Practice)
- **Nguồn dữ liệu**: Quản lý tại thư mục `datasss/jp/ngu_phap/` (mỗi file ứng với đúng 1 chủ đề độc lập, tuyệt đối không lấy data của file này gắn vào chủ đề của file/bài khác).
- **File đích**: `japanese_data/grammar_data.js` (`JA_GRAMMAR_DATA`).
- **Quy tắc làm bài & Chấm điểm**:
  - Hỗ trợ đa dạng nhiều loại bài tập khác nhau: Trắc nghiệm 4 lựa chọn, Điền trợ từ vào ngoặc theo chuẩn `b1_q1`, Hoàn thành câu trên đường kẻ gạch dưới theo chuẩn `b1_q2`, Chọn câu trả lời phù hợp từ bảng có sẵn theo chuẩn `b1_q3`, Chọn 1 trong 2 từ trực tiếp trong câu theo chuẩn `b1_q4`, Điền cách đọc Hiragana cho từ/số gạch chân theo chuẩn `b1_q5`, Trả lời câu hỏi mở tự đối chiếu theo chuẩn `b1_q6`, Ghép các từ thành câu hoàn chỉnh theo chuẩn `b2_q3`, và các dạng bài tập mới sẽ được bổ sung skill riêng khi người dùng đưa vào. Mỗi câu trắc nghiệm/điền từ tính điểm đúng 1 điểm (câu hỏi mở không tính vào điểm thi, hiển thị đáp án mẫu để tự đối chiếu).
  - Gom các câu hỏi theo từng chủ đề bài học độc lập tương ứng với từng file (không trộn đề tổng hợp).
  - Hiển thị toàn bộ câu hỏi của bài học theo đúng trình tự SGK (không xáo trộn ngẫu nhiên).
  - Nộp bài xong sẽ chấm điểm tự động, hiển thị số câu đúng/sai, tỷ lệ %, thời gian làm bài, đáp án đúng và phần giải thích chi tiết.
  - **Không lưu lịch sử làm bài** vào `localStorage` hay ổ cứng theo đúng yêu cầu người dùng.

## 9. Quy định về Tab Bài tập Hán tự (Kanji Practice)
- **Nguồn dữ liệu**: Quản lý tại thư mục `datasss/jp/kanji/` (file chính `bai_1.txt`, `bai_2.txt`...).
- **File đích**: `japanese_data/kanji_data.js` (`JA_KANJI_DATA`).
- **Quy tắc câu hỏi & Điền từ**:
  - Không có trắc nghiệm A, B, C, D tách riêng.
  - Các câu đưa vào dưới dạng câu hoàn chỉnh có từ Kanji được gạch chân `<u>...</u>` và dấu ngoặc `（ ）` bên cạnh để người học điền cách đọc Hiragana tương ứng.
  - Tối đa 30 câu ngẫu nhiên, mỗi câu 1 điểm, tự động chấm điểm với so sánh chuẩn hóa Hiragana (`normalizeAnswerText`).
  - Nộp bài xong hiển thị số câu đúng/sai, tỷ lệ %, thời gian làm bài, đáp án đúng và phần giải thích chi tiết chữ Hán.
  - **Không lưu lịch sử làm bài** vào `localStorage` hay ổ cứng.
