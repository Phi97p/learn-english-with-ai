---
name: sync-japanese-grammar
description: Use this skill whenever the user adds, updates, or modifies Japanese grammar practice files in datasss/jp/ngu_phap/ (such as 0_ngu_phap_tong_hop.txt, bai_1.txt, bai_2.txt). Guides parsing multiple-choice questions, options A/B/C/D, answers, generating clear grammatical explanations, ensuring each file maps to an isolated topic without cross-contamination, and syncing directly into JA_GRAMMAR_DATA in japanese_data/grammar_data.js.
---

# Sync Japanese Grammar Skill (Luyện Tập Ngữ Pháp Tiếng Nhật Tổng Hợp)

Kỹ năng đồng bộ và cập nhật dữ liệu câu hỏi trắc nghiệm ngữ pháp tiếng Nhật từ thư mục `datasss/jp/ngu_phap/` vào hệ thống ứng dụng web (`japanese_data/grammar_data.js`).

---

## 1. Nguyên Tắc & Quy Chuẩn Đề Thi Ngữ Pháp

> [!IMPORTANT]
> **Quy chuẩn đề thi & Chấm điểm**:
> 1. **Mỗi file = 1 Chủ đề độc lập (BẮT BUỘC)**: Mỗi một file trong thư mục `datasss/jp/ngu_phap/` (ví dụ: `0_ngu_phap_tong_hop.txt`, `1_tu_vung_tong_hop.txt`, `bai_1.txt`...) tương ứng với đúng **MỘT chủ đề / bài học riêng biệt**. **Tuyệt đối không lấy dữ liệu ở file này gắn vào chủ đề của bài/file khác**.
> 2. **Dạng câu hỏi trắc nghiệm**: Gồm 4 phương án lựa chọn A, B, C, D.
> 3. **Chấm điểm**: Mỗi câu đúng được 1 điểm. Tổng điểm tương ứng với số câu trong đề.
> 4. **Gom theo bài & Tổng hợp**: Hệ thống tự động gom câu hỏi theo từng bài học/chủ đề tương ứng với từng file nguồn độc lập và cung cấp tùy chọn "🎯 Đề tổng hợp (Tất cả các bài)".
> 5. **Ngẫu nhiên 30 câu**: Mỗi lần làm bài hệ thống sẽ xáo trộn ngẫu nhiên và rút ra tối đa 30 câu (nếu bài học có < 30 câu thì lấy toàn bộ số câu hiện có).
> 6. **Không lưu lịch sử**: Trạng thái làm bài là phiên tạm thời (in-memory), không lưu kết quả vào `localStorage` hay ổ cứng.

---

## 2. Định Dạng File Nguồn & Tự Động Phán Định (`datasss/jp/ngu_phap/*.txt`)

AI tự động phán định dạng bài tập dựa trên nội dung người dùng cung cấp:

### Dạng 1: Trắc nghiệm 4 lựa chọn (A, B, C, D)
Khi câu hỏi có các lựa chọn A, B, C, D:
```text
Cau [Số]: [Nội dung câu hỏi có chỗ trống (____)]
A. [Lựa chọn A]
B. [Lựa chọn B]
C. [Lựa chọn C]
D. [Lựa chọn D]
Dap an: [A/B/C/D]
Giai thich: [Giải thích ngữ pháp]
```

### Dạng 2: Bài tập Điền từ (Fill-in-the-blank)
Khi câu hỏi chỉ có chỗ trống `(____)` và từ cần điền (hoặc người dùng chỉ đưa câu hỏi, AI tự phân tích xác định từ cần điền):
```text
Cau [Số]: [Nội dung câu hỏi có chỗ trống (____)]
Dap an: [Từ hoặc cụm từ cần điền]
Giai thich: [Giải thích ngữ pháp]
```

*Lưu ý:*
- Tiêu đề bài có thể viết: `Bai [Số]: [Tên bài]`, `Bài [Số]: [Tên bài]`.
- Câu hỏi có thể viết: `Cau 1:`, `Câu 1:`, hoặc `1. ...`.
- Đáp án có thể viết: `Dap an:`, `Đáp án:`, `Ans:`.
- **Cơ chế tự phán định của AI**:
  - Nếu người dùng nhập dạng trắc nghiệm có 4 phương án: AI bóc tách `options: { A, B, C, D }`.
  - Nếu người dùng nhập dạng điền từ: AI tự động gắn `type: "fill"`, trích xuất hoặc tự phán đoán `answer` chuẩn xác cùng các biến thể chấp nhận được `acceptable_answers` (Hiragana/Kanji/Romaji).
  - Nếu người dùng chưa ghi phần `Giai thich:`, AI có trách nhiệm phân tích ngữ pháp theo giáo trình Minna no Nihongo để tự động bổ sung giải thích súc tích, chính xác cho câu hỏi.

---

## 3. Quy Trình Đồng Bộ Chi Tiết

Khi có file mới hoặc cập nhật trong thư mục `datasss/jp/ngu_phap/`:

### Bước 1: Quét và Đọc Dữ Liệu Nguồn
- Quét toàn bộ thư mục [datasss/jp/ngu_phap/](file:///d:/phi-learning-english/learn-english-with-ai/datasss/jp/ngu_phap/).
- Đọc từng file chủ đề / bài học (`0_ngu_phap_tong_hop.txt`, `bai_1.txt`, `bai_2.txt`,...).
- **Xử lý độc lập theo từng file**: Mỗi file ánh xạ tới 1 object key riêng biệt trong `JA_GRAMMAR_DATA` (ví dụ: `bai_0`, `bai_1`, `topic_1`...). Toàn bộ câu hỏi trong file nào chỉ thuộc về duy nhất chủ đề của file đó, tuyệt đối không gắn lẫn sang chủ đề của file khác.

### Bước 2: Phân Tích Cú Pháp & Chuẩn Hóa Cấu Trúc
Chuyển đổi từng câu hỏi thành object tiêu chuẩn:

**1. Đối với câu hỏi Trắc nghiệm (A, B, C, D):**
```javascript
{
  id: "b0_q1", // Định danh duy nhất: b[Số bài]_q[Số câu]
  question: "あめ（      ）ふったら、うち（　　）います。",
  options: {
    "A": "が ・ で",
    "B": "が ・ に",
    "C": "を ・ に",
    "D": "を ・ で"
  },
  answer: "B",
  explanation: "Hiện tượng tự nhiên dùng trợ từ「が」. Động từ tồn tại「います」đi với nơi chốn dùng trợ từ「に」."
}
```

**2. Đối với câu hỏi Điền từ (Fill-in-the-blank):**
```javascript
{
  id: "b0_q3",
  type: "fill",
  question: "あした あめが （______）、いえに います。",
  answer: "ふったら",
  acceptable_answers: ["ふったら", "降ったら"],
  explanation: "Chia động từ「ふります」sang thể điều kiện〜たら: ふったら (nếu mưa rơi)."
}
```

### Bước 3: Cập Nhật File Đích `japanese_data/grammar_data.js`
- Đưa dữ liệu vào object `const JA_GRAMMAR_DATA = { ... }`, trong đó mỗi thuộc tính tương ứng với 1 file trong thư mục nguồn:
  ```javascript
  const JA_GRAMMAR_DATA = {
    "bai_0": {
      "title": "Bài 0: Ngữ pháp tổng hợp",
      "questions": [ ... ]
    },
    "bai_1": {
      "title": "Bài 1: ...",
      "questions": [ ... ]
    }
  };
  ```
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
- Xác nhận dropdown `Chọn bài:` hiển thị từng chủ đề bài học độc lập tương ứng với các file trong thư mục nguồn cùng số lượng câu hỏi chính xác.

---

## 4. Kỷ Luật Dự Án Bắt Buộc
- **Tuyệt đối KHÔNG chạy `git push`** trong mọi hoàn cảnh.
- **KHÔNG TỰ Ý `git commit`** trừ khi người dùng có lệnh rõ ràng.
- **Không ghi log tiến độ vào ổ cứng** (tuân thủ nguyên tắc SPA).
