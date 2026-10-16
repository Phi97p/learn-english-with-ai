---
name: sync-japanese-reading
description: Use this skill whenever the user modifies, updates, or adds content to Japanese reading comprehension files in datasss/jp/doc_hieu/ (such as bai_1.txt). Guides parsing, sentence segmentation, Romaji transliteration, Vietnamese translation, and syncing into JA_READING_PASSAGES_DATA in japanese_data/reading_data.js while preserving the fixed screen layout and scrollable container.
---

# Sync Japanese Reading Skill (Đọc hiểu & Shadowing Nhật)

Kỹ năng đồng bộ và cập nhật dữ liệu bài đọc hiểu tiếng Nhật từ thư mục `datasss/jp/doc_hieu/` vào hệ thống ứng dụng web, đảm bảo giữ nguyên kích thước khung nhìn và giao diện người dùng.

---

## 1. Nguyên Tắc Cốt Lõi & Bố Cục Màn Hình (Layout & Scroll Preservation)

> [!IMPORTANT]
> **Giữ nguyên kích thước màn hình hiện tại & Cố định thẻ chức năng**:
> 1. **Kéo dài bằng tab `speaking-challenge-card`**: Khung `.reading-passage-panel` luôn có chiều cao bằng đúng tab `.speaking-challenge-card` bên cạnh (`align-items: stretch; height: 100%; min-height: 0;`), không để lại khoảng trống bên dưới.
> 2. **Không scroll các thẻ chức năng**: Khối hiển thị giọng nói `🎙️ Máy nghe được:` (`.passage-spoken-display`) và hàng nút bấm `🎯 Bấm để nói & Chấm điểm` (`.reading-passage-actions`) **TUYỆT ĐỐI KHÔNG SCROLL**, luôn cố định chắc chắn ở đáy panel (`flex-shrink: 0;`).
> 3. **Chỉ scroll nội dung bài đọc**: Thanh cuộn (scroll) chỉ được áp dụng riêng biệt cho khung chứa các câu văn (`.reading-passage-content`: `flex: 1 1 0px; min-height: 0; overflow-y: auto;`).
> 4. **Không hiển thị tiêu đề trùng lặp**: Không chèn lại khối tiêu đề thừa (`reading-passage-header`) vào bên trong panel bài đọc vì người dùng đã có thanh chọn bài phía trên.
> 5. **Bảo toàn viewport**: Chiều cao giao diện toàn trang luôn vừa vặn trong màn hình desktop (`100vh`), không bị tràn hay kéo giãn dọc trang.

---

## 2. Quy Trình Đồng Bộ Khi `bai_1.txt` Được Cập Nhật

Khi người dùng chỉnh sửa hoặc thêm bài trong `datasss/jp/doc_hieu/bai_1.txt` (hoặc các file `bai_*.txt` khác trong thư mục này):

### Bước 1: Đọc và Phân Tích Nội Dung File Nguồn
- Đọc file [bai_1.txt](file:///d:/phi-learning-english/learn-english-with-ai/datasss/jp/doc_hieu/bai_1.txt).
- Nhận diện các bài học qua tiêu đề `Bai 1:`, `Bai 2`, `Bai 3`, `Bai 4:`,...
- Tách tiêu đề bài (`title`), chủ đề tóm tắt (`topic`), và chọn biểu tượng emoji phù hợp (`icon`: 📖, 🏞️, 📸, 🎨, 🏮,...).

### Bước 2: Tách Câu & Xử Lý Ngôn Ngữ
Mỗi bài đọc cần được phân tách thành từng câu đọc hiểu:
- Dấu kết thúc câu tiếng Nhật: dấu chấm tròn `。`, dấu chấm than `！`, dấu hỏi `？`.
- Các dòng đặc biệt như ngày tháng, tên người (`12月3日 町田 太郎`, `ありがとう ございました。`, danh sách đánh số `1. ...`, `2. ...`) được gom thành 1 đơn vị câu tương ứng để người dùng luyện đọc shadowing.
- Chuẩn hóa:
  - `ja`: Câu tiếng Nhật nguyên bản (có kanji, hiragana, khoảng trắng phân tách từ tự nhiên).
  - `romaji`: Phiên âm Romaji chuẩn Hepburn (viết hoa đầu câu, khoảng trắng rõ ràng giữa các từ, trợ từ wa/o/e).
  - `vi`: Nghĩa tiếng Việt tự nhiên, sát nghĩa và chuẩn theo ngữ cảnh bài học Minna no Nihongo Dokkai.

### Bước 3: Cập Nhật Vào `japanese_data/reading_data.js`
- Mở file [reading_data.js](file:///d:/phi-learning-english/learn-english-with-ai/japanese_data/reading_data.js).
- Cập nhật object `JA_READING_PASSAGES_DATA` với key bài tương ứng (ví dụ: `bai_1`, `bai_2`, `bai_3`, `bai_4`,...):
  ```javascript
  bai_4: {
    title: "Bài 4: 美術館・お祭り (Minna Dokkai)",
    topic: "Tham quan bảo tàng mỹ thuật và lễ hội truyền thống Nhật Bản",
    icon: "🎨",
    fullText: "...",
    sentences: [
      {
        ja: "きのう 友達と 「みんなの 美術館」へ 行きました。",
        romaji: "Kinou tomodachi to 'Minna no Bijutsukan' e ikimashita.",
        vi: "Hôm qua tôi đã cùng bạn đến 'Bảo tàng Mỹ thuật Mọi người'."
      },
      ...
    ]
  }
  ```

### Bước 4: Kiểm Tra Tính Hợp Lệ Code
Chạy lệnh kiểm tra cú pháp file JavaScript:
```powershell
node -c japanese_data/reading_data.js
```
Đảm bảo không có lỗi cú pháp hoặc dấu phẩy thừa/thiếu.

### Bước 5: Kiểm Tra Trực Quan
- Kiểm tra ứng dụng tại `http://localhost:3000`.
- Chuyển sang tab **Đọc hiểu & Shadowing Nhật**.
- Xác nhận dropdown `Chọn Bài đọc:` hiển thị đủ các bài.
- Xác nhận khung `.reading-passage-panel` hiển thị danh sách câu, khi số lượng câu nhiều sẽ cuộn mượt mà (scroll) mà không làm vỡ kích thước màn hình.

---

## 3. Quy Tắc Cấm
- **Tuyệt đối không tự ý `git commit`** nếu không có yêu cầu cụ thể từ người dùng.
- **Tuyệt đối KHÔNG BAO GIỜ chạy `git push`** lên remote repository.
- **Không ghi log ra file ổ cứng** (tuân thủ cơ chế lưu `localStorage`).
