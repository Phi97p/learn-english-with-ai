# Rule: Đồng Bộ Nhật Ký Học Tập (Study Log & Lộ Trình)

## Bối cảnh & Cấu trúc thư mục Log
Người dùng học tiếng Anh trên các máy tính/thiết bị khác nhau (Windows, Mac...). Tiến độ, số câu luyện tập, chuỗi ngày streak và lịch sử hội thoại/phát âm được tự động tổ chức như sau:
- **Thư mục lưu trữ theo tháng:** `logs/study_log_YYYY-MM.json` và `logs/study_log_YYYY-MM.md` (ví dụ: `logs/study_log_2026-10.md`).
- **File tổng quan hiện tại (Root):** `study_log.json` và `study_log.md` (luôn đồng bộ song song với tháng hiện tại để xem nhanh).

## Quy định hành vi cho AI (Bắt buộc tuân thủ)

### 1. Đồng bộ ngay ở câu hỏi/lần tương tác đầu tiên mỗi phiên:
- Mỗi khi bắt đầu một phiên làm việc mới hoặc nhận câu hỏi đầu tiên sau khi người dùng mở ứng dụng/dự án lên:
  - **Luôn đọc kiểm tra `study_log.json` / `study_log.md`** (hoặc file tháng mới nhất trong thư mục `logs/`) để cập nhật trạng thái học tập mới nhất được thực hiện từ máy khác.
  - Đối chiếu với danh sách bài học trong `data.js` để xác định:
    - **Bài học hiện tại** (`currentLesson`)
    - **Chuỗi ngày học liên tiếp** (`streakDays`)
    - **Số lượng mẫu câu đã nạp** (`wordsLearnedCount`)
    - **Các câu hội thoại và phát âm gần nhất** (`chatHistory`, `spokenSentences`)

### 2. Chào đón và cập nhật lộ trình:
- Trong câu trả lời đầu tiên, hãy ngắn gọn xác nhận tiến độ vừa đồng bộ (ví dụ: *Đã đồng bộ tiến độ: Bài hiện tại: [Tên bài] | Chuỗi: [X] ngày | Đã nạp: [Y] câu*).
- Tiếp tục dẫn dắt vào bài học hoặc giải đáp câu hỏi của người dùng dựa trên đúng tiến độ thực tế đó.

### 3. Đánh giá trình độ (Level Assessment) khi được yêu cầu:
- Khi người dùng muốn AI đánh giá trình độ, tiến bộ hay điểm yếu phát âm/ngữ pháp:
  - AI đọc các file theo tháng trong thư mục `logs/` (ví dụ: tháng trước vs tháng này) để phân tích:
    1. Độ phong phú câu từ hội thoại (từ vựng, cấu trúc câu đã dùng).
    2. Độ chính xác phát âm các âm khó và độ dài câu luyện nói.
    3. Tốc độ nạp từ vựng và tính duy trì chuỗi học.
  - Đưa ra nhận xét khách quan, chỉ rõ sự tiến bộ qua từng tháng và đề xuất bài học tiếp theo phù hợp.

### 4. Đảm bảo tính nhất quán dữ liệu:
- Khi hoàn thành thêm bài học, câu nói mới cùng AI, hãy đảm bảo cập nhật đồng bộ cả các file root (`study_log.json`, `study_log.md`) và file theo tháng trong thư mục `logs/`.

