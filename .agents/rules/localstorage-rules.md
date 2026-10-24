# Rule: Quy Tắc Cốt Lõi Quản Lý LocalStorage

## Nguyên tắc hoạt động
1. **Ưu tiên bộ nhớ tạm (In-memory / Session) & Clear khi reload/đóng trang**:
   - Trạng thái các bài học, bài tập trắc nghiệm, kanji, đọc hiểu ưu tiên chạy trên bộ nhớ tạm của phiên làm việc.
   - Ưu tiên dọn dẹp hoặc clear `localStorage` khi đóng ứng dụng hoặc tải lại trang để tránh tích tụ dữ liệu thừa.
2. **Không lưu quá nhiều dữ liệu**:
   - Tuyệt đối không lưu dữ liệu lớn, toàn bộ bài học, danh sách từ điển hay lịch sử bài làm vào `localStorage`.
   - Giữ cho `localStorage` luôn nhẹ nhàng, không gây ảnh hưởng đến hiệu năng trình duyệt.
3. **Bắt buộc thông báo trước khi lưu vào localStorage**:
   - Trong bất kỳ trường hợp nào cần lưu trạng thái hoặc cấu hình vào `localStorage`, AI phải thông báo rõ cho người dùng (nêu rõ key lưu trữ, dung lượng và mục đích sử dụng) trước khi thực hiện.
