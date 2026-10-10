# Hướng Dẫn & Quy Định Dự Án (Tiếng Anh & Tiếng Nhật với AI)

## 1. Lưu trữ tiến độ
- Ứng dụng hoạt động theo cơ chế Single Page Application (SPA), lưu trực tiếp trạng thái học tập (streak ngày, mẫu câu đã nạp, bài học đang chọn, từ vựng tùy chỉnh) trong `localStorage` của trình duyệt người dùng.
- Không sử dụng file log ghi trên ổ cứng (`study_log.md`, `study_log.json` hay thư mục `logs/` đã được loại bỏ theo yêu cầu của người dùng để giữ dự án gọn nhẹ, sạch sẽ).

## 2. Hỗ trợ học tập
- Khi người dùng sao chép tóm tắt tiến độ (nút "📋 Sao chép cho AI") hoặc đưa ra câu hỏi về phát âm, từ vựng, ngữ pháp của Tiếng Anh hay Tiếng Nhật:
  - Giải thích tận tình, ngắn gọn, dễ hiểu.
  - Phân tích phát âm, mẹo nhớ từ, đưa ví dụ thực tế trong đời sống.
  - Khuyến khích người dùng luyện nói shadowing to rõ ràng.
