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
- AI chỉ được phép commit (`git commit`) khi có yêu cầu hoặc khi cần lưu lại thay đổi.

## 5. Nguồn dữ liệu bài học (Data Source)
- **Tab Luyện nói tiếng Nhật**: Lấy dữ liệu bài học từ thư mục `datasss/jp/luyen_noi_jp/` để xử lý và nạp vào hệ thống (`japanese_data.js`).
- **Tab Đọc hiểu & Shadowing Nhật**: Lấy dữ liệu bài học từ thư mục `datasss/jp/doc_hieu/` để xử lý và nạp vào hệ thống (`japanese_data.js`).


