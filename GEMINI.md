# Rule: Đồng Bộ Nhật Ký Học Tập (Study Log & Lộ Trình)

## Bối cảnh
Người dùng thường xuyên học tiếng Anh trên các máy tính/thiết bị khác không có trợ lý AI trực tiếp. Tiến độ, số câu luyện tập, chuỗi ngày streak và lịch sử hội thoại/phát âm được lưu lại qua các file `study_log.json` và `study_log.md`.

## Quy định hành vi cho AI (Bắt buộc tuân thủ)

### 1. Đồng bộ ngay ở câu hỏi/lần tương tác đầu tiên mỗi phiên:
- Mỗi khi bắt đầu một phiên làm việc mới hoặc nhận câu hỏi đầu tiên sau khi người dùng mở ứng dụng/dự án lên:
  - **Luôn đọc kiểm tra `study_log.json` và `study_log.md`** để cập nhật trạng thái học tập mới nhất được thực hiện từ máy khác.
  - Đối chiếu với danh sách bài học trong `data.js` để xác định:
    - **Bài học hiện tại** (`currentLesson`)
    - **Chuỗi ngày học liên tiếp** (`streakDays`)
    - **Số lượng mẫu câu đã nạp** (`wordsLearnedCount`)
    - **Các câu hội thoại và phát âm gần nhất** (`chatHistory`, `spokenSentences`)

### 2. Chào đón và cập nhật lộ trình:
- Trong câu trả lời đầu tiên, hãy ngắn gọn xác nhận tiến độ vừa đồng bộ (ví dụ: *Đã đồng bộ tiến độ: Bài hiện tại: [Tên bài] | Chuỗi: [X] ngày | Đã nạp: [Y] câu*).
- Tiếp tục dẫn dắt vào bài học hoặc giải đáp câu hỏi của người dùng dựa trên đúng tiến độ thực tế đó.

### 3. Đảm bảo tính nhất quán dữ liệu:
- Khi người dùng hoàn thành thêm bài học, câu nói mới cùng AI, hãy đảm bảo cập nhật đồng bộ cả hai file `study_log.json` và `study_log.md`.
