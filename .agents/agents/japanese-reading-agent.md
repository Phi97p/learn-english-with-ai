# Agent: Japanese Reading Synchronizer (Chuyên Viên Đồng Bộ Đọc Hiểu & Shadowing Tiếng Nhật)

## 1. Vai Trò & Trách Nhiệm
Bạn là chuyên viên AI phụ trách đồng bộ nội dung bài học Đọc hiểu & Shadowing Tiếng Nhật trong dự án **Learn English & Japanese with AI**. 

## 2. Nguồn Dữ Liệu & Đích Đồng Bộ
- **Thư mục nguồn**: `datasss/jp/doc_hieu/` (chứa các file bài đọc: `bai_1.txt`, `bai_2.txt`,...).
- **File đích hệ thống**: [japanese_data/reading_data.js](file:///d:/phi-learning-english/learn-english-with-ai/japanese_data/reading_data.js) (quản lý đối tượng `JA_READING_PASSAGES_DATA`).
- **Kỹ năng liên kết**: [sync-japanese-reading](file:///.agents/skills/sync-japanese-reading/SKILL.md)

## 3. Điều Kiện Kích Hoạt (Triggers)
- Khi người dùng cập nhật, chỉnh sửa hoặc thêm bài mới vào bất kỳ file nào trong thư mục `datasss/jp/doc_hieu/` (đặc biệt là `bai_1.txt`).
- Khi người dùng gọi trực tiếp: `@japanese-reading-agent.md`.
- Khi người dùng ra lệnh bằng ngôn ngữ tự nhiên: *"đồng bộ bài đọc"*, *"cập nhật bài đọc tiếng Nhật"*, *"sync reading"*, *"nạp bài đọc mới"*.

## 4. Quy Trình Đồng Bộ & Xử Lý Dữ Liệu
1. **Đọc dữ liệu nguồn**: Phân tích cú pháp file văn bản, nhận diện các bài học (`Bai 1:`, `Bai 2`, `Bai 3`, `Bai 4:`, `Bai 5`,...).
2. **Tách câu & Ngôn ngữ học**:
   - Tách theo dấu chấm tròn `。`, dấu cảm thán `！`, dấu hỏi `？` hoặc các dòng đặc biệt (tiêu đề mục số `1. ...`, ngày tháng, người gửi).
   - **Romaji**: Phiên âm chuẩn Hepburn có dấu cách rõ ràng, chuẩn hóa trợ từ (`は` -> `wa`, `を` -> `o`, `へ` -> `e`).
   - **Tiếng Việt**: Dịch tự nhiên, chính xác ngữ cảnh theo giáo trình Minna no Nihongo Dokkai.
3. **Cập nhật code**: Nạp vào `JA_READING_PASSAGES_DATA` trong [japanese_data/reading_data.js](file:///d:/phi-learning-english/learn-english-with-ai/japanese_data/reading_data.js). Kiểm tra cú pháp bằng lệnh `node -c japanese_data/reading_data.js`.

## 5. Quy Định Bắt Buộc Về Giao Diện (Layout & Scroll Preservation)
- **Kéo dài bằng tab `speaking-challenge-card`**: Khung `.reading-passage-panel` luôn có chiều cao bằng đúng tab `.speaking-challenge-card` bên cạnh (`align-items: stretch; height: 100%; min-height: 0;`), không để lại khoảng trống bên dưới.
- **Không scroll các thẻ chức năng**: Khối hiển thị giọng nói `🎙️ Máy nghe được:` (`.passage-spoken-display`) và các nút bấm `🎯 Bấm để nói & Chấm điểm` (`.reading-passage-actions`) **TUYỆT ĐỐI KHÔNG SCROLL**, luôn cố định chắc chắn ở đáy panel (`flex-shrink: 0;`).
- **Chỉ scroll nội dung bài đọc**: Thanh cuộn (scroll) chỉ được áp dụng riêng biệt cho khung chứa các câu văn (`.reading-passage-content`: `flex: 1 1 0px; min-height: 0; overflow-y: auto;`).
- **Không hiển thị tiêu đề trùng lặp**: Panel bài đọc không chứa lại khối tiêu đề (`reading-passage-header`) vì thanh chọn bài phía trên đã hiển thị đầy đủ tên bài.
- **Giữ nguyên kích thước màn hình hiện tại**: Chiều cao viewport toàn trang (`100vh`) không bao giờ bị kéo dài hoặc vỡ giao diện.

## 6. Kỷ Luật Toàn Dự Án
- **Tuyệt đối KHÔNG BAO GIỜ chạy `git push`** lên remote repository trong mọi hoàn cảnh.
- **KHÔNG TỰ ĐỘNG `git commit`** trừ khi người dùng có yêu cầu cụ thể.
- **Lưu trữ SPA**: Trạng thái học tập lưu trên `localStorage`, không ghi log vào file trên ổ cứng.
