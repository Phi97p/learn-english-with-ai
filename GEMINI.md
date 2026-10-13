# Hướng Dẫn & Quy Định Dự Án (Tiếng Anh & Tiếng Nhật với AI)

## 1. Lưu trữ tiến độ
- Ứng dụng hoạt động theo cơ chế Single Page Application (SPA), lưu trực tiếp trạng thái học tập (streak ngày, mẫu câu đã nạp, bài học đang chọn, từ vựng tùy chỉnh) trong `localStorage` của trình duyệt người dùng.
- Không sử dụng file log ghi trên ổ cứng (`study_log.md`, `study_log.json` hay thư mục `logs/` đã được loại bỏ theo yêu cầu của người dùng để giữ dự án gọn nhẹ, sạch sẽ).

## 2. Hỗ trợ học tập
- Khi người dùng sao chép tóm tắt tiến độ (nút "📋 Sao chép cho AI") hoặc đưa ra câu hỏi về phát âm, từ vựng, ngữ pháp của Tiếng Anh hay Tiếng Nhật:
  - Giải thích tận tình, ngắn gọn, dễ hiểu.
  - Phân tích phát âm, mẹo nhớ từ, đưa ví dụ thực tế trong đời sống.
  - Khuyến khích người dùng luyện nói shadowing to rõ ràng.

## 3. Tra cứu tài liệu học tập & SGK
- Khi cần tìm bài, tài liệu tham khảo hoặc sách giáo khoa:
  - **Tiếng Anh**: Tìm kiếm trong thư mục `sgk/`.
  - **Tiếng Nhật**: Tìm kiếm trong thư mục `sgk-jp/`.

## 4. Quy định Git (Commit & Push)
- **Tuyệt đối KHÔNG BAO GIỜ thực hiện lệnh `git push`** lên remote repository trong mọi trường hợp.
- **KHÔNG TỰ ĐỘNG COMMIT**: Tuyệt đối không tự ý chạy lệnh `git commit` sau mỗi lần chỉnh sửa. Chỉ thực hiện lệnh `git commit` khi người dùng có yêu cầu cụ thể (ví dụ: "commit giúp tôi", "hãy commit",...).


## 5. Nguồn dữ liệu bài học (Data Source)
- **Tab Luyện nói & Phát âm Anh**: Lấy dữ liệu bài học từ thư mục `datasss/en/luyen_noi_eng/` để xử lý và nạp vào hệ thống (`data.js`).
- **Tab Đọc hiểu & Shadowing Anh**: Lấy dữ liệu bài học từ thư mục `datasss/en/doc_hieu/` để xử lý và nạp vào hệ thống (`english_data/reading_data.js`).
- **Tab Hội thoại tiếng Anh**: Lấy dữ liệu bài học từ thư mục `datasss/en/hoi_thoai/` để xử lý và nạp vào hệ thống (`english_data/dialogue_data.js`).
- **Tab Luyện nói tiếng Nhật**: Lấy dữ liệu bài học từ thư mục `datasss/jp/luyen_noi_jp/` để xử lý và nạp vào hệ thống (`japanese_data/speaking_data.js`).
- **Tab Đọc hiểu & Shadowing Nhật**: Lấy dữ liệu bài học từ thư mục `datasss/jp/doc_hieu/` để xử lý và nạp vào hệ thống (`japanese_data/reading_data.js`).
- **Tab Hội thoại tiếng Nhật**: Lấy dữ liệu bài học từ thư mục `datasss/jp/hoi_thoai/` để xử lý và nạp vào hệ thống (`japanese_data/dialogue_data.js`).
- **Tab Từ vựng tiếng Nhật**: Lấy dữ liệu từ vựng từ thư mục `datasss/jp/vocab/` (file `voca.txt`) để xử lý và nạp vào hệ thống (`japanese_data/vocab_data.js`).

## 6. Quy định về Tab Từ Vựng (Vocabulary)
- **Từ vựng tiếng Nhật**: Dữ liệu từ vựng được quản lý tại file `datasss/jp/vocab/voca.txt`. Người dùng sẽ tự thêm từ mới vào file này theo từng bài học (ví dụ: `Bài 1: ク, サ, 会社員, ...`). Khi người dùng yêu cầu cập nhật hoặc có từ mới trong file, AI sẽ tự động đọc danh sách từ mới trong file này, tra cứu phát âm (hiragana, romaji, nghĩa tiếng Việt chuẩn theo Minna no Nihongo) và đồng bộ nạp vào code (`japanese_data/vocab_data.js`).
- AI chỉ lấy từ mới tiếng Nhật từ nguồn `datasss/jp/vocab/voca.txt` này, không tự ý thêm các từ nằm ngoài danh sách người dùng đã ghi trong file.
