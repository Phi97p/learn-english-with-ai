---
name: sync-japanese-grammar
description: Use this skill whenever the user adds, updates, or modifies Japanese grammar practice files in datasss/jp/ngu_phap/ (such as bai_1.txt, bai_2.txt). Guides parsing multiple-choice questions, options A/B/C/D, answers, generating clear grammatical explanations, and syncing directly into JA_GRAMMAR_DATA in japanese_data/grammar_data.js.
---

# Sync Japanese Grammar Skill (Luyện Tập Ngữ Pháp Tiếng Nhật Tổng Hợp)

Kỹ năng đồng bộ và cập nhật dữ liệu câu hỏi trắc nghiệm ngữ pháp tiếng Nhật từ thư mục `datasss/jp/ngu_phap/` vào hệ thống ứng dụng web (`japanese_data/grammar_data.js`).

---

## 1. Nguyên Tắc & Quy Chuẩn Đề Thi Ngữ Pháp

> [!IMPORTANT]
> **Quy chuẩn đề thi & Chấm điểm**:
> 1. **Dạng câu hỏi trắc nghiệm**: Gồm 4 phương án lựa chọn A, B, C, D.
> 2. **Chấm điểm**: Mỗi câu đúng được 1 điểm. Tổng điểm tương ứng với số câu trong đề.
> 3. **Gom theo bài & Tổng hợp**: Hệ thống tự động gom câu hỏi theo từng bài học (`bai_1`, `bai_2`...) và cung cấp tùy chọn "🎯 Đề tổng hợp (Tất cả các bài)".
> 4. **Ngẫu nhiên 30 câu**: Mỗi lần làm bài hệ thống sẽ xáo trộn ngẫu nhiên và rút ra tối đa 30 câu (nếu bài học có < 30 câu thì lấy toàn bộ số câu hiện có).
> 5. **Không lưu lịch sử**: Trạng thái làm bài là phiên tạm thời (in-memory), không lưu kết quả vào `localStorage` hay ổ cứng.

---

## 2. Định Dạng File Nguồn (`datasss/jp/ngu_phap/bai_x.txt`)

Hệ thống hỗ trợ cú pháp tự nhiên, linh hoạt trong file text:

```text
Bai [Số]: [Tên bài học / Điểm ngữ pháp chính]

Cau [Số]: [Nội dung câu hỏi tiếng Nhật có chỗ trống (____)]
A. [Lựa chọn A]
B. [Lựa chọn B]
C. [Lựa chọn C]
D. [Lựa chọn D]
Dap an: [A/B/C/D]
Giai thich: [Giải thích ngữ pháp chi tiết]
```

*Lưu ý:*
- Tiêu đề bài có thể viết: `Bai 1:`, `Bài 1:`, `Bài 2 - Trợ từ...`.
- Câu hỏi có thể viết: `Cau 1:`, `Câu 1:`, hoặc `1. ...`.
- Đáp án có thể viết: `Dap an: A`, `Đáp án: A`, `Ans: A`.
- Nếu người dùng chưa ghi phần `Giai thich:`, AI có trách nhiệm phân tích ngữ pháp theo giáo trình Minna no Nihongo để tự động bổ sung giải thích súc tích, chính xác cho câu hỏi.

---

## 3. Quy Trình Đồng Bộ Chi Tiết

Khi có file mới hoặc cập nhật trong thư mục `datasss/jp/ngu_phap/`:

### Bước 1: Quét và Đọc Dữ Liệu Nguồn
- Quét toàn bộ thư mục [datasss/jp/ngu_phap/](file:///d:/phi-learning-english/learn-english-with-ai/datasss/jp/ngu_phap/).
- Đọc từng file bài học (`bai_1.txt`, `bai_2.txt`,...).

### Bước 2: Phân Tích Cú Pháp & Chuẩn Hóa Cấu Trúc
Chuyển đổi từng câu hỏi thành object tiêu chuẩn:
```javascript
{
  id: "b1_q1", // Định danh duy nhất: b[Số bài]_q[Số câu]
  question: "わたし (____) マイク・ミラーです。",
  options: {
    "A": "は",
    "B": "が",
    "C": "を",
    "D": "に"
  },
  answer: "A",
  explanation: "Trợ từ「は」(đọc là wa) dùng sau danh từ để biểu thị chủ đề câu: N1 は N2 です."
}
```

### Bước 3: Cập Nhật File Đích `japanese_data/grammar_data.js`
- Đưa dữ liệu vào object `const JA_GRAMMAR_DATA = { ... }`.
- Luôn đảm bảo dòng gán toàn cục ở cuối file:
  ```javascript
  window.JA_GRAMMAR_DATA = JA_GRAMMAR_DATA;
  ```

### Bước 4: Kiểm Tra Cú Pháp JavaScript
Chạy lệnh kiểm tra tính hợp lệ:
```powershell
node -c japanese_data/grammar_data.js
```

### Bước 5: Kiểm Tra Trực Quan
- Mở ứng dụng hoặc kiểm tra tại `http://localhost:3000`.
- Chuyển sang tab **📝 Luyện tập Ngữ pháp**.
- Xác nhận dropdown `Chọn bài:` hiển thị bài học mới cùng số lượng câu hỏi chính xác.

---

## 4. Kỷ Luật Dự Án Bắt Buộc
- **Tuyệt đối KHÔNG chạy `git push`** trong mọi hoàn cảnh.
- **KHÔNG TỰ Ý `git commit`** trừ khi người dùng có lệnh rõ ràng.
- **Không ghi log tiến độ vào ổ cứng** (tuân thủ nguyên tắc SPA).
